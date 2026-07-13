// ---- Shop Page Functionality ----
document.addEventListener('DOMContentLoaded', () => {
    const shopProductsGrid = document.getElementById('shopProductsGrid');
    const priceRange = document.getElementById('priceRange');
    const priceValue = document.getElementById('priceValue');
    const sortSelect = document.getElementById('sortSelect');
    const productCount = document.getElementById('productCount');
    const filterToggle = document.getElementById('filterToggle');
    const shopSidebar = document.getElementById('shopSidebar');
    const applyFilters = document.getElementById('applyFilters');
    const clearFilters = document.getElementById('clearFilters');
    const paginationEl = document.querySelector('.pagination');

    if (!shopProductsGrid) return;

    // ---- Extended Product Data ----
    const allProducts = [
        { id: 1, name: "Silk Midi Dress", brand: "LUXE Original", category: "dress", price: 289, originalPrice: 349, discount: 17, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", badge: "sale", rating: 4.8, reviews: 124, colors: ["#1a1a2e", "#c9a87c", "#8B4513"], sizes: ["XS", "S", "M", "L", "XL"], description: "A luxurious silk midi dress with elegant draping. Perfect for evening occasions.", isNew: false },
        { id: 2, name: "Cashmere Oversized Sweater", brand: "Nordic Co.", category: "top", price: 195, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80", badge: "new", rating: 4.6, reviews: 89, colors: ["#F5F5DC", "#D3D3D3", "#808080"], sizes: ["S", "M", "L", "XL"], description: "Ultra-soft cashmere sweater with a relaxed oversized fit.", isNew: true },
        { id: 3, name: "High-Waist Tailored Trousers", brand: "Studio Edit", category: "bottom", price: 165, originalPrice: 210, discount: 21, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", badge: "sale", rating: 4.7, reviews: 201, colors: ["#000000", "#1a1a2e", "#8B4513"], sizes: ["XS", "S", "M", "L"], description: "Impeccably tailored high-waist trousers with a flattering wide leg.", isNew: false },
        { id: 4, name: "Leather Trench Coat", brand: "Maison Noir", category: "outerwear", price: 495, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", badge: "hot", rating: 4.9, reviews: 67, colors: ["#000000", "#8B4513"], sizes: ["S", "M", "L"], description: "A statement leather trench coat. Timeless design meets modern craftsmanship.", isNew: false },
        { id: 5, name: "Pleated Maxi Skirt", brand: "LUXE Original", category: "bottom", price: 145, originalPrice: 180, discount: 19, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80", badge: "sale", rating: 4.5, reviews: 156, colors: ["#1a1a2e", "#c9a87c", "#2F4F4F"], sizes: ["XS", "S", "M", "L", "XL"], description: "Flowing pleated maxi skirt that moves beautifully.", isNew: false },
        { id: 6, name: "Structured Blazer", brand: "Studio Edit", category: "outerwear", price: 275, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", badge: "new", rating: 4.8, reviews: 94, colors: ["#000000", "#1a1a2e", "#808080"], sizes: ["XS", "S", "M", "L"], description: "Sharp tailored blazer with structured shoulders.", isNew: true },
        { id: 7, name: "Linen Summer Blouse", brand: "Coastal Line", category: "top", price: 125, originalPrice: 155, discount: 19, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80", badge: "sale", rating: 4.4, reviews: 178, colors: ["#F5F5DC", "#FFE4E1", "#E6E6FA"], sizes: ["XS", "S", "M", "L", "XL"], description: "Breezy linen blouse with delicate button details.", isNew: false },
        { id: 8, name: "Designer A-Line Dress", brand: "Maison Noir", category: "dress", price: 365, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80", badge: "new", rating: 4.9, reviews: 42, colors: ["#1a1a2e", "#800020", "#000080"], sizes: ["XS", "S", "M", "L"], description: "Architectural A-line silhouette with modern proportions.", isNew: true },
        { id: 9, name: "Quilted Puffer Jacket", brand: "Nordic Co.", category: "outerwear", price: 320, originalPrice: 400, discount: 20, image: "https://images.unsplash.com/photo-1544923246-77307dd270aa?w=600&q=80", badge: "sale", rating: 4.6, reviews: 213, colors: ["#000000", "#1a1a2e", "#8B0000"], sizes: ["S", "M", "L", "XL"], description: "Insulated quilted jacket with a sleek silhouette.", isNew: false },
        { id: 10, name: "Wide-Leg Jeans", brand: "Coastal Line", category: "bottom", price: 135, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80", badge: null, rating: 4.7, reviews: 302, colors: ["#1E3A5F", "#4169E1", "#000000"], sizes: ["XS", "S", "M", "L", "XL"], description: "Premium denim wide-leg jeans with authentic wash.", isNew: false },
        { id: 11, name: "Embroidered Cocktail Dress", brand: "LUXE Original", category: "dress", price: 425, originalPrice: 520, discount: 18, image: "https://images.unsplash.com/photo-1518622358385-8ea7d38923a0?w=600&q=80", badge: "sale", rating: 4.9, reviews: 38, colors: ["#1a1a2e", "#800020"], sizes: ["XS", "S", "M", "L"], description: "Hand-embroidered cocktail dress with intricate floral motifs.", isNew: false },
        { id: 12, name: "Merino Wool Cardigan", brand: "Nordic Co.", category: "top", price: 175, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3ea2?w=600&q=80", badge: "new", rating: 4.5, reviews: 67, colors: ["#F5F5DC", "#808080", "#000000"], sizes: ["S", "M", "L", "XL"], description: "Luxuriously soft merino cardigan with ribbed trim.", isNew: true },
        { id: 13, name: "Velvet Evening Gown", brand: "Maison Noir", category: "dress", price: 580, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=600&q=80", badge: "new", rating: 4.9, reviews: 24, colors: ["#800020", "#1a1a2e", "#000080"], sizes: ["XS", "S", "M", "L"], description: "Luxurious velvet evening gown with a dramatic train.", isNew: true },
        { id: 14, name: "Cropped Denim Jacket", brand: "Coastal Line", category: "outerwear", price: 155, originalPrice: 195, discount: 21, image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=600&q=80", badge: "sale", rating: 4.6, reviews: 143, colors: ["#4169E1", "#1a1a2e", "#D3D3D3"], sizes: ["XS", "S", "M", "L", "XL"], description: "Trendy cropped denim jacket with distressed details.", isNew: false },
        { id: 15, name: "Silk Camisole Top", brand: "LUXE Original", category: "top", price: 98, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80", badge: null, rating: 4.7, reviews: 267, colors: ["#F5F5DC", "#FFE4E1", "#1a1a2e"], sizes: ["XS", "S", "M", "L"], description: "Delicate silk camisole with lace trim. A layering essential.", isNew: false },
        { id: 16, name: "Wool Blend Coat", brand: "Nordic Co.", category: "outerwear", price: 385, originalPrice: 450, discount: 14, image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=600&q=80", badge: "sale", rating: 4.8, reviews: 89, colors: ["#808080", "#1a1a2e", "#8B4513"], sizes: ["S", "M", "L", "XL"], description: "Classic wool blend coat with a belted waist.", isNew: false },
        { id: 17, name: "Floral Wrap Dress", brand: "Coastal Line", category: "dress", price: 185, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80", badge: null, rating: 4.6, reviews: 178, colors: ["#FFE4E1", "#E6E6FA", "#F5F5DC"], sizes: ["XS", "S", "M", "L", "XL"], description: "Romantic floral wrap dress with flutter sleeves.", isNew: false },
        { id: 18, name: "Leather Ankle Boots", brand: "Maison Noir", category: "bottom", price: 325, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80", badge: "new", rating: 4.9, reviews: 56, colors: ["#000000", "#8B4513"], sizes: ["S", "M", "L"], description: "Handcrafted leather ankle boots with a block heel.", isNew: true },
        { id: 19, name: "Oversized Trench", brand: "Studio Edit", category: "outerwear", price: 340, originalPrice: 420, discount: 19, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", badge: "sale", rating: 4.7, reviews: 112, colors: ["#8B4513", "#000000", "#D3D3D3"], sizes: ["S", "M", "L"], description: "Relaxed oversized trench coat for effortless layering.", isNew: false },
        { id: 20, name: "Pleated Blouse", brand: "Studio Edit", category: "top", price: 145, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=600&q=80", badge: null, rating: 4.5, reviews: 98, colors: ["#FFFFFF", "#F5F5DC", "#E6E6FA"], sizes: ["XS", "S", "M", "L", "XL"], description: "Elegant pleated blouse with a high neckline.", isNew: false },
        { id: 21, name: "Satin Slip Dress", brand: "LUXE Original", category: "dress", price: 225, originalPrice: 280, discount: 20, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", badge: "sale", rating: 4.8, reviews: 145, colors: ["#1a1a2e", "#800020", "#c9a87c"], sizes: ["XS", "S", "M", "L"], description: "Lustrous satin slip dress with delicate straps.", isNew: false },
        { id: 22, name: "Knit Midi Skirt", brand: "Nordic Co.", category: "bottom", price: 130, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=600&q=80", badge: null, rating: 4.4, reviews: 87, colors: ["#808080", "#1a1a2e", "#F5F5DC"], sizes: ["XS", "S", "M", "L", "XL"], description: "Comfortable knit midi skirt with a ribbed texture.", isNew: false },
        { id: 23, name: "Lace Trim Cardigan", brand: "LUXE Original", category: "top", price: 165, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1434389677669-e08b4cda3ea2?w=600&q=80", badge: "new", rating: 4.6, reviews: 54, colors: ["#F5F5DC", "#FFE4E1", "#808080"], sizes: ["S", "M", "L", "XL"], description: "Delicate cardigan with lace trim details.", isNew: true },
        { id: 24, name: "Double-Breasted Blazer", brand: "Studio Edit", category: "outerwear", price: 310, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", badge: null, rating: 4.8, reviews: 76, colors: ["#000000", "#1a1a2e", "#800080"], sizes: ["XS", "S", "M", "L"], description: "Power blazer with double-breasted gold buttons.", isNew: false }
    ];

    // ---- State ----
    const ITEMS_PER_PAGE = 8;
    let currentPage = 1;
    let filteredProducts = [...allProducts];
    let totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

    // ---- Cart (use global if available, else local) ----
    let cart = JSON.parse(localStorage.getItem('luxeCart')) || [];
    let wishlist = JSON.parse(localStorage.getItem('luxeWishlist')) || [];

    function saveCart() { localStorage.setItem('luxeCart', JSON.stringify(cart)); }
    function saveWishlist() { localStorage.setItem('luxeWishlist', JSON.stringify(wishlist)); }

    function getCartCount() { return cart.reduce((s, i) => s + i.qty, 0); }

    function updateBadges() {
        const cartBadge = document.getElementById('cartBadge');
        const wishlistBadge = document.getElementById('wishlistBadge');
        if (cartBadge) { cartBadge.textContent = getCartCount(); cartBadge.classList.toggle('visible', getCartCount() > 0); }
        if (wishlistBadge) { wishlistBadge.textContent = wishlist.length; wishlistBadge.classList.toggle('visible', wishlist.length > 0); }
    }

    function addToCartLocal(id, qty = 1) {
        const product = allProducts.find(p => p.id === id);
        if (!product) return;
        const existing = cart.findIndex(item => item.id === id);
        if (existing > -1) { cart[existing].qty += qty; }
        else { cart.push({ id: product.id, name: product.name, brand: product.brand, price: product.price, image: product.image, color: product.colors[0], size: product.sizes[0], qty }); }
        saveCart();
        updateBadges();
        showToastLocal('Added to Bag', `${product.name} has been added to your bag.`, 'success');
        // Also update main app cart if available
        if (typeof window.syncCartFromShop === 'function') window.syncCartFromShop(cart);
    }

    function toggleWishlistLocal(id) {
        const idx = wishlist.indexOf(id);
        const product = allProducts.find(p => p.id === id);
        if (idx > -1) { wishlist.splice(idx, 1); showToastLocal('Removed', `${product.name} removed from wishlist.`, 'warning'); }
        else { wishlist.push(id); showToastLocal('Added to Wishlist', `${product.name} added to your wishlist.`, 'success'); }
        saveWishlist();
        updateBadges();
        renderPage();
    }

    // ---- Toast ----
    function showToastLocal(title, message, type = 'success') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;
        const icons = { success: 'fas fa-check-circle', error: 'fas fa-exclamation-circle', warning: 'fas fa-exclamation-triangle' };
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <i class="toast-icon ${icons[type]}"></i>
            <div class="toast-content"><div class="toast-title">${title}</div><div class="toast-message">${message}</div></div>
            <button class="toast-close" aria-label="Close"><i class="fas fa-times"></i></button>`;
        toastContainer.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('show'));
        toast.querySelector('.toast-close').addEventListener('click', () => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); });
        setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 400); }, 3000);
    }

    // ---- Stars ----
    function generateStars(rating) {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return '<i class="fas fa-star"></i>'.repeat(full) + (half ? '<i class="fas fa-star-half-alt"></i>' : '') + '<i class="far fa-star"></i>'.repeat(empty);
    }

    // ---- Render ----
    function renderPage() {
        const start = (currentPage - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE;
        const pageProducts = filteredProducts.slice(start, end);
        totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

        shopProductsGrid.innerHTML = pageProducts.map(product => {
            const isWished = wishlist.includes(product.id);
            return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badges">
                        ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Sale' : product.badge === 'new' ? 'New' : 'Hot'}</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="product-action-btn quick-view" data-id="${product.id}" aria-label="Quick view"><i class="fas fa-eye"></i></button>
                        <button class="product-action-btn add-cart" data-id="${product.id}" aria-label="Add to cart"><i class="fas fa-shopping-bag"></i></button>
                        <button class="product-action-btn wishlist-btn-card ${isWished ? 'wishlisted' : ''}" data-id="${product.id}" aria-label="Add to wishlist"><i class="fas fa-heart"></i></button>
                    </div>
                </div>
                <div class="product-info">
                    <span class="product-brand">${product.brand}</span>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-rating">
                        <div class="product-stars">${generateStars(product.rating)}</div>
                        <span class="product-reviews">(${product.reviews})</span>
                    </div>
                    <div class="product-price">
                        <span class="current">$${product.price}</span>
                        ${product.originalPrice ? `<span class="original">$${product.originalPrice}</span>` : ''}
                        ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                    </div>
                </div>
            </div>`;
        }).join('');

        productCount.textContent = filteredProducts.length;
        renderPagination();
        attachProductListeners();
        // Scroll to top of products
        shopProductsGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ---- Pagination ----
    function renderPagination() {
        if (!paginationEl) return;
        let html = '';

        html += `<button class="page-btn prev ${currentPage === 1 ? 'disabled' : ''}" data-page="prev"><i class="fas fa-chevron-left"></i></button>`;

        for (let i = 1; i <= totalPages; i++) {
            html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        }

        html += `<button class="page-btn next ${currentPage === totalPages ? 'disabled' : ''}" data-page="next"><i class="fas fa-chevron-right"></i></button>`;

        paginationEl.innerHTML = html;

        paginationEl.querySelectorAll('.page-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const page = btn.getAttribute('data-page');
                if (page === 'prev' && currentPage > 1) { currentPage--; renderPage(); }
                else if (page === 'next' && currentPage < totalPages) { currentPage++; renderPage(); }
                else if (page !== 'prev' && page !== 'next') { currentPage = parseInt(page); renderPage(); }
            });
        });
    }

    // ---- Product Card Listeners ----
    function attachProductListeners() {
        document.querySelectorAll('.quick-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                if (typeof openQuickView === 'function') openQuickView(id);
            });
        });

        document.querySelectorAll('.add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                addToCartLocal(id, 1);
                // Add button animation
                btn.classList.add('added');
                btn.innerHTML = '<i class="fas fa-check"></i>';
                setTimeout(() => { btn.classList.remove('added'); btn.innerHTML = '<i class="fas fa-shopping-bag"></i>'; }, 1500);
            });
        });

        document.querySelectorAll('.wishlist-btn-card').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(btn.getAttribute('data-id'));
                toggleWishlistLocal(id);
            });
        });
    }

    // ---- Apply Filters ----
    function applyAllFilters() {
        filteredProducts = [...allProducts];

        // Category
        const checkedCategories = [];
        document.querySelectorAll('.filter-options .filter-checkbox input:checked').forEach(cb => {
            const val = cb.closest('.filter-checkbox').textContent.trim().toLowerCase();
            if (val.includes('dress')) checkedCategories.push('dress');
            else if (val.includes('top')) checkedCategories.push('top');
            else if (val.includes('bottom')) checkedCategories.push('bottom');
            else if (val.includes('outerwear')) checkedCategories.push('outerwear');
        });
        if (checkedCategories.length > 0) {
            filteredProducts = filteredProducts.filter(p => checkedCategories.includes(p.category));
        }

        // Price
        const maxPrice = parseInt(priceRange.value);
        filteredProducts = filteredProducts.filter(p => p.price <= maxPrice);

        // Sizes
        const activeSizes = [];
        document.querySelectorAll('.size-btn.active').forEach(btn => activeSizes.push(btn.getAttribute('data-size')));
        if (activeSizes.length > 0) {
            filteredProducts = filteredProducts.filter(p => p.sizes.some(s => activeSizes.includes(s)));
        }

        // Colors
        const activeColors = [];
        document.querySelectorAll('.color-filter.active').forEach(btn => activeColors.push(btn.getAttribute('data-color')));
        if (activeColors.length > 0) {
            filteredProducts = filteredProducts.filter(p => p.colors.some(c => activeColors.includes(c)));
        }

        // Brands
        const checkedBrands = [];
        document.querySelectorAll('.filter-group:last-of-type .filter-checkbox input:checked').forEach(cb => {
            checkedBrands.push(cb.closest('.filter-checkbox').textContent.trim().toLowerCase());
        });
        if (checkedBrands.length > 0) {
            filteredProducts = filteredProducts.filter(p => {
                const brandLower = p.brand.toLowerCase();
                return checkedBrands.some(b => brandLower.includes(b.split(' ')[0]));
            });
        }

        // Sort
        applySort();

        currentPage = 1;
        renderPage();
    }

    function applySort() {
        const sort = sortSelect ? sortSelect.value : 'featured';
        if (sort === 'price-low') filteredProducts.sort((a, b) => a.price - b.price);
        else if (sort === 'price-high') filteredProducts.sort((a, b) => b.price - a.price);
        else if (sort === 'rating') filteredProducts.sort((a, b) => b.rating - a.rating);
        else if (sort === 'newest') filteredProducts.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    // ---- Event Listeners ----

    // Apply filters button
    if (applyFilters) applyFilters.addEventListener('click', applyAllFilters);

    // Clear filters button
    if (clearFilters) {
        clearFilters.addEventListener('click', () => {
            document.querySelectorAll('.filter-checkbox input').forEach(cb => cb.checked = false);
            document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.color-filter').forEach(btn => btn.classList.remove('active'));
            if (priceRange) { priceRange.value = 500; priceValue.textContent = '$500'; }
            if (sortSelect) sortSelect.value = 'featured';
            filteredProducts = [...allProducts];
            currentPage = 1;
            renderPage();
            showToastLocal('Filters Cleared', 'All filters have been reset.', 'success');
        });
    }

    // Price range live update
    if (priceRange) {
        priceRange.addEventListener('input', (e) => { priceValue.textContent = `$${e.target.value}`; });
    }

    // Sort change
    if (sortSelect) {
        sortSelect.addEventListener('change', () => { applyAllFilters(); });
    }

    // Size buttons toggle
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.addEventListener('click', () => btn.classList.toggle('active'));
    });

    // Color filters toggle
    document.querySelectorAll('.color-filter').forEach(btn => {
        btn.addEventListener('click', () => btn.classList.toggle('active'));
    });

    // View toggle
    document.querySelectorAll('.view-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            shopProductsGrid.classList.toggle('list-view', btn.getAttribute('data-view') === 'list');
        });
    });

    // Mobile filter toggle
    if (filterToggle) {
        filterToggle.addEventListener('click', () => shopSidebar.classList.toggle('active'));
    }

    // Sidebar overlay
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => {
            document.getElementById('cartSidebar')?.classList.remove('open');
            document.getElementById('wishlistSidebar')?.classList.remove('open');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Cart sidebar
    const cartBtn = document.getElementById('cartBtn');
    const closeCart = document.getElementById('closeCart');
    const cartSidebarEl = document.getElementById('cartSidebar');
    if (cartBtn) cartBtn.addEventListener('click', () => { renderCartSidebar(); cartSidebarEl?.classList.add('open'); sidebarOverlay?.classList.add('active'); });
    if (closeCart) closeCart.addEventListener('click', () => { cartSidebarEl?.classList.remove('open'); sidebarOverlay?.classList.remove('active'); });

    function renderCartSidebar() {
        const cartItemsEl = document.getElementById('cartItems');
        const cartFooterEl = document.getElementById('cartFooter');
        const cartCountEl = document.querySelector('.cart-count');
        if (cartCountEl) cartCountEl.textContent = `(${getCartCount()})`;

        if (cart.length === 0) {
            if (cartItemsEl) cartItemsEl.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-bag"></i><p>Your bag is empty</p><a href="collections.html" class="btn btn-primary">Start Shopping</a></div>';
            if (cartFooterEl) cartFooterEl.style.display = 'none';
            return;
        }

        if (cartItemsEl) {
            cartItemsEl.innerHTML = cart.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-image"><img src="${item.image}" alt="${item.name}"></div>
                    <div class="cart-item-info">
                        <span class="cart-item-brand">${item.brand}</span>
                        <h4 class="cart-item-name">${item.name}</h4>
                        <p class="cart-item-options">Color: ${item.color} | Size: ${item.size}</p>
                        <div class="cart-item-bottom">
                            <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
                            <div class="cart-item-qty">
                                <button class="cart-qty-btn" data-index="${index}" data-delta="-1"><i class="fas fa-minus"></i></button>
                                <span>${item.qty}</span>
                                <button class="cart-qty-btn" data-index="${index}" data-delta="1"><i class="fas fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    <button class="cart-item-remove" data-index="${index}" aria-label="Remove item"><i class="fas fa-trash-alt"></i></button>
                </div>
            `).join('');

            // Cart qty buttons
            cartItemsEl.querySelectorAll('.cart-qty-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.getAttribute('data-index'));
                    const delta = parseInt(btn.getAttribute('data-delta'));
                    cart[idx].qty += delta;
                    if (cart[idx].qty <= 0) cart.splice(idx, 1);
                    saveCart(); updateBadges(); renderCartSidebar();
                });
            });

            // Remove buttons
            cartItemsEl.querySelectorAll('.cart-item-remove').forEach(btn => {
                btn.addEventListener('click', () => {
                    const idx = parseInt(btn.getAttribute('data-index'));
                    cart.splice(idx, 1);
                    saveCart(); updateBadges(); renderCartSidebar();
                });
            });
        }

        const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
        const subtotalEl = document.getElementById('subtotal');
        const totalEl = document.getElementById('total');
        if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (totalEl) totalEl.textContent = `$${subtotal.toFixed(2)}`;
        if (cartFooterEl) cartFooterEl.style.display = 'block';
    }

    // Wishlist sidebar
    const wishlistBtn = document.getElementById('wishlistBtn');
    const closeWishlist = document.getElementById('closeWishlist');
    const wishlistSidebarEl = document.getElementById('wishlistSidebar');
    if (wishlistBtn) wishlistBtn.addEventListener('click', () => { renderWishlistSidebar(); wishlistSidebarEl?.classList.add('open'); sidebarOverlay?.classList.add('active'); });
    if (closeWishlist) closeWishlist.addEventListener('click', () => { wishlistSidebarEl?.classList.remove('open'); sidebarOverlay?.classList.remove('active'); });

    function renderWishlistSidebar() {
        const container = document.getElementById('wishlistItems');
        if (!container) return;
        if (wishlist.length === 0) {
            container.innerHTML = '<div class="empty-wishlist"><i class="fas fa-heart"></i><p>Your wishlist is empty</p></div>';
            return;
        }
        container.innerHTML = wishlist.map(id => {
            const p = allProducts.find(x => x.id === id);
            if (!p) return '';
            return `
                <div class="cart-item">
                    <div class="cart-item-image"><img src="${p.image}" alt="${p.name}"></div>
                    <div class="cart-item-info">
                        <span class="cart-item-brand">${p.brand}</span>
                        <h4 class="cart-item-name">${p.name}</h4>
                        <div class="cart-item-bottom">
                            <span class="cart-item-price">$${p.price}</span>
                            <button class="btn btn-primary wish-add-btn" data-id="${p.id}" style="padding:8px 16px;font-size:0.75rem;">Add to Bag</button>
                        </div>
                    </div>
                    <button class="cart-item-remove wish-remove-btn" data-id="${p.id}" aria-label="Remove"><i class="fas fa-trash-alt"></i></button>
                </div>`;
        }).join('');

        container.querySelectorAll('.wish-add-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                addToCartLocal(id, 1);
                // Remove from wishlist after adding to cart
                const idx = wishlist.indexOf(id);
                if (idx > -1) wishlist.splice(idx, 1);
                saveWishlist(); updateBadges(); renderWishlistSidebar(); renderPage();
            });
        });

        container.querySelectorAll('.wish-remove-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = parseInt(btn.getAttribute('data-id'));
                const idx = wishlist.indexOf(id);
                if (idx > -1) wishlist.splice(idx, 1);
                saveWishlist(); updateBadges(); renderWishlistSidebar(); renderPage();
            });
        });
    }

    // ---- Initialize ----
    updateBadges();
    renderPage();
});
