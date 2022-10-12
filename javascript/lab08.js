//This is required to get input from the user in the console.
const readline = require('readline-sync');

/*
  Name:        Lab 8 String enhancements
  Purpose:     Does tasks in task.md

  Author:      Tony Lin 708162
  Created:     28-Sep-2022
  Updated:     28-Sep-2022
*/

require('./index.js');

//Code goes here
// task 1
// get input from user
let sentence1 = prompt("Enter sentence 1=")
let sentence2 = prompt("Enter sentence 2=")
// output upper and lower
console.log(sentence1.toUpperCase() + " is sentence one in upper case")
console.log(sentence1.toLowerCase() + " is sentence two in lower case")
// output starts with vowel or not
// setup stuff (array with vowels and bools )
let vowels = ["a", "e", "i", "o", "u"]
let isVowel1 = false
let isVowel2 = false
// loop through vowels and check if they start with the vowel
for(let i = 0; i < vowels.length; i++){
  if(sentence1.toLowerCase().startsWith(vowels[i]) || sentence1.toLowerCase().endsWith(vowels[i])){
    // has vowel, set true
    isVowel1 = true
  }
  if(sentence2.toLowerCase().startsWith(vowels[i]) || sentence2.toLowerCase().endsWith(vowels[i])){
    // has vowel, set true
    isVowel2 = true
  }
}
// check print if they have vowel or not
if (isVowel1){
  console.log("Sentence one starts or ends with a vowel.")
}
else{
  console.log("Sentence one does not start or end with a vowel")
}
if (isVowel2){
  console.log("Sentence two starts or ends with a vowel.")
}
else{
  console.log("Sentence two does not start or end with a vowel")
}

// task 2
// setup stuff
let numOfVowel = numOfCon = numOfPunc = numOfSpace = 0
let con = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
let punc = ["?", ",", ".", "\"", "(", ")", "!", ";", ":" ]

// getting input
let userSentence = prompt("Enter a sentence: ") 
// checking each character
for(character in userSentence){

  // check if character is vowel
  if (vowels.includes(userSentence.at(character).toLowerCase())){
    numOfVowel++
  }
    // check if character is constanant
  else if (con.includes(userSentence.at(character).toLowerCase())){
    numOfCon++
  }
    // check if character is puncuation
  else if (punc.includes(userSentence.at(character).toLowerCase())){
    numOfPunc++
  }
    // check if character is a space
  else if (userSentence.at(character) == " "){
    numOfSpace++
  }
}
// print out the number of things
console.log("Vowels: " + numOfVowel)
console.log("Constanants " + numOfCon)
console.log("Punctuation " + numOfPunc)
console.log("Spaces: " + numOfSpace)
