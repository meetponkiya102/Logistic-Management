// Tagify JS
(function () {
    ("use strict");
    // 1. Basic Select
  
    // initialize Tagify on the above input node reference
    new Tagify(input);
  
    var input = document.querySelector("input[name=tags-select-value-mode");
  
    tagify = new Tagify(input, {
      enforceWhitelist: true,
      mode: "select",
      whitelist: ["Web designer", "UI/UX designer", "Web devloper"],
      blacklist: ["foo", "bar"],
    });
  
    tagify.on("add", onAddTag);
    tagify.DOM.input.addEventListener("focus", onSelectFocus);
  })();