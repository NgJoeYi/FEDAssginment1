// When the DOM is fully loaded, execute the following code
document.addEventListener('DOMContentLoaded', function () {
    // Get references to important elements
    const cartContainer = document.getElementById('cart-container');
    const cart = document.getElementById('cart');
    const closeCart = document.getElementById('close-cart');
    const cartItems = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');

    // ------------------------------------------------------- Add click event to close the cart
    closeCart.addEventListener('click', function () {
        closeCartMenu(); // Call the function to close the cart
    });

    // -------------------------------------------------------------------- Add item to the cart
    const addItemToCart = function (itemName, price) {
        // Create a new cart item element
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item'); // Add a class for styling
        cartItem.innerHTML = `<p>${itemName} - $${price}</p>`; // Set the item details
        cartItems.appendChild(cartItem); // Add the item to the cart
        toggleCart(); // Show the cart
    };

    // ------------------------------------------------------------------- Toggle cart visibility
    const toggleCart = function () {
        // Toggle the cart visibility by changing its right style property
        cartContainer.style.right = cartContainer.style.right === '0px' ? '-300px' : '0';
    };

    // --------------------------------------------------------------------------- Close the cart
    const closeCartMenu = function () {
        cartContainer.style.right = '-300px'; // Hide the cart by moving it off-screen
    };

    // ------------------------------------------------ Add click event listeners to all cart logos
    const cartLogos = document.querySelectorAll('.cart-logo');
    cartLogos.forEach(function (cartLogo) {
        // When a cart logo is clicked, add the corresponding item to the cart
        cartLogo.addEventListener('click', function () {
            const itemName = cartLogo.dataset.itemName; // Get item name from data attribute
            const itemPrice = parseFloat(cartLogo.dataset.itemPrice); // Get item price from data attribute
            addItemToCart(itemName, itemPrice); // Call the function to add the item to the cart
        });
    });

    // ----------------------------------------------------------------------------- Checkout button
    checkoutButton.addEventListener('click', function () {
        alert('Order received'); // Show an alert when the checkout button is clicked
    });
});
