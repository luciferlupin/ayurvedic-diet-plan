const storageKeys = {
  bmi: "ayurveda:bmi",
  dosha: "ayurveda:dosha",
};

const el = (id) => document.getElementById(id);

const state = {
  bmi: null,
  dosha: null,
};

const doshaQuiz = [
  {
    q: "What is your body frame?",
    options: [
      { text: "Thin, light, hard to gain weight", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Medium, athletic, proportional", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Broad, solid, gains weight easily", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How would you describe your skin texture?",
    options: [
      { text: "Dry and rough", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Warm and oily", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Smooth and moist", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "What is your hair type?",
    options: [
      { text: "Dry, rough, scanty", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Thin, straight, greys early, baldness", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Thick, shiny, lush", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How is your appetite?",
    options: [
      { text: "Irregular, sometimes strong sometimes low", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Strong and sharp, irritation if meals are delayed", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Slow but steady, can skip meals", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How is your digestion?",
    options: [
      { text: "Gas, bloating, irregular digestion", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Fast digestion, acidity, burning sensation", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Slow digestion, heaviness after meals", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How do you feel in cold weather?",
    options: [
      { text: "Very uncomfortable", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Neutral", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Comfortable", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How do you feel in hot weather?",
    options: [
      { text: "Generally okay", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Very uncomfortable", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Tolerates well but feels lazy", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "What is your energy level?",
    options: [
      { text: "Comes in bursts, fluctuates", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "High, focused, intense", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Steady, long-lasting", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How is your sleep?",
    options: [
      { text: "Light, disturbed", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Moderate, refreshing", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Deep, long", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How do you react under stress?",
    options: [
      { text: "Anxiety, fear, overthinking", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Anger, irritation", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Calm but withdrawn", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "What is your learning style?",
    options: [
      { text: "Quick to learn, quick to forget", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Learns fast, remembers when useful", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Slow learner, never forgets", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How do you make decisions?",
    options: [
      { text: "Quickly, often changes mind", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Confident, decisive", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Takes time, prefers security", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How is your speech pattern?",
    options: [
      { text: "Fast, talkative", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Sharp, clear", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Slow, calm", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "How do you handle money?",
    options: [
      { text: "Impulsive spending", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Planned, goal-oriented", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Conservative, saves more", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
  {
    q: "What is your working style?",
    options: [
      { text: "Many projects, multitasking", scores: { vata: 1, pitta: 0, kapha: 0 } },
      { text: "Perfectionist, leadership-oriented", scores: { vata: 0, pitta: 1, kapha: 0 } },
      { text: "Stable, dislikes frequent change", scores: { vata: 0, pitta: 0, kapha: 1 } },
    ],
  },
];

const commonConcerns = [
  {
    title: "Acidity & reflux",
    desc: "Burning sensation, sour burps, heaviness after spicy/oily meals.",
    tips: ["Earlier dinner", "Reduce fried & very spicy foods", "Include cooling foods (coconut, cucumber)"],
  },
  {
    title: "Bloating & gas",
    desc: "Bloating, noisy gut, discomfort after irregular meals.",
    tips: ["Warm cooked meals", "Gentle spices (ajwain, jeera)", "Avoid cold drinks with meals"],
  },
  {
    title: "Constipation",
    desc: "Hard stools, dryness, irregular bowel movement.",
    tips: ["Increase warm fluids", "Add ghee (as tolerated)", "Regular sleep + meal timing"],
  },
  {
    title: "Weight gain",
    desc: "Slow metabolism, cravings, heaviness, water retention.",
    tips: ["Light early dinner", "Daily walking", "Reduce sugar and snacking"],
  },
  {
    title: "Weight loss / low appetite",
    desc: "Poor appetite, weak digestion, fatigue, difficulty gaining weight.",
    tips: ["Nourishing meals", "3 steady meals", "Avoid skipping meals"],
  },
  {
    title: "Low energy & fatigue",
    desc: "Tiredness, mid-day crash, brain fog.",
    tips: ["Consistent breakfast", "Balanced lunch", "Hydration + early bedtime"],
  },
  {
    title: "PCOS support",
    desc: "Irregular periods, cravings, weight changes, acne.",
    tips: ["Stable meal timing", "High-fiber meals", "Strength + walking routine"],
  },
  {
    title: "Thyroid support",
    desc: "Weight changes, fatigue, hair fall, constipation.",
    tips: ["Protein at each meal", "Reduce ultra-processed foods", "Consistent sleep routine"],
  },
  {
    title: "Stress & sleep",
    desc: "Anxiety, racing mind, difficulty falling asleep.",
    tips: ["Light dinner", "Digital sunset", "Warm herbal tea"],
  },
  {
    title: "Skin & hair",
    desc: "Acne, dryness, inflammation, hair fall.",
    tips: ["Improve digestion first", "Hydration", "Reduce excess sugar/spice"],
  },
];

const faqItems = [
  {
    q: "Is the diet plan medically accurate?",
    a: "This tool provides educational guidance based on Ayurveda-inspired principles. For medical conditions, pregnancy, or chronic illness, consult a qualified professional and share your reports during consultation.",
  },
  {
    q: "Can I follow this if I’m vegetarian?",
    a: "Yes. The sample plan is vegetarian-friendly. Your consultation can further adapt protein sources (dal, paneer/tofu, sprouts) based on digestion and goals.",
  },
  {
    q: "How fast will I see results?",
    a: "Most people notice digestion/sleep improvements in 1–2 weeks when they follow meal timing and simplicity. Weight and hormonal changes usually take longer and need consistent routine.",
  },
  {
    q: "Do I need to stop tea/coffee?",
    a: "Not always. If you have acidity, anxiety, or disturbed sleep, reducing caffeine and taking it after food often helps. We’ll personalize this during consultation.",
  },
  {
    q: "What if my dosha is dual?",
    a: "Dual-dosha is common. Follow the overlap: regular meals, cooked seasonal foods, and choose the recommendations that feel most supportive for your digestion and energy.",
  },
  {
    q: "What details help in a personalized plan?",
    a: "Your routine, work timings, sleep, digestion pattern, cravings, activity level, menstrual history (if applicable), and any reports/medications help create a safe, realistic plan.",
  },
];

const doshaProfiles = {
  vata: {
    title: "Vata",
    about:
      "Vata is light, dry, and mobile. When balanced it supports creativity and quick thinking. When imbalanced it may show as dryness, anxiety, irregular appetite, and bloating.",
    diet:
      "Favor warm, moist, grounding meals. Prioritize cooked foods, soups, stews, ghee, and gentle spices.",
  },
  pitta: {
    title: "Pitta",
    about:
      "Pitta is hot, sharp, and intense. When balanced it supports focus and strong digestion. When imbalanced it may show as acidity, inflammation, irritability, and overheating.",
    diet:
      "Favor cooling, hydrating, and mildly spiced meals. Prioritize sweet/bitter/astringent tastes and avoid very hot, oily, and spicy foods.",
  },
  kapha: {
    title: "Kapha",
    about:
      "Kapha is heavy, steady, and nourishing. When balanced it supports stability and endurance. When imbalanced it may show as heaviness, sluggish digestion, congestion, and weight gain.",
    diet:
      "Favor light, warm, and spiced meals. Prioritize vegetables, legumes, and stimulating spices; reduce heavy, oily, and very sweet foods.",
  },
  dual: {
    title: "Dual Dosha",
    about:
      "Your responses are close across two doshas. A dual-dosha approach often works best: follow the overlap that feels most supportive day-to-day.",
    diet: "Focus on balance, meal regularity, and seasonal adjustments.",
  },
};

function round1(num) {
  return Math.round(num * 10) / 10;
}

function parseNum(value) {
  const n = Number(String(value).replace(/,/g, ".").trim());
  return Number.isFinite(n) ? n : null;
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

function bmiAyurvedicNote(category) {
  switch (category) {
    case "Underweight":
      return "Focus on nourishment and grounding: warm cooked meals, healthy fats, regular meal timing, and adequate rest.";
    case "Normal":
      return "Maintain balance: consistent meals, seasonal foods, and mindful portioning.";
    case "Overweight":
      return "Focus on lightness and digestion: warm meals, portion awareness, daily movement, and reducing heavy/processed foods.";
    case "Obese":
      return "Focus on metabolic support: simplified meals, reducing sugar and fried foods, more vegetables/legumes, and consistent routine.";
    default:
      return "";
  }
}

function saveState() {
  if (state.bmi) localStorage.setItem(storageKeys.bmi, JSON.stringify(state.bmi));
  if (state.dosha) localStorage.setItem(storageKeys.dosha, JSON.stringify(state.dosha));
}

function loadState() {
  try {
    const bmi = localStorage.getItem(storageKeys.bmi);
    const dosha = localStorage.getItem(storageKeys.dosha);
    state.bmi = bmi ? JSON.parse(bmi) : null;
    state.dosha = dosha ? JSON.parse(dosha) : null;
  } catch {
    state.bmi = null;
    state.dosha = null;
  }
}

function clearState(kind) {
  if (kind === "bmi" || kind === "all") {
    state.bmi = null;
    localStorage.removeItem(storageKeys.bmi);
  }
  if (kind === "dosha" || kind === "all") {
    state.dosha = null;
    localStorage.removeItem(storageKeys.dosha);
  }
  if (kind === "all") {
    state.bmi = null;
    state.dosha = null;
  }
}

function setHero() {
  const heroBmi = el("heroBmi");
  const heroDosha = el("heroDosha");
  const heroPlan = el("heroPlan");

  heroBmi.textContent = state.bmi ? `${state.bmi.value} (${state.bmi.category})` : "Not calculated yet";
  heroDosha.textContent = state.dosha ? state.dosha.title : "Not taken yet";

  if (state.bmi && state.dosha) {
    heroPlan.textContent = "Your plan is ready below";
  } else {
    heroPlan.textContent = "Complete both to unlock your plan";
  }
}

function renderBmi() {
  el("bmiValue").textContent = state.bmi ? String(state.bmi.value) : "—";
  el("bmiCategory").textContent = state.bmi ? state.bmi.category : "—";
  el("bmiAyurveda").textContent = state.bmi ? state.bmi.note : "Calculate BMI to see guidance.";
  el("contactBmi").textContent = state.bmi ? `${state.bmi.value} (${state.bmi.category})` : "—";
}

function computeDominantDosha(scores) {
  const pairs = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [top, second, third] = pairs;
  
  // Count how many doshas have non-zero scores
  const nonZeroScores = pairs.filter(([_, score]) => score > 0);
  
  // If user has selections from 3 different doshas (A, B, C), show dual dosha
  if (nonZeroScores.length >= 3) {
    // Find the two highest scores for dual dosha
    const [first, secondHighest] = pairs;
    return { 
      kind: "dual", 
      title: `${first[0].toUpperCase()} + ${secondHighest[0].toUpperCase()}`, 
      primary: first[0], 
      secondary: secondHighest[0], 
      scores 
    };
  }
  
  // Original logic for 1 or 2 doshas
  const diff = top[1] - second[1];
  if (diff <= 1) {
    return { kind: "dual", title: `${top[0].toUpperCase()} + ${second[0].toUpperCase()}`, primary: top[0], secondary: second[0], scores };
  }
  return { kind: top[0], title: top[0].toUpperCase(), primary: top[0], secondary: null, scores };
}

function renderDosha() {
  const doshaTypeEl = el("doshaType");
  const doshaAboutEl = el("doshaAbout");
  const doshaDietEl = el("doshaDiet");
  
  if (state.dosha) {
    // Animate the dosha type appearance
    doshaTypeEl.style.opacity = '0';
    doshaTypeEl.style.transform = 'scale(0.8)';
    
    setTimeout(() => {
      doshaTypeEl.textContent = state.dosha.title;
      doshaTypeEl.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      doshaTypeEl.style.opacity = '1';
      doshaTypeEl.style.transform = 'scale(1)';
    }, 100);
    
    doshaAboutEl.textContent = state.dosha.about;
    doshaDietEl.textContent = state.dosha.diet;
  } else {
    doshaTypeEl.textContent = "—";
    doshaAboutEl.textContent = "Take the quiz to see your description.";
    doshaDietEl.textContent = "Your food focus will appear here.";
  }
  
  el("contactDosha").textContent = state.dosha ? state.dosha.title : "—";
}

function li(text) {
  const node = document.createElement("li");
  node.className = "flex gap-2";
  node.innerHTML = `<span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-earth-moss"></span><span>${text}</span>`;
  return node;
}

function setList(id, items) {
  const ul = el(id);
  ul.innerHTML = "";
  (items || []).forEach((t) => ul.appendChild(li(t)));
}

function computePlan() {
  if (!state.bmi || !state.dosha) return null;

  const bmiCat = state.bmi.category;
  const doshaKind = state.dosha.kind;
  const primary = state.dosha.primary;

  const base = {
    favor: [],
    reduce: [],
    routine: [],
    sample: {
      breakfast: "—",
      lunch: "—",
      dinner: "—",
    },
  };

  const doshaPlan = {
    vata: {
      favor: ["Warm cooked meals (khichdi, soups)", "Ghee, sesame oil, nuts", "Sweet fruits (ripe banana, dates)", "Gentle spices (ginger, cumin, ajwain)"],
      reduce: ["Cold/raw foods", "Excess caffeine", "Dry snacks", "Skipping meals"],
      routine: ["Eat at consistent times", "Warm water or herbal tea through the day", "Early, calming dinner", "Gentle walking/yoga"],
      sample: {
        breakfast: "Warm porridge with ghee + stewed apple",
        lunch: "Moong dal khichdi + cooked seasonal vegetables",
        dinner: "Vegetable soup + soft roti + ghee",
      },
    },
    pitta: {
      favor: ["Cooling foods (cucumber, melon)", "Bitter greens", "Coconut water / infused water", "Mild spices (fennel, coriander)"],
      reduce: ["Very spicy foods", "Fried/oily meals", "Alcohol", "Late-night eating"],
      routine: ["Prefer lunch as the main meal", "Stay hydrated", "Avoid overheating workouts", "Add cooling breathwork"],
      sample: {
        breakfast: "Overnight soaked oats + berries + cardamom",
        lunch: "Rice + dal + sautéed greens + cucumber raita",
        dinner: "Light moong dal soup + steamed veggies",
      },
    },
    kapha: {
      favor: ["Light warm meals", "Legumes and vegetables", "Spices (black pepper, ginger)", "Herbal teas (ginger, tulsi)"],
      reduce: ["Sugar and sweets", "Heavy dairy", "Fried foods", "Daytime naps"],
      routine: ["Morning movement daily", "Early, light dinner", "Eat only when hungry", "Keep meals simple"],
      sample: {
        breakfast: "Spiced upma/poha with vegetables",
        lunch: "Millet roti + dal + mixed veg sabzi",
        dinner: "Clear vegetable soup + sautéed greens",
      },
    },
    dual: {
      favor: ["Cooked seasonal meals", "Balanced spice use", "Plenty of vegetables", "Regular meal timing"],
      reduce: ["Overeating", "Processed foods", "Late-night meals"],
      routine: ["Maintain consistent routine", "Hydration and sleep regularity", "Walk after meals"],
      sample: {
        breakfast: "Warm porridge + fruit",
        lunch: "Rice + dal + vegetables",
        dinner: "Soup + light meal",
      },
    },
  };

  const chosen = doshaKind === "dual" ? doshaPlan.dual : doshaPlan[primary];
  base.favor.push(...chosen.favor);
  base.reduce.push(...chosen.reduce);
  base.routine.push(...chosen.routine);
  base.sample = chosen.sample;

  if (bmiCat === "Underweight") {
    base.favor.unshift("Add healthy calories: ghee, nuts, dates (as tolerated)");
    base.routine.push("Aim for 3 meals + 1 nourishing snack if needed");
  }

  if (bmiCat === "Overweight" || bmiCat === "Obese") {
    base.reduce.unshift("Reduce sugary drinks and ultra-processed snacks");
    base.routine.push("Add 30–45 minutes of daily walking");
  }

  if (bmiCat === "Normal") {
    base.routine.push("Maintain portions and prioritize digestion");
  }

  return base;
}

function renderPlan() {
  const plan = computePlan();

  const badge = el("planBadge");
  const subtitle = el("planSubtitle");

  if (!plan) {
    badge.classList.add("hidden");
    subtitle.textContent = "Complete BMI and Dosha to generate a plan.";
    setList("planFavor", ["Calculate BMI", "Take Dosha Quiz"]);
    setList("planReduce", []);
    setList("planRoutine", []);
    el("planBreakfast").textContent = "—";
    el("planLunch").textContent = "—";
    el("planDinner").textContent = "—";
    return;
  }

  badge.classList.remove("hidden");
  subtitle.textContent = `Based on BMI: ${state.bmi.category} • Dosha: ${state.dosha.title}`;

  setList("planFavor", plan.favor);
  setList("planReduce", plan.reduce);
  setList("planRoutine", plan.routine);

  el("planBreakfast").textContent = plan.sample.breakfast;
  el("planLunch").textContent = plan.sample.lunch;
  el("planDinner").textContent = plan.sample.dinner;
}

function renderQuiz() {
  const form = el("doshaForm");
  form.innerHTML = "";

  doshaQuiz.forEach((item, idx) => {
    const fieldset = document.createElement("fieldset");
    fieldset.className = "rounded-2xl border border-earth-clay/25 bg-white/55 p-4";

    const legend = document.createElement("legend");
    legend.className = "px-1 text-sm font-semibold";
    legend.textContent = `${idx + 1}. ${item.q}`;

    const wrap = document.createElement("div");
    wrap.className = "mt-3 grid gap-2";

    item.options.forEach((opt, optIdx) => {
      const id = `q${idx}_o${optIdx}`;
      const label = document.createElement("label");
      label.className = "flex cursor-pointer items-start gap-3 rounded-xl border border-earth-clay/25 bg-earth-sand/40 px-3 py-2 hover:bg-earth-sand/70";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q${idx}`;
      input.id = id;
      input.value = JSON.stringify(opt.scores);
      input.required = true;
      input.className = "mt-1";

      const text = document.createElement("div");
      text.className = "text-sm";
      text.textContent = opt.text;

      label.appendChild(input);
      label.appendChild(text);
      wrap.appendChild(label);
    });

    fieldset.appendChild(legend);
    fieldset.appendChild(wrap);
    form.appendChild(fieldset);
  });
}

function getQuizScores() {
  const scores = { vata: 0, pitta: 0, kapha: 0 };
  for (let i = 0; i < doshaQuiz.length; i += 1) {
    const checked = document.querySelector(`input[name="q${i}"]:checked`);
    if (!checked) return null;
    const s = JSON.parse(checked.value);
    scores.vata += s.vata || 0;
    scores.pitta += s.pitta || 0;
    scores.kapha += s.kapha || 0;
  }
  return scores;
}

function setDoshaFromScores(scores) {
  const dom = computeDominantDosha(scores);

  if (dom.kind === "dual") {
    state.dosha = {
      kind: "dual",
      title: `${dom.primary.toUpperCase()} + ${dom.secondary.toUpperCase()}`,
      about: doshaProfiles.dual.about,
      diet: doshaProfiles.dual.diet,
      primary: dom.primary,
      secondary: dom.secondary,
      scores: dom.scores,
    };
  } else {
    const profile = doshaProfiles[dom.kind];
    state.dosha = {
      kind: dom.kind,
      title: profile.title,
      about: profile.about,
      diet: profile.diet,
      primary: dom.primary,
      secondary: null,
      scores: dom.scores,
    };
  }
}

const recipes = [
  {
    title: "Moong Dal Khichdi",
    dosha: "Vata / Pitta",
    desc: "Comforting, warm, and easy on digestion. Best for recovery days and when appetite feels unstable.",
    tags: ["cooked", "digestion", "light"],
  },
  {
    title: "Coriander-Fennel Cooling Tea",
    dosha: "Pitta",
    desc: "A gentle tea for heat, acidity, and summer days. Sip warm or room temperature.",
    tags: ["cooling", "tea", "acidity"],
  },
  {
    title: "Spiced Vegetable Soup",
    dosha: "Kapha / Vata",
    desc: "A light dinner option: warm, nourishing, and easy to digest.",
    tags: ["warm", "light", "dinner"],
  },
  {
    title: "Stewed Apple with Cinnamon",
    dosha: "Vata",
    desc: "Warm fruit dessert that’s easier than raw fruit when digestion is sensitive.",
    tags: ["warm", "sweet", "easy"],
  },
  {
    title: "Millet & Mixed Veg Bowl",
    dosha: "Kapha",
    desc: "A high-fiber meal that supports steadier energy and appetite control.",
    tags: ["light", "fiber", "balanced"],
  },
  {
    title: "Coconut-Cucumber Raita",
    dosha: "Pitta",
    desc: "Cooling side dish to balance heat and spice. Keep it mild and fresh.",
    tags: ["cooling", "hydrating", "side"],
  },
  {
    title: "Jeera Water (Cumin Water)",
    dosha: "Vata / Kapha",
    desc: "Simple digestion support. Sip warm between meals (not too close to meals).",
    tags: ["digestion", "simple", "daily"],
  },
  {
    title: "Vegetable Poha",
    dosha: "Kapha / Pitta",
    desc: "Light breakfast with vegetables. Use minimal oil and add lemon if tolerated.",
    tags: ["breakfast", "light", "quick"],
  },
  {
    title: "Moong Dal Chilla",
    dosha: "Pitta / Kapha",
    desc: "Protein-rich breakfast/snack. Pair with mint-coriander chutney.",
    tags: ["protein", "breakfast", "snack"],
  },
  {
    title: "Lauki (Bottle Gourd) Curry",
    dosha: "Pitta",
    desc: "Cooling, light curry that supports digestion and reduces heat.",
    tags: ["cooling", "lunch", "light"],
  },
  {
    title: "Masoor Dal (Red Lentil) Soup",
    dosha: "Kapha",
    desc: "Quick, light soup that pairs well with sautéed greens.",
    tags: ["light", "protein", "dinner"],
  },
  {
    title: "Golden Milk (Turmeric Milk) — mild",
    dosha: "Vata",
    desc: "A calming bedtime drink (keep spice mild; choose dairy/non-dairy as tolerated).",
    tags: ["sleep", "calm", "night"],
  },
];

const youtubeVideos = [
  {
    title: "Latest uploads from Dr. Shreya Gupta",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=UUbVtPw8pJF5FGx05fEOHq7A",
  },
  {
    title: "Jiva Ayurveda - Food Tips & Recipes",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PL7-gAhd6sGNLNinLFRVymlDNMiI7er6W_",
  },
  {
    title: "Ayurvedic Diet & Lifestyle",
    embedUrl: "https://www.youtube.com/embed/videoseries?list=PLznkAIqhJt_5rD4IvAiXK6PCI327p3Ox2",
  },
  {
    title: "Ayurvedic Superfoods & Diet Tips",
    id: "adoKnby4Cg",
    embedUrl: "https://www.youtube.com/embed/ADOcKnby4Cg",
  },
  {
    title: "What Is an Ayurvedic Diet? - Banyan Botanicals",
    id: "4cxLTdjBlE",
    embedUrl: "https://www.youtube.com/embed/-4cxLTdjBlE",
  },
  {
    title: "Food Combinations in Ayurveda - Nityanandam Shree",
    id: "vS0dKPtMTPQ",
    embedUrl: "https://www.youtube.com/embed/vS0dKPtMTPQ",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    age: 32,
    concern: "PCOS & Weight Management",
    rating: 5,
    text: "After struggling with PCOS for years, Dr. Shreya's personalized diet plan helped me regulate my cycles and lose 8kg in 3 months. The best part was how sustainable the changes were - I never felt deprived.",
    result: "Regular cycles, 8kg weight loss, improved energy",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=100&h=100&fit=crop&crop=face&auto=format",
  },
  {
    name: "Rahul Verma",
    age: 28,
    concern: "Acidity & Stress",
    rating: 5,
    text: "My acidity issues and work stress were affecting my daily life. The Ayurvedic approach not only fixed my digestion but also helped me manage stress better. I feel more balanced and focused.",
    result: "No acidity, better stress management, improved sleep",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format",
  },
  {
    name: "Anjali Patel",
    age: 45,
    concern: "Thyroid & Fatigue",
    rating: 5,
    text: "Despite medication, I always felt tired. Dr. Shreya's dietary recommendations complemented my treatment and gave me my energy back. I can now keep up with my kids and work.",
    result: "Increased energy levels, better thyroid function, active lifestyle",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format",
  },
  {
    name: "Karan Malhotra",
    age: 35,
    concern: "Digestive Issues & Bloating",
    rating: 5,
    text: "I had tried everything for my bloating and digestive issues. The simple dietary changes and timing suggestions made a huge difference. I feel lighter and more comfortable after meals.",
    result: "No bloating, regular digestion, improved gut health",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format",
  },
];

function renderConcerns() {
  const grid = el("concernsGrid");
  if (!grid) return;
  grid.innerHTML = "";

  commonConcerns.forEach((c, idx) => {
    const card = document.createElement("div");
    card.className = "rounded-2xl border border-earth-clay/25 bg-earth-sand/40 p-4";

    const tipsHtml = c.tips.map((t) => `<li class=\"flex gap-2\"><span class=\"mt-1.5 h-2 w-2 shrink-0 rounded-full bg-earth-moss\"></span><span>${t}</span></li>`).join("");

    card.innerHTML = `
      <button type="button" class="w-full text-left" aria-expanded="false" aria-controls="concern_${idx}">
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="font-semibold">${c.title}</div>
            <div class="mt-1 text-sm text-earth-soil/85">${c.desc}</div>
          </div>
          <span class="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-earth-clay/25 bg-white/60">+</span>
        </div>
      </button>
      <div id="concern_${idx}" class="mt-3 hidden">
        <div class="text-xs font-semibold text-earth-soil/80">Gentle starting tips</div>
        <ul class="mt-2 grid gap-2 text-sm">${tipsHtml}</ul>
      </div>
    `;

    const btn = card.querySelector("button");
    const panel = card.querySelector(`#concern_${idx}`);
    const icon = card.querySelector("span");

    btn.addEventListener("click", () => {
      const isOpen = !panel.classList.contains("hidden");
      panel.classList.toggle("hidden");
      btn.setAttribute("aria-expanded", String(!isOpen));
      icon.textContent = isOpen ? "+" : "−";
    });

    grid.appendChild(card);
  });
}

function renderFaq() {
  const grid = el("faqGrid");
  if (!grid) return;
  grid.innerHTML = "";

  faqItems.forEach((f, idx) => {
    const wrap = document.createElement("div");
    wrap.className = "rounded-2xl border border-earth-clay/25 bg-white/55 p-4";
    wrap.innerHTML = `
      <button type="button" class="w-full text-left" aria-expanded="false" aria-controls="faq_${idx}">
        <div class="flex items-start justify-between gap-3">
          <div class="font-semibold">${f.q}</div>
          <span class="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border border-earth-clay/25 bg-earth-sand/60">+</span>
        </div>
      </button>
      <div id="faq_${idx}" class="mt-3 hidden text-sm text-earth-soil/90">${f.a}</div>
    `;

    const btn = wrap.querySelector("button");
    const panel = wrap.querySelector(`#faq_${idx}`);
    const icon = wrap.querySelector("span");

    btn.addEventListener("click", () => {
      const isOpen = !panel.classList.contains("hidden");
      panel.classList.toggle("hidden");
      btn.setAttribute("aria-expanded", String(!isOpen));
      icon.textContent = isOpen ? "+" : "−";
    });

    grid.appendChild(wrap);
  });
}

function renderRecipes() {
  const grid = el("recipesGrid");
  grid.innerHTML = "";

  recipes.forEach((r) => {
    const card = document.createElement("article");
    card.className = "rounded-3xl border border-earth-clay/25 bg-white/60 p-6 shadow-soft";

    card.innerHTML = `
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-serif text-lg font-bold">${r.title}</h3>
        <span class="shrink-0 rounded-full bg-earth-sand px-3 py-1 text-xs font-semibold text-earth-soil">${r.dosha}</span>
      </div>
      <p class="mt-3 text-sm text-earth-soil/90">${r.desc}</p>
      <div class="mt-4 flex flex-wrap gap-2">
        ${r.tags
          .map(
            (t) =>
              `<span class="rounded-full border border-earth-clay/30 bg-earth-sand/50 px-3 py-1 text-xs font-semibold text-earth-soil">${t}</span>`
          )
          .join("")}
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderVideos() {
  const grid = el("videosGrid");
  grid.innerHTML = "";

  youtubeVideos.forEach((v) => {
    const card = document.createElement("article");
    card.className = "rounded-3xl border border-earth-clay/25 bg-white/60 p-4 shadow-soft";
    const src = v.embedUrl ? v.embedUrl : `https://www.youtube.com/embed/${v.id}`;
    card.innerHTML = `
      <div class="overflow-hidden rounded-2xl border border-earth-clay/25 bg-black">
        <div class="relative w-full" style="padding-top: 56.25%">
          <iframe
            class="absolute inset-0 h-full w-full"
            src="${src}"
            title="${v.title}"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <h3 class="mt-4 font-serif text-base font-bold">${v.title}</h3>
    `;

    grid.appendChild(card);
  });
}

function renderTestimonials() {
  const grid = el("testimonialsGrid");
  grid.innerHTML = "";

  testimonials.forEach((testimonial) => {
    const card = document.createElement("article");
    card.className = "rounded-3xl border border-earth-clay/25 bg-white/60 p-6 shadow-soft";
    
    const stars = Array(testimonial.rating).fill('').map(() => 
      '<svg class="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>'
    ).join('');

    card.innerHTML = `
      <div class="flex items-start gap-4 mb-4">
        <img src="${testimonial.avatar}" alt="${testimonial.name}" class="h-12 w-12 rounded-full object-cover" />
        <div class="flex-1">
          <div class="flex items-center gap-2 mb-1">
            <h4 class="font-semibold text-earth-forest">${testimonial.name}</h4>
            <span class="text-sm text-earth-soil/60">${testimonial.age} years</span>
          </div>
          <div class="flex items-center gap-1">
            ${stars}
          </div>
        </div>
      </div>
      
      <div class="mb-4">
        <span class="inline-block rounded-full bg-earth-moss/20 px-3 py-1 text-xs font-semibold text-earth-moss mb-3">
          ${testimonial.concern}
        </span>
        <p class="text-sm text-earth-soil/90 italic">"${testimonial.text}"</p>
      </div>
      
      <div class="rounded-2xl bg-earth-sand/50 p-3">
        <div class="flex items-center gap-2 text-xs font-medium text-earth-moss">
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>${testimonial.result}</span>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim());
}

function updateGamificationProgress() {
  const bmiProgress = el("bmiProgress");
  const doshaProgress = el("doshaProgress");
  const planProgress = el("planProgress");
  
  if (!bmiProgress || !doshaProgress || !planProgress) return;
  
  // Check localStorage for completed steps
  const bmiCompleted = localStorage.getItem("bmi") !== null;
  const doshaCompleted = localStorage.getItem("dosha") !== null;
  const planCompleted = localStorage.getItem("plan") !== null;
  
  // Update progress bars with animation
  setTimeout(() => {
    if (bmiCompleted) {
      bmiProgress.style.width = "100%";
    }
    if (doshaCompleted) {
      doshaProgress.style.width = "100%";
    }
    if (planCompleted) {
      planProgress.style.width = "100%";
    }
  }, 500);
  
  // Listen for changes in localStorage
  window.addEventListener('storage', (e) => {
    if (e.key === 'bmi' && e.newValue !== null) {
      bmiProgress.style.width = "100%";
    }
    if (e.key === 'dosha' && e.newValue !== null) {
      doshaProgress.style.width = "100%";
    }
    if (e.key === 'plan' && e.newValue !== null) {
      planProgress.style.width = "100%";
    }
  });
}

function init() {
  el("year").textContent = String(new Date().getFullYear());

  const mobileBtn = el("mobileMenuBtn");
  const mobileMenu = el("mobileMenu");
  mobileBtn.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden");
    mobileBtn.setAttribute("aria-expanded", String(!isOpen));
  });

  // Initialize gamification progress bars
  updateGamificationProgress();

  renderQuiz();
  renderConcerns();
  renderFaq();
  renderRecipes();
  renderVideos();
  renderTestimonials();

  clearState("all");
  setHero();
  renderBmi();
  renderDosha();
  renderPlan();

  el("bmiForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const heightCm = parseNum(el("heightCm").value);
    const weightKg = parseNum(el("weightKg").value);

    if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) return;

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const value = round1(bmi);
    const category = bmiCategory(value);

    state.bmi = {
      value,
      category,
      note: bmiAyurvedicNote(category),
    };

    saveState();
    setHero();
    renderBmi();
    renderPlan();
  });

  el("bmiReset").addEventListener("click", () => {
    clearState("bmi");
    el("heightCm").value = "";
    el("weightKg").value = "";
    setHero();
    renderBmi();
    renderPlan();
  });

  el("doshaSubmit").addEventListener("click", () => {
    const scores = getQuizScores();
    if (!scores) {
      el("doshaType").textContent = "Please answer all questions";
      return;
    }

    setDoshaFromScores(scores);
    saveState();
    setHero();
    renderDosha();
    renderPlan();
    
    // Auto-scroll to answer section with smooth animation
    setTimeout(() => {
      const answerSection = document.getElementById('doshaType').closest('.rounded-3xl');
      if (answerSection) {
        answerSection.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        });
        
        // Add highlight animation to answer section
        answerSection.classList.add('ring-4', 'ring-earth-moss/50', 'ring-offset-2');
        setTimeout(() => {
          answerSection.classList.remove('ring-4', 'ring-earth-moss/50', 'ring-offset-2');
        }, 2000);
      }
    }, 300);
  });

  el("doshaReset").addEventListener("click", () => {
    clearState("dosha");
    renderQuiz();
    setHero();
    renderDosha();
    renderPlan();
  });

  el("planRefresh").addEventListener("click", () => {
    setHero();
    renderBmi();
    renderDosha();
    renderPlan();
  });

  el("contactForm").addEventListener("submit", (e) => {
    e.preventDefault();

    const name = String(el("cName").value || "").trim();
    const email = String(el("cEmail").value || "").trim();
    const phone = String(el("cPhone").value || "").trim();
    const goal = String(el("cGoal").value || "").trim();
    const msg = String(el("cMessage").value || "").trim();

    if (!name || !email || !goal) {
      el("contactStatus").textContent = "Please fill the required fields.";
      return;
    }

    if (!validateEmail(email)) {
      el("contactStatus").textContent = "Please enter a valid email address.";
      return;
    }

    const bmiText = state.bmi ? `${state.bmi.value} (${state.bmi.category})` : "Not provided";
    const doshaText = state.dosha ? state.dosha.title : "Not provided";

    const subject = encodeURIComponent("Personalized Ayurvedic Diet Plan Request");
    const body = encodeURIComponent(
      `Hello Dr. Shreya Gupta,\n\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone || "-"}\n` +
        `Goal: ${goal}\n` +
        `BMI: ${bmiText}\n` +
        `Dosha: ${doshaText}\n\n` +
        `Message:\n${msg || "-"}\n\n` +
        `Thank you.`
    );

    const mailto = `mailto:yourclinic@example.com?subject=${subject}&body=${body}`;

    el("contactStatus").innerHTML =
      `Your request is ready. ` +
      `<a class="font-semibold text-earth-moss underline" href="${mailto}">Click here to send via email</a>. ` +
      `You can also replace the clinic email in code with your real address.`;
  });
}

document.addEventListener("DOMContentLoaded", init);
