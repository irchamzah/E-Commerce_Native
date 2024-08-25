document.addEventListener("DOMContentLoaded", function () {
  // leftbar
  const filterButton = document.getElementById("filter-button");
  const leftbarFilter = document.getElementById("leftbar-filter");
  const closeFilterButton = document.getElementById("close-leftbar-filter");
  const overlay = document.getElementById("overlay");
  const body = document.body;

  function toggleLeftbarFilter() {
    leftbarFilter.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("no-scroll");
  }
  filterButton.addEventListener("click", toggleLeftbarFilter);

  function closeLeftbarFilter() {
    leftbarFilter.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("no-scroll");
  }
  overlay.addEventListener("click", closeLeftbarFilter);
  closeFilterButton.addEventListener("click", closeLeftbarFilter);

  // filter price
  const minRange = document.getElementById("min-range");
  const maxRange = document.getElementById("max-range");
  const minPrice = document.getElementById("min-price");
  const maxPrice = document.getElementById("max-price");
  const resetButton = document.getElementById("reset-button");

  function updateRanges() {
    minPrice.value = minRange.value;
    maxPrice.value = maxRange.value;
  }

  minRange.addEventListener("input", () => {
    if (parseInt(minRange.value) >= parseInt(maxRange.value)) {
      minRange.value = maxRange.value - 1;
    }
    minPrice.value = minRange.value;
  });

  maxRange.addEventListener("input", () => {
    if (parseInt(maxRange.value) <= parseInt(minRange.value)) {
      maxRange.value = parseInt(minRange.value) + 1;
    }
    maxPrice.value = maxRange.value;
  });

  minPrice.addEventListener("input", () => {
    if (parseInt(minPrice.value) >= parseInt(maxPrice.value)) {
      minPrice.value = maxPrice.value - 1;
    }
    minRange.value = minPrice.value;
  });

  maxPrice.addEventListener("input", () => {
    if (parseInt(maxPrice.value) <= parseInt(minPrice.value)) {
      maxPrice.value = parseInt(minPrice.value) + 1;
    }
    maxRange.value = maxPrice.value;
  });

  resetButton.addEventListener("click", () => {
    minRange.value = minRange.min;
    maxRange.value = maxRange.max;
    updateRanges();
  });
});
