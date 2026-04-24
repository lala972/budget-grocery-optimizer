let cart = {};

// GLOBAL FUNCTION (important)
window.addToCart = function(name, price) {

    if (cart[name]) {
        cart[name].quantity++;
    } else {
        cart[name] = {
            price: price,
            quantity: 1
        };
    }

    updateCart();
};

// INCREASE
window.increaseItem = function(name) {
    cart[name].quantity++;
    updateCart();
};

// DECREASE
window.decreaseItem = function(name) {
    cart[name].quantity--;

    if (cart[name].quantity <= 0) {
        delete cart[name];
    }

    updateCart();
};

// UPDATE UI
function updateCart() {
    let cartList = document.getElementById("cart");
    let total = 0;

    cartList.innerHTML = "";

    for (let item in cart) {
        let li = document.createElement("li");

        let itemTotal = cart[item].price * cart[item].quantity;
        total += itemTotal;

        li.innerHTML = `
            ${item} - ₹${cart[item].price} × ${cart[item].quantity}
            <button onclick="decreaseItem('${item}')">-</button>
            <button onclick="increaseItem('${item}')">+</button>
        `;

        cartList.appendChild(li);
    }

    document.getElementById("total").innerText = total;
}