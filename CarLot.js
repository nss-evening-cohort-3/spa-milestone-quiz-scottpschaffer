// Base IIFE
var CarLot = (function(){
  // Stores array of car information
  var inventory = [];
  // div that holds car HTML
  var carLotDiv = document.getElementById("carArea");
  // Textbox that user types into to change car descriptions
  var iBox = document.getElementById("infoBox");
  return {

    // Function that returns inventory
    getInventory: function(){
      return inventory;
    },

    // Function that reads JSON file and writes it to inventory array (XHR), then passes inventory to callback function
    loadInventory: function(cBack){
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function(){
        inventory = JSON.parse(this.responseText).cars;
        
        // Callback and pass list of cars (inventory)
        cBack(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
    }
  }
})();