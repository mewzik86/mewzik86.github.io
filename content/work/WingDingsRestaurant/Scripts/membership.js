/*    JavaScript
 *    
 *    Filename: membership.js
 */

// assingn unique and assencing tab index to all elements of the form


// populate the age list and clear the selected input

var nameFieldset = document.getElementById("fsName");
var personalFieldset = document.getElementById("fsPersonal");
var accountFieldset = document.getElementById("fsAccount");
var formValidity = true;

function PopulateOptions() {
    var optAge = document.getElementById("selAge");
    for (var i = 0; i < 100; i++) {
        var age = document.createElement("option");
        age.value = i + 1;
        age.innerHTML = i + 1;
        optAge.appendChild(age);
    }
}

function CalculateIndex() {
    uniqueIndex = 1;
    for (var i = 0; i < document.forms[0].elements.length; i++) {
        if ((document.forms[0].elements[i].tagName == "INPUT") || (document.forms[0].elements[i].tagName == "SELECT"))
        {
            document.forms[0].elements[i].tabIndex = uniqueIndex;
        }
        uniqueIndex++; //increment idex so each field has a unique number
    }
}

// clear form
function ClearForm() {
    var allInput = document.getElementsByTagName("input");
    var allSelect = document.getElementsByTagName("select");
    CalculateIndex();
    ClearValidity(nameFieldset);
    ClearValidity(personalFieldset);
    ClearValidity(accountFieldset);
    for (var i = 0; i < allInput.length; i++) {
        if (allInput[i].type != "button") {
            allInput[i].value = "";
        }
    }
    for (var i = 0; i < allSelect.length; i++) {
        allSelect[i].selectedIndex = -1;
    }
}

// Reset validity
function ClearValidity(fieldset) {
    var errorMsg = fieldset.getElementsByClassName("errorMsg")[0];
    var fieldInputs = fieldset.getElementsByTagName("input");
    var fieldSelects = fieldset.getElementsByTagName("select");

    formValidity = true;
    personalValidity = true;
    accountValidity = true;
    errorMsg.style.display = "none";
    errorMsg.innerHTML = "";
    for (var i = 0; i < fieldInputs.length; i++) {
        fieldInputs[i].setCustomValidity("");
    }
    for (var i = 0; i < fieldSelects.length; i++) {
        fieldSelects[i].style.border = "none";
        fieldSelects[i].setCustomValidity("");
    }
}

// validate that all fields are filled
function CheckMissing(fieldset) {
    var allInput = fieldset.getElementsByTagName("input");
    var allSelect = fieldset.getElementsByTagName("select");
    var errorMsg = fieldset.getElementsByClassName("errorMsg")[0];
    for (var i = 0; i < allInput.length; i++) {
        try {
            if (allInput[i].value === "") {
                throw "The highlighted information is missing";
            }
            else {
                allInput[i].setCustomValidity(""); //reset validity
            }
        }
        catch (msg) {
            // display error message
            errorMsg.style.display = "block";
            allInput[i].setCustomValidity("Can not be empty");
            if (errorMsg.innerHTML === "") {
                errorMsg.innerHTML = msg;
            }
            formValidity = false;
        }
    }
    for (var i = 0; i < allSelect.length; i++) {
        try {
            if (allSelect[i].selectedIndex == -1) {
                throw "The highlighted information is missing";
            }
        }
        catch (msg) {
            // display error message
            errorMsg.style.display = "block";
            allSelect[i].style.border = "3px solid red";
            if (errorMsg.innerHTML === "") {
                errorMsg.innerHTML = msg;
            }
            formValidity = false;
        }
    }
}

// validate postal code
function CheckPostal() {
    var errorMsg = personalFieldset.getElementsByClassName("errorMsg")[0];
    var pattPostal = /^([a-zA-Z])[0-9][a-zA-Z] ?[0-9][a-zA-Z]([0-9])/;
    var postalCode = document.getElementById("txtPostal");
    try {
        if (!pattPostal.test(postalCode.value)) {
            throw "Invalid Postal Code";
        }
    }
    catch (msg) {
        postalCode.setCustomValidity(msg);
        errorMsg.style.display = "block";
        if (errorMsg.innerHTML == "") {
            errorMsg.innerHTML = msg;
        }
        formValidity = false;
    }
}

// check province matches 
function CheckProvince() {
    var errorMsg = personalFieldset.getElementsByClassName("errorMsg")[0];
    var province = document.getElementById("selProvince");
    try {
        switch (province.value) {
            case "AB":
            case "BC":
            case "MN":
            case "ON":
            case "QC":
            case "SK":
                break;
            default:
                throw "Invalid Province"
        }
    }
    catch (msg) {
        province.setCustomValidity(msg);
        errorMsg.style.display = "block";
        if (errorMsg.innerHTML == "") {
            errorMsg.innerHTML = msg;
        }
        formValidity = false;
    }
}

// check age over 18 
function CheckAge() {
    var errorMsg = personalFieldset.getElementsByClassName("errorMsg")[0];
    var age = document.getElementById("selAge");
    try {
        if (age.value < 18) {
            throw "You must be 18 or older to register"
        }
    }
    catch (msg) {
        age.setCustomValidity(msg);
        errorMsg.style.display = "block";
        if (errorMsg.innerHTML == "") {
            errorMsg.innerHTML = msg;
        }
        formValidity = false;
    }
}

// check email for '@' and '.' characters
function CheckEmail() {
    var errorMsg = accountFieldset.getElementsByClassName("errorMsg")[0];
    var email = document.getElementById("txtEmail");
    try {
        if ((email.value.search("@") == -1) || (email.value.indexOf(".", 1) == -1) || !email.validity.valid) {
            throw "Invalid email"
        }
    }
    catch (msg) {
        email.setCustomValidity(msg);
        errorMsg.style.display = "block";
        if (errorMsg.innerHTML == "") {
            errorMsg.innerHTML = msg;
        }
        formValidity = false;
    }
}

// validate password
function CheckPassword() {
    var errorMsg = accountFieldset.getElementsByClassName("errorMsg")[0];
    var password1 = document.getElementById("txtPassword");
    var password2 = document.getElementById("txtPassConfirm");
    try {
        if (password1.value.length < 6) {
            throw "Password must be 6 or more characters";
        }
        else if (!(password1.value === password2.value)) {
            throw "Passwords do not match";
        }
        else {
            password1.setCustomValidity("");
            password2.setCustomValidity("");
            formValidity = true;
        }
    }
    catch (msg) {
        password1.setCustomValidity(msg);
        password2.setCustomValidity(msg);
        errorMsg.style.display = "block";
        if (errorMsg.innerHTML == "") {
            errorMsg.innerHTML = msg;
        }
        formValidity = false;
    }
}


// setup page
function StartupPage() {
    PopulateOptions();
    ClearForm();
}

// validate form
function ValidatePage() {
    ClearValidity(nameFieldset);
    ClearValidity(personalFieldset);
    ClearValidity(accountFieldset);
    CheckMissing(nameFieldset);
    CheckMissing(personalFieldset);
    CheckMissing(accountFieldset);
    CheckPostal();
    CheckProvince();
    CheckAge();
    CheckEmail();
    CheckPassword();
    if (formValidity)
    {
        alert("Thanks for registering with our website, your customer record was created successfully.");
        document.forms[0].submit();
    }
}

// Event Listeners

if (window.addEventListener) {
    window.addEventListener("load", StartupPage, false);
}
else if (window.attachEvent) {
    window.attachEvent("onload", StartupPage);
}