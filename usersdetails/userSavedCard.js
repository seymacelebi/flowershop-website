var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var spans = document.getElementsByClassName("close");
if (spans.length > 0) {
  var span = spans[0];
  // span ile işlemler yapabilirsiniz.
} else {
  console.error("Hedeflenen öğe bulunamadı.");
}

btn.onclick = function () {
  modal.style.display = "block";
};

document
  .getElementById("add-creditcard")
  .addEventListener("click", function () {
    const loggedInUser = JSON.parse(
      localStorage.getItem("loggedInUser") || "{}"
    );
    console.log(loggedInUser, "deneme");

    if (!loggedInUser) {
      alert("Please sign in first!");
      return;
    }

    const cardHeader = document.getElementById("name-input").value.trim();
    const cardNumber = document.getElementById("cardnumber-input").value.trim();

    if (!cardHeader || !cardHeader) {
      alert("Please fill in all fields.");
      return;
    }

    const newCreditCard = {
      id: Date.now(),
      header: cardHeader,
      cardNumber: cardNumber,
    };

    // Kullanıcının hatırlatıcı listesi mevcut mu kontrol ediliyor
    if (!loggedInUser.userCreditCardList) {
      loggedInUser.userCreditCardList = [];
    }
    loggedInUser.userCreditCardList.push(newCreditCard);
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    alert("Address successfully added!");
    // Input alanlarını temizleme
    document.getElementById("name-input").value = "";
    document.getElementById("cardnumber-input").value = "";
  });

// Kapatma düğmesine tıklanınca modalı kapat
span.onclick = function () {
  modal.style.display = "none";
};

// Modal dışında bir yere tıklanınca modalı kapat
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// LocalStorage'den loggedInUser objesini çek
function renderCreditCards(userObject) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    if (!userObject || !Array.isArray(userObject.userCreditCardList)) {
      console.error("loggedInUser.reminders is not a valid array");
      return;
    }
  
    userObject.userCreditCardList.forEach((cards) => {
      const creditCard = document.createElement("div");
      creditCard.classList.add("saved-card");
  
      creditCard.innerHTML = `
     
      <div class="card-header">
        <p>User: ${userObject.fullName}</p>
        <button class="detail-button" onclick="updateCreditCard(${cards.id})">Update</button>
      </div>
      <div class="card-content">
        <div class="details">
          <p class="number"><strong>Address text:</strong> ${cards.header}</p>
          <p>Card Number: ${cards.cardNumber}</p>
        </div>
      </div>
    `;
    container.appendChild(creditCard);
    })
  }
  // Reminder güncelleme işlemi
  function updateCreditCard(id) {
      console.log("Updating reminder with ID:", id);
      // Güncelleme mantığını burada tanımlayabilirsiniz
    }
  // Sayfa yüklendiğinde render et
  renderCreditCards(loggedInUser);
