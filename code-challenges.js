// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
const all = (padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))

console.log(all.length)

// Expected output: 9

// Pseudo code:
// Adding the length of my first and second arrays to get my result.

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "Hotel NOT Golf 2023"
console.log(currentCohort.split('').reverse().join(''))

// Expected output: "3202 floG TON letoH"

// Pseudo code:
// Since you can't reverse a string I first converted currentCohort to an array via .split then reversed the array with the .reverse method before finally turning it back into a string for my result using the .join method.

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]

for (let i = 0; i < stockExchange.length; i++){
    if (stockExchange[i] % 2 !== 0){
        console.log(stockExchange[i])
    }      
}

// Expected output: 13 5 -5 27

// Pseudo code:
// Honestly I don't really know how to explain it. The for loop tells the computer to perform a cycle at index 0 of the array, that index 0 is less than the length of the array and to go the length of the array in increments of 1. If the variable index divided by two does not equal 0 then print out that number.  