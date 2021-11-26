document.write(typeof "word"); //printing value type string//

document.write(typeof 3); //print value type integer//

document.write("10" + 5); //coercion example//

function my_Function() { //what mom does when she finds the ketchup after I've been looking for 1 hour in the fridge//
    document.getElementById("Test").innerHTML = 0/0;
}

function my_Function1() { //seeing if it's not a number//
    document.getElementById("Test1").innerHTML = isNaN('This is a string');
}

function my_Function2() { //seeing if Daniel Craig is not a number//
    document.getElementById("Test2").innerHTML = isNaN('007');
}

function not_Function() { //you claim that it's not a function, yet it clearly is, checkmate, atheists.//
    document.getElementById("Not").innerHTML = !(20>10);
}

function not_Function1() {  //displaying the opposite of 5>10 (true)//
    document.getElementById("Not1").innerHTML = !(5>10);
}

document.write(2E310); //the amount of tacos I've eaten//

document.write(-3E310); //how much money I've spent on tacos//

document.write(10>2); //is 10 greater than 2//

document.write(10<2); //is 2 greater than 10//

console.log(2+2); //writing in the console log//

console.log(2>10); //boolean console log//

document.write(10==10); //comparing value//

document.write(3==10); //comparing value (false)//

A = "Carlson";

B = "Carlson";

document.write(A===B); //is value and type same//

X = 42;

Y = "42";

document.write(X===Y); //false because string and integer//

C = 55;

D = "fifty-five";

document.write(C===D); //false different type but same value//

E = 41;

F = 42;

document.write(E===F); //false same type different value//

document.write(5 > 2 && 10 > 4); // true because they both true//

document.write(5 > 10 && 10 > 4); //false because 5 is not greater than 10//

document.write(5>10 || 10 > 4); //true because one is true//

document.write(5 > 10 || 10 > 20); //false because neither is true//