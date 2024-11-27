console.log("lalaalalal")
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