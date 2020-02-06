/*    JavaScript
 *    
 *    Filename: calendar.js
 */

// global variables
var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];
var allFoods = ["Fries", "Sweet Potato Fries", "Wedges", "Fried Onion Rings", "Fresh Celery & Carrot Strips",
    "Red Wine", "White Wine", "Blood Orange Bellini", "Bourbon Witch", "Margarita",
    "Passion Peach", "Aperol Spritz", "Budweiser", "Heineken", "Coors Light", "Barbeque Wings",
    "Baked Wings", "Fried Wings"];
var allCustomers = ["Bruce Wayne", "Alfred Pennyworth", "Lois Lane",
"Peter Parker", "John Snow", "Jack Sparrow", "Marty Byrd", "Mary Jane", "Tony Stark", "Tori Anderson"];
var dineChoice = ["Take Out", "Dine-In"];




// function to place daysOfWeek values in header row cells 
function addCalendarHeaders() {
    for (var i = 0; i < 7; i++)
    {
        document.getElementsByTagName("th")[i].innerHTML = daysOfWeek[i];
    }
}

// function to place day of month value in first p element 
// within each table data cell that has an id 
function addCalendarDates() {
    var paragraphs = "";
    for (var i = 1; i <= 28; i++)
    {
        var calendarCell = document.getElementById("feb-" + i);
        paragraphs = calendarCell.getElementsByTagName("p");
        paragraphs[0].innerHTML = i;
    }
}

// function to place opponents and gameLocation values in 
// second p element within each table data cell that has an id
function addOrderInfo() {
    var paragraphs = "";
    for (var i = 1; i <= 28; i++)
    {
        var calendarCell = document.getElementById("feb-" + i);
        paragraphs = calendarCell.getElementsByTagName("p");
        paragraphs[1].innerHTML = allFoods[(Math.random()*1000).toFixed(0)%allFoods.length];
        paragraphs[2].innerHTML = "<b>For: </b>" + allCustomers[(Math.random()*1000).toFixed(0)%allCustomers.length];
        paragraphs[3].innerHTML = "<b>To: </b>" + dineChoice[(Math.random()*1000).toFixed(0)%dineChoice.length];
    }
}

// function to populate calendar 
function setUpPage() {
    addCalendarHeaders();
    addCalendarDates();
    addOrderInfo();
}

// runs setUpPage() function when page loads
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}