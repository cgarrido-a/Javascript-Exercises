// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

ProblemBreakdown:
-string starts with 3 dots
-the add first value of the array
-then in X days, X being position of the value plus 1
-the 3 extra dots
-repeat with next value
 */

function printForecast(arr) {
  let sentence = "...";
  for (let i = 0; i < arr.length; i++) {
    const valueData = `${arr[i]}C in ${i + 1} days ...`;
    sentence += valueData;
  }
  console.log(sentence);
}

printForecast(data1);
printForecast(data2);
