
// *** GAME RULES & LOGIC ***
// Display target random # (between 12-120) @ beginning of game (targetNum)
// Assign random # (between 1-12) to crystals (crystal.color.value)
// Increase score by value of crystal clicked
// Crystal's value hidden until clicked
// Display current score 
// Game is won if score === targetNum, lost if score > targetNum


// DECLARE VARIABLES
var targetNum; // random # displayed at beginning of game; matching "score" var to this # wins game, exceeding loses game
var score = 0; // user's score, used to update score counter and determine if game won or lost
var gamesWon = 0; // # of games user has won
var gamesLost = 0; // # of games user has lost

var crystal = { // images clicked on the determine increase to "score" var, each color scores a different amount, new value assigned each game
    yellow: {color:"yellow", sides:6, value:0},
    green: {color:"green", sides:8, value:0},
    blue: {color:"blue", sides:3, value:0},
    red: {color:"red", sides:5, value:0}
    };
 
// WRITE FUNCTIONS
function createRandom (min, max) {
    return Math.round(Math.floor(Math.random() * (max - min + 1)) + min)
}

function targetNumValue() { // calc random # between 19-120 to set "targetNum" var
    var targetMin = Math.ceil(19);
    var targetMax = Math.floor(120);
    targetNum = createRandom(targetMin, targetMax);
    $("#targetNumDisplay").text(targetNum);
}

function crystalValues() { // calc random # between 1-12 to set crystal.[color].value
    var crystalMin = Math.ceil(1);
    var crystalMax = Math.floor(12);

    // crystal.yellow.value = createRandom();
    // crystal.green.value = createRandom();
    // crystal.blue.value = createRandom();
    // crystal.red.value = createRandom();
    
    Object.keys(crystal).forEach(color => {   // ** READ ON THIS **
        crystal[color].value = createRandom(crystalMin, crystalMax)
    })
}

function gameStatus() { // determine if game is won/lost; won if "score" = "targetNum", lost if "score" > "targetNum"
    if (score===targetNum) {
        gamesWon = gamesWon + 1; // Increase # of gamesWon by 1
        $("#gamesWonDisplay").text(gamesWon);
        // score = 0; // Reset score to 0 for new game
        // ** ALERT GAME WON/DISPLAY MESSAGE
        } if (score > targetNum) {
            gamesLost = gamesLost + 1; // Increase # of gamesLost by 1
            $("#gamesLostDisplay").text(gamesLost);
            // ** ALERT GAME LOST/DISPLAY MESSAGE
            // score = 0; // Reset score to 0 for new game

        }
    }


// function gameRecord() { // calculate/display # of games won/lost

// }

// CALL FUNCTIONS

// INITIALIZE NEW GAME

//// Update gamesWon & gamesLost
// gameRecord();

//// Assign new TargetNum
targetNumValue();

//// Assign new crystal values
crystalValues(); //** INCOMPLETE

// gameStatus();
// GAME LOGIC
//// Add to score counter based on crystal clicks
//// On click of yellow crystal, do...
$("#yellow-crystal").on("click", function(){
    $("#yellow-crystal-caption").text("VALUE: " + crystal.yellow.value);// display on crystal
    score = score + crystal.yellow.value;
    $("#score-display").text(score);
    gameStatus();
    console.log("--------------------------------");
    console.log("score...",score);
    console.log("targetNum...",targetNum);
    console.log("score=targetNum...",score===targetNum);
    console.log("score>targetNum...",score>targetNum);
    console.log("gamesWon...",gamesWon);
    console.log("gamesLost...",gamesLost);
})

$("#green-crystal").on("click", function(){
    $("#green-crystal-caption").text("VALUE: " + crystal.green.value);// display on crystal
    score = score + crystal.green.value;
    $("#score-display").text(score);
    gameStatus();
    console.log("--------------------------------");
    console.log("score...",score);
    console.log("targetNum...",targetNum);
    console.log("score=targetNum...",score===targetNum);
    console.log("gamesWon...",gamesWon);
    console.log("gamesLost...",gamesLost);
})

$("#blue-crystal").on("click", function(){
    $("#blue-crystal-caption").text("VALUE: " + crystal.blue.value);// display on crystal
    score = score + crystal.blue.value;
    $("#score-display").text(score);
    gameStatus();
    console.log("--------------------------------");
    console.log("score...",score);
    console.log("targetNum...",targetNum);
    console.log("score=targetNum...",score===targetNum);
    console.log("gamesWon...",gamesWon);
    console.log("gamesLost...",gamesLost);
})
// $("#red-crystal").on("click", crystal.red.value);
$("#red-crystal").on("click", function(){
    $("#red-crystal-caption").text("VALUE: " + crystal.red.value);// display on crystal
    score = score + crystal.red.value;
    $("#score-display").text(score);
    gameStatus();
    console.log("--------------------------------");
    console.log("score...",score);
    console.log("targetNum...",targetNum);
    console.log("score=targetNum...",score===targetNum);
    console.log("gamesWon...",gamesWon);
    console.log("gamesLost...",gamesLost);
})

//// Reset score
// score = 0; //*** FIX THIS */

