/**
 * Created by rashaadswanson on 1/14/15.
 */
function makePhrases() {
    var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
    var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
    var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

    var rand1 = Math.floor(Math.random() * Object.keys(words1).length+1);
    var rand2 = Math.floor(Math.random() * Object.keys(words2).length)+1;
    var rand3 = Math.floor(Math.random() * Object.keys(words3).length)+1;

    var randomKey1= "key" + rand1;
    var randomKey2= "key" + rand2;
    var randomKey3= "key" + rand3;

    var phrase= "Your Random Phrase is:" + words1[randomKey1]+ " " +words2[randomKey2] + " "+words3[randomKey3];
    alert(phrase);
}

console.log("Your Random Phrase is:" + words1[randomKey1]+ " " +words2[randomKey2] + " "+words3[randomKey3];
console.log(randomKey1, "of 'Words 1' is:", words1[randomkey1]);
console.log(randomKey2, "of 'Words 1' is:", words1[randomkey2]);
console.log(randomKey3, "of 'Words 1' is:", words1[randomkey3]);


console.log(randomKey1, "of 'Words 1' is:", words1[randomkey1]);
console.log(randomKey2, "of 'Words 1' is:", words1[randomkey2]);
console.log(randomKey3, "of 'Words 1' is:", words1[randomkey3]);
makePhrases()