$(document).ready(function () {

    /* Functions in _scrollbarand-test.js. These co-ordinate with CSS.
    1. Display device width in title-include for testing
    2. Show/hide Ajax menu item. Availability of Ajax is tested by "$()" invocation.
    3. Top horizontal scrollbar.
    4. ToTop button hat appears in lower right.
    */

    var width = $(window).width();

    /* testing only; shows the device display width */
    $("#device-width-display").html("device width: " + width);


    /* remove landing area for device width test
    Better to do this in CSS because you don't want this
    element to show if jquery-Ajax api happens to be blocked
    $("#device-width-display").css("display", "none");  */

    /* remove ajax "no-script" warning if ajax is present */
    $(".ajax-menu-item").css("display", "none");
    $(".ajax-menu-item-spanish").css("display", "none");


    mybutton = document.getElementById("toTopButton");

    // Top-of=Page buttom (large screens only, see CSS stylesheet
    // When the user scrolls down 350px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };

    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

    function scrollFunction() {
        if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
            mybutton.style.display = "block";

        } else {
            mybutton.style.display = "none";
        };

        if (width < 768) {
            mybutton.style.display = "none";
        }

        // Still in the Scroll function
        // Now the Progress bar - green - top of page, showing page scroll percent
        // https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";

    }
});
