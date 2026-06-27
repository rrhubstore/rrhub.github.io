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
function addToCart(name, price){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({name, price});

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart");
}
function addToWishlist(name, price){
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push({name, price});

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert(name + " added to wishlist ❤️");
}
function placeOrder(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Cart empty hai");
        return;
    }

    let order = {
        customer: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        items: cart,
        time: new Date().toLocaleString()
    };

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    orders.push(order);

    localStorage.setItem("orders", JSON.stringify(orders));

    localStorage.removeItem("cart");

    alert("Order placed successfully ✅");
}
