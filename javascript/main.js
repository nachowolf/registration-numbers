function RegistrationNumbers() {

  //object storing number plates
  var numPlates = {}

function plates (input){

  var newLi = document.createElement("li");

  var licence = document.getElementById("plate").getElementsByTagName("ul")[0];

if(input == ""){
  return
}

//checks that the registration number is valid

     var currentPlate = input.toUpperCase()
    var front = currentPlate.substring(0, 2);


     if (front === "CA") {
       if (numPlates[currentPlate] === undefined) {
        numPlates[currentPlate] = 0;
         licence.appendChild(newLi)
         newLi.textContent = currentPlate
       }
    }

    else if (front === "CJ") {
      if (numPlates[currentPlate] === undefined) {
       numPlates[currentPlate] = 0;
        licence.appendChild(newLi)
        newLi.textContent = currentPlate
      }
     }

 else if (front === "CY"){
   if (numPlates[currentPlate] === undefined) {
    numPlates[currentPlate] = 0;
     licence.appendChild(newLi)
     newLi.textContent = currentPlate
   }
}




}

return{
  plates:plates,
}
}
