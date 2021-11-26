function my_Dictionary() {
    var Animal = { //creating KVP//
        Species:"Dog",
        Color:"Brown",
        Breed:"Labrador",
        Age:"2",
        Sound:"Woof!"
    };
    delete Animal.Sound; //deleting key sound//
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //outputs "undefined"//
}