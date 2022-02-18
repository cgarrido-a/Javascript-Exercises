console.log("**********ASSIGNMENTS************")
// JAVASCRIPT FUNDAMENTALS PART 1

//LECTURE Values and Variables

// let country = "Chile";
// let continent = "Sudamérica";
let population = 19000000;

// console.log (country, continent, population);

//LECTURE Data Types

// let isIsland = false;
let language;

// console.log(isIsland, population, country, language);

//LECTURE let, const, var

language = "spanish";
const isIsland = false;
const country = "Chile";
const continent = "Sudamérica";

// console.log (language, country);

//LECTURE Basic Operators

// console.log (population / 2);
// console.log (population + 1);

let population_finland = 6000000;

// console.log (population > population_finland);

let average_population = 33000000;

// console.log (population > average_population);

let description = country + " is in " + continent + " and its " + population + " people speak " + language;
// console.log (description);

//LECTURE Strings and Template Literals

description = `${country} is in ${continent} and its ${population} people speak ${language}`

// console.log(description);

//LECTURE Taking Decisions: if/else Statements

/*
if (population > 33000000){
    console.log("Chile population is above average")
}else{
    console.log(`Chile population is ${average_population - population} below average`)
}
*/

// LECTURE Type Conversion and Coercion

// console.log("9" - "5"); //4
// console.log("19" - "13" + "17"); //"617"
// console.log("19" - "13" + 17); //23
// console.log("123" < 57); // false
// console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

//LECTURE Equality Operators: == vs ===

// let numNeighbours = prompt('How many neighbour countries does your country have?');

// if(Number(numNeighbours) === 1){
//     console.log('Only 1 border!');
// }else if(numNeighbours > 1){
//     console.log('More than 1 border')
// }else{
//     console.log('No borders')
// }

// LECTURE Logical Operators

const languageSarah = "english";
const populationSarah = 50000000;
const islandSarah = false;

if((language === languageSarah) && (population === populationSarah) && (isIsland === islandSarah)){
    console.log("You should live in Chile")
}else{
    console.log("Chile does not meet your criteria")
}
