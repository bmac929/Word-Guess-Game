

var places = [
    "fiji",
    "berlin",
    "dubai",
    "thailand",
    "korea"

];

var score = 0;
var guessLeft = 6;
var lettersGuessed;
var placeIndex = 0;
var placeDiv = document.getElementById("destination");
var place = Math.floor(Math.random() * places.length);
var answerArray = [];

placeDiv.textContent = "Where are you going?";

for (var i = 0; i < places.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = place.length;

document.onkeyup = function (event) {
    var guess = event.key;

    document.write(guess)
}


while (remainingLetters > 0) {
    for (var j = 0; j < answerArray.length; j++) {
        if (place[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }

        document.getElementById(remainingLetters).append(guess);
    }
}
document.write(answerArray.join(" "));
