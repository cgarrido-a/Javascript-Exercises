const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function(avgDolphins, avgKoalas){
if (avgDolphins >= 2*avgKoalas){
    return `Dolphins win`;
}else if(avgKoalas >= 2* avgDolphins){
    return `Koalas win`;
} else{
    return `nobody win`;
}
}

let resultado = checkWinner(scoreDolphins, scoreKoalas);
console.log(resultado);

// test 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);

console.log (scoreDolphins, scoreKoalas);

resultado = checkWinner(scoreDolphins, scoreKoalas);
console.log(resultado);



