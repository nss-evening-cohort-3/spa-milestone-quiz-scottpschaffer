// IIFE that handles changes to car
var CarLot = (function(onClickCarLot){
  
  // Function that changes the border and background color of car clicked
  onClickCarLot.makeChanges = function(element, color){
    element.style.border = "10px solid " + color;
    element.style.backgroundColor = "pink";
  };

  // Function that undoes the changes to the border and background color of car previously clicked
  onClickCarLot.revertChanges = function(element, color){
    element.style.border = "3px solid " + color;
    element.style.backgroundColor = "white";
  }

  return onClickCarLot;
})(CarLot);