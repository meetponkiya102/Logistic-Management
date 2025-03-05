//Toggle
const filterButton = document.getElementById('filter-button');
const filterForm = document.getElementById('filter-form');

filterForm.style.transition = "opacity 2s ease, max-height 1s ease";
filterForm.style.opacity = "0"; 
filterForm.style.maxHeight = "0"; 
filterForm.style.overflow = "hidden";
filterForm.style.display = "none";

filterButton.addEventListener('click', function() {
    if (filterForm.style.display === "none" || filterForm.style.opacity === "0") {
        filterForm.style.display =   "flex"; 
        requestAnimationFrame(() => {
            filterForm.style.opacity = "1";
            filterForm.style.maxHeight = "300px"; 
        });
    } else {
        filterForm.style.opacity = "0";
        filterForm.style.maxHeight = "0";
        setTimeout(() => {
            filterForm.style.display = "none";
        }, 800); 
    }
});

// Dropdown
// Tagify JS
(function () {
  ("use strict");

  var input = document.querySelector("input[name=tags-select-value-mode");

  tagify = new Tagify(input, {
    enforceWhitelist: true,
    mode: "select",
    whitelist: ["Web designer", "UI/UX designer", "Web devloper"],
    blacklist: ["foo", "bar"],
  });

})();

