// JAVASCRIPT FUNDAMENTALS PART 2

// LECTURE: Functions

// function describeCountry(country, population, capitalCity){
//   return `${country} has ${population} people and its capital city is ${capitalCity}`
// }
//
// const pais1 = describeCountry("Chile", "17 millones", "Santiago");
// const pais2 = describeCountry("Argentina", "40 millones", "Buenos Aires");
// const pais3 = describeCountry("Islandia", "200 mil", 'Reikiavik')
//
// console.log(pais1, pais2, pais3)

// LECTURE: Function Declarations vs. Expressions

        // function declaration
function percentageOfWorld1(population){
  const percentage = (population/7900)*100;
  return percentage
}

const chile = percentageOfWorld1(17);
const argentina = percentageOfWorld1(40);
const islandia = percentageOfWorld1(0.2);

console.log(chile, argentina, islandia)

      // function expression
const percentageOfWorld2 = function(population){
  const percentage = (population/7900)*100;
  return percentage
}

const pais1 = percentageOfWorld2(20);
const pais2 = percentageOfWorld2(7900);
const pais3 = percentageOfWorld2(50);

console.log(pais1, pais2, pais3);

// LECTURE: Arrow Functions

const percentageOfWorld3 = (population)=>{
  const percentage = (population/7900)*100;
  return percentage
}

const pais4 = percentageOfWorld3(79)
console.log(pais4)

// LECTURE: Functions Calling Other Functions

function describePopulation(country, population){
  const percentage = percentageOfWorld3(population)
  return `${country} has ${population} million people, which is about ${percentage} of the world.`
}

const pais5 = describePopulation('xxx',79)
console.log(pais5);

// LECTURE: Introduction to Arrays

const populations = [5, 8, 3, 9];

if (populations.length === 4){
  console.log('This array has 4 elements')
}

const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];

console.log(percentages);

// LECTURE: Basic Array Operations (Methods)

const neighbours = ['argentina', 'peru', 'bolivia'];

neighbours.push('utopia');
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if(!neighbours.includes('germany')){
  console.log('Probably not a central European country :D')
}

neighbours[0] = 'Argentina';

console.log(neighbours)

// LECTURE: Introduction to Objects

const myCountry = {
  country: 'Chile',
  capital: 'Santiago',
  language: 'espanol',
  population: 17000000,
  neighbours: ['Argentina', 'Peru', 'Bolivia']
};

console.log(myCountry);

// LECTURE: Dot vs. Bracket Notation

console.log(`${myCountry.country} has ${myCountry.population} spanish-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2000000;
console.log(myCountry.population)
myCountry['population'] -= 2000000;
console.log(myCountry['population'])

// LECTURE: Object Methods

myCountry.describe = function(){
  return `${this.country} has ${this.population} spanish-speaking people, ${this.neighbours.length } neighbouring countries and a capital called ${this.capital}.`
}

console.log(myCountry.describe());

myCountry.checkIsland = function(){
  myCountry.isIsland = this.neighbours.length === 0 ? true : false;
  return myCountry.isIsland
}

console.log(myCountry.checkIsland());
console.log(myCountry);
