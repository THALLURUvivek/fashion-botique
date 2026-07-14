// ---- New Arrivals Page ----
document.addEventListener('DOMContentLoaded', () => {
    const newArrivalsGrid = document.getElementById('newArrivalsGrid');
    const restockCarousel = document.getElementById('restockCarousel');

    if (!newArrivalsGrid) return;

    const products = [
        { id: 2, name: "Cashmere Oversized Sweater", brand: "Nordic Co.", category: "top", price: 195, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&q=80", badge: "new", rating: 4.6, reviews: 89, colors: ["#F5F5DC", "#D3D3D3"], sizes: ["S", "M", "L", "XL"], description: "Ultra-soft cashmere sweater with a relaxed oversized fit." },
        { id: 6, name: "Structured Blazer", brand: "Studio Edit", category: "outerwear", price: 275, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", badge: "new", rating: 4.8, reviews: 94, colors: ["#000000", "#1a1a2e"], sizes: ["XS", "S", "M", "L"], description: "Sharp tailored blazer with structured shoulders." },
        { id: 8, name: "Designer A-Line Dress", brand: "Maison Noir", category: "dress", price: 365, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80", badge: "new", rating: 4.9, reviews: 42, colors: ["#1a1a2e", "#800020"], sizes: ["XS", "S", "M", "L"], description: "Architectural A-line silhouette with modern proportions." },
        { id: 12, name: "Merino Wool Cardigan", brand: "Nordic Co.", category: "top", price: 175, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1610288311735-39b7facbd095?w=600&q=80", badge: "new", rating: 4.5, reviews: 67, colors: ["#F5F5DC", "#808080"], sizes: ["S", "M", "L", "XL"], description: "Luxuriously soft merino cardigan with ribbed trim." },
        { id: 1, name: "Silk Midi Dress", brand: "LUXE Original", category: "dress", price: 289, originalPrice: 349, discount: 17, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", badge: "new", rating: 4.8, reviews: 124, colors: ["#1a1a2e", "#c9a87c"], sizes: ["XS", "S", "M", "L", "XL"], description: "A luxurious silk midi dress with elegant draping." },
        { id: 3, name: "High-Waist Tailored Trousers", brand: "Studio Edit", category: "bottom", price: 165, originalPrice: 210, discount: 21, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", badge: "new", rating: 4.7, reviews: 201, colors: ["#000000", "#1a1a2e"], sizes: ["XS", "S", "M", "L"], description: "Impeccably tailored high-waist trousers with a flattering wide leg." }
    ];

    function generateStars(rating) {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return '<i class="fas fa-star"></i>'.repeat(full) +
               (half ? '<i class="fas fa-star-half-alt"></i>' : '') +
               '<i class="far fa-star"></i>'.repeat(empty);
    }

    function createProductCard(product) {
        return `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badges">
                        ${product.badge ? `<span class="product-badge ${product.badge}">New</span>` : ''}
                    </div>
                    <div class="product-actions">
                        <button class="product-action-btn quick-view" data-id="${product.id}" aria-label="Quick view"><i class="fas fa-eye"></i></button>
                        <button class="product-action-btn add-cart" data-id="${product.id}" aria-label="Add to cart"><i class="fas fa-shopping-bag"></i></button>
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
                    </div>
                </div>
            </div>
        `;
    }

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');
            if (filter === 'all') {
                renderGrid(products);
            } else {
                renderGrid(products.filter(p => p.category === filter));
            }
        });
    });

    function renderGrid(list) {
        newArrivalsGrid.innerHTML = list.map(p => createProductCard(p)).join('');
        attachListeners();
    }

    function renderCarousel(list) {
        restockCarousel.innerHTML = list.map(p => createProductCard(p)).join('');
        attachListeners();
    }

    function attachListeners() {
        document.querySelectorAll('.quick-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (typeof openQuickView === 'function') openQuickView(parseInt(btn.getAttribute('data-id')));
            });
        });
        document.querySelectorAll('.add-cart').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (typeof addToCart === 'function') addToCart(parseInt(btn.getAttribute('data-id')), 1);
            });
        });
    }

    renderGrid(products);
    renderCarousel(products.slice(0, 4));

    // Countdown
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 2);
    function updateCountdown() {
        const diff = endDate - new Date();
        if (diff <= 0) return;
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const el1 = document.getElementById('dropDays');
        const el2 = document.getElementById('dropHours');
        const el3 = document.getElementById('dropMins');
        if (el1) el1.textContent = String(days).padStart(2, '0');
        if (el2) el2.textContent = String(hours).padStart(2, '0');
        if (el3) el3.textContent = String(mins).padStart(2, '0');
    }
    updateCountdown();
    setInterval(updateCountdown, 60000);

    // Notify form
    const notifyForm = document.getElementById('notifyForm');
    if (notifyForm) {
        notifyForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (typeof showToast === 'function') showToast('Subscribed!', 'You will be notified of new drops.', 'success');
            notifyForm.reset();
        });
    }
});