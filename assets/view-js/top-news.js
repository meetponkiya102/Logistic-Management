// Tagify JS
(function () {
    ("use strict");
    var input = document.querySelector("input[name=basic]");
  
    new Tagify(input);
  
    var input = document.querySelector("input[name=tags-select-value-mode");
  
    tagify = new Tagify(input, {
      enforceWhitelist: true,
      mode: "select",
      whitelist: ["Web designer", "UI/UX designer", "Web devloper"],
      blacklist: ["foo", "bar"],
    });
  
})();