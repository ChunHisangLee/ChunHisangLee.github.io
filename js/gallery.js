function upDate(previewPic) {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.textContent = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.textContent = "Hover over an image below to display here.";
}

function initializeGallery() {
    console.log("Gallery initialized");
    const images = document.querySelectorAll('.preview');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}
