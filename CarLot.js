"use strict";

var CarLot = (function(){
  let inventory = [];
  let carLotDiv = document.getElementById("carArea");
  let iBox = document.getElementById("infoBox");
  return {

    getInventory: function(){
      return inventory;
    },

    loadInventory: function(cBack){
      // alert("aaa");
      var inventoryLoader = new XMLHttpRequest();
      inventoryLoader.addEventListener("load", function(){
        inventory = JSON.parse(this.responseText).cars;
        console.log("inventory", inventory);
        console.log("inventory[0].color", inventory[0].color);
        cBack(inventory);
      });
      inventoryLoader.open("GET", "inventory.json");
      inventoryLoader.send();
      // return xxx;
    }
  }
})();