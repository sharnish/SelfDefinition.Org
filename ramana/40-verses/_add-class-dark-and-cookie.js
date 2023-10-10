/* Style Switcher version 2 adding class "dark" to the element "html".  */

// The next line breaks it, not used.
//$(document).ready(function () {

function setCookie(c_name, value, expiredays) {
    //console.log("now in function setCookie");
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    // HOW TO SET PATH??  put at end, this works: + ";path=/"
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ?
        "" :
        ";expires=" + exdate) + ";path=/;SameSite=Lax;Secure"

}

function getCookie(c_name) {
    //console.log("now in function getCookie");
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1
            c_end = document.cookie.indexOf(";", c_start)
            if (c_end == -1) c_end = document.cookie.length
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return null
}


/*

Copied from file: add-dark-styles-4.js

THIS WORKS AS IS, ADDING AND REMOVING CLASSES.

TO DO: MAKE PERMANENT WITH COOKIE.

Currently these fire OnClick. Needto invoke with Cookie onload

*/


function addDarkStyleClasses() {
    //console.log("breakpoint 1 to add classes start");

    // NO $('*').addClass('dark');

    // See if I can speed it up by avoiding Jquery:
    // https://www.w3schools.com/howto/howto_js_add_class.asp

    // WAS $('html').addClass('dark');
    // https://www.w3schools.com/jsref/met_element_getelementsbytagname.asp
    var element = document.getElementsByTagName("html");
    // Since there is only one "html" tag, we use index [0]
    element[0].classList.add("dark");

    //console.log("breakpoint 2 class DARK dded");
}

function removeDarkStyleClasses() {

    //console.log("breakpoint 3 to remove classes start");

    // NO $('*').removeClass('dark');
    // WAS  $('html').removeClass('dark');

    var element = document.getElementsByTagName("html");
    // Since there is only one "html" tag, we use index [0]
    element[0].classList.remove("dark");

    //console.log("breakpoint 4 removeed class DARK end");
}


function manageStylesheet(x) {
    /* add/remove stylesheet and set cookie true or false */
    //console.log("in function manageStylesheet, value psssed is " + x);

    // this is a Checkbox at top of title include file
    var selection = document.getElementById("styleSwitcher");


    //console.log("Just got styleSwitcher, now run  add/remove DarkClasses");

    if (selection.checked) {
        //alert("Checked");
        addDarkStyleClasses();

        //console.log("Just ran addDarkStyleClasses(), now run set cookie, value is True");

        setCookie("styleSwitcher", 1, 365);
    } else {
        //alert("Not checked");
        removeDarkStyleClasses();

        //console.log("Just ran removeDarkStyleClasses(), now run set cookie, value is False");

        setCookie("styleSwitcher", 0, 365);
    }
}



onload = function () {
    //console.log("now in function onload");

    document.getElementById('styleSwitcher').checked = getCookie('styleSwitcher') == 1 ? true : false;
    //console.log("now GOT cookie styleSwitcher");

    var x = document.getElementById('styleSwitcher').checked;

    //console.log("Value of cookie styleSwitcher is:  " + x);

    // WAS manageStylesheet();

    manageStylesheet(x);
}
//});
