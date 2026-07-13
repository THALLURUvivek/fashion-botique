/* ============================================
   LUXE Fashion Boutique - Main JavaScript
   ============================================ */

// ---- Product Data ----
const products = [
    { id: 1, name: "Silk Midi Dress", brand: "LUXE Original", category: "dress", price: 289, originalPrice: 349, discount: 17, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", images: ["https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80"], badge: "sale", rating: 4.8, reviews: 124, colors: ["#1a1a2e", "#c9a87c", "#8B4513"], sizes: ["XS", "S", "M", "L", "XL"], description: "A luxurious silk midi dress with elegant draping. Perfect for evening occasions and special events.", isNew: false, isHot: false },
    { id: 2, name: "Cashmere Oversized Sweater", brand: "Nordic Co.", category: "top", price: 195, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80", images: ["https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80"], badge: "new", rating: 4.6, reviews: 89, colors: ["#F5F5DC", "#D3D3D3", "#808080"], sizes: ["S", "M", "L", "XL"], description: "Ultra-soft cashmere sweater with a relaxed oversized fit.", isNew: true, isHot: false },
    { id: 3, name: "High-Waist Tailored Trousers", brand: "Studio Edit", category: "bottom", price: 165, originalPrice: 210, discount: 21, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", images: ["https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80"], badge: "sale", rating: 4.7, reviews: 201, colors: ["#000000", "#1a1a2e", "#8B4513"], sizes: ["XS", "S", "M", "L"], description: "Impeccably tailored high-waist trousers with a flattering wide leg.", isNew: false, isHot: false },
    { id: 4, name: "Leather Trench Coat", brand: "Maison Noir", category: "outerwear", price: 495, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", images: ["https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80"], badge: "hot", rating: 4.9, reviews: 67, colors: ["#000000", "#8B4513"], sizes: ["S", "M", "L"], description: "A statement leather trench coat.", isNew: false, isHot: true },
    { id: 5, name: "Pleated Maxi Skirt", brand: "LUXE Original", category: "bottom", price: 145, originalPrice: 180, discount: 19, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80", images: ["https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=800&q=80"], badge: "sale", rating: 4.5, reviews: 156, colors: ["#1a1a2e", "#c9a87c", "#2F4F4F"], sizes: ["XS", "S", "M", "L", "XL"], description: "Flowing pleated maxi skirt that moves beautifully.", isNew: false, isHot: false },
    { id: 6, name: "Structured Blazer", brand: "Studio Edit", category: "outerwear", price: 275, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", images: ["https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80"], badge: "new", rating: 4.8, reviews: 94, colors: ["#000000", "#1a1a2e", "#808080"], sizes: ["XS", "S", "M", "L"], description: "Sharp tailored blazer with structured shoulders.", isNew: true, isHot: false },
    { id: 7, name: "Linen Summer Blouse", brand: "Coastal Line", category: "top", price: 125, originalPrice: 155, discount: 19, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80", images: ["https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=800&q=80"], badge: "sale", rating: 4.4, reviews: 178, colors: ["#F5F5DC", "#FFE4E1", "#E6E6FA"], sizes: ["XS", "S", "M", "L", "XL"], description: "Breezy linen blouse with delicate button details.", isNew: false, isHot: false },
    { id: 8, name: "Designer A-Line Dress", brand: "Maison Noir", category: "dress", price: 365, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80", images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80"], badge: "new", rating: 4.9, reviews: 42, colors: ["#1a1a2e", "#800020", "#000080"], sizes: ["XS", "S", "M", "L"], description: "Architectural A-line silhouette with modern proportions.", isNew: true, isHot: true },
    { id: 9, name: "Quilted Puffer Jacket", brand: "Nordic Co.", category: "outerwear", price: 320, originalPrice: 400, discount: 20, image: "https://images.unsplash.com/photo-1544923246-77307dd270aa?w=600&q=80", images: ["https://images.unsplash.com/photo-1544923246-77307dd270aa?w=800&q=80"], badge: "sale", rating: 4.6, reviews: 213, colors: ["#000000", "#1a1a2e", "#8B0000"], sizes: ["S", "M", "L", "XL"], description: "Insulated quilted jacket with a sleek silhouette.", isNew: false, isHot: false },
    { id: 10, name: "Wide-Leg Jeans", brand: "Coastal Line", category: "bottom", price: 135, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80", images: ["https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80"], badge: null, rating: 4.7, reviews: 302, colors: ["#1E3A5F", "#4169E1", "#000000"], sizes: ["XS", "S", "M", "L", "XL"], description: "Premium denim wide-leg jeans with authentic wash.", isNew: false, isHot: false },
    { id: 11, name: "Embroidered Cocktail Dress", brand: "LUXE Original", category: "dress", price: 425, originalPrice: 520, discount: 18, image: "https://images.unsplash.com/photo-1518622358385-8ea7d38923a0?w=600&q=80", images: ["https://images.unsplash.com/photo-1518622358385-8ea7d38923a0?w=800&q=80"], badge: "sale", rating: 4.9, reviews: 38, colors: ["#1a1a2e", "#800020"], sizes: ["XS", "S", "M", "L"], description: "Hand-embroidered cocktail dress with intricate floral motifs.", isNew: false, isHot: true },
    { id: 12, name: "Merino Wool Cardigan", brand: "Nordic Co.", category: "top", price: 175, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3ea2?w=600&q=80", images: ["https://images.unsplash.com/photo-1434389677669-e08b4cda3ea2?w=800&q=80"], badge: "new", rating: 4.5, reviews: 67, colors: ["#F5F5DC", "#808080", "#000000"], sizes: ["S", "M", "L", "XL"], description: "Luxuriously soft merino cardigan with ribbed trim.", isNew: true, isHot: false }
];

// ---- State ----
let cart = JSON.parse(localStorage.getItem('luxeCart')) || [];
let wishlist = JSON.parse(localStorage.getItem('luxeWishlist')) || [];
let currentFilter = 'all';
let currentProduct = null;
let selectedColor = null;
let selectedSize = null;
let quantity = 1;

// ---- DOM Elements ----
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const searchWrapper = document.getElementById('searchWrapper');
const searchToggle = document.getElementById('searchToggle');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const wishlistBtn = document.getElementById('wishlistBtn');
const cartBadge = document.getElementById('cartBadge');
const wishlistBadge = document.getElementById('wishlistBadge');
const cartSidebar = document.getElementById('cartSidebar');
const wishlistSidebar = document.getElementById('wishlistSidebar');
const closeCart = document.getElementById('closeCart');
const closeWishlist = document.getElementById('closeWishlist');
const cartItems = document.getElementById('cartItems');
const cartFooter = document.getElementById('cartFooter');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const productsGrid = document.getElementById('productsGrid');
const newArrivalsCarousel = document.getElementById('newArrivalsCarousel');
const quickViewModal = document.getElementById('quickViewModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const backToTop = document.getElementById('backToTop');
const toastContainer = document.getElementById('toastContainer');
const preloader = document.getElementById('preloader');
const newsletterForm = document.getElementById('newsletterForm');

// ---- Preloader ----
window.addEventListener('load', () => {
    const counter = document.getElementById('preloaderCounter');
    let count = 0;
    const interval = setInterval(() => {
        count += Math.floor(Math.random() * 15) + 5;
        if (count >= 100) {
            count = 100;
            clearInterval(interval);
            setTimeout(() => {
                if (preloader) preloader.classList.add('hidden');
                document.body.style.overflow = '';
                initAnimations();
            }, 400);
        }
        if (counter) counter.textContent = count + '%';
    }, 80);
});

// ---- Navbar Scroll Effect ----
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (navbar) navbar.classList.toggle('scrolled', scrollY > 50);
    if (backToTop) backToTop.classList.toggle('visible', scrollY > 500);
});

// ---- Mobile Menu ----
if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.classList.toggle('sidebar-open');
    });
}

document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
        if (menuToggle) menuToggle.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    });
});

// ---- Search Toggle ----
if (searchToggle) {
    searchToggle.addEventListener('click', () => {
        searchWrapper.classList.toggle('active');
        if (searchWrapper.classList.contains('active')) searchInput.focus();
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length === 0) { renderProducts(products); return; }
        const filtered = products.filter(p => p.name.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query));
        renderProducts(filtered);
    });
}

// ---- Hero Slides ----
const heroSlides = document.querySelectorAll('.hero-slide');
let currentSlide = 0;

function changeSlide() {
    if (heroSlides.length === 0) return;
    heroSlides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % heroSlides.length;
    heroSlides[currentSlide].classList.add('active');
}
if (heroSlides.length > 0) setInterval(changeSlide, 5000);

// ---- Count Up Animation ----
function animateCountUp() {
    document.querySelectorAll('.stat-number[data-count]').forEach(el => {
        const target = parseInt(el.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { el.textContent = target; clearInterval(timer); }
            else { el.textContent = Math.floor(current); }
        }, 16);
    });
}

const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) { animateCountUp(); heroObserver.disconnect(); } });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);

// ---- Countdown Timer ----
function startCountdown() {
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 7);
    function updateTimer() {
        const diff = endDate - new Date();
        if (diff <= 0) return;
        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        const el = (id) => document.getElementById(id);
        if (el('days')) el('days').textContent = String(d).padStart(2, '0');
        if (el('hours')) el('hours').textContent = String(h).padStart(2, '0');
        if (el('minutes')) el('minutes').textContent = String(m).padStart(2, '0');
        if (el('seconds')) el('seconds').textContent = String(s).padStart(2, '0');
    }
    updateTimer();
    setInterval(updateTimer, 1000);
}
startCountdown();

// ---- Generate Stars ----
function generateStars(rating) {
    const full = Math.floor(rating);
    const half = rating % 1 >= 0.5 ? 1 : 0;
    const empty = 5 - full - half;
    return '<i class="fas fa-star"></i>'.repeat(full) + (half ? '<i class="fas fa-star-half-alt"></i>' : '') + '<i class="far fa-star"></i>'.repeat(empty);
}

// ---- Render Products ----
function renderProducts(productList = products) {
    if (!productsGrid) return;
    productsGrid.innerHTML = productList.map(product => createProductCard(product)).join('');
    attachProductListeners();
}

function createProductCard(product) {
    const stars = generateStars(product.rating);
    const isWishlisted = wishlist.includes(product.id);
    const badgeHtml = product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Sale' : product.badge === 'new' ? 'New' : 'Hot'}</span>` : '';

    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                <div class="product-badges">${badgeHtml}</div>
                <div class="product-actions">
                    <button class="product-action-btn quick-view" data-id="${product.id}" aria-label="Quick view"><i class="fas fa-eye"></i></button>
                    <button class="product-action-btn add-cart" data-id="${product.id}" aria-label="Add to cart"><i class="fas fa-shopping-bag"></i></button>
                    <button class="product-action-btn wishlist-btn-card ${isWishlisted ? 'wishlisted' : ''}" data-id="${product.id}" aria-label="Add to wishlist"><i class="fas fa-heart"></i></button>
                </div>
                <div class="product-colors">${product.colors.map(c => `<span class="color-dot" style="background: ${c}"></span>`).join('')}</div>
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-rating">
                    <div class="product-stars">${stars}</div>
                    <span class="product-reviews">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current">$${product.price}</span>
                    ${product.originalPrice ? `<span class="original">$${product.originalPrice}</span>` : ''}
                    ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                </div>
            </div>
        </div>`;
}

// ---- Filter Tabs ----
document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        currentFilter = tab.getAttribute('data-filter');
        renderProducts(currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter));
    });
});

// ---- New Arrivals Carousel ----
function renderNewArrivals() {
    if (!newArrivalsCarousel) return;
    const newItems = products.filter(p => p.isNew || p.discount > 0).slice(0, 6);
    newArrivalsCarousel.innerHTML = newItems.map(product => createProductCard(product)).join('');
    attachProductListeners();
}

// ---- Product Listeners (Global) ----
function attachProductListeners() {
    document.querySelectorAll('.quick-view').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            openQuickView(id);
        });
    });

    document.querySelectorAll('.add-cart').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            addToCart(id, 1);
            // Animate button
            const icon = btn.querySelector('i');
            btn.classList.add('added');
            if (icon) icon.className = 'fas fa-check';
            setTimeout(() => { btn.classList.remove('added'); if (icon) icon.className = 'fas fa-shopping-bag'; }, 1500);
        });
    });

    document.querySelectorAll('.wishlist-btn-card').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.getAttribute('data-id'));
            toggleWishlist(id);
        });
    });
}

// ---- Quick View Modal ----
function openQuickView(id) {
    const product = products.find(p => p.id === id);
    if (!product || !quickViewModal) return;

    currentProduct = product;
    selectedColor = product.colors[0];
    selectedSize = product.sizes[0];
    quantity = 1;

    document.getElementById('modalImage').src = product.images[0];
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalBrand').textContent = product.brand;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalStars').innerHTML = generateStars(product.rating);
    document.getElementById('modalReviews').textContent = `(${product.reviews} reviews)`;
    document.getElementById('modalPrice').textContent = `$${product.price}`;
    document.getElementById('modalOriginalPrice').textContent = product.originalPrice ? `$${product.originalPrice}` : '';
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('qtyInput').value = 1;

    const badgesContainer = document.getElementById('modalBadges');
    badgesContainer.innerHTML = product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Sale' : product.badge === 'new' ? 'New' : 'Hot'}</span>` : '';

    const colorsContainer = document.getElementById('modalColors');
    colorsContainer.innerHTML = product.colors.map((c, i) =>
        `<span class="color-option ${i === 0 ? 'active' : ''}" style="background: ${c}" data-color="${c}"></span>`
    ).join('');
    colorsContainer.querySelectorAll('.color-option').forEach(opt => {
        opt.addEventListener('click', () => {
            colorsContainer.querySelectorAll('.color-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            selectedColor = opt.getAttribute('data-color');
        });
    });

    const sizesContainer = document.getElementById('modalSizes');
    sizesContainer.innerHTML = product.sizes.map((s, i) =>
        `<span class="size-option ${i === 0 ? 'active' : ''}" data-size="${s}">${s}</span>`
    ).join('');
    sizesContainer.querySelectorAll('.size-option').forEach(opt => {
        opt.addEventListener('click', () => {
            sizesContainer.querySelectorAll('.size-option').forEach(o => o.classList.remove('active'));
            opt.classList.add('active');
            selectedSize = opt.getAttribute('data-size');
        });
    });

    quickViewModal.classList.add('open');
    document.body.classList.add('modal-open');
}

function closeQuickView() {
    if (quickViewModal) quickViewModal.classList.remove('open');
    document.body.classList.remove('modal-open');
    currentProduct = null;
}

if (modalClose) modalClose.addEventListener('click', closeQuickView);
if (modalOverlay) modalOverlay.addEventListener('click', closeQuickView);

const qtyMinus = document.getElementById('qtyMinus');
const qtyPlus = document.getElementById('qtyPlus');
const qtyInput = document.getElementById('qtyInput');

if (qtyMinus) qtyMinus.addEventListener('click', () => {
    if (parseInt(qtyInput.value) > 1) { qtyInput.value = parseInt(qtyInput.value) - 1; quantity = parseInt(qtyInput.value); }
});
if (qtyPlus) qtyPlus.addEventListener('click', () => {
    if (parseInt(qtyInput.value) < 10) { qtyInput.value = parseInt(qtyInput.value) + 1; quantity = parseInt(qtyInput.value); }
});
if (qtyInput) qtyInput.addEventListener('change', (e) => {
    quantity = Math.max(1, Math.min(10, parseInt(e.target.value) || 1));
    e.target.value = quantity;
});

const addToCartModal = document.getElementById('addToCartModal');
if (addToCartModal) {
    addToCartModal.addEventListener('click', () => {
        if (currentProduct) { addToCart(currentProduct.id, quantity, selectedColor, selectedSize); closeQuickView(); }
    });
}

const addWishlistModal = document.getElementById('addWishlistModal');
if (addWishlistModal) {
    addWishlistModal.addEventListener('click', () => {
        if (currentProduct) toggleWishlist(currentProduct.id);
    });
}

// ---- Cart Functions ----
function addToCart(id, qty = 1, color = null, size = null) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    const existingIndex = cart.findIndex(item =>
        item.id === id && item.color === (color || product.colors[0]) && item.size === (size || product.sizes[0])
    );

    if (existingIndex > -1) {
        cart[existingIndex].qty += qty;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            color: color || product.colors[0],
            size: size || product.sizes[0],
            qty: qty
        });
    }

    saveCart();
    updateCartUI();
    showToast('Added to Bag', `${product.name} (${qty > 1 ? 'x' + qty : ''}) has been added to your bag.`, 'success');
    openSidebar('cart');

    // Badge animation
    if (cartBadge) {
        cartBadge.classList.add('bounce');
        setTimeout(() => cartBadge.classList.remove('bounce'), 600);
    }
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
    if (item) showToast('Removed', `${item.name} removed from your bag.`, 'warning');
}

function updateCartItemQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        removeFromCart(index);
    } else {
        saveCart();
        updateCartUI();
    }
}

function clearCart() {
    cart = [];
    saveCart();
    updateCartUI();
    showToast('Cart Cleared', 'Your shopping bag has been emptied.', 'warning');
}

function saveCart() {
    localStorage.setItem('luxeCart', JSON.stringify(cart));
}

function getCartTotal() {
    return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
    return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartUI() {
    const totalItems = getCartCount();
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.classList.toggle('visible', totalItems > 0);
    }
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) cartCount.textContent = `(${totalItems})`;

    if (!cartItems || !cartFooter) return;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your bag is empty</p>
                <a href="collections.html" class="btn btn-primary">Start Shopping</a>
            </div>`;
        cartFooter.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
                <div class="cart-item-info">
                    <span class="cart-item-brand">${item.brand}</span>
                    <h4 class="cart-item-name">${item.name}</h4>
                    <p class="cart-item-options">Color: ${item.color} | Size: ${item.size}</p>
                    <div class="cart-item-bottom">
                        <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
                        <div class="cart-item-qty">
                            <button onclick="updateCartItemQty(${index}, -1)"><i class="fas fa-minus"></i></button>
                            <span>${item.qty}</span>
                            <button onclick="updateCartItemQty(${index}, 1)"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})" aria-label="Remove item"><i class="fas fa-trash-alt"></i></button>
            </div>
        `).join('');

        const subtotal = getCartTotal();
        document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
        document.getElementById('total').textContent = `$${subtotal.toFixed(2)}`;
        cartFooter.style.display = 'block';
    }
}

// ---- Wishlist Functions ----
function toggleWishlist(id) {
    const index = wishlist.indexOf(id);
    const product = products.find(p => p.id === id);

    if (index > -1) {
        wishlist.splice(index, 1);
        showToast('Removed from Wishlist', `${product.name} removed from your wishlist.`, 'warning');
    } else {
        wishlist.push(id);
        showToast('Added to Wishlist', `${product.name} added to your wishlist.`, 'success');
    }

    localStorage.setItem('luxeWishlist', JSON.stringify(wishlist));
    updateWishlistUI();
    renderProducts(currentFilter === 'all' ? products : products.filter(p => p.category === currentFilter));
}

function updateWishlistUI() {
    const count = wishlist.length;
    if (wishlistBadge) {
        wishlistBadge.textContent = count;
        wishlistBadge.classList.toggle('visible', count > 0);
    }

    const container = document.getElementById('wishlistItems');
    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = '<div class="empty-wishlist"><i class="fas fa-heart"></i><p>Your wishlist is empty</p></div>';
    } else {
        container.innerHTML = wishlist.map(id => {
            const product = products.find(p => p.id === id);
            if (!product) return '';
            return `
                <div class="cart-item">
                    <div class="cart-item-image"><img src="${product.image}" alt="${product.name}"></div>
                    <div class="cart-item-info">
                        <span class="cart-item-brand">${product.brand}</span>
                        <h4 class="cart-item-name">${product.name}</h4>
                        <div class="cart-item-bottom">
                            <span class="cart-item-price">$${product.price}</span>
                            <button class="btn btn-primary" style="padding: 8px 16px; font-size: 0.75rem;" onclick="addToCart(${product.id}, 1)">Add to Bag</button>
                        </div>
                    </div>
                    <button class="cart-item-remove" onclick="toggleWishlist(${product.id})" aria-label="Remove from wishlist"><i class="fas fa-trash-alt"></i></button>
                </div>`;
        }).join('');
    }
}

// ---- Sidebar Functions ----
function openSidebar(type) {
    if (type === 'cart') cartSidebar?.classList.add('open');
    else wishlistSidebar?.classList.add('open');
    sidebarOverlay?.classList.add('active');
    document.body.classList.add('sidebar-open');
}

function closeSidebar(type) {
    if (type === 'cart') cartSidebar?.classList.remove('open');
    else wishlistSidebar?.classList.remove('open');
    sidebarOverlay?.classList.remove('active');
    document.body.classList.remove('sidebar-open');
}

if (cartBtn) cartBtn.addEventListener('click', () => openSidebar('cart'));
if (wishlistBtn) wishlistBtn.addEventListener('click', () => openSidebar('wishlist'));
if (closeCart) closeCart.addEventListener('click', () => closeSidebar('cart'));
if (closeWishlist) closeWishlist.addEventListener('click', () => closeSidebar('wishlist'));
if (sidebarOverlay) sidebarOverlay.addEventListener('click', () => { closeSidebar('cart'); closeSidebar('wishlist'); });

// ---- Checkout Button ----
const checkoutBtn = document.getElementById('checkoutBtn');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        const total = getCartTotal();
        if (total === 0) {
            showToast('Empty Bag', 'Add items to your bag before checking out.', 'warning');
        } else {
            showToast('Order Placed!', `Your order of $${total.toFixed(2)} has been placed successfully.`, 'success');
            cart = [];
            saveCart();
            updateCartUI();
            setTimeout(() => closeSidebar('cart'), 1500);
        }
    });
}

// ---- Newsletter ----
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input').value;
        if (email) {
            showToast('Subscribed!', 'You have been added to our mailing list.', 'success');
            e.target.reset();
        }
    });
}

// ---- Toast Notifications ----
function showToast(title, message, type = 'success') {
    if (!toastContainer) return;
    const icons = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', warning: 'fas fa-exclamation-triangle' };

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <i class="toast-icon ${icons[type]}"></i>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" aria-label="Close"><i class="fas fa-times"></i></button>`;

    toastContainer.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => removeToast(toast));
    setTimeout(() => removeToast(toast), 4000);
}

function removeToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
}

// ---- Back to Top ----
if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---- Scroll Animations ----
function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.getAttribute('data-delay') || 0;
                setTimeout(() => entry.target.classList.add('animated'), parseInt(delay));
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    const selectors = '.category-card, .product-card, .trending-card, .feature-card, .lookbook-item, .section-header, .newsletter-content';
    document.querySelectorAll(selectors).forEach((el, index) => {
        const parent = el.parentElement;
        const siblings = parent ? parent.querySelectorAll(el.tagName.toLowerCase()) : [];
        const siblingIndex = Array.from(siblings).indexOf(el);
        const staggerDelay = siblingIndex >= 0 ? siblingIndex * 80 : 0;

        el.style.opacity = '0';
        el.style.transform = 'translateY(40px) scale(0.97)';
        el.style.transition = `opacity 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${staggerDelay}ms, transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275) ${staggerDelay}ms`;
        fadeObserver.observe(el);
    });
}

// ---- Keyboard Events ----
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeQuickView();
        closeSidebar('cart');
        closeSidebar('wishlist');
        if (menuToggle) menuToggle.classList.remove('active');
        if (mobileMenu) mobileMenu.classList.remove('active');
        document.body.classList.remove('sidebar-open');
    }
});

// ---- Active Nav Link on Scroll ----
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (scrollY >= top && scrollY < top + height) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
            });
        }
    });
});

// ---- Global sync for shop.js ----
window.syncCartFromShop = function(externalCart) {
    cart = externalCart;
    saveCart();
    updateCartUI();
};

// ---- Initialize ----
renderProducts();
renderNewArrivals();
updateCartUI();
updateWishlistUI();
