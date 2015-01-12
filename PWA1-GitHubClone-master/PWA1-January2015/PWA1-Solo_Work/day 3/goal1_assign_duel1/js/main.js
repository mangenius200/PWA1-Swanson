/*
 Name: Rashaad Swanson
 Date: 01/09/2015
 Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){
   //begins the fight game
    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    //Player two name
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    //player #2 damage
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    //player two health
    var playerTwoHealth = 100;
    //round starts at 0
    var round=0;
     //make a fight function
    function fight(){
        //how the fight function will run
        console.log ('in the fight function');
        // start the user with the game
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        //make a for loop so the game only goes 10 rounds
        for (var i=0; i < 10; i++){

            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //declare variables for minimum damage for player 1
            var minDamage1 = player1Damage * .5;
            //declare variables for minimum damage for player 2
            var minDamage2 = player2Damage * .5;
            //declare variables for minimum damage for player 1
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1);
            //declare variables for minimum damage for player 2
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //inflict damage
            playerOneHealth-=f1;
            //inflict damage on player Two
            playerTwoHealth-=f2;
            //display the players health
            console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);
            //make a variable called results host it in winner check
            var results = winnerCheck();
            //print out the results
            console.log(results);
             //if there is no winner
            if (results === "no winner"){
                //increment up
                round++;
                //alert the user of the health
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER* "+playerTwoName+":"+playerTwoHealth);
            // alert the results to the user
            }else{
                //alert the results to the user
                alert(results);
                //stop the conditional
                break;
            //close the else
            };
        //close the if
        };
//close the whole function
    };
//to check the winner of the game
    function winnerCheck(){
        // prints out the winner of the game
        console.log("in winnerCheck FN");
       //make a variable if there is no winner
        var result="no winner";
        //if statement
        if (playerOneHealth<1 && playerTwoHealth<1){
           //prints out if both die
            result = "You Both Die";
            //else if statement if player oen health is less than one
        } else if(playerOneHealth<1){
            //prints out player two wins
            result =playerTwoName+" WINS!!!"
            //else if statement if player two health is less than one
        } else if(playerTwoHealth<1){
            //prints out if player two wins
            result =playerOneName+" WINS!!!"
        };
        //return the winner of the game
        return result;

    };

    /*******  The program gets started below *******/
    console.log('program starts')
    //empty fight function
    fight();
//closing the whole program
})();