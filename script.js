let input = document.querySelector("textarea");

// updating the display after every keypress
input.addEventListener("keyup", function () {

    //get the value of the text using Regex to match valid words
    let words = input.value.match(/\b(\S+)\b/gi);
    // let wordCount = words.length;

    // update and display the total number of words
    if (words) {
        document.querySelector("#wordCountUp").innerHTML = words.length;
    } else {
        document.querySelector("#wordCountUp").innerHTML = 0;
    }

    // count down and display the words left out of 100
    if (words) {
        document.querySelector("#wordCountDown").innerHTML = 100 - words.length;
    } else {
        document.querySelector("#wordCountDown").innerHTML = 100;
    }

    // change color to red, if words are more than 100
    if (100 - words.length < 0) {
        document.querySelector("#wordCountDown").style.color = "#db0a0a";
    } else {
        document.querySelector("#wordCountDown").style.color = "#111111";
    }
});