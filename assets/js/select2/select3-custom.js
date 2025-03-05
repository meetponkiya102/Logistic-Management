// Tagify JS
(function () {
  ("use strict");
  // 1. Basic Select

  // The DOM element you wish to replace with Tagify
  var input = document.querySelector("input[name=basic]");

  // initialize Tagify on the above input node reference
  new Tagify(input);

  var input2 = document.querySelector("input[name=tags-select-mode]");
  var input1 = document.querySelector("input[name=tags-select-value-mode");
  
  tagify = new Tagify(input1, {
    enforceWhitelist: true,
    mode: "select",
    whitelist: ["Web designer", "UI/UX designer", "Web devloper"],
    blacklist: ["foo", "bar"],
  });

  tagify = new Tagify(input2, {
    enforceWhitelist: true,
    mode: "select",
    whitelist: ["UI Kits", "Bonus UI", "Bookmarks"],
    blacklist: ["foo", "bar"],
  });

  tagify.on("add", onAddTag);
  tagify.DOM.input.addEventListener("focus", onSelectFocus);


})();
