// const averageScoreDolphins = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;

// console.log(averageScoreDolphins);
// console.log(averageScoreKoalas);

// if(averageScoreDolphins === averageScoreKoalas){
//     console.log("empate")
// }else if(averageScoreDolphins > averageScoreKoalas){
//     console.log("Dolphins ganan")
// }else{
//     console.log("Koalas ganan")
// }

//Bonus 1 && 2
const averageScoreDolphins = (97 + 112 + 101) / 3;
const averageScoreKoalas = (109 + 95 + 123) / 3;

console.log(averageScoreDolphins);
console.log(averageScoreKoalas);
if((averageScoreDolphins > averageScoreKoalas) && (averageScoreDolphins >= 100)){
    console.log("Dolphins wins")
}else if ((averageScoreDolphins < averageScoreKoalas) && (averageScoreKoalas >= 100)){
    console.log("Koalas wins")

}else if((averageScoreKoalas === averageScoreDolphins) && (averageScoreDolphins>=100) && (averageScoreKoalas>= 100)){
    console.log("empate")
}else{
    console.log("ambos pierden")
}