var CarLot = (function(onClickCarLot){
  
  onClickCarLot.makeChanges = function(){
    element.style.border = "10px solid " + color;
    element.style.backgroundColor = "pink";
  };

  onClickCarLot.revertChanges = function(element, color){
    element.style.border = "3px solid " + color;
    element.style.backgroundColor = "lightyellow";
  }

  return onClickCarLot;
})(CarLot);