<?php 
$themeClass = '';

// the next are a reverse of the prior settings
// as of August 23, 2022 default theme is dark
if (!empty($_COOKIE['theme']) && $_COOKIE['theme'] == 'light') {
	$themeClass = 'light';
} else {
	$themeClass = 'dark';
}
?>
