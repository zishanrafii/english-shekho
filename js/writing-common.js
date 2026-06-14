/* ══════════════════════════════════════════════════════════
   WRITING LAB — SHARED MODULE
   Common logic used by every writing module page:
   sentence-builder.html, paragraph-writing.html,
   essay-writing.html, email-writing.html, story-writing.html
   ══════════════════════════════════════════════════════════ */
import {
  requireAuth, auth, db,
  doc, setDoc, getDoc, updateDoc,
  collection, addDoc,
  serverTimestamp, increment,
  signOut
} from "./firebase-config.js";

/* ══════════════════════════════════════
   TOAST
══════════════════════════════════════ */
export function toast(msg, type="success"){
  if(window._fbToast){ window._fbToast(msg, type); return; }
  const t = document.getElementById("toast");
  if(!t) return;
  t.textContent = msg; t.classList.add("show");
  setTimeout(()=>t.classList.remove("show"), 2800);
}

/* ══════════════════════════════════════
   PAGE SETUP — topbar avatar/name, logout, footer year
   Call once per page. onUserReady(user) runs after auth check.
══════════════════════════════════════ */
export function setupCommonPage(onUserReady){
  const yr = new Date().getFullYear();
  const fy1 = document.getElementById("footer-year");
  const fy2 = document.getElementById("footer-year2");
  if(fy1) fy1.textContent = yr;
  if(fy2) fy2.textContent = yr;

  const logoutBtn = document.getElementById("btn-logout");
  if(logoutBtn){
    logoutBtn.onclick = async () => {
      await signOut(auth);
      window.location.href = "index.html";
    };
  }

  requireAuth(async user => {
    window._currentUser = user;
    const nameEl = document.getElementById("nav-name");
    if(nameEl) nameEl.textContent = user.displayName || user.email.split("@")[0];
    const avatar = document.getElementById("nav-avatar");
    if(avatar && user.photoURL){
      avatar.style.backgroundImage = `url(${user.photoURL})`;
      avatar.style.backgroundSize  = "cover";
      avatar.textContent = "";
    }
    if(onUserReady) await onUserReady(user);
  });
}

/* ══════════════════════════════════════
   EDITOR STATE
══════════════════════════════════════ */
let currentTask = null;
export function getCurrentTask(){ return currentTask; }

/* ══════════════════════════════════════
   GENERIC EDITOR — tabs + prompt + hints
   Every editor-based page (paragraph/essay/email/story)
   uses fixed element IDs: #task-tabs, #prompt, #hints,
   #main-editor, #word-count, #feedback-panel
══════════════════════════════════════ */
export function initEditor(tasks){
  const tabsEl = document.getElementById("task-tabs");
  tabsEl.innerHTML = tasks.map((t,i)=>`<div class="task-tab ${i===0?'active':''}" data-idx="${i}">${t.label}</div>`).join("");
  tabsEl.querySelectorAll(".task-tab").forEach(tab=>{
    tab.addEventListener("click",()=>{
      tabsEl.querySelectorAll(".task-tab").forEach(t=>t.classList.remove("active"));
      tab.classList.add("active");
      loadEditorTask(tasks, parseInt(tab.dataset.idx));
    });
  });
  loadEditorTask(tasks, 0);
}

export function loadEditorTask(tasks, idx){
  currentTask = tasks[idx];
  const t = currentTask;
  const promptEl = document.getElementById("prompt");
  const hintsEl  = document.getElementById("hints");

  promptEl.innerHTML = `
    <div class="prompt-card">
      <div class="prompt-eyebrow">✍️ Writing Prompt</div>
      <div class="prompt-title">${t.label}</div>
      <div class="prompt-desc">${t.prompt}</div>
      <div class="prompt-meta">
        <span class="pmeta-tag pt-level">${t.level}</span>
        <span class="pmeta-tag pt-words">📝 ${t.words} words</span>
        <span class="pmeta-tag pt-xp">⚡ +${t.xp} XP</span>
      </div>
    </div>`;

  if(hintsEl && t.hints){
    hintsEl.innerHTML = t.hints.map(h=>`
      <div class="hint-item"><span class="hint-icon">${h.icon}</span><div class="hint-text">${h.text}</div></div>
    `).join("");
    if(t.usefulWords){
      hintsEl.innerHTML += `
        <div class="useful-words">
          <div class="uw-title">Useful Words</div>
          <div class="uw-chips">${t.usefulWords.map(w=>`<span class="uw-chip" data-action="insert-word" data-word="${w}">${w}</span>`).join("")}</div>
        </div>`;
    }
  }

  // clear editor
  const editorEl = document.getElementById("main-editor");
  if(editorEl) editorEl.value = "";
  const wcEl = document.getElementById("word-count");
  if(wcEl) wcEl.textContent = "0";

  // hide feedback
  const fp = document.getElementById("feedback-panel");
  if(fp) fp.classList.remove("show");
}

/* ══════════════════════════════════════
   EDITOR UTILS
══════════════════════════════════════ */
export function updateWordCount(){
  const el = document.getElementById("main-editor");
  if(!el) return;
  const words = el.value.trim().split(/\s+/).filter(Boolean).length;
  const cEl = document.getElementById("word-count");
  if(cEl) cEl.textContent = words;
}

export function insertText(before, after){
  const el = document.getElementById("main-editor");
  if(!el) return;
  const s = el.selectionStart, e = el.selectionEnd;
  const sel = el.value.substring(s, e);
  el.value = el.value.substring(0,s) + before + sel + after + el.value.substring(e);
  el.focus();
  updateWordCount();
}

export function insertWord(word){
  const el = document.getElementById("main-editor");
  if(!el) return;
  const pos = el.selectionStart;
  el.value = el.value.substring(0,pos) + word + " " + el.value.substring(pos);
  el.focus();
  updateWordCount();
}

export function clearEditor(){
  const el = document.getElementById("main-editor");
  if(el){ el.value = ""; updateWordCount(); }
}

/* ══════════════════════════════════════
   SAVE DRAFT
══════════════════════════════════════ */
export async function saveDraft(type){
  if(!window._currentUser){ toast("⚠️ Login করুন।","error"); return; }
  const editor = document.getElementById("main-editor");
  if(!editor || !editor.value.trim()){ toast("⚠️ কিছু লিখুন আগে।","error"); return; }
  try {
    await setDoc(
      doc(db,"writing_drafts", `${window._currentUser.uid}_${type}_${currentTask?.id||"t0"}`),
      {
        uid: window._currentUser.uid,
        type: type,
        taskId: currentTask?.id||"",
        taskLabel: currentTask?.label||"",
        content: editor.value,
        wordCount: editor.value.trim().split(/\s+/).filter(Boolean).length,
        savedAt: serverTimestamp()
      }
    );
    toast("💾 Draft saved!");
  } catch(e){ toast("❌ Save failed: "+e.message,"error"); }
}

/* ══════════════════════════════════════
   REAL AI CHECK — Claude API
══════════════════════════════════════ */
export const WRITING_TYPE_LABELS = {
  paragraph: "Paragraph",
  essay:     "Essay",
  email:     "Email",
  story:     "Story / Narrative"
};

export async function checkWriting(type){
  const editor = document.getElementById("main-editor");
  if (!editor || editor.value.trim().split(/\s+/).filter(Boolean).length < 10) {
    toast("⚠️ কমপক্ষে ১০ শব্দ লিখুন তারপর check করুন।"); return;
  }

  const fp   = document.getElementById("feedback-panel");
  const text = editor.value.trim();
  const label = WRITING_TYPE_LABELS[type] || "Writing";

  fp.innerHTML = `
    <div class="fp-head">
      <span class="fp-icon">🤖</span>
      <span class="fp-title">AI Writing Feedback<span class="fp-badge" style="background:rgba(129,140,248,.2);color:#818cf8;">Analyzing...</span></span>
    </div>
    <div class="fp-body" style="text-align:center;padding:2rem 1rem;color:var(--muted);">
      <div style="font-size:2rem;margin-bottom:.8rem;animation:spin 1s linear infinite;">⚙️</div>
      <div>Claude AI তোমার লেখা বিশ্লেষণ করছে...</div>
    </div>`;
  fp.classList.add("show");
  fp.scrollIntoView({ behavior: "smooth", block: "nearest" });

  try {
    const res = await fetch("/api/ai-check", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, type: type || "paragraph" })
    });

    if (!res.ok) throw new Error("Server error: " + res.status);
    const fb = await res.json();
    if (fb.error) throw new Error(fb.error);

    fp.innerHTML = `
      <div class="fp-head">
        <span class="fp-icon">🤖</span>
        <span class="fp-title">AI Writing Feedback<span class="fp-badge" style="background:rgba(52,211,153,.15);color:#34d399;">Claude AI</span></span>
      </div>
      <div class="fp-body">
        <div class="fp-score-row">
          <div class="fp-score-item"><div class="fps-val" style="color:#34d399;">${fb.grammar}%</div><div class="fps-label">Grammar</div></div>
          <div class="fp-score-item"><div class="fps-val" style="color:#818cf8;">${fb.vocabulary}%</div><div class="fps-label">Vocabulary</div></div>
          <div class="fp-score-item"><div class="fps-val" style="color:#2dd4bf;">${fb.structure}%</div><div class="fps-label">Structure</div></div>
          <div class="fp-score-item"><div class="fps-val" style="color:#f5c842;">${fb.overall}%</div><div class="fps-label">Overall</div></div>
        </div>
        ${fb.summary ? `<div class="fp-section" style="background:rgba(129,140,248,.06);border-radius:10px;padding:.8rem 1rem;margin-bottom:.5rem;">
          <div style="font-size:13px;color:var(--sub);line-height:1.7;">${fb.summary}</div>
        </div>` : ""}
        <div class="fp-section">
          <div class="fp-section-title" style="color:#34d399;">✅ Strengths</div>
          ${fb.strengths.map(s => `<div class="fp-item"><div class="fp-dot" style="background:#34d399;"></div>${s}</div>`).join("")}
        </div>
        <div class="fp-section">
          <div class="fp-section-title" style="color:#fb7185;">🔧 Areas to Improve</div>
          ${fb.improve.map(s => `<div class="fp-item"><div class="fp-dot" style="background:#fb7185;"></div>${s}</div>`).join("")}
        </div>
        ${fb.corrected ? `<div class="fp-section">
          <div class="fp-section-title" style="color:#f5c842;">✏️ Corrected Sentence</div>
          <div class="fp-item" style="font-style:italic;color:var(--text);">"${fb.corrected}"</div>
        </div>` : ""}
      </div>`;
    fp.classList.add("show");
    toast("🤖 AI feedback ready!");
    fp.scrollIntoView({ behavior: "smooth", block: "nearest" });

  } catch (err) {
    console.error("AI check failed:", err);
    fp.innerHTML = `
      <div class="fp-head">
        <span class="fp-icon">⚠️</span>
        <span class="fp-title">AI Check ব্যর্থ হয়েছে</span>
      </div>
      <div class="fp-body" style="color:var(--muted);font-size:13px;padding:.5rem 0;">
        Internet connection চেক করো অথবা একটু পরে আবার চেষ্টা করো।
      </div>`;
    toast("❌ AI feedback নেওয়া যায়নি", "error");
  }
}

/* ══════════════════════════════════════
   SUBMIT WRITING
══════════════════════════════════════ */
export async function submitWriting(type){
  if(!window._currentUser){ toast("⚠️ Login করুন।","error"); return; }
  const editor = document.getElementById("main-editor");
  if(!editor || editor.value.trim().length < 20){
    toast("⚠️ আরেকটু বেশি লিখুন তারপর submit করুন।","error"); return;
  }
  const xp    = currentTask?.xp || 75;
  const words = editor.value.trim().split(/\s+/).filter(Boolean).length;
  try {
    await addDoc(collection(db,"writings"),{
      uid:         window._currentUser.uid,
      displayName: window._currentUser.displayName || "",
      type:        type,
      taskId:      currentTask?.id||"",
      taskLabel:   currentTask?.label||"",
      content:     editor.value,
      wordCount:   words,
      xpEarned:    xp,
      score:       null,
      submittedAt: serverTimestamp()
    });
    await updateDoc(doc(db,"users", window._currentUser.uid),{
      xp:           increment(xp),
      writingCount: increment(1),
      totalWords:   increment(words)
    });
    toast(`🎉 Submitted! +${xp} XP অর্জন! (${words} words)`);
    editor.value = "";
    const wc = document.getElementById("word-count"); if(wc) wc.textContent="0";
  } catch(e){ toast("❌ Submit failed: "+e.message,"error"); }
}

/* ══════════════════════════════════════
   EDITOR TOOLBAR EVENT DELEGATION
   Attach once per page. `type` = paragraph/essay/email/story
══════════════════════════════════════ */
export function setupEditorToolbar(type){
  document.addEventListener("click", function(e){
    const el = e.target.closest("[data-action]");
    if(!el) return;
    const action = el.dataset.action;
    switch(action){
      case "insert-word": insertWord(el.dataset.word||""); break;
      case "bold":    insertText("**","**"); break;
      case "italic":  insertText("_","_");   break;
      case "quote":   insertText('"','"');   break;
      case "para":    insertText("\n\n","");   break;
      case "subject-email": insertText("Subject: ",""); break;
      case "dear-email":    insertText("Dear ","");    break;
      case "regards-email": insertText("Regards,\n",""); break;
      case "clear":   clearEditor(); break;
      case "save":    saveDraft(type); break;
      case "check":   checkWriting(type); break;
      case "submit":  submitWriting(type); break;
    }
  });
  const editor = document.getElementById("main-editor");
  if(editor) editor.addEventListener("input", updateWordCount);
}
