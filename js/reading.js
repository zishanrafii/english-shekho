/* =====================================================
   ENGLISH SHEKHO — READING CENTER LOGIC
   ===================================================== */
import {
  requireAuth, auth, db,
  doc, getDoc, updateDoc, setDoc,
  collection, addDoc, getDocs,
  query, orderBy, limit, where,
  serverTimestamp, increment, arrayUnion,
  signOut
} from "./firebase-config.js";

import { PASSAGES, CATEGORIES } from "./reading-data.js";

/* ══════════════════════════════════════
   STATE
══════════════════════════════════════ */
let currentUser       = null;
let currentPassage    = null;
let activeCat         = "All";
let activeLevel       = "All";
let searchQuery       = "";
let completedReadings = new Set();   // passage ids done (persisted in Firestore)
let totalXP           = 0;
let totalReadCount    = 0;

let quizIdx       = 0;
let quizScore     = 0;
let quizAnswered  = false;

let readStartTime = null;            // for reading-speed calculation

const LEVELS = ["All","A1","A2","B1","B2","C1"];

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
function toast(msg, type = "success") {
  const t = document.getElementById("toast");
  if (!t) return;
  t.textContent = msg;
  t.style.borderLeftColor = type === "error" ? "#fb7185" : type === "info" ? "#818cf8" : "#fb923c";
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}

/* ══════════════════════════════════════
   HERO STATS
══════════════════════════════════════ */
function updateHeroStats() {
  document.getElementById("h-total").textContent     = PASSAGES.length;
  document.getElementById("h-completed").textContent = completedReadings.size;
  document.getElementById("h-xp").textContent         = totalXP;
}

/* ══════════════════════════════════════
   BUILD CATEGORY + LEVEL TABS
══════════════════════════════════════ */
function buildTabs() {
  const catTabs = document.getElementById("cat-tabs");
  catTabs.innerHTML = CATEGORIES.map(c =>
    `<div class="cat-tab ${c === activeCat ? "active" : ""}" data-cat="${c}">${c}</div>`
  ).join("");

  const lvlTabs = document.getElementById("level-tabs");
  lvlTabs.innerHTML = LEVELS.map(l =>
    `<div class="lvl-tab ${l === activeLevel ? "active" : ""}" data-lvl="${l}">${l}</div>`
  ).join("");
}

/* ══════════════════════════════════════
   BUILD PASSAGE GRID
══════════════════════════════════════ */
function buildPassageGrid() {
  const grid = document.getElementById("passage-grid");

  let list = PASSAGES;
  if (activeCat !== "All")   list = list.filter(p => p.category === activeCat);
  if (activeLevel !== "All") list = list.filter(p => p.level === activeLevel);
  if (searchQuery)            list = list.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()));

  grid.innerHTML = list.map(p => {
    const done = completedReadings.has(p.id);
    return `
    <div class="passage-card ${done ? "completed" : ""}" data-id="${p.id}" style="--pc-color:${p.border};--pc-soft:${p.color};--pc-border:${p.border};">
      <div class="pc-top">
        <div class="pc-icon-box">${p.icon}</div>
        ${done ? `<div class="pc-check">✓</div>` : `<span class="pc-level-badge">${p.level}</span>`}
      </div>
      <div class="pc-title">${p.title}</div>
      <div class="pc-cat">${p.category} · ${p.level}</div>
      <div class="pc-foot">
        <span>⏱ ${p.readMinutes} min</span>
        <span class="pc-xp">+${p.xp} XP</span>
      </div>
    </div>`;
  }).join("") || `<div style="color:var(--muted);font-size:13px;grid-column:1/-1;text-align:center;padding:2rem;">কোনো passage পাওয়া যায়নি।</div>`;

  document.getElementById("rt-count").textContent = `${list.length} Passages`;
}

/* ══════════════════════════════════════
   OPEN PASSAGE READER
══════════════════════════════════════ */
function highlightVocab(text, vocab) {
  let result = text;
  Object.keys(vocab).forEach(word => {
    const re = new RegExp(`\\b(${word.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})\\b`, "i");
    result = result.replace(re, `<span class="vocab-word" data-word="${word}">$1</span>`);
  });
  return result;
}

function openPassage(id) {
  const p = PASSAGES.find(p => p.id === id);
  if (!p) return;
  currentPassage = p;
  readStartTime  = Date.now();
  quizIdx        = 0;
  quizScore      = 0;
  quizAnswered   = false;

  document.getElementById("reader-icon").textContent  = p.icon;
  document.getElementById("reader-title").textContent = p.title;
  document.getElementById("reader-meta").innerHTML = `
    <span class="rm-pill">${p.category}</span>
    <span class="rm-pill">${p.level}</span>
    <span class="rm-pill">⏱ ${p.readMinutes} min</span>
    <span class="rm-pill">⭐ ${p.xp} XP</span>
  `;

  document.getElementById("passage-text").innerHTML = p.text
    .map(para => `<p>${highlightVocab(para, p.vocab)}</p>`)
    .join("");

  document.getElementById("quiz-panel").classList.remove("show");
  document.getElementById("quiz-result").classList.remove("show");
  document.getElementById("reading-progress-fill").style.width = "0%";
  document.getElementById("btn-finish-reading").disabled = false;
  document.getElementById("btn-finish-reading").textContent = "✅ Reading শেষ করুন";

  document.querySelector(".list-screen").classList.add("hide");
  document.getElementById("reader-screen").classList.add("show");
  window.scrollTo({ top: 0, behavior: "smooth" });

  trackScrollProgress();
}

function closeReader() {
  document.querySelector(".list-screen").classList.remove("hide");
  document.getElementById("reader-screen").classList.remove("show");
  buildPassageGrid();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ══════════════════════════════════════
   SCROLL PROGRESS (inside reader card)
══════════════════════════════════════ */
function trackScrollProgress() {
  const card = document.getElementById("reader-card-inner");
  if (!card) return;
  function onScroll() {
    const rect      = card.getBoundingClientRect();
    const totalH    = card.scrollHeight;
    const viewportH = window.innerHeight;
    const scrolled  = Math.min(Math.max(0, viewportH - rect.top), totalH);
    const pct       = Math.min(100, Math.round((scrolled / totalH) * 100));
    document.getElementById("reading-progress-fill").style.width = pct + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ══════════════════════════════════════
   VOCAB TOOLTIP
══════════════════════════════════════ */
function showVocabTooltip(el) {
  closeAllTooltips();
  const word = el.dataset.word;
  const info = currentPassage.vocab[word];
  if (!info) return;

  const tip = document.createElement("div");
  tip.className = "vocab-tooltip show";
  tip.innerHTML = `<span class="vt-pos">${info.pos}</span>${info.meaning_bn}`;
  el.appendChild(tip);
}
function closeAllTooltips() {
  document.querySelectorAll(".vocab-tooltip").forEach(t => t.remove());
}

/* ══════════════════════════════════════
   FINISH READING → SHOW QUIZ
══════════════════════════════════════ */
function finishReading() {
  document.getElementById("btn-finish-reading").disabled = true;
  document.getElementById("btn-finish-reading").textContent = "✓ সম্পন্ন";
  document.getElementById("quiz-panel").classList.add("show");
  document.getElementById("quiz-result").classList.remove("show");
  loadQuestion(0);
  document.getElementById("quiz-panel").scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ══════════════════════════════════════
   QUIZ LOGIC
══════════════════════════════════════ */
function loadQuestion(idx) {
  quizIdx      = idx;
  quizAnswered = false;
  const quiz   = currentPassage.quiz;
  const q      = quiz[idx];

  document.getElementById("quiz-progress-dots").innerHTML = quiz.map((_, i) =>
    `<div class="qpd ${i < idx ? "done" : i === idx ? "current" : ""}"></div>`
  ).join("");

  document.getElementById("quiz-q-num").textContent = `প্রশ্ন ${idx + 1}/${quiz.length}`;
  document.getElementById("quiz-q").textContent = q.q;

  const letters = ["A", "B", "C", "D"];
  document.getElementById("quiz-opts").innerHTML = q.opts.map((opt, i) => `
    <div class="quiz-opt" data-idx="${i}">
      <span class="opt-letter">${letters[i]}</span>
      <span>${opt}</span>
    </div>`).join("");

  document.getElementById("quiz-exp").classList.remove("show");
  document.getElementById("btn-next-q").style.display = "none";
}

function answerQuestion(idx) {
  if (quizAnswered) return;
  quizAnswered = true;
  const q = currentPassage.quiz[quizIdx];
  const opts = document.querySelectorAll(".quiz-opt");

  opts.forEach((opt, i) => {
    opt.classList.add("disabled");
    if (i === q.ans) opt.classList.add("correct");
    else if (i === idx) opt.classList.add("wrong");
  });

  if (idx === q.ans) quizScore++;

  const expEl = document.getElementById("quiz-exp");
  expEl.textContent = "💡 " + q.exp;
  expEl.classList.add("show");

  document.getElementById("btn-next-q").style.display = "inline-flex";
  document.getElementById("btn-next-q").textContent =
    quizIdx < currentPassage.quiz.length - 1 ? "পরের প্রশ্ন →" : "ফলাফল দেখুন 🎉";
}

function nextQuestion() {
  if (quizIdx < currentPassage.quiz.length - 1) {
    loadQuestion(quizIdx + 1);
  } else {
    showQuizResult();
  }
}

async function showQuizResult() {
  document.getElementById("quiz-progress-dots").parentElement.style.display = "none";
  document.querySelector(".quiz-body").style.display = "none";
  const result = document.getElementById("quiz-result");
  result.classList.add("show");

  const total = currentPassage.quiz.length;
  const pct   = Math.round((quizScore / total) * 100);
  const emoji = pct >= 80 ? "🎉" : pct >= 50 ? "👍" : "📖";

  document.getElementById("qr-emoji").textContent = emoji;
  document.getElementById("qr-score").textContent  = `${quizScore}/${total} সঠিক`;
  document.getElementById("qr-sub").textContent =
    pct >= 80 ? "অসাধারণ! তুমি passage টা খুব ভালো বুঝেছো।" :
    pct >= 50 ? "ভালো করেছো! আরেকটু practice করলে আরও ভালো হবে।" :
    "আরেকবার passage টা পড়ে দেখো, তুমি পারবে!";

  await saveCompletion();
}

/* ══════════════════════════════════════
   SAVE COMPLETION → FIRESTORE
══════════════════════════════════════ */
async function saveCompletion() {
  if (!currentUser || completedReadings.has(currentPassage.id)) return;

  const xp = currentPassage.xp;
  const readingSeconds = Math.round((Date.now() - readStartTime) / 1000);
  const wordCount = currentPassage.text.join(" ").split(/\s+/).length;
  const wpm = readingSeconds > 0 ? Math.round((wordCount / readingSeconds) * 60) : 0;

  completedReadings.add(currentPassage.id);

  try {
    await addDoc(collection(db, "reading_sessions"), {
      uid:          currentUser.uid,
      displayName:  currentUser.displayName || "",
      passageId:    currentPassage.id,
      passageTitle: currentPassage.title,
      category:     currentPassage.category,
      level:        currentPassage.level,
      quizScore:    quizScore,
      quizTotal:    currentPassage.quiz.length,
      wpm:          wpm,
      xpEarned:     xp,
      completedAt:  serverTimestamp()
    });

    await updateDoc(doc(db, "users", currentUser.uid), {
      xp:                       increment(xp),
      readCount:                increment(1),
      "readingProgress.done":   arrayUnion(currentPassage.id)
    });

    totalXP += xp;
    totalReadCount++;
    updateHeroStats();
    updateLastWpm(wpm);
    toast(`✅ Passage complete! +${xp} XP 🎉`);
  } catch (e) {
    toast("❌ Save failed: " + e.message, "error");
  }
}

function updateLastWpm(wpm) {
  const el = document.getElementById("st-wpm");
  if (el && wpm > 0) el.textContent = wpm;
}

/* ══════════════════════════════════════
   EVENT DELEGATION
══════════════════════════════════════ */
document.addEventListener("click", function (e) {
  // passage card click
  const card = e.target.closest(".passage-card");
  if (card) { openPassage(card.dataset.id); return; }

  // category tab
  const catTab = e.target.closest(".cat-tab");
  if (catTab) {
    activeCat = catTab.dataset.cat;
    buildTabs(); buildPassageGrid();
    return;
  }

  // level tab
  const lvlTab = e.target.closest(".lvl-tab");
  if (lvlTab) {
    activeLevel = lvlTab.dataset.lvl;
    buildTabs(); buildPassageGrid();
    return;
  }

  // vocab word
  const vocabWord = e.target.closest(".vocab-word");
  if (vocabWord) { showVocabTooltip(vocabWord); e.stopPropagation(); return; }
  if (!e.target.closest(".vocab-tooltip")) closeAllTooltips();

  // quiz option
  const quizOpt = e.target.closest(".quiz-opt");
  if (quizOpt && !quizOpt.classList.contains("disabled")) {
    answerQuestion(parseInt(quizOpt.dataset.idx));
    return;
  }

  // data-action buttons
  const actionEl = e.target.closest("[data-action]");
  if (actionEl) {
    switch (actionEl.dataset.action) {
      case "back-to-list":  closeReader(); break;
      case "finish-reading": finishReading(); break;
      case "next-q":         nextQuestion(); break;
      case "go-profile":     window.location.href = "profile.html"; break;
      case "logout":         signOut(auth).then(() => window.location.href = "index.html"); break;
    }
  }
});

document.getElementById("search-input").addEventListener("input", e => {
  searchQuery = e.target.value.trim();
  buildPassageGrid();
});

/* ══════════════════════════════════════
   FOOTER YEAR
══════════════════════════════════════ */
const y = new Date().getFullYear();
document.getElementById("footer-year").textContent  = y;
document.getElementById("footer-year2").textContent = y;

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
requireAuth(async user => {
  currentUser = user;
  document.getElementById("nav-name").textContent = user.displayName || user.email.split("@")[0];
  const av = document.getElementById("nav-avatar");
  if (user.photoURL) { av.style.backgroundImage = `url(${user.photoURL})`; av.style.backgroundSize = "cover"; av.textContent = ""; }

  try {
    const snap = await getDoc(doc(db, "users", user.uid));
    if (snap.exists()) {
      const d = snap.data();
      totalXP        = d.xp || 0;
      totalReadCount = d.readCount || 0;
      const rp = d.readingProgress || {};
      (rp.done || []).forEach(id => completedReadings.add(id));
    }
  } catch (e) { console.warn(e); }

  updateHeroStats();
  buildTabs();
  buildPassageGrid();
});
