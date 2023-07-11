//Assignment 1
let personName;
personName = "falak";
let personName2;
personName2 = "WARISHA";

//Assignment 2
console.log(
  "this is testing message and this code is correct ." +
    personName.toUpperCase()
);

console.log(
  "this is testing message and this code is correct ." +
    personName2.toLowerCase()
);

let caseLetters = "falak naz bhatti";
let newStr = caseLetters
  .split(" ")
  .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
  .join(" ");
console.log(newStr);

//Assignment 3

console.log(
  'John Steinbeck once said, "Ideas are like rabbits. You get a couple and learn how to handle them, and pretty soon you have a dozen."'
);

//Assignment 4

let poetName = "Eugene Ionesco";
console.log(
  poetName +
    ' once said, "A writer never has a vacation. For a writer life consists of either writing or thinking about writing."'
);

//Assignment 5
let fullName = "\tfalak\tnaz\t";
console.log(fullName);

//Assignment 6,7

console.log(10 - 2);
console.log(4 + 4);
console.log(4 * 2);
console.log(16 / 2);

//assignment 8
let number = 4;
console.log("I write my name " + number + " times");

// assignment 9 . (i am adding in this program)
console.log("FALAK NAZ\n " + Date());

//10
let names = ["falak", "warisha", "aqsa"];
console.log(names);

//11
let messages = [
  "hi its nic to see you falak",
  "how are you warisha",
  "where is my friends aqsa?",
];
console.log(messages[0]);
console.log(messages[1]);
console.log(messages[2]);

//12

let exampleTransportaions = [
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

let guestList = ["Ali", "Haris", "Fahad"];
let message =
  "You are invited to a dinner party that promises to be an evening of delicious food, lively conversation, and wonderful company";

console.log(guestList + " " + message);

//14

let guestList2 = ["Ali", "Haris", "Hadi"];
let invitationMessage =
  "Come join us for a night of laughter, great conversations, and mouth-watering dishes. We are hosting a dinner party and you are invited. ";
console.log(guestList + " " + invitationMessage);
//15

console.log(invitationMessage + " " + guestList[2]);
//16

let guestList3 = ["Ali", "Haris", "Hadi", guestList[2]];
console.log(guestList3 + " " + invitationMessage);
