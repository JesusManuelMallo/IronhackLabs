// Primer LAB

//Iteration 1: Names and Input
let driver = "Jesús";

console.log("the driver´s name is " + driver);

let navigator = "Vladislav";

console.log(`the navigators name is  ${navigator}`);

//Iteration 2: Conditionals

if (driver.length > navigator.length) {
  console.log(
    `The driver has the longest name, it has " + ${driver.length} + characters`
  );
} else if (driver.length < navigator.length) {
  console.log(
    "It seems that the navigator has the longest name, it has " +
      navigator.length +
      " characters."
  );
} else if (driver.length === navigator.length) {
  console.log("drive safe");
}

//ITERATION 3 Loops
/*3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/
let varVacio = "";

for (let i = 0; i < driver.length; i++) {
  varVacio += driver.charAt(i) + " ";
  //varVacio = varVacio + driver.chartAt(i) + " ";
  //varVacio = varVacio.toUpperCase()
}
varVacio = varVacio.toUpperCase();
console.log(varVacio);

/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"*/

let varNavigatorReves = "";
for (let i = navigator.length; i >= 0; i--) {
  varNavigatorReves += navigator.charAt(i);
}
console.log(varNavigatorReves);

/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

if (driver.length > navigator.length) {
  console.log("The driver's name goes first.");
} else if (driver.length < navigator.length) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log(" What?! You both have the same name?");
}

//BONUS 1

let Lore =
  "Ut aliqua adipisicing adipisicing exercitation proident exercitation quis. Ex ea dolor reprehenderit ullamco. Ullamco anim velit ipsum proident laboris esse aliquip consectetur adipisicing laboris consequat mollit est consequat. Officia adipisicing consectetur est voluptate aute. Enim officia qui nisi cillum. Laboris cillum consectetur incididunt enim amet dolore cillum commodo velit. Minim sint veniam minim minim in enim quis eu.";
let contarLore = Lore.length;

console.log(contarLore);
