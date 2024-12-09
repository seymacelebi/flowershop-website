function movePaymentDetailsToLoggedInUser() {
  // loggedInUser'ı başka bir değişkene ata
  let currentUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const paymentDetails =
    JSON.parse(localStorage.getItem("paymentDetails")) || [];

  if (!currentUser) {
    console.error("No loggedInUser found in localStorage.");
    return;
  }

  currentUser.completedOrders = paymentDetails;

  localStorage.setItem("loggedInUser", JSON.stringify(currentUser));
  // Eski PaymentDetails verisini temizle
  //localStorage.removeItem("paymentDetails");
  console.log(loggedInUser, "deneme");

  console.log("Payment details moved to loggedInUser:", currentUser);
}
movePaymentDetailsToLoggedInUser();

function displayOrders(orderList) {
  const orderContainer = document.getElementById("order-list");

  if (!orderList || orderList.length === 0) {
    console.error("No completed orders to display.");
    orderContainer.innerHTML = `<p>No completed orders found.</p>`;
    return;
  }

  // Siparişleri döngü ile oluştur ve ekle
  orderList.forEach((order) => {
    const orderCard = document.createElement("div");
    orderCard.classList.add("order-card");

    // Sipariş tarihini, alıcıyı ve toplam tutarı oluştur
    const orderHeader = `
          <div class="order-header">
            <p>Sipariş ID: ${order.id}</p>
            <p>Alıcı: ${order.orderDetails.recipientName}</p>
            <p>Toplam Tutar: ${parseFloat(order.subtotal).toFixed(2)} TL</p>
            <button class="detail-button">Detay</button>
          </div>
        `;

    // Sipariş içeriğini oluştur
    const orderContent = `
          <div class="order-content">
            <div class="product-image">
              <img src="${order.image}" alt="${order.title}" />
            </div>
            <div class="product-details">
              <p>Ürün Adedi: ${order.quantity}</p>
              <p>
                Sipariş Statüsü: 
                <span class="status-${order.status.toLowerCase()}">${
      order.status
    }</span>
              </p>
            </div>
          </div>
        `;

    // HTML'i birleştir ve karta ekle
    orderCard.innerHTML = orderHeader + orderContent;

    // Kartı sipariş listesine ekle
    orderContainer.appendChild(orderCard);
  });
}

// localStorage'dan loggedInUser'ı al

if (loggedInUser && Array.isArray(loggedInUser.completedOrders)) {
  const completedOrders = loggedInUser.completedOrders;
  displayOrders(completedOrders); // Siparişleri ekrana bas
} else {
  console.error("No completed orders found in loggedInUser.");
  displayOrders([]); // Eğer completedOrders yoksa boş bir liste gönder
}
// const orderList =[];
//  displayOrders(orderList);
// document.addEventListener("DOMContentLoaded", () => {
//   displayOrders(orderList);
//   });