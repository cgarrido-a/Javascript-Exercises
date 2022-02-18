console.log("**********CODING CHALLENGE 2************")

let markWeight2 = 78;
let markHeight2 = 1.69;

let johnWeight2 = 92;
let johnHeight2 = 1.95;

let bmi_mark2 = markWeight2/(markHeight2**2);
let bmi_john2 = johnWeight2/ (johnHeight2**2);

markWeight2 = 95;
markHeight2 = 1.88;

johnWeight2 = 85;
johnHeight2 = 1.76;
bmi_mark2 = markWeight2/(markHeight2**2);
bmi_john2 = johnWeight2/ (johnHeight2**2);

if (bmi_mark2 > bmi_john2){
   console.log(`Marks BMI ${bmi_mark2} is higher than Johns ${bmi_john2}`);
} else {
    console.log(`Johns BMI ${bmi_john2} is higher than Marks ${bmi_mark2}`);
}
