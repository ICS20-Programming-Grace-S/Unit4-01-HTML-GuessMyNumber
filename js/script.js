// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a response based on the guessed number
 */
function displayNumber () {
  // initialize variables
  let number = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)
  let randomNumber = Math.floor(Math.random() * 6) + 1


  // determine the response based on the guessed number
	if (guess == randomNumber){
		number = " CORRECT!!! " + " The correct number is " + randomNumber + "."
	} 
	//if not says incorrect	
	else {
		number = " INCORRECT! " + "  The correct number is " + randomNumber + "."
	}

  // display the results
  document.getElementById('number').innerHTML = number
}