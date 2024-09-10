// Ürün verilerini içeren dizi
const products = [
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to sepet",
  },
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to cart",
  },
  {
    discount: "-10%",
    imageSrc: "images/flower4.jpg",
    title: "flower pot",
    price: "$12.99",
    originalPrice: "$15.99",
    cartText: "add to sepet",
  },
  {
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
            <a href="#" class="cart-btn">${product.cartText}</a>
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
