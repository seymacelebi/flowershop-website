// Ürün verilerini içeren dizi
const products = [
  {
    id: 1,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Rose",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 2,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Tulip",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 3,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Daisy",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 4,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Sunflower",
    price: "$12.99",
    originalPrice: "$150.99",
    cartText: "add to cart",
  },
  {
    id: 5,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Lily",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 6,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Orchid",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 7,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Lavender",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 8,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Peony",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    id: 9,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Daffodil",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to sepet",
  },
  {
    id: 10,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "Chrysanthemum",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
];


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
  console.log(boxElement, "boxElement")

  const productTitle = boxElement.querySelector("h3").innerText;
  const productPrice = boxElement.querySelector(".price").childNodes[0].textContent.trim();

  const productImage = boxElement.querySelector(".image img").src;
  console.log(productImage); // Bu, doğru resim kaynağını gösteriyor mu?
  

  const productInCart = {
    title: productTitle,
    price: productPrice,
    quantity: 1,
    image : productImage
  };

  console.log(productInCart, "productInCart")

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


function displayCartItems() {
 
  const cartContainer = document.getElementById('cart-container');

  if (!cartContainer) {
    return null; // Eğer sepet container yoksa, fonksiyonu durdur
  }

  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  console.log(cart, "cart2")

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Sepetiniz boş.</p>";
    return;
  }

  cartContainer.innerHTML = ""; // Eski içerikleri temizle
  console.log("deneme", cart)

  cart.forEach((item, index) => {
    const box = document.createElement("div");
    box.className = "box";

    box.innerHTML = `
      <div class="image">
        <img src="${item.image}" alt="${item.title}" />
      </div>
      <div class="content">
        <h3>${item.title}</h3>
        <div class="price">${item.price}</div>
        <button class="btn-cart btn" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;

    cartContainer.appendChild(box);
  });
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  cart.splice(index, 1); // Belirtilen ürünü sepetten çıkar

  localStorage.setItem('cart', JSON.stringify(cart)); // Güncellenmiş sepeti localStorage'e kaydet
  displayCartItems(); // Sepeti yeniden güncelle
}


// Sepetten ürün çıkarma işlevi
function removeFromCart(index) {
  cart.splice(index, 1); // Sepetten ürünü çıkar
  localStorage.setItem('cart', JSON.stringify(cart)); // Güncel sepeti kaydet
  updateCartCount(); // Sepet simgesindeki ürün sayısını güncelle
  updateCartDisplay(); // Sepeti yeniden göster
}

