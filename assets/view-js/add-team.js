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

  // Set a default value for the state input
  tagifyState.addTags(["Gujarat"]); // Default selected option

})();