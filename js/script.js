// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a response based on the guessed number
 */
function displayNumber () {
  // initialize variables
	let answer = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)

  // determine the response based on the guessed number
	if (guess == Math.floor((Math.random() * 6) + 1)) {
		answer = "Correct!"
	} else {
    answer = "Wrong!"
  }

  // display the results
  document.getElementById('answer').innerHTML = answer
}