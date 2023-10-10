/* Style Switcher version 2 adding class "dark" to the element "html".  */


/* version 3, from CSS Tricks, February 3, 2020

https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-a-body-class

*/


/*
// EXAMPLE
// Select the button
const btn = document.querySelector(".btn-toggle");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");
*/

// MINE

// Select the button
// from original
const btn = document.getElementById("styleSwitcher");
// Select the theme preference from localStorage
// this is new
const currentTheme = localStorage.getItem("theme");


/*
// EXAMPLE 
// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
    // ...then use the .dark-theme class
    document.body.classList.add("dark-theme");
}
*/

// MINE
// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
    // ...then use the .dark-theme class
    //keeping the existing sstyle sheet, use "dark"?? and not "dark-theme"??
    document.body.classList.add("dark-theme");
}


// Listen for a click on the button 
btn.addEventListener("click", function () {
    // Toggle the .dark-theme class on each click
    document.body.classList.toggle("dark-theme");

    // Let's say the theme is equal to light
    let theme = "light";
    // If the body contains the .dark-theme class...
    if (document.body.classList.contains("dark-theme")) {
        // ...then let's make the theme dark
        theme = "dark";
    }
    // Then save the choice in localStorage
    localStorage.setItem("theme", theme);
});
