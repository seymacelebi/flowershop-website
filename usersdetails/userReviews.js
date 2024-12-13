
const stars = document.querySelectorAll(".star");
const ratingValueDisplay = document.getElementById("rating-value");
let selectedRating = 0;

stars.forEach((star) => {
  star.addEventListener("click", () => {
    // Remove the "selected" class from all stars
    stars.forEach((s) => s.classList.remove("selected"));

    // Add the "selected" class to the clicked star and all previous stars
    star.classList.add("selected");
    const value = star.getAttribute("data-value");
    selectedRating = value;

    // Highlight all the stars up to the clicked one
    for (let i = 0; i < value; i++) {
      stars[i].classList.add("selected");
    }

    // Display the selected rating value
    ratingValueDisplay.textContent = `Seçilen puan: ${selectedRating}`;

  });
});
// ----------------------------------------------------

function showReview(item) {
  const container = document.getElementById("review-container");
  container.innerHTML = ""; // Mevcut içeriği temizle

  if (!item || !Array.isArray(item.completedOrders)) {
      console.error("loggedInUser.completedOrders is not a valid array");
      return;
  }

  // completedOrders verilerini ekrana yazdır
  item.completedOrders.forEach((item2) => {
      const reviewCard = document.createElement("div");
      reviewCard.classList.add("review-cart");

      reviewCard.innerHTML = `
          <img src="${item2.image || 'images/default.jpg'}" alt="Ürün Resmi" />

          <div class="review-content">
              <p class="product-name">${item2.title || 'Unknown Product'}</p>
              <p class="delivery-date">Status: ${item2.status || 'Not Specified'}</p>
              <span class="rating-stars">
                  ${generateStars(item2.rating || 0)}
                  <span class="review-count">(${item2.reviewCount || 0})</span>
              </span>
              <button class="review-button" data-id="${item2.id}">Review Product</button>
          </div>
      `;

      container.appendChild(reviewCard);
  });

  // Modal ve düğme ile ilgili işlemleri başlat
  setupModal();
}

function setupModal() {
  // Modal öğesini alın
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  const ratingStars = document.querySelectorAll(".rating-container .star");
  const ratingValue = document.getElementById("rating-value");
  const reviewInput = document.getElementById("name-input");
  const addReviewButton = document.getElementById("add-review");

  let selectedRating = 0;
  let currentProductId = null;

  // Kapatma düğmesine tıklanınca modalı kapat
  if (span) {
      span.onclick = function () {
          modal.style.display = "none";
      };
  }

  // Modal dışında bir yere tıklanınca modalı kapat
  window.onclick = function (event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  };

  // Yıldızlara tıklama olayını yönet
  ratingStars.forEach((star) => {
      star.addEventListener("click", () => {
          selectedRating = parseInt(star.getAttribute("data-value"));
          ratingValue.textContent = `Seçilen puan: ${selectedRating}`;

          // Tüm yıldızları temizle ve seçili olanları işaretle
          ratingStars.forEach((s) => s.classList.remove("selected"));
          for (let i = 0; i < selectedRating; i++) {
              ratingStars[i].classList.add("selected");
          }
      });
  });

  // Düğmeler için tıklama olaylarını dinle
  const container = document.getElementById("review-container");
  container.addEventListener("click", (event) => {
      if (event.target.classList.contains("review-button")) {
          // Tıklanan butonu al ve üst parent öğeye ulaş
          const reviewCart = event.target.closest(".review-cart");
          if (reviewCart) {
              const productName = reviewCart.querySelector(".product-name").textContent || "Unknown Product";
              currentProductId = parseInt(event.target.getAttribute("data-id"));

              // Modal içine değerleri aktar
              reviewInput.value = productName; // Ürün ismini Review Header'a aktar
              ratingValue.textContent = "Your rating: 0"; // Varsayılan puan
              ratingStars.forEach((star) => star.classList.remove("selected"));

              // Modal'ı göster
              modal.style.display = "block";
          }
      }
  });

  // Değişiklikleri kaydet ve localStorage'a ekle
  addReviewButton.addEventListener("click", () => {
      if (currentProductId !== null && selectedRating > 0) {
          const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

          if (loggedInUser && loggedInUser.completedOrders) {
              const order = loggedInUser.completedOrders.find(order => order.id === currentProductId);
              if (order) {
                  order.rating = selectedRating; // Rating değerini ekle

                  // localStorage'ı güncelle
                  localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

                  alert(`Puanınız kaydedildi: ${selectedRating}`);
              }
          }

          // Modal'ı kapat
          modal.style.display = "none";
      } else {
          alert("Please select star!");
      }
  });
}


  
//   // Yıldız değerlendirmesi oluşturma fonksiyonu
  function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? '<i class="fas fa-star-half-alt"></i>' : '';
    const emptyStars = 5 - Math.ceil(rating);
  
    return (
      '<i class="fas fa-star"></i>'.repeat(fullStars) +
      halfStar +
      '<i class="far fa-star"></i>'.repeat(emptyStars)
    );
  }
  
showReview(loggedInUser);
