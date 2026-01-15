// Recipe data with YouTube videos and detailed content
const recipes = [
  {
    id: 1,
    title: "CCF Tea Recipe (Cumin–Coriander–Fennel Tea)",
    dosha: ["vata", "pitta", "kapha"],
    category: "beverage",
    videoId: "4gY9-758d1I", // YouTube Shorts video ID
    description: "A classic Ayurvedic digestive tonic that gently balances Vata, Pitta, and Kapha. This tridoshic tea kindles Agni without overheating and reduces Ama (toxins).",
    prepTime: "2 mins",
    cookTime: "5-7 mins",
    servings: "1-2 cups",
    difficulty: "Very Easy",
    ingredients: [
      "Cumin seeds (Jeera) – 1 teaspoon 🌰",
      "Coriander seeds (Dhania) – 1 teaspoon 🌿",
      "Fennel seeds (Saunf) – 1 teaspoon 🌾",
      "Water – 2 cups 💧",
      "Optional: Fresh ginger – ½ inch, crushed 🫚 (for bloating, cold digestion)",
      "Optional: Rock sugar / jaggery – a pinch 🍬 (if needed)",
      "Optional: Lemon juice – a few drops 🍋 (best for Kapha types)"
    ],
    instructions: [
      "Method 1: Fresh Decoction (Best for healing)",
      "Lightly crush the cumin 🌰, coriander 🌿, and fennel 🌾 seeds.",
      "Add them to 2 cups of water 💧 in a pan.",
      "Bring to a boil, then simmer for 5–7 minutes.",
      "Turn off the heat, cover, and let it steep for 2 minutes.",
      "Strain and sip warm ☕.",
      "",
      "Method 2: Daily Tea Blend (For convenience)",
      "Mix equal parts of cumin 🌰, coriander 🌿, and fennel 🌾 seeds.",
      "Store in an airtight jar.",
      "Use 1 teaspoon of this mix per cup of water 💧 whenever needed."
    ],
    benefits: [
      "Kindles Agni 🔥 without overheating",
      "Reduces Ama 🧪 (toxins) in the body",
      "Improves nutrient absorption",
      "Supports liver & kidney detoxification",
      "Reduces gas, bloating, and indigestion",
      "Soothes acidity and heartburn",
      "Helps in weight balance for Kapha types",
      "Supports hormonal balance 🌸",
      "Gentle seasonal detox 🍃",
      "Calms nervous digestion for Vata"
    ],
    tips: [
      "🌅 Best Time to Drink: Morning on empty stomach, after meals, or between meals if bloated",
      "👉 You can drink 2–3 cups per day safely",
      "✔ For Vata 🌬️: Take warm ☕ with ginger 🫚 to reduce gas & bloating",
      "✔ For Pitta 🔥: Take lukewarm, no ginger - coriander 🌿 & fennel 🌾 provide cooling effect",
      "✔ For Kapha 🌍: Take hot 🔥 with ginger 🫚 or black pepper 🌶️ to reduce heaviness",
      "Store the seed blend in an airtight container for daily use",
      "For therapeutic uses: IBS discomfort, acid reflux, water retention, post-meal heaviness"
    ]
  },
  {
    id: 2,
    title: "Vegetable Sooji Uttapam Recipe",
    dosha: ["vata", "pitta"],
    category: "breakfast",
    videoId: "H-Gx0z-5uhM", // YouTube Shorts video ID
    description: "Light, fluffy, and easy to digest pancakes made from semolina with fresh vegetables. Tridoshic-friendly when mildly spiced and perfect for breakfast or light dinner.",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "2-3",
    difficulty: "Easy",
    ingredients: [
      "For the batter:",
      "Sooji / Rava – 1 cup 🌾",
      "Curd (yogurt) – ½ cup 🥣",
      "Water – ½ cup (adjust as needed) 💧",
      "Salt – to taste 🧂",
      "Ginger paste – 1 tsp 🫚",
      "Green chilli (optional) – 1 small, finely chopped 🌶️",
      "Fruit salt / Eno – ½ tsp (optional, for softness) ✨",
      "",
      "For the vegetable topping:",
      "Tomato – 1 medium, finely chopped 🍅",
      "Onion – 1 medium, finely chopped 🧅",
      "Capsicum – 1 small, finely chopped 🫑",
      "Carrot – 1 small, finely grated 🥕",
      "Curry leaves – 8–10, finely chopped 🌿",
      "Mustard seeds – ½ tsp ⚫",
      "Oil or ghee – 2–3 tbsp 🫒"
    ],
    instructions: [
      "Prepare the batter:",
      "In a bowl, mix sooji 🌾, curd 🥣, water 💧, salt 🧂, ginger 🫚 and green chilli 🌶️.",
      "Whisk well to make a smooth, pourable batter.",
      "Rest for 10–15 minutes so the sooji softens.",
      "",
      "Prepare the topping:",
      "In another bowl, mix chopped tomato 🍅, onion 🧅, capsicum 🫑, carrot 🥕 and curry leaves 🌿. Keep aside.",
      "",
      "Heat the pan:",
      "Heat a non-stick or cast-iron tawa on medium flame.",
      "Lightly grease with oil or ghee 🫒.",
      "",
      "Make the uttapam:",
      "Add fruit salt/eno ✨ to the batter and mix gently.",
      "Pour a ladleful of batter on the hot tawa and spread lightly (don't make it too thin).",
      "",
      "Add toppings:",
      "Sprinkle the mixed vegetables generously on top 🥕🫑🍅🧅🌿.",
      "Press them gently so they stick to the batter.",
      "",
      "Cook:",
      "Drizzle a little oil/ghee around the edges.",
      "Cook on medium flame until the base turns golden brown 🔥.",
      "Flip carefully and cook the vegetable side for 1–2 minutes.",
      "",
      "Serve hot:",
      "Serve with coconut chutney 🥥 or mint chutney 🌱 and enjoy 😋."
    ],
    benefits: [
      "Easy to digest when eaten warm and fresh 🍽️",
      "Tridoshic-friendly when mildly spiced",
      "Rich in fiber, vitamins & prana (life energy) from fresh vegetables 🥕🫑🍅",
      "Great for breakfast or light dinner 🌅🌙",
      "Provides sustained energy without heaviness",
      "Supports digestive fire (Agni) when eaten warm",
      "Nourishing yet light on the stomach"
    ],
    tips: [
      "🔸 Dosha-wise benefits:",
      "✔️ Vata Dosha: Sooji 🌾 and ghee 🫒 provide grounding and warmth. Ginger 🫚 and cooked vegetables help digestion and reduce bloating. Very good for Vata when eaten warm.",
      "✔️ Pitta Dosha: Tomato 🍅 and carrot 🥕 are cooling and nourishing. Avoid excess green chilli 🌶️ to keep Pitta balanced. Use ghee instead of oil for better cooling effect.",
      "✔️ Kapha Dosha: Light batter with sooji and veggies helps keep Kapha light. Ginger 🫚, curry leaves 🌿 and mustard seeds ⚫ improve metabolism. Best when cooked with minimal oil.",
      "",
      "🌟 Overall Ayurvedic Value:",
      "Adjust water based on sooji quality for perfect consistency",
      "Add vegetables like grated beetroot for extra nutrition and color",
      "Serve immediately for best taste and digestive benefits",
      "Can be made with buttermilk instead of curd for lighter version",
      "Perfect for all seasons when vegetables are fresh and seasonal"
    ]
  },
  {
    id: 3,
    title: "Moringa Soup Recipe (Drumstick Soup)",
    dosha: ["kapha", "vata"],
    category: "soup",
    videoId: "4Yjzl5MxYyw", // YouTube Shorts video ID
    description: "Power-packed healing soup made with drumsticks (moringa pods). Strengthens immunity, improves digestion, and balances Vata & Kapha doshas. Perfect for detox and light dinner.",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "3-4",
    difficulty: "Easy",
    ingredients: [
      "Drumsticks (Moringa pods) – 2 medium, cut into 2-inch pieces 🥒",
      "Tomato – 1 medium, chopped 🍅",
      "Onion – 1 small, chopped 🧅",
      "Ginger – 1 tsp, grated 🫚",
      "Garlic – 2–3 cloves, crushed 🧄",
      "Cumin seeds – ½ tsp 🌾",
      "Black pepper – ¼ tsp (or to taste) ⚫",
      "Turmeric powder – ¼ tsp ✨",
      "Salt – to taste 🧂",
      "Ghee or sesame oil – 1 tsp 🧈",
      "Water – 3 cups 💧",
      "Fresh coriander – for garnish 🌿"
    ],
    instructions: [
      "Heat ghee/oil in a pan. Add cumin seeds and let them crackle 🌾",
      "Add ginger and garlic, sauté for a few seconds till aromatic 🫚🧄",
      "Add onion and cook until soft and translucent 🧅",
      "Add tomato and cook till mushy 🍅",
      "Add drumstick pieces, turmeric, pepper, and salt 🥒✨",
      "Pour in water, cover, and simmer for 12–15 minutes until drumsticks are tender 🍲",
      "Slightly mash the drumsticks to release flavor, or blend the soup if you prefer a smooth texture 🔄",
      "Garnish with fresh coriander and serve warm 🌿"
    ],
    benefits: [
      "Strengthens immunity 💪",
      "Improves digestion 🔥",
      "Balances Vata & Kapha dosha",
      "Enhances Agni (digestive fire) 🔥",
      "Reduces bloating and heaviness",
      "Helps in Ama (toxins) removal",
      "Improves nutrient absorption",
      "Nourishes tissues (Dhatus)",
      "Supports joint health 🦴",
      "Power-packed healing food in Ayurveda 🌿"
    ],
    tips: [
      "🌼 Best for:",
      "Weak immunity and fatigue",
      "Anemia and low energy levels",
      "Cold, cough & seasonal changes",
      "Detox and light dinner option",
      "Joint pain and stiffness",
      "",
      "🌸 Ayurvedic Perspective:",
      "✔️ Drumsticks (Moringa): Rich in vitamins, minerals, and antioxidants. Strengthens immunity and improves digestion.",
      "✔️ Ginger & Garlic: Enhance Agni (digestive fire) 🔥, reduce bloating and heaviness.",
      "✔️ Black Pepper & Cumin: Help in Ama (toxins) removal, improve nutrient absorption.",
      "✔️ Ghee / Sesame oil: Nourishes tissues (Dhatus), supports joint health 🦴.",
      "",
      "🔥 Cooking Tips:",
      "Don't overcook drumsticks - they should be tender but not mushy",
      "For extra nutrition, add moringa leaves in last 2 minutes",
      "For smoother texture, blend half the soup and keep some pieces whole",
      "Serve warm for best digestive benefits",
      "Can be stored for 1 day in refrigerator"
    ]
  },
  {
    id: 4,
    title: "Mango Smoothie Recipe (Ayurvedic Version)",
    dosha: ["vata", "pitta"],
    category: "beverage",
    videoId: "-X89RRYyqd4", // YouTube Shorts video ID
    description: "Nourishing, cooling, and rejuvenating smoothie made with mango and coconut water. Builds Ojas (vitality & immunity) and provides natural energy boost.",
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: "1",
    difficulty: "Very Easy",
    ingredients: [
      "Ripe mango – 1 medium, peeled & chopped 🥭",
      "Coconut water – 1 cup 🥥💧",
      "Jaggery – 1–2 tsp (grated, as per sweetness) 🍯",
      "Cashews – 5–6, soaked for 15 minutes 🌰",
      "Cardamom powder – a pinch (optional) 🌸",
      "Ice cubes – 2–3 (optional) ❄️"
    ],
    instructions: [
      "Add mango pieces, coconut water, soaked cashews, and jaggery to a blender 🥭🥥🌰",
      "Blend until smooth and creamy 🔄",
      "Add a pinch of cardamom for extra aroma (optional) 🌸",
      "If you like it chilled, add ice cubes and blend again ❄️",
      "Pour into a glass and enjoy fresh and cool 😋🥤"
    ],
    benefits: [
      "Sweet (Madhura rasa) and cooling after digestion",
      "Boosts energy ⚡",
      "Builds Ojas (vitality & immunity) 💛",
      "Good for Vata & Pitta, in moderation for Kapha",
      "Naturally cooling 🌊",
      "Hydrates the body and pacifies Pitta dosha",
      "Improves digestion when used in small amounts",
      "Rich in minerals like iron 🩸",
      "Supports healthy metabolism",
      "Provide healthy fats & strength 💪",
      "Nourish tissues (Dhatus)",
      "Support weight gain in undernourished people"
    ],
    tips: [
      "🌼 Best for:",
      "Summer refreshment ☀️",
      "Fatigue & weakness",
      "Healthy weight gain",
      "Post-workout energy boost ⚡",
      "",
      "🌸 Ayurvedic Ingredient Benefits:",
      "🥭 Mango: Sweet and cooling, builds Ojas, good for Vata & Pitta",
      "🥥 Coconut Water: Naturally cooling 🌊, hydrates, pacifies Pitta",
      "🍯 Jaggery: Improves digestion, rich in minerals, supports metabolism",
      "🌰 Cashews: Provide healthy fats, nourish tissues, support weight gain",
      "",
      "💡 Ayurvedic Tip:",
      "Drink this smoothie fresh and preferably in the morning or before noon for best digestion 🕘",
      "Use ripe, sweet mangoes for best natural sweetness",
      "For Kapha types, reduce cashews and skip jaggery",
      "For extra nutrition, add a pinch of saffron or turmeric",
      "Can be made with frozen mango for thicker consistency",
      "Avoid drinking in the evening or at night"
    ]
  },
  {
    id: 5,
    title: "Healthy Brownie Recipe (Ayurvedic Version)",
    dosha: ["vata", "pitta"],
    category: "dessert",
    videoId: "9fbVDeDQgH8", // YouTube Shorts video ID
    description: "Delicious, guilt-free brownies with an Ayurvedic touch. Nourishing dessert made with whole wheat flour, dates, and ghee that builds Ojas and satisfies sweet cravings healthily.",
    prepTime: "15 mins",
    cookTime: "18-22 mins",
    servings: "9-12",
    difficulty: "Medium",
    ingredients: [
      "Whole wheat flour – 1 cup 🌾",
      "Dates – 8–10, soaked & mashed into paste 🌴",
      "Milk – ½ cup 🥛",
      "Walnuts – ¼ cup, chopped 🌰",
      "Ghee or cold-pressed oil – 3 tbsp 🧈",
      "Cocoa powder – 2 tbsp 🍫",
      "Baking powder – 1 tsp ✨",
      "Vanilla essence – ½ tsp (optional) 🌸",
      "A pinch of salt – 🧂"
    ],
    instructions: [
      "Preheat oven to 180°C (350°F) 🔥 and grease a small baking pan.",
      "In a bowl, whisk date paste, milk, and ghee/oil until smooth 🌴🥛🧈",
      "Sift in wheat flour, cocoa powder, baking powder, and salt 🌾🍫✨",
      "Mix gently to form a thick batter. Do not overmix 🥣",
      "Fold in chopped walnuts 🌰",
      "Add vanilla essence if using 🌸",
      "Pour batter into the pan and level the top 🔄",
      "Bake for 18–22 minutes until a toothpick comes out mostly clean 🍰",
      "Let cool, cut into squares, and enjoy 😋",
      "(No oven? Steam in a cooker for 25–30 minutes on low heat — works great!)"
    ],
    benefits: [
      "Provides sustained energy ⚡",
      "Grounds Vata dosha",
      "Better than refined flour for digestion",
      "Natural sweetener 💛",
      "Builds Ojas (vitality & immunity)",
      "Good for weakness, fatigue & anemia",
      "Cooling and nourishing",
      "Supports tissue building (Dhatus)",
      "Calms Pitta",
      "Strengthen brain & nerves 🧠",
      "Provide healthy fats",
      "Support Vata balance",
      "Enhances absorption of nutrients",
      "Lubricates joints & gut",
      "Supports overall vitality",
      "Uplifts mood 😊",
      "Rich in antioxidants",
      "Adds gentle stimulation"
    ],
    tips: [
      "🌼 Best for:",
      "Healthy dessert cravings 🍰",
      "Growing children",
      "People with weakness or fatigue",
      "Post-workout energy boost ⚡",
      "",
      "🌸 Ayurvedic Ingredient Benefits:",
      "🌾 Whole Wheat Flour: Provides sustained energy, grounds Vata, better than refined flour",
      "🌴 Dates: Natural sweetener, builds Ojas, good for weakness & fatigue",
      "🥛 Milk: Cooling and nourishing, supports tissue building, calms Pitta",
      "🌰 Walnuts: Strengthen brain & nerves, provide healthy fats, support Vata",
      "🧈 Ghee/Oil: Enhances nutrient absorption, lubricates joints & gut",
      "🍫 Cocoa: Uplifts mood, rich in antioxidants, adds gentle stimulation",
      "",
      "⚠️ Ayurvedic Tips:",
      "Enjoy 1 small piece at a time 🧩",
      "Best time: Mid-morning or afternoon 🕙",
      "Avoid late night desserts 🌙",
      "Pair with warm milk for better digestion 🥛",
      "For Kapha types, reduce walnuts and enjoy smaller portions",
      "Store in airtight container for 3-4 days",
      "Use very ripe dates for natural sweetness and better binding"
    ]
  },
  {
    id: 6,
    title: "Herbal Tea Recipe (Amla–Ginger–Cumin–Cinnamon)",
    dosha: ["vata", "pitta", "kapha"],
    category: "beverage",
    videoId: "oKJgKw0kTfw", // YouTube Shorts video ID
    description: "Powerful daily tonic that balances doshas and strengthens immunity. This healing blend combines amla, ginger, cumin, and cinnamon for optimal wellness.",
    prepTime: "2 mins",
    cookTime: "7-10 mins",
    servings: "1-2",
    difficulty: "Very Easy",
    ingredients: [
      "Amla (Indian gooseberry) – 1 tbsp fresh pulp or 1 tsp amla powder 🍈",
      "Ginger – 1 tsp grated 🫚",
      "Cumin seeds – ½ tsp 🌾",
      "Cinnamon stick – ½ inch piece or a pinch powder 🌿",
      "Water – 2 cups 💧",
      "Honey – 1 tsp (add after cooling slightly) 🍯"
    ],
    instructions: [
      "In a saucepan, add water, cumin seeds, ginger, and cinnamon 💧🌾🫚🌿",
      "Bring to a boil, then simmer for 7–10 minutes 🔥",
      "Turn off the heat and add amla pulp/powder 🍈",
      "Let the tea cool for 1–2 minutes (warm, not hot) 🌡️",
      "Strain into a cup ☕",
      "Add honey and stir well 🍯",
      "Sip slowly and enjoy the healing warmth 😌"
    ],
    benefits: [
      "Rich in Vitamin C (20x more than oranges)",
      "Builds Ojas (vitality & immunity) 💛",
      "Pacifies Pitta dosha",
      "Supports healthy skin & eyes ✨",
      "Boosts Agni (digestive fire) 🔥",
      "Reduces bloating & nausea",
      "Balances Vata & Kapha",
      "Improves digestion",
      "Helps remove Ama (toxins)",
      "Reduces heaviness after meals",
      "Warming spice 🌡️",
      "Improves circulation",
      "Supports blood sugar balance",
      "Acts as a Yogavahi (enhances absorption of herbs)",
      "Clears mucus & supports lungs 🫁"
    ],
    tips: [
      "🌼 Best for:",
      "Immunity boost 💪",
      "Indigestion & bloating",
      "Cold, cough & sore throat 🤧",
      "Daily detox support 🌱",
      "",
      "🌸 Ayurvedic Ingredient Benefits:",
      "🍈 Amla: Rich in Vitamin C, builds Ojas, pacifies Pitta, supports skin & eyes",
      "🫚 Ginger: Boosts Agni, reduces bloating, balances Vata & Kapha",
      "🌾 Cumin: Improves digestion, helps remove Ama, reduces heaviness",
      "🌿 Cinnamon: Warming spice, improves circulation, supports blood sugar",
      "🍯 Honey: Acts as Yogavahi, clears mucus, supports lungs",
      "",
      "⚠️ Ayurvedic Tips:",
      "Best time to drink: Morning on empty stomach or evening ☀️🌙",
      "Avoid adding honey to very hot tea ❌🔥",
      "Drink 1 cup daily for gentle, long-term benefits ☕",
      "For Pitta types, reduce ginger and add more cooling herbs",
      "For Kapha types, increase ginger and cinnamon for warmth",
      "Use fresh amla pulp when available for maximum benefits"
    ]
  },
  {
    id: 2,
    title: "CCF Tea Recipe (Cumin–Coriander–Fennel Tea)",
    dosha: ["vata", "pitta", "kapha"],
    category: "beverage",
    videoId: "4gY9-758d1I", // YouTube Shorts video ID
    description: "A classic Ayurvedic digestive tonic that gently balances Vata, Pitta, and Kapha. This tridoshic tea kindles Agni without overheating and reduces Ama (toxins).",
    prepTime: "2 mins",
    cookTime: "5-7 mins",
    servings: "1-2 cups",
    difficulty: "Very Easy",
    ingredients: [
      "Cumin seeds (Jeera) – 1 teaspoon 🌰",
      "Coriander seeds (Dhania) – 1 teaspoon 🌿",
      "Fennel seeds (Saunf) – 1 teaspoon 🌾",
      "Water – 2 cups 💧",
      "Optional: Fresh ginger – ½ inch, crushed 🫚 (for bloating, cold digestion)",
      "Optional: Rock sugar / jaggery – a pinch 🍬 (if needed)",
      "Optional: Lemon juice – a few drops 🍋 (best for Kapha types)"
    ],
    instructions: [
      "Method 1: Fresh Decoction (Best for healing)",
      "Lightly crush the cumin 🌰, coriander 🌿, and fennel 🌾 seeds.",
      "Add them to 2 cups of water 💧 in a pan.",
      "Bring to a boil, then simmer for 5–7 minutes.",
      "Turn off the heat, cover, and let it steep for 2 minutes.",
      "Strain and sip warm ☕.",
      "",
      "Method 2: Daily Tea Blend (For convenience)",
      "Mix equal parts of cumin 🌰, coriander 🌿, and fennel 🌾 seeds.",
      "Store in an airtight jar.",
      "Use 1 teaspoon of this mix per cup of water 💧 whenever needed."
    ],
    benefits: [
      "Kindles Agni 🔥 without overheating",
      "Reduces Ama 🧪 (toxins) in the body",
      "Improves nutrient absorption",
      "Supports liver & kidney detoxification",
      "Reduces gas, bloating, and indigestion",
      "Soothes acidity and heartburn",
      "Helps in weight balance for Kapha types",
      "Supports hormonal balance 🌸",
      "Gentle seasonal detox 🍃",
      "Calms nervous digestion for Vata"
    ],
    tips: [
      "🌅 Best Time to Drink: Morning on empty stomach, after meals, or between meals if bloated",
      "👉 You can drink 2–3 cups per day safely",
      "✔ For Vata 🌬️: Take warm ☕ with ginger 🫚 to reduce gas & bloating",
      "✔ For Pitta 🔥: Take lukewarm, no ginger - coriander 🌿 & fennel 🌾 provide cooling effect",
      "✔ For Kapha 🌍: Take hot 🔥 with ginger 🫚 or black pepper 🌶️ to reduce heaviness",
      "Store the seed blend in an airtight container for daily use",
      "For therapeutic uses: IBS discomfort, acid reflux, water retention, post-meal heaviness"
    ]
  },
  {
    id: 3,
    title: "Spiced Vegetable Soup",
    dosha: ["kapha", "vata"],
    category: "soup",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    description: "Light, warming, and packed with vegetables. Perfect for Kapha balancing and Vata nourishment.",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: "3-4",
    difficulty: "Easy",
    ingredients: [
      "1 cup mixed vegetables (carrots, beans, spinach)",
      "1 onion, chopped",
      "2 cloves garlic, minced",
      "1 inch ginger, grated",
      "4 cups vegetable stock",
      "½ tsp turmeric powder",
      "½ tsp cumin powder",
      "¼ tsp black pepper",
      "1 tsp ghee or coconut oil",
      "Salt to taste",
      "Fresh lemon juice for serving"
    ],
    instructions: [
      "Heat ghee in a large pot. Add onions and sauté until translucent.",
      "Add garlic and ginger. Sauté for 1 minute until fragrant.",
      "Add chopped vegetables and stir for 2-3 minutes.",
      "Add turmeric, cumin, and black pepper. Mix well.",
      "Pour vegetable stock and bring to boil.",
      "Reduce heat, cover, and simmer for 15 minutes.",
      "Season with salt. Add spinach in last 2 minutes.",
      "Serve hot with lemon juice squeezed on top."
    ],
    benefits: [
      "Light on digestion yet filling",
      "Rich in vitamins and minerals",
      "Balances both Kapha and Vata",
      "Boosts immunity with antioxidants",
      "Hydrating and nourishing"
    ],
    tips: [
      "Use seasonal vegetables for best taste and nutrition.",
      "Make extra and store for 2 days in refrigerator.",
      "Add millets or noodles for a complete meal."
    ]
  },
  {
    id: 4,
    title: "Ginger-Tulsi Herbal Tea",
    dosha: ["kapha", "vata"],
    category: "beverage",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    description: "Warming and stimulating tea that helps with congestion, digestion, and energy.",
    prepTime: "3 mins",
    cookTime: "7 mins",
    servings: "1-2",
    difficulty: "Very Easy",
    ingredients: [
      "1 inch fresh ginger, crushed",
      "8-10 fresh tulsi (holy basil) leaves",
      "2 cups water",
      "½ tsp lemon juice",
      "Optional: 1 tsp honey (use sparingly)",
      "Optional: Pinch of black pepper"
    ],
    instructions: [
      "Crush ginger lightly to release juices.",
      "Bring water to boil in a small saucepan.",
      "Add ginger and tulsi leaves. Reduce heat to low.",
      "Simmer for 5-7 minutes until water becomes fragrant.",
      "Strain into cups. Add lemon juice.",
      "Add honey if desired and stir well.",
      "Serve hot and sip slowly."
    ],
    benefits: [
      "Clears respiratory congestion",
      "Improves digestion and metabolism",
      "Reduces Kapha heaviness",
      "Calms Vata anxiety and stress",
      "Natural immunity booster"
    ],
    tips: [
      "Drink first thing in morning for best results.",
      "Avoid adding milk as it reduces benefits.",
      "Can be consumed 2-3 times daily during cold/cough."
    ]
  },
  {
    id: 10,
    title: "Herbal Tea Recipe (Amla–Ginger–Cumin–Cinnamon)",
    dosha: ["vata", "pitta", "kapha"],
    category: "beverage",
    videoId: "oKJgKw0kTfw", // YouTube Shorts video ID
    description: "Powerful daily tonic that balances doshas and strengthens immunity. This healing blend combines amla, ginger, cumin, and cinnamon for optimal wellness.",
    prepTime: "2 mins",
    cookTime: "7-10 mins",
    servings: "1-2",
    difficulty: "Very Easy",
    ingredients: [
      "Amla (Indian gooseberry) – 1 tbsp fresh pulp or 1 tsp amla powder 🍈",
      "Ginger – 1 tsp grated 🫚",
      "Cumin seeds – ½ tsp 🌾",
      "Cinnamon stick – ½ inch piece or a pinch powder 🌿",
      "Water – 2 cups 💧",
      "Honey – 1 tsp (add after cooling slightly) 🍯"
    ],
    instructions: [
      "In a saucepan, add water, cumin seeds, ginger, and cinnamon 💧🌾🫚🌿",
      "Bring to a boil, then simmer for 7–10 minutes 🔥",
      "Turn off the heat and add amla pulp/powder 🍈",
      "Let the tea cool for 1–2 minutes (warm, not hot) 🌡️",
      "Strain into a cup ☕",
      "Add honey and stir well 🍯",
      "Sip slowly and enjoy the healing warmth 😌"
    ],
    benefits: [
      "Rich in Vitamin C (20x more than oranges)",
      "Builds Ojas (vitality & immunity) 💛",
      "Pacifies Pitta dosha",
      "Supports healthy skin & eyes ✨",
      "Boosts Agni (digestive fire) 🔥",
      "Reduces bloating & nausea",
      "Balances Vata & Kapha",
      "Improves digestion",
      "Helps remove Ama (toxins)",
      "Reduces heaviness after meals",
      "Warming spice 🌡️",
      "Improves circulation",
      "Supports blood sugar balance",
      "Acts as a Yogavahi (enhances absorption of herbs)",
      "Clears mucus & supports lungs 🫁"
    ],
    tips: [
      "🌼 Best for:",
      "Immunity boost 💪",
      "Indigestion & bloating",
      "Cold, cough & sore throat 🤧",
      "Daily detox support 🌱",
      "",
      "🌸 Ayurvedic Ingredient Benefits:",
      "🍈 Amla: Rich in Vitamin C, builds Ojas, pacifies Pitta, supports skin & eyes",
      "🫚 Ginger: Boosts Agni, reduces bloating, balances Vata & Kapha",
      "🌾 Cumin: Improves digestion, helps remove Ama, reduces heaviness",
      "🌿 Cinnamon: Warming spice, improves circulation, supports blood sugar",
      "🍯 Honey: Acts as Yogavahi, clears mucus, supports lungs",
      "",
      "⚠️ Ayurvedic Tips:",
      "Best time to drink: Morning on empty stomach or evening ☀️🌙",
      "Avoid adding honey to very hot tea ❌🔥",
      "Drink 1 cup daily for gentle, long-term benefits ☕",
      "For Pitta types, reduce ginger and add more cooling herbs",
      "For Kapha types, increase ginger and cinnamon for warmth",
      "Use fresh amla pulp when available for maximum benefits"
    ]
  },
  {
    id: 9,
    title: "Healthy Brownie Recipe (Ayurvedic Version)",
    dosha: ["vata", "pitta"],
    category: "dessert",
    videoId: "9fbVDeDQgH8", // YouTube Shorts video ID
    description: "Delicious, guilt-free brownies with an Ayurvedic touch. Nourishing dessert made with whole wheat flour, dates, and ghee that builds Ojas and satisfies sweet cravings healthily.",
    prepTime: "15 mins",
    cookTime: "18-22 mins",
    servings: "9-12",
    difficulty: "Medium",
    ingredients: [
      "Whole wheat flour – 1 cup ",
      "Dates – 8–10, soaked & mashed into paste ",
      "Milk – ½ cup ",
      "Walnuts – ¼ cup, chopped ",
      "Ghee or cold-pressed oil – 3 tbsp ",
      "Cocoa powder – 2 tbsp ",
      "Baking powder – 1 tsp ",
      "Vanilla essence – ½ tsp (optional) ",
      "A pinch of salt – "
    ],
    instructions: [
      "Preheat oven to 180°C (350°F)  and grease a small baking pan.",
      "In a bowl, whisk date paste, milk, and ghee/oil until smooth ",
      "Sift in wheat flour, cocoa powder, baking powder, and salt ",
      "Mix gently to form a thick batter. Do not overmix ",
      "Fold in chopped walnuts ",
      "Add vanilla essence if using ",
      "Pour batter into the pan and level the top ",
      "Bake for 18–22 minutes until a toothpick comes out mostly clean ",
      "Let cool, cut into squares, and enjoy ",
      "(No oven? Steam in a cooker for 25–30 minutes on low heat — works great!)"
    ],
    benefits: [
      "Provides sustained energy ",
      "Grounds Vata dosha",
      "Better than refined flour for digestion",
      "Natural sweetener ",
      "Builds Ojas (vitality & immunity)",
      "Good for weakness, fatigue & anemia",
      "Cooling and nourishing",
      "Supports tissue building (Dhatus)",
      "Calms Pitta",
      "Strengthen brain & nerves ",
      "Provide healthy fats",
      "Support Vata balance",
      "Enhances absorption of nutrients",
      "Lubricates joints & gut",
      "Supports overall vitality",
      "Uplifts mood ",
      "Rich in antioxidants",
      "Adds gentle stimulation"
    ],
    tips: [
      " Best for:",
      "Healthy dessert cravings ",
      "Growing children",
      "People with weakness or fatigue",
      "Post-workout energy boost ",
      "",
      " Ayurvedic Ingredient Benefits:",
      " Whole Wheat Flour: Provides sustained energy, grounds Vata, better than refined flour",
      " Dates: Natural sweetener, builds Ojas, good for weakness & fatigue",
      " Milk: Cooling and nourishing, supports tissue building, calms Pitta",
      " Walnuts: Strengthen brain & nerves, provide healthy fats, support Vata",
      " Ghee/Oil: Enhances nutrient absorption, lubricates joints & gut",
      " Cocoa: Uplifts mood, rich in antioxidants, adds gentle stimulation",
      "",
      " Ayurvedic Tips:",
      "Enjoy 1 small piece at a time ",
      "Best time: Mid-morning or afternoon ",
      "Avoid late night desserts ",
      "Pair with warm milk for better digestion ",
      "For Kapha types, reduce walnuts and enjoy smaller portions",
      "Store in airtight container for 3-4 days",
      "Use very ripe dates for natural sweetness and better binding"
    ]
  },
  {
    id: 8,
    title: "Mango Smoothie Recipe (Ayurvedic Version)",
    dosha: ["vata", "pitta"],
    category: "beverage",
    videoId: "-X89RRYyqd4", // YouTube Shorts video ID
    description: "Nourishing, cooling, and rejuvenating smoothie made with mango and coconut water. Builds Ojas (vitality & immunity) and provides natural energy boost.",
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: "1",
    difficulty: "Very Easy",
    ingredients: [
      "Ripe mango – 1 medium, peeled & chopped 🥭",
      "Coconut water – 1 cup 🥥💧",
      "Jaggery – 1–2 tsp (grated, as per sweetness) 🍯",
      "Cashews – 5–6, soaked for 15 minutes 🌰",
      "Cardamom powder – a pinch (optional) 🌸",
      "Ice cubes – 2–3 (optional) ❄️"
    ],
    instructions: [
      "Add mango pieces, coconut water, soaked cashews, and jaggery to a blender 🥭🥥🌰",
      "Blend until smooth and creamy 🔄",
      "Add a pinch of cardamom for extra aroma (optional) 🌸",
      "If you like it chilled, add ice cubes and blend again ❄️",
      "Pour into a glass and enjoy fresh and cool 😋🥤"
    ],
    benefits: [
      "Sweet (Madhura rasa) and cooling after digestion",
      "Boosts energy ⚡",
      "Builds Ojas (vitality & immunity) 💛",
      "Good for Vata & Pitta, in moderation for Kapha",
      "Naturally cooling 🌊",
      "Hydrates the body and pacifies Pitta dosha",
      "Improves digestion when used in small amounts",
      "Rich in minerals like iron 🩸",
      "Supports healthy metabolism",
      "Provide healthy fats & strength 💪",
      "Nourish tissues (Dhatus)",
      "Support weight gain in undernourished people"
    ],
    tips: [
      "🌼 Best for:",
      "Summer refreshment ☀️",
      "Fatigue & weakness",
      "Healthy weight gain",
      "Post-workout energy boost ⚡",
      "",
      "🌸 Ayurvedic Ingredient Benefits:",
      "🥭 Mango: Sweet and cooling, builds Ojas, good for Vata & Pitta",
      "🥥 Coconut Water: Naturally cooling, hydrates, pacifies Pitta",
      "🍯 Jaggery: Improves digestion, rich in minerals, supports metabolism",
      "🌰 Cashews: Provide healthy fats, nourish tissues, support weight gain",
      "",
      "💡 Ayurvedic Tip:",
      "Drink this smoothie fresh and preferably in the morning or before noon for best digestion 🕘",
      "Use ripe, sweet mangoes for best natural sweetness",
      "For Kapha types, reduce cashews and skip jaggery",
      "For extra nutrition, add a pinch of saffron or turmeric",
      "Can be made with frozen mango for thicker consistency",
      "Avoid drinking in the evening or at night"
    ]
  },
  {
    id: 7,
    title: "Moringa Soup Recipe (Drumstick Soup)",
    dosha: ["kapha", "vata"],
    category: "soup",
    videoId: "4Yjzl5MxYyw", // YouTube Shorts video ID
    description: "Power-packed healing soup made with drumsticks (moringa pods). Strengthens immunity, improves digestion, and balances Vata & Kapha doshas. Perfect for detox and light dinner.",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "3-4",
    difficulty: "Easy",
    ingredients: [
      "Drumsticks (Moringa pods) – 2 medium, cut into 2-inch pieces 🥒",
      "Tomato – 1 medium, chopped 🍅",
      "Onion – 1 small, chopped 🧅",
      "Ginger – 1 tsp, grated 🫚",
      "Garlic – 2–3 cloves, crushed 🧄",
      "Cumin seeds – ½ tsp 🌾",
      "Black pepper – ¼ tsp (or to taste) ⚫",
      "Turmeric powder – ¼ tsp ✨",
      "Salt – to taste 🧂",
      "Ghee or sesame oil – 1 tsp 🧈",
      "Water – 3 cups 💧",
      "Fresh coriander – for garnish 🌿"
    ],
    instructions: [
      "Heat ghee/oil in a pan. Add cumin seeds and let them crackle 🌾",
      "Add ginger and garlic, sauté for a few seconds till aromatic 🫚🧄",
      "Add onion and cook until soft and translucent 🧅",
      "Add tomato and cook till mushy 🍅",
      "Add drumstick pieces, turmeric, pepper, and salt 🥒✨",
      "Pour in water, cover, and simmer for 12–15 minutes until drumsticks are tender 🍲",
      "Slightly mash the drumsticks to release flavor, or blend the soup if you prefer a smooth texture 🔄",
      "Garnish with fresh coriander and serve warm 🌿"
    ],
    benefits: [
      "Strengthens immunity 💪",
      "Improves digestion 🔥",
      "Balances Vata & Kapha dosha",
      "Enhances Agni (digestive fire) 🔥",
      "Reduces bloating and heaviness",
      "Helps in Ama (toxins) removal",
      "Improves nutrient absorption",
      "Nourishes tissues (Dhatus)",
      "Supports joint health 🦴",
      "Power-packed healing food in Ayurveda 🌿"
    ],
    tips: [
      "🌼 Best for:",
      "Weak immunity and fatigue",
      "Anemia and low energy levels",
      "Cold, cough & seasonal changes",
      "Detox and light dinner option",
      "Joint pain and stiffness",
      "",
      "🌸 Ayurvedic Perspective:",
      "✔️ Drumsticks (Moringa): Rich in vitamins, minerals, and antioxidants. Strengthens immunity and improves digestion.",
      "✔️ Ginger & Garlic: Enhance Agni (digestive fire) 🔥, reduce bloating and heaviness.",
      "✔️ Black Pepper & Cumin: Help in Ama (toxins) removal, improve nutrient absorption.",
      "✔️ Ghee / Sesame oil: Nourishes tissues (Dhatus), supports joint health 🦴.",
      "",
      "🔥 Cooking Tips:",
      "Don't overcook drumsticks - they should be tender but not mushy",
      "For extra nutrition, add moringa leaves in last 2 minutes",
      "For smoother texture, blend half the soup and keep some pieces whole",
      "Serve warm for best digestive benefits",
      "Can be stored for 1 day in refrigerator"
    ]
  },
  {
    id: 6,
    title: "Vegetable Sooji Uttapam Recipe",
    dosha: ["vata", "pitta"],
    category: "breakfast",
    videoId: "H-Gx0z-5uhM", // YouTube Shorts video ID
    description: "Light, fluffy, and easy to digest pancakes made from semolina with fresh vegetables. Tridoshic-friendly when mildly spiced and perfect for breakfast or light dinner.",
    prepTime: "15 mins",
    cookTime: "15 mins",
    servings: "2-3",
    difficulty: "Easy",
    ingredients: [
      "For the batter:",
      "Sooji / Rava – 1 cup 🌾",
      "Curd (yogurt) – ½ cup 🥣",
      "Water – ½ cup (adjust as needed) 💧",
      "Salt – to taste 🧂",
      "Ginger paste – 1 tsp 🫚",
      "Green chilli (optional) – 1 small, finely chopped 🌶️",
      "Fruit salt / Eno – ½ tsp (optional, for softness) ✨",
      "",
      "For the vegetable topping:",
      "Tomato – 1 medium, finely chopped 🍅",
      "Onion – 1 medium, finely chopped 🧅",
      "Capsicum – 1 small, finely chopped 🫑",
      "Carrot – 1 small, finely grated 🥕",
      "Curry leaves – 8–10, finely chopped 🌿",
      "Mustard seeds – ½ tsp ⚫",
      "Oil or ghee – 2–3 tbsp 🫒"
    ],
    instructions: [
      "Prepare the batter:",
      "In a bowl, mix sooji 🌾, curd 🥣, water 💧, salt 🧂, ginger 🫚 and green chilli 🌶️.",
      "Whisk well to make a smooth, pourable batter.",
      "Rest for 10–15 minutes so the sooji softens.",
      "",
      "Prepare the topping:",
      "In another bowl, mix chopped tomato 🍅, onion 🧅, capsicum 🫑, carrot 🥕 and curry leaves 🌿. Keep aside.",
      "",
      "Heat the pan:",
      "Heat a non-stick or cast-iron tawa on medium flame.",
      "Lightly grease with oil or ghee 🫒.",
      "",
      "Make the uttapam:",
      "Add fruit salt/eno ✨ to the batter and mix gently.",
      "Pour a ladleful of batter on the hot tawa and spread lightly (don't make it too thin).",
      "",
      "Add toppings:",
      "Sprinkle the mixed vegetables generously on top 🥕🫑🍅🧅🌿.",
      "Press them gently so they stick to the batter.",
      "",
      "Cook:",
      "Drizzle a little oil/ghee around the edges.",
      "Cook on medium flame until the base turns golden brown 🔥.",
      "Flip carefully and cook the vegetable side for 1–2 minutes.",
      "",
      "Serve hot:",
      "Serve with coconut chutney 🥥 or mint chutney 🌱 and enjoy 😋."
    ],
    benefits: [
      "Easy to digest when eaten warm and fresh 🍽️",
      "Tridoshic-friendly when mildly spiced",
      "Rich in fiber, vitamins & prana (life energy) from fresh vegetables 🥕🫑🍅",
      "Great for breakfast or light dinner 🌅🌙",
      "Provides sustained energy without heaviness",
      "Supports digestive fire (Agni) when eaten warm",
      "Nourishing yet light on the stomach"
    ],
    tips: [
      "🔸 Dosha-wise benefits:",
      "✔️ Vata Dosha: Sooji 🌾 and ghee 🫒 provide grounding and warmth. Ginger 🫚 and cooked vegetables help digestion and reduce bloating. Very good for Vata when eaten warm.",
      "✔️ Pitta Dosha: Tomato 🍅 and carrot 🥕 are cooling and nourishing. Avoid excess green chilli 🌶️ to keep Pitta balanced. Use ghee instead of oil for better cooling effect.",
      "✔️ Kapha Dosha: Light batter with sooji and veggies helps keep Kapha light. Ginger 🫚, curry leaves 🌿 and mustard seeds ⚫ improve metabolism. Best when cooked with minimal oil.",
      "",
      "🌟 Overall Ayurvedic Value:",
      "Adjust water based on sooji quality for perfect consistency",
      "Add vegetables like grated beetroot for extra nutrition and color",
      "Serve immediately for best taste and digestive benefits",
      "Can be made with buttermilk instead of curd for lighter version",
      "Perfect for all seasons when vegetables are fresh and seasonal"
    ]
  },
  {
    id: 5,
    title: "Tridoshic Vegetable Pulao",
    dosha: ["vata", "pitta", "kapha"],
    category: "main",
    videoId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    description: "Balanced pulao suitable for all doshas with mild spices and fresh vegetables.",
    prepTime: "15 mins",
    cookTime: "25 mins",
    servings: "3-4",
    difficulty: "Medium",
    ingredients: [
      "1 cup basmati rice, soaked 30 mins",
      "2 cups mixed vegetables (carrots, peas, beans, cauliflower)",
      "1 onion, sliced",
      "2 tbsp ghee",
      "1 tsp cumin seeds",
      "½ tsp turmeric powder",
      "½ tsp coriander powder",
      "¼ tsp black pepper",
      "2 cups hot water",
      "Salt to taste",
      "Fresh coriander and mint for garnish"
    ],
    instructions: [
      "Heat ghee in a heavy-bottomed pot. Add cumin seeds.",
      "When seeds splutter, add onions and sauté until golden.",
      "Add turmeric, coriander powder, and black pepper. Stir for 30 seconds.",
      "Add vegetables and sauté for 3-4 minutes.",
      "Drain rice and add to pot. Mix gently.",
      "Add hot water and salt. Bring to boil.",
      "Reduce heat to low, cover, and cook for 15 minutes.",
      "Let rest for 5 minutes. Fluff with fork.",
      "Garnish with fresh herbs and serve warm."
    ],
    benefits: [
      "Balances all three doshas",
      "Complete meal with protein and carbs",
      "Rich in fiber and nutrients",
      "Easy to digest when properly spiced",
      "Satisfying yet light"
    ],
    tips: [
      "Use vegetables according to season for best results.",
      "Adjust spices based on your dominant dosha.",
      "Serve with fresh yogurt raita for Pitta types."
    ]
  }
];

// Initialize the recipes page
document.addEventListener('DOMContentLoaded', function() {
  renderRecipes();
  setupFilters();
  setupMobileMenu();
  updateYear();
});

function renderRecipes(filter = 'all') {
  const container = document.getElementById('recipesContainer');
  container.innerHTML = '';

  const filteredRecipes = filter === 'all' 
    ? recipes 
    : recipes.filter(recipe => recipe.dosha.includes(filter));

  filteredRecipes.forEach(recipe => {
    const recipeCard = createRecipeCard(recipe);
    container.appendChild(recipeCard);
  });
}

function createRecipeCard(recipe) {
  const card = document.createElement('div');
  card.className = 'recipe-card rounded-3xl border border-earth-clay/25 bg-white/60 p-6 shadow-soft';
  
  card.innerHTML = `
    <div class="grid gap-6 lg:grid-cols-2">
      <!-- Video Section -->
      <div class="space-y-4">
        <h2 class="font-serif text-2xl font-bold text-earth-forest">${recipe.title}</h2>
        <div class="video-container rounded-2xl overflow-hidden border border-earth-clay/25">
          <iframe 
            src="https://www.youtube.com/embed/${recipe.videoId}" 
            title="${recipe.title} - Ayurvedic Recipe"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen
            loading="lazy">
          </iframe>
        </div>
        <div class="flex flex-wrap gap-2">
          ${recipe.dosha.map(d => `
            <span class="rounded-full bg-earth-moss/20 px-3 py-1 text-xs font-semibold text-earth-moss">
              ${d.charAt(0).toUpperCase() + d.slice(1)}
            </span>
          `).join('')}
          <span class="rounded-full bg-earth-leaf/20 px-3 py-1 text-xs font-semibold text-earth-leaf">
            ${recipe.category}
          </span>
        </div>
      </div>

      <!-- Content Section -->
      <div class="space-y-4">
        <div class="flex items-center gap-4 text-sm text-earth-soil/80">
          <span class="flex items-center gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            ${recipe.prepTime}
          </span>
          <span class="flex items-center gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2z"></path>
            </svg>
            ${recipe.cookTime}
          </span>
          <span class="flex items-center gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
            ${recipe.servings}
          </span>
          <span class="rounded-full bg-earth-sand px-2 py-1 text-xs font-medium text-earth-soil">
            ${recipe.difficulty}
          </span>
        </div>

        <p class="text-earth-soil/90 leading-relaxed">${recipe.description}</p>

        <!-- Ingredients -->
        <div class="rounded-2xl bg-earth-sand/70 p-4">
          <h3 class="font-semibold text-earth-forest mb-3">Ingredients</h3>
          <ul class="space-y-1 text-sm text-earth-soil/90">
            ${recipe.ingredients.map(ing => `
              <li class="flex items-start gap-2">
                <span class="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-earth-moss"></span>
                <span>${ing}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <!-- Instructions -->
        <div class="rounded-2xl bg-earth-moss/10 p-4 border border-earth-moss/25">
          <h3 class="font-semibold text-earth-forest mb-3">Instructions</h3>
          <ol class="space-y-2 text-sm text-earth-soil/90">
            ${recipe.instructions.map((inst, index) => `
              <li class="flex gap-3">
                <span class="flex-shrink-0 w-6 h-6 rounded-full bg-earth-moss text-earth-sand text-xs font-semibold flex items-center justify-center">
                  ${index + 1}
                </span>
                <span>${inst}</span>
              </li>
            `).join('')}
          </ol>
        </div>

        <!-- Benefits & Tips -->
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl bg-earth-leaf/10 p-4">
            <h3 class="font-semibold text-earth-forest mb-2">Benefits</h3>
            <ul class="space-y-1 text-sm text-earth-soil/90">
              ${recipe.benefits.map(benefit => `
                <li class="flex items-start gap-2">
                  <svg class="mt-0.5 h-3 w-3 shrink-0 text-earth-leaf" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                  </svg>
                  <span>${benefit}</span>
                </li>
              `).join('')}
            </ul>
          </div>
          <div class="rounded-2xl bg-earth-clay/10 p-4">
            <h3 class="font-semibold text-earth-forest mb-2">Tips</h3>
            <ul class="space-y-1 text-sm text-earth-soil/90">
              ${recipe.tips.map(tip => `
                <li class="flex items-start gap-2">
                  <svg class="mt-0.5 h-3 w-3 shrink-0 text-earth-clay" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                  </svg>
                  <span>${tip}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  return card;
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.recipe-filter');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-earth-moss', 'text-earth-sand');
        btn.classList.add('border', 'border-earth-clay/40', 'bg-white/60');
      });
      
      this.classList.remove('border', 'border-earth-clay/40', 'bg-white/60');
      this.classList.add('bg-earth-moss', 'text-earth-sand');
      
      // Filter recipes
      const filter = this.dataset.filter;
      renderRecipes(filter);
    });
  });
}

function setupMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });
  }
}

function updateYear() {
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
