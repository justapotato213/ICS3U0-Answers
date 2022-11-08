/**
  * This function is a quality of life function. It is used so that we don't have to type document.getElementById all the time 
  */

function getId(id) {
  return document.getElementById(id);
}
/*
//Interacts with HTML side, and uses
//the hypotenuse function
function calculateHypotenuse() {
  //Get the values from the text boxes
  const aValue = getId('hypotenuseAValue').value;
  const bValue = getId('hypotenuseBValue').value;

  //Convert the values to integers
  const aInt = parseInt(aValue);
  const bInt = parseInt(bValue);

  //Calculate the hypotenuse
  const hypotenuseValue = hypotenuse(aInt, bInt);
  
  //Output the information to an HTML element
  //with an id of 'hypotenuseAnswer'
  getId('hypotenuseAnswer').innerHTML = "The hypotenuse is: " + hypotenuseValue;
}

//Calculates the hypotenuse
//Given a and b.
function hypotenuse(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return NaN;
  }
  return Math.sqrt(a**2 + b**2);
}
*/


function milesToKm(){
  const distance = parseInt(getId("mileSlider").value)
  let kmDisplay = getId("kmDisplay")
  
  // check if distance is a negative distance
  if (distance < 0 || distance == NaN)
  {
    return undefined
  }
  // calculate miles to km and round to 2 decimal places, and display
  kmDisplay.innerHTML = "Kilometers: " + Math.round((distance * 1.60934) * 100 ) / 100 
  
}


function saleCalculator(){
  const price = parseInt(getId("price").value)
  const discount = parseInt(getId("discount").value)
  let display = getId("saleDisplay")
  // if price is / discount is under 0 or discount is over 100: 
  if (( price < 0 || discount < 0) || discount >= 100 || price == NaN || discount == NaN) return undefined
  // get final price by converrting discount to decimal rather than percentage and then subing from the original
  let finalPrice = price - (price  * discount * 0.01)
  // set display to be rounded to 2 decimal places
  display.innerHTML = "Final Price is: $" +  Math.round(finalPrice * 100) / 100 
}
