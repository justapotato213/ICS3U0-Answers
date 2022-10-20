//This is required to get input from the user in the console.
const readline = require('readline-sync');

//This section is needed for testing.
module.exports = {
  milesToKm,
  saleCalculator
}

/* **** DO NOT DELETE ABOVE THIS LINE **** */

/*
  Name:        Calling Custom Functions
  Purpose:     Does task.md

  Author:      Tony L. 708162
  Created:     20-Oct-2022
  Updated:     20-Oct-2022
*/

require('./index.js');


/*
Copy the two functions from your previous exercise (milesToKm() and saleCalculator()).  BOTH - even if you're using only one.

Write some code that makes MULTIPLE CALLS of at least one of the functions, producing different results and being used in a meaningful way.

*/

function milesToKm(distance) {
  if (distance < 0 ){
    return undefined
  }
  let km = distance * 1.60934
  return Math.round(km * 100) / 100
}

function saleCalculator(price, discount) {
  if(price < 0 || discount < 0 || discount >=100){
    return undefined
  }
  price = price * (1 - (discount/100))
  price = (Math.round(price * 100)) / 100
  return price
}

console.log("I bought a $20 jacket with a 30% discount. The final price ended up being $" + saleCalculator(20, 30).toString() + ". Then I bought some day old ice cream for 50% off normal price ($2). That price ended up being $" + saleCalculator(2, 50).toString() + ". Finally, I bought a $9999999999999 apple at a 78% discount. The final price of that ended up being $" + saleCalculator(9999999999999, 78).toString() +". Overall, I saved a whole lot of money.") 
