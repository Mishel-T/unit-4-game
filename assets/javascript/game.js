//global variables

var randomNum ;
var wins = 0;
var losses = 0;
var score = 0;
var crystalOne = "";
//print wins and losses counters to 0
$("#wins").html("Wins: "+ 0);
$("#losses").html("Losses: "+0);


//function to call when starting game and restarting game
$(document).ready(function (){
    //reset score to 0
    score = 0
    //generate random number
    randomNum = Math.floor((Math.random() * 100) + 20);
    console.log(randomNum)
    
    //generate random numbers for each crystal
    crystalOne = Math.floor(Math.random() * 20 +1);
    crystalTwo = Math.floor(Math.random() * 20 +1);
    crystalThree = Math.floor(Math.random() * 20 +1);
    crystalFour = Math.floor(Math.random() * 20 +1);
    console.log(crystalOne, crystalTwo, crystalThree, crystalFour);

    //reprint 0 score
    $("#score").html(score);
    console.log(score);

    //reprint random # to html
    $("#randomNum").html(randomNum);

    //reassign random values to crystals
    $("#crystalOne").val(crystalOne);
    $("#crystalTwo").val(crystalTwo);
    $("#crystalThree").val(crystalThree);
    $("#crystalFour").val(crystalFour);

});

//main function which will be called on click of each button, parameters will be run when function is called later
//need to figure out how to create one function to cover all crystal clicks - for loop?
function run(){
    console.log("test");
    //add crystal value of button clicked to score
    score = crystalOne+score;
    console.log(score);

    //reprint score to html
    $("#score").html(score);


    //add if condition to check if score === randomNum
    if (score ===randomNum) {
    //if condition met, increment wins by 1 and reset game
    wins++;
    console.log(wins);
        //print wins to html
        $("#wins").html("Wins: " + wins);
};



    //add if condition to check if score > randomNum
    //figure out how to call start game function to reset game - console says startGame() is undefined
    if (score > randomNum) {
    //if condition met, increment losses by 1 and reset game
        losses++;
        console.log(losses);

        //print losses to html
        $("#losses").html("Losses: " + losses);
    }


};
 


//call function to Start Game
//call run function on click event
$("#crystalOne").click(run);