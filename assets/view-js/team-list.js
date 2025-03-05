const filterButton = document.getElementById('filter-button');
const filterForm = document.getElementById('filter-form');

filterForm.style.transition = "opacity 1s ease, max-height 1s ease";
filterForm.style.opacity = "0"; 
filterForm.style.maxHeight = "0"; 
filterForm.style.overflow = "hidden";
filterForm.style.display = "none";

filterButton.addEventListener('click', function() {
    if (filterForm.style.display === "none" || filterForm.style.opacity === "0") {
        filterForm.style.display =   "flex"; 
        requestAnimationFrame(() => {
            filterForm.style.opacity = "1";
            filterForm.style.maxHeight = "500px"; 
        });
    } else {
        filterForm.style.opacity = "0";
        filterForm.style.maxHeight = "0";
        setTimeout(() => {
            filterForm.style.display = "none";
        }, 800); 
    }
});

// Tagify JS
(function () {
    "use strict";
  
    // 1. Select input elements
    var inputTags = document.querySelector("input[name=tags-select-value-mode]");
    var inputState = document.querySelector("input[name=tags-select-mode]");

    // 2. Initialize Tagify for tags input
    var tagifyTags = new Tagify(inputTags, {
      enforceWhitelist: true,
      mode: "select",
      whitelist: ["Web designer", "UI/UX designer", "Web developer"],
      blacklist: ["foo", "bar"],
    });

    // 3. Initialize Tagify for state selection
    var tagifyState = new Tagify(inputState, {
      enforceWhitelist: true,
      mode: "select",
      whitelist: ["Gujarat", "Punjab", "Rajasthan"],
      blacklist: ["foo", "bar"],
    });
    
})();