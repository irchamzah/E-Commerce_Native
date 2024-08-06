document.getElementById("menu-toggle").addEventListener("click", function () {
  var menu = document.getElementById("menu");
  var icon = this;
  if (menu.style.display === "block") {
    menu.style.display = "none";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  } else {
    menu.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
});
