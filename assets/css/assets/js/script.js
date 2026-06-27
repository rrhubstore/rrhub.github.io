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
function payNow(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let total = cart.reduce((sum,item)=> sum + item.price, 0);

    var options = {
        "key": "YOUR_KEY_ID_HERE", 
        "amount": total * 100,
        "currency": "INR",
        "name": "R&R Hub",
        "description": "Order Payment",
        "handler": function (response){
            alert("Payment Success ✅ ID: " + response.razorpay_payment_id);

            localStorage.removeItem("cart");
        },
        "theme": {
            "color": "#3399cc"
        }
    };

    var rzp1 = new Razorpay(options);
    rzp1.open();
}
var rzp1 = new Razorpay(options);
rzp1.open();
function placeCODOrder(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Cart empty hai");
        return;
    }

    let order = {
        type: "COD",
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

    alert("COD Order Placed ✅ Supplier ko forward karo");
}
status: "Pending"
function placeCODOrder(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if(cart.length === 0){
        alert("Cart empty hai");
        return;
    }

    let order = {
        type: "COD",
        status: "Pending",
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

    alert("COD Order Placed ✅ Status: Pending");
}
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
function placeOrder(){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let order = {
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        address: document.getElementById("address").value,
        items: cart,
        status: "Pending",
        time: new Date().toLocaleString()
    };

    db.collection("orders").add(order);

    localStorage.removeItem("cart");

    alert("Order placed successfully 🚀");
}
function addProduct(){

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let newProduct = {
        name: document.getElementById(bluetooth neckband).value,
        price: document.getElementById(599).value,
        image: document.getElementById(https://sl.bing.net/v87KXalEgm).value,
        category: document.getElementById(electronics).value
    };

    products.push(newProduct);

    localStorage.setItem("products", JSON.stringify(products));

    alert("Product Added ✅");
    loadProducts();
}
function loadProducts(){

    let products = JSON.parse(localStorage.getItem("products")) || [];

    let container = document.getElementById("list");

    container.innerHTML = "";

    products.forEach((p, index) => {

        container.innerHTML += `
        <div style="border:1px solid black; padding:10px; margin:10px;">

            <img src="${p.image}" width="100"><br>

            <h3>${bluetooth neckband}</h3>
            <p>₹${599}</p>
            <p>${electronics}</p>

            <button onclick="deleteProduct(${index})" style="background:red;color:white;">
                Delete
            </button>

        </div>
        `;
    });
}
