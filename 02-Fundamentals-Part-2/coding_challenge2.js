function calcTip(value){
  if (value>50 && value <300)
    return value*0.15
  else {
        return value*0.2
    }
}

console.log(calcTip(100))

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);
