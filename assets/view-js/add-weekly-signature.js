// Tagify JS
(function () {
    ("use strict");
    var input = document.querySelector("input[name=tags-select-value-mode");
    
     tagify = new Tagify(input, {
      enforceWhitelist: true,
      mode: "select",
      whitelist: [
                  "મેષ (mesh)", 
                  "વૃષભ (vrushabh)", 
                  "મિથુન (mithum)",
                  "કર્ક (kark)",
                  "સિંહ (sinh)",
                  "કન્યા (kanya)",
                  "તુલા (tula)",
                  "વૃશ્ચિક (vrushchik)",
                  "ધન (dhanu)",
                  "મકર (makar)",
                  "કુંભ (kumbha)",
                  "મીન (meen)"
                ],
      blacklist: ["foo", "bar"],
    });
  
  })();