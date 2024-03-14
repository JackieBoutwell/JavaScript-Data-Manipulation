// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;
console.log(issum50)

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.

const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 0;
console.log(isTwoOdd)

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// 

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
    (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);
  

//Part 1: Math Problems
// First bullet point- Check if all numbers are divisible by 5. Cache the result in a variable.
const isTwoOdd = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) >= 0;
console.log(isFiveDivis) 

// Second Bullet point - Check if the first number is larger than the last. Cache the result in a variable.
let isLrg = (n1 > n4);
console.log(isLrg)

// Third Bullet point -Accomplish the following arithmetic chain: Subtract the first number from the second number.Multiply the result by the third number.Find the remainder of dividing the result by the fourth number. 
let check = (((n2 - n1) * n3) % n4);
console.log(check)

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.
let 


// Part 2: Practical Math
// How many gallons of fuel will you need for the entire trip?

// Distance Traveled for for whole trip
const totalDistanceTravel = 1500;

// 55 miles per hour you get 30 miles per gallon.
const mpg55 = 30; 
// 55 miles per hour you get 30 miles per gallon.
const mpg60 = 28;
// 55 miles per hour you get 30 miles per gallon.
const mpg75 = 23;

const totalDistanceTravel = 1500;
const costPerGallon = 3;
const budget = 175;

const gallonsUsedAtMph55 = totalDistanceTravel / mpg55;
const gallonsUsedAtMph60 = totalDistanceTravel / mpg60;
const gallonsUsedAtMph75 = totalDistanceTravel / mpg75;

const fuelCostAtMph55mph = totalDistanceTravel / mpg55
const fuelCostAtMph60mph = totalDistanceTravel / mpg60
const fuelCostAtMph75mph = totalDistanceTravel / mpg75


const fuelCostAt55mph = gallonsUsedAt55mph * costPerGallon;
const fuelCostAt60mph = gallonsUsedAt60mph * costPerGallon;
const fuelCostAt75mph = gallonsUsedAt75mph * costPerGallon;