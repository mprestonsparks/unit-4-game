// *** GAME RULES & LOGIC ***
// Display target random # (between 12-120) @ beginning of game (targetNum)
// Assign random # (between 1-12) to crystals (crystal.color.value)
// Increase score by value of crystal clicked
// Crystal's value hidden until clicked
// Display current score
// Game is won if score === targetNum, lost if score > targetNum

// DECLARE VARIABLES
var targetNum; // Random # displayed at beginning of game; matching "score" var to this # wins game, exceeding loses game
var score = 0; // User's score, used to update score counter and determine if game won or lost
var gamesWon = 0; // # of games user has won
var gamesLost = 0; // # of games user has lost
var winAlert;
var lossAlert;

var crystal = {
  yellow: { color: "yellow", sides: 6, value: 0 },
  green: { color: "green", sides: 8, value: 0 },
  blue: { color: "blue", sides: 3, value: 0 },
  red: { color: "red", sides: 5, value: 0 }
};

// WRITE FUNCTIONS
function createRandom(min, max) {
  return Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

function targetNumValue() {
  // Calc random # between 19-120 to set "targetNum" var
  var targetMin = Math.ceil(19);
  var targetMax = Math.floor(120);
  targetNum = createRandom(targetMin, targetMax);
  $("#targetNumDisplay").text(targetNum);
}

function crystalValues() {
  // Calc random # between 1-12 to set crystal.[color].value
  var crystalMin = Math.ceil(1);
  var crystalMax = Math.floor(12);
  Object.keys(crystal).forEach(color => {
    crystal[color].value = createRandom(crystalMin, crystalMax);
  });
}

function gameStatus() {
  // Checks if game won/lost, updates for new game
  if (score === targetNum) {
    // Determines if game is won/lost
    // Alert win
    randomWinAlert(); // Select a random Win Alert
    alert(winAlert); // Display Win Alert
    // Update # of games won
    gamesWon = gamesWon + 1; // Increase # of gamesWon by 1
    $("#gamesWonDisplay").text(gamesWon);
    // Reset score to 0 & update on page
    score = 0; // Reset score to 0 for new game
    $("#scoreDisplay").text(score); // Update score displayed to 0
    //Reset targetNum & update on page
    targetNumValue(); // Generate a new random targetNum
    $("#targetNumDisplay").text(targetNumValue); // Update targetNum on page
    $(".crystal-values").text(" "); // Hide crystal value until clicked
    crystalValues(); // Generate new random crystal values
  }
  if (score > targetNum) {
    // Alert loss
    randomlossAlert(); // Select a random Loss Alert
    alert(lossAlert); // Display Loss Alert
    // Update # of games lost
    gamesLost = gamesLost + 1; // Increase # of gamesLost by 1
    $("#gamesLostDisplay").text(gamesLost);
    // Reset score to 0 & update on page
    score = 0; // Reset score to 0 for new game
    $("#scoreDisplay").text(score); // Update score on page to 0
    // Reset targetNum & update on page
    targetNumValue(); // Generate a new random targetNum
    $("#targetNumDisplay").text(targetNumValue); // Update targetNum on page
    $(".crystal-values").text(" "); // Hide crystal value until clicked
    crystalValues(); // Generate new random crystal values
  }
}

//// CALL FUNCTIONS

// Assign new TargetNum at beginning of game
targetNumValue();

//// Assign new crystal values at beginning of game
crystalValues();

//// GAME LOGIC
// On click of yellow crystal, do...
$("#yellow-crystal").on("click", function () {
  $("#yellow-crystal-caption").text("VALUE: " + crystal.yellow.value); // Display crystal's value
  score = score + crystal.yellow.value; // Increase score by amount of crystal's value
  $("#scoreDisplay").text(score); // Update score on page
  gameStatus(); // Run gameStatus function (checks for win/loss, resets game)
});

$("#green-crystal").on("click", function () {
  $("#green-crystal-caption").text("VALUE: " + crystal.green.value); // display on crystal
  score = score + crystal.green.value; // Increase score by amount of crystal's value
  $("#scoreDisplay").text(score); // Update score on page
  gameStatus(); // Run gameStatus function (checks for win/loss, resets game)
});

$("#blue-crystal").on("click", function () {
  $("#blue-crystal-caption").text("VALUE: " + crystal.blue.value); // display on crystal
  score = score + crystal.blue.value; // Increase score by amount of crystal's value
  $("#scoreDisplay").text(score); // Update score on page
  gameStatus(); // Run gameStatus function (checks for win/loss, resets game)
});

$("#red-crystal").on("click", function () {
  $("#red-crystal-caption").text("VALUE: " + crystal.red.value); // display on crystal
  score = score + crystal.red.value; // Increase score by amount of crystal's value
  $("#scoreDisplay").text(score); // Update score on page
  gameStatus(); // Run gameStatus function (checks for win/loss, resets game)
});

//// EXTRA STUFF
// Add variety of win/loss alerts
var winAlerts = [
  "Wow, you actually won...\n\nYou won.",
  "Guess we have a professional counter in the building...\n\nYou won.",
  "Bet you can't win the next one...\n\nYou won.",
  "You got lucky...\n\nYou won.",
  "You won. Good for you."
];
function randomWinAlert() {
  var alertMin = Math.ceil(0);
  var alertMax = Math.floor(4);
  randomWinAlertNum = createRandom(alertMin, alertMax);
  winAlert = winAlerts[randomWinAlertNum];
}

var lossAlerts = [
  "Maybe next time...\n\nYou lost.",
  "Can't win 'em all\n\nYou lost.",
  "Guess today's not your day\n\nYou lost.",
  "Are you actually trying??\n\nYou lost.",
  "You won!\n\nPSYCHE You lost."
];
function randomlossAlert() {
  var alertMin = Math.ceil(0);
  var alertMax = Math.floor(4);
  randomLossAlertNum = createRandom(alertMin, alertMax);
  lossAlert = lossAlerts[randomLossAlertNum];
}

// TESTING //

$(".difficulty-buttons").on("click", function () {
  console.log(
    "easy-mode-button checked... ",
    $("#easy-mode-button-input").prop("checked")
  );
  console.log(
    "hard-mode-button checked... ",
    $("#hard-mode-button-input").prop("checked")
  );
});

var maxNumber = 100; // Set a maximum to solve up to
// Create arrays to solve for prime #s
var numerators = []; // Array to hold numerators
var denominators = []; // Array to hold denominators
var potPrimeDivisors = []; // Divisors used to test potential prime #s
var potentialPrimesListWithDuplicates = []; // Array of potential primes that includes duplicate values
var potentialPrimesList = []; // Array of potential primes without duplicates
var primeList = []; // Array of prime #s 

// STEP 1- Create an array of numerators and denominators
for (var i = 0; i < maxNumber; i++) { // Loop to create numerators up to MaxNumber
  if (i % 2 != 0) { // Exclude even numbers
    numerators.push(i); // Make an array of numerators as every (odd) # to maxNumber
  }
}

for (var i = 1; i < maxNumber; i++) { // Create a list of denominators (to test numerators for primacy)
  denominators.push(i); // Push denominators to array
}

// STEP 2- Generate a list of potential prime #s
for (i = 0; i < numerators.length; i++) { // Loop through entire numerators array
  var n = numerators[i]; // n = each individual value in numerators array
  for (var j = 0; j < numerators[i]; j++) { // Loop through denominators array
    if (denominators[j] <= numerators[i]) { // Only continue loop if denominator < numerator
      var d = denominators[j]; // d = each qualifying denominator
    }
    if (!(n === d) || !(d === 1)) { // If (denominator# isn't same # as numerator) OR (denominator# isn't 1)
      // Note for next line: Potential prime nums have modulus === 0
      var modulus = n % d; // Find modulus of numerator / denominator
      if (modulus === 0) { // If numerator / denominator has modulus === 0
        var potentialPrimes = n; // Store numerator # as potential prime #
        potentialPrimesListWithDuplicates.push(n); // Push all qualifying #s to an array
        potentialPrimesListWithDuplicates.forEach(function (n) {
          if (potentialPrimesList.indexOf(n) === -1) { // If n(potentialPrime) is not duplicate of a previously pushed value
            potentialPrimesList.push(n); // Then push n to list of potential prime #s
          }
        })
      }
    }
  }
}
console.log("potentialPrimesList... ", potentialPrimesList);

// STEP 3- Check if each potential prime # (pN) is divisible by any # preceeding it in the list
// by dividing it by each # preceeding it (pD)
// NOTE: Necessary bc numerator%denominator===0 is insufficient; ie 9%3===0 (but 9 isn't prime)

//To determine pD (potential denominators)
for (i = 0; i < potentialPrimesList.length - 1; i++) { // Loop through array, starting at end
  var length = potentialPrimesList.length - 2; // To locate each value in potential prime list, excluding last value
  var pD = potentialPrimesList[length - i]; // Each value in array excluding the last # (** -1?? Probably a mistake**)
  potPrimeDivisors.push(pD); // Push value to an array of potential divisors

  // To determine pN (potential numerators)
  for (j = 0; j < potPrimeDivisors.length; j++) { // Check each numerator for however many denominators preceed it
    console.log("j..", j);
    var length = potentialPrimesList.length - 1; // Find last value in potential primes array to use as numerator (working backwards)
    var pN = potentialPrimesList[length - j];  // Find all potential numerators via loop (j)

    //Find potential primes where modulus of numerator % denomiator === 0
    if (pN != pD) { // IF to exclude dividing values by themselves
      var potPrimeModulus = pN % pD // Check each pN for divisibility by pD (ie test if not prime)
      console.log("pN:", pN, " pD:", pD, " pN%pD..", pN, "%", pD, "===", potPrimeModulus);
      if (potPrimeModulus === 0) { // If pN is divisible by a # preceeding it
        var pNToRemove = pN; // Then store it as # to later be removed from potential primes array
        var index = potentialPrimesList.indexOf(pNToRemove); // Check potentialPrimesList for pNToRemove's position in array
        if (index > -1) { // If pNToRemove is found in the potentialPrimesList array
          potentialPrimesList.splice(index, 1); // Then remove pNToRemove from potentialPrimesList arary
        }
      }
      console.log("pNToRemove", pN);
    }
    console.log("---END OF LOOP---");
  }
}
console.log("potentialPrimeList... ", potentialPrimesList);
