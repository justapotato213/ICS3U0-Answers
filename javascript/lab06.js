//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Lab 6 - Repitition
  Purpose:     Has a while loop that calculates a factorial, and a for loop that does addition. 

  Author:      Tony LIn
  Created:     03-Oct-2022
  Updated:     03-Oct-2022
*/

require('./index.js');

// factorial task
// get the users factorial number
let factorialNum = parseInt(prompt("Enter your number: "))
// check if its under 0
if (factorialNum <= 0){
  // tell them there is an error
  console.log("Error.")
}
// do the actual math
// sum of the factorial 
// starts at 1 as multiplying by 0 results in 0
let sum = 1
while (factorialNum > 0){ 
  // multiply sum by factorialNum and set sum to the answer
  sum *= factorialNum
  // minus one from the number
  factorialNum -= 1
}
// telling them the answer
console.log("The answer is " + sum.toString())

// adding task
// getting users numbers
let begin = parseInt(prompt("Enter beginning number: "))
let end = parseInt(prompt("Enter ending number: "))
// check if beginning is larger than end
if (begin > end){
  console.log("Error")
}
else{
  // setting the sum to 0 
  let additionSum = 0
  // for loop to add numbers togethers inbewteen together
  for(i = begin; i <= end; i++){
    // adding the number to the sum
    additionSum += i
  }
  // outputting it to console
  console.log("The sum of the addition is " + additionSum.toString())
}
