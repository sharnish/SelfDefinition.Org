<?php 
// version on Site5
// https://stackoverflow.com/questions/409496/prevent-direct-access-to-a-php-include-file 
//if(!defined('MyConst')) {
//   die('Direct access not permitted');
//}
$themeClass = '';
if (!empty($_COOKIE['theme']) && $_COOKIE['theme'] == 'dark') {
	$themeClass = 'dark';
} else {
	$themeClass = 'light';
}
?>
