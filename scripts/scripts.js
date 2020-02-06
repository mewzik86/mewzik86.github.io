//################  GLOBAL VARIABLES  ###################

const aboutMe = {
    objectT: 0,
    objectH: 0,
    objectB: 0,
    inView: false,
    fullView: false,
    shown: false
};

const myWork = {
    objectT: 0,
    objectH: 0,
    objectB: 0,
    inView: false,
    fullView: false,
    shown: false
};

const extra = {
    objectT: 0,
    objectH: 0,
    objectB: 0,
    inView: false,
    fullView: false,
    shown: false
};

function typeWriter(section, text, i) {
    if (i < text.length) {
        $("#" + section + "Command").append(text.charAt(i));
        setTimeout(function() { typeWriter(section, text, i + 1) }, 1000 / text.length);
    }
}

function promptAnim(section, command) {
    $("#" + section + "Prompt").slideDown("slow");
    $("#" + section + "Command").text("# ");
    setTimeout(function() { typeWriter(section, command, 0) }, 500);
    setTimeout(function() { $("#" + section + "Content").slideDown("slow"); }, 1700);
}

//################  EVENTS  ###################
$(window).scroll(function() {

    let displayT = $(window).scrollTop(),
        displayH = $(window).height(),
        displayB = displayT + displayH;

    aboutMe.objectT = $("#aboutMeContainer").offset().top;
    aboutMe.objectH = $("#aboutMeContainer").height();
    aboutMe.objectB = aboutMe.objectT + aboutMe.objectH;
    myWork.objectT = $("#myWorkContainer").offset().top;
    myWork.objectH = $("#myWorkContainer").height();
    myWork.objectB = myWork.objectT + myWork.objectH;
    extra.objectT = $("#extraContainer").offset().top;
    extra.objectH = $("#extraContainer").height();
    extra.objectB = extra.objectT + extra.objectH;

    aboutMe.inView = (aboutMe.objectT > displayT) && ((aboutMe.objectT + 60) < displayB);
    aboutMe.fullView = (aboutMe.objectT > displayT) && (aboutMe.objectB < displayB);
    myWork.inView = (myWork.objectT > displayT) && ((myWork.objectT + 60) < displayB);
    myWork.fullView = (myWork.objectT > displayT) && (myWork.objectB < displayB);
    extra.inView = (extra.objectT > displayT) && ((extra.objectT + 60) < displayB);
    extra.fullView = (extra.objectT > displayT) && (extra.objectB < displayB);

    if (aboutMe.inView || aboutMe.fullView) {
        if (!aboutMe.shown) {
            promptAnim("aboutMe", "whoami");
            aboutMe.shown = true;
        }
    } else {
        aboutMe.shown = false;
        $("#aboutMeCommand").text("# ");
    }

    if (myWork.inView || myWork.fullView) {
        if (!myWork.shown) {
            promptAnim("myWork", "ls -a *projects");
            myWork.shown = true;
        }
    } else {
        myWork.shown = false;
        $("#myWorkCommand").text("# ");
    }

    if (extra.inView || extra.fullView) {
        if (!extra.shown) {
            promptAnim("extra", "Daison --help | grep extras");
            extra.shown = true;
        }
    } else {
        extra.shown = false;
        $("#extraCommand").text("# ");
    }
});

$(function() {
    setTimeout(promptAnim("aboutMe", "whoami"));
    aboutMe.shown = true;
}, 1000);

/**/