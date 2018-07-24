var addButton = document.querySelector(".addButton");
var userInput = document.querySelector(".userInput");

var car = RegistrationNumbers();

function carP(){


var plate = car.plates(userInput.value)
userInput.value = ""
}

addButton.addEventListener("click", carP);
