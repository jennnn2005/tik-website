// Fungsi untuk menampilkan pesan
function showMessage() {
  // Menampilkan pesan "Barang segera di antar" di dalam elemen <p> dengan kelas "message"
  let messageElements = document.querySelectorAll(".message");

  messageElements.forEach(function (element) {
    element.textContent = "Barang segera di antar!";
  });
}
