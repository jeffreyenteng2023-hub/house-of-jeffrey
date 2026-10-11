 {
    
    // 1. IMAGE FALLBACK SYSTEM
    // If any image fails to load, replace it with a working placeholder
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=600&auto=format&fit=crop';
            console.log('An image failed to load, replaced with placeholder.');
        });
    });

    // 2. CART COUNTER INTERACTIVITY
    let cartCount = 0;
    const cartDisplay = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            cartCount++;
            cartDisplay.textContent = cartCount;
            
            // Add a small animation effect to the cart count
            cartDisplay.style.transform = 'scale(1.5)';
            setTimeout(() => {
                cartDisplay.style.transform = 'scale(1)';
            }, 200);
        });
    });

});