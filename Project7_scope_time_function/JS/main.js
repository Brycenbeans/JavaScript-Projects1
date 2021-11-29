function get_Date() { //if function to only greet during daytime//
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function get_Date2() { //if function to only greet during nightime//
    if (new Date().getHours() > 18) {
        document.getElementById("Greeting2").innerHTML = "How are you this evening?";
    }
}


function Age_Function() {
    Age = document.getElementById("Age").value; //if else function//
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote.";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function Time_function() { //function that displays if it's morning/evening etc.//
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It's the morning!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It's the afternoon!";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

var y = 20; //assigning a global variable//

function Add_numbers_1() { //console addition working correctly//
    var x = 10;
    console.log(15+x);
}

function Add_numbers_2() { //purposely not defining a local variable//
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();