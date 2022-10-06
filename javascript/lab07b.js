//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        More built in math functions
  Purpose:     Does task.md

  Author:      Tony Lin 708162
  Created:     10-Oct-2022
  Updated:     10-Oct-2022
*/

require('./index.js');

//Code goes here
// task 1
// array to store numbers
let userNumbers = []
// getting n and doing the for loop
for (let num = parseInt(prompt("How many numbers are you entering?")); num > 0; num--){
  // get user number and add to array
  userNumbers.push(parseInt(prompt("Enter a number: ")))
}
// print out the max number (... is because Math.max requires that to work with arrays)
console.log("The max number is: " + Math.max(...userNumbers))
// print out the min number
console.log("The min number is: " + Math.min(...userNumbers))
// get the sum of the array and divide by number to get average
let sum = 0
// for loop to get sum
for (let i = 0; i <= userNumbers.length - 1; i++){
  sum += userNumbers[i]
}
// divide sum by number of numbers to get avg
let avg = sum / userNumbers.length
console.log("The average is " +  avg.toString())

// task two
//  x = (-b +- sqrt(b^2 - 4ac)) / 2a
// quad formula stuff
let a = parseInt(prompt(" a => "))
let b = parseInt(prompt(" b => "))
let c = parseInt(prompt(" c => "))
// positive version
let x1  = (-b + Math.sqrt(Math.abs(b**2 - 4 * a * c))) / (2 * a)
// negative version
let x2  = (-b - Math.sqrt(Math.abs(b**2 - 4 * a * c))) / (2 * a)
console.log("The roots are: " + x1 + " and " + x2)
