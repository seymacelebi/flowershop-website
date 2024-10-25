// Ürün verilerini içeren dizi
const products = [
  {
    id: 1,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Rose",
    price: "12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 2,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Tulip",
    price: "12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 3,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Daisy",
    price: "12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 4,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Sunflower",
    price: "12.99",
    originalPrice: "$150.99",
    cartText: "add to cart",
  },
  {
    id: 5,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Lily",
    price: "12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 6,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Orchid",
    price: "12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 7,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Lavender",
    price: "12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 8,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Peony",
    price: "19.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 9,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Daffodil",
    price: "12.99",
    originalPrice: "$15.99",
    cartText: "add to sepet",
  },
  {
    id: 10,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Chrysanthemum",
    price: "12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
];

// Sayfa yüklendiğinde fonksiyonu çalıştır
document.addEventListener("DOMContentLoaded", function () {
  createProductBoxes();
});

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

// Ürün kutularını oluşturma fonksiyonu
// Ayrıca toast notification da var içinde
function createProductBoxes() {
  const container = document.getElementById("product-container");

  if (!container) {
    return;
  }

  products.forEach((product) => {
    const box = document.createElement("div");
    box.className = "box";

    box.innerHTML = `
        <span class="discount">${product.discount}</span>
        <div class="image">
          <img src="${product.imageSrc}" alt="${product.title}" />
          <div class="icons">
          <a href="#productFav"  onClick="addToFavorite(this)" class="fas fa-heart"></a>
            <a href="#products" class="cart-btn" onClick="addToCart(this)">${product.cartText}</a>
             <a href="productDetail.html" class="fas fa-share"></a>
          </div>
        </div>
        <div class="content">
          <h3>${product.title}</h3>
          <div class="price">${product.price} <span>${product.originalPrice}</span></div>
        </div>
      `;

    // Yeni eklenen cart-btn'a tıklama olayı ekleniyor
    const cartBtn = box.querySelector(".cart-btn");
    cartBtn.addEventListener("click", function () {
      Toastify({
        text: "Product added cart succesfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#28a745",
        close: true,
      }).showToast();
    });

    // Favorilere ekle butonuna tıklama olayı
    const favoriteBtn = box.querySelector(".fa-heart");
    favoriteBtn.addEventListener("click", function () {
      Toastify({
        text: "Product added to favorites successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#FF6347", // Farklı bir renk
        close: true,
      }).showToast();
    });

    container.appendChild(box);
  });
}

// Sayfa yüklendiğinde fonksiyonu çalıştır
document.addEventListener("DOMContentLoaded", function () {
  createProductBoxes();
  updateCartCount(); // Sayfa yüklendiğinde sepet simgesindeki sayıyı güncelle
  displayCartItems(); // Sepetteki ürünleri göster
  displayFavoriteItems();
});

// Sepete ekleme işlevi
function addToCart(buttonElement) {
  const boxElement = buttonElement.closest(".box");
  console.log(boxElement, "boxElement");

  const productTitle = boxElement.querySelector("h3").innerText;
  const productPrice = boxElement
    .querySelector(".price")
    .childNodes[0].textContent.trim();

  const productImage = boxElement.querySelector(".image img").src;
  console.log(productImage); // Bu, doğru resim kaynağını gösteriyor mu?

  const productInCart = {
    title: productTitle,
    price: productPrice,
    quantity: 1,
    image: productImage,
  };

  console.log(productInCart, "productInCart");

  const existingProduct = cart.find(
    (product) => product.title === productInCart.title
  );

  if (existingProduct) {
    existingProduct.quantity += 1; // Miktar artır
  } else {
    cart.push(productInCart); // Yeni ürünü sepete ekle
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  updateCartDisplay(); // Sepeti güncelle
}

// Sepetteki ürün sayısını güncelleme işlevi
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cart.length; // Sepetteki ürün sayısını göster
}

// Sepeti yeniden gösterme işlevi
function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-container");
  if (!cartContainer) return; // Eğer sepet container yoksa, fonksiyonu durdur

  cartContainer.innerHTML = ""; // Eski içeriği temizle
  displayCartItems(); // Sepeti yeniden oluştur
}

// Function to update quantity and save to localStorage
function updateQuantity(event, change) {
  const index = event.target.getAttribute("data-index");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Update quantity
  cart[index].quantity += change;

  // Ensure quantity does not go below 1
  if (cart[index].quantity < 1) {
    cart[index].quantity = 1;
  }

  // Save updated cart back to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Refresh the cart display
  displayCartItems();
}

// Function to display SHOPPING cart items
function displayCartItems() {
  const cartContainer = document.getElementById("cart-container");

  if (!cartContainer) {
    return null; // Stop if cart container doesn't exist
  }

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = `
      <span style="background-color:#fff; display: inline-block; width: 90%; height: 160%;  font-size: 30px; text-align: center;">
        <p>Basket Empty.</p>
      </span>`;
    return;
  }

  cartContainer.innerHTML = ""; // Clear old content

  cart.forEach((item, index) => {
    const box = document.createElement("div");
    box.className = "box";

    // Calculate the total price for the current item
    let newTotalPrice = item.price * item.quantity;

    box.innerHTML = `
      <div class="image">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="content">
        <h3>${item.title}</h3>
        <div class="price">$${item.price}</div>
        <div class="quantity" id="quantity-${index}"><h1>Quantity: ${
      item.quantity
    }</h1></div>
        <div class="button-container">
          <button class="round-button increase" data-index="${index}">+</button>
          <button class="round-button decrease" data-index="${index}">-</button>
        </div>
        <br/>
        <div class="price"><h3>Total: $${newTotalPrice.toFixed(2)}</h3></div>
        <br/>
        <button class="btn-cart btn" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;

    cartContainer.appendChild(box);
  });

  // Add event listeners to the buttons
  const increaseButtons = document.querySelectorAll(".increase");
  const decreaseButtons = document.querySelectorAll(".decrease");

  increaseButtons.forEach((button) =>
    button.addEventListener("click", (event) => updateQuantity(event, 1))
  );

  decreaseButtons.forEach((button) =>
    button.addEventListener("click", (event) => updateQuantity(event, -1))
  );
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1); // Belirtilen ürünü sepetten çıkar
  localStorage.setItem("cart", JSON.stringify(cart)); // Güncellenmiş sepeti localStorage'e kaydet
  displayCartItems(); // Sepeti yeniden güncelle
}

// Sepetten ürün çıkarma işlevi
function removeFromCart(index) {
  cart.splice(index, 1); // Sepetten ürünü çıkar
  localStorage.setItem("cart", JSON.stringify(cart)); // Güncel sepeti kaydet
  updateCartCount(); // Sepet simgesindeki ürün sayısını güncelle
  updateCartDisplay(); // Sepeti yeniden göster
}

//Favorilere ekleme işlemi
function addToFavorite(buttonElement) {
  const boxElement = buttonElement.closest(".box");
  const productTitle = boxElement.querySelector("h3").innerText;
  const productPrice = boxElement
    .querySelector(".price")
    .childNodes[0].textContent.trim();

  const productImage = boxElement.querySelector(".image img").src;

  const productInFavorite = {
    title: productTitle,
    price: productPrice,
    quantity: 1,
    image: productImage,
  };

  const existingProduct = cart.find(
    (product) => product.title === productInFavorite.title
  );

  if (existingProduct) {
    existingProduct.quantity += 1; // Miktar artır
  } else {
    favorite.push(productInFavorite); // Yeni ürünü sepete ekle
  }

  localStorage.setItem("favorite", JSON.stringify(favorite));
}

// FAVORITE PRODUCT DISPLAY
function displayFavoriteItems() {
  const favoriteContainer = document.getElementById("favorite-container");

  if (!favoriteContainer) {
    return null; // Stop if cart container doesn't exist
  }

  let favorite = JSON.parse(localStorage.getItem("favorite")) || [];

  if (favorite.length === 0) {
    favoriteContainer.innerHTML = `
      <span style="background-color:#fff; display: inline-block; width: 90%; height: 160%;  font-size: 30px; text-align: center;">
        <p>Favorite page Empty.</p>
      </span>`;
    return;
  }

  favoriteContainer.innerHTML = ""; // Clear old content

  favorite.forEach((item, index) => {
    const box = document.createElement("div");
    box.className = "box";

    box.innerHTML = `
      <div class="image">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="content">
        <h3>${item.title}</h3>
        <div class="price">$${item.price}</div>
        <button class="btn-cart btn" onclick="removeFromFavorite(${index})">Remove</button>
      </div>
    `;

    favoriteContainer.appendChild(box);
  });
}

// REMOVE FAVORITE PRODUCT

function removeFromFavorite(index) {
  let favorite = JSON.parse(localStorage.getItem("favorite")) || [];
  favorite.splice(index, 1);
  localStorage.setItem("favorite", JSON.stringify(favorite));
  displayFavoriteItems(); // Refresh the cart display
}
