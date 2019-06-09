var places = [
    "fiji",
    "berlin",
    "dubai",
    "thailand",
    "korea"

];

var place = places[Math.floor(Math.random() * words.length)];

var placeAnswer = [];
for (var i = 0; i < place.length; i++) {
    placeAnswer[i] = "_";
}
var remainingLetters = place.length;

while (remainingLetters > 0) {
}