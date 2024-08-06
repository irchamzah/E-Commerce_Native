document.addEventListener("DOMContentLoaded", function () {
  const cartIcon = document.getElementById("cart");
  const totalPrice = document.querySelector(".total-price");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const closeCart = document.getElementById("close-cart");
  const body = document.body;

  function toggleSidebar() {
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
  }
  cartIcon.addEventListener("click", toggleSidebar);
  totalPrice.addEventListener("click", toggleSidebar);

  function closeSidebar() {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("no-scroll");
  }
  overlay.addEventListener("click", closeSidebar);
  closeCart.addEventListener("click", closeSidebar);
});
