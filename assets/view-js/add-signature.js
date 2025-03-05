//Display Image
document
  .getElementById("imgInput")
  .addEventListener("change", function (event) {
    const file = event.target.files[0]; // Get the selected file

    // Get the container where you want to display the error and image
    const errorContainer = document.getElementById("errorContainer"); // Error message container
    const imageContainer = document.getElementById("imageContainer"); // Container to display the image

    // Remove any previously displayed image element
    const existingImage = document.getElementById("displayImage");
    if (existingImage) {
      existingImage.remove();
    }

    // Remove any previously displayed error message
    const existingError = document.querySelector("small.error");
    if (existingError) {
      existingError.remove();
    }

    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const tempImage = new Image(); // Create a temporary image object
        tempImage.src = e.target.result;

        // Once the image is loaded, check the aspect ratio
        tempImage.onload = function () {
          const width = tempImage.width;
          const height = tempImage.height;
          const aspectRatio = width / height;

          // Check if the aspect ratio is approximately 16:9 (with some margin for floating-point precision)
          if (Math.abs(aspectRatio - 16 / 9) < 0.01) {
            // Create a new <img> element dynamically
            const displayImage = document.createElement("img");
            displayImage.id = "displayImage";
            displayImage.src = tempImage.src; // Set the image source
            displayImage.width = 300; // Set the image width
            imageContainer.appendChild(displayImage); // Append the image to the image container
          } else {
            const errorSmall = document.createElement("small");
            errorSmall.className = "error text-danger";
            errorSmall.textContent =
              "The image does not have a 16:9 aspect ratio. Please select a different image.";
            errorContainer.appendChild(errorSmall);
            event.target.value = "";
          }
        };
      };
      reader.readAsDataURL(file); // Read the file as a data URL (base64)
    }
  });