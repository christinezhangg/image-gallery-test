var images = document.getElementsByClassName("images");
var imageId = 0;

for (i = 0; i < images.length; ++i){
    images[i].addEventListener("click", bigimage);
}
function bigimage() {
    if (i){
        this.style.width = '200%';
        this.style.height = 'auto';
    } else {
        blur();
    }
    
}
