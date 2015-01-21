/**
 * Created by rashaadswanson on 1/14/15.
 */





    var makes = {
        key1:  "Chevy",
        key2: "GM",
        key3:"Fiat",
        key4:  "Webville Motors",
        key5:  "Tucker"
    };

    var models = {
        key1:  "Cadillac",
        key2: "500",
        key3:"Belair",
        key4:  "Taxi",
        key5:  "Torpedo"
    };


    var years = {
        key1:  1955,
        key2: 1957,
        key3:1948,
        key4: 1954,
        key5:  1961
    };



    var colors = {
        key1:  "red",
        key2: "blue",
        key3:"tan",
        key4:  "yellow",
        key5:  "white"
    };


    var convertible = {
        key1: "true",
        key2: "false"

    };

    function makeCar() {
    var rand1 = Math.floor(Math.random() * Object.keys(makes).length)+1;
    var rand2 = Math.floor(Math.random() * Object.keys(models).length)+1;
    var rand3 = Math.floor(Math.random() * Object.keys(years).length)+1;
    var rand4 = Math.floor(Math.random() * Object.keys(colors).length)+1;
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

    var randomKey1= "key"+rand1;
    var randomKey2= "key"+rand2;
    var randomKey3= "key"+rand3;
    var randomKey4= "key"+rand4;
    var randomKey5= "key"+rand5;
    var randomKey6= "key"+rand6;


    var car= {
    make: makes[randomKey1],
    model: models[randomKey2],
    year: years[randomKey3],
    color: colors[randomKey4],
    passengers: randomKey5,
    convertible: convertible[randomKey6],
    mileage:0
};
    return car;




}

function displayCar(car) {
    /* alert("Congratulations Your new car is a: " + car.year + " " + car.make + " " + car.model);
     document.write("<br>","Congratulations Your new car is a: " + car.year + " " + car.make+ "" + car.model);
     console.log("Congratulations Your new car is a: " + car.year + "" + car.make + "" + car.model);
     */


     console.log("MAKES has this many: "+ Object.keys(makes).length);
     document.write("<br>"+"MAKES has this many: "+ Object.keys(makes).length);

     console.log("MODELS has this many: "+ Object.keys(models).length);
     document.write("<br>"+"MODELS has this many: "+ Object.keys(models).length);

     console.log("YEARS has this many: "+ Object.keys(years).length);
     document.write("<br>"+"YEARS has this many: "+ Object.keys(years).length);

     console.log("COLORS has this many: "+ Object.keys(colors).length);
     document.write("<br>"+"COLORS has this many: "+ Object.keys(colors).length);

     console.log("CONVERTIBLE has this many: "+ Object.keys(convertible).length);
     document.write("<br>"+"CONVERTIBLE has this many: "+ Object.keys(convertible).length);
     };

     var carToSell = makeCar();
     displayCar(carToSell);






