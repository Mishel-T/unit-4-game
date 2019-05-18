//global variables

var randomNum ;
var wins = 0;
var losses = 0;
var score = 0;
var crystalOne = null;
var crystalTwo = null;
var crystalThree = null;
var crystalFour = null;

//print wins and losses counters to 0
$("#wins").html("Wins: "+ 0);
$("#losses").html("Losses: "+0);


//function to call when starting game and restarting game
function startGame(){
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

};

//main function which will be called on click of each button, parameters will be run when function is called later
//need to figure out how to create one function to cover all crystal clicks - for loop?
function run(){
    //add crystal value of button clicked to score
    //run if and if else statement like this for each button and display score at the end of the if else statements
   if (this.id == 'crystalOne') {
   score = crystalOne + score;
    console.log(score);
   } 
   else if (this.id == 'crystalTwo') {
    score = crystalTwo + score;
    console.log(score);

   } 
   else if(this.id == 'crystalThree') {
       score = crystalThree + score;
       console.log(score);
   } 
   else if(this.id == 'crystalFour') {
       score = crystalFour + score;
       console.log(score);
   };

    //reprint score to html
    $("#score").html(score);


    //add if condition to check if score === randomNum
    //need to have score displayed first, THEN run alert
    if (score === randomNum) {
    //if condition met, increment wins by 1 and reset game
    wins++;
    console.log(wins);
        //print wins to html
        $("#wins").html("Wins: " + wins);
        //alert of win and reset game
        alert ("You Win all the Rupees!");
        $(document).ready(startGame);
};



    //add if condition to check if score > randomNum
    //figure out how to call start game function to reset game - console says startGame() is undefined - solved! call document.ready not just fx by itself
    if (score > randomNum) {
        $("#score").html(score);
    //if condition met, increment losses by 1 and reset game
        losses++;
        console.log(losses);

        //print losses to html
        $("#losses").html("Losses: " + losses);

        //alert of loss and reset game
        alert ("Womp Womp!");
        $(document).ready(startGame);
    }


};
 


//call function to Start Game
$(document).ready(startGame);

//call run function on click event
$(".crystals").click(run);