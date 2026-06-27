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
function searchProduct() {
    let input = document.getElementById("searchBox").value.toLowerCase();
    let products = document.getElementsByClassName("product-card");

    for (let i = 0; i < products.length; i++) {
        let title = products[i].innerText.toLowerCase();

        if (title.includes(input)) {
            products[i].style.display = "inline-block";
        } else {
            products[i].style.display = "none";
        }
    }
}
let cart = [];

function addToCart(name, price){
cart.push({name, price});
alert(name + " added to cart");

localStorage.setItem("cart", JSON.stringify(cart));
}
