// Your existing code for the cart
var cart = [];

function updateCartDisplay() {
    console.log("Cart updated:", cart);
    var cartContent = document.querySelector('.cart-content');
    cartContent.innerHTML = '';

    cart.forEach(function (item) {
        var itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');

        var imageElement = document.createElement('img');
        imageElement.src = item.image;
        imageElement.alt = item.name;
        itemElement.appendChild(imageElement);

        var detailsElement = document.createElement('div');
        detailsElement.classList.add('cart-item-details');
        detailsElement.innerHTML = `<p>${item.name}<br>Quantity: ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}</p>`;

        itemElement.appendChild(detailsElement);
        cartContent.appendChild(itemElement);
    });

    var totalPrice = cart.reduce(function (sum, item) {
        return sum + item.price * item.quantity;
    }, 0).toFixed(2);

    var totalPriceElement = document.querySelector('.total-price');
    totalPriceElement.textContent = 'Total: $' + totalPrice;
}

function addToCart(button) {
    var parentElement = button.closest('.button-deals');
    var foodName = parentElement.querySelector('.food-name').textContent;
    var foodPrice = parseFloat(parentElement.querySelector('.food-price').textContent.replace('$', ''));

    if (isNaN(foodPrice)) {
        console.error('Invalid food price. Check the DOM structure.');
        return;
    }

    var foodImage = parentElement.querySelector('img').src;

    var existingItem = cart.find(item => item.name === foodName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        var item = {
            name: foodName,
            price: foodPrice,
            image: foodImage,
            quantity: 1
        };
        cart.push(item);
    }

    updateCartDisplay();
    slideOutCart();
}

function slideOutCart() {
    var cartContainer = document.querySelector('.cart-container');
    cartContainer.style.right = '0';
}

function closeCart() {
    var cartContainer = document.querySelector('.cart-container');
    cartContainer.style.right = '-500px';
}

function checkout() {
    alert("Thank you for your purchase!");
    closeCart();
    clearCart();
}

function clearCart() {
    cart = [];
    updateCartDisplay();
}

// New code from your second block
document.getElementById('subscribeButton').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Subscription successful!');
});

document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 1;
    showSlides(slideIndex);

    setInterval(function () {
        plusSlides(1);
    }, 3000);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n, event) {
        event.preventDefault();
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot-homepage");

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; dots && i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (slides[slideIndex - 1] && dots[slideIndex - 1]) {
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }
    }

    let dotElements = document.getElementsByClassName("dot-homepage");
    for (let i = 0; i < dotElements.length; i++) {
        dotElements[i].addEventListener("click", function (event) {
            currentSlide(i + 1, event);
        });
    }
});
