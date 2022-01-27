let markWeight = 78;
let markHeight = 1.69;

let johnWeight = 92;
let johnHeight = 1.95;

let bmi_mark = markWeight/(markHeight**2);
let bmi_john = johnWeight/ (johnHeight**2);

markWeight = 95;
markHeight = 1.88;

johnWeight = 85;
johnHeight = 1.76;
bmi_mark = markWeight/(markHeight**2);
bmi_john = johnWeight/ (johnHeight**2);

if (bmi_mark > bmi_john){
   console.log(`Marks BMI ${bmi_mark} is higher than Johns ${bmi_john}`); 
} else {
    console.log(`Johns BMI ${bmi_john} is higher than Marks ${bmi_mark}`);
}