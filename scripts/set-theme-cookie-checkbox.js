var root = document.getElementsByTagName('html')[0];

// update Oaxaca Feb 18, 2022
console.log("Update March 10, 2022 ");

console.log("Html class on page load: " + root.classList);

console.log("Document.Cookie on page load: ");
console.log(document.cookie);


// Select the checkbox i the title include file
var chk = document.getElementById("theme-checkbox");

console.log("Is checkbox checked 1? ");
console.log(chk.checked); // true, false. Is checkbox checked on page load?

// https://www.w3schools.com/jsref/prop_checkbox_checked.asp

var theme ="";

if (root.classList.contains("dark")) {
    // make the theme dark
    theme = "dark";
    
    // check the box
    document.getElementById("theme-checkbox").checked = true;
} else {
	document.getElementById("theme-checkbox").checked = false;
};

console.log("Is checkbox checked 2? ");
console.log(chk.checked);  // true, false. Is checkbox checked after the "if" ?


// Listen for a click on the button 
// https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
// Toggle the "dark" class on the "html" element
chk.addEventListener("change", function () {

    console.log("- - start function - -");
    // Let's say the theme is equal to light
    // WAS let theme = "not set yet"; << already declared above
    console.log("Theme at start was: " + theme);

    console.log("Checkbox after click is: " + this.checked);

    // If the "html" element contains the .dark-theme class...
    // if (root.classList.contains("dark")) {
    if (this.checked) {
        console.log("If checkbox found to be checked...");
        
        console.log("Remove light, add dark classes.");

        root.classList.remove("light");

        root.classList.add("dark");

        console.log("Html class now set to: " + root.classList);

        theme = "dark";
        
        console.log("Theme now set to: " + theme);

        console.log("- - - end dark routine - - -");
    } else {

        console.log("If checkbox is found not checked...");
        
        console.log("Remove dark, add light classes.");

        root.classList.remove("dark");
        
        root.classList.add("light");

        console.log("Html class list is now:" + root.classList);

        theme = "light";
        
        console.log("Theme now set to: " + theme);

        console.log("- - - end light routine - - -");
    }

    // Then save the choice in a cookie  
    // Not using "HttpOnly;" ?? It failed. Because it prevents read of cookie with Javascript?
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
    
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + 180);
    
    document.cookie = "theme=" + theme + "; Expires=" + exdate + ";path=/;" + "SameSite=Lax; Secure"

    console.log("Document.Cookie after setting it: ");
    console.log(document.cookie);

    console.log("== cookie has been set ==");
});
// Source:
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-server-side-scripts

// end
