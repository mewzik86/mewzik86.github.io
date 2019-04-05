/*  COMP125
    Assignment 5

    Author: Daison Hollingsworth
    Date: 28 March 2019

    Filename: puzzle.js
*/

var zIndexCount;
var pos = [];
var origin;

function StartupPage()
{
    var randomImage = (((Math.random()*1000000)%3)+1).toFixed(0);
    if (randomImage > 3) {  //compensate for rounding up by toFixed method
        randomImage = 3;
    }
    LoadImage(randomImage);
    LoadPieces(randomImage);
    SetUpPage();
}

function SetUpPage () {
    var firstRowLeft = 3;
    var secondRowLeft = 3;
    var topCoord = document.getElementById("piecesTray").offsetTop;
    puzzlePieces = document.getElementsByClassName("puzzlePieces");
    zIndexCount = puzzlePieces.length + 1;
    for(var i = 0; i < puzzlePieces.length; i++) {
        if (puzzlePieces[i].addEventListener) {
            puzzlePieces[i].addEventListener("mousedown", StartDrag, false);
            puzzlePieces[i].addEventListener("touchstart", StartDrag, false);
        }
        else if (puzzlePieces[i].attachEvent) {
            puzzlePieces[i].attachEvent("onmousedown", StartDrag);
        }
        if (i < 6) {
            puzzlePieces[i].style.position = "absolute";
            puzzlePieces[i].style.left = firstRowLeft+"%";
            puzzlePieces[i].style.top = "360px";
            firstRowLeft += 16.6667;
        }
        if (i >= 6) {
            puzzlePieces[i].style.position = "absolute";
            puzzlePieces[i].style.left = secondRowLeft+"%";
            puzzlePieces[i].style.top = "460px";
            secondRowLeft += 16.6667;
        }
    }
}

function LoadImage(randImg) {
    var fullImage = document.getElementById("fullImage");
    fullImage.src = "Images/puzzle"+ randImg +".jpg";
}

function LoadPieces(randImg) {
    var pieceImg = document.getElementsByClassName("pieceImg");
    var pieceArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    for (var i=0; i<12; i++) //step through the array and add randomized pieces
    {
        var randPiece = ((Math.random()*1000000)%pieceArray.length).toFixed(0);
        if (randPiece == pieceArray.length) {   //compensate for rounding up by toFixed method
            randPiece = pieceArray.length - 1;
        }
        //alert(pieceArray[randPiece]);
        pieceImg[i].src = "Images/puzzle"+randImg+"/"+pieceArray[randPiece]+".jpg";
        pieceArray.splice(randPiece, 1);
    }
}

function StartDrag(event) {
    //alert("startdrag!");
    this.style.zIndex = zIndexCount;
    zIndexCount++;
    event.preventDefault();
    if (event.type != "mousedown") {
        this.addEventListener("touchmove", MoveDrag, false);
        this.addEventListener("touchend", StopTouchDrag, false);
    }
    else {
        this.addEventListener("mousemove", MoveDrag, false);
        this.addEventListener("mouseup", StopDrag, false);
    }

    pos = [this.offsetLeft, this.offsetTop];
    startCoord = GetCoord(event);
}

function MoveDrag(event) {
    //alert("Moving!");
    this.style.boxShadow = "none";
    currentCoord = GetCoord(event);
    changeX = currentCoord[0] - startCoord[0];
    changeY = currentCoord[1] - startCoord[1];
    this.style.left = (pos[0]+ changeX) + "px";
    this.style.top = (pos[1]+ changeY) + "px";
}

function GetCoord(event) {
    var coord = [];
    if (event.targetTouches && event.targetTouches.length) {
        var firstTouch = evt.targetTouches[0];
        coords[0] = firstTouch.clientX;
        coords[1] = firstTouch.clientY;
    }
    else {
        coord[0] = event.clientX;
        coord[1] = event.clientY;
    }
    return coord;
}

function StopDrag() {
    //alert("StopDrag!");
    this.removeEventListener("mousemove", MoveDrag, false);
    this.removeEventListener("mouseup", StopDrag, false);
}

function StopTouchDrag() {
    this.removeEventListener("touchmove", moveDrag, false);
    this.removeEventListener("touchend", removeTouchListener,false);
}


if (window.addEventListener)
{
    window.addEventListener("load", StartupPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", StartupPage);
}