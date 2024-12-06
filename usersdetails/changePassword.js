document.getElementById('save-button').addEventListener('click', () => {
    // Gerekli elemanları seçiyoruz
    const oldPasswordInput = document.getElementById('old-password').value;
    const newPasswordInput = document.getElementById('new-password').value;
    const confirmPasswordInput = document.getElementById('confirm-password').value;

    // localStorage'dan loggedInUser'ı alıyoruz
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        alert("Kullanıcı bilgisi bulunamadı!");
        return; 
    }

    // Şifre kontrolleri
    if (oldPasswordInput !== loggedInUser.password) {
        alert("Old password is incorrect!");
        return;
    }

    if (newPasswordInput !== confirmPasswordInput) {
        alert("New passwords do not match!");
        return;
    }

    if (!loggedInUser.lastPasswords) {
        loggedInUser.lastPasswords = [];
    }

    if (loggedInUser.lastPasswords.includes(newPasswordInput)) {
        alert("The new password must be different from your last 3 passwords!");
        return;
    }

    // Şifreyi güncelle ve son 3 şifreyi yönet
    loggedInUser.lastPasswords.unshift(loggedInUser.password); // Eski şifreyi kaydet
    loggedInUser.lastPasswords = loggedInUser.lastPasswords.slice(0, 3); // Sadece son 3 şifreyi tut
    loggedInUser.password = newPasswordInput; // Yeni şifreyi ata

    // localStorage'da güncelle
    localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
    alert("Your password has been updated successfully!");
});
