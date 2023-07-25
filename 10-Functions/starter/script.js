'use strict';

// const flight = 'LH234';
// const jonas = {
//     name: 'Jonas Schmedtmann',
//     passport: 2373838184
// }

// const checkIn = function (flightNum, passenger) {
//     flightNum = 'LH999';
//     passenger.name = 'Mr. ' + passenger.name;

//     if (passenger.passport === 2373838184) {
//         alert('Check in');
//     } else {
//         alert('Wrong Passport');
//     }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);



// 2nd lesson
// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function (str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed by: ${fn(str)}`);

//     console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);


// // JS uses Callbacks all the times
// const wave = function() {
//     console.log('waving');
// }

// document.body.addEventListener('click', wave);
// ['Jonas', 'Martha', 'Adan'].forEach(wave);



// 3rd Function return Function
// const greet = greeting => name => console.log(`${greeting}, ${name}`);

// const greetingHello = greet('Hello');
// greetingHello('jonas');
// greetingHello('Jhon');

// greet('hello')('Jaja');



// 4th The "call" and "apply" Methods
// const lufthasa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     booking: [],
//     book: function(flightNum, name) {
//         console.log(
//             `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//         );
//         this.booking.push({flight: `${this.iataCode}${flightNum}`, name});
//     },
// };

// lufthasa.book(239, 'Jonas Schmedtmann');
// lufthasa.book(655, 'Jonas Smith');
// console.log(lufthasa);

// Apply Method




