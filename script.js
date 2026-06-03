const products = [
  {
    id: "rose-chapter",
    category: "bookmark",
    name: "Rose Chapter",
    priceCAD: 6.5,
    image: "assets/bookmark-rose.png",
    descriptions: {
      en: "A soft pink bookmark with a romantic floral touch.",
      fr: "Un marque-page rose doux avec une touche florale romantique.",
    },
  },
  {
    id: "sage-notes",
    category: "bookmark",
    name: "Sage Notes",
    priceCAD: 6.5,
    image: "assets/bookmark-sage.png",
    descriptions: {
      en: "A calm, clean style with sage green and warm accents.",
      fr: "Un style calme et clean avec vert sauge et accents lumineux.",
    },
  },
  {
    id: "moon-margin",
    category: "bookmark",
    name: "Moon Margin",
    priceCAD: 7,
    image: "assets/bookmark-moon.png",
    descriptions: {
      en: "A moon-and-stars vibe for late-night reading.",
      fr: "Une vibe lune et étoiles pour les lectures du soir.",
    },
  },
  {
    id: "valentina",
    category: "bookmark",
    name: "Valentina",
    priceCAD: 11.5,
    image: "assets/bookmark-rose.png",
    descriptions: {
      en: "A romantic bookmark inspired by Valentina by Kiara Diamant.",
      fr: "Un marque-page romantique inspiré de Valentina.",
    },
  },
  {
    id: "blush-shelf",
    category: "kindle",
    name: "Blush Shelf",
    priceCAD: 9.5,
    image: "assets/kindle-blush.png",
    descriptions: {
      en: "An elegant pink insert for a clear Kindle case.",
      fr: "Un insert rose élégant pour coque Kindle transparente.",
    },
  },
  {
    id: "pearl-reader",
    category: "kindle",
    name: "Pearl Reader",
    priceCAD: 9.5,
    image: "assets/kindle-pearl.png",
    descriptions: {
      en: "A pearl and blush design that feels subtle and chic.",
      fr: "Un design nacré et blush, discret mais chic.",
    },
  },
  {
    id: "greenhouse",
    category: "kindle",
    name: "Greenhouse",
    priceCAD: 9.5,
    image: "assets/kindle-greenhouse.png",
    descriptions: {
      en: "A fresh green insert with a soft golden detail.",
      fr: "Un insert vert frais avec une touche dorée.",
    },
  },
];

const translations = {
  en: {
    addToCart: "Add to cart",
    added: "added to cart",
    itemBookmark: "Bookmark",
    itemKindle: "Kindle insert",
    emptyCheckout: "Add an item to your cart first",
    cartEmpty: "Your cart is empty for now.",
    cartTotal: "Total",
    checkoutSubject: "BookBlush order",
    checkoutHello: "Hello BookBlush,",
    checkoutWant: "I would like to order:",
    checkoutName: "Name:",
    checkoutAddress: "Shipping address:",
    checkoutPayment: "Payment method:",
    checkoutThanks: "Thank you!",
    newsletterToast: "You are on the list 💖",
  },
  fr: {
    addToCart: "Ajouter au panier",
    added: "ajouté au panier",
    itemBookmark: "Marque-page",
    itemKindle: "Kindle insert",
    emptyCheckout: "Ajoute d'abord un article",
    cartEmpty: "Ton panier est vide.",
    cartTotal: "Total",
    checkoutSubject: "Commande BookBlush",
    checkoutHello: "Bonjour BookBlush,",
    checkoutWant: "Je veux commander :",
    checkoutName: "Nom :",
    checkoutAddress: "Adresse :",
    checkoutPayment: "Paiement :",
    checkoutThanks: "Merci !",
    newsletterToast: "Inscription OK 💖",
  },
};

const currencyRates = {
  CAD: 1,
  USD: 0.73,
  EUR: 0.68,
};

const state = {
  cart: JSON.parse(localStorage.getItem("bookblush-cart") || "{}"),
  language: localStorage.getItem("bookblush-language") || "en",
  currency: localStorage.getItem("bookblush-currency") || "CAD",
  promoCode: localStorage.getItem("bookblush-promo") || null,
  promoUsed: localStorage.getItem("bookblush-promo-used") === "true",
};

/* FIX IMPORTANT: DOM SAFE */
const productRoots = {
  bookmark: document.querySelector('[data-products="bookmark"]'),
  kindle: document.querySelector('[data-products="kindle"]'),
};

const cartDrawer = document.querySelector("[data-cart-drawer]");
const cartItems = document.querySelector("[data-cart-items]");
const cartEmpty = document.querySelector("[data-cart-empty]");
const cartTotal = document.querySelector("[data-cart-total]");
const cartCount = document.querySelector("[data-cart-count]");
const toast = document.querySelector("[data-toast]");
const languageSelect = document.querySelector("[data-language]");
const currencySelect = document.querySelector("[data-currency]");

function t(key) {
  return translations[state.language][key] || key;
}

function save() {
  localStorage.setItem("bookblush-cart", JSON.stringify(state.cart));
}

function getProduct(id) {
  return products.find((p) => p.id === id);
}

function format(price) {
  return new Intl.NumberFormat(state.language === "fr" ? "fr-CA" : "en-CA", {
    style: "currency",
    currency: state.currency,
  }).format(price * currencyRates[state.currency]);
}

/* 🧠 CART */
function cartQty() {
  return Object.values(state.cart).reduce((a, b) => a + b, 0);
}

function cartValue() {
  return Object.entries(state.cart).reduce((sum, [id, qty]) => {
    const p = getProduct(id);
    return p ? sum + p.priceCAD * qty : sum;
  }, 0);
}

/* 💥 PRODUCTS FIX (IMPORTANT PART) */
function renderProducts() {
  if (!productRoots.bookmark || !productRoots.kindle) return;

  Object.entries(productRoots).forEach(([cat, root]) => {
    const html = products
      .filter((p) => p.category === cat)
      .map(
        (p) => `
        <article class="product-card">
          <img src="${p.image}" alt="${p.name}">
          <h3>${p.name}</h3>
          <p>${p.descriptions[state.language]}</p>
          <button data-add="${p.id}">
            ${t("addToCart")}
          </button>
        </article>
      `
      )
      .join("");

    root.innerHTML = html;
  });
}

/* 🛒 CART FIX (NO DOUBLE FUNCTION, CLEAN) */
function renderCart() {
  const entries = Object.entries(state.cart).filter(([, q]) => q > 0);

  cartCount.textContent = cartQty();

  if (entries.length === 0) {
    cartEmpty.style.display = "block";
    cartItems.innerHTML = "";
    cartTotal.textContent = format(0);
    return;
  }

  cartEmpty.style.display = "none";

  let total = 0;

  cartItems.innerHTML = entries
    .map(([id, qty]) => {
      const p = getProduct(id);
      total += p.priceCAD * qty;

      return `
        <div class="cart-item">
          <span>${p.name}</span>
          <span>${qty}</span>
          <span>${format(p.priceCAD * qty)}</span>
        </div>
      `;
    })
    .join("");

  cartTotal.textContent = format(total);
}

/* 🎯 CORE */
function renderAll() {
  renderProducts();
  renderCart();
}

/* 🛠 ACTIONS */
function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  save();
  renderCart();
  toastMsg(`${getProduct(id).name} ${t("added")}`);
}

function toastMsg(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
}

/* CLICK SYSTEM FIX */
document.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-add]");
  if (btn) addToCart(btn.dataset.add);
});

/* START SAFE */
document.addEventListener("DOMContentLoaded", renderAll);
