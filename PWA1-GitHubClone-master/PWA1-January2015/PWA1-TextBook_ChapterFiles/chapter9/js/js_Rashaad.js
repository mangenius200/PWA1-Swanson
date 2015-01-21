/**
 * Created by rashaadswanson on 1/21/15.
 */
window.onload = init;

//var images = document.getElementsByTagName("img");
//images.onclick = showAnswer;
function init (){
            var image = document.getElementsByTagName("img");//make variable called image and get element by tag
            for (var i = 0; i < image.length; i++){ //make a loop
                image[i].onclick = showAnswer;//
            }
}
//make a new function
function showAnswer(evenObject){
    var image=evenObject.target;//set image variable equal to event Object
    var name = image.id; // set the name variable to image id
    console.log("You have clicked on"+ name + ".");//let the user know which image they clicked on
    name = "images/"+name+".jpg";// images name
    image.src=name;//find the source of the image
    setTimeout(reblur,2000,image)//blur it for two seconds
}
//make an function
function reblur(image){
    //var image = image.target;
    var name = image.id;
    name = "images/"+ name+"blur.jpg"; //blur the image
    image.src = name; //find the source of the image
}





