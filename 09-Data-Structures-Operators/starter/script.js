'use strict';

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
/// 1. Detructuring Array & Object
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hourse
//       close: 24,
//     },
//   },

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
//     console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
//   },

//   orderPaster: function(ing1, ing2, ing3) {
//     console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
//   },

//   orderPizza: function(mainIngridient, ...otherIngridients) {
//     console.log(mainIngridient, otherIngridients);
//   },
// };



// 1.1 Destructuring Array
// const arr = [1, 2, 3];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // Receive 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// // Destruturing nested Array
// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [2, 4];
// console.log(p, q, r);



// 1.2 Destruturing Object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// // Set variable to it
// const {
//   name: Hoe Ze il

//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// // Defualt value
// const { menu = [], starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// // Mutating Variables
// let a = 121;
// let b = 222;
// const obj = { a: 21, b: 22 , c: 0};
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Object
// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: 'Phnom Penh',
// });


// 2. The Spread Operator(...) (This allow us to take all element out of arry and also can create a new variable )
// const arr = [1, 2, 3];
// const badNewArr = [5 , 3, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// // The same as 
// const goodNewArr = [5, 3, ...arr];
// console.log(goodNewArr);

// console.log(...goodNewArr);
// // The same as
// console.log(5, 3, 1, 2, 3);

// // adding new menu to mainMenu
// const newMenu = [...restaurant.mainMenu, "Gnocci"]; //Remember this is creating new Array not change the default array from  restaurant.mainMenu
// console.log(newMenu);

// // Copy Array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu)

// // remember that we can use spread operator when we are using an array or when we are pass value in to a function
// // Iterables: arrays, strings, maps, sets. Not objects
// const str = "Jonas";
// const letters = [...str, '', 'S.'];
// console.log(letters);
// console.log(...str);
// // the same as
// console.log("J", "o")
// // NOTE: multiple value separated by a comma are only expected when we pass value into a function and when we build a new array
// // console.log(`${...str} Hama`); //unexspected result

// //Real world example
// // const ingredients = [prompt('Let\'s make pasta! Ingredient 1?'), prompt('Let\'s make pasta! Ingredient 2?'), prompt('Let\'s make pasta! Ingredient 3?')];
// // console.log(ingredients);

// // restaurant.orderPaster(...ingredients);

// // Onjects
// const newRestaurant = { foundedIn: 1998, ...restaurant, fouder: 'Guiseppe'}
// console.log(newRestaurant);

// const restaurantCopy = {...restaurant};
// restaurantCopy.name =  'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// 3. Rest Pattern and paramenters
// Spread, Because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// //Spread, Because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //Spread, Because on LEFT and RIGHT side of =
// const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
// console.log(pizza, risotto, otherFood);

// // Objects
// const { thu, ...weekdays } = restaurant.openingHours;
// console.log(thu, weekdays);

// // Function
// const add = function(...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   };
//   console.log(sum);
// };

// add(3, 3, 3, 3);

// // orderPizza
// restaurant.orderPizza('mushroom', 'olives', 'meat', 'pineapple');
// restaurant.orderPizza('mushroom');

//spread operator used whenever value sperated by comma and rest pattern operator used whenever variables seprated by comma.


// 4. Short Circuiting (&& and ||)
// Use ANY data type, return ANY data type, short-circuiting

// console.log('----OR----')
// console.log(3 || 'jonas');
// console.log("" || "Jonas");
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 );

// restaurant.numGuests = 0;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);

// const guest2 = restaurant.numGuests || 10;
// console.log(guest2);

// console.log('----AND----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null & "Jonas");

// // Practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// 5. The nullish coaslescing operator (??)
// restaurant.numGuest = 0;
// const guest1 = restaurant.numGuest || 10;
// console.log(guest1);

// //Nullish: null and undefined (NOT 0 or '')
// const guest2 = restaurant.numGuest ?? 10;
// console.log(guest2);




// // 6. Logical Assignment Operators
// const rest1 = {
//   name: 'Capri',
//   // numGuest: 20,
//   numGuest: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Ginovanni Rossi',
// };

// // rest1.numGuest = rest1.numGuest || 10;
// // rest2.numGuest = rest2.numGuest || 10;
// // The same as:
// // rest1.numGuest ||= 10;
// // rest2.numGuest ||= 10;
// // nullish assignment operator (null or undefined)
// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;

// rest1.owner = rest1.owner ?? '<ANONYMOUS>';
// rest2.owner = rest2.owner ?? '<ANONYMOUS>';
// rest1.owner ??= '<ANONYMOUS>';
// rest2.owner ??= '<ANONYMOUS>';
// console.log(rest1);
// console.log(rest2);

// ///////////
// Challenge #1
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1.
// const [players1, players2] = game.players;
// console.log(players1, players2);

// //2.
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// //3
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// //4
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// //5
// const{
//   odds: {team1, x: draw, team2}
// } = game;
// console.log(team1, draw, team2);

// //6
// const printGoals = function(...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// //7
// team1 < team2 && console.log('Team1 is more likely to win');
// team1 > team2 && console.log('Team2 is more likely to win');



// ////////////////////////////////////////////

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hourse
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  },

  orderPaster: function(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function(mainIngridient, ...otherIngridients) {
    console.log(mainIngridient, otherIngridients);
  },
};

// 9. Looping Objects: Object Keys, values, and Entires
// Properties NAMES
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }




//// 7. Looping Arrays: The for-of Loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`)
// }

//8. Optional Changing

// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.open.openingHours.mon.open)

// // The same as
// console.log(restaurant.openingHours.mon?.open)

// // Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const user = [{ name: 'Jonas', email: 'Jonas22@jonas.com'}];
// console.log(user[0]?.name ?? 'User array empty');

// // The same as
// if (user.length > 0) console.log(user[0].name);
// else console.log("User array emty")