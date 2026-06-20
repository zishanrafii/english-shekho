cat > /home/claude/deutsch-project/DEUTSCH-MASTER-ROADMAP.md << 'EOF'
# 🇩🇪 Deutsch Lernen — Complete Master Roadmap
**English Shekho-র UI/Structure হুবহু follow করে German Learning App (A1–C2)**

---

## ⚡ IMPORTANT: এই project বানানোর আগে পড়ো

- **Base:** English Shekho project-এর exact UI, CSS, JS structure copy করবে
- **Change করবে:** সব English content → German, brand name, Firebase config
- **Firebase:** নতুন project বানাও `deutsch-lernen-bd` নামে
- **Cloudinary:** same preset use করতে পারো অথবা নতুন বানাও
- **Language:** UI labels বাংলায়, শেখার content German/বাংলা mixed

---

## 🗂️ File List (English Shekho → Deutsch Lernen)

| English Shekho File | Deutsch Lernen File | পরিবর্তন |
|---|---|---|
| index.html | index.html | 🇬🇧→🇩🇪, "English Shekho"→"Deutsch Lernen" |
| dashboard.html | dashboard.html | সব English feature → German |
| roadmap.html | roadmap.html | English topics → German topics (A1-C2) |
| vocab-dashboard.html | vocab-dashboard.html | English vocab → German vocab |
| js/vocab-a1.js | js/vocab-a1.js | German A1 words |
| js/vocab-a2.js | js/vocab-a2.js | German A2 words |
| quiz-beginner.html | quiz-a1-a2.html | German A1-A2 quiz |
| quiz-intermediate.html | quiz-b1-b2.html | German B1-B2 quiz |
| quiz-advanced.html | quiz-c1-c2.html | German C1-C2 quiz |
| grammar.html | grammar.html | German grammar |
| grammar-articles.html | grammar-artikel.html | Artikel (der/die/das) |
| grammar-tenses.html | grammar-zeiten.html | Zeitformen |
| speaking.html | speaking.html | German speaking |
| listening.html | listening.html | German listening |
| writing-lab.html | writing-lab.html | German writing |
| challenges.html | challenges.html | German challenges |
| leaderboard.html | leaderboard.html | same structure |
| profile.html | profile.html | same structure |
| progress.html | progress.html | same structure |
| friends.html | friends.html | same structure |
| chat.html | chat.html | same structure |
| inbox.html | inbox.html | same structure |
| live-class.html | live-class.html | same structure |
| firestore.rules | firestore.rules | update project name |
| manifest.json | manifest.json | update name/icons |
| sw.js | sw.js | update cache name |
| js/firebase-config.js | js/firebase-config.js | **নতুন Firebase config** |
| functions/ai-check.js | functions/ai-check.js | German grammar check |

---

## 🎨 Design System (সব Claude-কে এটা দিতে হবে)

```
প্রতিটি prompt-এ এই CSS variables paste করো:

:root{
  --bg:#04080f; --surface:#080e1a; --surface2:#0c1322; --surface3:#101828;
  --border:rgba(255,255,255,.055);
  --gold:#f5c842; --gold2:#e0a820;
  --teal:#2dd4bf; --rose:#fb7185; --indigo:#818cf8;
  --emerald:#34d399; --orange:#fb923c;
  --muted:#64748b; --sub:#94a3b8; --text:#f0f4f8;
}
Fonts: Outfit (UI), Noto Sans Bengali (বাংলা), JetBrains Mono (stats)
Brand: "Deutsch Lernen" 🇩🇪 | Tagline: "GERMAN LEARNING PLATFORM · A1 TO C2"
Level colors: A1=#34d399, A2=#38bdf8, B1=#818cf8, B2=#a78bfa, C1=#fb923c, C2=#f5c842
```

---

## 🔥 Firebase Config Template (নতুন project বানানোর পর replace করো)

```javascript
const firebaseConfig = {
  apiKey: "YOUR_NEW_API_KEY",
  authDomain: "deutsch-lernen-bd.firebaseapp.com",
  projectId: "deutsch-lernen-bd",
  storageBucket: "deutsch-lernen-bd.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
const CLOUDINARY_CLOUD  = "YOUR_CLOUD_NAME";
const CLOUDINARY_PRESET = "deutsch_lernen";
```

---

## 📦 Claude Account 1 — Core Files

### ✅ Prompt 1A: firebase-config.js

```
আমি "Deutsch Lernen" নামে একটি German learning web app বানাচ্ছি।
এটা English Shekho project-এর structure follow করে।

নিচের English Shekho-র firebase-config.js দেখো এবং Deutsch Lernen-এর জন্য
একটি নতুন firebase-config.js বানাও — শুধু এই জিনিসগুলো পরিবর্তন করো:
1. firebaseConfig object-এ placeholder values রাখো (আমি পরে নিজের config দেব)
2. Toast messages বাংলায় রাখো (ঠিক আছে)
3. makeAvatar, requireAuth, getUserData, dmId, esc, fmtTime, fmtDate — সব same রাখো
4. Export list same রাখো

[English Shekho-র firebase-config.js-এর পুরো code paste করো]
```

### ✅ Prompt 1B: index.html (Login page)

```
আমি "Deutsch Lernen" নামে একটি German learning web app বানাচ্ছি।
নিচে English Shekho-র index.html দেওয়া হলো। এটা দেখে Deutsch Lernen-এর
index.html বানাও।

পরিবর্তন করবে:
- Title: "Deutsch Lernen — Login"
- Logo icon: 🇩🇪 (🇬🇧-এর বদলে)
- Brand name: "Deutsch Lernen"
- Tagline (monospace): "GERMAN LEARNING PLATFORM · A1 TO C2"
- firebase-config.js import path same রাখো
- সব বাংলা UI text same রাখো (লগইন, নতুন অ্যাকাউন্ট, ইমেইল, পাসওয়ার্ড etc.)
- CSS/design হুবহু same রাখো

[English Shekho-র index.html-এর পুরো code paste করো]

Output: শুধু Deutsch Lernen-এর index.html
```

### ✅ Prompt 1C: dashboard.html

```
আমি "Deutsch Lernen" নামে একটি German learning web app বানাচ্ছি।
নিচে English Shekho-র dashboard.html দেওয়া হলো। এটা দেখে Deutsch Lernen-এর
dashboard.html বানাও।

পরিবর্তন করবে:
- Title: "Dashboard — Deutsch Lernen"
- Logo: 🇩🇪 "Deutsch Lernen" | "GERMAN LEARNING PLATFORM · A1 TO C2"
- Feature cards-এর links আপডেট:
  * Quiz → quiz-a1-a2.html
  * Vocab → vocab-dashboard.html
  * Grammar → grammar.html
  * Speaking → speaking.html
  * Listening → listening.html
  * Writing → writing-lab.html
  * Challenges → challenges.html
  * Leaderboard → leaderboard.html
  * Friends → friends.html
  * Live Class → live-class.html
  * Progress → progress.html
  * Profile → profile.html
- Hero subtitle (বাংলায়): "ধাপে ধাপে German শিখুন। প্রতিদিন practice করুন এবং A1 থেকে C2 পর্যন্ত এগিয়ে যান।"
- Footer: "Deutsch Lernen · German Language Learning Platform"
- বাকি সব CSS/JS/structure হুবহু same

[English Shekho-র dashboard.html-এর পুরো code paste করো]

Output: Deutsch Lernen-এর dashboard.html
```

---

## 📦 Claude Account 2 — Roadmap + Vocab Data

### ✅ Prompt 2A: roadmap.html

```
আমি "Deutsch Lernen" German learning app বানাচ্ছি।
নিচে English Shekho-র roadmap.html দেওয়া হলো। এটা দেখে Deutsch Lernen-এর
roadmap.html বানাও।

পরিবর্তন করবে — শুধু content, structure/CSS same রাখো:

Logo: 🇩🇪 "Deutsch Lernen" | "GERMAN LEARNING PLATFORM · A1 TO C2"
Title: "Learning Journey — Deutsch Lernen"
Hero subtitle: "ধাপে ধাপে German শিখুন। প্রতিটি level-এ নতুন topics unlock হবে।"

Topic data (6 level, প্রতিটিতে 8 topic + 1 final test):

A1 — Anfänger (শুরুর স্তর):
1. Begrüßung & Vorstellung (শুভেচ্ছা ও পরিচয়) → topics/a1/begruessung.html
2. Zahlen & Farben (সংখ্যা ও রং) → topics/a1/zahlen-farben.html
3. Alphabet & Aussprache (বর্ণমালা ও উচ্চারণ) → topics/a1/alphabet.html
4. Familie & Personen (পরিবার ও মানুষ) → topics/a1/familie.html
5. Alltägliche Gegenstände (দৈনন্দিন বস্তু) → topics/a1/gegenstaende.html
6. Grundfragen (মৌলিক প্রশ্ন) → topics/a1/grundfragen.html
7. Einfache Sätze (সহজ বাক্য) → topics/a1/saetze.html
8. Präsens (বর্তমান কাল) → topics/a1/praesens.html
Final: A1 Abschlussprüfung → topics/a1/final-test.html

A2 — Grundstufe:
1. Vergangenheit – Perfekt (অতীত কাল) → topics/a2/perfekt.html
2. Imperfekt & Präteritum → topics/a2/praeteritum.html
3. Futur I (ভবিষ্যৎ কাল) → topics/a2/futur.html
4. Adjektive (বিশেষণ) → topics/a2/adjektive.html
5. Konjunktionen (সংযোজক) → topics/a2/konjunktionen.html
6. Einkaufen & Reisen (কেনাকাটা ও ভ্রমণ) → topics/a2/einkaufen.html
7. Kurze Dialoge (ছোট কথোপকথন) → topics/a2/dialoge.html
8. Absatz schreiben (অনুচ্ছেদ লেখা) → topics/a2/absatz.html
Final: A2 Abschlussprüfung → topics/a2/final-test.html

B1 — Mittelstufe:
1. Perfekt vs Präteritum → topics/b1/perfekt-praeteritum.html
2. Modalverben (মডেল ক্রিয়া) → topics/b1/modalverben.html
3. Passiv (কর্মবাচ্য) → topics/b1/passiv.html
4. Konjunktiv II → topics/b1/konjunktiv.html
5. E-Mail schreiben (ইমেইল লেখা) → topics/b1/email.html
6. Leseverstehen (পড়ার দক্ষতা) → topics/b1/lesen.html
7. Meinungsäußerung (মতামত প্রকাশ) → topics/b1/meinung.html
8. Hörverstehen (শোনার দক্ষতা) → topics/b1/hoeren.html
Final: B1 Abschlussprüfung → topics/b1/final-test.html

B2 — Oberstufe:
1. Erweiterte Grammatik → topics/b2/grammatik.html
2. Konditionalsätze → topics/b2/konditional.html
3. Indirekte Rede → topics/b2/indirekte-rede.html
4. Vortrag halten (বক্তৃতা) → topics/b2/vortrag.html
5. Idiome & Redewendungen → topics/b2/idiome.html
6. Datengrafiken beschreiben → topics/b2/daten.html
7. Erörterung schreiben → topics/b2/eroerterung.html
8. Komplexe Texte → topics/b2/texte.html
Final: B2 Abschlussprüfung → topics/b2/final-test.html

C1 — Fortgeschritten:
1. Akademisches Deutsch → topics/c1/akademisch.html
2. Formeller Stil → topics/c1/formell.html
3. Kritisches Denken → topics/c1/kritisch.html
4. Aktuelle Themen → topics/c1/themen.html
5. Verhandlungsführung → topics/c1/verhandlung.html
6. Literaturanalyse → topics/c1/literatur.html
7. Figurative Sprache → topics/c1/figurativ.html
8. Wissenschaftliches Schreiben → topics/c1/wissenschaft.html
Final: C1 Abschlussprüfung → topics/c1/final-test.html

C2 — Meisterschaft:
1. Klassische Literatur → topics/c2/klassik.html
2. Kreatives Schreiben → topics/c2/kreativ.html
3. Forschungsmethodik → topics/c2/forschung.html
4. Rhetorische Meisterschaft → topics/c2/rhetorik.html
5. Interkulturelles Kommunizieren → topics/c2/interkulturell.html
6. Medien & Journalismus → topics/c2/medien.html
7. Philosophische Debatte → topics/c2/philosophie.html
8. Sprachliche Perfektion → topics/c2/perfektion.html
Final: C2 Meisterschaftsprüfung → topics/c2/final-test.html

Firebase Firestore: completedTopics array থেকে done/locked determine করবে।
[English Shekho-র roadmap.html পুরো code paste করো]

Output: Deutsch Lernen-এর roadmap.html
```

### ✅ Prompt 2B: vocab-dashboard.html

```
"Deutsch Lernen" German app-এর vocab-dashboard.html বানাও।
English Shekho-র vocab-dashboard.html follow করো।

পরিবর্তন:
- Logo: 🇩🇪 "Deutsch Lernen"
- Title: "Vocabulary — Deutsch Lernen"
- Hero: "German vocabulary A1 থেকে C2 পর্যন্ত"
- Level tabs: A1 A2 B1 B2 C1 C2
- Vocab source files: js/vocab-a1.js, js/vocab-a2.js, js/vocab-b1.js, js/vocab-b2.js, js/vocab-c1.js, js/vocab-c2.js
- Word card: German word | Bengali meaning | Example sentence (German)
- Flashcard: front=German word, back=Bengali meaning + example
- Favorites: same Firebase structure

[English Shekho vocab-dashboard.html পুরো code paste করো]
```

### ✅ Prompt 2C: js/vocab-a1.js

```
Deutsch Lernen-এর জন্য js/vocab-a1.js বানাও।

English Shekho-র vocab-a1.js এর exact same structure follow করো।
কিন্তু content হবে German A1 level vocabulary।

প্রতিটি word object-এ থাকবে:
{
  id: "a1_001",
  word: "Hallo",           // German word
  phonetic: "/ˈhalo/",    // IPA pronunciation
  bn: "হ্যালো / হ্যা কেমন আছ",  // Bengali meaning
  example: "Hallo, wie geht es dir?",  // German example sentence
  example_bn: "হ্যালো, তুমি কেমন আছ?",  // Bengali translation
  category: "Begrüßung",  // Category
  level: "A1",
  difficulty: 1
}

Categories: Begrüßung, Familie, Zahlen, Farben, Körper, Essen, Wohnen,
Kleidung, Tiere, Natur, Zeit, Arbeit, Schule, Transport, Gesundheit

মোট ২০০+ টি word লাগবে। Real German A1 vocabulary দিও।
English Shekho vocab-a1.js-এর structure হুবহু follow করো।

[English Shekho js/vocab-a1.js পুরো code paste করো]
```

---

## 📦 Claude Account 3 — Quiz Pages

### ✅ Prompt 3A: quiz-a1-a2.html

```
Deutsch Lernen-এর quiz-a1-a2.html বানাও।
English Shekho-র quiz-beginner.html follow করো।

পরিবর্তন:
- Title: "Quiz A1-A2 — Deutsch Lernen"
- Hero subtitle: "German A1-A2 vocabulary ও grammar থেকে auto-generated quiz।"
- Level tabs:
  * quiz-a1-a2.html (active) — 🟢 Beginner (A1-A2)
  * quiz-b1-b2.html — 🟡 Intermediate (B1-B2)
  * quiz-c1-c2.html — 🔴 Advanced (C1-C2)
- Sublevel tabs: All Topics | A1 Only | A2 Only
- Category tabs (A1-A2): Begrüßung | Familie | Zahlen | Farben | Essen | Wohnen
- Quiz data: vocab-a1.js ও vocab-a2.js থেকে নেবে
- Question format:
  * "এই German word-এর বাংলা মানে কী? → [German word]"
  * অথবা: "বাংলায়: [Bengali meaning] — German-এ কী বলে?"
- 4 options MCQ, instant feedback, timer, score save to Firebase

[English Shekho quiz-beginner.html পুরো code paste করো]
```

### ✅ Prompt 3B: quiz-b1-b2.html

```
Deutsch Lernen-এর quiz-b1-b2.html বানাও।
quiz-a1-a2.html-এর মতোই, শুধু:
- Level: B1-B2
- Data source: vocab-b1.js ও vocab-b2.js
- Categories: Modalverben | Passiv | Konjunktiv | Präpositionen | Idiome
- Active tab: Intermediate (B1-B2)
- Harder questions including grammar usage

[English Shekho quiz-intermediate.html পুরো code paste করো]
```

---

## 📦 Claude Account 4 — Grammar Pages

### ✅ Prompt 4A: grammar.html (Main Grammar Dashboard)

```
Deutsch Lernen-এর grammar.html বানাও।
English Shekho-র grammar.html follow করো।

German grammar topics (English Shekho-র grammar topics-এর বদলে):

Section 1 — Grundgrammatik (A1-A2):
- Artikel: der, die, das → grammar-artikel.html
- Kasus: Nominativ, Akkusativ, Dativ, Genitiv → grammar-kasus.html
- Pronomen (Pronouns) → grammar-pronomen.html
- Zahlen & Ordnungszahlen → grammar-zahlen.html
- Adjektive (Adjektive Deklination) → grammar-adjektive.html

Section 2 — Verben (A1-B1):
- Konjugation im Präsens → grammar-praesens.html
- Konjugation im Perfekt → grammar-perfekt.html
- Modalverben (können, müssen, wollen...) → grammar-modalverben.html
- Trennbare Verben → grammar-trennbar.html
- Reflexive Verben → grammar-reflexiv.html

Section 3 — Zeitformen (A2-B2):
- Präteritum → grammar-praeteritum.html
- Futur I & II → grammar-futur.html
- Plusquamperfekt → grammar-plusquamperfekt.html
- Konjunktiv II → grammar-konjunktiv.html

Section 4 — Satzbau (B1-C1):
- Wortstellung (Word Order) → grammar-wortstellung.html
- Nebensätze (Subordinate clauses) → grammar-nebensaetze.html
- Passiv (Passive voice) → grammar-passiv.html
- Indirekte Rede → grammar-indirekte-rede.html
- Präpositionen → grammar-praepositionen.html

[English Shekho grammar.html পুরো code paste করো]
```

### ✅ Prompt 4B: grammar-artikel.html

```
Deutsch Lernen-এর grammar-artikel.html বানাও।
English Shekho-র grammar-articles.html follow করো — structure/CSS same।

Content: German Artikel (der, die, das, ein, eine, kein)

Sections:
1. Theory: বাংলায় explain করো কেন German-এ 3 gender আছে
2. Definite articles table: der/die/das (Nominativ, Akkusativ, Dativ, Genitiv)
3. Indefinite articles table: ein/eine/ein
4. Negative articles: kein/keine/kein
5. Tips to remember: tricks বাংলায়
6. 50টি common noun with their article (তালিকা)
7. Practice exercises: 10 fill-in-the-blank
8. Mini quiz: 5 MCQ

[English Shekho grammar-articles.html পুরো code paste করো]
```

---

## 📦 Claude Account 5 — Speaking + Listening + Writing

### ✅ Prompt 5A: speaking.html

```
Deutsch Lernen-এর speaking.html বানাও।
English Shekho-র speaking.html follow করো।

পরিবর্তন:
- Logo/brand: Deutsch Lernen 🇩🇪
- Hero: "German উচ্চারণ practice করুন AI feedback সহ"
- Daily speaking tasks: German sentences
- Mic recorder prompts: German sentences (বাংলা translation সহ)
  Examples:
  * "Guten Morgen! Wie geht es Ihnen?" (শুভ সকাল! আপনি কেমন আছেন?)
  * "Ich heiße Ahmad und ich lerne Deutsch." (আমার নাম Ahmad এবং আমি German শিখছি।)
- Pronunciation practice sections:
  * Umlaute: ä, ö, ü উচ্চারণ
  * CH-Laut: ich vs. ach
  * R-Laut (German R)
  * SP/ST at word beginning
  * Long vs. short vowels
- Shadowing exercises: German sentences with audio

[English Shekho speaking.html পুরো code paste করো]
```

### ✅ Prompt 5B: listening.html

```
Deutsch Lernen-এর listening.html বানাও।
English Shekho-র listening.html follow করো।

পরিবর্তন:
- Brand: 🇩🇪 Deutsch Lernen
- Hero: "German শুনতে শিখুন — A1 থেকে C2 পর্যন্ত audio exercises"
- Listening categories:
  * A1: Simple dialogues, numbers, greetings
  * A2: Shopping, directions, weather
  * B1: News snippets, interviews
  * B2: Podcasts, lectures
  * C1-C2: Complex discussions, debates
- Comprehension questions: German audio শোনার পর MCQ
- Dictation mode: German sentence শুনে type করো
- Transcript toggle: German text দেখাবে

[English Shekho listening.html পুরো code paste করো]
```

### ✅ Prompt 5C: writing-lab.html

```
Deutsch Lernen-এর writing-lab.html বানাও।
English Shekho-র writing-lab.html follow করো।

পরিবর্তন:
- Brand: 🇩🇪 Deutsch Lernen
- Writing prompts German level অনুযায়ী:
  * A1: "Beschreibe dich selbst" (নিজেকে describe করো)
  * A2: "Schreib über deine Familie" (পরিবার নিয়ে লেখো)
  * B1: "Schreibe eine E-Mail an deinen Chef" (বসকে email লেখো)
  * B2: "Diskutiere Vor- und Nachteile von Social Media"
  * C1-C2: Academic/formal writing tasks
- AI check: German grammar mistakes highlight করবে
  (functions/ai-check.js use করবে — German grammar check prompt)

[English Shekho writing-lab.html পুরো code paste করো]
```

---

## 📦 Claude Account 6 — Social + Profile Pages

### ✅ Prompt 6A: profile.html, progress.html, leaderboard.html

```
Deutsch Lernen-এর profile.html বানাও।
English Shekho-র profile.html follow করো।

পরিবর্তন শুধু:
- Brand: 🇩🇪 "Deutsch Lernen"
- Title: "Profile — Deutsch Lernen"
- Subtitle: "GERMAN LEARNING PLATFORM · A1 TO C2"
- Level display: A1 Anfänger, A2 Grundstufe, B1 Mittelstufe, B2 Oberstufe, C1 Fortgeschritten, C2 Meisterschaft
- Achievement names German-themed করো
- বাকি সব same (Firebase structure, XP system, streak, etc.)

[English Shekho profile.html পুরো code paste করো]

একই সাথে progress.html এবং leaderboard.html-ও similar change করো।
```

### ✅ Prompt 6B: friends.html, chat.html, inbox.html

```
Deutsch Lernen-এর friends.html, chat.html, inbox.html বানাও।
English Shekho-র files follow করো।

পরিবর্তন শুধু brand (🇩🇪 Deutsch Lernen) এবং title।
Firebase structure, UI, functionality হুবহু same।

[respective HTML files paste করো]
```

---

## 📦 Claude Account 7 — Challenges + Live Class + Vocab Data (B1-C2)

### ✅ Prompt 7A: challenges.html

```
Deutsch Lernen-এর challenges.html বানাও।
English Shekho follow করো।

Challenge categories:
- Daily: "আজকে ১০টি নতুন German word শেখো" (XP: 50)
- Daily: "একটি German sentence বলো microphone-এ" (XP: 30)
- Weekly: "২০ মিনিট German podcast শোনো" (XP: 150)
- Weekly: "Grammar quiz-এ ৮০%+ score করো" (XP: 200)
- Special: "A1 সব topics complete করো" (XP: 500)

[English Shekho challenges.html পুরো code paste করো]
```

### ✅ Prompt 7B: js/vocab-b1.js + js/vocab-b2.js

```
Deutsch Lernen-এর js/vocab-b1.js বানাও।
English Shekho vocab-a1.js-এর exact same structure।

B1 level German vocabulary ২০০+ words:
Categories: Beruf, Gesellschaft, Umwelt, Medien, Gesundheit, Politik,
Wissenschaft, Kultur, Wirtschaft, Technik

প্রতিটি word:
{
  id: "b1_001",
  word: "die Verantwortung",
  phonetic: "/fɛɐ̯ˈantvɔrtʊŋ/",
  bn: "দায়িত্ব",
  example: "Jeder trägt Verantwortung für die Umwelt.",
  example_bn: "প্রত্যেকে পরিবেশের জন্য দায়িত্ব বহন করে।",
  category: "Gesellschaft",
  level: "B1",
  difficulty: 3
}

তারপর vocab-b2.js ও বানাও (B2 level, advanced vocabulary)।
```

### ✅ Prompt 7C: functions/ai-check.js

```
Deutsch Lernen-এর functions/ai-check.js বানাও।
English Shekho-র functions/ai-check.js follow করো।

পরিবর্তন:
- System prompt: German grammar checking-এর জন্য
- Response format same রাখো (errors array with type, position, suggestion, explanation)
- German-specific errors: Artikel, Kasus, Verb conjugation, Word order, Adjektiv declension

German grammar check system prompt হবে:
"You are a German grammar teacher. Analyze the following German text written
by a Bangladeshi learner. Return JSON with errors array. Each error: {
  word: problematic word/phrase,
  type: error type (Artikel/Kasus/Konjugation/Wortstellung/Rechtschreibung),
  suggestion: correct form,
  explanation_bn: বাংলায় explanation
}"

[English Shekho functions/ai-check.js পুরো code paste করো]
```

---

## 📦 Claude Account 8 — Topic Pages (A1 topics first)

### ✅ Prompt 8A: topics/a1/begruessung.html

```
Deutsch Lernen-এর topics/a1/begruessung.html বানাও।
(Begrüßung & Vorstellung — শুভেচ্ছা ও পরিচয়)

English Shekho-র topic page structure follow করো।

Content:
1. Breadcrumb: Dashboard > Journey > A1 > Begrüßung
2. Hero: "Begrüßung & Vorstellung" | badge: A1 | XP: 50 | ⏱ 20 min
3. Learning content:
   - Formelle Begrüßung (আনুষ্ঠানিক): Guten Morgen/Tag/Abend, Auf Wiedersehen
   - Informelle Begrüßung (অনানুষ্ঠানিক): Hallo, Hi, Tschüss, Ciao
   - Sich vorstellen (পরিচয় দেওয়া): Ich heiße..., Ich bin..., Ich komme aus...
   - Fragen (প্রশ্ন): Wie heißen Sie? Woher kommen Sie? Wie geht es Ihnen?
   - Practice dialogue: Full conversation example
4. Exercises: fill-in-the-blank (10 টি)
5. Mini quiz: 5 MCQ
6. Complete button → Firebase XP save
7. Next: Zahlen & Farben →

[যদি English Shekho-তে topic page থাকে সেটা paste করো, নাহয় structure নিজে বানাও]
```

---

## 📊 Firestore Structure (Deutsch Lernen)

```javascript
// users/{uid}
{
  uid, displayName, email, photoURL,
  level: "A1",          // A1/A2/B1/B2/C1/C2
  xp: 0,
  streak: 0,
  lastActive: timestamp,
  completedTopics: [],  // ["a1-begruessung", "a1-zahlen-farben", ...]
  masteredWords: [],    // vocab IDs
  quizScores: {},       // {quizId: {score, date}}
  speakingSessions: 0,
  listeningMinutes: 0
}

// leaderboard/{uid}
{ name, avatar, xp, level, weekXp }

// chat/{messageId}
{ from, to, text, createdAt }
```

---

## ✅ Build Order

| ক্রম | Account | Files | আনুমানিক সময় |
|------|---------|-------|-------------|
| 1 | Account 1 | firebase-config.js, index.html, dashboard.html | ১ দিন |
| 2 | Account 2 | roadmap.html, vocab-dashboard.html, vocab-a1.js | ১ দিন |
| 3 | Account 3 | quiz-a1-a2.html, quiz-b1-b2.html, quiz-c1-c2.html | ১ দিন |
| 4 | Account 4 | grammar.html, grammar-artikel.html, grammar-kasus.html | ১ দিন |
| 5 | Account 5 | speaking.html, listening.html, writing-lab.html | ১ দিন |
| 6 | Account 6 | profile.html, progress.html, leaderboard.html, friends.html | ১ দিন |
| 7 | Account 7 | challenges.html, vocab-b1.js, vocab-b2.js, ai-check.js | ১ দিন |
| 8 | Account 8 | topic pages (A1: 9 files → A2: 9 files → ...) | ৩-৪ দিন |

---

## 💡 প্রতিটি Prompt-এ যা যা দিতে হবে

1. **English Shekho-র সেই file-এর পুরো code** — paste করো
2. **কী কী change করতে হবে** — list করো
3. **firebase-config.js** এর reference দাও
4. **Brand rules** paste করো:
   ```
   Brand: "Deutsch Lernen" 🇩🇪
   Tagline: "GERMAN LEARNING PLATFORM · A1 TO C2"
   Colors: --gold:#f5c842; --teal:#2dd4bf; --bg:#04080f;
   Fonts: Outfit, Noto Sans Bengali, JetBrains Mono
   ```

## ⚠️ Common Mistakes এড়াতে

- "English Shekho" string সব জায়গায় "Deutsch Lernen" করো
- 🇬🇧 → 🇩🇪 replace করো
- `quiz-dashboard.html` link → `quiz-a1-a2.html`
- `vocab-a1.js` data structure same রাখো, শুধু content German করো
- Firebase project name নতুন দাও (placeholder রেখে দাও, পরে fill করবে)


