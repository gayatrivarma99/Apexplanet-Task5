// Sample restaurant data with Indian foods and restaurants
const restaurants = [
    {
        id: 1,
        name: "Hyderabadi Biryani House",
        cuisine: "Indian",
        rating: 4.8,
        deliveryTime: "35-50 min",
        priceRange: 3,
        image: "https://www.thehosteller.com/_next/image/?url=https%3A%2F%2Fstatic.thehosteller.com%2Fhostel%2Fimages%2Fimage.jpg%2Fimage-1744199226259.jpg&w=2048&q=75",
        menu: [
            { id: 1, name: "Chicken Dum Biryani", description: "Aromatic basmati rice with tender chicken pieces, cooked in traditional dum style", price: 450 },
            { id: 2, name: "Mutton Biryani", description: "Premium mutton pieces layered with fragrant basmati rice and spices", price: 550 },
            { id: 3, name: "Veg Biryani", description: "Mixed vegetables and paneer cooked with aromatic basmati rice", price: 350 },
            { id: 4, name: "Raita", description: "Cool yogurt with cucumber and mint", price: 80 },
            { id: 5, name: "Shorba", description: "Traditional mutton soup with aromatic spices", price: 120 }
        ]
    },
    {
        id: 2,
        name: "Punjabi Dhaba",
        cuisine: "Indian",
        rating: 4.6,
        deliveryTime: "25-40 min",
        priceRange: 2,
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 6, name: "Butter Chicken", description: "Creamy tomato-based curry with tender chicken pieces", price: 320 },
            { id: 7, name: "Mutton Rogan Josh", description: "Kashmiri-style mutton curry with aromatic spices", price: 420 },
            { id: 8, name: "Dal Makhani", description: "Rich and creamy black lentils cooked overnight", price: 280 },
            { id: 9, name: "Butter Naan", description: "Soft Indian bread brushed with butter", price: 60 },
            { id: 10, name: "Tandoori Roti", description: "Whole wheat flatbread cooked in tandoor", price: 40 },
            { id: 11, name: "Chapathi (2 pcs)", description: "Soft whole wheat Indian flatbread", price: 50 }
        ]
    },
    {
        id: 3,
        name: "South Indian Express",
        cuisine: "Indian",
        rating: 4.5,
        deliveryTime: "20-35 min",
        priceRange: 2,
        image: "https://images.unsplash.com/photo-1630383249896-424e482df921?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 12, name: "Masala Dosa", description: "Crispy rice crepe filled with spiced potato curry", price: 180 },
            { id: 13, name: "Chicken Chettinad", description: "Spicy South Indian chicken curry with coconut", price: 350 },
            { id: 14, name: "Mutton Pepper Fry", description: "Dry mutton preparation with black pepper and spices", price: 450 },
            { id: 15, name: "Sambar Rice", description: "Steamed rice with lentil curry and vegetables", price: 220 },
            { id: 16, name: "Rasam", description: "Tangy South Indian soup with tamarind and spices", price: 100 },
            { id: 17, name: "Coconut Chutney", description: "Fresh coconut chutney with curry leaves", price: 60 }
        ]
    },
    {
        id: 4,
        name: "Tandoor Junction",
        cuisine: "Indian",
        rating: 4.7,
        deliveryTime: "30-45 min",
        priceRange: 3,
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 18, name: "Tandoori Chicken (Half)", description: "Marinated chicken cooked in traditional tandoor", price: 380 },
            { id: 19, name: "Chicken Tikka", description: "Boneless chicken pieces marinated and grilled", price: 420 },
            { id: 20, name: "Mutton Seekh Kebab", description: "Minced mutton skewers with aromatic spices", price: 480 },
            { id: 21, name: "Paneer Tikka", description: "Grilled cottage cheese with bell peppers", price: 320 },
            { id: 22, name: "Garlic Naan", description: "Tandoor bread topped with fresh garlic", price: 80 },
            { id: 23, name: "Mint Chutney", description: "Fresh mint and coriander chutney", price: 50 }
        ]
    },
    {
        id: 5,
        name: "Mocktail Mania",
        cuisine: "Beverages",
        rating: 4.4,
        deliveryTime: "15-25 min",
        priceRange: 2,
        image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 24, name: "Virgin Mojito", description: "Refreshing mint and lime mocktail with soda", price: 180 },
            { id: 25, name: "Blue Lagoon", description: "Blue curacao flavored refreshing mocktail", price: 200 },
            { id: 26, name: "Mango Tango", description: "Fresh mango pulp with mint and lime", price: 220 },
            { id: 27, name: "Watermelon Cooler", description: "Fresh watermelon juice with mint", price: 160 },
            { id: 28, name: "Pineapple Punch", description: "Tropical pineapple mocktail with spices", price: 190 },
            { id: 29, name: "Masala Chaas", description: "Spiced buttermilk with roasted cumin", price: 120 }
        ]
    },
    {
        id: 6,
        name: "Royal Mughlai Kitchen",
        cuisine: "Indian",
        rating: 4.9,
        deliveryTime: "40-55 min",
        priceRange: 4,
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 30, name: "Lucknowi Biryani", description: "Awadhi-style biryani with tender mutton and saffron", price: 650 },
            { id: 31, name: "Chicken Korma", description: "Rich and creamy Mughlai chicken curry", price: 450 },
            { id: 32, name: "Mutton Nihari", description: "Slow-cooked mutton stew with aromatic spices", price: 520 },
            { id: 33, name: "Shahi Paneer", description: "Royal cottage cheese curry in rich gravy", price: 380 },
            { id: 34, name: "Roomali Roti", description: "Paper-thin handkerchief bread", price: 90 },
            { id: 35, name: "Kulfi Falooda", description: "Traditional Indian ice cream with vermicelli", price: 150 }
        ]
    },
    {
        id: 7,
        name: "Coastal Spice",
        cuisine: "Indian",
        rating: 4.3,
        deliveryTime: "35-50 min",
        priceRange: 3,
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 36, name: "Fish Curry", description: "Coastal-style fish curry with coconut milk", price: 380 },
            { id: 37, name: "Chicken Ghee Roast", description: "Mangalorean-style chicken with ghee and spices", price: 420 },
            { id: 38, name: "Mutton Sukka", description: "Dry mutton preparation with coconut and spices", price: 480 },
            { id: 39, name: "Appam (3 pcs)", description: "Fermented rice pancakes from Kerala", price: 120 },
            { id: 40, name: "Neer Dosa (4 pcs)", description: "Thin rice crepes from coastal Karnataka", price: 140 },
            { id: 41, name: "Solkadhi", description: "Refreshing drink made with kokum and coconut milk", price: 100 }
        ]
    },
    {
        id: 8,
        name: "Street Food Junction",
        cuisine: "Indian",
        rating: 4.2,
        deliveryTime: "20-30 min",
        priceRange: 1,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 42, name: "Pani Puri (8 pcs)", description: "Crispy puris with spiced water and chutneys", price: 80 },
            { id: 43, name: "Bhel Puri", description: "Mumbai-style puffed rice snack with chutneys", price: 100 },
            { id: 44, name: "Vada Pav", description: "Mumbai's famous potato fritter burger", price: 60 },
            { id: 45, name: "Chicken Roll", description: "Spiced chicken wrapped in paratha", price: 150 },
            { id: 46, name: "Mutton Roll", description: "Tender mutton pieces wrapped in soft paratha", price: 180 },
            { id: 47, name: "Masala Chai", description: "Traditional Indian spiced tea", price: 40 }
        ]
    },
    {
        id: 9,
        name: "Bengali Delights",
        cuisine: "Indian",
        rating: 4.6,
        deliveryTime: "30-45 min",
        priceRange: 2,
        image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 48, name: "Chicken Kosha", description: "Bengali-style spicy chicken curry", price: 350 },
            { id: 49, name: "Mutton Kosha", description: "Slow-cooked Bengali mutton curry", price: 450 },
            { id: 50, name: "Fish Paturi", description: "Fish marinated in mustard paste and steamed", price: 320 },
            { id: 51, name: "Luchi (4 pcs)", description: "Deep-fried Bengali bread", price: 80 },
            { id: 52, name: "Mishti Doi", description: "Sweet yogurt dessert from Bengal", price: 120 },
            { id: 53, name: "Rasgulla (4 pcs)", description: "Spongy cottage cheese balls in sugar syrup", price: 140 }
        ]
    },
    {
        id: 10,
        name: "Rajasthani Rasoi",
        cuisine: "Indian",
        rating: 4.4,
        deliveryTime: "35-50 min",
        priceRange: 3,
        image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
        menu: [
            { id: 54, name: "Laal Maas", description: "Fiery Rajasthani mutton curry with red chilies", price: 520 },
            { id: 55, name: "Chicken Safed Maas", description: "White chicken curry with cashews and cream", price: 420 },
            { id: 56, name: "Dal Baati Churma", description: "Traditional Rajasthani lentils with baked bread balls", price: 380 },
            { id: 57, name: "Bajre Ki Roti (2 pcs)", description: "Millet flatbread from Rajasthan", price: 60 },
            { id: 58, name: "Ker Sangri", description: "Desert beans and berries curry", price: 280 },
            { id: 59, name: "Ghevar", description: "Traditional Rajasthani sweet disc", price: 180 }
        ]
    }
];

// Cart functionality
let cart = JSON.parse(localStorage.getItem('yumlyfe_cart')) || [];
let filteredRestaurants = [...restaurants];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayRestaurants(restaurants);
    updateCartUI();
});

// Display restaurants
function displayRestaurants(restaurantList) {
    const container = document.getElementById('restaurantsContainer');
    container.innerHTML = '';

    restaurantList.forEach(restaurant => {
        const restaurantCard = createRestaurantCard(restaurant);
        container.appendChild(restaurantCard);
    });
}

// Create restaurant card
function createRestaurantCard(restaurant) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';
    card.onclick = () => openRestaurantModal(restaurant);

    const priceSymbols = '₹'.repeat(restaurant.priceRange);

    card.innerHTML = `
        <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
        <div class="restaurant-info">
            <h3 class="restaurant-name">${restaurant.name}</h3>
            <p class="restaurant-cuisine">${restaurant.cuisine}</p>
            <div class="restaurant-stats">
                <span class="rating">${restaurant.rating} ★</span>
                <span class="delivery-time">${restaurant.deliveryTime}</span>
                <span class="price-range">${priceSymbols}</span>
            </div>
        </div>
    `;

    return card;
}

// Search functionality
function searchRestaurants() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const location = document.getElementById('locationInput').value.toLowerCase();

    filteredRestaurants = restaurants.filter(restaurant => 
        restaurant.name.toLowerCase().includes(searchTerm) ||
        restaurant.cuisine.toLowerCase().includes(searchTerm) ||
        restaurant.menu.some(item => 
            item.name.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        )
    );

    applyFilters();
}

// Apply filters
function applyFilters() {
    const cuisineFilter = document.getElementById('cuisineFilter').value;
    const ratingFilter = parseFloat(document.getElementById('ratingFilter').value) || 0;
    const priceFilter = parseInt(document.getElementById('priceFilter').value) || 0;
    const sortFilter = document.getElementById('sortFilter').value;

    let filtered = [...filteredRestaurants];

    // Apply cuisine filter
    if (cuisineFilter) {
        filtered = filtered.filter(restaurant => 
            restaurant.cuisine.toLowerCase() === cuisineFilter.toLowerCase()
        );
    }

    // Apply rating filter
    if (ratingFilter) {
        filtered = filtered.filter(restaurant => restaurant.rating >= ratingFilter);
    }

    // Apply price filter
    if (priceFilter) {
        filtered = filtered.filter(restaurant => restaurant.priceRange <= priceFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
        switch (sortFilter) {
            case 'rating':
                return b.rating - a.rating;
            case 'delivery_time':
                return parseInt(a.deliveryTime) - parseInt(b.deliveryTime);
            case 'price':
                return a.priceRange - b.priceRange;
            default:
                return 0;
        }
    });

    displayRestaurants(filtered);
}

// Restaurant modal functionality
function openRestaurantModal(restaurant) {
    const modal = document.getElementById('restaurantModal');
    
    document.getElementById('modalRestaurantImage').src = restaurant.image;
    document.getElementById('modalRestaurantName').textContent = restaurant.name;
    document.getElementById('modalRestaurantCuisine').textContent = restaurant.cuisine;
    document.getElementById('modalRestaurantRating').textContent = `${restaurant.rating} ★`;
    document.getElementById('modalDeliveryTime').textContent = restaurant.deliveryTime;
    document.getElementById('modalPriceRange').textContent = '₹'.repeat(restaurant.priceRange);

    const menuContainer = document.getElementById('menuItems');
    menuContainer.innerHTML = '';

    restaurant.menu.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `
            <div class="menu-item-info">
                <h4>${item.name}</h4>
                <p>${item.description}</p>
            </div>
            <div style="display: flex; align-items: center;">
                <span class="menu-item-price">₹${item.price}</span>
                <button class="add-to-cart" onclick="addToCart(${item.id}, '${item.name.replace(/'/g, "\\'")}', ${item.price}, '${restaurant.name.replace(/'/g, "\\'")}')">
                    Add to Cart
                </button>
            </div>
        `;
        menuContainer.appendChild(menuItem);
    });

    modal.style.display = 'block';
}

function closeRestaurantModal() {
    document.getElementById('restaurantModal').style.display = 'none';
}

// Cart functionality
function addToCart(itemId, itemName, itemPrice, restaurantName) {
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: itemId,
            name: itemName,
            price: itemPrice,
            restaurant: restaurantName,
            quantity: 1
        });
    }

    localStorage.setItem('yumlyfe_cart', JSON.stringify(cart));
    updateCartUI();
    
    // Show success message
    showNotification(`${itemName} added to cart!`);
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    localStorage.setItem('yumlyfe_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(itemId);
        } else {
            localStorage.setItem('yumlyfe_cart', JSON.stringify(cart));
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartCount = document.querySelector('.cart-count');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    // Update cart items
    cartItems.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">Your cart is empty</p>';
    } else {
        cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.restaurant}</p>
                    <p>₹${item.price.toFixed(2)} each</p>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
            `;
            cartItems.appendChild(cartItem);
            total += item.price * item.quantity;
        });
    }

    cartTotal.textContent = total.toFixed(2);
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!', 'error');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`Order placed successfully! Total: ₹${total.toFixed(2)}\nEstimated delivery: 30-45 minutes`, 'success');
    
    // Clear cart
    cart = [];
    localStorage.setItem('yumlyfe_cart', JSON.stringify(cart));
    updateCartUI();
    toggleCart();
}

// Notification system
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#48c479' : '#ff6b35'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 3000;
        max-width: 300px;
        word-wrap: break-word;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add CSS animation
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Modal functionality
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    closeSignupModal();
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function showSignupModal() {
    document.getElementById('signupModal').style.display = 'block';
    closeLoginModal();
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
}

// Form submissions
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Login functionality would be implemented here');
    closeLoginModal();
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Signup functionality would be implemented here');
    closeSignupModal();
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    const loginModal = document.getElementById('loginModal');
    const signupModal = document.getElementById('signupModal');
    const restaurantModal = document.getElementById('restaurantModal');

    if (e.target === loginModal) {
        closeLoginModal();
    }
    if (e.target === signupModal) {
        closeSignupModal();
    }
    if (e.target === restaurantModal) {
        closeRestaurantModal();
    }
});

// Initialize search on Enter key
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchRestaurants();
    }
});

// Reset filters to show all restaurants initially
filteredRestaurants = [...restaurants];

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});