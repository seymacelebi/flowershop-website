// Ürün verilerini içeren dizi
const products = [
  {
    id:1,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id:2,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id:3,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id:4,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id:5,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id:6,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id:7,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id:8,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id:9,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to sepet",
  },
  {
    id:10,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
];

// Ürün kutularını oluşturma fonksiyonu
function createProductBoxes() {
  const container = document.getElementById("product-container");

  products.forEach((product) => {
    // Yeni bir 'box' div'i oluştur
    const box = document.createElement("div");
    box.className = "box";

    // 'box' div'inin içeriğini oluştur
    box.innerHTML = `
        <span class="discount">${product.discount}</span>
        <div class="image">
          <img src="${product.imageSrc}" alt="${product.title}" />
          <div class="icons">
            <a href="#" class="fas fa-heart"></a>
            <a href="#products" class="cart-btn" onClick="addToCart(this)">${product.cartText}</a>
            <a href="#" class="fas fa-share"></a>
          </div>
        </div>
        <div class="content">
          <h3>${product.title}</h3>
          <div class="price">${product.price} <span>${product.originalPrice}</span></div>
        </div>
      `;

    // 'box' div'ini container'a ekle
    container.appendChild(box);
  });
}

// Fonksiyonu çağırarak ürün kutularını oluştur
document.addEventListener("DOMContentLoaded", createProductBoxes);

let cart = [];

// Sepete ekleme işlevi
function addToCart(buttonElement) {
  const boxElement = buttonElement.closest(".box");
  const productTitle = boxElement.querySelector("h3").innerText;
  const productPrice = boxElement.querySelector(".price").childNodes[0].textContent.trim();

  const productInCart = {
    title: productTitle,
    price: productPrice,
  };

  cart.push(productInCart);
  localStorage.setItem("cart", JSON.stringify(cart));  
  // Ürün sepete eklendiğinde sepet simgesinde ürün sayısını güncelle
  updateCartCount();

  // Sepetin içeriğini güncelleme işlevini çağır
  updateCartDisplay();
}

// Sepet içeriğini ekrana yazdırma işlevi
function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-container");

  if (!cartContainer) {
    console.log("Cart container bulunamadı.");
    return;
  }

  cartContainer.innerHTML = "";

  cart.forEach((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `
      <p>${product.title} - ${product.price}</p>
      <button onClick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(cartItem);
  });
}

// Sepet simgesindeki ürün sayısını güncelleme işlevi
function updateCartCount() {
  const cartCountElement = document.getElementById("cart-count");
  cartCountElement.textContent = cart.length; // Sepetteki ürün sayısını göster
}

// Ürünü sepetten çıkarma işlevi
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount(); // Sepetteki ürün sayısını güncelle
  updateCartDisplay();
}
