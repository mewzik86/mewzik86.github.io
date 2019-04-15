
// declare global variables
var largeImage = document.getElementById("largeImage");
var fileList = ["wings1-large.jpg", "wings2-large.jpg", "wings3-large.jpg", "wings4-large.jpg", "wings5-large.jpg"];
var photoTimer = setInterval(ShowNextPhoto, 5000);
var interactTimeout;
var count = 0;

function LoadFile() {
    alert("loading file");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = CheckPageReady();
    xhttp.open("GET", "photo_list.txt", true);
    xhttp.send();
    alert(xhttp.status);
}
function CheckPageReady() {
    if (this.readyState == 4 && this.status == 200) {
        fileList = this.responseText;
        alert(this.responseText);
    }
}

function StartPhotoTimer() {
    photoTimer = setInterval(ShowNextPhoto, 5000);
}

function PressNextPhoto() {
    clearInterval(photoTimer);
    clearTimeout (interactTimeout);
    interactTimeout = setTimeout(StartPhotoTimer, 10000);
    ShowNextPhoto();
}
function PressPrevPhoto() {
    clearInterval(photoTimer);
    clearTimeout (interactTimeout);
    interactTimeout = setTimeout(StartPhotoTimer, 10000);
    ShowPrevPhoto();
}

function ShowNextPhoto() {
    //assign initial larger photo
    if(count == (fileList.length)){
        count = 1;
    }
    else {
        count++;
    }
    largeImage.src = "Images/wings" + count + "-large.jpg";
    $("#largeImage").animate({opacity: 1});
}
function ShowPrevPhoto() {
    //assign initial larger photo
    if(count == 1){
        count = (fileList.length);
    }
    else {
        count--;
    }
    largeImage.src = "Images/wings" + count + "-large.jpg";
}
$("#next_btn").click(function(){
    $("#largeImage").animate({opacity: 0});
    PressNextPhoto();
  });

function Zoom() {
    viewwin = window.open(largeImage.src, 'viewwin', 'width=600, height=300');
}
function Close() {
    viewwin.close();
}

function CreateEventListeners() {
    var nextBtn = document.getElementById("next_btn");
    var prevBtn = document.getElementById("prev_btn");

    // if (nextBtn.addEventListener) {
    //     nextBtn.addEventListener("click", PressNextPhoto, false);
    // }
    // else if (nextBtn.attachEvent) {
    //     nextBtn.attachEvent("onclick", PressNextPhoto);
    // }

    if (prevBtn.addEventListener) {
        prevBtn.addEventListener("click", PressPrevPhoto, false);
    }
    else if (prevBtn.attachEvent) {
        prevBtn.attachEvent("onclick", PressPrevPhoto);
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
    ShowNextPhoto();
}

if (window.addEventListener) {
    window.addEventListener("load", SetUpPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", SetUpPage);
}