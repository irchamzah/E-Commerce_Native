document.addEventListener("DOMContentLoaded", () => {
  const cart = [];

  document.querySelectorAll(".product").forEach((product) => {
    product.addEventListener("click", () => {
      const productName = product.querySelector("h2").innerText;
      cart.push(productName);
      alert(`${productName} added to cart!`);
    });
  });
});
