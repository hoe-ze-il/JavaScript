const country = "Cambodia";
const continent = "Asia";
let myPopulation = 16000000;
let description = "Portugal is in Europe , and its 11 million people speak portuguese";
console.log(country);
console.log(continent);
console.log(myPopulation);

const isIsland = false;
const language = "Cambodian";
console.log(typeof isIsland);
console.log(typeof myPopulation);
console.log(typeof country);
console.log(typeof language);

myPopulation /= 2;
myPopulation++;
console.log(myPopulation);
let finlandPopulation = 6000000;
console.log('Does your country have more people than Finland?', myPopulation > finlandPopulation);
let avgPeople = 33000000;
console.log('Does your country have less people than the average country?', avgPeople > myPopulation);