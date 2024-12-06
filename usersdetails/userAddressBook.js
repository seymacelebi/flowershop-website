var modal = document.getElementById("myModal");
console.log(modal, "modal");

var btn = document.getElementById("myBtn");
console.log(btn, "ss");

var spans = document.getElementsByClassName("close");
if (spans.length > 0) {
  var span = spans[0];
  // span ile işlemler yapabilirsiniz.
} else {
  console.error("Hedeflenen öğe bulunamadı.");
}

btn.onclick = function () {
  modal.style.display = "block";
  console.log("Modal Açıldı.");
};

document.getElementById("add-address").addEventListener("click", function () {
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  console.log(loggedInUser, "deneme");

  if (!loggedInUser) {
    alert("Please sign in first!");
    return;
  }

  const addressHeader = document.getElementById("name-input").value.trim();
  const addressBody = document.getElementById("comment-box").value.trim();
  const phoneNumber = document.getElementById("phone-input").value.trim();

  if (!addressHeader || !addressBody) {
    alert("Please fill in all fields.");
    return;
  }

  const newAddress = {
    id: Date.now(),
    header: addressHeader,
    body: addressBody,
    phoneNumber: phoneNumber,
  };

  // Kullanıcının hatırlatıcı listesi mevcut mu kontrol ediliyor
  if (!loggedInUser.addressList) {
    loggedInUser.addressList = [];
  }
  loggedInUser.addressList.push(newAddress);
  localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

  alert("Address successfully added!");
  // Input alanlarını temizleme
  document.getElementById("name-input").value = "";
  document.getElementById("comment-box").value = "";
  document.getElementById("phone-input").value = "";
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
function renderAddress(userObject) {
  console.log(userObject, "kfdkflşd");

  const container = document.getElementById("address-container");
  container.innerHTML = "";
  if (!userObject || !Array.isArray(userObject.addressList)) {
    console.error("loggedInUser.reminders is not a valid array");
    return;
  }

  userObject.addressList.forEach((address) => {
    const addresCard = document.createElement("div");
    addresCard.classList.add("saved-card");

    addresCard.innerHTML = `
    <div class="address-card">
    <div class="address-header">
      <p>User: ${userObject.fullName}</p>
      <button class="detail-button" onclick="updateAddress(${address.id})">Update</button>
    </div>
    <div class="address-content">
      <div class="details">
        <p class="number"><strong>Address text:</strong> ${address.header}</p>
        <p>Description: ${address.body}</p>
        <p>Phone Number: ${address.phoneNumber}</p>
      </div>
    </div>
    </div>
  `;
  container.appendChild(addresCard);
  })
}
// Reminder güncelleme işlemi
function updateAddress(id) {
    console.log("Updating reminder with ID:", id);
    // Güncelleme mantığını burada tanımlayabilirsiniz
  }
// Sayfa yüklendiğinde render et
renderAddress(loggedInUser);