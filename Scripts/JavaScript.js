//Javascript for Wing Dings website - by Daison Hollingsworth, 26th Jan 2019

//function to calculate order total
function tallyOrder() {
    var wingItems = ["<b>Barbeque Wings</b>", "<b>Baked Wings</b>", "<b>Fried Wings</b>", "<b>Sauces:</b><br/>Ranch, Sweet & Sour, Lemon Spice,<br/>Buffalo, Hot!, Suicide!"];
    var wingCosts = [9.99, 9.99, 8.99, .99];
    var sideItems = ["Fries", "Sweet Potato Fries", "Wedges", "Fried Onion Rings", "Fresh Celery & Carrot Strips"];
    var sideCosts = [5.99, 6.99, 6.99, 5.99, 7.99];
    var drinkItems = ["Red Wine", "White Wine", "Blood Orange Bellini", "Bourbon Witch", "Margarita", "Passion Peach", "Aperol Spritz", "Budweiser", "Heineken", "Coors Light"];
    var drinkCosts = [10.00, 11.00, 8.00, 7.00, 7.00, 8.00, 6.00, 4.00, 5.00, 3.00];
    var wingItms = document.getElementsByClassName("wing-item");
    var sideItms = document.getElementsByClassName("side-item");
    var drinkItms = document.getElementsByClassName("drink-item");
    var foodTotal = 0;
    var salesTax = 0.13;
    for (i = 0; i < wingItms.length; i++) {
        (wingItms[i].checked) ? (foodTotal += wingCosts[i]) : (foodTotal += 0);
    }
    for (i = 0; i < sideItms.length; i++) {
        (sideItms[i].checked) ? (foodTotal += sideCosts[i]) : (foodTotal += 0);
    }
    for (i = 0; i < drinkItms.length; i++) {
        (drinkItms[i].checked) ? (foodTotal += drinkCosts[i]) : (foodTotal += 0);
    }
    orderTotal = (foodTotal + (foodTotal * salesTax)).toFixed(2);
    alert("Your order total is $" + orderTotal);
}
document.getElementById("submit").addEventListener("click", tallyOrder, false);