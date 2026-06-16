/* =====================================================
   ENGLISH SHEKHO — READING CENTER DATA
   Passages + Vocabulary-in-Context + Comprehension Quiz
   ===================================================== */

/* ──────────────────────────────────────
   Each passage:
   id, title, category, level, readMinutes, xp,
   icon, color, border,
   text:   array of paragraph strings (English only)
   vocab:  { word: { meaning_bn, pos } }  ← words to highlight inside `text`
   quiz:   [{ q, opts, ans, exp }]
────────────────────────────────────── */

export const PASSAGES = [

  /* ════════════════════════════════
     STORY — 6 passages
  ════════════════════════════════ */

  { id:"r1", title:"A Rainy Morning", category:"Story", level:"A1", readMinutes:2, xp:40,
    icon:"🌧️", color:"rgba(45,212,191,.12)", border:"rgba(45,212,191,.25)",
    text:[
      "It was a rainy morning in Dhaka. Rina woke up and looked out of the window. The sky was grey and the rain was falling softly on the street.",
      "She put on her raincoat and picked up her umbrella. Her school bag was heavy, but she was happy because today was her favourite subject — Art class.",
      "On the way to school, she saw a little cat hiding under a car. The cat looked cold and hungry. Rina stopped and gave the cat a small piece of bread from her bag.",
      "The cat ate the bread quickly and looked up at her with bright eyes. Rina smiled and continued walking to school, feeling warm inside despite the cold rain."
    ],
    vocab:{
      "raincoat":{meaning_bn:"বৃষ্টি থেকে রক্ষা করার কোট", pos:"noun"},
      "umbrella":{meaning_bn:"ছাতা", pos:"noun"},
      "hiding":{meaning_bn:"লুকিয়ে থাকা", pos:"verb"},
      "despite":{meaning_bn:"সত্ত্বেও", pos:"preposition"}
    },
    quiz:[
      {q:"What was the weather like in the morning?", opts:["Sunny","Rainy","Snowy","Windy"], ans:1, exp:"প্যাসেজে বলা হয়েছে 'It was a rainy morning'।"},
      {q:"Why was Rina happy?", opts:["She had no homework","Today was Art class","She got a gift","School was closed"], ans:1, exp:"'Today was her favourite subject — Art class'।"},
      {q:"What did Rina give the cat?", opts:["Milk","Water","A piece of bread","Rice"], ans:2, exp:"'Rina gave the cat a small piece of bread'।"}
    ]
  },

  { id:"r2", title:"The Lost Wallet", category:"Story", level:"A1", readMinutes:2, xp:40,
    icon:"👛", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    text:[
      "Karim was walking home from the market when he saw a brown wallet on the ground. He picked it up and opened it carefully.",
      "Inside, there was some money and an identity card with a photo and an address. Karim thought about keeping the money, but he knew that would be wrong.",
      "He decided to find the owner. He walked to the address on the card. An old man opened the door and looked very worried.",
      "\"Are you looking for this?\" Karim asked, showing the wallet. The old man's face lit up with joy. \"Thank you so much, young man! You have saved my day,\" he said, and offered Karim a reward, but Karim politely refused."
    ],
    vocab:{
      "wallet":{meaning_bn:"মানিব্যাগ", pos:"noun"},
      "identity card":{meaning_bn:"পরিচয়পত্র", pos:"noun"},
      "worried":{meaning_bn:"চিন্তিত", pos:"adjective"},
      "refused":{meaning_bn:"প্রত্যাখ্যান করা", pos:"verb"}
    },
    quiz:[
      {q:"What did Karim find on the ground?", opts:["A phone","A wallet","A book","A key"], ans:1, exp:"'He saw a brown wallet on the ground'।"},
      {q:"How did Karim find the owner's address?", opts:["From a letter","From the identity card","From a neighbour","From the police"], ans:1, exp:"Identity card-এ address ছিল।"},
      {q:"Did Karim accept the reward?", opts:["Yes","No","He asked for money instead","Not mentioned"], ans:1, exp:"'Karim politely refused'।"}
    ]
  },

  { id:"r3", title:"My First Day at School", category:"Story", level:"A1", readMinutes:2, xp:40,
    icon:"🎒", color:"rgba(251,113,133,.12)", border:"rgba(251,113,133,.25)",
    text:[
      "I still remember my first day at school. I was only five years old and very nervous. My mother held my hand tightly as we walked through the big gate.",
      "Everything looked strange — the tall building, the noisy children, and the loud bell. I wanted to cry, but I tried to be brave.",
      "My teacher smiled at me and said, \"Don't worry, everyone feels nervous on their first day.\" She gave me a colourful pencil and a small notebook.",
      "By the end of the day, I had made two new friends and learned how to write my own name. I went home feeling proud and excited for the next day."
    ],
    vocab:{
      "nervous":{meaning_bn:"নার্ভাস, চিন্তিত", pos:"adjective"},
      "tightly":{meaning_bn:"দৃঢ়ভাবে", pos:"adverb"},
      "brave":{meaning_bn:"সাহসী", pos:"adjective"},
      "proud":{meaning_bn:"গর্বিত", pos:"adjective"}
    },
    quiz:[
      {q:"How old was the writer on the first day?", opts:["Four","Five","Six","Seven"], ans:1, exp:"'I was only five years old'।"},
      {q:"What did the teacher give the writer?", opts:["A book and a bag","A pencil and a notebook","A toy","Nothing"], ans:1, exp:"'She gave me a colourful pencil and a small notebook'।"},
      {q:"How did the writer feel at the end of the day?", opts:["Sad","Angry","Proud and excited","Tired"], ans:2, exp:"'I went home feeling proud and excited'।"}
    ]
  },

  { id:"r4", title:"The Clever Crow", category:"Story", level:"A2", readMinutes:3, xp:60,
    icon:"🐦", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    text:[
      "On a hot summer day, a thirsty crow flew around looking for water. After a long search, she found a clay pot with a little water at the bottom.",
      "She tried to put her beak inside, but the water level was too low to reach. The pot was too narrow for her to push her head deeper, and she could not knock it over because it was too heavy.",
      "The crow thought carefully for a moment. Then she had a brilliant idea. She noticed some small pebbles lying near the pot.",
      "One by one, she picked up the pebbles with her beak and dropped them into the pot. Gradually, the water rose higher and higher until it finally reached the top.",
      "The clever crow drank the water happily and flew away, proving that intelligence can solve problems that strength cannot."
    ],
    vocab:{
      "thirsty":{meaning_bn:"তৃষ্ণার্ত", pos:"adjective"},
      "beak":{meaning_bn:"পাখির ঠোঁট", pos:"noun"},
      "narrow":{meaning_bn:"সরু", pos:"adjective"},
      "pebbles":{meaning_bn:"নুড়ি পাথর", pos:"noun"},
      "gradually":{meaning_bn:"ধীরে ধীরে", pos:"adverb"}
    },
    quiz:[
      {q:"What problem did the crow have?", opts:["No food","Water was too deep in the pot","Water level was too low to reach","The pot was broken"], ans:2, exp:"'The water level was too low to reach'।"},
      {q:"How did the crow solve the problem?", opts:["She broke the pot","She tilted the pot","She dropped pebbles into the pot","She asked another bird for help"], ans:2, exp:"'She picked up the pebbles... and dropped them into the pot'।"},
      {q:"What is the lesson of this story?", opts:["Strength is everything","Intelligence can solve problems strength cannot","Never trust a pot","Crows cannot fly"], ans:1, exp:"'Intelligence can solve problems that strength cannot'।"}
    ]
  },

  { id:"r5", title:"A Letter to a Friend", category:"Story", level:"A2", readMinutes:3, xp:60,
    icon:"✉️", color:"rgba(129,140,248,.12)", border:"rgba(129,140,248,.25)",
    text:[
      "Dear Tanvir, I hope this letter finds you in good health. I am writing to tell you about my recent trip to Cox's Bazar with my family.",
      "We arrived on a Friday afternoon and stayed at a small hotel near the beach. The sea was incredibly beautiful, with waves crashing gently onto the golden sand.",
      "Every morning, we woke up early to watch the sunrise. My younger sister collected seashells while my father took countless photographs of the view.",
      "On the last day, we visited a local market and bought some dried fish as souvenirs for our relatives. The whole trip was unforgettable, and I wish you could have joined us.",
      "I hope we can plan a trip together next time. Please write back soon and tell me about your holidays too. Your friend, Rafsan."
    ],
    vocab:{
      "incredibly":{meaning_bn:"অবিশ্বাস্যভাবে", pos:"adverb"},
      "gently":{meaning_bn:"নরমভাবে", pos:"adverb"},
      "countless":{meaning_bn:"অসংখ্য", pos:"adjective"},
      "souvenirs":{meaning_bn:"স্মারক উপহার", pos:"noun"},
      "unforgettable":{meaning_bn:"অবিস্মরণীয়", pos:"adjective"}
    },
    quiz:[
      {q:"Where did Rafsan travel to?", opts:["Sylhet","Cox's Bazar","Sundarbans","Rangamati"], ans:1, exp:"'My recent trip to Cox's Bazar'।"},
      {q:"What did the sister do at the beach?", opts:["Took photos","Collected seashells","Went swimming","Bought souvenirs"], ans:1, exp:"'My younger sister collected seashells'।"},
      {q:"What did they buy as souvenirs?", opts:["Shells","Dried fish","Clothes","Toys"], ans:1, exp:"'We... bought some dried fish as souvenirs'।"}
    ]
  },

  { id:"r6", title:"The Old Banyan Tree", category:"Story", level:"B1", readMinutes:4, xp:80,
    icon:"🌳", color:"rgba(251,146,60,.12)", border:"rgba(251,146,60,.25)",
    text:[
      "In the centre of our village stood an enormous banyan tree, believed to be over two hundred years old. Its thick branches spread out in every direction, providing shade for the entire village square.",
      "Generations of villagers had gathered beneath its canopy to discuss important matters, celebrate festivals, and simply rest during the scorching afternoons of summer.",
      "My grandfather often told me stories about the tree, claiming that it had witnessed the birth, marriage, and death of almost everyone in the village. To him, the tree was not merely a plant but a silent guardian of our history.",
      "Unfortunately, a severe storm last year damaged several of its largest branches, and many feared the ancient tree would not survive. However, with careful attention from the villagers, the banyan tree slowly began to recover.",
      "Today, fresh green leaves have started sprouting from its battered trunk, symbolising resilience and the enduring bond between nature and the community that has cared for it for so long."
    ],
    vocab:{
      "enormous":{meaning_bn:"বিশাল", pos:"adjective"},
      "canopy":{meaning_bn:"গাছের পাতার ছাউনি", pos:"noun"},
      "scorching":{meaning_bn:"প্রচণ্ড গরম", pos:"adjective"},
      "guardian":{meaning_bn:"রক্ষক", pos:"noun"},
      "resilience":{meaning_bn:"সহনশীলতা, দৃঢ়তা", pos:"noun"}
    },
    quiz:[
      {q:"How old was the banyan tree believed to be?", opts:["100 years","150 years","Over 200 years","50 years"], ans:2, exp:"'Believed to be over two hundred years old'।"},
      {q:"What did the grandfather believe about the tree?", opts:["It was dangerous","It was just a plant","It was a silent guardian of history","It needed to be cut down"], ans:2, exp:"'The tree was not merely a plant but a silent guardian of our history'।"},
      {q:"What happened to the tree last year?", opts:["It was cut down","A storm damaged its branches","It was sold","It died completely"], ans:1, exp:"'A severe storm last year damaged several of its largest branches'।"},
      {q:"What does the recovery of the tree symbolise?", opts:["Weakness","Resilience and community bond","Danger","Nothing important"], ans:1, exp:"'Symbolising resilience and the enduring bond between nature and the community'।"}
    ]
  },

  /* ════════════════════════════════
     ARTICLE / NON-FICTION — 6 passages
  ════════════════════════════════ */

  { id:"r7", title:"Benefits of Drinking Water", category:"Article", level:"A1", readMinutes:2, xp:40,
    icon:"💧", color:"rgba(45,212,191,.12)", border:"rgba(45,212,191,.25)",
    text:[
      "Water is one of the most important things our body needs every day. Doctors say that an adult should drink at least eight glasses of water daily.",
      "Drinking enough water helps keep our skin healthy and glowing. It also helps the body remove waste and toxins through urine and sweat.",
      "Water gives us energy and helps us concentrate better at school or work. Without enough water, we can feel tired, get headaches, and find it hard to focus.",
      "So remember to carry a water bottle with you and drink water regularly throughout the day, even if you don't feel very thirsty."
    ],
    vocab:{
      "toxins":{meaning_bn:"বিষাক্ত পদার্থ", pos:"noun"},
      "concentrate":{meaning_bn:"মনোযোগ দেওয়া", pos:"verb"},
      "regularly":{meaning_bn:"নিয়মিতভাবে", pos:"adverb"}
    },
    quiz:[
      {q:"How many glasses of water should an adult drink daily?", opts:["Four","Six","Eight","Ten"], ans:2, exp:"'At least eight glasses of water daily'।"},
      {q:"What can happen without enough water?", opts:["Better focus","Headaches and tiredness","More energy","Nothing"], ans:1, exp:"'We can feel tired, get headaches'।"}
    ]
  },

  { id:"r8", title:"How Bees Help the Environment", category:"Article", level:"A2", readMinutes:3, xp:60,
    icon:"🐝", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    text:[
      "Bees play an extremely important role in nature. As they fly from flower to flower collecting nectar, they also transfer pollen, which helps plants reproduce.",
      "This process, called pollination, is essential for the growth of fruits, vegetables, and many other crops that humans depend on for food.",
      "Scientists estimate that nearly one-third of the food we eat exists because of pollinators like bees. Without them, many plants would simply disappear.",
      "Unfortunately, bee populations around the world are declining due to pesticides, pollution, and the loss of natural habitats. Many environmentalists are now working hard to protect bees and raise awareness about their importance."
    ],
    vocab:{
      "nectar":{meaning_bn:"মধু, ফুলের রস", pos:"noun"},
      "pollination":{meaning_bn:"পরাগসংযোগ", pos:"noun"},
      "estimate":{meaning_bn:"আনুমানিক হিসাব করা", pos:"verb"},
      "habitats":{meaning_bn:"বসবাসস্থল", pos:"noun"}
    },
    quiz:[
      {q:"What do bees transfer between flowers?", opts:["Water","Pollen","Seeds","Leaves"], ans:1, exp:"'They also transfer pollen'।"},
      {q:"What fraction of our food depends on pollinators?", opts:["One-tenth","One-fifth","One-third","Half"], ans:2, exp:"'Nearly one-third of the food we eat'।"},
      {q:"Why are bee populations declining?", opts:["Too much rain","Pesticides, pollution, habitat loss","Too many flowers","Cold weather"], ans:1, exp:"'Due to pesticides, pollution, and the loss of natural habitats'।"}
    ]
  },

  { id:"r9", title:"The Rise of Online Learning", category:"Article", level:"B1", readMinutes:4, xp:80,
    icon:"💻", color:"rgba(129,140,248,.12)", border:"rgba(129,140,248,.25)",
    text:[
      "Over the past decade, online learning has transformed the way millions of students access education worldwide. What was once considered a niche alternative to traditional classrooms has now become mainstream.",
      "Several factors have contributed to this shift. Firstly, the widespread availability of smartphones and affordable internet has made digital content accessible even in remote areas.",
      "Secondly, online platforms often offer more flexibility, allowing learners to study at their own pace and revisit difficult topics as many times as needed — something a traditional classroom rarely permits.",
      "However, critics argue that online learning lacks the social interaction and discipline that face-to-face education provides. Students may also struggle with self-motivation when no teacher is physically present to guide them.",
      "Despite these challenges, most educators agree that a blended approach, combining both online and traditional methods, may offer the most effective path forward for the future of education."
    ],
    vocab:{
      "niche":{meaning_bn:"নির্দিষ্ট ক্ষুদ্র গোষ্ঠীর জন্য", pos:"adjective"},
      "mainstream":{meaning_bn:"মূলধারা", pos:"adjective"},
      "flexibility":{meaning_bn:"নমনীয়তা", pos:"noun"},
      "self-motivation":{meaning_bn:"আত্ম-উদ্দীপনা", pos:"noun"},
      "blended":{meaning_bn:"মিশ্রিত", pos:"adjective"}
    },
    quiz:[
      {q:"What has made online learning more accessible?", opts:["Cheaper books","Smartphones and affordable internet","More teachers","Government grants"], ans:1, exp:"'The widespread availability of smartphones and affordable internet'।"},
      {q:"What advantage does online learning offer?", opts:["More homework","Flexibility to study at one's own pace","No exams","Shorter courses"], ans:1, exp:"'Online platforms often offer more flexibility'।"},
      {q:"What do critics say online learning lacks?", opts:["Good content","Social interaction and discipline","Affordable price","Variety of subjects"], ans:1, exp:"'Lacks the social interaction and discipline'।"},
      {q:"What do most educators recommend?", opts:["Only online classes","Only traditional classes","A blended approach","Stopping online classes"], ans:2, exp:"'A blended approach... may offer the most effective path forward'।"}
    ]
  },

  { id:"r10", title:"Climate Change and Bangladesh", category:"Article", level:"B1", readMinutes:4, xp:80,
    icon:"🌍", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    text:[
      "Bangladesh is widely recognised as one of the countries most vulnerable to the effects of climate change. Its low-lying geography and dense population make it especially susceptible to flooding, cyclones, and rising sea levels.",
      "Scientists predict that even a modest rise in sea level could displace millions of people living along the coastal regions, forcing them to migrate inland in search of safer ground.",
      "Agriculture, which forms the backbone of the rural economy, is also under threat. Unpredictable rainfall patterns and increased salinity in soil have already begun affecting crop yields in several coastal districts.",
      "In response, the government and various organisations have implemented adaptation strategies, including the construction of embankments, the cultivation of salt-resistant rice varieties, and early-warning systems for natural disasters.",
      "While these measures provide some relief, experts insist that long-term solutions require global cooperation, since climate change is a problem that no single nation can solve alone."
    ],
    vocab:{
      "vulnerable":{meaning_bn:"ঝুঁকিপূর্ণ", pos:"adjective"},
      "susceptible":{meaning_bn:"প্রবণ, ঝুঁকিগ্রস্ত", pos:"adjective"},
      "displace":{meaning_bn:"স্থানচ্যুত করা", pos:"verb"},
      "salinity":{meaning_bn:"লবণাক্ততা", pos:"noun"},
      "embankments":{meaning_bn:"বাঁধ", pos:"noun"}
    },
    quiz:[
      {q:"Why is Bangladesh vulnerable to climate change?", opts:["High elevation","Low-lying geography and dense population","Small population","Desert climate"], ans:1, exp:"'Its low-lying geography and dense population'।"},
      {q:"What threat does agriculture face?", opts:["Too much sunlight","Unpredictable rainfall and soil salinity","Lack of farmers","Too many crops"], ans:1, exp:"'Unpredictable rainfall patterns and increased salinity in soil'।"},
      {q:"What is one adaptation strategy mentioned?", opts:["Cutting down forests","Building embankments","Stopping farming","Closing coastal areas"], ans:1, exp:"'The construction of embankments'।"},
      {q:"What do experts say about long-term solutions?", opts:["Only Bangladesh can solve it","It requires global cooperation","It cannot be solved","It is not a real problem"], ans:1, exp:"'Long-term solutions require global cooperation'।"}
    ]
  },

  { id:"r11", title:"The Power of Habit", category:"Article", level:"B2", readMinutes:5, xp:100,
    icon:"🔁", color:"rgba(251,113,133,.12)", border:"rgba(251,113,133,.25)",
    text:[
      "Habits are the small, often unconscious decisions that shape the majority of our daily lives. Researchers estimate that nearly forty percent of our daily actions are not the result of deliberate decision-making but rather automatic routines performed out of habit.",
      "Understanding how habits form can be tremendously useful for anyone wishing to improve their productivity or break unwanted patterns of behaviour. According to behavioural scientists, every habit consists of three components: a cue, a routine, and a reward.",
      "The cue acts as a trigger that signals the brain to initiate a particular behaviour. The routine is the behaviour itself, which can be physical, emotional, or mental. Finally, the reward reinforces the behaviour, making the brain more likely to remember and repeat the pattern in the future.",
      "Breaking a bad habit, therefore, is not simply about willpower. It often requires identifying the underlying cue and consciously replacing the routine with a healthier alternative, while still providing the brain with a similar reward.",
      "This explains why many self-improvement strategies that focus solely on eliminating a behaviour, without addressing its root cause, tend to fail in the long run."
    ],
    vocab:{
      "unconscious":{meaning_bn:"অচেতন", pos:"adjective"},
      "deliberate":{meaning_bn:"ইচ্ছাকৃত", pos:"adjective"},
      "trigger":{meaning_bn:"উদ্দীপক, কারণ", pos:"noun"},
      "reinforces":{meaning_bn:"আরও দৃঢ় করে", pos:"verb"},
      "willpower":{meaning_bn:"ইচ্ছাশক্তি", pos:"noun"}
    },
    quiz:[
      {q:"What percentage of daily actions are habitual, according to researchers?", opts:["10%","25%","Nearly 40%","75%"], ans:2, exp:"'Nearly forty percent of our daily actions'।"},
      {q:"What are the three components of a habit?", opts:["Thought, action, result","Cue, routine, reward","Idea, plan, outcome","Trigger, fear, response"], ans:1, exp:"'A cue, a routine, and a reward'।"},
      {q:"What is required to break a bad habit successfully?", opts:["Only willpower","Identifying the cue and replacing the routine","Ignoring the habit","Punishing oneself"], ans:1, exp:"'Identifying the underlying cue and consciously replacing the routine'।"},
      {q:"Why do many self-improvement strategies fail?", opts:["They are too easy","They don't address the root cause","People don't try hard enough","They take too long"], ans:1, exp:"'Without addressing its root cause, tend to fail in the long run'।"}
    ]
  },

  { id:"r12", title:"Artificial Intelligence: Promise and Peril", category:"Article", level:"C1", readMinutes:6, xp:120,
    icon:"🤖", color:"rgba(167,139,250,.12)", border:"rgba(167,139,250,.25)",
    text:[
      "Artificial intelligence has rapidly evolved from a niche academic pursuit into one of the most transformative technologies of the modern era, permeating nearly every sector of human endeavour, from healthcare diagnostics to financial forecasting.",
      "Proponents argue that AI systems, with their capacity to process vast quantities of data far beyond human capability, hold the potential to solve some of humanity's most intractable problems, including disease prediction, climate modelling, and resource optimisation.",
      "Nevertheless, this rapid proliferation has not been without considerable controversy. Critics highlight concerns surrounding algorithmic bias, wherein AI systems trained on flawed or unrepresentative datasets can inadvertently perpetuate existing societal inequalities.",
      "Furthermore, the displacement of human labour by automation raises profound questions about the future structure of employment and economic distribution, particularly within industries reliant on routine, repetitive tasks.",
      "Perhaps most contentious of all is the question of accountability: when an autonomous system makes a consequential error, determining where responsibility lies — with the developer, the deploying organisation, or the technology itself — remains a largely unresolved legal and ethical quandary.",
      "As governments and international bodies scramble to draft regulatory frameworks, the central challenge remains striking a delicate balance between fostering innovation and safeguarding against the technology's most pernicious potential consequences."
    ],
    vocab:{
      "permeating":{meaning_bn:"সর্বত্র বিস্তার লাভ করা", pos:"verb"},
      "intractable":{meaning_bn:"দুরূহ, সমাধান করা কঠিন", pos:"adjective"},
      "proliferation":{meaning_bn:"দ্রুত বিস্তার/বৃদ্ধি", pos:"noun"},
      "inadvertently":{meaning_bn:"অনিচ্ছাকৃতভাবে", pos:"adverb"},
      "contentious":{meaning_bn:"বিতর্কিত", pos:"adjective"},
      "pernicious":{meaning_bn:"ক্ষতিকর", pos:"adjective"}
    },
    quiz:[
      {q:"What do proponents of AI argue?", opts:["AI is dangerous and should be banned","AI can solve intractable problems like disease prediction","AI has no real benefits","AI only works in healthcare"], ans:1, exp:"'Hold the potential to solve some of humanity's most intractable problems'।"},
      {q:"What is 'algorithmic bias' according to the passage?", opts:["A type of computer virus","AI systems perpetuating inequalities from flawed data","A pricing strategy","A programming language error"], ans:1, exp:"'AI systems trained on flawed or unrepresentative datasets can inadvertently perpetuate existing societal inequalities'।"},
      {q:"What unresolved question does the passage raise about errors?", opts:["How much AI costs","Who is accountable when AI makes an error","How fast AI can compute","Where AI is developed"], ans:1, exp:"'Determining where responsibility lies... remains a largely unresolved legal and ethical quandary'।"},
      {q:"What is the central challenge for regulators, per the passage?", opts:["Banning AI completely","Balancing innovation with safeguarding against risks","Making AI cheaper","Increasing AI speed"], ans:1, exp:"'Striking a delicate balance between fostering innovation and safeguarding against... consequences'।"}
    ]
  },

];

/* ── Categories list (derived) ── */
export const CATEGORIES = ["All", ...new Set(PASSAGES.map(p => p.category))];

/* ── Level summary ── */
export const LEVEL_COUNT = PASSAGES.reduce((acc, p) => {
  acc[p.level] = (acc[p.level] || 0) + 1;
  return acc;
}, {});
