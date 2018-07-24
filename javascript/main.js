function RegistrationNumbers() {

// object storing number plates
  var plates = {}

//checks that the registration number is valid
  function plateChecker(input) {

    var currentPlate = input.toUpperCase()
    var front = currentPlate.substring(0, 2);


    if (front === "CA") {
      if (plates[currentPlate] === undefined) {
        plates[currentPlate] = 0
      }
    }

if (front === "")


  }
}
