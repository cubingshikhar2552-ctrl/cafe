# ☕ Gulabi Tapri Cafe — Jaipur Rooftop & Chai House

> **A modern, responsive, GitHub Pages–ready cafe website inspired by Jaipur's legendary [Tapri Central](https://www.google.com/search?q=Tapri+Central+Jaipur) (C-Scheme, Jaipur), featuring authentic delicacies at 50% celebration pricing.**

![GitHub Pages Deployment Ready](https://img.shields.io/badge/Deployment-GitHub%20Pages%20Ready-2ea44f?style=for-the-badge&logo=github)
![Pure Static HTML/CSS/JS](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JS-E34F26?style=for-the-badge&logo=html5)
![Pink City Terracotta Aesthetic](https://img.shields.io/badge/Vibe-Jaipur%20Pink%20City-C85A32?style=for-the-badge)

---

## 🌟 Concept & Jaipur Reference

This website pays homage to the vibrant rooftop tea culture of Jaipur, specifically referencing **Tapri Central** (C-Scheme, Jaipur) and the beloved cold coffee culture of **Statue Circle**:

- **Clay Pot Handi Chai**: Authentic slow-simmered herbal and cardamom chai served in kulhads.
- **Iconic Jaipur Snacks**: Pesto Vada Pav, Ratlami Bun Muska, Dal Pakwan, Khakhra Pizza, and Sautéed Mushrooms.
- **50% Discount Celebration**: Every single item on the menu displays its standard Jaipur cafe price crossed out, with the exact **half price** highlighted and calculated directly in the cart and WhatsApp order summary!

---

## ✨ Features

- 📱 **100% Responsive & Mobile-First**: Looks gorgeous on phones, tablets, and desktops.
- 🎨 **Jaipur Pink City Palette**: Terracotta clay (`#C85A32`), sandstone cream, warm saffron, and brass accents.
- 🔍 **Live Search & Filters**: Instant item search with dietary filters (*Pure Veg*, *Jain Available*, *Bestsellers*).
- 🏷️ **Category Tabs**: Switch smoothly between *Handi Chai & Brews*, *Jaipur Nashta & Bites*, *Mains & Fusion*, *Coolers & Cold Brews*, and *Sweet Endings*.
- 🛍️ **Interactive Order Tray (Cart)**:
  - Add / remove / increase / decrease items.
  - Automatically calculates total standard price, total 50% discount savings, and net payable amount.
  - Persists tray state in `localStorage`.
- 📲 **1-Click WhatsApp Ordering**: Generates a pre-formatted WhatsApp order message with item breakdown and discounted bill summary.
- 📅 **Table Reservation Form**: Pre-configured reservation system for rooftop slots (Morning Brew, Sunset Chai, Starlit Dinner).
- 🚀 **Zero Build Step Needed**: Pure HTML5, CSS3, and modern vanilla JavaScript. Works out of the box on GitHub Pages!

---

## 📋 Menu Reference & Half Price Comparison

| Item Category | Dish Name (Tapri Central / Jaipur Style) | Standard Cafe Price | **Celebration Half Price (50% OFF)** |
|---|---|---|---|
| **Chai & Hot Brews** | Tapri Handi Masala Chai (Serves 2) | ~~₹160~~ | **₹80** |
| **Chai & Hot Brews** | Zafrani Kesariya Kulhad Chai | ~~₹180~~ | **₹90** |
| **Chai & Hot Brews** | Lemongrass & Adrak Cutting Chai | ~~₹120~~ | **₹60** |
| **Chai & Hot Brews** | Curious Pour-Over (Monsooned Malabar) | ~~₹240~~ | **₹120** |
| **Chai & Hot Brews** | South Indian Filter Kaapi in Brass Dabara | ~~₹140~~ | **₹70** |
| **Jaipur Nashta** | The Iconic Pesto Vada Pav | ~~₹220~~ | **₹110** |
| **Jaipur Nashta** | Bun Muska with Ratlami Sev Bhujia | ~~₹120~~ | **₹60** |
| **Jaipur Nashta** | Dal Pakwan Platter | ~~₹260~~ | **₹130** |
| **Jaipur Nashta** | Khakhra Pizza Supreme | ~~₹240~~ | **₹120** |
| **Jaipur Nashta** | Sautéed Garlic Butter Mushrooms | ~~₹290~~ | **₹145** |
| **Jaipur Nashta** | Cheese Corn Jalapeño Shots | ~~₹230~~ | **₹115** |
| **Jaipur Nashta** | Desi Tadka Maggi with Spiced Butter | ~~₹160~~ | **₹80** |
| **Mains & Fusion** | Paneer Tikka Focaccia Sandwich | ~~₹280~~ | **₹140** |
| **Mains & Fusion** | Pink City Mezze & Gatte Platter | ~~₹320~~ | **₹160** |
| **Mains & Fusion** | Smoky Chipotle Mexican Nachos Supreme | ~~₹260~~ | **₹130** |
| **Coolers & Brews** | Statue Circle Cold Coffee (Iconic Thick) | ~~₹190~~ | **₹95** |
| **Coolers & Brews** | Kachi Keri & Mint Shikanji | ~~₹150~~ | **₹75** |
| **Coolers & Brews** | Hibiscus & Rose Petal Iced Tea | ~~₹180~~ | **₹90** |
| **Coolers & Brews** | Nutella Belgian Thick Shake | ~~₹240~~ | **₹120** |
| **Desserts** | Baked Gulab Jamun Cheesecake | ~~₹280~~ | **₹140** |
| **Desserts** | Warm Nutella Waffle with Vanilla Gelato | ~~₹260~~ | **₹130** |
| **Desserts** | Traditional Malpua Rabdi Bites | ~~₹220~~ | **₹110** |

---

## 🚀 How to Deploy on GitHub Pages (In Under 2 Minutes)

### Option 1: Using the GitHub Web Interface (Easiest)

1. **Create a new repository** on [GitHub.com](https://github.com/new) (e.g. `jaipur-cafe-website`). Make it **Public**.
2. **Upload these files**:
   - `index.html`
   - `styles.css`
   - `app.js`
   - `.github/workflows/deploy.yml` (optional, for GitHub Actions)
   - `README.md`
3. Click **Commit changes**.
4. Go to your repository **Settings** &rarr; **Pages** (in the left sidebar).
5. Under **Build and deployment**:
   - **Source**: Select `Deploy from a branch`
   - **Branch**: Select `main` (or `master`), folder: `/ (root)`
   - Click **Save**.
6. Wait 30 seconds! GitHub will generate your live URL:
   ```
   https://<your-username>.github.io/jaipur-cafe-website/
   ```

---

### Option 2: Using the Git Command Line

```bash
# 1. Initialize git in the project folder
git init

# 2. Add all files and commit
git add .
git commit -m "Initial commit: Gulabi Tapri Cafe Jaipur website"

# 3. Create a repository on GitHub, then link it:
git remote add origin https://github.com/<your-username>/jaipur-cafe-website.git

# 4. Push to main branch
git branch -M main
git push -u origin main
```

Once pushed, enable **Pages** in the repo settings or let the included `.github/workflows/deploy.yml` action automatically deploy it for you!

---

## 💻 Local Testing & Preview

To run and preview the website locally on your computer:

```bash
# Using Python built-in HTTP server:
python -m http.server 8000

# Or using Node.js npx serve:
npx serve .
```

Open `http://localhost:8000` in your web browser.

---

## 📁 File Structure

```
jaipur-cafe-website/
├── index.html                  # Semantic HTML5 homepage, menu & booking structure
├── styles.css                  # Custom Jaipur terracotta styling & responsive rules
├── app.js                      # Menu dataset, 50% discount calculations, cart & WhatsApp logic
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
└── README.md                   # Setup and deployment documentation
```

---

## ☕ License
Released under the MIT License. Feel free to use and modify for your own cafe or restaurant!
