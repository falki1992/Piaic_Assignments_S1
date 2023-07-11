//Assignment 1
var personName;
personName = "falak";
var personName2;
personName2 = "WARISHA";
//Assignment 2
console.log("this is testing message and this code is correct ." +
    personName.toUpperCase());
console.log("this is testing message and this code is correct ." +
    personName2.toLowerCase());
var caseLetters = "falak naz bhatti";
var newStr = caseLetters
    .split(" ")
    .map(function (w) { return w[0].toUpperCase() + w.substring(1).toLowerCase(); })
    .join(" ");
console.log(newStr);
//Assignment 3
console.log('John Steinbeck once said, "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."');
//Assignment 4
var poetName = "Eugene Ionesco";
console.log(poetName +
    ' once said, "A writer never has a vacation. For a writer life consists of either writing or thinking about writing."');
//Assignment 5
var fullName = "\tfalak\tnaz\t";
console.log(fullName);
//Assignment 6,7
console.log(10 - 2);
console.log(4 + 4);
console.log(4 * 2);
console.log(16 / 2);
//assignment 8
var number = 4;
console.log("I write my name " + number + " times");
// assignment 9 . (i am adding in this program)
console.log("FALAK NAZ\n " + Date());
//10
var names = ["falak", "warisha", "aqsa"];
console.log(names);
//11
var messages = [
    "hi its nic to see you falak",
    "how are you warisha",
    "where is my friends aqsa?",
];
console.log(messages[0]);
console.log(messages[1]);
console.log(messages[2]);
//12
var exampleTransportaions = [
    "Hi my favourite car is suzuki alto",
    " honda city car mirrors style is very unique and elegant",
    "gun metalic color of swift car is very much attractive",
    "i like my own car suzuki corolla",
    "khyber  is very old model of suzuki company",
];
console.log(exampleTransportaions[0]);
console.log(exampleTransportaions[1]);
console.log(exampleTransportaions[2]);
console.log(exampleTransportaions[3]);
console.log(exampleTransportaions[4]);
//13
var guestList = ["Ali", "Haris", "Fahad"];
var message = "You are invited to a dinner party that promises to be an evening of delicious food, lively conversation, and wonderful company";
console.log(guestList[0] + " " + message);
console.log(guestList[1] + " " + message);
console.log(guestList[2] + " " + message);
//14
var guestList2 = ["Ali", "Haris", "Hadi"];
var invitationMessage = "Come join us for a night of laughter, great conversations, and mouth-watering dishes. We are hosting a dinner party and you are invited. ";
console.log(guestList[0] + " " + invitationMessage);
console.log(guestList[1] + " " + invitationMessage);
console.log(guestList[2] + " " + invitationMessage);
//15
console.log(invitationMessage + " " + guestList[2]);
//16
var guestList3 = ["Ali", "Haris", "Hadi", guestList[2]];
console.log(guestList3 + " " + invitationMessage);
