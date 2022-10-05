//This is required to get input from the user in the console.
// const readline = require('readline-sync');

/*
  Name:        Grader
  Purpose:     Fulfill requirements set out in task.md

  Author:      Tony Lin 708162 
  Created:     30-Sep-2022
  Updated:     30-Sep-2022
*/

require('./index.js');

//Code goes here

// // getting the grade
// let grade = parseInt(prompt("Enter a grade: "))
// // if statements to check the output
// // over 80 and under / equal to 100
// if (grade >= 80 && grade <= 100){
//   console.log("Exceeeding expectations.")
// }
// // checking 70 - 79
// else if (grade >= 70 && grade <= 79){
//   console.log("Meeting expectations")
// }
// // checking 50 - 69
// else if (grade >= 50 && grade <= 69){
//   console.log("Needs improvement")
// }
// // checking 0 - 49
// else if (grade >= 0 && grade <= 49){
//   console.log("Not Passing")
// }
// // entered grade under 0 || above 100 || not a number
// else{
//   console.log("Invalid grade")
// }

// password task
let password = "asdfasdfasdfasdf"
// check if user wants to enter password
let changePassword = prompt("Do you want to change your password? (y/n)")
// user enters password
let userPassword = prompt("Enter your password: ")
// checking password
if (userPassword === password){
  console.log("You got the correct password!")
  // change the password to new password if user wants to
  if (changePassword === "y"){
    password = prompt("Enter your new password")
  }
}
// wrong password from the user
else{
  console.log("Sorry, try again!")
}
  

