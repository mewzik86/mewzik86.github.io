function typeWriter(text, i) {
    if (i < text.length) {
        $(".typeWriter").append(text.charAt(i));
        console.log(text.charAt(i) + ", " + i);
        setTimeout(function() { typeWriter(text, i + 1) }, 200);
    }
}

function promptAnim() {
    $("#aboutMePrompt").slideDown("slow");
    setTimeout(function() { typeWriter("whoami", 0) }, 1000);
    setTimeout(function() { $("#aboutMePrompt").slideUp("slow"); }, 3000);
    setTimeout(function() { $("#aboutMeInfo").slideDown("slow"); }, 3200);
}

$(setTimeout(promptAnim(), 1000));

/**/