/* =====================================================
   ENGLISH SHEKHO — LISTENING CENTER DATA
   Total: 42 lessons | A1→C2 | 5 Categories
   ===================================================== */

export const LESSONS = [

  /* ════════════════════════════════
     CONVERSATION — 12 lessons
  ════════════════════════════════ */

  // A1
  { id:"l1", title:"Daily Greetings & Introductions", category:"Conversation", level:"A1", dur:"3:24", durSec:204, xp:50,
    icon:"👋", color:"rgba(45,212,191,.12)", border:"rgba(45,212,191,.25)",
    transcript:[
      "Hello! My name is Sarah. What's your name?",
      "Hi Sarah! I'm Rahim. Nice to meet you.",
      "Nice to meet you too, Rahim. Where are you from?",
      "I'm from Dhaka, Bangladesh. And you?",
      "I'm from London. Are you a student?",
      "Yes, I'm studying English. It's a beautiful language.",
      "That's wonderful! English opens so many doors in life.",
      "I agree. I want to work in an international company one day.",
      "That's a great goal. Keep practising and you'll get there!",
      "Thank you so much, Sarah. You're very encouraging.",
    ],
    quiz:[
      {q:"Where is Rahim from?", opts:["London","Dhaka","Chittagong","New York"], ans:1, exp:"Rahim বলেছে 'I'm from Dhaka, Bangladesh.'"},
      {q:"Why is Rahim learning English?", opts:["For fun","To travel","To work in an international company","For school"], ans:2, exp:"Rahim বলেছে 'I want to work in an international company.'"},
      {q:"What does Sarah say about English?", opts:["It is difficult","It opens many doors","It is boring","It is not useful"], ans:1, exp:"Sarah বলেছে 'English opens so many doors in life.'"},
    ]
  },

  { id:"l1b", title:"Numbers, Days & Time", category:"Conversation", level:"A1", dur:"3:10", durSec:190, xp:50,
    icon:"🔢", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "Excuse me. What time is it, please?",
      "It's half past three in the afternoon.",
      "Thank you. And what day is it today?",
      "Today is Wednesday the fifth of June.",
      "Oh! My appointment is on Friday the seventh.",
      "That's the day after tomorrow.",
      "Yes, at ten o'clock in the morning.",
      "Don't be late! The office opens at nine thirty.",
      "I'll be there at five to ten. Is that okay?",
      "Perfect. See you on Friday then. Goodbye!",
    ],
    quiz:[
      {q:"What time is it in the conversation?", opts:["3:00","3:30","3:15","4:30"], ans:1, exp:"'It's half past three' মানে ৩:৩০।"},
      {q:"When is the appointment?", opts:["Wednesday","Thursday","Friday","Saturday"], ans:2, exp:"'My appointment is on Friday the seventh.'"},
      {q:"What time does the office open?", opts:["9:00","9:30","10:00","8:30"], ans:1, exp:"'The office opens at nine thirty.'"},
    ]
  },

  { id:"l1c", title:"Colours, Clothes & Shopping", category:"Conversation", level:"A1", dur:"3:40", durSec:220, xp:50,
    icon:"🛍️", color:"rgba(251,113,133,.12)", border:"rgba(251,113,133,.25)",
    transcript:[
      "Good morning! Can I help you?",
      "Yes please. I'm looking for a shirt.",
      "Of course. What colour would you like?",
      "I'd like a blue one, please. Or maybe white.",
      "We have this lovely blue shirt here. It's very popular.",
      "How much does it cost?",
      "It's twenty-five pounds.",
      "That's a bit expensive. Do you have anything cheaper?",
      "Yes, this white one is only fifteen pounds.",
      "Perfect! I'll take the white one, please.",
      "Great choice. Would you like a bag?",
      "Yes please. Thank you very much!",
    ],
    quiz:[
      {q:"What is the customer looking for?", opts:["Trousers","A shirt","A jacket","Shoes"], ans:1, exp:"'I'm looking for a shirt.'"},
      {q:"How much is the white shirt?", opts:["£25","£20","£15","£10"], ans:2, exp:"'This white one is only fifteen pounds.'"},
      {q:"Which shirt does the customer buy?", opts:["Blue","White","Red","Green"], ans:1, exp:"'I'll take the white one, please.'"},
    ]
  },

  // A2
  { id:"l2", title:"At the Restaurant", category:"Conversation", level:"A2", dur:"4:10", durSec:250, xp:75,
    icon:"🍽️", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "Good evening! Welcome to The Garden Restaurant.",
      "Good evening. A table for two, please.",
      "Of course. This way, please. Here is your menu.",
      "Thank you. What do you recommend today?",
      "Our chef's special is grilled salmon with vegetables. It's delicious.",
      "That sounds lovely. I'll have that, please.",
      "And for you, sir?",
      "I'd like the pasta carbonara, please.",
      "Excellent choices. Would you like anything to drink?",
      "Two glasses of water and a lemonade, please.",
    ],
    quiz:[
      {q:"What is the chef's special?", opts:["Pasta","Pizza","Grilled salmon","Burger"], ans:2, exp:"Waiter বলেছে 'Our chef's special is grilled salmon with vegetables.'"},
      {q:"What drink was ordered?", opts:["Coffee","Two waters and a lemonade","Tea","Juice"], ans:1, exp:"Customer বলেছে 'Two glasses of water and a lemonade.'"},
    ]
  },

  { id:"l3", title:"Asking for Directions", category:"Conversation", level:"A2", dur:"3:45", durSec:225, xp:75,
    icon:"🗺️", color:"rgba(251,146,60,.12)", border:"rgba(251,146,60,.25)",
    transcript:[
      "Excuse me, could you help me? I'm looking for the train station.",
      "Of course! It's not far from here.",
      "Go straight down this road for about five minutes.",
      "Then turn left at the traffic lights.",
      "The station will be on your right, next to a big supermarket.",
      "That sounds straightforward. About how far is it?",
      "It's about a ten-minute walk from here.",
      "Thank you so much. You've been very helpful.",
      "You're welcome. Have a good journey!",
    ],
    quiz:[
      {q:"Where should you turn?", opts:["Right at the lights","Left at the lights","Straight ahead","Back the way you came"], ans:1, exp:"'Turn left at the traffic lights.'"},
      {q:"How long is the walk?", opts:["5 minutes","10 minutes","15 minutes","20 minutes"], ans:1, exp:"'It's about a ten-minute walk.'"},
    ]
  },

  { id:"l4b", title:"Making a Phone Call", category:"Conversation", level:"A2", dur:"3:55", durSec:235, xp:75,
    icon:"📞", color:"rgba(129,140,248,.12)", border:"rgba(129,140,248,.25)",
    transcript:[
      "Hello, this is City Clinic. How can I help you?",
      "Hello. I'd like to make an appointment with Dr Ahmed, please.",
      "Of course. Is this your first visit with us?",
      "No, I'm an existing patient. My name is Karim Hossain.",
      "Let me check the schedule. Are you available on Thursday at 3pm?",
      "Thursday at 3pm works perfectly for me.",
      "Wonderful. Can I confirm your phone number?",
      "Yes, it's zero one seven, double four, three eight nine.",
      "Thank you, Mr Hossain. We'll see you on Thursday.",
      "Great. Thank you very much. Goodbye.",
    ],
    quiz:[
      {q:"Why is Karim calling?", opts:["To cancel an appointment","To make an appointment","To ask for directions","To speak to a nurse"], ans:1, exp:"'I'd like to make an appointment with Dr Ahmed.'"},
      {q:"When is the appointment?", opts:["Wednesday 3pm","Thursday 3pm","Friday 3pm","Thursday 5pm"], ans:1, exp:"'Are you available on Thursday at 3pm?'"},
    ]
  },

  { id:"l2b", title:"At the Doctor's", category:"Conversation", level:"A2", dur:"4:00", durSec:240, xp:75,
    icon:"🏥", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    transcript:[
      "Good morning. Please come in and have a seat.",
      "Good morning, Doctor. I haven't been feeling well for a few days.",
      "I'm sorry to hear that. What seems to be the problem?",
      "I have a sore throat and a headache. I also feel very tired.",
      "How long have you had these symptoms?",
      "Since Monday. That's about four days now.",
      "Let me take your temperature. Yes, you have a slight fever.",
      "Is it serious?",
      "No, it sounds like a common cold. I'll prescribe some medicine.",
      "Should I rest at home?",
      "Yes, rest for two or three days and drink plenty of water.",
      "Thank you, Doctor. I hope I feel better soon.",
    ],
    quiz:[
      {q:"What are the patient's symptoms?", opts:["Headache only","Sore throat and headache","Stomach pain","Broken leg"], ans:1, exp:"'I have a sore throat and a headache. I also feel very tired.'"},
      {q:"How long has the patient been unwell?", opts:["Two days","Three days","Four days","A week"], ans:2, exp:"'Since Monday. That's about four days now.'"},
      {q:"What does the doctor recommend?", opts:["Surgery","Rest and water","Exercise","A hospital stay"], ans:1, exp:"'Rest for two or three days and drink plenty of water.'"},
    ]
  },

  // B1
  { id:"l4c", title:"Job Interview", category:"Conversation", level:"B1", dur:"5:30", durSec:330, xp:100,
    icon:"💼", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    transcript:[
      "Good morning. Please take a seat. Thank you for coming in today.",
      "Good morning. Thank you for having me. I'm really excited about this opportunity.",
      "Let's start. Can you tell me a little about yourself?",
      "Of course. I graduated in Computer Science two years ago.",
      "Since then, I've been working as a junior developer at a software firm.",
      "I've gained strong experience in web development and team collaboration.",
      "That's impressive. Why do you want to work for our company specifically?",
      "I've followed your work for a long time. Your products solve real problems.",
      "I believe my skills would contribute meaningfully to your team.",
      "What would you say is your greatest strength?",
      "I'd say my ability to learn quickly and adapt to new challenges.",
      "Excellent. We'll be in touch within the next few days. Thank you.",
    ],
    quiz:[
      {q:"How long has the candidate been working?", opts:["One year","Two years","Three years","Just graduated"], ans:1, exp:"Two years since graduation."},
      {q:"What is the candidate's greatest strength?", opts:["Leadership","Technical skills","Learning quickly and adapting","Communication"], ans:2, exp:"'My ability to learn quickly and adapt to new challenges.'"},
      {q:"When will the company respond?", opts:["Today","Tomorrow","Within a few days","Next week"], ans:2, exp:"'We'll be in touch within the next few days.'"},
    ]
  },

  { id:"l3b", title:"Planning a Holiday", category:"Conversation", level:"B1", dur:"5:00", durSec:300, xp:100,
    icon:"✈️", color:"rgba(96,165,250,.12)", border:"rgba(96,165,250,.25)",
    transcript:[
      "I've been thinking about where to go on holiday this year.",
      "Really? Any ideas? I'd love to go somewhere warm.",
      "I was thinking about Turkey or maybe Thailand.",
      "Thailand sounds amazing. I've always wanted to go there.",
      "It's not too expensive if you book early. Flights are around four hundred pounds.",
      "That's reasonable. How long would we go for?",
      "Two weeks would be perfect. We could visit Bangkok and the islands.",
      "What about accommodation? Hotels can be pricey.",
      "We could mix it up — a few nights in a hotel, then a guesthouse.",
      "That's a great idea. When are you thinking of going?",
      "Probably October. The weather is lovely and it's less crowded.",
      "Perfect. Let's start looking at flights this weekend!",
    ],
    quiz:[
      {q:"Which destination do they decide on?", opts:["Turkey","Thailand","Spain","Japan"], ans:1, exp:"'Thailand sounds amazing. I've always wanted to go there.'"},
      {q:"How much are the flights approximately?", opts:["£200","£300","£400","£500"], ans:2, exp:"'Flights are around four hundred pounds.'"},
      {q:"When do they plan to go?", opts:["July","August","September","October"], ans:3, exp:"'Probably October. The weather is lovely and it's less crowded.'"},
    ]
  },

  // B2
  { id:"l4d", title:"Discussing a Problem at Work", category:"Conversation", level:"B2", dur:"5:50", durSec:350, xp:125,
    icon:"🤝", color:"rgba(251,113,133,.12)", border:"rgba(251,113,133,.25)",
    transcript:[
      "I need to raise something that's been on my mind for a while.",
      "Of course. Please go ahead. This is a safe space to talk.",
      "I feel that my contributions aren't being acknowledged in team meetings.",
      "I understand how that must feel. Can you give me a specific example?",
      "Last Tuesday, I proposed the new workflow system, but it was attributed to someone else.",
      "I wasn't aware of that. That certainly shouldn't have happened.",
      "I'd appreciate it if credit were given where it's due in future.",
      "Absolutely. I'll ensure that recognition is handled more carefully going forward.",
      "I also think a more structured meeting format might help everyone contribute fairly.",
      "That's a constructive suggestion. Let's pilot that in our next meeting.",
      "Thank you for listening. I feel much better having raised this.",
      "Thank you for bringing it to my attention. Open communication is essential.",
    ],
    quiz:[
      {q:"What is the main problem being raised?", opts:["Being underpaid","Contributions not being acknowledged","Too much workload","Poor communication"], ans:1, exp:"'I feel that my contributions aren't being acknowledged.'"},
      {q:"What solution does the employee suggest?", opts:["More pay","A new office","A structured meeting format","Fewer meetings"], ans:2, exp:"'A more structured meeting format might help everyone contribute fairly.'"},
    ]
  },

  // C1
  { id:"l4e", title:"Negotiating a Contract", category:"Conversation", level:"C1", dur:"6:30", durSec:390, xp:150,
    icon:"📋", color:"rgba(167,139,250,.12)", border:"rgba(167,139,250,.25)",
    transcript:[
      "Thank you for coming in. I understand you've reviewed our proposal.",
      "Yes, and while we find the terms largely acceptable, there are a few sticking points.",
      "Of course. We're open to discussion. What are your main concerns?",
      "Primarily the payment schedule. Forty percent upfront is more than we typically commit to.",
      "We understand your position. Could you comfortably manage thirty percent?",
      "That would be more workable. We'd also need to revisit the penalty clause.",
      "The penalty clause is fairly standard in our contracts. What specifically concerns you?",
      "The timeline for resolving disputes seems unreasonably short — just fourteen days.",
      "We could extend that to twenty-one days. Would that address your concern?",
      "That would be acceptable. I think we're close to an agreement.",
      "Excellent. I'll have our legal team draft the revised terms by Friday.",
      "We look forward to a productive partnership. Thank you for your flexibility.",
    ],
    quiz:[
      {q:"What is one of the main concerns raised?", opts:["The office location","The payment schedule","The number of employees","The product quality"], ans:1, exp:"'Forty percent upfront is more than we typically commit to.'"},
      {q:"How many days is the revised dispute timeline?", opts:["14 days","21 days","28 days","30 days"], ans:1, exp:"'We could extend that to twenty-one days.'"},
      {q:"When will the revised terms be ready?", opts:["Monday","Wednesday","Friday","Next week"], ans:2, exp:"'I'll have our legal team draft the revised terms by Friday.'"},
    ]
  },

  // C2
  { id:"l4f", title:"A Philosophical Debate", category:"Conversation", level:"C2", dur:"7:30", durSec:450, xp:175,
    icon:"🧠", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "Do you think free will actually exists, or is it simply an illusion?",
      "That's one of the most contested questions in philosophy.",
      "I lean towards compatibilism — the view that free will and determinism can coexist.",
      "Interesting. But if every action is the result of prior causes, in what sense are we truly free?",
      "Freedom, in the compatibilist sense, means acting according to one's own desires and reasons.",
      "But those desires themselves are shaped by factors entirely outside our control.",
      "Agreed. Yet the experience of deliberation feels genuinely meaningful.",
      "Perhaps. But neuroscience suggests decisions are made before we're consciously aware of them.",
      "That research is fascinating but not conclusive. Consciousness may play a role we don't yet understand.",
      "So you'd argue that the question remains open?",
      "Absolutely. Philosophy thrives in the space between certainty and doubt.",
      "A fitting place to leave it. The uncertainty itself seems profoundly human.",
    ],
    quiz:[
      {q:"What philosophical position does the first speaker lean towards?", opts:["Hard determinism","Libertarianism","Compatibilism","Nihilism"], ans:2, exp:"'I lean towards compatibilism — the view that free will and determinism can coexist.'"},
      {q:"What does neuroscience suggest about decisions?", opts:["We are always free","Decisions are made after conscious awareness","Decisions are made before conscious awareness","The brain has no role"], ans:2, exp:"'Neuroscience suggests decisions are made before we're consciously aware of them.'"},
    ]
  },


  /* ════════════════════════════════
     STORY — 10 lessons
  ════════════════════════════════ */

  // A1
  { id:"l5", title:"The Clever Fox", category:"Story", level:"A1", dur:"5:20", durSec:320, xp:75,
    icon:"🦊", color:"rgba(251,113,133,.12)", border:"rgba(251,113,133,.25)",
    transcript:[
      "Once upon a time, in a deep green forest, there lived a very clever fox.",
      "The fox was known throughout the forest for his quick thinking.",
      "One hot summer day, the fox was very thirsty.",
      "He searched and searched for water but could not find any.",
      "Finally, he discovered a deep well at the edge of the forest.",
      "He jumped inside and drank until he was no longer thirsty.",
      "But then he realised he could not climb out — the walls were too smooth.",
      "Just then, a goat came by and looked into the well.",
      "Is the water good? asked the goat.",
      "It's the most delicious water in the world! said the fox.",
      "The goat jumped in eagerly. The fox climbed on the goat's back and jumped out.",
      "Always look before you leap! laughed the fox as he ran away.",
    ],
    quiz:[
      {q:"Why did the fox jump into the well?", opts:["To hide","He was thirsty","To swim","He fell in"], ans:1, exp:"সে খুব পিপাসার্ত ছিল।"},
      {q:"How did the fox escape?", opts:["He climbed the walls","A rope was lowered","He climbed on the goat's back","He waited for help"], ans:2, exp:"'The fox climbed on the goat's back and jumped out.'"},
      {q:"What is the moral?", opts:["Be kind to animals","Always look before you leap","Never trust a fox","Water is precious"], ans:1, exp:"'Always look before you leap!'"},
    ]
  },

  { id:"l5b", title:"The Ant and the Grasshopper", category:"Story", level:"A1", dur:"4:30", durSec:270, xp:75,
    icon:"🐜", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    transcript:[
      "One bright summer day, a grasshopper was singing and dancing in the field.",
      "He saw a line of ants walking past, carrying heavy grains of food.",
      "Why are you working so hard? asked the grasshopper. Come and play with me!",
      "We are storing food for winter, said the leader ant. You should do the same.",
      "Winter is far away! laughed the grasshopper. There is plenty of time.",
      "The ants said nothing and continued working hard every day.",
      "When winter came, the field was covered in thick white snow.",
      "The grasshopper had nothing to eat. He was cold and very hungry.",
      "He went to the ants and asked, Please share your food with me.",
      "We warned you in summer, said the ant. We worked hard. You played.",
      "The grasshopper understood his mistake. It was too late to change the past.",
      "The moral: prepare today for the challenges of tomorrow.",
    ],
    quiz:[
      {q:"What were the ants doing in summer?", opts:["Playing","Sleeping","Storing food","Swimming"], ans:2, exp:"'We are storing food for winter.'"},
      {q:"What happened to the grasshopper in winter?", opts:["He was happy","He found food","He was cold and hungry","He helped the ants"], ans:2, exp:"'The grasshopper had nothing to eat. He was cold and very hungry.'"},
      {q:"What is the moral of the story?", opts:["Play every day","Prepare today for tomorrow","Never help others","Winter is fun"], ans:1, exp:"'Prepare today for the challenges of tomorrow.'"},
    ]
  },

  // A2
  { id:"l6b", title:"The Last Letter", category:"Story", level:"A2", dur:"5:00", durSec:300, xp:75,
    icon:"✉️", color:"rgba(96,165,250,.12)", border:"rgba(96,165,250,.25)",
    transcript:[
      "Emma found an old letter in her grandmother's wooden box.",
      "It was written in neat handwriting on yellowed paper.",
      "My dearest Emma, it began, by the time you read this, I will be gone.",
      "But I want you to know how proud I am of the person you have become.",
      "You have your mother's kindness and your grandfather's courage.",
      "Never stop asking questions, and never stop being curious.",
      "The world is full of wonder if you look at it with open eyes.",
      "Emma read the letter three times, her tears falling softly.",
      "She placed it carefully back in the box and held it close.",
      "Some words, she thought, can last forever.",
    ],
    quiz:[
      {q:"Where did Emma find the letter?", opts:["In a drawer","In her grandmother's wooden box","At the post office","Under her bed"], ans:1, exp:"'Emma found an old letter in her grandmother's wooden box.'"},
      {q:"What advice does the letter give?", opts:["Work hard","Travel the world","Never stop being curious","Save money"], ans:2, exp:"'Never stop asking questions, and never stop being curious.'"},
    ]
  },

  { id:"l5c", title:"The Lighthouse Keeper", category:"Story", level:"A2", dur:"5:30", durSec:330, xp:75,
    icon:"🏮", color:"rgba(251,146,60,.12)", border:"rgba(251,146,60,.25)",
    transcript:[
      "Old Thomas had been the lighthouse keeper for forty years.",
      "Every night, without fail, he lit the great lamp at sunset.",
      "One stormy November evening, the power failed just after dark.",
      "Thomas knew that ships were out there in the dangerous sea.",
      "Without the light, they would crash on the rocks below.",
      "He climbed to the top of the tower with a small hand lantern.",
      "The wind was so strong it nearly knocked him off his feet.",
      "But Thomas held on and held his lantern high all through the night.",
      "In the morning, three ships were safely anchored in the bay.",
      "The captains came ashore and found the old man asleep at the top of the tower.",
      "None of them knew his name, but all of them owed him their lives.",
      "Sometimes the greatest heroes are the ones no one ever hears about.",
    ],
    quiz:[
      {q:"Why did Thomas carry a hand lantern to the top?", opts:["To read","Because the power failed","For decoration","To signal ships to stop"], ans:1, exp:"'The power failed just after dark.'"},
      {q:"How many ships were saved?", opts:["One","Two","Three","Four"], ans:2, exp:"'Three ships were safely anchored in the bay.'"},
      {q:"What is the message of the story?", opts:["Lighthouses are important","The greatest heroes are often unrecognised","Never go to sea","Old men are brave"], ans:1, exp:"'Sometimes the greatest heroes are the ones no one ever hears about.'"},
    ]
  },

  // B1
  { id:"l6", title:"The Gift of Time", category:"Story", level:"B1", dur:"6:30", durSec:390, xp:100,
    icon:"⏰", color:"rgba(129,140,248,.12)", border:"rgba(129,140,248,.25)",
    transcript:[
      "There was once a young man named Daniel who was always busy.",
      "He worked long hours and rarely spent time with his family.",
      "His father was an old man who loved to sit by the garden.",
      "Every evening, his father would call, Daniel, come sit with me.",
      "But Daniel always replied, Not now, Father. I'm too busy.",
      "One autumn morning, Daniel's father fell very ill.",
      "As Daniel sat beside his hospital bed, his father whispered,",
      "Son, all the money in the world cannot buy back lost time.",
      "Daniel's eyes filled with tears. He finally understood.",
      "Time is the most precious gift we can give to those we love.",
      "From that day forward, Daniel made sure to be present for his family.",
    ],
    quiz:[
      {q:"What did Daniel's father love to do?", opts:["Read books","Sit by the garden","Cook food","Travel"], ans:1, exp:"'His father was an old man who loved to sit by the garden.'"},
      {q:"What is the main message?", opts:["Work hard always","Money is important","Time is the most precious gift","Travel while young"], ans:2, exp:"'Time is the most precious gift we can give.'"},
    ]
  },

  { id:"l6e", title:"The Bridge Builder", category:"Story", level:"B1", dur:"6:00", durSec:360, xp:100,
    icon:"🌉", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "An old man, travelling alone, came to the edge of a wide river at dusk.",
      "The current was strong and cold, but he crossed safely to the other side.",
      "As he reached dry land, he began to build a bridge across the river.",
      "A traveller passing by said, Old man, why do you build this bridge?",
      "You have already crossed the river. You will never use it again.",
      "The old man smiled and continued working.",
      "True, he said. But behind me on the trail, there is a young man who must cross this river.",
      "To him, this current is swift and cold and dark.",
      "The bridge I build today he will cross tomorrow.",
      "The traveller understood and silently joined in the work.",
      "By nightfall, the bridge was complete.",
      "Building for others what we no longer need for ourselves — that is wisdom.",
    ],
    quiz:[
      {q:"Why does the old man build the bridge?", opts:["To impress others","For a young man who must cross later","To earn money","Because he is bored"], ans:1, exp:"'There is a young man who must cross this river.'"},
      {q:"What does the traveller do after understanding?", opts:["Leaves","Watches","Joins in the work","Criticises"], ans:2, exp:"'The traveller understood and silently joined in the work.'"},
    ]
  },

  // B2
  { id:"l6c", title:"The Scientist's Dream", category:"Story", level:"B2", dur:"7:00", durSec:420, xp:125,
    icon:"🔬", color:"rgba(167,139,250,.12)", border:"rgba(167,139,250,.25)",
    transcript:[
      "Dr Maya had dedicated thirty years of her life to finding a cure.",
      "Her colleagues had given up, but Maya refused to abandon her research.",
      "She believed that somewhere in the data lay the answer.",
      "One sleepless night, she noticed an anomaly in her results.",
      "A protein she had dismissed years ago was behaving unexpectedly.",
      "With trembling hands, she ran the test again. And again.",
      "Each time, the results were the same. She had found something remarkable.",
      "The discovery was not just a cure — it was a new understanding of life itself.",
      "Maya sat quietly for a long time, overcome with a profound sense of responsibility.",
      "She picked up the phone and called her team. It was 3am, but no one minded.",
      "Sometimes, she later wrote, the greatest breakthroughs come to those who simply refuse to stop.",
    ],
    quiz:[
      {q:"What had Maya been searching for?", opts:["A new planet","A cure","A scientific theory","Funding"], ans:1, exp:"'Dr Maya had dedicated thirty years of her life to finding a cure.'"},
      {q:"What did she notice that led to the discovery?", opts:["A new chemical","An anomaly in her results","A colleague's mistake","A research paper"], ans:1, exp:"'She noticed an anomaly in her results.'"},
      {q:"What time did she call her team?", opts:["Midnight","1am","3am","Dawn"], ans:2, exp:"'She picked up the phone and called her team. It was 3am.'"},
    ]
  },

  // C1
  { id:"l6d", title:"The Mountain Between Us", category:"Story", level:"C1", dur:"8:00", durSec:480, xp:150,
    icon:"🏔️", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "There are certain truths that only solitude can teach you.",
      "I learned mine at four thousand metres above sea level, alone, in a blizzard.",
      "The expedition had gone wrong on the second day, when Torres twisted his ankle.",
      "We had a choice — turn back, or press on with our diminishing supplies.",
      "Against my better judgement, I chose to continue alone.",
      "The mountain does not care about your ambition or your timeline.",
      "It exists on its own terms, indifferent to human desire.",
      "As night fell, the temperature plummeted to minus twenty.",
      "I built a snow shelter and listened to the wind scream outside.",
      "In that stillness, stripped of every comfort, I understood something fundamental.",
      "We do not conquer nature. We are merely permitted to pass through it.",
      "I descended the next morning, humbled, but profoundly changed.",
    ],
    quiz:[
      {q:"Why did the expedition go wrong?", opts:["Bad weather","Torres twisted his ankle","They ran out of food","They got lost"], ans:1, exp:"'The expedition had gone wrong when Torres twisted his ankle.'"},
      {q:"What did the narrator learn?", opts:["Mountains are dangerous","We conquer nature","We are merely permitted to pass through nature","Solo climbing is impossible"], ans:2, exp:"'We do not conquer nature. We are merely permitted to pass through it.'"},
    ]
  },

  // C2
  { id:"l6f", title:"The Weight of Words", category:"Story", level:"C2", dur:"8:30", durSec:510, xp:175,
    icon:"📝", color:"rgba(251,113,133,.12)", border:"rgba(251,113,133,.25)",
    transcript:[
      "The writer had spent thirty years in pursuit of the perfect sentence.",
      "Not a sentence that dazzled or impressed, but one that simply told the truth.",
      "He had published eleven novels, each celebrated, each secretly inadequate to him.",
      "The twelfth sat unfinished on his desk, its opening line rewritten four hundred times.",
      "His editor called. The deadline is tomorrow, she said. What have you got?",
      "The truth, he said. Almost.",
      "Language, he had come to believe, is always a translation of something wordless.",
      "We reach for it with nouns and verbs, but the original thought retreats.",
      "That night, he wrote a single paragraph and stopped.",
      "It was not perfect. But it was honest.",
      "He sent it the next morning with a note: This is as close as I can get.",
      "Sometimes, the most courageous thing a writer can do is admit the gap between intention and expression.",
      "His editor wrote back: This is the best thing you have ever written.",
    ],
    quiz:[
      {q:"What had the writer been searching for?", opts:["Fame","A perfect dazzling sentence","A sentence that simply told the truth","A publisher"], ans:2, exp:"'Not a sentence that dazzled or impressed, but one that simply told the truth.'"},
      {q:"How many times had he rewritten the opening line?", opts:["100","200","400","1000"], ans:2, exp:"'Its opening line rewritten four hundred times.'"},
      {q:"What does the writer send his editor?", opts:["A full novel","Nothing","A single paragraph","An apology"], ans:2, exp:"'He wrote a single paragraph and stopped. He sent it the next morning.'"},
    ]
  },


  /* ════════════════════════════════
     AUDIO LESSON — 12 lessons
  ════════════════════════════════ */

  // A1
  { id:"l7b", title:"Articles — A, An and The", category:"Audio Lesson", level:"A1", dur:"6:00", durSec:360, xp:50,
    icon:"📖", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "Today we are going to learn about articles in English.",
      "There are three articles: a, an, and the.",
      "We use a before words that begin with a consonant sound.",
      "For example: a book, a cat, a university.",
      "We use an before words that begin with a vowel sound.",
      "For example: an apple, an orange, an honest man.",
      "Notice that honest starts with a vowel sound, even though it is spelled with H.",
      "We use the when we are talking about something specific.",
      "For example: Please close the door — we both know which door.",
      "We also use the with rivers, oceans, and mountain ranges.",
      "The Nile, the Pacific Ocean, the Himalayas.",
      "Remember: use the when both speaker and listener know what is being referred to.",
    ],
    quiz:[
      {q:"Which is correct?", opts:["a apple","an apple","the apple always","a honest man"], ans:1, exp:"'an apple' — apple starts with a vowel sound."},
      {q:"When do we use 'the'?", opts:["Before all nouns","When something is specific and known","Before vowel sounds","Never with proper nouns"], ans:1, exp:"'We use the when we are talking about something specific.'"},
    ]
  },

  { id:"l7f", title:"Simple Present vs Present Continuous", category:"Audio Lesson", level:"A1", dur:"6:30", durSec:390, xp:50,
    icon:"🔄", color:"rgba(45,212,191,.12)", border:"rgba(45,212,191,.25)",
    transcript:[
      "Today's lesson is about two very important tenses.",
      "The Simple Present and the Present Continuous.",
      "We use the Simple Present for habits and routines.",
      "For example: I eat breakfast at seven o'clock every morning.",
      "We use the Present Continuous for things happening right now.",
      "For example: I am eating breakfast right now.",
      "Notice the difference. Every morning is a routine. Right now is happening.",
      "The Simple Present uses the base form of the verb.",
      "She reads books. He plays football. They study English.",
      "The Present Continuous uses am, is, or are plus the verb ending in ing.",
      "She is reading a book. He is playing football. They are studying English.",
      "Remember: some verbs don't usually go in continuous form — like know, love, and want.",
    ],
    quiz:[
      {q:"Which sentence uses Simple Present correctly?", opts:["She is eating every day","She eats every day","She was eating every day","She eat every day"], ans:1, exp:"Simple Present: subject + base verb. 'She eats every day.'"},
      {q:"Which verbs don't usually go in continuous form?", opts:["Run, jump, swim","Know, love, want","Eat, drink, sleep","Walk, talk, sing"], ans:1, exp:"'Some verbs don't usually go in continuous form — like know, love, and want.'"},
    ]
  },

  // A2
  { id:"l7g", title:"Past Simple — Regular & Irregular", category:"Audio Lesson", level:"A2", dur:"7:00", durSec:420, xp:75,
    icon:"⏪", color:"rgba(251,146,60,.12)", border:"rgba(251,146,60,.25)",
    transcript:[
      "Today we're learning about the Past Simple tense.",
      "We use the Past Simple for actions that happened and finished in the past.",
      "For regular verbs, we add ed to make the past form.",
      "Walk becomes walked. Talk becomes talked. Play becomes played.",
      "But many common verbs in English are irregular.",
      "They don't follow the ed rule. You have to learn them separately.",
      "Go becomes went. See becomes saw. Eat becomes ate. Buy becomes bought.",
      "For negatives, we use did not, or didn't, plus the base verb.",
      "I didn't go to school yesterday. She didn't eat lunch.",
      "For questions, we use did plus the subject plus the base verb.",
      "Did you go to the market? Did she call you?",
      "Notice — in negatives and questions, the verb goes back to base form.",
    ],
    quiz:[
      {q:"How do you make the past of regular verbs?", opts:["Add s","Add ing","Add ed","Add will"], ans:2, exp:"'For regular verbs, we add ed to make the past form.'"},
      {q:"Which is the correct past of 'go'?", opts:["Goed","Went","Goes","Going"], ans:1, exp:"'Go becomes went' — irregular verb।"},
      {q:"Which negative sentence is correct?", opts:["I not go","I didn't went","I didn't go","I don't went"], ans:2, exp:"Negative: didn't + base verb. 'I didn't go.'"},
    ]
  },

  // B1
  { id:"l7", title:"Present Perfect Tense", category:"Audio Lesson", level:"B1", dur:"7:15", durSec:435, xp:100,
    icon:"📻", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    transcript:[
      "Welcome to today's audio lesson on the Present Perfect Tense.",
      "The Present Perfect is formed with have or has plus the past participle.",
      "For example: I have eaten lunch, or She has visited Paris.",
      "We use the Present Perfect for experiences in our life.",
      "Have you ever seen the ocean? Have you ever eaten sushi?",
      "We also use it for recent events that affect the present.",
      "For example: I can't find my keys. I have lost them!",
      "Important signal words include: just, already, yet, ever, and never.",
      "I have just finished my homework means very recently.",
      "Have you done it yet is used in questions and negatives.",
      "Practice sentence: She has never tried Indian food.",
      "Now it's your turn — make your own Present Perfect sentence!",
    ],
    quiz:[
      {q:"How is Present Perfect formed?", opts:["Subject + V2","Have/Has + past participle","Will + V1","am/is/are + Ving"], ans:1, exp:"'Have/Has + past participle' — যেমন: I have eaten, She has gone।"},
      {q:"Which word means 'very recently'?", opts:["Yet","Ever","Just","Never"], ans:2, exp:"'Just' means very recently."},
      {q:"Which sentence is correct?", opts:["I have went there","She has go to London","They have visited Japan","He have eaten"], ans:2, exp:"'They have visited Japan' — সঠিক: have/has + past participle।"},
    ]
  },

  { id:"l7h", title:"Modal Verbs — Can, Must, Should", category:"Audio Lesson", level:"B1", dur:"7:30", durSec:450, xp:100,
    icon:"🔧", color:"rgba(129,140,248,.12)", border:"rgba(129,140,248,.25)",
    transcript:[
      "Today we look at three of the most important modal verbs in English.",
      "Can, must, and should each express a different idea.",
      "Can expresses ability or permission.",
      "I can swim very well. Can I use your phone? Yes, you can.",
      "Must expresses strong obligation or necessity.",
      "You must wear a seatbelt. I must finish this report today.",
      "Should expresses advice or recommendation.",
      "You should drink more water. She should see a doctor.",
      "Now, let's look at the negative forms.",
      "Cannot, or can't, means you are not able to, or not allowed to.",
      "Mustn't means it is prohibited — don't do it.",
      "Shouldn't means it's not a good idea.",
      "Remember: modal verbs are always followed by the base form of the verb.",
    ],
    quiz:[
      {q:"Which modal verb expresses advice?", opts:["Can","Must","Should","Will"], ans:2, exp:"'Should expresses advice or recommendation.'"},
      {q:"What does 'mustn't' mean?", opts:["Not able to","Not necessary","Prohibited","Not recommended"], ans:2, exp:"'Mustn't means it is prohibited — don't do it.'"},
      {q:"What form follows modal verbs?", opts:["Past form","ing form","Base form","to + verb"], ans:2, exp:"'Modal verbs are always followed by the base form of the verb.'"},
    ]
  },

  // B2
  { id:"l7c", title:"Conditionals — Types 1, 2 and 3", category:"Audio Lesson", level:"B2", dur:"8:30", durSec:510, xp:125,
    icon:"🔀", color:"rgba(251,113,133,.12)", border:"rgba(251,113,133,.25)",
    transcript:[
      "Today's lesson covers the three main types of conditional sentences.",
      "The First Conditional talks about real and possible future situations.",
      "Its structure is: If plus present simple, will plus base verb.",
      "Example: If it rains tomorrow, I will stay at home.",
      "The Second Conditional talks about unreal or imaginary situations.",
      "Its structure is: If plus past simple, would plus base verb.",
      "Example: If I had a million dollars, I would travel the world.",
      "Notice — this doesn't mean I actually have a million dollars.",
      "The Third Conditional talks about past situations that didn't happen.",
      "Its structure is: If plus past perfect, would have plus past participle.",
      "Example: If I had studied harder, I would have passed the exam.",
      "A common mistake is using would in the if clause — never do this.",
    ],
    quiz:[
      {q:"Which is a correct First Conditional?", opts:["If I would go","If it rains, I will stay home","If I had money, I would buy it","If she had tried, she would have passed"], ans:1, exp:"First Conditional: If + present simple, will + base verb."},
      {q:"What does Second Conditional express?", opts:["Real future events","Past regrets","Unreal or imaginary situations","Scientific facts"], ans:2, exp:"Second Conditional = unreal/imaginary."},
      {q:"Which tense in the Third Conditional if-clause?", opts:["Present Simple","Past Simple","Past Perfect","Future Simple"], ans:2, exp:"Third Conditional: If + Past Perfect, would have + past participle."},
    ]
  },

  { id:"l9", title:"Business English — Meetings", category:"Audio Lesson", level:"B2", dur:"8:00", durSec:480, xp:125,
    icon:"📊", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "Good morning everyone. Thank you for joining today's meeting.",
      "Let's begin with a quick update on the quarterly targets.",
      "As you can see from the data, we've exceeded our sales goals by 15 percent.",
      "I'd like to hand over to Mr Karim now for the marketing report.",
      "Thank you. Our new campaign has reached over 2 million customers.",
      "We're seeing very positive engagement across all digital platforms.",
      "Excellent. Does anyone have any questions or concerns at this stage?",
      "Yes, I'd like to raise the issue of our delivery timeline.",
      "That's a valid point. Let's schedule a separate meeting to discuss that.",
      "Great. To summarise today's meeting: targets are on track.",
      "Please refer to the minutes that will be circulated this afternoon.",
      "Thank you all for your time. The meeting is now adjourned.",
    ],
    quiz:[
      {q:"By how much did they exceed sales goals?", opts:["10%","15%","20%","5%"], ans:1, exp:"'We've exceeded our sales goals by 15 percent.'"},
      {q:"Who gave the marketing report?", opts:["The chairperson","Mr Karim","The secretary","The CEO"], ans:1, exp:"'I'd like to hand over to Mr Karim now for the marketing report.'"},
    ]
  },

  // C1
  { id:"l7d", title:"Academic Vocabulary", category:"Audio Lesson", level:"C1", dur:"9:00", durSec:540, xp:150,
    icon:"🎓", color:"rgba(129,140,248,.12)", border:"rgba(129,140,248,.25)",
    transcript:[
      "Welcome to this advanced vocabulary lesson on the Academic Word List.",
      "These words appear frequently in academic texts and formal writing.",
      "The first word is analyze. To analyze means to examine in detail.",
      "Example: Researchers analyzed the data over a period of six months.",
      "Next is constitute. To constitute means to be a part of, or to make up.",
      "Example: Women constitute over half of the university's student population.",
      "The word imply means to suggest something without stating it directly.",
      "Example: The silence implied that no one agreed with the proposal.",
      "To sustain means to maintain something over time.",
      "Example: It is difficult to sustain motivation without clear goals.",
      "Finally, ambiguous means open to more than one interpretation.",
      "Example: The instructions were ambiguous, causing widespread confusion.",
    ],
    quiz:[
      {q:"What does 'ambiguous' mean?", opts:["Very clear","Open to more than one interpretation","Impossible to understand","Formal and academic"], ans:1, exp:"'Ambiguous means open to more than one interpretation.'"},
      {q:"Which sentence uses 'constitute' correctly?", opts:["She constituted to the project","Women constitute half the students","He constituted the answer","They constituted quickly"], ans:1, exp:"'Women constitute over half the population.'"},
    ]
  },

  { id:"l7i", title:"Passive Voice — All Tenses", category:"Audio Lesson", level:"C1", dur:"9:00", durSec:540, xp:150,
    icon:"🔁", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    transcript:[
      "Today's advanced lesson focuses on the passive voice across all tenses.",
      "In the active voice, the subject performs the action.",
      "In the passive voice, the subject receives the action.",
      "The passive is formed with the appropriate form of to be, plus the past participle.",
      "Present Simple passive: The report is written by the manager.",
      "Past Simple passive: The letter was sent yesterday.",
      "Present Perfect passive: The decision has been made.",
      "Future passive: The results will be announced next week.",
      "Present Continuous passive: The bridge is being repaired.",
      "Past Perfect passive: The contract had been signed before the meeting.",
      "We often omit the agent — the by phrase — when it is unknown or unimportant.",
      "For example: The window was broken. We don't need to say by whom.",
    ],
    quiz:[
      {q:"How is the passive voice formed?", opts:["Subject + will + verb","To be + past participle","Have + past participle","Subject + verb + object"], ans:1, exp:"'The passive is formed with to be plus the past participle.'"},
      {q:"When do we omit the agent?", opts:["Always","Never","When unknown or unimportant","Only in formal writing"], ans:2, exp:"'We often omit the agent when it is unknown or unimportant.'"},
      {q:"Which is correct Past Simple passive?", opts:["The letter is sent","The letter was sent","The letter has sent","The letter will sent"], ans:1, exp:"Past Simple passive: was/were + past participle."},
    ]
  },

  // C2
  { id:"l7e", title:"Discourse Markers & Cohesion", category:"Audio Lesson", level:"C2", dur:"9:30", durSec:570, xp:175,
    icon:"🧩", color:"rgba(167,139,250,.12)", border:"rgba(167,139,250,.25)",
    transcript:[
      "At the highest levels of English proficiency, cohesion is everything.",
      "Discourse markers are words and phrases that connect ideas logically.",
      "They signal relationships between sentences and paragraphs.",
      "Additive markers add information: furthermore, moreover, in addition.",
      "Example: The policy was expensive. Moreover, it proved ineffective.",
      "Adversative markers show contrast: however, nevertheless, on the contrary.",
      "Example: The results were promising. Nevertheless, further research is needed.",
      "Causal markers show cause and effect: therefore, consequently, as a result.",
      "Example: Funding was cut. Consequently, the project was abandoned.",
      "Temporal markers sequence events: subsequently, meanwhile, prior to.",
      "Example: She submitted the report. Subsequently, she resigned.",
      "Mastering these markers will elevate your writing to a truly sophisticated level.",
    ],
    quiz:[
      {q:"What is the function of 'nevertheless'?", opts:["To add information","To show contrast","To show cause and effect","To sequence events"], ans:1, exp:"'Nevertheless' is an adversative marker — it shows contrast."},
      {q:"Which marker shows cause and effect?", opts:["Furthermore","However","Consequently","Subsequently"], ans:2, exp:"'Consequently' is a causal marker showing cause and effect."},
    ]
  },

  { id:"l7j", title:"Advanced Register & Style", category:"Audio Lesson", level:"C2", dur:"10:00", durSec:600, xp:175,
    icon:"✒️", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "At C2 level, the ability to shift register is what distinguishes true mastery.",
      "Register refers to the level of formality appropriate to a given context.",
      "A text message to a friend and a letter to a judge require entirely different language.",
      "Formal register avoids contractions, slang, and first-person wherever possible.",
      "It favours the passive voice, complex sentences, and Latinate vocabulary.",
      "Informal register is warm, direct, and personal. It uses contractions freely.",
      "Consider the difference: I'm sorry versus I regret to inform you.",
      "Or: The thing is versus The fundamental issue is.",
      "A sophisticated writer moves fluidly between these registers.",
      "They understand that the right word in the wrong context is the wrong word.",
      "Mastery is not just knowing the rules — it is knowing when to break them.",
      "And knowing the difference between breaking a rule and making an error.",
    ],
    quiz:[
      {q:"What does 'register' refer to?", opts:["Speed of speaking","Level of formality","Vocabulary size","Grammar accuracy"], ans:1, exp:"'Register refers to the level of formality appropriate to a given context.'"},
      {q:"What does formal register favour?", opts:["Contractions and slang","Passive voice and complex sentences","Short simple sentences","Personal anecdotes"], ans:1, exp:"'It favours the passive voice, complex sentences, and Latinate vocabulary.'"},
    ]
  },


  /* ════════════════════════════════
     NEWS — 8 lessons
  ════════════════════════════════ */

  // A2
  { id:"l8c", title:"Education News — Future of Learning", category:"News", level:"A2", dur:"3:50", durSec:230, xp:75,
    icon:"📚", color:"rgba(251,146,60,.12)", border:"rgba(251,146,60,.25)",
    transcript:[
      "Welcome to Education Today. I'm your host, James Walker.",
      "Schools around the world are changing the way they teach.",
      "Many classrooms are now using tablets and computers instead of textbooks.",
      "Students can watch lessons online and study at their own pace.",
      "Teachers say technology helps students who learn in different ways.",
      "However, some experts worry that too much screen time is harmful.",
      "They recommend that children still spend time reading physical books.",
      "Parents are being encouraged to talk to their children about healthy habits.",
      "The most important thing, says one teacher, is to keep children curious.",
      "That curiosity, she says, is what makes great learners.",
    ],
    quiz:[
      {q:"What are many classrooms using instead of textbooks?", opts:["Newspapers","Tablets and computers","Whiteboards","Radio"], ans:1, exp:"'Many classrooms are now using tablets and computers instead of textbooks.'"},
      {q:"What do some experts worry about?", opts:["Too much homework","Too much screen time","Not enough teachers","School fees"], ans:1, exp:"'Some experts worry that too much screen time is harmful.'"},
    ]
  },

  { id:"l8e", title:"Sports News — The Power of Teamwork", category:"News", level:"A2", dur:"3:40", durSec:220, xp:75,
    icon:"⚽", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    transcript:[
      "Good morning. Today we look at how sport teaches important life lessons.",
      "A school football team from a small village has reached the national final.",
      "The team has only twelve players and a very small budget.",
      "Their coach says the secret is simple: they trust each other completely.",
      "Every player knows their role and plays for the team, not for themselves.",
      "The captain, a fifteen-year-old girl named Priya, scores most of the goals.",
      "But she says the goalkeeper and defenders deserve just as much credit.",
      "Without them, I couldn't take any risks going forward, she says.",
      "The final takes place this Saturday at the national stadium.",
      "Whatever the result, their story has already inspired thousands of young players.",
    ],
    quiz:[
      {q:"What is the secret to the team's success?", opts:["A big budget","Famous players","Trusting each other","A professional coach"], ans:2, exp:"'The secret is simple: they trust each other completely.'"},
      {q:"Who is the captain?", opts:["The coach","A fifteen-year-old boy","A fifteen-year-old girl named Priya","The goalkeeper"], ans:2, exp:"'The captain, a fifteen-year-old girl named Priya.'"},
    ]
  },

  // B1
  { id:"l8b", title:"Technology & Artificial Intelligence", category:"News", level:"B1", dur:"4:30", durSec:270, xp:100,
    icon:"🤖", color:"rgba(52,211,153,.12)", border:"rgba(52,211,153,.25)",
    transcript:[
      "Good morning. Today we look at the growing influence of artificial intelligence.",
      "AI is now being used in hospitals to help doctors diagnose diseases earlier.",
      "In education, AI tutors are personalising lessons for millions of students.",
      "However, concerns are growing about job losses due to automation.",
      "A recent report suggests that up to 40 percent of jobs could change significantly.",
      "Experts are divided on whether AI will create more jobs than it destroys.",
      "Governments are being called upon to regulate the technology responsibly.",
      "Meanwhile, researchers continue to push the boundaries of what machines can do.",
      "The debate about AI ethics has never been more urgent.",
      "One thing is certain — the world is changing faster than ever before.",
    ],
    quiz:[
      {q:"How is AI being used in hospitals?", opts:["To replace doctors","To help diagnose diseases earlier","To manage finances","To train nurses"], ans:1, exp:"'AI is now being used in hospitals to help doctors diagnose diseases earlier.'"},
      {q:"What percentage of jobs could change?", opts:["10%","20%","40%","60%"], ans:2, exp:"'Up to 40 percent of jobs could change significantly.'"},
    ]
  },

  { id:"l8f", title:"Environment — Saving the Oceans", category:"News", level:"B1", dur:"4:20", durSec:260, xp:100,
    icon:"🌊", color:"rgba(96,165,250,.12)", border:"rgba(96,165,250,.25)",
    transcript:[
      "This week, scientists have published alarming new findings about ocean pollution.",
      "More than eight million tonnes of plastic enter the oceans every year.",
      "Tiny particles of plastic, called microplastics, are now found in fish and seafood.",
      "Researchers say these particles may be harmful to human health as well.",
      "But there is some good news. Communities around the world are taking action.",
      "A coastal village in India has cleared over five tonnes of plastic from its beach.",
      "Young volunteers from forty different countries participated in the clean-up.",
      "Companies are also being pressured to reduce single-use plastic packaging.",
      "Several major supermarkets have already committed to cutting plastic by 2030.",
      "Experts say individual action, combined with government policy, is the only way forward.",
    ],
    quiz:[
      {q:"How much plastic enters the oceans each year?", opts:["1 million tonnes","8 million tonnes","50 million tonnes","100 million tonnes"], ans:1, exp:"'More than eight million tonnes of plastic enter the oceans every year.'"},
      {q:"What are microplastics?", opts:["Large pieces of plastic","Tiny plastic particles","Plastic bags","Plastic bottles"], ans:1, exp:"'Tiny particles of plastic, called microplastics.'"},
      {q:"By when have supermarkets committed to cutting plastic?", opts:["2025","2028","2030","2035"], ans:2, exp:"'Several major supermarkets have committed to cutting plastic by 2030.'"},
    ]
  },

  // B2
  { id:"l8", title:"Climate Change News Report", category:"News", level:"B2", dur:"4:50", durSec:290, xp:125,
    icon:"🌍", color:"rgba(96,165,250,.12)", border:"rgba(96,165,250,.25)",
    transcript:[
      "Good evening. Tonight's top story: climate scientists have released their latest report.",
      "The report warns that global temperatures have risen by 1.2 degrees Celsius.",
      "Scientists say this is primarily caused by greenhouse gas emissions.",
      "Governments around the world are being urged to take immediate action.",
      "Renewable energy sources such as solar and wind power are being promoted.",
      "Many countries have pledged to reach net zero emissions by 2050.",
      "However, critics argue that current pledges are not ambitious enough.",
      "Local communities are also taking action by planting trees and reducing waste.",
      "Experts agree that individual actions, combined with policy change, are essential.",
      "The next global climate summit is scheduled for later this year.",
    ],
    quiz:[
      {q:"By how much have global temperatures risen?", opts:["0.5°C","1.2°C","2.0°C","1.5°C"], ans:1, exp:"'Global temperatures have risen by 1.2 degrees Celsius.'"},
      {q:"What do critics say?", opts:["Pledges are too ambitious","Pledges are not ambitious enough","Everything is fine","Countries should do nothing"], ans:1, exp:"'Critics argue that current pledges are not ambitious enough.'"},
    ]
  },

  { id:"l8g", title:"Economy — Cost of Living Crisis", category:"News", level:"B2", dur:"5:10", durSec:310, xp:125,
    icon:"💰", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "Across many countries, families are struggling with rising living costs.",
      "Inflation has pushed food prices up by as much as fifteen percent in some regions.",
      "Energy bills have doubled in several European countries over the past two years.",
      "Central banks have responded by raising interest rates to slow inflation.",
      "However, higher interest rates also mean higher mortgage repayments for homeowners.",
      "Many renters are finding it increasingly difficult to afford their monthly payments.",
      "Food banks have reported a significant increase in demand across the country.",
      "Economists are divided on when the situation will begin to improve.",
      "Some predict a gradual recovery by the middle of next year.",
      "Others warn that the crisis may deepen before it gets better.",
      "Governments are under pressure to provide targeted support for the most vulnerable.",
    ],
    quiz:[
      {q:"By how much have food prices risen in some regions?", opts:["5%","10%","15%","20%"], ans:2, exp:"'Food prices up by as much as fifteen percent in some regions.'"},
      {q:"How have central banks responded to inflation?", opts:["Cutting interest rates","Raising interest rates","Printing more money","Reducing taxes"], ans:1, exp:"'Central banks have responded by raising interest rates to slow inflation.'"},
    ]
  },

  // C1
  { id:"l8d", title:"Health & Wellbeing Report", category:"News", level:"C1", dur:"5:20", durSec:320, xp:150,
    icon:"🏥", color:"rgba(245,200,66,.12)", border:"rgba(245,200,66,.25)",
    transcript:[
      "Researchers at a leading university have published a landmark study on mental health.",
      "The study, which followed ten thousand participants over a decade, yields striking conclusions.",
      "Those who reported strong social connections were 50 percent less likely to develop depression.",
      "The findings underscore the profound impact of community on psychological wellbeing.",
      "Dr Patel, who led the research, described the results as both alarming and hopeful.",
      "Alarming, because loneliness is reaching epidemic proportions in developed nations.",
      "Hopeful, because the solution — human connection — is within our reach.",
      "The study recommends that governments invest in community centres and social programmes.",
      "It also highlights the role of workplaces in fostering meaningful relationships.",
      "As our world becomes increasingly digital, the report warns, the need for genuine connection grows ever more urgent.",
    ],
    quiz:[
      {q:"What did the study find about social connections?", opts:["They reduce physical illness","They reduce depression by 50%","They improve academic performance","They increase productivity"], ans:1, exp:"'Those with strong social connections were 50 percent less likely to develop depression.'"},
      {q:"How does Dr Patel describe the results?", opts:["Surprising and interesting","Alarming and hopeful","Confusing and unclear","Disappointing"], ans:1, exp:"'Dr Patel described the results as both alarming and hopeful.'"},
    ]
  },

  // C2
  { id:"l8h", title:"Global Politics — Democracy Under Pressure", category:"News", level:"C2", dur:"6:00", durSec:360, xp:175,
    icon:"🗳️", color:"rgba(167,139,250,.12)", border:"rgba(167,139,250,.25)",
    transcript:[
      "In a landmark report released today, political analysts warn of a global democratic recession.",
      "For the seventeenth consecutive year, the number of countries moving towards authoritarianism has exceeded those moving towards democracy.",
      "The erosion of democratic norms, the report argues, rarely happens through outright coup.",
      "More often, it is a gradual process — the weakening of institutions, the concentration of power, the silencing of dissent.",
      "Freedom of the press, described as the oxygen of democracy, is under unprecedented pressure in sixty-two countries.",
      "What is particularly alarming, says the lead researcher, is how normalised these shifts have become.",
      "Citizens, exhausted by uncertainty, sometimes acquiesce to strongman politics in exchange for a perceived sense of stability.",
      "The report does not offer easy solutions, but it insists that civic engagement remains the most powerful counter-force.",
      "Where people organise, protest, vote, and hold their leaders accountable, democratic backsliding can be reversed.",
      "The question, it concludes, is not whether democracy is worth defending, but whether enough people believe it is.",
    ],
    quiz:[
      {q:"How does democratic erosion usually happen?", opts:["Through outright coup","Gradually through weakened institutions","Through foreign invasion","Through economic collapse"], ans:1, exp:"'It is a gradual process — the weakening of institutions, the concentration of power.'"},
      {q:"What does the report say is the most powerful counter-force?", opts:["Military action","International pressure","Civic engagement","Economic sanctions"], ans:2, exp:"'Civic engagement remains the most powerful counter-force.'"},
      {q:"For how many consecutive years has authoritarianism been spreading?", opts:["Ten","Twelve","Seventeen","Twenty"], ans:2, exp:"'For the seventeenth consecutive year.'"},
    ]
  },

];

/* ── Category list (auto-derived) ── */
export const CATEGORIES = ["All", ...new Set(LESSONS.map(l => l.category))];

/* ── Level summary ── */
export const LEVEL_COUNT = LESSONS.reduce((acc, l) => {
  acc[l.level] = (acc[l.level] || 0) + 1;
  return acc;
}, {});
