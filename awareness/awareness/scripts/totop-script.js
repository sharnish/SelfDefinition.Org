

/* This just manipulates the page history. 
	removes the hash and in-page url */
function toTopCleanUrl() {
		history.pushState("", document.title, window.location.pathname);
		scroll(0, 0);
	}
	
/* REF: http://stackoverflow.com/questions/10744299/scroll-back-to-the-top-of-div
should work on any div
*/
function scrollDivToTop (y)  {
	if (y == undefined) {
          y = 0;
    } 
	$("#menu-container").animate({ scrollTop: y }, "fast");
}
	
	
	
	
	
	



