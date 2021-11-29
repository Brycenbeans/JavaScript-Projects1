function full_Sentence () { //concatenate function//
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete";
    var part_4 = " sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() { //slice method, grabs chunk of string//
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function Upper_Func() { //uppercase function//
    var str = "thIs wIlL bE aLl uPPercase"
    var string = str.toUpperCase();
    document.write(string);
}



function Search() { //search function//
    var re = /apples/gi;
    var str = "Apples are round and red";
    if ( str.search(re) == -1) {
        document.write("Does not contain apples");
    } else {
        document.write(" Contains Apples");
    }

}



function string_Method() { //number to string method//
    var X =  182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method () { //precision method//
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}



function fixedfunc() {
    var fixed = 213.73145; //fixed method//
    document.write(fixed.toFixed(1));
}


function primitivenumb() {
    var numbval = 0/0 //returning to primitave NaN//
    document.write("Output : " + numbval.valueOf());
}