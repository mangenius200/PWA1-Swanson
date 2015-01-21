//get element by Id
var access = document.getElementById("code9");

//get the content between the html and assign it to the variable called code
var code = access.innerHTML;
//The page creates an alert with the passcode contained in the variable code
code = code + " midnight";
//put alert to display this code
alert(code);


