

function addition_function () {    //adding function//
    var addition = 2 + 2 ;
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition;
}

function subtraction_Function () { //subtract function//
    var Subtraction = 5 - 2;
    document.getElementById("Math").innerHTML = "5 - 2 = " + Subtraction;
}

function multiplication () { //multiplication function//
    var simple_Math = 6 * 8;
    document.getElementById("Math").innerHTML = "6x8 =" + simple_Math;
}

function division () { //division function//
    var simple_Math = 48/6;
    document.getElementById("Math").innerHTML = "48/6 = " + simple_Math;
}

function more_Math() { //complext math function//
    var simple_Math = (1+2) * 10 / 2 - 5;
    document.getElementById("Math").innerHTML = "all that math =" + simple_Math;
}

function modulus_Operator () { //remainder function//
    var simple_Math = 25 % 6;
    document.getElementById("Math").innerHTML = " " + simple_Math;
}

function negation_Operator () { //negation function//
    var x = 10;
    document.getElementById("Math").innerHTML = -x;
}


function increment_operator () { //increment operation//
    var X = 5;
    X++;
    document.getElementById("Math").innerHTML = "" + X;
}

function decrement_operator () { //decrement function//
    var X = 5;
    X--;
    document.getElementById("Math").innerHTML = "" + X;
}

document.write(Math.random() * 100); //rng 100 function//

document.write(Math.SQRT2); //math object square root function//