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

})();

//display image
function previewImage(input) {
  const file = input.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
          const imageContainer = document.getElementById('imageContainer'); 
          imageContainer.innerHTML = '';

          const imgElement = document.createElement('img');
          imgElement.src = e.target.result;
          imgElement.alt = 'img';
          imgElement.style.display = 'block';
          imgElement.style.maxWidth = '100%';

          imageContainer.appendChild(imgElement);
      }
      reader.readAsDataURL(file);
  }
}

function DisplayData() {
  const tableBody = document.getElementById("tBody");
  const inputImg = document.getElementById("inputImg");
  const errorContainer = document.querySelector(".errorContainer"); 
  const errorContainerName = document.querySelector(".errorContainerName"); 
 
  errorContainer.innerHTML = '';

  const file = inputImg.files[0]; 
  
  
  if (!file) {
      errorContainer.innerHTML = 'Please upload an image/video.';
      return;
  }
  

  const reader = new FileReader();

  reader.onload = function (e) {
      const newRow = document.createElement('tr');
      const numberCell = document.createElement('th');
      numberCell.scope = 'row';
      numberCell.className = 'text-center table-data';
      numberCell.innerText = tableBody.children.length + 1;

      const mediaCell = document.createElement('td');
      mediaCell.className = 'text-center table-data';
      
      const media = document.createElement('img');
      media.src = e.target.result; 
      media.style.width = '100px'; 
      media.style.height = 'auto'; 
      mediaCell.appendChild(media);


      const actionCell = document.createElement('td');
      actionCell.className = 'text-center col-fix table-data';
      actionCell.innerHTML = `
          <ul class="action">
              <li class="edit"><a href="#" class="bg-success p-2 rounded"><i class="fa fa-pencil text-white" aria-hidden="true"></i></a></li>
              <li class="delete"><a href="#" class="bg-danger p-2 rounded" onclick="deleteRow()"><i class="fa fa-trash-o text-white" aria-hidden="true"></i></a></li>
          </ul>
      `;
      
      newRow.appendChild(numberCell);
      newRow.appendChild(mediaCell);
      newRow.appendChild(actionCell);

      tableBody.appendChild(newRow);

      inputImg.value = '';
  };
  
  reader.readAsDataURL(file);
}

const row = document.getElementById('toggle-row');
row.style.display='none';
function toggleData(button){
  
  if (button == 'yes') {
    row.style.display = '';
  }
  else{
    row.style.display = 'none';
  }
}