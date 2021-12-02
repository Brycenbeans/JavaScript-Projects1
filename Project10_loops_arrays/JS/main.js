function count_To_Ten() { //while loop function count to ten
    var Digit = "";
    var X = "1";
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violen", "Trumpet", "Flute"]; //creating an object
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}


function cat_pics() { //displaying a specific array value from the object
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function () { //utilizing const
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black:"};
    Musical_Instrument.color= "blue";
    Musical_Instrument.price= "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;

}



let car = { //creating object with let
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};


let text = ""; //continue statement in console

    
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}

console.log(text);

let z = 0; //break statement in console

while (z < 6) {
  if (z === 3) {
    break;
  }
  z = z + 1;
}

console.log(z);
