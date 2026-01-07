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
      "🌸 Vata Daily Diet Plan: Favor warm, cooked, soft, slightly oily foods with sweet, sour & salty tastes. Daily schedule: Early morning - 1 glass warm water + optional 1 tsp ghee or 5 soaked raisins. Breakfast (8-9 AM) - vegetable oats porridge with ghee, moong dal chilla, stewed fruits with cinnamon, idli with ghee, or ragi porridge with ghee. Mid-morning - banana/papaya/apple or soaked almonds (5-6) or walnuts (3-4). Lunch (main meal) - rice/soft chapati + moong/masoor dal + cooked vegetables (bottle gourd, pumpkin, carrot, beetroot, spinach) + 1 tsp ghee + side salad with lemon dressing. Evening snack - roasted makhana, warm herbal tea (ginger-fennel), or sweet potato chaat. Dinner (by 7:30-8 PM) - vegetable soup + chapati, khichdi with ghee, steamed veggies + dal, or millet porridge. Before bed - warm turmeric milk or almond milk. Best foods: rice, wheat, oats, ragi, jowar, pumpkin, carrot, beetroot, sweet potato, spinach, bottle gourd, banana, mango, papaya, grapes, cherries, moong dal, masoor dal, urad dal, paneer, ghee, sesame oil, almonds, walnuts. Use spices: ginger, cumin, coriander, fennel, hing, turmeric, cardamom, cinnamon. Avoid: raw salads, dry snacks, cold drinks, excess coffee, bitter gourd, refined flour, processed foods. Lifestyle: eat at fixed times, sleep before 10:30 PM, daily oil massage with sesame oil, gentle yoga, avoid overexertion. Additional recommendations: Drink warm water throughout the day, include healthy fats daily, avoid fasting, eat 3 main meals + 1-2 snacks, chew food thoroughly, practice mindful eating. 🍗 Non-Veg for Vata: Most suitable - chicken (soup, stew, curry), mutton/lamb (small portions, well cooked), eggs (boiled, omelette with ghee), freshwater fish (rohu, catla, singhara), sea fish (salmon, pomfret, sardines). Avoid: dry fried meats, processed meats, very spicy tandoori, leftover meat, shellfish. Best cooking: soups, stews, light curries, bone broth, khichdi with chicken, steamed fish. Use spices: ginger, garlic, cumin, coriander, fennel, turmeric, hing, black pepper (moderate). Sample non-veg day: breakfast - vegetable omelette in ghee + whole wheat toast; lunch - chicken curry with rice + cucumber salad; evening - chicken soup + roasted makhana; dinner - fish curry + chapati + steamed vegetables. Extra tips: eat at regular times, never skip meals, avoid cold drinks with meat, include bone broth 2-3 times/week, prefer freshly cooked meat, chew properly, avoid eating meat after 8 PM.",
  },
  pitta: {
    title: "Pitta",
    about:
      "Pitta is hot, sharp, and intense. When balanced it supports focus and strong digestion. When imbalanced it may show as acidity, inflammation, irritability, and overheating.",
    diet:
      "🌸 Pitta Daily Diet Plan: Favor cooling & refreshing, light, not oily foods with sweet, bitter & astringent tastes. Daily schedule: Early morning - 1 glass room-temperature water or coriander-fennel seed water (soak overnight). Breakfast (8-9 AM) - oats porridge with milk/almond milk, idli with mild coconut chutney, poha with vegetables, stewed apple/pear, or quinoa upma. Drink: coconut water/fennel tea/rose tea. Mid-morning - sweet apple/pear/papaya/grapes or soaked almonds (5-6) or figs (2-3). Lunch - rice/soft chapati + moong/masoor dal + cooked vegetables (bottle gourd, pumpkin, carrot, zucchini, spinach, cucumber, broccoli) + ½-1 tsp ghee + cucumber raita. Evening snack - herbal tea (fennel-rose-licorice), roasted makhana, or coconut water with mint. Dinner (by 7-7:30 PM) - vegetable soup, steamed veggies + dal, light khichdi, or millet porridge. Before bed - warm turmeric milk or cardamom milk. Best foods: rice, oats, wheat, quinoa, barley, bottle gourd, pumpkin, carrot, zucchini, spinach, cucumber, broccoli, cabbage, apple, pear, papaya, grapes, mango, pomegranate, coconut, moong dal, masoor dal, paneer, ghee, coconut oil. Use spices: fennel, coriander, cumin, cardamom, turmeric, mint, cilantro. Avoid: red chilli, excess black pepper, pickles, vinegar, fried snacks, cheese, excess butter, alcohol, excess tomatoes, onions, garlic. Lifestyle: avoid overheating, cooling pranayama, sleep by 10:30 PM, meditation, manage stress, avoid anger/frustration. Additional recommendations: Include cooling foods daily, drink plenty of water, avoid skipping meals, eat in peaceful environment, practice mindful eating, include raw salads in moderation, avoid eating when angry/stressed. 🍗 Non-Veg for Pitta: Best choices - chicken (boiled, grilled, light curry), turkey, eggs (boiled or soft omelette), freshwater fish (rohu, catla), clear bone broth, shellfish (occasionally). Limit - prawns, fatty fish (salmon, tuna), mutton (rare - once in 2-3 weeks). Avoid - beef, deep-fried meat, spicy gravies, processed meats, preserved meats. Daily plan: morning - warm water with lemon + soaked almonds + optional boiled egg; breakfast - vegetable omelette (little oil) OR chicken soup + toast + herbal tea; mid-morning - papaya/apple/pear/pomegranate + coconut water (2-3 times/week); lunch - steamed rice/soft rotis + light chicken/fish curry + vegetables + curd/buttermilk; evening - roasted chana + fennel/coriander tea; dinner - grilled fish/chicken soup + steamed vegetables + small portion rice; bedtime - warm turmeric milk. Best cooking methods: steaming, boiling, grilling, baking, light sautéing. Use cooling spices: fennel, coriander, mint, cilantro, cardamom. Avoid excessive heating: no deep frying, minimal spices, no heavy gravies.",
  },
  kapha: {
    title: "Kapha",
    about:
      "Kapha is heavy, steady, and nourishing. When balanced it supports stability and endurance. When imbalanced it may show as heaviness, sluggish digestion, congestion, and weight gain.",
    diet:
      "🌸 Kapha Daily Diet Plan: Favor warm, light, dry foods with spicy, bitter & astringent tastes. Daily schedule: Early morning - warm water with lemon + honey or ginger-tulsi tea. Breakfast (light or skip) - vegetable poha (very little oil), upma with vegetables, stewed apple with cinnamon, moong dal chilla, or oats porridge with berries. Mid-morning - apple/pear/pomegranate or roasted chana or sprouts salad. Lunch - 1 small chapati/brown rice + moong/masoor dal + dry vegetables (cabbage, cauliflower, carrot, beans, spinach, bitter gourd, broccoli) + ½ tsp ghee. Evening snack - herbal tea (ginger-cinnamon-tulsi), roasted makhana, or vegetable juice. Dinner (by 7 PM) - vegetable soup, steamed veggies + dal, moong dal khichdi, or clear soup. Before bed - warm water or haldi water. Best foods: barley, millet, oats, quinoa, buckwheat, cabbage, cauliflower, carrots, beans, spinach, bitter gourd, broccoli, bottle gourd, apple, pear, berries, pomegranate, grapefruit, lemon, moong dal, masoor dal, chickpeas, lentil sprouts. Use spices: ginger, cinnamon, black pepper, turmeric, clove, mustard seeds, hing. Avoid: excess white rice, potatoes, sweets, cold curd, cheese, fried snacks, ice cream, heavy dairy, refined flour, processed foods. Lifestyle: wake before 6 AM, daily brisk walk/yoga, avoid day sleep, keep meals light, practice intermittent fasting (optional). Additional recommendations: Include bitter foods daily, drink warm water with lemon, avoid overeating, practice dry brushing, include detoxifying foods, eat largest meal at lunch, light dinner only, avoid late-night eating, include fiber-rich foods. 🍗 Non-Veg for Kapha: Best choices - chicken (grilled, roasted, soup), turkey, eggs (boiled/omelette with little oil), freshwater fish (rohu, catla), clear bone broth, shellfish (occasionally). Limit - mutton (1-2 times/month), prawns, fatty fish (salmon, tuna), duck. Avoid - beef, pork, deep-fried meat, creamy gravies, processed meats, preserved meats. Daily non-veg plan: morning - warm water with ginger+lemon + soaked almonds; breakfast - vegetable omelette (minimal oil) OR clear chicken soup + ginger tea; lunch - 1-2 rotis + grilled/roasted chicken/fish + stir-fried vegetables + buttermilk; evening - roasted chana + green tea; dinner - clear chicken soup/grilled fish + steamed veggies (avoid rice at night); bedtime - warm turmeric water. Best cooking methods: grilling, roasting, baking, steaming, boiling. Use stimulating spices: ginger, black pepper, turmeric, mustard seeds, hing, cayenne (moderate). Seasonal tips: winter - use soups/stews but avoid creamy gravies; spring - prefer grilled/roasted food, avoid dairy+meat together; summer - include cooling herbs like mint, cilantro; monsoon - avoid heavy meats, prefer clear soups.",
  },
  dual: {
    title: "Dual Dosha",
    about:
      "Your responses are close across two doshas. A dual-dosha approach often works best: follow the overlap that feels most supportive day-to-day.",
    diet: "🌸 Dual Dosha Daily Diet Plan: Focus on balance, meal regularity, and seasonal adjustments. For Vata-Pitta: Warm, moist, mildly cooling, and not too spicy. Favor warm, cooked, easy-to-digest foods that are slightly cooling but not cold, with mild spices. Avoid very spicy, sour, salty foods and very dry, raw, or cold items. Daily schedule: Early morning - warm water with lemon + soaked almonds. Breakfast (8-9 AM) - vegetable oats porridge, moong dal chilla, idli with mild chutney, or quinoa upma. Mid-morning - sweet fruits or soaked nuts. Lunch - rice/soft chapati + dal + cooked vegetables + small salad. Evening snack - herbal tea or roasted makhana. Dinner - light soup + chapati or khichdi. For Vata-Kapha: Warm, light, stimulating but not overly spicy. Favor warm, lightly spiced, easy-to-digest foods that are neither too heavy nor too dry. Avoid cold, heavy, oily, and overly sweet foods. Daily schedule: Early morning - warm water with ginger + honey. Breakfast - light warm porridge or steamed foods. Lunch - small portion rice + dal + vegetables. Dinner - very light soup or steamed veggies. For Pitta-Kapha: Warm, light, stimulating but cooling. Favor warm, lightly spiced foods that are neither too heavy nor too heating. Include bitter and astringent tastes. Avoid cold, heavy, oily, and overly spicy foods. Daily schedule: Early morning - warm water with lemon. Breakfast - light warm foods with mild spices. Lunch - moderate portion with cooling vegetables. Dinner - very light, early meal. Best foods for all dual doshas: rice, oats, barley, millet, seasonal vegetables, fresh fruits, moong dal, light proteins. Use spices: cumin, coriander, fennel, turmeric, ginger (moderate), black pepper (moderate). Avoid: incompatible food combinations, overeating, irregular meal times, processed foods. Lifestyle: maintain consistent routine, seasonal adjustments, stress management, regular exercise. 🍗 Non-Veg for Dual Doshas: Vata-Pitta: Best - chicken soup, boiled eggs, light fish curry. Avoid - fried meats, spicy gravies. Vata-Kapha: Best - grilled chicken, clear soups, boiled eggs. Avoid - heavy meats, creamy gravies. Pitta-Kapha: Best - grilled fish, chicken soup, boiled eggs. Avoid - red meat, fried foods, heavy gravies. General guidelines: prefer freshly cooked, light preparations, avoid late-night meat consumption, include bone broths, chew thoroughly, eat at regular times.",
  },
  tridosha: {
    title: "Tridosha",
    about:
      "You have a perfect balance of all three doshas - Vata, Pitta, and Kapha. This is rare and special. Focus on maintaining harmony through seasonal eating, routine, and mindful practices that honor all aspects of your constitution.",
    diet: "🌸 Tridosha Daily Diet Plan: The goal is balance, not excess. Best foods are warm, freshly cooked, moderately spiced, light but nourishing, mostly sweet, bitter & astringent in taste. Avoid too spicy, oily, fried, too cold, dry, raw, too sweet, heavy, processed foods, and irregular eating. Daily schedule: Early morning - warm water or coriander-fennel seed water (soak overnight). Breakfast (8-9 AM) - vegetable oats porridge, moong dal chilla, idli with mild chutney, or stewed apple/pear. Drink: fennel tea/ginger tea (mild). Mid-morning - apple/pear/papaya/pomegranate or soaked almonds (5-6). Lunch - rice/soft chapati + moong/masoor dal + cooked vegetables (bottle gourd, pumpkin, carrot, zucchini, spinach, beans) + ½-1 tsp ghee. Spices: cumin, coriander, fennel, turmeric, little ginger. Evening snack - roasted makhana or herbal tea (fennel-coriander-tulsi). Dinner (by 7-7:30 PM) - vegetable soup, steamed veggies + dal, or light khichdi. Before bed - warm water or turmeric milk (if digestion allows). Best foods: rice, oats, wheat, quinoa, millet, bottle gourd, pumpkin, carrot, zucchini, spinach, beans, beetroot, apple, pear, papaya, grapes, pomegranate, mango, moong dal, chickpeas, paneer, ghee. Use spices: fennel, coriander, cumin, turmeric, cardamom, mint, hing. Avoid: fried snacks, packaged food, excess sugar, ice cream, cold drinks, alcohol. Lifestyle: eat at regular times, sleep before 10:30 PM, daily walk/yoga/pranayama, avoid day sleep, oil massage 2-3 times/week, manage stress. Remember: Not too hot, not too cold; not too heavy, not too light; not too spicy, not too bland. 🍗 Non-Veg for Tridosha: Best choices - chicken (boiled, grilled, light curry), turkey, eggs (boiled/soft omelette), freshwater fish (rohu, catla), clear chicken/bone broth. Limit - prawns, fatty fish (salmon, tuna), mutton (once in 2-3 weeks). Avoid - beef, deep-fried meat, creamy gravies, processed meats. Daily plan: morning - warm water + soaked almonds + optional boiled egg; breakfast - vegetable omelette (little oil) OR clear chicken soup + toast + fennel/cumin tea; mid-morning - apple/papaya/pear/pomegranate; lunch - steamed rice/soft rotis + light chicken/fish curry + vegetables + buttermilk; evening - roasted chana + coriander/ginger tea; dinner - clear chicken soup/grilled fish + steamed veggies; bedtime - warm milk with nutmeg/cardamom. Best spices: cumin, coriander, fennel, turmeric, cardamom, mild ginger. Avoid excess: red chilli, black pepper, garam masala, vinegar. Seasonal adjustments: summer - prefer fish, eggs, chicken soup, avoid spicy/fried; winter - prefer stews, bone broth, add small ghee/sesame oil; spring - prefer grilled/roasted meats, avoid dairy+meat. Health conditions: acidity/gastritis - strictly avoid spicy & sour food; weight gain/thyroid - keep dinners very light; joint pain/dryness - choose soups & stews; high cholesterol - only grilled/boiled meats.",
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
  
  // Update height display to show both value and unit
  if (state.bmi) {
    const heightDisplay = state.bmi.heightUnit === "cm" 
      ? `${state.bmi.heightCm} cm` 
      : state.bmi.heightUnit === "inches"
      ? `${(state.bmi.heightCm / 2.54).toFixed(1)} inches`
      : `${(state.bmi.heightCm / 30.48).toFixed(2)} feet`;
    
    // You could add a display element for this if needed
    const heightLabel = document.querySelector('label[for="heightValue"]');
    if (heightLabel) {
      heightLabel.textContent = `Height (${state.bmi.heightUnit})`;
    }
  }
}

function computeDominantDosha(scores) {
  const pairs = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const [top, second, third] = pairs;
  
  // Count how many doshas have non-zero scores
  const nonZeroScores = pairs.filter(([_, score]) => score > 0);
  
  // Check for tridosha (all three doshas equal)
  if (nonZeroScores.length >= 3) {
    // Check if all three scores are equal (tridosha)
    const allEqual = nonZeroScores.every(([_, score]) => score === nonZeroScores[0][1]);
    
    if (allEqual) {
      return { 
        kind: "tridosha", 
        title: "TRIDOSHA (VATA + PITTA + KAPHA)", 
        primary: "vata", 
        secondary: "pitta", 
        tertiary: "kapha",
        scores 
      };
    }
    
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
    doshaTypeEl.style.opacity = "0";
    doshaTypeEl.style.transform = "scale(0.8)";
    
    setTimeout(() => {
      doshaTypeEl.textContent = state.dosha.title;
      doshaTypeEl.style.opacity = "1";
      doshaTypeEl.style.transform = "scale(1)";
    }, 100);
    
    doshaAboutEl.textContent = state.dosha.about;
    
    // Format diet plan with proper line breaks and structure
    const formattedDiet = formatDietPlan(state.dosha.diet);
    doshaDietEl.innerHTML = formattedDiet;
  } else {
    doshaTypeEl.textContent = "—";
    doshaAboutEl.textContent = "Take the quiz to see your description.";
    doshaDietEl.textContent = "Your food focus will appear here.";
  }
  
  el("contactDosha").textContent = state.dosha ? state.dosha.title : "—";
}

function formatDietPlan(dietText) {
  // Split by common separators and format with proper line breaks
  let formatted = dietText;
  
  // Replace common separators with HTML line breaks
  formatted = formatted.replace(/Daily schedule:/gi, '<br><br><strong>🕘 Daily Schedule:</strong>');
  formatted = formatted.replace(/Early morning -/gi, '<br><strong>🌅 Early Morning:</strong> ');
  formatted = formatted.replace(/Breakfast \(/gi, '<br><strong>🍳 Breakfast:</strong> (');
  formatted = formatted.replace(/Mid-morning -/gi, '<br><strong>🍎 Mid-Morning:</strong> ');
  formatted = formatted.replace(/Lunch -/gi, '<br><strong>🍛 Lunch:</strong> ');
  formatted = formatted.replace(/Evening snack -/gi, '<br><strong>☕ Evening Snack:</strong> ');
  formatted = formatted.replace(/Dinner \(/gi, '<br><strong>🍽️ Dinner:</strong> (');
  formatted = formatted.replace(/Before bed -/gi, '<br><strong>🌙 Before Bed:</strong> ');
  formatted = formatted.replace(/Best foods:/gi, '<br><br><strong>✅ Best Foods:</strong>');
  formatted = formatted.replace(/Use spices:/gi, '<br><strong>🧂 Best Spices:</strong>');
  formatted = formatted.replace(/Avoid:/gi, '<br><strong>❌ Avoid:</strong>');
  formatted = formatted.replace(/Lifestyle:/gi, '<br><br><strong>🧘 Lifestyle:</strong>');
  formatted = formatted.replace(/🍗 Non-Veg for/gi, '<br><br><strong>🍗 Non-Vegetarian Options:</strong>');
  formatted = formatted.replace(/Best choices -/gi, '<br><strong>✅ Best Choices:</strong> ');
  formatted = formatted.replace(/Limit -/gi, '<br><strong>⚠️ Limit:</strong> ');
  formatted = formatted.replace(/Avoid -/gi, '<br><strong>❌ Avoid:</strong> ');
  formatted = formatted.replace(/Daily plan:/gi, '<br><strong>📅 Daily Plan:</strong>');
  formatted = formatted.replace(/morning -/gi, '<br><strong>🌅 Morning:</strong> ');
  formatted = formatted.replace(/breakfast -/gi, '<br><strong>🍳 Breakfast:</strong> ');
  formatted = formatted.replace(/mid-morning -/gi, '<br><strong>🍎 Mid-Morning:</strong> ');
  formatted = formatted.replace(/lunch -/gi, '<br><strong>🍛 Lunch:</strong> ');
  formatted = formatted.replace(/evening -/gi, '<br><strong>☕ Evening:</strong> ');
  formatted = formatted.replace(/dinner -/gi, '<br><strong>🍽️ Dinner:</strong> ');
  formatted = formatted.replace(/bedtime -/gi, '<br><strong>🌙 Bedtime:</strong> ');
  formatted = formatted.replace(/Best spices:/gi, '<br><strong>🧂 Best Spices:</strong>');
  formatted = formatted.replace(/Seasonal tips:/gi, '<br><br><strong>❄️ Seasonal Tips:</strong>');
  formatted = formatted.replace(/Health conditions:/gi, '<br><br><strong>⚠️ Health Conditions:</strong>');
  formatted = formatted.replace(/Additional recommendations:/gi, '<br><br><strong>💡 Additional Recommendations:</strong>');
  formatted = formatted.replace(/General guidelines:/gi, '<br><br><strong>📋 General Guidelines:</strong>');
  formatted = formatted.replace(/Best cooking methods:/gi, '<br><strong>🔥 Best Cooking Methods:</strong>');
  formatted = formatted.replace(/Seasonal adjustments:/gi, '<br><strong>🌤️ Seasonal Adjustments:</strong>');
  formatted = formatted.replace(/Use balanced spices:/gi, '<br><strong>🧂 Use Balanced Spices:</strong>');
  formatted = formatted.replace(/Avoid excess:/gi, '<br><strong>⚠️ Avoid Excess:</strong>');
  formatted = formatted.replace(/For Vata-Pitta:/gi, '<br><br><strong>🌸 Vata-Pitta:</strong>');
  formatted = formatted.replace(/For Vata-Kapha:/gi, '<br><br><strong>🌸 Vata-Kapha:</strong>');
  formatted = formatted.replace(/For Pitta-Kapha:/gi, '<br><br><strong>🌸 Pitta-Kapha:</strong>');
  formatted = formatted.replace(/Remember:/gi, '<br><br><strong>💭 Remember:</strong>');
  
  // Replace "OR" with proper formatting
  formatted = formatted.replace(/ OR /gi, ' <strong>or</strong> ');
  
  // Add proper spacing around bullet points
  formatted = formatted.replace(/•/g, '<br>•');
  
  // Format time ranges
  formatted = formatted.replace(/\((\d+:\d+\s*(?:AM|PM)?)\s*–\s*(\d+:\d+\s*(?:AM|PM)?)\)/gi, '($1–$2)');
  
  // Format food lists with better spacing
  formatted = formatted.replace(/, /g, ', ');
  
  return formatted;
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
  const dietType = el("dietType").value || "veg";

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
      veg: {
        favor: ["Warm cooked meals (khichdi, soups)", "Ghee, sesame oil, nuts", "Sweet fruits (ripe banana, dates)", "Gentle spices (ginger, cumin, ajwain)", "Root vegetables (sweet potato, carrot, beetroot)", "Whole grains (rice, oats, warm ragi)"],
        reduce: ["Cold/raw foods", "Excess caffeine", "Dry snacks", "Skipping meals", "Bitter gourd, refined flour", "Ice cream, cold drinks"],
        routine: ["Eat at consistent times (8 AM, 1 PM, 7 PM)", "Warm water or herbal tea through the day", "Early, calming dinner before 8 PM", "Gentle walking/yoga", "Oil massage with warm sesame oil"],
        sample: {
          breakfast: "Warm porridge with ghee + stewed apple (1 bowl)",
          lunch: "Moong dal khichdi + cooked seasonal vegetables (1.5 cups)",
          dinner: "Vegetable soup + soft roti (2) + ghee (1 tsp)",
        },
      },
      nonveg: {
        favor: ["Warm cooked meals (khichdi, soups)", "Ghee, sesame oil, nuts", "Sweet fruits (ripe banana, dates)", "Gentle spices (ginger, cumin, ajwain)", "Chicken soup, boiled eggs, freshwater fish", "Bone broth with vegetables"],
        reduce: ["Cold/raw foods", "Excess caffeine", "Dry snacks", "Skipping meals", "Fried meats, processed meats", "Red meat, shellfish"],
        routine: ["Eat at consistent times (8 AM, 1 PM, 7 PM)", "Warm water or herbal tea through the day", "Early, calming dinner before 8 PM", "Gentle walking/yoga", "Oil massage with warm sesame oil"],
        sample: {
          breakfast: "Vegetable omelette with ghee + toast (2 eggs)",
          lunch: "Chicken curry + rice + cooked vegetables (1.5 cups)",
          dinner: "Chicken soup + soft roti (2) + steamed vegetables",
        },
      },
    },
    pitta: {
      veg: {
        favor: ["Cooling foods (cucumber, melon)", "Bitter greens", "Coconut water / infused water", "Mild spices (fennel, coriander)", "Sweet fruits (grapes, mango, pear)", "Ghee, coconut oil"],
        reduce: ["Very spicy foods", "Fried/oily meals", "Alcohol", "Late-night eating", "Red chilli, pickles, vinegar", "Excess tomatoes, onions"],
        routine: ["Prefer lunch as the main meal", "Stay hydrated (3-4 liters water)", "Avoid overheating workouts", "Add cooling breathwork", "Eat in peaceful environment"],
        sample: {
          breakfast: "Overnight soaked oats + berries + cardamom (1 bowl)",
          lunch: "Rice + dal + sautéed greens + cucumber raita (1.5 cups)",
          dinner: "Light moong dal soup + steamed veggies (1 bowl)",
        },
      },
      nonveg: {
        favor: ["Cooling foods (cucumber, melon)", "Bitter greens", "Coconut water / infused water", "Mild spices (fennel, coriander)", "Boiled chicken, grilled fish, eggs", "Freshwater fish (rohu, catla)"],
        reduce: ["Very spicy foods", "Fried/oily meals", "Alcohol", "Late-night eating", "Spicy gravies, red meat", "Shellfish, fatty fish"],
        routine: ["Prefer lunch as the main meal", "Stay hydrated (3-4 liters water)", "Avoid overheating workouts", "Add cooling breathwork", "Eat in peaceful environment"],
        sample: {
          breakfast: "Boiled egg + oats + berries (2 eggs, 1 bowl)",
          lunch: "Grilled fish + rice + cucumber salad (1.5 cups)",
          dinner: "Light chicken soup + steamed veggies (1 bowl)",
        },
      },
    },
    kapha: {
      veg: {
        favor: ["Light warm meals", "Legumes and vegetables", "Spices (black pepper, ginger)", "Herbal teas (ginger, tulsi)", "Bitter vegetables (bitter gourd, spinach)", "Millet, barley, light grains"],
        reduce: ["Sugar and sweets", "Heavy dairy", "Fried foods", "Daytime naps", "White rice, potatoes", "Cold curd, cheese"],
        routine: ["Morning movement daily (30-45 min walk)", "Early, light dinner before 7 PM", "Eat only when hungry", "Keep meals simple", "Dry brushing, warm water with lemon"],
        sample: {
          breakfast: "Spiced upma/poha with vegetables (1.5 cups)",
          lunch: "Millet roti + dal + mixed veg sabzi (2 rotis, 1.5 cups)",
          dinner: "Clear vegetable soup + sautéed greens (1 bowl)",
        },
      },
      nonveg: {
        favor: ["Light warm meals", "Legumes and vegetables", "Spices (black pepper, ginger)", "Herbal teas (ginger, tulsi)", "Grilled chicken, boiled eggs, clear fish soup", "Lean protein, small portions"],
        reduce: ["Sugar and sweets", "Heavy dairy", "Fried foods", "Daytime naps", "Fatty meats, creamy gravies", "Processed meats, excess non-veg"],
        routine: ["Morning movement daily (30-45 min walk)", "Early, light dinner before 7 PM", "Eat only when hungry", "Keep meals simple", "Dry brushing, warm water with lemon"],
        sample: {
          breakfast: "Vegetable omelette (minimal oil) + green tea (2 eggs)",
          lunch: "Grilled chicken + millet roti + vegetables (100g chicken)",
          dinner: "Clear chicken soup + steamed vegetables (1 bowl)",
        },
      },
    },
    dual: {
      veg: {
        favor: ["Cooked seasonal meals", "Balanced spice use", "Plenty of vegetables", "Regular meal timing", "Both light and nourishing foods", "Adapt to seasonal needs"],
        reduce: ["Overeating", "Processed foods", "Late-night meals", "Incompatible combinations", "Excess of any one taste"],
        routine: ["Maintain consistent routine", "Hydration and sleep regularity", "Walk after meals", "Seasonal adjustments", "Listen to body signals"],
        sample: {
          breakfast: "Warm porridge + fruit (1 bowl)",
          lunch: "Rice + dal + vegetables (1.5 cups)",
          dinner: "Soup + light meal (1 bowl)",
        },
      },
      nonveg: {
        favor: ["Cooked seasonal meals", "Balanced spice use", "Plenty of vegetables", "Regular meal timing", "Light chicken/fish, eggs", "Adapt to seasonal needs"],
        reduce: ["Overeating", "Processed foods", "Late-night meals", "Fried meats, heavy gravies", "Incompatible combinations"],
        routine: ["Maintain consistent routine", "Hydration and sleep regularity", "Walk after meals", "Seasonal adjustments", "Listen to body signals"],
        sample: {
          breakfast: "Vegetable omelette + toast (2 eggs)",
          lunch: "Light chicken/fish curry + rice + vegetables (1.5 cups)",
          dinner: "Clear soup + grilled fish/chicken (1 bowl)",
        },
      },
    },
  };

  let chosen;
  if (doshaKind === "dual") {
    chosen = doshaPlan.dual[dietType];
  } else if (doshaKind === "tridosha") {
    chosen = doshaPlan.dual[dietType]; // Use dual plan for tridosha as well
  } else {
    chosen = doshaPlan[primary][dietType];
  }

  base.favor.push(...chosen.favor);
  base.reduce.push(...chosen.reduce);
  base.routine.push(...chosen.routine);
  base.sample = chosen.sample;

  if (bmiCat === "Underweight") {
    base.favor.unshift("Add healthy calories: ghee, nuts, dates (as tolerated)");
    base.favor.push("Nut-dense smoothies with banana and dates", "Protein-rich dal and legume preparations", "Healthy fats: avocado, coconut, sesame seeds");
    base.routine.push("Aim for 3 meals + 1 nourishing snack if needed");
    base.routine.push("Include strength training 3x/week", "Sleep 8-9 hours for recovery", "Avoid excessive cardio");
  }

  if (bmiCat === "Overweight" || bmiCat === "Obese") {
    base.reduce.unshift("Reduce sugary drinks and ultra-processed snacks");
    base.reduce.push("White rice, refined flour products", "Deep-fried foods and fast food", "Excess salt and processed meats");
    base.routine.push("Add 30–45 minutes of daily walking");
    base.routine.push("Practice portion control (use smaller plates)", "Include 5 servings of vegetables daily", "Intermittent fasting (14:10) if suitable");
  }

  if (bmiCat === "Normal") {
    base.routine.push("Maintain portions and prioritize digestion");
    base.routine.push("Include variety in food choices", "Seasonal detox practices", "Maintain current activity level");
    base.favor.push("Colorful vegetables and fruits", "Balanced macronutrients in each meal");
  }

  // Add seasonal adjustments
  const currentMonth = new Date().getMonth();
  let season = "";
  
  if (currentMonth >= 2 && currentMonth <= 4) { // Spring (Mar-May)
    season = "spring";
    base.routine.push("Spring focus: Include bitter greens and light foods");
    base.favor.push("Spring vegetables: spinach, fenugreek, cabbage");
  } else if (currentMonth >= 5 && currentMonth <= 7) { // Summer (Jun-Aug)
    season = "summer";
    base.routine.push("Summer focus: Stay hydrated, eat cooling foods");
    base.favor.push("Summer fruits: mango, watermelon, cucumber");
    base.reduce.push("Excess heating spices and fried foods");
  } else if (currentMonth >= 8 && currentMonth <= 10) { // Monsoon/Autumn (Sep-Nov)
    season = "monsoon";
    base.routine.push("Monsoon focus: Boost immunity with warm, spiced foods");
    base.favor.push("Immunity boosters: ginger, turmeric, garlic");
    base.reduce.push("Street food and raw foods");
  } else { // Winter (Dec-Feb)
    season = "winter";
    base.routine.push("Winter focus: Nourishing, warming foods");
    base.favor.push("Winter foods: sesame, jaggery, root vegetables");
    base.reduce.push("Cold drinks and excessive raw foods");
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
    el("planSeasonal").textContent = "Complete BMI and Dosha to see seasonal recommendations.";
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

  // Display seasonal recommendations
  const currentMonth = new Date().getMonth();
  let seasonText = "";
  
  if (currentMonth >= 2 && currentMonth <= 4) { // Spring
    seasonText = "🌸 Spring: Focus on light, detoxifying foods. Include bitter greens, sprouts, and lighter meals to cleanse the body.";
  } else if (currentMonth >= 5 && currentMonth <= 7) { // Summer
    seasonText = "☀️ Summer: Stay cool and hydrated. Favor sweet, juicy fruits, cooling vegetables, and lighter cooking methods.";
  } else if (currentMonth >= 8 && currentMonth <= 10) { // Monsoon
    seasonText = "🌧️ Monsoon: Boost immunity with warm, spiced foods. Include ginger, turmeric, and well-cooked meals.";
  } else { // Winter
    seasonText = "❄️ Winter: Nourish and warm the body. Focus on hearty soups, root vegetables, healthy fats, and warming spices.";
  }
  
  el("planSeasonal").textContent = seasonText;
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

  if (dom.kind === "tridosha") {
    state.dosha = {
      kind: "tridosha",
      title: dom.title,
      about: doshaProfiles.tridosha.about,
      diet: doshaProfiles.tridosha.diet,
      primary: dom.primary,
      secondary: dom.secondary,
      tertiary: dom.tertiary,
      scores: dom.scores,
    };
  } else if (dom.kind === "dual") {
    // Get specific guidance for the dual dosha combination
    const dualKey = `${dom.primary}-${dom.secondary}`;
    let specificDiet = doshaProfiles.dual.diet;
    
    if (dualKey === "vata-pitta" || dualKey === "pitta-vata") {
      specificDiet = "🌸 Vata-Pitta Daily Diet Plan: Prefer warm, soft, freshly cooked, mildly oily foods with sweet, bitter & astringent tastes. Daily schedule: Early morning - warm water with 5-6 soaked raisins OR coriander-fennel seed water, optional 1 tsp ghee. Breakfast (8-9 AM) - vegetable oats porridge with ghee, moong dal chilla with mint chutney, stewed apple/pear with cinnamon, or idli with mild coconut chutney. Drink: fennel tea/rose tea/warm milk. Mid-morning - papaya/apple/pear/sweet grapes or soaked almonds (5-6). Lunch - rice/soft chapati + moong/masoor dal + cooked vegetables (bottle gourd, pumpkin, carrot, zucchini, spinach, beans) + ½-1 tsp ghee. Evening snack - roasted makhana or herbal tea (fennel-rose-licorice). Dinner (by 7:30-8 PM) - vegetable soup, steamed veggies + dal, or khichdi. Before bed - warm turmeric milk or cardamom milk. Best foods: rice, oats, wheat, bottle gourd, pumpkin, carrot, zucchini, spinach, beetroot, apple, pear, papaya, mango, grapes, coconut, moong dal, paneer, ghee. Use spices: fennel, coriander, cumin, cardamom, turmeric, mint. Avoid: red chilli, pickles, excess salt, fried snacks, ice cream, cold drinks, excess tomatoes, alcohol. Lifestyle: eat at fixed times, avoid overheating/stress, sleep before 10:30 PM, gentle yoga, oil massage 2-3 times/week. 🍗 Non-Veg for Vata-Pitta: Best choices - chicken (stewed/boiled/grilled), turkey, eggs, freshwater fish. Limit - mutton (rare), prawns (occasional), fish (light & fresh). Avoid - beef, excess seafood, very spicy curries, deep-fried meat. Daily non-veg plan: morning - warm water with lemon + soaked almonds + optional boiled egg; breakfast - vegetable omelette in ghee OR chicken soup + toast; lunch - rice/roti + mild chicken curry + vegetables + curd; evening - roasted chana + herbal tea; dinner - grilled fish OR chicken soup + veggies; bedtime - warm milk with nutmeg. Best spices: coriander, fennel, turmeric, cumin, cardamom, small ginger. Seasonal tips: summer - prefer fish, eggs, chicken soup; winter - prefer chicken stew, bone broth with ghee. Health conditions: acidity - avoid spicy/fried meat; high BP - prefer grilled/boiled; weak digestion - soups & stews only.";
    } else if (dualKey === "vata-kapha" || dualKey === "kapha-vata") {
      specificDiet = "🌼 Vata-Kapha Daily Diet Plan: Ground Vata & lighten Kapha with warm, light, well-spiced foods. Daily schedule: Early morning - warm water with 1 tsp honey + lemon or ginger tea. Breakfast (8-9 AM) - vegetable poha, upma with vegetables, moong dal chilla, or stewed apple with cinnamon. Mid-morning - apple/pear/pomegranate or roasted chana. Lunch - 1-2 chapati + moong/masoor dal + dry vegetables (cabbage, cauliflower, carrot, beans) with ½ tsp ghee. Evening snack - herbal tea (ginger-tulsi-cinnamon) or roasted makhana. Dinner (by 7 PM) - vegetable soup, moong dal khichdi, or steamed veggies + dal. Before bed - warm water or haldi water. Best foods: barley, millet, oats, cabbage, cauliflower, carrot, beans, spinach, apple, pear, berries, pomegranate, moong dal, chickpeas. Use spices: ginger, cinnamon, black pepper, turmeric, hing. Avoid: excess rice, potatoes, sweets, cold curd, cheese, fried snacks, ice cream. Lifestyle: wake before 6 AM, daily walk/yoga, regular meal times, avoid day sleep. 🍗 Non-Veg for Vata-Kapha: Best choices - chicken (grilled, soup, light curry), turkey, eggs (boiled/soft omelette), freshwater fish (rohu, catla), clear bone broth. Limit - prawns, fatty fish (salmon, tuna), mutton (once in 2-3 weeks). Avoid - beef, deep-fried meat, creamy gravies, sausages, nuggets, salami. Daily plan: morning - warm water with ginger+lemon + soaked almonds + optional boiled egg; breakfast - vegetable omelette (little oil) OR clear chicken soup + toast + ginger/cumin tea; lunch - 1-2 soft rotis + grilled/lightly spiced chicken/fish + vegetables (cabbage, beans, carrot, bottle gourd) + buttermilk; evening - roasted chana + herbal tea (ginger-tulsi); dinner - clear chicken soup/grilled fish + steamed veggies (avoid rice at night if Kapha dominant); bedtime - warm turmeric water or nutmeg milk. Best spices: ginger, cumin, turmeric, small black pepper, hing. Avoid excess: creamy masalas, too much ghee/butter, very spicy chili sauces. Seasonal tips: winter - add chicken stew, bone broth, use little sesame oil/ghee; spring - prefer grilled/roasted meats, avoid dairy+meat together. Health conditions: weight gain/thyroid/slow digestion - keep dinners very light; joint pain/dryness - prefer soups & stews; cold/cough/sinus - avoid curd, cheese, cold drinks with meat.";
    } else if (dualKey === "pitta-kapha" || dualKey === "kapha-pitta") {
      specificDiet = "🌸 Pitta-Kapha Daily Diet Plan: Best foods are warm & freshly cooked, light not oily, with cooling + digestive spices and bitter, astringent & mildly sweet tastes. Avoid very spicy, oily, fried foods, excess sweets, dairy, sugar, cold drinks, ice cream, too much salt, sour & fermented foods. Daily schedule: Early morning - warm water with coriander + fennel seeds soaked overnight OR lemon water (not hot). Breakfast (8-9 AM) - vegetable poha, upma with vegetables, moong dal chilla, or stewed apple/pear. Avoid: paratha, butter, cheese, fried snacks. Mid-morning - apple/pear/pomegranate/sweet grapes or coconut water (room temp). Lunch - 1 small chapati/rice + moong/masoor dal + cooked vegetables (bottle gourd, pumpkin, carrot, zucchini, spinach, beans) + ½ tsp ghee. Spices: cumin, coriander, fennel, turmeric, little ginger. Avoid: excess chilli, garlic, vinegar. Evening snack - herbal tea (fennel-coriander-rose) or roasted makhana. Avoid: biscuits, coffee, cold drinks. Dinner (by 7-7:30 PM) - vegetable soup, steamed veggies + dal, or light khichdi. Before bed - warm water or haldi water. Avoid milk at night if heaviness, acidity, or weight gain. Best foods: barley, oats, quinoa, bottle gourd, pumpkin, carrot, zucchini, spinach, beans, bitter gourd, apple, pear, pomegranate, grapes, berries, moong dal, chickpeas. Use spices: fennel, coriander, cumin, turmeric, cardamom, mint. Avoid: red chilli, pickles, excess salt, fried snacks, cheese, cream, cold curd, bakery items, chocolates, alcohol, excess tea/coffee. Lifestyle: wake before 6 AM, daily brisk walk/yoga, avoid daytime sleep, eat at regular times, manage stress with meditation. 🍗 Non-Veg for Pitta-Kapha: Best choices - chicken (grilled, boiled, light curry), turkey, eggs (boiled/soft omelette), freshwater fish (rohu, catla), clear bone broth. Limit - prawns, fatty fish (salmon, tuna), mutton (rare - once in 2-3 weeks). Avoid - beef, deep-fried meat, creamy gravies, processed meats. Daily plan: morning - warm water with lemon + soaked almonds + optional boiled egg; breakfast - vegetable omelette (little oil) OR clear chicken soup + toast; lunch - 1-2 soft rotis + grilled/lightly spiced chicken/fish + vegetables + buttermilk; evening - roasted chana + ginger tea; dinner - clear chicken soup/grilled fish + steamed veggies (avoid rice at night); bedtime - warm turmeric water or fennel tea. Best spices: cumin, coriander, fennel, turmeric, small ginger. Avoid excess: red chili, black pepper, garam masala, vinegar. Seasonal tips: summer - prefer fish, eggs, chicken soup; spring - prefer grilled/roasted meats, avoid dairy+meat. Health conditions: acidity - avoid spicy curries; weight gain/thyroid - eat lighter dinners; high cholesterol - choose grilled/boiled meats only.";
    }
    
    state.dosha = {
      kind: "dual",
      title: `${dom.primary.toUpperCase()} + ${dom.secondary.toUpperCase()}`,
      about: doshaProfiles.dual.about,
      diet: specificDiet,
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
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b332c1ca?w=100&h=100&fit=crop&crop=face&auto=format&dpr=2",
  },
  {
    name: "Rahul Verma",
    age: 28,
    concern: "Acidity & Stress",
    rating: 5,
    text: "My acidity issues and work stress were affecting my daily life. The Ayurvedic approach not only fixed my digestion but also helped me manage stress better. I feel more balanced and focused.",
    result: "No acidity, better stress management, improved sleep",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&dpr=2",
  },
  {
    name: "Anjali Patel",
    age: 45,
    concern: "Thyroid & Fatigue",
    rating: 5,
    text: "Despite medication, I always felt tired. Dr. Shreya's dietary recommendations complemented my treatment and gave me my energy back. I can now keep up with my kids and work.",
    result: "Increased energy levels, better thyroid function, active lifestyle",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&dpr=2",
  },
  {
    name: "Karan Malhotra",
    age: 35,
    concern: "Digestive Issues & Bloating",
    rating: 5,
    text: "I had tried everything for my bloating and digestive issues. The simple dietary changes and timing suggestions made a huge difference. I feel lighter and more comfortable after meals.",
    result: "No bloating, regular digestion, improved gut health",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&dpr=2",
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

  // Initialize height placeholder
  const heightUnit = el("heightUnit");
  const heightValue = el("heightValue");
  if (heightUnit && heightValue) {
    const unit = heightUnit.value;
    switch(unit) {
      case "cm":
        heightValue.placeholder = "e.g. 170";
        break;
      case "inches":
        heightValue.placeholder = "e.g. 67";
        break;
      case "feet":
        heightValue.placeholder = "e.g. 5.6";
        break;
    }
  }

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
    const heightUnit = el("heightUnit").value;
    const heightValue = parseNum(el("heightValue").value);
    const weightKg = parseNum(el("weightKg").value);

    if (!heightValue || !weightKg || heightValue <= 0 || weightKg <= 0) return;

    // Convert height to cm based on unit
    let heightCm;
    if (heightUnit === "cm") {
      heightCm = heightValue;
    } else if (heightUnit === "inches") {
      heightCm = heightValue * 2.54; // 1 inch = 2.54 cm
    } else if (heightUnit === "feet") {
      heightCm = heightValue * 30.48; // 1 foot = 12 inches = 30.48 cm
    }

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const value = round1(bmi);
    const category = bmiCategory(value);

    state.bmi = { value, category, heightCm, weightKg, heightUnit };
    saveState();
    setHero();
    renderBmi();
    renderPlan();
  });

  el("bmiReset").addEventListener("click", () => {
    clearState("bmi");
    el("heightValue").value = "";
    el("heightUnit").value = "cm";
    el("weightKg").value = "";
    setHero();
    renderBmi();
    renderDosha();
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

  el("dietType").addEventListener("change", () => {
    renderPlan();
  });

  // Update placeholder based on height unit selection
  el("heightUnit").addEventListener("change", () => {
    const heightValue = el("heightValue");
    const unit = el("heightUnit").value;
    
    switch(unit) {
      case "cm":
        heightValue.placeholder = "e.g. 170";
        break;
      case "inches":
        heightValue.placeholder = "e.g. 67";
        break;
      case "feet":
        heightValue.placeholder = "e.g. 5.6";
        break;
    }
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
