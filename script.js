const filterButtons = document.querySelectorAll("[data-filter]");
const menuCards = document.querySelectorAll(".menu-card");
const filterStatus = document.querySelector(".filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;
    let visibleCount = 0;

    filterButtons.forEach((filterButton) => {
      filterButton.setAttribute("aria-pressed", String(filterButton === button));
    });

    menuCards.forEach((card) => {
      const isVisible = selectedCategory === "all" || card.dataset.category === selectedCategory;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    const itemLabel = visibleCount === 1 ? "item" : "items";
    filterStatus.textContent = selectedCategory === "all"
      ? `Showing all ${visibleCount} menu items.`
      : `Showing ${visibleCount} ${selectedCategory} ${itemLabel}.`;
  });
});
