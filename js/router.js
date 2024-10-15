// router.js dosyanız
const routes = {
  "/": "<h1>Home Page</h1>",
  "/index.html#home": "<h1>Home</h1>",
  "/index.html#about": "<h1>About</h1>",
  "/index.html#products": "<h1>Product</h1>",
  "/index.html#review": "<h1>Review</h1>",
  "/index.html#conract": "<h1>Contact</h1>",
};


// Router işlevi: URL'yi kontrol edip ilgili içeriği yükler
function router() {
    const content = document.getElementById('content');
    const path = window.location.pathname;
    content.innerHTML = routes[path] || '<h1>404 - Sayfa Bulunamadı</h1>';
  }
  
  // Tüm linklere event eklemek için
  function attachLinkEvents() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault(); // Sayfa yenilemeyi engelle
        const path = this.getAttribute('href'); // Linkin href değerini al
        window.history.pushState({}, '', path); // URL'yi değiştir
        router(); // İçeriği güncelle
      });
    });
  }
  
  // Sayfa yüklendiğinde çalıştır
  window.addEventListener('load', () => {
    router(); // Sayfa yüklendiğinde içerik göster
    attachLinkEvents(); // Linklere event ekle
  });
  
  // Geri/ileri butonlarıyla gezinildiğinde çalıştır
  window.addEventListener('popstate', router);