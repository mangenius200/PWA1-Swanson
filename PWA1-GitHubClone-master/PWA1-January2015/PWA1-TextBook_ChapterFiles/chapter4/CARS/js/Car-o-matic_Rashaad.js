/**
 * Created by rashaadswanson on 1/14/15.
 */

var makes = ["Chevy","GM", "Fiat","Webville Motors","Tucker"];
var models = ["Cadillac","500","Bel-Air","Taxi","Torpedo"];
var years = [1955,1957,1948,1954,1961];
var colors =["red","blue","tan","yellow","white"];
var convertible = [true, false];

function makeCar() {

    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5) + 1;
    var rand6 = Math.floor(Math.random() * 2);

var car = {
    make: makes[rand1],
    model: models[rand2],
    year: years[rand3],
    color: colors[rand4],
    passengers: rand5,
    convertible: convertible[rand6],
    mileage:0
};
    return car;



}

function displayCar(car){
    alert("Congratulations Your new car is a: " + car.year + "" + car.make + "" + car.model);
    document.write("<br>"+ "Congratulations Your new car is a: " + car.year + " " + car.make+ "" + car.model);
    console.log("Congratulations Your new car is a: " + car.year + "" + car.make + "" + car.model);

    console.log(car.make+" came from this array of choices "+makes);
    console.log(car.model+" came from this array of choices "+models);
    console.log(car.year+" came from this array of choices "+years);
    console.log(car.convertible+" came from this array of choices "+colors);
    console.log(car.make+" came from this array of choices "+convertible);


    document.write("<br>"+ car.make+" came from this array of choices "+makes);
    document.write("<br>"+ car.model+" came from this array of choices "+models);
    document.write("<br>"+ car.year+" came from this array of choices "+years);
    document.write("<br>"+car.convertible+" came from this array of choices "+colors);
    document.write("<br>"+car.make+" came from this array of choices "+convertible);


    console.log("MAKES has this many: "+ Object.keys(makes).length);
    document.write("<br>"+"MAKES has this many: "+ Object.keys(makes).length);

    console.log("MODELS has this many: "+ Object.keys(models).length);
    document.write("<br>"+"MODELS has this many: "+ Object.keys(models).length);

    console.log("YEARS has this many: "+ Object.keys(years).length);
    document.write("<br>"+"YEARS has this many: "+ Object.keys(years).length);

    console.log("COLORS has this many: "+ Object.keys(colors).length);
    document.write("<br>"+"COLORS has this many: "+ Object.keys(colors).length);

    console.log("CONVERTIBLE has this many: "+ Object.keys(makes).length);
    document.write("<br>"+"CONVERTIBLE has this many: "+ Object.keys(makes).length);
}

var carToSell = makeCar();
displayCar(carToSell);
