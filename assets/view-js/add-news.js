// yes-no button
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

const toggleRow = document.getElementById("toggle-row");

toggleRow.style.display = "none";

//click event
yesButton.addEventListener("click", function () {
  toggleRow.style.display = "flex";
});

noButton.addEventListener("click", function () {
  toggleRow.style.display = "none";
});

// update count

function updateCharCount() {
  var input = document.getElementById("newstitle");
  var charCountDisplay = document.getElementById("charcount");
  if (input && charCountDisplay) {
    var charCount = input.value.length;
    charCountDisplay.textContent = charCount + "/115 characters used";
  }
}

function updateCharCountShort() {
  var inputShort = document.getElementById("shortDescription");
  var charCountShortDisplay = document.getElementById("charShortCount");
  if (inputShort && charCountShortDisplay) {
    var charCount = inputShort.value.length;
    charCountShortDisplay.textContent = charCount + "/300 characters used";
  }
}
//display Image
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

//display video
function previewVideo(input){
  const file = input.files[0];
  
  if(file){
    const reader = new FileReader();
    reader.onload = function(e) {
        const videoContainer = document.getElementById('videoContainer'); 
        videoContainer.innerHTML = '';
        const videoElement = document.createElement('video');
        videoElement.controls = true; 
        videoElement.style.display = 'block';
        videoElement.style.maxWidth = '100%';

        const sourceElement = document.createElement('source');
        sourceElement.src = e.target.result;
        sourceElement.type = 'video/mp4';
        videoElement.style.display = 'block';
        videoElement.style.maxWidth = '100%';

        videoElement.appendChild(sourceElement);
        videoContainer.appendChild(videoElement);

        videoElement.load();
    }
    reader.readAsDataURL(file);
  }
}

//display youtube video
function previewYoutubeLink(input) {
  const youtubePreview = document.getElementById('youtubePreview');
  const videoId = input.value.split('v=')[1];
  
  if (videoId) {
    
    const embedLink = `https://www.youtube.com/embed/${videoId}`;  
    youtubePreview.innerHTML = `<iframe width="560" height="315" src="${embedLink}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;

  } else {
    youtubePreview.innerHTML = 'Invalid YouTube link';
  }
}


// Tagify JS
(function () {
  ("use strict");
  new Tagify(input);

  var input = document.querySelector("input[name=tags-select-value-mode");

  tagify = new Tagify(input, {
    enforceWhitelist: true,
    mode: "select",
    whitelist: ["Web designer", "UI/UX designer", "Web devloper"],
    blacklist: ["foo", "bar"],
  });

})();
