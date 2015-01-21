/*
var access = document.getElementById("code9");
var code = access.innerHTML; 
code = code + " midnight"; 
alert(code);

*/
//first we created the function
function init() {
// make a variable to hold my green text
    var myGreenText = document.getElementById("mygreentext");

// set my green text equal to red alert
   myGreenText.innerHTML = "Rashaad's 4th Green Alert: hit by phaser fire!";
//sets text to green
    myGreenText.setAttribute("class","greentext");

    var myBlueText=document.getElementById("mybluetext");
    myBlueText.innerHTML = "Rashaad's 4th Blue Alert: hit by phaser fire!";
    myBlueText.setAttribute("class","bluetext");

var myRedText=document.getElementById("myredtext");
    myRedText.innerHTML = "Rashaad's 4th Red Alert: hit by phaser fire!";
    myRedText.setAttribute("class","redtext");

    var myBlueText=document.getElementById("mybluetext");
    myBlueText.innerHTML = "Rashaad's 4th Blue Alert: hit by phaser fire!";
    myBlueText.setAttribute("class","bluetext");

    //headings
    var greenPlanet=document.getElementById("greenPlanet");
    greenPlanet.innerHTML = "Green Planet";
    greenPlanet.setAttribute("class","greentext");


    var redPlanet=document.getElementById("redPlanet");
    redPlanet.innerHTML = "Red Planet";
    redPlanet.setAttribute("class","redtext");

    var bluePlanet=document.getElementById("bluePlanet");
    bluePlanet.innerHTML = "Blue Planet";
    bluePlanet.setAttribute("class","bluetext")


}

//assigning the function init the window.onload property
window.onload = init;
