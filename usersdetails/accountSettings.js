if (typeof loggedInUser === 'undefined') {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || {};
    console.log(loggedInUser, "loggedInUser"
    )
}
// loggedInUser'daki bilgileri input alanlarına doldur
if (loggedInUser.fullName) {
    document.getElementById("namesurname").value = loggedInUser.fullName;
}
if (loggedInUser.email) {
    document.getElementById("email").value = loggedInUser.email;
}
if (loggedInUser.phoneNumber) {
    document.getElementById("phoneNumber").value = loggedInUser.phoneNumber;
}
if (loggedInUser.address) {
    document.getElementById("address").value = loggedInUser.address;
}

// "Kaydet" butonuna tıklanınca bilgileri kaydet
document.getElementById("saveUserInfo").addEventListener("click", () => {
    // Formdan bilgileri al
    const fullName = document.getElementById("namesurname").value;
    const email = document.getElementById("email").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const address = document.getElementById("address").value;

    // loggedInUser'ı güncelle
    loggedInUser = {
        ...loggedInUser, // Mevcut diğer bilgileri korumak için spread operatörü
        fullName,
        email,
        phoneNumber,
        address,
    };

    // Güncellenen loggedInUser'ı localStorage'a kaydet
    localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));

    alert("Bilgiler başarıyla kaydedildi!");
});
