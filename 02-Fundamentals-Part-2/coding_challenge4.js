const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(value){
  if (value>50 && value <300)
    return value*0.15
  else {
        return value*0.2
    }
}

for(i = 0; i < bills.length; i++){
  let tip = calcTip(bills[i]);
  let total = bills[i] + tip
  tips.push(tip);
  totals.push(total);
}

console.log(bills);
console.log(tips);
console.log(totals);

function calcAverage(arr){
  let sum = 0;
  for(i=0; i<arr.length; i++){
    sum += arr[i];
  }
  return sum/arr.length
}

console.log(calcAverage(totals));
