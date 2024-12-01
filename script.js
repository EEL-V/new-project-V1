document.getElementById("toggleDetails").addEventListener("click", function () {
  const details = document.getElementById("details");
  if (details.style.display === "none") {
    details.style.display = "block";
    this.textContent = "Sembunyikan Detail";
  } else {
    details.style.display = "none";
    this.textContent = "Detail Lebih Lanjut";
  }
});
