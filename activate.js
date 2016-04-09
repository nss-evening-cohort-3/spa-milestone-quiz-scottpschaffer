// IIFE that handles adding Event Listeners
var CarLot = (function(originalCarLot){

  originalCarLot.activateEvents = function(){
    // f is the previously selected car (starts out as NULL and needs to be global so can be used by both Event Listeners)
    var f = null;
    // Gets div element that contains cars
    var carLotDiv = document.getElementById("carArea");
    // Gets input element where changes to selected car's description is typed
    var iBox = document.getElementById("infoBox");

    // Add Event Listener to div that contains cars to wait for mouseclick
    carLotDiv.addEventListener("click", function(e){
      // Waits for mouseclick on <p> only (so stray clicks on section or article are ignored)
      if ((e.target.tagName) === "P"){
        // If f (previously-clicked car) is not equal to e (currently-clicked car) OR f is NULL (e is first click)
        if ((f !== e) && (f !== null)){
          // Undo changes to previously-clicked car
          CarLot.revertChanges(f.target.parentElement.parentElement, f.target.parentElement.parentElement.style.borderColor);
        }
        // f becomes e (no longer need previous car)
        f = e;

        // Make changes to currently-clicked car
        CarLot.makeChanges(e.target.parentElement.parentElement, e.target.parentElement.parentElement.style.borderColor);

        // Blank out textbox
        iBox.value = "";
        // Give textbox focus
        iBox.focus();
      }
      
    });

    // Add Event Listener to textbox so Description of current car (now is f)
    iBox.addEventListener("keyup", function(e){
      // Description of current car matches what is in textbox
      f.target.parentElement.parentElement.lastChild.firstChild.innerHTML = iBox.value;
    });
  };

  return originalCarLot;

})(CarLot);