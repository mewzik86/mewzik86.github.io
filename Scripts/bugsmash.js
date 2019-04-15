/*  COMP125
    Assignment 5

    Author: Daison Hollingsworth
    Date: 28 March 2019

    Filename: puzzle.js
*/

var bugBackground = document.getElementById("bugbg");
var bugBackgroundDiv = document.getElementById("bugbgDiv");
bugBackground.src = "Images/bugsmashbg.jpg";
var bug = document.getElementById("bug");
var bugDiv = document.getElementById("bugDiv");
var bugInterval = 5000;
var bugTimer = setInterval(NewBugPosition, bugInterval);
var bugScore = 0;

// load images
function LoadImages() {
    bugDiv.style.position = "absolute";
    bugDiv.style.zIndex = "30";
    bug.src = "Images/bug.gif";
    document.getElementById("score").innerHTML = bugScore + " Bugs!";
}

function ResetGame() {
    clearInterval(bugTimer);
    bugInterval = 5000;
    bugScore = 0;
    document.getElementById("score").innerHTML = bugScore + " Bugs!";
    setInterval(NewBugPosition, bugInterval);
}

//generate random percentage
function randPercent() {
    var rand = ((Math.random()*1000000)%100).toFixed(0);
    rand /= 100;
    //console.log(rand);
    return rand;
}

function NewBugPosition() {
    var randTopPos = 280 * randPercent();
    var randLeftPos = 400 * randPercent();
    bugDiv.style.top = (bugBackground.offsetTop + randTopPos)+"px";
    bugDiv.style.left = (bugBackground.offsetLeft + randLeftPos)+"px";
}

function UpdateScore() {
    bugScore++;
    document.getElementById("score").innerHTML = bugScore + " Bugs!";
    clearInterval(bugTimer);
    bugInterval *= 0.8;
    NewBugPosition();
    bugTimer = setInterval(NewBugPosition, bugInterval);
}

function LoadEventListeners() {
    if (bugDiv.addEventListener) {
        bugDiv.addEventListener("click", UpdateScore, false);
    }
    else if (bugDiv.attachEvent) {
        bugDiv.attachEvent("onclick", UpdateScore);
    }
}


function StartupPage() {
    LoadImages();
    LoadEventListeners();
    NewBugPosition();
}

if (window.addEventListener)
{
    window.addEventListener("load", StartupPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", StartupPage);
}