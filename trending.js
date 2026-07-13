// ---- Trending Page ----
document.addEventListener('DOMContentLoaded', () => {
    const trendingGrid = document.getElementById('trendingProductsGrid');

    if (!trendingGrid) return;

    const products = [
        { id: 4, name: "Leather Trench Coat", brand: "Maison Noir", category: "outerwear", price: 495, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&q=80", badge: "hot", rating: 4.9, reviews: 67, colors: ["#000000", "#8B4513"], sizes: ["S", "M", "L"], description: "A statement leather trench coat." },
        { id: 11, name: "Embroidered Cocktail Dress", brand: "LUXE Original", category: "dress", price: 425, originalPrice: 520, discount: 18, image: "https://images.unsplash.com/photo-1518622358385-8ea7d38923a0?w=600&q=80", badge: "hot", rating: 4.9, reviews: 38, colors: ["#1a1a2e", "#800020"], sizes: ["XS", "S", "M", "L"], description: "Hand-embroidered cocktail dress with intricate floral motifs." },
        { id: 1, name: "Silk Midi Dress", brand: "LUXE Original", category: "dress", price: 289, originalPrice: 349, discount: 17, image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600&q=80", badge: "hot", rating: 4.8, reviews: 124, colors: ["#1a1a2e", "#c9a87c"], sizes: ["XS", "S", "M", "L", "XL"], description: "A luxurious silk midi dress with elegant draping." },
        { id: 8, name: "Designer A-Line Dress", brand: "Maison Noir", category: "dress", price: 365, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=600&q=80", badge: "hot", rating: 4.9, reviews: 42, colors: ["#1a1a2e", "#800020"], sizes: ["XS", "S", "M", "L"], description: "Architectural A-line silhouette with modern proportions." },
        { id: 6, name: "Structured Blazer", brand: "Studio Edit", category: "outerwear", price: 275, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&q=80", badge: "popular", rating: 4.8, reviews: 94, colors: ["#000000", "#1a1a2e"], sizes: ["XS", "S", "M", "L"], description: "Sharp tailored blazer with structured shoulders." },
        { id: 10, name: "Wide-Leg Jeans", brand: "Coastal Line", category: "bottom", price: 135, originalPrice: null, discount: 0, image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&q=80", badge: "popular", rating: 4.7, reviews: 302, colors: ["#1E3A5F", "#4169E1"], sizes: ["XS", "S", "M", "L", "XL"], description: "Premium denim wide-leg jeans with authentic wash." },
        { id: 3, name: "High-Waist Tailored Trousers", brand: "Studio Edit", category: "bottom", price: 165, originalPrice: 210, discount: 21, image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600&q=80", badge: "rising", rating: 4.7, reviews: 201, colors: ["#000000", "#1a1a2e"], sizes: ["XS", "S", "M", "L"], description: "Impeccably tailored high-waist trousers." },
        { id: 9, name: "Quilted Puffer Jacket", brand: "Nordic Co.", category: "outerwear", price: 320, originalPrice: 400, discount: 20, image: "https://images.unsplash.com/photo-1544923246-77307dd270aa?w=600&q=80", badge: "rising", rating: 4.6, reviews: 213, colors: ["#000000", "#1a1a2e"], sizes: ["S", "M", "L", "XL"], description: "Insulated quilted jacket with a sleek silhouette." }
    ];

    function generateStars(rating) {
        const full = Math.floor(rating);
        const half = rating % 1 >= 0.5 ? 1 : 0;
        const empty = 5 - full - half;
        return '<i class="fas fa-star"></i>'.repeat(full) +
               (half ? '<i class="fas fa-star-half-alt"></i>' : '') +
               '<i class="far fa-star"></i>'.repeat(empty);
    }

    function renderTrending(list) {
        trendingGrid.innerHTML = list.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                    <div class="product-badges">
                        ${product.badge ? `<span class="product-badge ${product.badge}">${product.badge === 'hot' ? 'Hot' : product.badge === 'popular' ? 'Popular' : 'Rising'}</span>` : ''}
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
                        ${product.discount ? `<span class="discount">-${product.discount}%</span>` : ''}
                    </div>
                </div>
            </div>
        `).join('');

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

    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const filter = tab.getAttribute('data-filter');
            if (filter === 'all') {
                renderTrending(products);
            } else {
                renderTrending(products.filter(p => p.badge === filter));
            }
        });
    });

    renderTrending(products);
});