// Ürün verilerini içeren dizi
const products = [
  {
    id: 1,
    title: "Rose",
    description: "A timeless bouquet of red roses, symbolizing love and passion.",
    price: 12.99,
    originalPrice: 15.99,
    discount: "-10%",
    imageSrc: "images/rosebuket.jpg",
    extraImages: [
      "images/rose2.jpg",
      "images/rose3.jpg"
    ],
    availability: "In Stock",
    category: "Bouquet",
    colorOptions: ["Red", "White", "Pink"],
    rating: 4.8,
    seasonalAvailability: "Year-round",
    tags: ["Romantic", "Classic"],
    usage: ["Anniversary", "Valentine's Day", "Wedding"],
    dimensions: { height: "40cm", width: "30cm" },
    weight: "500g",
    careInstructions: "Keep in a cool place and change water daily.",
    reviews: [
      { user: "Alice", rating: 5, comment: "Beautiful and fresh!" },
      { user: "Bob", rating: 4, comment: "Perfect for a romantic gift." }
    ],
    variants: [
      {
        size: "Standard",
        price: 12.99,
        availability: "In Stock"
      },
      {
        size: "Deluxe",
        price: 18.99,
        availability: "In Stock"
      },
      {
        size: "Premium",
        price: 25.99,
        availability: "Limited Stock"
      }
    ],
    supplier: "Fresh Blooms Co.",
    giftWrapAvailable: true,
    cartText: "add to cart"
  },
  {
    id: 2,
    title: "Tulip",
    description: "Elegant tulips in beautiful pastel shades for a touch of spring.",
    price: 12.99,
    originalPrice: 15.99,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    extraImages: [
      "images/tulip1.jpg",
      "images/tulip2.jpg"
    ],
    availability: "In Stock",
    category: "Bouquet",
    colorOptions: ["Pink", "Purple", "Yellow"],
    rating: 4.6,
    seasonalAvailability: "Spring",
    tags: ["New Arrival"],
    usage: ["Mother's Day", "Birthday", "Spring Decor"],
    dimensions: { height: "35cm", width: "25cm" },
    weight: "450g",
    careInstructions: "Keep in indirect sunlight and water daily.",
    reviews: [
      { user: "Sara", rating: 5, comment: "Perfect for spring!" },
      { user: "Jake", rating: 4, comment: "Lovely colors and freshness." }
    ],
    variants: [
      {
        size: "Standard",
        price: 12.99,
        availability: "In Stock"
      },
      {
        size: "Deluxe",
        price: 18.99,
        availability: "In Stock"
      },
      {
        size: "Premium",
        price: 25.99,
        availability: "Limited Stock"
      }
    ],
    supplier: "Tulip Gardens Ltd.",
    giftWrapAvailable: false,
    cartText: "add to cart"
  },
  {
    id: 3,
    title: "Daisy",
    description: "A charming daisy bouquet, bringing joy and simplicity to any occasion.",
    price: 12.99,
    originalPrice: 15.99,
    discount: "-10%",
    imageSrc: "images/daisy.jpg",
    extraImages: [
      "images/daisy1.jpg",
      "images/daisy2.jpg"
    ],
    availability: "In Stock",
    category: "Bouquet",
    colorOptions: ["White", "Yellow"],
    rating: 4.5,
    seasonalAvailability: "Summer",
    tags: ["Cheerful", "Classic"],
    usage: ["Birthday", "Just Because", "Thank You"],
    dimensions: { height: "30cm", width: "20cm" },
    weight: "400g",
    careInstructions: "Place in fresh water and change daily.",
    reviews: [
      { user: "Emma", rating: 5, comment: "Brings so much joy!" },
      { user: "John", rating: 4, comment: "Simple and beautiful." }
    ],
    variants: [
      {
        size: "Standard",
        price: 12.99,
        availability: "In Stock"
      },
      {
        size: "Deluxe",
        price: 18.99,
        availability: "In Stock"
      },
      {
        size: "Premium",
        price: 25.99,
        availability: "Limited Stock"
      }
    ],
    supplier: "Bloom Suppliers",
    giftWrapAvailable: true,
    cartText: "add to cart"
  },
  {
    id: 4,
    title: "Sunflower",
    description: "Radiant sunflowers that brighten up any space with their cheerful appearance.",
    price: 12.99,
    originalPrice: 150.99,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    extraImages: [
      "images/sunflower1.jpg",
      "images/sunflower2.jpg"
    ],
    availability: "Limited Stock",
    category: "Bouquet",
    colorOptions: ["Yellow"],
    rating: 4.9,
    seasonalAvailability: "Summer",
    tags: ["Bright", "Cheerful"],
    usage: ["Housewarming", "Birthday", "Get Well Soon"],
    dimensions: { height: "45cm", width: "35cm" },
    weight: "600g",
    careInstructions: "Place in direct sunlight and water as needed.",
    reviews: [
      { user: "Olivia", rating: 5, comment: "So bright and happy!" },
      { user: "Lucas", rating: 4, comment: "A bit pricey but beautiful." }
    ],
    variants: [
      {
        size: "Standard",
        price: 12.99,
        availability: "In Stock"
      },
      {
        size: "Deluxe",
        price: 18.99,
        availability: "In Stock"
      },
      {
        size: "Premium",
        price: 25.99,
        availability: "Limited Stock"
      }
    ],
    supplier: "Sunny Blossoms",
    giftWrapAvailable: true,
    cartText: "add to cart"
  },
  {
    id: 5,
    title: "Lily",
    description: "Elegant lilies that add a touch of sophistication to any setting.",
    price: 12.99,
    originalPrice: 15.99,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    extraImages: [
      "images/lily1.jpg",
      "images/lily2.jpg"
    ],
    availability: "In Stock",
    category: "Bouquet",
    colorOptions: ["White", "Pink"],
    rating: 4.7,
    seasonalAvailability: "Year-round",
    tags: ["Elegant", "Classic"],
    usage: ["Sympathy", "Anniversary", "Wedding"],
    dimensions: { height: "50cm", width: "30cm" },
    weight: "500g",
    careInstructions: "Keep in cool water and trim stems regularly.",
    reviews: [
      { user: "Sophia", rating: 5, comment: "Elegant and fresh!" },
      { user: "Ethan", rating: 4, comment: "Great for formal events." }
    ],
    variants: [
      {
        size: "Standard",
        price: 12.99,
        availability: "In Stock"
      },
      {
        size: "Deluxe",
        price: 18.99,
        availability: "In Stock"
      },
      {
        size: "Premium",
        price: 25.99,
        availability: "Limited Stock"
      }
    ],
    supplier: "Lily Gardens",
    giftWrapAvailable: true,
    cartText: "add to cart"
  },
  {
    id: 6,
    title: "Orchid",
    description: "An exotic orchid plant that adds elegance and beauty to any room.",
    price: 12.99,
    originalPrice: 15.99,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    extraImages: [
      "images/orchid1.jpg",
      "images/orchid2.jpg"
    ],
    availability: "In Stock",
    category: "Potted Plant",
    colorOptions: ["White"],
    rating: 4.7,
    seasonalAvailability: "Year-round",
    tags: ["Elegant", "Exotic"],
    usage: ["Home Decor", "Gift"],
    dimensions: { height: "60cm", width: "20cm" },
    weight: "700g",
    careInstructions: "Requires indirect sunlight and minimal watering.",
    reviews: [
      { user: "Mia", rating: 5, comment: "Absolutely stunning!" },
      { user: "Noah", rating: 4, comment: "Beautiful but needs special care." }
    ],
    variants: [
      {
        size: "Standard",
        price: 12.99,
        availability: "In Stock"
      },
      {
        size: "Deluxe",
        price: 18.99,
        availability: "In Stock"
      },
      {
        size: "Premium",
        price: 25.99,
        availability: "Limited Stock"
      }
    ],
    supplier: "Exotic Plants Co.",
    giftWrapAvailable: false,
    cartText: "add to cart"
  },
  {
    id: 7,
    title: "Lavender",
    description: "Fragrant lavender that calms the senses and enhances any space.",
    price: 12.99,
    originalPrice: 15.99,
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    extraImages: [
      "images/lavender1.jpg",
      "images/lavender2.jpg"
    ],
    availability: "In Stock",
    category: "Herb",
    colorOptions: ["Purple"],
    rating: 4.5,
    seasonalAvailability: "Summer",
    tags: ["Fragrant", "Relaxing"],
    usage: ["Aromatherapy", "Home Decor"],
    dimensions: { height: "30cm", width: "20cm" },
    weight: "300g",
    careInstructions: "Keep in a dry place and avoid direct sunlight.",
    reviews: [
      { user: "Liam", rating: 5, comment: "The scent is amazing!" },
      { user: "Emma", rating: 4, comment: "Great for calming the mind." }
    ],
    variants: [
      {
        size: "Standard",
        price: 12.99,
        availability: "In Stock"
      },
      {
        size: "Deluxe",
        price: 18.99,
        availability: "In Stock"
      },
      {
        size: "Premium",
        price: 25.99,
        availability: "Limited Stock"
      }
    ],
    supplier: "Herb Garden",
    giftWrapAvailable: true,
    cartText: "add to cart"
  },
]

localStorage.setItem("productInStore", JSON.stringify(products));



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

  // Clear the container before adding new product boxes
  container.innerHTML = '';

  products.forEach((product) => {
    const box = document.createElement("div");
    box.className = "box";

    box.innerHTML = `
    <span class="discount">${product.discount}</span>
    <div class="image">
      <img src="${product.imageSrc}" alt="${product.title}" />
      <div class="icons">
        <a href="#productFav" onClick="addToFavorite(this)" class="fas fa-heart"></a>
        <a href="#products" class="cart-btn" onClick="addToCart(this)">${product.cartText}</a>
        <a href="productDetail.html?id=${product.id}" class="fas fa-share"></a>
      </div>
    </div>
    <div class="content">
      <h3>${product.title}</h3>
      <div class="price">${product.price} <span>${product.originalPrice}</span></div>
    </div>
  `;
    // Add click event listener to the cart button
    const cartBtn = box.querySelector(".cart-btn");
    cartBtn.addEventListener("click", function () {
      Toastify({
        text: "Product added to cart successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#28a745",
        close: true,
      }).showToast();
    });  
    // Add click event listener to the favorite button
    const favoriteBtn = box.querySelector(".fa-heart");
    favoriteBtn.addEventListener("click", function () {
      Toastify({
        text: "Product added to favorites successfully!",
        duration: 3000,
        gravity: "top",
        position: "right",
        backgroundColor: "#FF6347",
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
      <i class="fa-solid fa-cart-shopping"></i>
      <br/><br/>
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
      <i class="fa-solid fa-heart"></i>
      <br/><br/>
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
