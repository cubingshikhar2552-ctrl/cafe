/**
 * Gulabi Tapri Cafe - Jaipur
 * Inspired by Tapri Central (C-Scheme, Jaipur)
 * All menu items are calculated at 50% celebration pricing!
 */

// Comprehensive authentic Jaipur Cafe Menu
const MENU_ITEMS = [
  // 1. Handi Chai & Hot Brews
  {
    id: "chai-1",
    name: "Tapri Handi Masala Chai (Serves 2)",
    category: "chai",
    originalPrice: 160,
    halfPrice: 80,
    description: "Slow-brewed in unglazed terracotta handi with crushed adrak, green cardamom, cloves & fresh mint.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "chai-2",
    name: "Zafrani Kesariya Chai",
    category: "chai",
    originalPrice: 180,
    halfPrice: 90,
    description: "Rich saffron threads infused with creamy whole milk and aromatic spices in a clay kulhad.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "chai-3",
    name: "Lemongrass & Adrak Cutting Chai",
    category: "chai",
    originalPrice: 120,
    halfPrice: 60,
    description: "Freshly harvested lemongrass stems boiled with organic ginger. Refreshing & digestive.",
    isVeg: true,
    isJain: true,
    isBestseller: false,
    isJaipurSpecial: false,
  },
  {
    id: "chai-4",
    name: "Curious Pour-Over (Monsooned Malabar)",
    category: "chai",
    originalPrice: 240,
    halfPrice: 120,
    description: "Single-origin pour-over specialty coffee with notes of dark chocolate and spiced nuts.",
    isVeg: true,
    isJain: true,
    isBestseller: false,
    isJaipurSpecial: false,
  },
  {
    id: "chai-5",
    name: "South Indian Filter Kaapi in Brass Dabara",
    category: "chai",
    originalPrice: 140,
    halfPrice: 70,
    description: "Traditional frothy chicory-blended decoction served hot in authentic brass tumbler and dabara.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: false,
  },

  // 2. Jaipur Nashta & Street Bites
  {
    id: "nashta-1",
    name: "The Iconic Pesto Vada Pav",
    category: "nashta",
    originalPrice: 220,
    halfPrice: 110,
    description: "Tapri signature creation: Crispy spiced potato batata vada slathered with Italian basil pesto in butter-toasted pav.",
    isVeg: true,
    isJain: false,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "nashta-2",
    name: "Bun Muska with Ratlami Sev Bhujia",
    category: "nashta",
    originalPrice: 120,
    halfPrice: 60,
    description: "Warm pillowy bun stuffed with generous homemade butter and crunchy spicy Rajasthani Ratlami sev.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "nashta-3",
    name: "Dal Pakwan Platter",
    category: "nashta",
    originalPrice: 260,
    halfPrice: 130,
    description: "Crisp cumin-flavored flatbread crackers paired with tempered chana dal, sweet tamarind & fiery green chutneys.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "nashta-4",
    name: "Khakhra Pizza Supreme",
    category: "nashta",
    originalPrice: 240,
    halfPrice: 120,
    description: "Crisp hand-roasted Gujarati methi khakhra layered with herbed marinara, bell peppers, olives & mozzarella.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "nashta-5",
    name: "Sautéed Garlic Butter Mushrooms",
    category: "nashta",
    originalPrice: 290,
    halfPrice: 145,
    description: "Plump button mushrooms pan-seared with fresh thyme, garlic butter, and served with toasted herb focaccia.",
    isVeg: true,
    isJain: false,
    isBestseller: true,
    isJaipurSpecial: false,
  },
  {
    id: "nashta-6",
    name: "Cheese Corn Jalapeño Shots",
    category: "nashta",
    originalPrice: 230,
    halfPrice: 115,
    description: "Golden crispy croquettes filled with molten cheddar, sweet American corn, and spicy pickled jalapeños.",
    isVeg: true,
    isJain: true,
    isBestseller: false,
    isJaipurSpecial: false,
  },
  {
    id: "nashta-7",
    name: "Desi Tadka Maggi with Spiced Butter",
    category: "nashta",
    originalPrice: 160,
    halfPrice: 80,
    description: "Street-style soupy Maggi tossed with crunchy diced veggies, crushed jeera, and a crown of salted butter.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: false,
  },

  // 3. Mains & Fusion
  {
    id: "mains-1",
    name: "Paneer Tikka Focaccia Sandwich",
    category: "mains",
    originalPrice: 280,
    halfPrice: 140,
    description: "Clay-oven smoked malai paneer cubes, mint mayonnaise, crisp lettuce, and caramelized onions on rosemary focaccia.",
    isVeg: true,
    isJain: false,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "mains-2",
    name: "Smoky Chipotle Mexican Nachos Supreme",
    category: "mains",
    originalPrice: 260,
    halfPrice: 130,
    description: "Stoneground corn tortillas drenched in house cheese fondue, refried beans, pico de gallo & sour cream.",
    isVeg: true,
    isJain: true,
    isBestseller: false,
    isJaipurSpecial: false,
  },
  {
    id: "mains-3",
    name: "Pink City Mezze & Gatte Platter",
    category: "mains",
    originalPrice: 320,
    halfPrice: 160,
    description: "Our famous fusion: Roasted garlic hummus, crisp gatte bites, za'atar lavash crisps & pickled olives.",
    isVeg: true,
    isJain: false,
    isBestseller: false,
    isJaipurSpecial: true,
  },
  {
    id: "mains-4",
    name: "Classic Creamy Alfredo Penne",
    category: "mains",
    originalPrice: 290,
    halfPrice: 145,
    description: "Penne tossed in slow-cooked parmesan garlic cream sauce, broccoli florets, and buttered herb croutons.",
    isVeg: true,
    isJain: true,
    isBestseller: false,
    isJaipurSpecial: false,
  },

  // 4. Coolers & Cold Brews
  {
    id: "coolers-1",
    name: "Statue Circle Cold Coffee (Iconic)",
    category: "coolers",
    originalPrice: 190,
    halfPrice: 95,
    description: "Jaipur's pride! Super thick, frosty cold coffee blended with rich chocolate drizzle and vanilla ice cream scoop.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "coolers-2",
    name: "Kachi Keri & Mint Shikanji",
    category: "coolers",
    originalPrice: 150,
    halfPrice: 75,
    description: "Raw green mango cooler with roasted cumin, rock salt, fresh crushed spearmint & sparkling club soda.",
    isVeg: true,
    isJain: true,
    isBestseller: false,
    isJaipurSpecial: true,
  },
  {
    id: "coolers-3",
    name: "Hibiscus & Rose Petal Iced Tea",
    category: "coolers",
    originalPrice: 180,
    halfPrice: 90,
    description: "Brewed crimson hibiscus blossoms, Pushkar rose petals, and citrus lemon twist served over ice.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: false,
  },
  {
    id: "coolers-4",
    name: "Nutella Belgian Thick Shake",
    category: "coolers",
    originalPrice: 240,
    halfPrice: 120,
    description: "Velvety dark chocolate shake loaded with genuine Nutella spread, toasted hazelnuts & choco chips.",
    isVeg: true,
    isJain: true,
    isBestseller: false,
    isJaipurSpecial: false,
  },

  // 5. Sweet Endings & Desserts
  {
    id: "desserts-1",
    name: "Baked Gulab Jamun Cheesecake",
    category: "desserts",
    originalPrice: 280,
    halfPrice: 140,
    description: "Silky New York baked cheesecake stuffed with miniature saffron-soaked Jaipur gulab jamuns on graham crust.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: true,
  },
  {
    id: "desserts-2",
    name: "Warm Nutella Waffle with Vanilla Gelato",
    category: "desserts",
    originalPrice: 260,
    halfPrice: 130,
    description: "Crispy Belgian waffle drenched in warm Nutella drizzle, fresh sliced bananas & handcrafted vanilla gelato.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: false,
  },
  {
    id: "desserts-3",
    name: "Lotus Biscoff Warm Croissant",
    category: "desserts",
    originalPrice: 250,
    halfPrice: 125,
    description: "Flaky butter croissant filled with melted spiced speculoos cream and crowned with crunchy Biscoff crumbs.",
    isVeg: true,
    isJain: true,
    isBestseller: false,
    isJaipurSpecial: false,
  },
  {
    id: "desserts-4",
    name: "Traditional Malpua Rabdi Bites",
    category: "desserts",
    originalPrice: 220,
    halfPrice: 110,
    description: "Crisp fennel-flavored mini pancakes soaked in light syrup, served with thick pistachios-garnished rabdi.",
    isVeg: true,
    isJain: true,
    isBestseller: true,
    isJaipurSpecial: true,
  }
];

// App State
const state = {
  activeCategory: "all",
  activeDiet: "all",
  searchQuery: "",
  cart: {} // { [id]: quantity }
};

// DOM Elements
const menuGrid = document.getElementById("menuGrid");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("menuSearchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const resetFiltersBtn = document.getElementById("resetFiltersBtn");
const categoryTabs = document.querySelectorAll(".cat-tab");
const dietButtons = document.querySelectorAll(".diet-btn");

// Cart Elements
const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");
const cartItemsList = document.getElementById("cartItemsList");
const cartCount = document.getElementById("cartCount");
const cartHeaderTotal = document.getElementById("cartHeaderTotal");
const billOriginalPrice = document.getElementById("billOriginalPrice");
const billSavings = document.getElementById("billSavings");
const billFinalTotal = document.getElementById("billFinalTotal");
const mCartCount = document.getElementById("mCartCount");
const mCartTotal = document.getElementById("mCartTotal");
const toastNotification = document.getElementById("toastNotification");
const toastMsg = document.getElementById("toastMsg");

// Navigation
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");
const yearSpan = document.getElementById("yearSpan");

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  // Set current year
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Load cart from localStorage
  loadCartFromStorage();

  // Initial render
  renderMenu();
  updateCartUI();

  // Attach event listeners
  setupEventListeners();
});

function setupEventListeners() {
  // Mobile Nav Toggle
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-open");
    const icon = mobileMenuBtn.querySelector("i");
    if (navLinks.classList.contains("mobile-open")) {
      icon.className = "fa-solid fa-xmark";
    } else {
      icon.className = "fa-solid fa-bars";
    }
  });

  // Close nav on link click
  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
      mobileMenuBtn.querySelector("i").className = "fa-solid fa-bars";
    });
  });

  // Search input
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim().toLowerCase();
    clearSearchBtn.style.display = state.searchQuery ? "block" : "none";
    renderMenu();
  });

  clearSearchBtn.addEventListener("click", () => {
    searchInput.value = "";
    state.searchQuery = "";
    clearSearchBtn.style.display = "none";
    renderMenu();
    searchInput.focus();
  });

  resetFiltersBtn.addEventListener("click", () => {
    state.searchQuery = "";
    state.activeCategory = "all";
    state.activeDiet = "all";
    searchInput.value = "";
    clearSearchBtn.style.display = "none";

    categoryTabs.forEach(t => t.classList.toggle("active", t.dataset.category === "all"));
    dietButtons.forEach(b => b.classList.toggle("active", b.dataset.diet === "all"));

    renderMenu();
  });

  // Category filter
  categoryTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      state.activeCategory = tab.dataset.category;
      renderMenu();
    });
  });

  // Dietary filter
  dietButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      dietButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeDiet = btn.dataset.diet;
      renderMenu();
    });
  });

  // Cart Drawer open/close
  openCartBtn.addEventListener("click", openCart);
  closeCartBtn.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);
}

// Render Menu Items
function renderMenu() {
  const filtered = MENU_ITEMS.filter(item => {
    // Category check
    if (state.activeCategory !== "all" && item.category !== state.activeCategory) {
      return false;
    }

    // Dietary check
    if (state.activeDiet === "veg" && !item.isVeg) return false;
    if (state.activeDiet === "jain" && !item.isJain) return false;
    if (state.activeDiet === "bestseller" && !item.isBestseller) return false;

    // Search query check
    if (state.searchQuery) {
      const matchName = item.name.toLowerCase().includes(state.searchQuery);
      const matchDesc = item.description.toLowerCase().includes(state.searchQuery);
      if (!matchName && !matchDesc) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";

  menuGrid.innerHTML = filtered.map(item => {
    const qty = state.cart[item.id] || 0;
    
    // Tag badges
    let tagsHtml = "";
    if (item.isBestseller) {
      tagsHtml += `<span class="tag-badge tag-bestseller"><i class="fa-solid fa-fire"></i> Bestseller</span>`;
    }
    if (item.isJaipurSpecial) {
      tagsHtml += `<span class="tag-badge tag-jaipur"><i class="fa-solid fa-crown"></i> Jaipur Special</span>`;
    }
    if (item.isJain) {
      tagsHtml += `<span class="tag-badge tag-jain"><i class="fa-solid fa-spa"></i> Jain Available</span>`;
    }

    // Action button or quantity control
    let actionBtnHtml = "";
    if (qty > 0) {
      actionBtnHtml = `
        <div class="item-qty-control">
          <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)" aria-label="Decrease quantity">&minus;</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)" aria-label="Increase quantity">&plus;</button>
        </div>
      `;
    } else {
      actionBtnHtml = `
        <button class="add-btn" onclick="addItemToCart('${item.id}')">
          <i class="fa-solid fa-plus"></i> Add
        </button>
      `;
    }

    return `
      <div class="menu-card" data-id="${item.id}">
        <div class="card-top">
          <div class="card-header-flex">
            <h3 class="item-name">${item.name}</h3>
            <div class="veg-icon" title="100% Pure Vegetarian"></div>
          </div>
          <div class="item-tags">${tagsHtml}</div>
          <p class="item-desc">${item.description}</p>
        </div>

        <div class="card-bottom">
          <div class="price-box">
            <div class="half-price">₹${item.halfPrice}</div>
            <div class="original-price-wrap">
              <span class="original-price">₹${item.originalPrice}</span>
              <span class="discount-tag">50% OFF</span>
            </div>
          </div>
          <div id="action-${item.id}">
            ${actionBtnHtml}
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// Cart Operations
function addItemToCart(id) {
  const item = MENU_ITEMS.find(m => m.id === id);
  if (!item) return;

  state.cart[id] = (state.cart[id] || 0) + 1;
  saveCartToStorage();
  updateCartUI();
  renderMenu();
  showToast(`Added ${item.name} to tray!`);
}

function updateItemQty(id, delta) {
  if (!state.cart[id]) return;

  const newQty = state.cart[id] + delta;
  if (newQty <= 0) {
    delete state.cart[id];
  } else {
    state.cart[id] = newQty;
  }

  saveCartToStorage();
  updateCartUI();
  renderMenu();
}

function clearCart() {
  state.cart = {};
  saveCartToStorage();
  updateCartUI();
  renderMenu();
  showToast("Tray cleared.");
}

function updateCartUI() {
  const cartEntries = Object.entries(state.cart);
  const totalCount = cartEntries.reduce((acc, [, qty]) => acc + qty, 0);

  let originalTotal = 0;
  let finalTotal = 0;

  cartEntries.forEach(([id, qty]) => {
    const item = MENU_ITEMS.find(m => m.id === id);
    if (item) {
      originalTotal += item.originalPrice * qty;
      finalTotal += item.halfPrice * qty;
    }
  });

  const savings = originalTotal - finalTotal;

  // Header and float totals
  cartCount.textContent = totalCount;
  cartHeaderTotal.textContent = `₹${finalTotal}`;
  mCartCount.textContent = totalCount;
  mCartTotal.textContent = `₹${finalTotal}`;

  // Drawer totals
  billOriginalPrice.textContent = `₹${originalTotal}`;
  billSavings.textContent = `-₹${savings}`;
  billFinalTotal.textContent = `₹${finalTotal}`;

  // Render items inside drawer
  if (cartEntries.length === 0) {
    cartItemsList.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-mug-saucer"></i>
        <h4>Your tray is currently empty</h4>
        <p>Explore our 50% celebration menu and add authentic Jaipur chai & snacks!</p>
      </div>
    `;
    return;
  }

  cartItemsList.innerHTML = cartEntries.map(([id, qty]) => {
    const item = MENU_ITEMS.find(m => m.id === id);
    if (!item) return "";

    const itemTotal = item.halfPrice * qty;
    const itemOriginal = item.originalPrice * qty;

    return `
      <div class="cart-item-row">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <div>
            <span>₹${itemTotal}</span>
            <small>₹${itemOriginal}</small>
          </div>
        </div>
        <div class="item-qty-control">
          <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)">&minus;</button>
          <span class="qty-val">${qty}</span>
          <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)">&plus;</button>
        </div>
      </div>
    `;
  }).join("");
}

// Quick Add Heritage Combo
function quickAddCombo() {
  addItemToCart("chai-1"); // Tapri Handi Masala Chai
  addItemToCart("nashta-1"); // Pesto Vada Pav
  addItemToCart("nashta-2"); // Bun Muska
  addItemToCart("nashta-6"); // Cheese Corn Jalapeno Shots
  openCart();
  showToast("Added 'Shaam Ki Chai' Heritage Combo to tray!");
}

// Drawer Controls
function openCart() {
  cartDrawer.classList.add("open");
  cartBackdrop.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartBackdrop.classList.remove("open");
  document.body.style.overflow = "";
}

function toggleCart() {
  if (cartDrawer.classList.contains("open")) {
    closeCart();
  } else {
    openCart();
  }
}

// WhatsApp Order Integration
function sendOrderViaWhatsApp() {
  const cartEntries = Object.entries(state.cart);
  if (cartEntries.length === 0) {
    alert("Please add at least one delicacy to your tray before placing an order!");
    return;
  }

  let finalTotal = 0;
  let originalTotal = 0;
  let orderSummary = "Namaste Gulabi Tapri Jaipur! I would like to place an order at 50% celebration rates:%0A%0A";

  cartEntries.forEach(([id, qty], idx) => {
    const item = MENU_ITEMS.find(m => m.id === id);
    if (item) {
      const itemPrice = item.halfPrice * qty;
      finalTotal += itemPrice;
      originalTotal += item.originalPrice * qty;
      orderSummary += `${idx + 1}. *${item.name}* x ${qty} = ₹${itemPrice}%0A`;
    }
  });

  const savings = originalTotal - finalTotal;

  orderSummary += `%0A--------------------------------%0A`;
  orderSummary += `*Standard Price:* ₹${originalTotal}%0A`;
  orderSummary += `*50% Celebration Discount:* -₹${savings}%0A`;
  orderSummary += `*Total Payable:* ₹${finalTotal}%0A`;
  orderSummary += `--------------------------------%0A`;
  orderSummary += `Please let me know the preparation time. Khamma Ghani!`;

  // Pre-configured Jaipur WhatsApp order number
  const waNumber = "919829012345";
  const waUrl = `https://wa.me/${waNumber}?text=${orderSummary}`;

  window.open(waUrl, "_blank");
}

// Table Reservation Handler
function handleReservation(event) {
  event.preventDefault();
  const name = document.getElementById("resName").value;
  const phone = document.getElementById("resPhone").value;
  const guests = document.getElementById("resGuests").value;
  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;

  const successMsg = document.getElementById("resSuccessMsg");
  successMsg.style.display = "flex";
  successMsg.innerHTML = `<i class="fa-solid fa-circle-check"></i> Thank you ${name}! Table requested for ${guests} on ${date}. We will WhatsApp your confirmation to ${phone} within 15 minutes!`;

  document.getElementById("reservationForm").reset();

  setTimeout(() => {
    successMsg.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 100);
}

// Toast notification
function showToast(message) {
  toastMsg.textContent = message;
  toastNotification.classList.add("show");
  setTimeout(() => {
    toastNotification.classList.remove("show");
  }, 2400);
}

// Local Storage
function saveCartToStorage() {
  try {
    localStorage.setItem("gulabi_tapri_cart", JSON.stringify(state.cart));
  } catch (e) {
    console.warn("Storage not available:", e);
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("gulabi_tapri_cart");
    if (saved) {
      state.cart = JSON.parse(saved);
    }
  } catch (e) {
    state.cart = {};
  }
}
