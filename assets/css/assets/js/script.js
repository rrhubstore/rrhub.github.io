let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart!");
    updateCart();
}

function updateCart() {
    let cartCount = document.getElementById("cart-count");
    if (cartCount) {
        cartCount.innerText = cart.length;
    }

    let cartItems = document.getElementById("cart-items");
    if (cartItems) {
        cartItems.innerHTML = "";

        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;

            cartItems.innerHTML += `
                <div style="margin:10px; padding:10px; border:1px solid gold;">
                    <p>${item.name} - ₹${item.price}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            `;
        });

        if (cartItems.innerHTML !== "") {
            cartItems.innerHTML += `<h3>Total: ₹${total}</h3>`;
        }
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
