
// declare global variables
var largeImage = document.getElementById("lrgImage").getElementsByTagName("img")[0];
var smallImages = document.getElementById("smlImages").getElementsByTagName("img");

function MakePhotoGallery() {
    //assign initial larger photo
    largeImage.src = "Images/wings1-large.jpg";
    //assign smaller photos
    for (var i = 0; i < smallImages.length; i++) {
        smallImages[i].src = "Images/wings" + (i + 1) + "-large.jpg";
    }
}

function FocusOnPhoto(clickedImg) {
    largeImage.src = clickedImg.target.src;
}
function Zoom() {
    viewwin = window.open(largeImage.src, 'viewwin', 'width=600, height=300');
}
function Close() {
    viewwin.close();
}

function CreateEventListeners() {

    if (smallImages[0].addEventListener) {
        for (var i = 0; i < smallImages.length; i++) {
            smallImages[i].addEventListener("click", FocusOnPhoto, false);
        }
    }
    else if (smallImages[0].attachEvent) {
        for (var i = 0; i < smallImages.length; i++) {
            smallImages[i].attachEvent("onclick", FocusOnPhoto);
        }
    }
    
    var zoomButton = document.getElementById("zoom");
    if(zoomButton.addEventListener) {
        zoomButton.addEventListener("click", Zoom, false);
    }
    else if (zoomButton.attachEvent) {
        zoomButton.attachEvent("click", Zoom);
    }
    var closeButton = document.getElementById("close");
    if (closeButton.addEventListener) {
        closeButton.addEventListener("click", Close, false);
    }
    else if (closeButton.attachEvent) {
        closeButton.attachEvent("click", Close);
    }
}

function SetUpPage() {
    CreateEventListeners();
    MakePhotoGallery();
}

if (window.addEventListener) {
    window.addEventListener("load", SetUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", SetUpPage);
}