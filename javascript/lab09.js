//This is required to get input from the user in the console.
const readline = require('readline-sync');

//This section is needed for testing.
module.exports = {
  milesToKm,
  saleCalculator
}

/* **** DO NOT DELETE ABOVE THIS LINE **** */

/*
  Name:        Lab 09 Custom Funcitons
  Purpose:     Converts miles to kilometres and a sales calculator

  Author:      Tony L 708162
  Created:     17-Oct-2022
  Updated:     17-Oct-2022
*/

require('./index.js');

function milesToKm(distance){
  // check if distance is a negative distance
  if (distance < 0)
  {
    return undefined
  }
  // calculate miles to km and round to 2 decimal places
  return Math.round((distance * 1.60934) * 100 ) / 100 
}


function saleCalculator(price, discount){
  // if price is / discount is under 0 or discount is over 100: 
  if (( price < 0 || discount < 0) || discount >= 100) return undefined
  // get final price by converrting discount to decimal rather than percentage and then subing from the original
  let finalPrice = price - (price  * discount * 0.01)
  // return rounded to 2 decimal places
  return Math.round(finalPrice * 100) / 100
}
