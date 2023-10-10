// See notes in Site Map also
// Makes use of the JQuery "toggle" function - toggles between show and hide
// These set default to hide
// The first link in the "ul" controls the visibility of the rest:   li:nth-child(n+2)
// https://stackoverflow.com/questions/10960753/how-to-make-toggle-hidden-by-default

$(document).ready(function () {
        $("#collapsible-chapters li:nth-child(n+2)").hide();
        $("#toggle-for-chapters").click(function () {
                $("#collapsible-chapters li:nth-child(n+2)").toggle();
                $("#collapsible-essays li:nth-child(n+2)").hide();
            }

        );
    }

);


$(document).ready(function () {
        $("#collapsible-essays li:nth-child(n+2)").hide();
        $("#toggle-for-essays").click(function () {
                $("#collapsible-essays li:nth-child(n+2)").toggle();
                $("#collapsible-chapters li:nth-child(n+2)").hide();
            }

        );
    }

);


/* How can I keep toggle class state after page refresh jquery?

Page refresh can happen in 2 ways.

1. Your code is refreshes a page: In this case, you can pass toggle state in a query string to the URL, and access it on document ready event after page refresh.

2. User refreshes a page: In this case, you need to store the toggle state in a cookie or browser’s local storage.

https://www.quora.com/How-can-I-keep-toggle-class-state-after-page-refresh-jquery



Why is .toggle() in JQuery deprecated?

https://www.quora.com/Why-is-toggle-in-JQuery-deprecated

There were actually two .toggle() methods - effectively a show/hide .toggle which was not deprecated and the event binding method which was.

*/
