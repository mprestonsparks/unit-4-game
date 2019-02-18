
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
    yellow: {color:"yellow", sides:6, value:0},
    green: {color:"green", sides:8, value:0},
    blue: {color:"blue", sides:3, value:0},
    red: {color:"red", sides:5, value:0}
    };
 
// WRITE FUNCTIONS
function createRandom (min, max) {
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
}

function targetNumValue() { // Calc random # between 19-120 to set "targetNum" var
    var targetMin = Math.ceil(19);
    var targetMax = Math.floor(120);
    targetNum = createRandom(targetMin, targetMax);
    $("#targetNumDisplay").text(targetNum);
}

function crystalValues() { // Calc random # between 1-12 to set crystal.[color].value
    var crystalMin = Math.ceil(1);
    var crystalMax = Math.floor(12);    
    Object.keys(crystal).forEach(color => {
        crystal[color].value = createRandom(crystalMin, crystalMax)
    })
}

function gameStatus() { // Checks if game won/lost, updates for new game
    if (score===targetNum) { // Determines if game is won/lost
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
        } if (score > targetNum) {
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
$("#yellow-crystal").on("click", function(){
    $("#yellow-crystal-caption").text("VALUE: " + crystal.yellow.value); // Display crystal's value
    score = score + crystal.yellow.value; // Increase score by amount of crystal's value
    $("#scoreDisplay").text(score); // Update score on page
    gameStatus(); // Run gameStatus function (checks for win/loss, resets game)
})

$("#green-crystal").on("click", function(){
    $("#green-crystal-caption").text("VALUE: " + crystal.green.value);// display on crystal
    score = score + crystal.green.value; // Increase score by amount of crystal's value
    $("#scoreDisplay").text(score); // Update score on page
    gameStatus(); // Run gameStatus function (checks for win/loss, resets game)
})

$("#blue-crystal").on("click", function(){
    $("#blue-crystal-caption").text("VALUE: " + crystal.blue.value);// display on crystal
    score = score + crystal.blue.value; // Increase score by amount of crystal's value
    $("#scoreDisplay").text(score); // Update score on page
    gameStatus(); // Run gameStatus function (checks for win/loss, resets game)
})

$("#red-crystal").on("click", function(){
    $("#red-crystal-caption").text("VALUE: " + crystal.red.value);// display on crystal
    score = score + crystal.red.value; // Increase score by amount of crystal's value
    $("#scoreDisplay").text(score); // Update score on page
    gameStatus(); // Run gameStatus function (checks for win/loss, resets game)
})

//// EXTRA STUFF
// Add variety of win/loss alerts
var winAlerts = [
    "Wow, you actually won...\n\nYou won.",
    "Guess we have a professional counter in the building...\n\nYou won.",
    "Bet you can't win the next one...\n\n\You won.",
    "You got lucky...\n\nYou won.",
    "You won. Good for you."
]
function randomWinAlert() { 
    var alertMin = Math.ceil(0);
    var alertMax = Math.floor(4);
    randomWinAlertNum = createRandom(alertMin, alertMax);
    winAlert = winAlerts[randomWinAlertNum]
}   

var lossAlerts = [
    "Maybe next time...\n\nYou lost.",
    "Can't win 'em all\n\nYou lost.",
    "Guess today's not your day\n\nYou lost.",
    "Are you actually trying??\n\nYou lost.",
    "You won!\n\nPSYCHE You lost."
]
function randomlossAlert() { 
    var alertMin = Math.ceil(0);
    var alertMax = Math.floor(4);
    randomLossAlertNum = createRandom(alertMin, alertMax);
    lossAlert = lossAlerts[randomLossAlertNum]
}   
