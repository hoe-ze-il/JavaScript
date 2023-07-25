// // // // VALUE AND DATATYPE
// let js = 'amazing';
// console.log(40 + 8 + 23 - 10);
// console.log('Jonas');
// console.log(23);

// let firstName = "Matild";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let jonas_matilda = "JM";
// let $function = 27

// let person = "jonas";
// let PI = 3.1415;

// let myFirstJob = "Coder";
// let myCurrentJob = "Teacher";

// let job1 = 'programmer';
// let job2 = 'teacher';

// console.log(myFirstJob)


// // // // DATA TYPE
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

// javaScriptIsFun = "Yes!"
// console.log(typeof javaScriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null); 

// // // // VAR VS LET VS CONST
// let age = 30;
// age = 31;

// const birthYear = 1991;
// // birthYear = 1990

// // const job;
// var job = 'programmer';
// job = 'teacher';

// // lastName = 'Schmedtmann'
// // console.log(lastName); // don't declare variable without key words (let, var or const) even it works, this is terrible.


// // // // BASIC OPERATOR
// MATH OPERATOR
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 *2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);
// ASSIGNMENT OPERATOR
let x = 10 + 5; // x = 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// COMPARISON OPERATOR
console.log(ageJonas > ageSarah); // >, <. >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);