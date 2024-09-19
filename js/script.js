// Ürün verilerini içeren dizi
const products = [
  {
    id:1,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "A",
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
    originalPrice: "$150.99",
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

  if (!container) {
    return;
  }

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

// Sayfa yüklendiğinde fonksiyonu çalıştır
document.addEventListener("DOMContentLoaded", function() {
  createProductBoxes();
});


let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Ürün kutularını oluşturma fonksiyonu
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

    container.appendChild(box);
  });
}

// Sayfa yüklendiğinde fonksiyonu çalıştır
document.addEventListener("DOMContentLoaded", function() {
  createProductBoxes();
  updateCartCount(); // Sayfa yüklendiğinde sepet simgesindeki sayıyı güncelle
  displayCartItems(); // Sepetteki ürünleri göster
});

// Sepete ekleme işlevi
function addToCart(buttonElement) {
  const boxElement = buttonElement.closest(".box");
  const productTitle = boxElement.querySelector("h3").innerText;
  const productPrice = boxElement.querySelector(".price").childNodes[0].textContent.trim();

  const productInCart = {
    title: productTitle,
    price: productPrice,
    quantity: 1
  };

  const existingProduct = cart.find(product => product.title === productInCart.title);
  
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
  const cartContainer = document.getElementById('cart-container');
  if (!cartContainer) return; // Eğer sepet container yoksa, fonksiyonu durdur

  cartContainer.innerHTML = ''; // Eski içeriği temizle
  displayCartItems(); // Sepeti yeniden oluştur
}

// Sepetteki ürünleri göstermek için kullanılan işlev
function displayCartItems() {
  const cartContainer = document.getElementById('cart-container');
  if (!cartContainer) {
    return null; // Eğer sepet container yoksa, fonksiyonu durdur
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Sepetiniz boş.</p>";
    return;
  }
  
  cart.forEach((product, index) => {
    let productElement = document.createElement('div');
    productElement.classList.add('cart-item');
    productElement.innerHTML = `
        <h3>${product.title}</h3>
        <p>Price: ${product.price}</p>
        <p>Quantity: ${product.quantity}</p>
        <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartContainer.appendChild(productElement);
  });
}

// Sepetten ürün çıkarma işlevi
function removeFromCart(index) {
  cart.splice(index, 1); // Sepetten ürünü çıkar
  localStorage.setItem('cart', JSON.stringify(cart)); // Güncel sepeti kaydet
  updateCartCount(); // Sepet simgesindeki ürün sayısını güncelle
  updateCartDisplay(); // Sepeti yeniden göster
}
