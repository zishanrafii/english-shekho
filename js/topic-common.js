/* =============================================
   SHARED TOPIC LESSON PAGE LOGIC
   Used by /topics/<level>/<topic>.html
============================================= */
import {
  auth, db, doc, getDoc, updateDoc, increment, arrayUnion,
  requireAuth, signOut, toast
} from "./firebase-config.js";

/**
 * Initialize a topic lesson page.
 * @param {Object} cfg
 * @param {string} cfg.id     - topic id, e.g. "a1-t1"
 * @param {number} cfg.xp     - XP reward for completing this topic
 */
export function initTopic(cfg) {
  /* ── scroll progress bar ── */
  const bar = document.getElementById("prog");
  if (bar) {
    window.addEventListener("scroll", () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const pct = max > 0 ? (h.scrollTop / max) * 100 : 0;
      bar.style.width = Math.min(100, Math.max(0, pct)) + "%";
    });
  }

  requireAuth(async (user) => {
    const ref = doc(db, "users", user.uid);
    const snap = await getDoc(ref);
    const data = snap.exists() ? snap.data() : {};

    /* ── avatar / name in topbar ── */
    const av = document.getElementById("nav-av");
    if (av) {
      const photo = data.photoURL || user.photoURL || "";
      const name = data.displayName || user.displayName || "Learner";
      if (photo) {
        av.innerHTML = `<img src="${photo}" alt="${name}">`;
      } else {
        av.textContent = name[0]?.toUpperCase() || "?";
      }
      av.onclick = () => (location.href = "../../profile.html");
    }

    /* ── logout ── */
    const logoutBtn = document.getElementById("btn-logout");
    if (logoutBtn) {
      logoutBtn.onclick = async () => {
        await signOut(auth);
        location.href = "../../index.html";
      };
    }

    /* ── mark-complete button ── */
    const gp = data.grammarProgress || {};
    const done = gp.done || [];
    const btn = document.getElementById("complete-btn");
    if (btn) {
      if (done.includes(cfg.id)) {
        setBtnDone(btn);
      } else {
        btn.addEventListener("click", async () => {
          if (btn.disabled) return;
          btn.disabled = true;
          btn.textContent = "⏳ Saving...";
          try {
            await updateDoc(ref, {
              xp: increment(cfg.xp),
              "grammarProgress.done": arrayUnion(cfg.id),
            });
            setBtnDone(btn);
            toast(`🎉 অভিনন্দন! +${cfg.xp} XP পেয়েছেন।`);
          } catch (e) {
            console.error(e);
            btn.disabled = false;
            btn.textContent = "✅ সম্পন্ন করুন";
            toast("কিছু ভুল হয়েছে, আবার চেষ্টা করুন।", "error");
          }
        });
      }
    }
  });
}

function setBtnDone(btn) {
  btn.textContent = "✅ সম্পন্ন হয়েছে";
  btn.disabled = true;
  btn.classList.add("done");
}

/**
 * Handle a click on a practice-quiz option (.pq-opt).
 * Usage: onclick="pq(this, true)"  /  onclick="pq(this, false)"
 * Marks the clicked option correct/wrong, reveals the right answer,
 * shows the feedback box, and disables the rest of the options.
 */
window.pq = function (el, isCorrect) {
  const wrap = el.closest(".practice-q");
  const opts = wrap.querySelectorAll(".pq-opt");
  const feedback = wrap.querySelector(".pq-feedback");

  if (wrap.dataset.answered === "1") return; // already answered
  wrap.dataset.answered = "1";

  opts.forEach((o) => (o.style.pointerEvents = "none"));

  if (isCorrect) {
    el.classList.add("correct");
  } else {
    el.classList.add("wrong");
    const correctOpt = wrap.querySelector("[data-correct='1']");
    if (correctOpt) correctOpt.classList.add("correct");
  }

  if (feedback) {
    feedback.classList.add("show", isCorrect ? "correct" : "wrong");
  }

  // track score on the page
  window.__pqTotal = (window.__pqTotal || 0) + 1;
  if (isCorrect) window.__pqCorrect = (window.__pqCorrect || 0) + 1;
  const scoreEl = document.getElementById("pq-score");
  if (scoreEl) {
    scoreEl.innerHTML = `Score: <b>${window.__pqCorrect || 0} / ${window.__pqTotal}</b>`;
  }
};
