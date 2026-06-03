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
      fr: "Une vibe lune et etoiles pour les lectures du soir.",
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
      fr: "Un marque-page romantique inspire de Valentina par Kiara Diamant.",
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
      fr: "Un insert rose elegant pour coque Kindle transparente.",
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
      fr: "Un design nacre et blush, discret mais tres chic.",
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
      fr: "Un insert vert frais avec une touche de jaune doux.",
    },
  },
];

const translations = {
  en: {
    navBookmarks: "Bookmarks",
    navKindle: "Kindle Inserts",
    navDeals: "Deals",
    navFaq: "FAQ",
    languageLabel: "Language",
    currencyLabel: "Currency",
    heroEyebrow: "Bookmarks and Kindle inserts made with love",
    heroText: "Cute, classy reading accessories made to match your current book, your Kindle, and your mood.",
    shopBookmarks: "Shop bookmarks",
    shopKindle: "Shop Kindle inserts",
    trustSmall: "Small business",
    trustCute: "Cute and classy designs",
    trustCustom: "Custom options",
    trustEasy: "Easy ordering",
    bookmarkEyebrow: "Bookmarks",
    bookmarkTitle: "Pretty page holders",
    bookmarkIntro: "Soft, decorative bookmarks for paperbacks, hardcovers, planners, and gifting.",
    kindleEyebrow: "Kindle Inserts",
    kindleTitle: "Dress up your Kindle",
    kindleIntro: "Inserts designed to slide inside a clear Kindle case without sticking to the device.",
    dealsEyebrow: "Deals",
    dealsTitle: "Reader-friendly savings",
    dealsIntro: "Add a bundle or seasonal discount to make orders feel special from day one.",
    dealOneBadge: "Bundle",
    dealOneTitle: "Bookmark trio",
    dealOneText: "Buy any 3 bookmarks and save 10% on the set.",
    dealTwoBadge: "Launch",
    dealTwoTitle: "Blush launch code",
    dealTwoText: "Use this code for 10% off your first order.",
    dealThreeBadge: "Gift",
    dealThreeTitle: "Reading bestie set",
    dealThreeText: "Pair one bookmark with one Kindle insert and save 5%.",
    collectionsEyebrow: "Collections",
    collectionsTitle: "A vibe for every reader",
    collectionOne: "Powder pinks, quiet florals, and sweet details for cozy reads.",
    collectionTwo: "Sage, cream, and minimal details for a calm, polished look.",
    collectionThree: "Moon, star, and soft lilac designs for late-night chapters.",
    infoTitle: "Everything a real shop needs",
    infoText: "Clear product sections, photos, FAQs, contact, shipping details, returns, discounts, and a simple cart.",
    shippingTitle: "Shipping",
    shippingText: "Orders are prepared in 2 to 5 business days. Shipping options can be adjusted by country.",
    returnsTitle: "Returns",
    returnsText: "Returns are available within 14 days for unused, non-custom items.",
    customTitle: "Custom",
    customText: "Request a color, theme, name, or short quote for a gift-ready piece.",
    faqTitle: "Frequently asked questions",
    faqOneQ: "Do Kindle inserts stick to the Kindle?",
    faqOneA: "No. They are decorative inserts made to slide inside a clear case.",
    faqTwoQ: "Can I customize a design?",
    faqTwoA: "Yes. You can request a color, theme, name, or short quote depending on the item.",
    faqThreeQ: "How do I place an order?",
    faqThreeA: "Add items to your cart, then click checkout. The site prepares an email with your order summary.",
    faqFourQ: "What payment methods are available?",
    faqFourA: "This first version prepares orders by email. Stripe, Shopify, Etsy, or SumUp can be connected next.",
    faqFiveQ: "Can colors vary?",
    faqFiveA: "Yes, slightly depending on screen, printing, and paper finish.",
    contactEyebrow: "Contact",
    contactTitle: "Have a special idea?",
    contactText: "Ask for a custom order, a gift collection, or a specific color palette.",
    nameLabel: "Your name",
    namePlaceholder: "Your name",
    messageLabel: "Message",
    messagePlaceholder: "I would love a pink Kindle insert with...",
    sendButton: "Send",
    footerText: "Cute, classy reading accessories for pages you love.",
    newsletterLabel: "Get new drops",
    cartTitle: "Your cart",
    cartEmpty: "Your cart is empty for now.",
    cartTotal: "Total",
    checkoutButton: "Checkout",
    paymentNote: "Secure payment can be connected in the next step.",
    addToCart: "Add to cart",
    itemBookmark: "Bookmark",
    itemKindle: "Kindle insert",
    added: "added to cart",
    emptyCheckout: "Add an item to your cart first",
    newsletterToast: "You are on the list for new drops",
    checkoutSubject: "BookBlush order",
    checkoutHello: "Hello BookBlush,",
    checkoutWant: "I would like to order:",
    checkoutName: "Name:",
    checkoutAddress: "Shipping address:",
    checkoutPayment: "Preferred payment method:",
    checkoutThanks: "Thank you!",
  },
  fr: {
    navBookmarks: "Marque-pages",
    navKindle: "Kindle inserts",
    navDeals: "Rabais",
    navFaq: "FAQ",
    languageLabel: "Langue",
    currencyLabel: "Devise",
    heroEyebrow: "Marque-pages et Kindle inserts faits avec amour",
    heroText: "Des accessoires de lecture cute, doux et classes pour matcher ton livre du moment, ton Kindle et ton humeur.",
    shopBookmarks: "Voir les marque-pages",
    shopKindle: "Voir les Kindle inserts",
    trustSmall: "Petite entreprise",
    trustCute: "Designs cute et classes",
    trustCustom: "Options personnalisees",
    trustEasy: "Commande simple",
    bookmarkEyebrow: "Marque-pages",
    bookmarkTitle: "Jolis compagnons de page",
    bookmarkIntro: "Des marque-pages doux et decoratifs pour livres, agendas et cadeaux.",
    kindleEyebrow: "Kindle inserts",
    kindleTitle: "Habille ton Kindle",
    kindleIntro: "Des inserts a glisser dans une coque transparente, sans les coller sur l'appareil.",
    dealsEyebrow: "Rabais",
    dealsTitle: "Des economies pour lectrices",
    dealsIntro: "Des bundles et codes promo pour rendre chaque commande encore plus speciale.",
    dealOneBadge: "Bundle",
    dealOneTitle: "Trio marque-pages",
    dealOneText: "Achete 3 marque-pages et economise 10% sur l'ensemble.",
    dealTwoBadge: "Lancement",
    dealTwoTitle: "Code lancement blush",
    dealTwoText: "Utilise ce code pour 10% de rabais sur ta premiere commande.",
    dealThreeBadge: "Cadeau",
    dealThreeTitle: "Set bestie lecture",
    dealThreeText: "Combine un marque-page et un Kindle insert pour economiser 5%.",
    collectionsEyebrow: "Collections",
    collectionsTitle: "Une vibe pour chaque lectrice",
    collectionOne: "Roses poudres, fleurs discretes et details doux pour lectures cozy.",
    collectionTwo: "Sauge, creme et details minimalistes pour un rendu calme et soigne.",
    collectionThree: "Lune, etoiles et lilas doux pour les chapitres du soir.",
    infoTitle: "Tout ce qu'une vraie boutique doit avoir",
    infoText: "Sections claires, photos, FAQ, contact, livraison, retours, rabais et panier simple.",
    shippingTitle: "Livraison",
    shippingText: "Preparation sous 2 a 5 jours ouvrables. Les options de livraison peuvent etre ajustees par pays.",
    returnsTitle: "Retours",
    returnsText: "Retours possibles sous 14 jours pour les articles non personnalises et non utilises.",
    customTitle: "Sur mesure",
    customText: "Demande une couleur, un theme, un prenom ou une courte citation pour un cadeau.",
    faqTitle: "Questions frequentes",
    faqOneQ: "Est-ce que les Kindle inserts collent sur le Kindle ?",
    faqOneA: "Non. Ce sont des inserts decoratifs a glisser dans une coque transparente.",
    faqTwoQ: "Est-ce que je peux personnaliser un design ?",
    faqTwoA: "Oui. Tu peux demander une couleur, un theme, un prenom ou une courte citation selon l'article.",
    faqThreeQ: "Comment je passe commande ?",
    faqThreeA: "Ajoute les articles au panier, puis clique sur commander. Le site prepare un email avec ton recap.",
    faqFourQ: "Quels moyens de paiement sont possibles ?",
    faqFourA: "Cette premiere version prepare les commandes par email. Stripe, Shopify, Etsy ou SumUp peuvent etre connectes ensuite.",
    faqFiveQ: "Est-ce que les couleurs peuvent varier ?",
    faqFiveA: "Oui, legerement selon l'ecran, l'impression et le papier choisi.",
    contactEyebrow: "Contact",
    contactTitle: "Une idee speciale ?",
    contactText: "Demande une commande personnalisee, une collection cadeau ou une palette precise.",
    nameLabel: "Ton nom",
    namePlaceholder: "Ton nom",
    messageLabel: "Message",
    messagePlaceholder: "Je voudrais un Kindle insert rose avec...",
    sendButton: "Envoyer",
    footerText: "Accessoires de lecture cute et classes pour les pages qu'on aime.",
    newsletterLabel: "Recevoir les drops",
    cartTitle: "Ton panier",
    cartEmpty: "Ton panier est vide pour le moment.",
    cartTotal: "Total",
    checkoutButton: "Commander",
    paymentNote: "Le paiement securise pourra etre connecte a la prochaine etape.",
    addToCart: "Ajouter au panier",
    itemBookmark: "Marque-page",
    itemKindle: "Kindle insert",
    added: "ajoute au panier",
    emptyCheckout: "Ajoute d'abord un article au panier",
    newsletterToast: "Inscription notee pour les prochains drops",
    checkoutSubject: "Commande BookBlush",
    checkoutHello: "Bonjour BookBlush,",
    checkoutWant: "Je voudrais commander :",
    checkoutName: "Nom :",
    checkoutAddress: "Adresse de livraison :",
    checkoutPayment: "Mode de paiement souhaite :",
    checkoutThanks: "Merci !",
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
};

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

function text(key) {
  return translations[state.language][key];
}

function saveCart() {
  localStorage.setItem("bookblush-cart", JSON.stringify(state.cart));
}

function savePreferences() {
  localStorage.setItem("bookblush-language", state.language);
  localStorage.setItem("bookblush-currency", state.currency);
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function productType(product) {
  return product.category === "bookmark" ? text("itemBookmark") : text("itemKindle");
}

function convertedPrice(cadPrice) {
  return cadPrice * currencyRates[state.currency];
}

function formatMoney(cadPrice) {
  const locale = state.language === "fr" ? "fr-CA" : "en-CA";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: state.currency,
  }).format(convertedPrice(cadPrice));
}

function cartQuantity() {
  return Object.values(state.cart).reduce((sum, qty) => sum + qty, 0);
}

function cartValueCAD() {
  return Object.entries(state.cart).reduce((sum, [id, qty]) => {
    const product = getProduct(id);
    return product ? sum + product.priceCAD * qty : sum;
  }, 0);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

function applyTranslations() {
  document.documentElement.lang = state.language;
  document.title =
    state.language === "fr"
      ? "BookBlush | Marque-pages et Kindle inserts"
      : "BookBlush | Bookmarks and Kindle Inserts";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text(element.dataset.i18n);
  });

  document.querySelectorAll("[data-placeholder]").forEach((element) => {
    element.placeholder = text(element.dataset.placeholder);
  });

  document.querySelector("[data-open-cart]").setAttribute("aria-label", state.language === "fr" ? "Ouvrir le panier" : "Open cart");
  document.querySelector("[data-close-cart]").setAttribute("aria-label", state.language === "fr" ? "Fermer le panier" : "Close cart");
  languageSelect.value = state.language;
  currencySelect.value = state.currency;
}

function renderProducts() {
  Object.entries(productRoots).forEach(([category, root]) => {
    root.innerHTML = products
      .filter((product) => product.category === category)
      .map(
        (product) => `
          <article class="product-card">
            <div class="product-media">
              <img src="${product.image}" alt="${product.name}, ${productType(product)} BookBlush" loading="lazy" />
            </div>
            <div class="product-info">
              <div class="product-meta">
                <div>
                  <h3>${product.name}</h3>
                  <span class="product-type">${productType(product)}</span>
                </div>
                <span class="price">${formatMoney(product.priceCAD)}</span>
              </div>
              <p>${product.descriptions[state.language]}</p>
              <button class="button primary" type="button" data-add="${product.id}">
                ${text("addToCart")}
              </button>
            </div>
          </article>
        `
      )
      .join("");
  });
}

function renderCart() {
  const entries = Object.entries(state.cart).filter(([, qty]) => qty > 0);
  cartCount.textContent = cartQuantity();
  cartTotal.textContent = formatMoney(cartValueCAD());
  cartEmpty.classList.toggle("is-visible", entries.length === 0);

  cartItems.innerHTML = entries
    .map(([id, qty]) => {
      const product = getProduct(id);
      if (!product) return "";
      return `
        <article class="cart-line">
          <img src="${product.image}" alt="" />
          <div>
            <h3>${product.name}</h3>
            <p>${productType(product)} - ${formatMoney(product.priceCAD)}</p>
          </div>
          <div class="qty-controls" aria-label="Quantity for ${product.name}">
            <button type="button" data-decrease="${product.id}" aria-label="Remove one ${product.name}">-</button>
            <span>${qty}</span>
            <button type="button" data-increase="${product.id}" aria-label="Add one ${product.name}">+</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderAll() {
  applyTranslations();
  renderProducts();
  renderCart();
}

function addToCart(id) {
  state.cart[id] = (state.cart[id] || 0) + 1;
  saveCart();
  renderCart();
  const product = getProduct(id);
  showToast(`${product.name} ${text("added")}`);
}

function changeQuantity(id, delta) {
  state.cart[id] = Math.max(0, (state.cart[id] || 0) + delta);
  if (state.cart[id] === 0) {
    delete state.cart[id];
  }
  saveCart();
  renderCart();
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function checkout() {
  const entries = Object.entries(state.cart).filter(([, qty]) => qty > 0);
  if (entries.length === 0) {
    showToast(text("emptyCheckout"));
    return;
  }

  const orderLines = entries.map(([id, qty]) => {
    const product = getProduct(id);
    return `${qty} x ${product.name} (${productType(product)}) - ${formatMoney(product.priceCAD * qty)}`;
  });

  const subject = encodeURIComponent(text("checkoutSubject"));
  const body = encodeURIComponent(
    `${text("checkoutHello")}\n\n${text("checkoutWant")}\n${orderLines.join("\n")}\n\n${text("cartTotal")}: ${formatMoney(
      cartValueCAD()
    )}\n${state.currency}\n\n${text("checkoutName")}\n${text("checkoutAddress")}\n${text("checkoutPayment")}\n\n${text("checkoutThanks")}`
  );
  window.location.href = `mailto:hello@bookblush.example?subject=${subject}&body=${body}`;
}

document.addEventListener("click", (event) => {
  const addButton = event.target.closest("[data-add]");
  const increaseButton = event.target.closest("[data-increase]");
  const decreaseButton = event.target.closest("[data-decrease]");

  if (addButton) {
    addToCart(addButton.dataset.add);
  }

  if (increaseButton) {
    changeQuantity(increaseButton.dataset.increase, 1);
  }

  if (decreaseButton) {
    changeQuantity(decreaseButton.dataset.decrease, -1);
  }
});

languageSelect.addEventListener("change", (event) => {
  state.language = event.target.value;
  savePreferences();
  renderAll();
});

currencySelect.addEventListener("change", (event) => {
  state.currency = event.target.value;
  savePreferences();
  renderAll();
});

document.querySelector("[data-open-cart]").addEventListener("click", openCart);
document.querySelector("[data-close-cart]").addEventListener("click", closeCart);
document.querySelector("[data-checkout]").addEventListener("click", checkout);

cartDrawer.addEventListener("click", (event) => {
  if (event.target === cartDrawer) {
    closeCart();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
  }
});

document.querySelector(".newsletter").addEventListener("submit", (event) => {
  event.preventDefault();
  event.currentTarget.reset();
  showToast(text("newsletterToast"));
});

renderAll();
