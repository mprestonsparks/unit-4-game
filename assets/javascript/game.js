
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
function targetNumValue(min, max) { // calc random # between 19-120 to set "targetNum" var
    min = Math.ceil(19);
    max = Math.floor(120);
    targetNum = Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
}

function crystalValues(min, max) { // calc random # between 1-12 to set crystal.[color].value
    min = Math.ceil(1);
    max = Math.floor(12);
    crystal.yellow.value = Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
    crystal.green.value = Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
    crystal.blue.value = Math.round(Math.floor(Math.random() * (max - min + 1)) + min);
    crystal.red.value = Math.round(Math.floor(Math.random() * (max - min + 1)) + min);

}

function crystalDisplay() { // **NEST THIS TO crystalValues; If, on new game, crystal is unclicked then hide crystal.value

}

function calcScore() { //Calculate/update game score; ie # of points/sum of crystal.value clicks per game
    this.yellow = function() {

    };
    this.green = function() {

    };
    this.green = function() {

    };
    this.blue = function() {

    };
    
    var score = 0;
    score += 1; // ** NEST FUNCTION SO THAT EACH COLOR IS RAN THROUGH FUNCTION
    function plus() {score += 1;}
    plus();
    return score;
}

function gameStatus() { // determine if game is won/lost; won if "score" = "targetNum", lost if "score" > "targetNum"

}

function gameRecord() { // calculate/display # of games won/lost

}

// CALL FUNCTIONS

// INITIALIZE NEW GAME
//// Reset score
var score = 0;

//// Update gamesWon & gamesLost
gameRecord();

//// Assign new TargetNum
targetNumValue();

//// Assign new crystal values
crystalValues(); //** INCOMPLETE


// GAME LOGIC
//// Add to score counter based on crystal clicks
//// On click of yellow crystal
$("#yellow-crystal").on("click", crystal.yellow.value); // FIX FUNCTION (crystal.yellow.value is wrong, should be replaced by function call of calcScore()-color
$("#green-crystal").on("click", crystal.green.value);
$("#blue-crystal").on("click", crystal.blue.value);
$("#red-crystal").on("click", crystal.red.value);






// TEST CONSOLE.LOGS -- REMOVE BEFORE SUBMITTING
console.log("targetNum: " + targetNum);
console.log("yellow.crystal.value: " + crystal.yellow.value);
console.log("red crystal value: " + crystal.red.value);
var yellowCrystalValue = crystal.yellow.value=10;
console.log(yellowCrystalValue);
