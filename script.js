"use strict";

const name = "Deshawn Reid";
let age = 34;
const birthday = "June 23";
let pineapplePizza = true;

let lifeEvents = [
  "I was born in San Diego.",
  "I performed on TV a few times.",
  "I played football from 9 to 17.",
  "I worked at Chrysler.",
];

if (pineapplePizza) {
  console.log(
    `My name is ${name} and I like pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
} else {
  console.log(
    `My name is ${name} and I'm not into pineapples on pizza. I am currently ${age} years old and my birthday is on ${birthday}.`
  );
}

for (let i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  console.log(randomNumber);
  if (randomNumber !== 5) {
    counter++;
    console.log(`${randomNumber} !== 5`);
  } else  {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
  }

// extended challenge
let hours = 50;
let wage = 10;
let paycheck = 40 * wage;
if (hours > 40) {
  // let overtimeHours = hours - 40;
  // console.log(overtimeHours);
  // let overtimePay = overtimeHours * wage * 1.5;
  // console.log(overtimePay);
  // paycheck += overtimePay;
  //   shorter version:
    paycheck += (hours - 40) * (wage * 1.5);
}
console.log(paycheck);
let weeks = 0;
weeks = Math.ceil(1000000/paycheck);
console.log(`It would take ${weeks} weeks to earn one million bucks!`)

 
