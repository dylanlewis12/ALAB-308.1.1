const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;
//Part1: Arithmetic

//Check if all numbers are divisible by 5
const isDivisible5 =
  (n1 % 5 === 0) &&
  (n2 % 5 === 0) &&
  (n3 % 5 === 0) &&
  (n4 % 5 === 0);

console.log(isDivisible5);

//Check if first number is greater than last number
const isGreater = n1 > n4;

console.log(isGreater);

//Arithmetic result
const result = (((n1 - n2) * n3)) % n4;

console.log(result)

//Change isUnder25 using !
const isOver25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;

//Part 2: Practical Math
const totalMiles = 1500;
const fuelBudget = 175;
const fuelCost = 3;

//Each speed
const speed1 = 55;
const speed2 = 60;
const speed3 = 75;

//MPG for each speed
const mpg1 = 30;
const mpg2 = 28;
const mpg3 = 23;

//Total gallons for the trip based on speed
totalGallons1 = totalMiles / mpg1;
totalGallons2 = totalMiles / mpg2;
totalGallons3 = totalMiles / mpg3;

//Total fuel cost gallons used * cost per gallon
const totalCost1 = parseFloat((totalGallons1) * fuelCost).toFixed(2);
const totalCost2 = parseFloat((totalGallons2) * fuelCost).toFixed(2);
const totalCost3 = parseFloat((totalGallons3) * fuelCost).toFixed(2);

//Total time for each speed
const time1 = parseFloat(fuelBudget / speed1).toFixed(2);
const time2 = parseFloat(fuelBudget / speed2).toFixed(2);
const time3 = parseFloat(fuelBudget / speed3).toFixed(2);

const travelSpeeds = [speed1,speed2,speed3];
const totalGallons = [totalCost1,totalCost2,totalCost3];
const totalCosts = [totalCost1,totalCost2,totalCost3];
const tripTime = [time1,time2,time3];

let costCovered = "";
for (let i = 0; i < 3; i++) {
  let fuelExpense = fuelBudget - totalCosts[i];
  if (fuelExpense >= 0) {
    costCovered = "The trip will be covered.";
  } else {
    costCovered = "The trip will not be covered.";
  }
  console.log("For " + travelSpeeds[i] + " mph the total amount of gas in gallons needed for the trip is " + totalGallons[i] + ". " + costCovered + " It will take " + tripTime[i] + " to complete the trip." );
}



