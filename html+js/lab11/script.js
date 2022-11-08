/**
  * This function is a quality of life function. It is used so that we don't have to type document.getElementById all the time 
  */
function getId(id) {
  return document.getElementById(id);
}

// changes image source of an img
function changeImg(id, src){
  img = getId(id)
  img.src =  src
}
