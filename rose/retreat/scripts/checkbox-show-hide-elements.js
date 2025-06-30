root = document.getElementsByTagName('html')[0];
//
// MODELED ON SET THEME COOKIE CHECKBOX 
// HTML:  <body class="page-with-footnotes">
// Needed because checkbox only shows on pages with footnotes
// TITLE INCLUDE USES THIS TO CALL CHECKBOX
// <div id="toggle-include-div">
//		<?php include("_fixed-header-for-footnote-toggle.htm"); ?>
// </div>
// CHECKBOX TRIGGERS THE SCRIPT ON THIS PAGE

// update Oaxaca Sep 19, 2022
console.log("Update Sep 19, 2022");
console.log("Get cookie is a local script");

console.log("Html classes on page load: " + root.classList);

console.log("Document.Cookie on page load: ");
console.log(document.cookie);

// Select the checkbox in the fixed header file
// Fixed header is inserted via PHP on pages having elements to be hidden
// This is location of script call, won't be 
// WAS var chk = document.getElementById("theme-checkbox");
var chkbx = document.getElementById("checkbox-show-hide");

console.log("The elements shown/hidden depend on the CSS");

console.log("Is Hide checkbox checked 1? ");
console.log(chkbx.checked); // true or false. Is checkbox checked on page load?

// https://www.w3schools.com/jsref/prop_checkbox_checked.asp


// show_hide varianle is for the cookie (Was "theme")
var show_hide = "";

if (root.classList.contains("hide_footnotes")) {
	// want "hide" as default
	// make show_hide "hide"
	// show_hide is for the cookie
	show_hide = "hide_footnotes";

	// check the box
	document.getElementById("checkbox-show-hide").checked = true;
} else {
	// try this, does nothing
	show_hide = "show_footnotes";
	document.getElementById("checkbox-show-hide").checked = false;
};



console.log("Is Hide checkbox checked 2? ");
console.log(chkbx.checked); // true or false. Is checkbox checked after the "if/else above" ?

///// console.log("End of Show-Hide load routine");


// Listen for a click on the button 
// https://stackoverflow.com/questions/14544104/checkbox-check-event-listener
// Toggle the "show/hide" class on the "html" element
chkbx.addEventListener("change", function () {

	console.log("Start event change routine");

	// What was show_hide equal to right after we click but before any action?
	///// console.log("show_hide at start was: " + show_hide);

	console.log("Hide checkbox after click is: " + this.checked);

	if (this.checked) {

		// if the checkbox is checked
		///// console.log("Hide checkbox was found checked...");

		///// console.log("Remove show, add hide classes.");

		root.classList.remove("show_footnotes");

		root.classList.add("hide_footnotes");

		console.log("Html classes now set to: " + root.classList);

		// show_hide variable is for the cookie (Was "theme")
		show_hide = "hide_footnotes";

		console.log("show_hide is now set to: " + show_hide);

		///// console.log("- - end HIDE routine - -");

	} else {

		console.log("Hide checkbox was found Not checked...");

		console.log("Remove Hide, add Show class");

		root.classList.remove("hide_footnotes");

		root.classList.add("show_footnotes");

		console.log("Html class list is now:" + root.classList);

		// keet this but set the cookie for 10 minutes only 
		show_hide = "show_footnotes";

		console.log("show_hide now set to: " + show_hide);

		// console.log("Cookie will no longer be set to 'show'. Can't count on it ever being deleted.");

		console.log("- - end SHOW routine - -");
	}


	// Then save the choice in a cookie  
	// Not using "HttpOnly;" ?? It failed. Because it prevents read of cookie with Javascript?
	// https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie

	// WE ARE STILL IN THE IF-CHANGE FUNCTION
	// COOKIE IS ONLY SET IF CHECKBOX IS CLICKED OR UNCLICKED
	var exdate = new Date();

	// test the cookie time for 10 minutes
	// (1 / 24 / 60))	// FAILS, no good for fraction
	// exdate.setDate(exdate.getDate() + (1));

	// For 1 minute you can use:   date.setTime(date.getTime() + (60 * 1000));
	exdate.setTime(exdate.getTime() + (10 * 60 * 1000));

	console.log("Show/Hide exdate is " + exdate);

	// NO:  ";path=/;"    /// DON'T PLACE IN SITE ROOT
	document.cookie = "show_hide=" + show_hide + "; Expires=" + exdate + ";path=;" + "SameSite=Lax; Secure"

	///// console.log("Document.Cookie after setting it: ");
	///// console.log(document.cookie);

	console.log("== cookie has been set ==");


});
// Source:
// https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/#aa-using-server-side-scripts

// end
