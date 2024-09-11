<?php

// GENERAL ARRAYS AND FUNCTIONS: =================================================================================================

// Shorten strings to the desired length and add "..." to the end
function shorten($string, $maxLength) {
     if (strlen($string) > $maxLength) {
          $string = substr($string, 0, $maxLength) . '...';
     }
     return $string;
}

