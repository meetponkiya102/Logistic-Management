// Custom input search
var result = document.querySelector(".results");
var Arr = [
  "HTML",
  "CSS",
  "PHP",
  "Javascript",
  "Dart",
  "Python",
  "Swift",
  "Java",
  "C++",
  "Go",
  "SASS",
  "C#",
  "LESS",
  "Kotlin",
  "Q#",
  "Xray",
  "Zero",
  "Perl",
  "Ruby",
];

// auto complete function
function autoComplete(Arr, Input) {
  return Arr.filter((e) => e.toLowerCase().includes(Input.toLowerCase()));
}

function getValue(val) {
  // if no value
  if (!val) {
    result.innerHTML = "";
    return;
  }

  // search goes here
  var data = autoComplete(Arr, val);

  // append list data
  var res = "<ul>";
  data.forEach((e) => {
    res += "<li>" + e + "</li>";
  });
  res += "</ul>";
  result.innerHTML = res;
}

// Custom add search option
const selected = document.querySelector(".selected-box");
const optionsContainer = document.querySelector(".options-container");
const searchBox = document.querySelector(".search-box input");
const optionsList = document.querySelectorAll(".selection-option");

// Toggle the dropdown to open at a fixed position relative to the page
selected.addEventListener("click", () => {

  // Set optionsContainer to be absolutely positioned
  optionsContainer.style.position = "absolute";
  optionsContainer.style.zIndex="1000";
  optionsContainer.style.top="50px";

  // Toggle visibility
  optionsContainer.classList.toggle("active");

  // Reset and focus the search box if options container is open
  if (optionsContainer.classList.contains("active")) {
    searchBox.value = "";
    filterList("");
    searchBox.focus();
  }
});

// Update the selected option and close the dropdown
optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});

// Filter options as the user types
searchBox.addEventListener("keyup", function (e) {
  filterList(e.target.value);
});

// Filter the list of options based on the search term
const filterList = (searchTerm) => {
  searchTerm = searchTerm.toLowerCase();
  optionsList.forEach((option) => {
    let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase();
    if (label.indexOf(searchTerm) != -1) {
      option.style.display = "block";
    } else {
      option.style.display = "none";
    }
  });
};

// Close the dropdown if clicking outside of it
document.addEventListener("click", (e) => {
  if (!selected.contains(e.target) && !optionsContainer.contains(e.target)) {
    optionsContainer.classList.remove("active");
  }
});
