// Blog data with articles and content
const blogPosts = [
  // Sample blog posts - you can replace these with your actual content
  {
    id: 1,
    title: "Understanding Your Dosha: A Beginner's Guide to Ayurvedic Body Types",
    category: "dosha",
    author: "Ayurvedic Expert",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "./images/dosha-guide.jpg",
    excerpt: "Discover the three fundamental energies (Vata, Pitta, Kapha) that govern your body and mind. Learn how understanding your dominant dosha can help you make better lifestyle and dietary choices.",
    content: `
      <p>Ayurveda, the ancient Indian system of medicine, teaches that each person has a unique constitution called <strong>Prakriti</strong>, which is determined by the three fundamental energies or doshas: Vata, Pitta, and Kapha.</p>
      
      <h2>What Are the Three Doshas?</h2>
      
      <h3>Vata Dosha - The Energy of Movement</h3>
      <p>Vata is composed of Air and Space elements. It governs all movement in the body and mind, including breathing, circulation, and nerve impulses.</p>
      <ul>
        <li><strong>Physical traits:</strong> Thin build, dry skin, light sleep</li>
        <li><strong>Emotional traits:</strong> Creative, enthusiastic, quick-thinking</li>
        <li><strong>When imbalanced:</strong> Anxiety, constipation, dryness</li>
      </ul>
      
      <h3>Pitta Dosha - The Energy of Transformation</h3>
      <p>Pitta is made of Fire and Water elements. It governs digestion, metabolism, and transformation in the body.</p>
      <ul>
        <li><strong>Physical traits:</strong> Medium build, warm body, sharp appetite</li>
        <li><strong>Emotional traits:</strong> Intelligent, ambitious, sharp-witted</li>
        <li><strong>When imbalanced:</strong> Anger, inflammation, acidity</li>
      </ul>
      
      <h3>Kapha Dosha - The Energy of Structure</h3>
      <p>Kapha consists of Earth and Water elements. It provides structure, stability, and nourishment to the body.</p>
      <ul>
        <li><strong>Physical traits:</strong> Heavy build, oily skin, deep sleep</li>
        <li><strong>Emotional traits:</strong> Calm, loving, stable</li>
        <li><strong>When imbalanced:</strong> Weight gain, lethargy, congestion</li>
      </ul>
      
      <h2>Finding Your Dominant Dosha</h2>
      <p>Most people have one or two dominant doshas that influence their physical and mental characteristics. You can take our <a href="index.html#dosha">dosha quiz</a> to discover your unique constitution.</p>
      
      <h2>Balancing Your Doshas</h2>
      <p>Once you understand your dominant dosha, you can make lifestyle choices that keep it balanced:</p>
      <ul>
        <li><strong>Vata:</strong> Warm, nourishing foods; regular routine; gentle exercise</li>
        <li><strong>Pitta:</strong> Cooling foods; stress management; moderate exercise</li>
        <li><strong>Kapha:</strong> Light, stimulating foods; variety in routine; vigorous exercise</li>
      </ul>
      
      <blockquote>Remember, the goal is not to eliminate your dosha but to keep it in balance for optimal health and wellbeing.</blockquote>
    `
  },
  {
    id: 2,
    title: "Seasonal Eating: Aligning Your Diet with Nature's Rhythms",
    category: "seasonal",
    author: "Ayurvedic Expert",
    date: "2024-01-10",
    readTime: "4 min read",
    image: "./images/seasonal-eating.jpg",
    excerpt: "Learn how to eat according to the seasons to maintain optimal health. Discover which foods are best for each season and how they help balance your doshas naturally.",
    content: `
      <p>In Ayurveda, <strong>Ritucharya</strong> (seasonal routine) teaches us to live in harmony with nature's cycles. As seasons change, so do our body's needs and the qualities of the environment around us.</p>
      
      <h2>Winter (Hemanta & Shishira Ritu)</h2>
      <p>Winter is dominated by Vata and Kapha doshas. The cold, dry, and heavy qualities require warming, nourishing foods.</p>
      <ul>
        <li><strong>Best foods:</strong> Soups, stews, root vegetables, whole grains</li>
        <li><strong>Spices:</strong> Ginger, cinnamon, cloves, black pepper</li>
        <li><strong>Lifestyle:</strong> Warm meals, regular exercise, adequate rest</li>
      </ul>
      
      <h2>Spring (Vasanta Ritu)</h2>
      <p>Spring brings Kapha accumulation. Light, detoxifying foods help cleanse the body of winter heaviness.</p>
      <ul>
        <li><strong>Best foods:</strong> Leafy greens, sprouts, bitter vegetables, honey</li>
        <li><strong>Spices:</strong> Turmeric, cumin, coriander, fenugreek</li>
        <li><strong>Lifestyle:</strong> Detox protocols, lighter meals, increased activity</li>
      </ul>
      
      <h2>Summer (Grishma Ritu)</h2>
      <p>Summer increases Pitta dosha. Cool, hydrating foods help balance the intense heat.</p>
      <ul>
        <li><strong>Best foods:</strong> Cucumber, watermelon, coconut, cilantro</li>
        <li><strong>Spices:</strong> Fennel, mint, cardamom (avoid heating spices)</li>
        <li><strong>Lifestyle:</strong> Cool meals, midday rest, gentle exercise</li>
      </ul>
      
      <h2>Monsoon (Varsha Ritu)</h2>
      <p>The rainy season aggravates Vata dosha. Warm, oily foods provide stability during this damp time.</p>
      <ul>
        <li><strong>Best foods:</strong> Warm soups, cooked vegetables, small amounts of honey</li>
        <li><strong>Spices:</strong> Ginger, turmeric, black pepper</li>
        <li><strong>Lifestyle:</strong> Warm foods, avoid cold drinks, moderate activity</li>
      </ul>
      
      <h2>Autumn (Sharad Ritu)</h2>
      <p>Autumn sees Pitta accumulation. Cooling, sweet foods help balance the remaining heat.</p>
      <ul>
        <li><strong>Best foods:</strong> Sweet fruits, rice, mung dal, ghee</li>
        <li><strong>Spices:</strong> Cardamom, saffron, coriander</li>
        <li><strong>Lifestyle:</strong> Moderate meals, stress reduction, balanced routine</li>
      </ul>
      
      <blockquote>Eating seasonally not only keeps you healthy but also connects you deeply with nature's wisdom.</blockquote>
    `
  },
  {
    id: 3,
    title: "The Power of Digestive Fire (Agni) in Ayurvedic Health",
    category: "lifestyle",
    author: "Ayurvedic Expert",
    date: "2024-01-05",
    readTime: "6 min read",
    image: "./images/agni-digestion.jpg",
    excerpt: "Explore the concept of Agni (digestive fire) and its crucial role in health. Learn practical tips to strengthen your digestion and improve overall wellbeing.",
    content: `
      <p>In Ayurveda, <strong>Agni</strong> (digestive fire) is considered the foundation of health. When Agni is strong, we can digest food efficiently, absorb nutrients properly, and eliminate toxins effectively.</p>
      
      <h2>What is Agni?</h2>
      <p>Agni is the transformative energy that governs all metabolic processes in the body. It's not just about digesting food—it's about digesting thoughts, emotions, and experiences as well.</p>
      
      <h2>Types of Agni</h2>
      
      <h3>Sama Agni (Balanced Digestion)</h3>
      <p>When your Agni is balanced, you experience:</p>
      <ul>
        <li>Regular appetite and elimination</li>
        <li>Good energy levels</li>
        <li>Clear mind and senses</li>
        <li>Strong immunity</li>
      </ul>
      
      <h3>Vishama Agni (Irregular Digestion)</h3>
      <p>Common in Vata types, characterized by:</p>
      <ul>
        <li>Irregular appetite</li>
        <li>Gas, bloating, constipation</li>
        <li>Craving for opposite foods</li>
      </ul>
      
      <h3>Tikshna Agni (Sharp Digestion)</h3>
      <p>Common in Pitta types, showing as:</p>
      <ul>
        <li>Excessive hunger</li>
        <li>Acidity, heartburn</li>
        <li>Loose stools</li>
        <li>Irritability when hungry</li>
      </ul>
      
      <h3>Manda Agni (Slow Digestion)</h3>
      <p>Common in Kapha types, featuring:</p>
      <ul>
        <li>Poor appetite</li>
        <li>Heaviness after meals</li>
        <li>Weight gain</li>
        <li>Sluggish metabolism</li>
      </ul>
      
      <h2>Signs of Weak Agni</h2>
      <ul>
        <li>Indigestion, gas, bloating</li>
        <li>Feeling heavy after meals</li>
        <li>Fatigue and low energy</li>
        <li>Poor immunity</li>
        <li>Mental fog and confusion</li>
      </ul>
      
      <h2>How to Strengthen Your Agni</h2>
      
      <h3>Dietary Practices</h3>
      <ul>
        <li>Eat at regular times</li>
        <li>Avoid cold, raw foods (especially in winter)</li>
        <li>Use digestive spices like ginger, cumin, coriander</li>
        <li>Drink warm water throughout the day</li>
        <li>Avoid overeating</li>
      </ul>
      
      <h3>Lifestyle Practices</h3>
      <ul>
        <li>Exercise regularly to stimulate metabolism</li>
        <li>Practice stress management</li>
        <li>Get adequate sleep</li>
        <li>Avoid eating when stressed or upset</li>
      </ul>
      
      <h3>Herbal Support</h3>
      <ul>
        <li><strong>Ginger:</strong> Kindles Agni and reduces gas</li>
        <li><strong>Triphala:</strong> Supports digestion and elimination</li>
        <li><strong>Cumin, Coriander, Fennel tea:</strong> Balances all doshas</li>
      </ul>
      
      <blockquote>Remember, "You are what you digest, not just what you eat." Strong Agni is the key to vibrant health.</blockquote>
    `
  }
];

// Initialize the blog page
document.addEventListener('DOMContentLoaded', function() {
  renderBlogPosts();
  setupFilters();
  setupMobileMenu();
  updateYear();
});

function renderBlogPosts(filter = 'all') {
  const container = document.getElementById('blogContainer');
  container.innerHTML = '';

  const filteredPosts = filter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filter);

  if (filteredPosts.length === 0) {
    container.innerHTML = `
      <div class="text-center py-12">
        <p class="text-earth-soil/70">No articles found in this category. Check back soon!</p>
      </div>
    `;
    return;
  }

  filteredPosts.forEach(post => {
    const blogCard = createBlogCard(post);
    container.appendChild(blogCard);
  });
}

function createBlogCard(post) {
  const card = document.createElement('article');
  card.className = 'blog-card rounded-3xl border border-earth-clay/25 bg-white/60 p-6 shadow-soft';
  
  // Format date
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  card.innerHTML = `
    <div class="grid gap-6 lg:grid-cols-3">
      <!-- Image Section -->
      <div class="lg:col-span-1">
        <div class="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-earth-moss/20 to-earth-leaf/20 border border-earth-clay/25">
          ${post.image ? 
            `<img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover">` :
            `<div class="w-full h-full flex items-center justify-center text-earth-moss/50">
              <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
              </svg>
            </div>`
          }
        </div>
      </div>

      <!-- Content Section -->
      <div class="lg:col-span-2 space-y-4">
        <div class="flex flex-wrap items-center gap-3 text-sm text-earth-soil/70">
          <span class="rounded-full bg-earth-moss/20 px-3 py-1 text-xs font-semibold text-earth-moss">
            ${post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </span>
          <span class="flex items-center gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            ${formattedDate}
          </span>
          <span class="flex items-center gap-1">
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            ${post.readTime}
          </span>
        </div>

        <h2 class="font-serif text-2xl font-bold text-earth-forest mb-3">
          <a href="#" class="hover:text-earth-moss transition-colors" onclick="openFullPost(${post.id}); return false;">
            ${post.title}
          </a>
        </h2>

        <p class="text-earth-soil/90 leading-relaxed mb-4">${post.excerpt}</p>

        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="h-8 w-8 rounded-full bg-gradient-to-br from-earth-moss to-earth-leaf flex items-center justify-center">
              <span class="text-earth-sand text-xs font-semibold">AE</span>
            </div>
            <span class="text-sm text-earth-soil/80">${post.author}</span>
          </div>
          
          <button onclick="openFullPost(${post.id})" class="inline-flex items-center gap-2 text-earth-moss hover:text-earth-leaf font-medium text-sm transition-colors">
            Read More
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  return card;
}

function openFullPost(postId) {
  const post = blogPosts.find(p => p.id === postId);
  if (!post) return;

  const container = document.getElementById('blogContainer');
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  container.innerHTML = `
    <div class="max-w-4xl mx-auto">
      <button onclick="renderBlogPosts()" class="mb-6 inline-flex items-center gap-2 text-earth-moss hover:text-earth-leaf font-medium transition-colors">
        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Blog
      </button>

      <article class="rounded-3xl border border-earth-clay/25 bg-white/60 p-8 shadow-soft">
        <header class="mb-8">
          <div class="flex flex-wrap items-center gap-3 text-sm text-earth-soil/70 mb-4">
            <span class="rounded-full bg-earth-moss/20 px-3 py-1 text-xs font-semibold text-earth-moss">
              ${post.category.charAt(0).toUpperCase() + post.category.slice(1)}
            </span>
            <span>${formattedDate}</span>
            <span>${post.readTime}</span>
          </div>
          
          <h1 class="font-serif text-3xl sm:text-4xl font-black text-earth-forest mb-4">${post.title}</h1>
          
          <div class="flex items-center gap-3">
            <div class="h-10 w-10 rounded-full bg-gradient-to-br from-earth-moss to-earth-leaf flex items-center justify-center">
              <span class="text-earth-sand text-sm font-semibold">AE</span>
            </div>
            <div>
              <div class="font-medium text-earth-forest">${post.author}</div>
              <div class="text-sm text-earth-soil/70">Ayurvedic Expert</div>
            </div>
          </div>
        </header>

        <div class="blog-content text-earth-soil/90">
          ${post.content}
        </div>

        <footer class="mt-12 pt-8 border-t border-earth-clay/25">
          <div class="flex flex-wrap gap-4 justify-between items-center">
            <div class="text-sm text-earth-soil/70">
              Share this article:
            </div>
            <div class="flex gap-3">
              <button class="p-2 rounded-lg bg-earth-sand/50 hover:bg-earth-sand transition-colors">
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button class="p-2 rounded-lg bg-earth-sand/50 hover:bg-earth-sand transition-colors">
                <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </article>
    </div>
  `;
}

function setupFilters() {
  const filterButtons = document.querySelectorAll('.blog-filter');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Update active state
      filterButtons.forEach(btn => {
        btn.classList.remove('bg-earth-moss', 'text-earth-sand');
        btn.classList.add('border', 'border-earth-clay/40', 'bg-white/60');
      });
      
      this.classList.remove('border', 'border-earth-clay/40', 'bg-white/60');
      this.classList.add('bg-earth-moss', 'text-earth-sand');
      
      // Filter blog posts
      const filter = this.dataset.filter;
      renderBlogPosts(filter);
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
