"use strict";

// Base IIFE
var CarLot = (function(){
  // Stores array of car information
  let inventory = [];
  // div that holds car HTML
  let carLotDiv = document.getElementById("carArea");
  // Textbox that user types into to change car descriptions
  let iBox = document.getElementById("infoBox");
  return {

    // Function that returns inventory
    getInventory: function(){
      return inventory;
    },

    // Function that reads JSON file and writes it to inventory array (XHR), then passes inventory to callback function
    loadInventory: function(cBack){
      let inventoryLoader = new XMLHttpRequest();
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