function My_First_Function () {
    var str = "This text is green!";
    var result = str.fontcolor("green");
    document.getElementById("Green_Text").innerHTML = result;
} //this is the function that displays a green text when the user clicks the button//

function myFunction () {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;
} //this is the function that displays concatenated strings when clicked on//