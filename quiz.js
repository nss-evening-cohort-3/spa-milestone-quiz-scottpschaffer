// Populates the div with the inventory of cars
function populatePage(inventory){

  // Get div element
  let carLotDiv = document.getElementById("carArea");
  carLotDiv.innerHTML = "";

  // Loop for all car
  for (var i=0; i<inventory.length; i++){
    
    // If first car in row of 3 cars, then start div
    if (i%3 === 0){
      carLotDiv.innerHTML += "<div class='row'>";
    }

    carLotDiv.innerHTML += "<article class='col-sm-4 car' style='border: 3px solid " + inventory[i].color + "'><header class='hed'><p class='uno'>" + 
                            inventory[i].year + " " + inventory[i].make + " " + inventory[i].model + "</p></header><section class='sec'><p class='dos'>" +
                            inventory[i].price + "</p><p class='tres'>" + inventory[i].color + "</p><p class='quatro'>Purchased = " + inventory[i].purchased.toString() +
                            "</p></section><footer><p class='cinco'>" + inventory[i].description + "</p></footer></article>";

    // If last car in row of 3 cars, end div
    if (i%3 ===2){
      carLotDiv.innerHTML += "</div>";
    }                            
  }
}

// call Inventory and then run populatePage as callback
CarLot.loadInventory(populatePage);

// Initialize all Event Listeners
CarLot.activateEvents();
