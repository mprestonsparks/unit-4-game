
// *** GAME RULES & LOGIC ***
// Display target random # (between 12-120) @ beginning of game (targetNum)
// Assign random # (between 1-12) to crystals (crystal.color.value)
// Increase score by value of crystal clicked
// Crystal's value hidden until clicked
// Display current score 
// Game is won if score === targetNum, lost if score > targetNum


// DECLARE VARIABLES
var targetNum; // random # displayed at beginning of game; matching "score" var to this # wins game, exceeding loses game
var score; // user's score, used to update score counter and determine if game won or lost
var gamesWon; // # of games user has won
var gamesLost; // # of games user has lost
var crystal = { // images clicked on the determine increase to "score" var, each color scores a different amount, new value assigned each game
    yellow: { color:"yellow", sides:6, value:[]},
    green: {color:"green", sides:8, value:[]},
    blue: {color:"blue", sides:3, value:[]},
    red: {color:"red", sides:5, value:[]}
    };
 
// DECLARE FUNCTIONS
function targetNumValue() { // calc random # between 19-120 to set "targetNum" var

}

function crystalValues() { // calc random # between 1-12 to set crystal.[color].value

}

function crystalDisplay() { // **NEST THIS TO crystalValues; If, on new game, crystal is unclicked then hide crystal.value

}

function calcScore() { //Calculate/update game score; ie # of points/sum of crystal.value clicks per game

}

function gameStatus() { // determine if game is won/lost; won if "score" = "targetNum", lost if "score" > "targetNum"

}

function gameRecord() { // calculate/display # of games won/lost

}



console.log(crystal.yellow.color);
var yellowCrystalValue = crystal.yellow.value=10;
console.log(yellowCrystalValue);
