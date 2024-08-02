document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  var icon = this;
  if (menu.style.display === "block") {
    menu.style.display = "none"; /* Sembunyikan menu jika sudah ditampilkan */
    icon.classList.remove("fa-xmark"); /* Kembalikan ikon ke fa-bars */
    icon.classList.add("fa-bars");
  } else {
    menu.style.display = "block"; /* Tampilkan menu jika tidak ditampilkan */
    icon.classList.remove("fa-bars"); /* Ganti ikon menjadi fa-xmark */
    icon.classList.add("fa-xmark");
  }
});
