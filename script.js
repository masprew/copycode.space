// Fungsi untuk Menyalin Teks
function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => {
      showNotification();
    })
    .catch(err => {
      alert("Gagal menyalin teks: " + err);
    });
}

// Fungsi untuk Menampilkan Notifikasi
function showNotification() {
  const notification = document.getElementById("notification");
  notification.style.opacity = "1";
  notification.style.bottom = "40px";

  setTimeout(() => {
    notification.style.opacity = "0";
    notification.style.bottom = "20px";
  }, 2000);
}

// Fungsi untuk Preview (Membuka Link)
function preview(url) {
  window.open(url, "_blank");
}