
window.onload = function () {
  const myElement = document.getElementById("myBtn");
  console.log(myElement);
};

// Modal'ı alın
var modal = document.getElementById("myModal");
console.log(modal, "modalqqq");

// Butonu alın
var btn = document.getElementById("myBtn");
console.log(modal, "btn1");

// Kapatma düğmesini alın
var span = document.getElementsByClassName("close")[0];

// Butona tıklanınca modalı göster
btn.onclick = function () {
  modal.style.display = "block";
  console.log("Modal açıldı."); // Kontrol için konsola yazdırma
};

// Kullanıcı bilgisi mevcut loggedInUser key'i altında localStorage'da
document.getElementById('add-reminder').addEventListener('click', function () {
  // Kullanıcı bilgisi çekiliyor
  const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser") || "{}");
  console.log(loggedInUser,"seyma")

  if (!loggedInUser) {
      alert('Lütfen önce giriş yapınız!');
      return;
  }

  // Input alanlarından veri alınıyor
  const reminderHeader = document.getElementById('name-input').value.trim();
  const reminderBody = document.getElementById('comment-box').value.trim();

  if (!reminderHeader || !reminderBody) {
      alert('Lütfen tüm alanları doldurunuz.');
      return;
  }

  // Yeni hatırlatıcı objesi oluşturuluyor
  const newReminder = {
      id: Date.now(), // Unique ID
      header: reminderHeader,
      body: reminderBody,
      date: new Date().toISOString(), // Tarih ekleniyor
  };

  // Kullanıcının hatırlatıcı listesi mevcut mu kontrol ediliyor
  if (!loggedInUser.reminders) {
      loggedInUser.reminders = [];
  }

  // Yeni hatırlatıcı listeye ekleniyor
  loggedInUser.reminders.push(newReminder);

  // Güncellenmiş kullanıcı bilgisi localStorage'a kaydediliyor
  localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));

  // Kullanıcıya başarılı mesajı gösteriliyor
  alert('Reminder successfully added!');

  // Input alanlarını temizleme
  document.getElementById('name-input').value = '';
  document.getElementById('comment-box').value = '';
});


// Kapatma düğmesine tıklanınca modalı kapat
span.onclick = function () {
  modal.style.display = "none";
  console.log("Modal kapatıldı."); // Kontrol için konsola yazdırma
};

// Modal dışında bir yere tıklanınca modalı kapat
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    console.log("Modal dışına tıklandı, modal kapatıldı."); // Konsola yazdırma
  }
};



// LocalStorage'den loggedInUser objesini çek

// Hatırlatmaları ekrana yazdıran fonksiyon
function renderReminders(userObject) {
  const container = document.getElementById("reminders-container");
  container.innerHTML = ""; // Eski içerikleri temizle

  // Kullanıcı hatırlatmalarını kontrol et
  if (!userObject || !Array.isArray(userObject.reminders)) {
    console.error("loggedInUser.reminders is not a valid array");
    return;
  }

  // Reminder'ları işleyip ekrana yazdır
  userObject.reminders.forEach((reminder) => {
    // Reminder kartı oluştur
    const reminderCard = document.createElement("div");
    reminderCard.classList.add("saved-card");

    reminderCard.innerHTML = `
    <div class="card-header">
      <p>User: ${userObject.fullName}</p>
      <p>Card Name: Reminder</p>
      <button class="detail-button" onclick="updateReminder(${reminder.id})">Update</button>
    </div>
    <div class="card-content">
      <div class="details">
        <p class="number"><strong>Reason to celebrate:</strong> ${reminder.header}</p>
        <p>Description: ${reminder.body}</p>
        <p>Date:${new Date(reminder.date).toLocaleString()}</p>
      </div>
    </div>
  `;
    container.appendChild(reminderCard);
  });
}

// Reminder güncelleme işlemi
function updateReminder(id) {
  console.log("Updating reminder with ID:", id);
  // Güncelleme mantığını burada tanımlayabilirsiniz
}

// Sayfa yüklendiğinde render et
renderReminders(loggedInUser);
