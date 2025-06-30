<?php 
$themeClass = '';

// the next are a reverse of the prior settings
// as of August 23, 2022 default theme is dark
if (!empty($_COOKIE['theme']) && $_COOKIE['theme'] == 'light') {
	$themeClass = 'light';
} else {
	$themeClass = 'dark';
}


// Top-of-page PHP must add this variable class list of Html tag
$showClass = '';

if (!empty($_COOKIE['show_hide']) && $_COOKIE['show_hide'] == 'show_footnotes') {
	$showClass = 'show_footnotes';
} else {
	$showClass = 'hide_footnotes';
}

?>
