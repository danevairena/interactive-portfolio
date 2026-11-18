const filterButtons = document.querySelectorAll(".filter-btn");

export function initFilters(onFilterChange) {
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedFilter = button.dataset.filter;

            filterButtons.forEach(filterButton => {
                const isActive =
                    filterButton.dataset.filter === selectedFilter;

                filterButton.classList.toggle("active", isActive);
                filterButton.setAttribute("aria-pressed", String(isActive));
            });

            onFilterChange(selectedFilter);
        });
    });
}