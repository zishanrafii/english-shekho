/* =============================================
   FIREBASE CONFIG — shared across all pages
============================================= */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  updateProfile,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import {
  getFirestore,
  doc, setDoc, getDoc, updateDoc, deleteDoc,
  collection, query, orderBy, limit, getDocs,
  addDoc, serverTimestamp, onSnapshot,
  where, increment, arrayUnion
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { getAnalytics, isSupported } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-analytics.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPS0TkQ-9_SO5C0WcYkT459lXFDPaTPXM",
  authDomain: "english-shekho-bd.firebaseapp.com",
  projectId: "english-shekho-bd",
  storageBucket: "english-shekho-bd.firebasestorage.app",
  messagingSenderId: "896374430898",
  appId: "1:896374430898:web:c9b3e2c0ad6bee54393dab",
  measurementId: "G-NVSRP1KFXR"
};

const CLOUDINARY_CLOUD  = "di2zvmckz";
const CLOUDINARY_PRESET = "MyQuiz_App";

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);
const gProvider = new GoogleAuthProvider();

// Analytics only works in supported environments (not file://, not all browsers)
isSupported().then(ok => { if (ok) getAnalytics(app); }).catch(()=>{});

/* ── Cloudinary upload ── */
async function uploadToCloud(file, resourceType = "auto") {
  const fd = new FormData();
  fd.append("file", file);
  fd.append("upload_preset", CLOUDINARY_PRESET);
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD}/${resourceType}/upload`,
    { method: "POST", body: fd }
  );
  if (!res.ok) throw new Error("Upload failed");
  return (await res.json()).secure_url;
}

/* ── Toast notification ── */
function toast(msg, type = "success") {
  document.querySelectorAll(".app-toast").forEach(t => t.remove());
  const t = document.createElement("div");
  t.className = `app-toast ${type}`;
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add("show"));
  setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 300); }, 2800);
}

/* ── Inject toast CSS once ── */
if (!document.getElementById("app-toast-style")) {
  const s = document.createElement("style");
  s.id = "app-toast-style";
  s.textContent = `
    .app-toast{position:fixed;top:20px;right:20px;background:#111827;color:#fff;
      padding:.9rem 1.2rem;border-radius:16px;border:1px solid rgba(255,255,255,.08);
      z-index:99999;opacity:0;transform:translateY(-16px);transition:.3s;
      font-family:'Noto Sans Bengali',sans-serif;font-size:14px;max-width:320px;}
    .app-toast.show{opacity:1;transform:translateY(0);}
    .app-toast.success{border-left:4px solid #22c55e;}
    .app-toast.error{border-left:4px solid #ef4444;}
    .app-toast.info{border-left:4px solid #38bdf8;}
  `;
  document.head.appendChild(s);
}

/* ── Avatar element builder ── */
function makeAvatar(url, name, size = 36) {
  const wrap = document.createElement("div");
  wrap.style.cssText = `width:${size}px;height:${size}px;border-radius:50%;
    background:#1e293b;border:1.5px solid rgba(255,255,255,.08);
    overflow:hidden;display:flex;align-items:center;justify-content:center;flex-shrink:0;`;
  if (url) {
    const img = document.createElement("img");
    img.src = url;
    img.style.cssText = "width:100%;height:100%;object-fit:cover;";
    wrap.appendChild(img);
  } else {
    wrap.innerHTML = `<span style="font-size:${size*.4}px;color:#818cf8;font-weight:700">${name?name[0].toUpperCase():"?"}</span>`;
  }
  return wrap;
}

/* ── Auth guard: redirect to index if not logged in ── */
function requireAuth(callback) {
  onAuthStateChanged(auth, async user => {
    if (!user) { window.location.href = "index.html"; return; }
    // Auto-create or update user document — fixes PWA/Google login users missing from friends list
    try {
      const userRef = doc(db, "users", user.uid);
      const snap = await getDoc(userRef);
      if (!snap.exists()) {
        await setDoc(userRef, {
          uid: user.uid,
          displayName: user.displayName || user.email.split("@")[0],
          email: user.email,
          photoURL: user.photoURL || "",
          createdAt: serverTimestamp(),
          xp: 0, streak: 0, sessions: 0, totalCorrect: 0
        });
      } else {
        const updates = {};
        if (user.displayName && snap.data().displayName !== user.displayName)
          updates.displayName = user.displayName;
        if (user.photoURL && snap.data().photoURL !== user.photoURL)
          updates.photoURL = user.photoURL;
        if (Object.keys(updates).length) await updateDoc(userRef, updates);
      }
    } catch(e) { console.warn("User doc sync failed:", e); }
    callback(user);
  });
}

/* ── Get full user data from Firestore ── */
async function getUserData(uid) {
  const snap = await getDoc(doc(db, "users", uid));
  return snap.exists() ? { uid, ...snap.data() } : null;
}

/* ── DM conversation ID ── */
function dmId(uid1, uid2) { return [uid1, uid2].sort().join("_"); }

/* ── Escape HTML ── */
function esc(s) {
  const d = document.createElement("div");
  d.textContent = s;
  return d.innerHTML;
}

/* ── Format timestamp ── */
function fmtTime(ts) {
  if (!ts) return "";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleTimeString("bn-BD", { hour: "2-digit", minute: "2-digit" });
}
function fmtDate(ts) {
  if (!ts) return "";
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString("bn-BD");
}

export {
  app, auth, db, gProvider,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signInWithPopup, onAuthStateChanged, signOut, updateProfile,
  EmailAuthProvider, reauthenticateWithCredential, updatePassword,
  doc, setDoc, getDoc, updateDoc, deleteDoc,
  collection, query, orderBy, limit, getDocs,
  addDoc, serverTimestamp, onSnapshot,
  where, increment, arrayUnion,
  uploadToCloud, toast, makeAvatar,
  requireAuth, getUserData, dmId, esc, fmtTime, fmtDate
};
