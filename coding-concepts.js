// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: 9
// b) Verify and explain: the answer was 10, which actually confuses me. I thought the computer would start counting at 0, rather than one. Because if that's the case then the resulting number would be 9. edit: it only counts from zero when looking at the index. I got confused.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: The correct answer is indeed o. [] refers to index position and the 4 means the index position of the words "Hello World!". Starting from 0(H), [4] will result in o.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: The answer is Ruby. the code is telling the computer to print const index (which is 1) of const languages. The index position of 1 will be the second item on the list because the computer starts counting at 0. 

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// const weekendDays = ["saturday", "sunday"]
// const aaa = weekendDays.join()
// console.log(aaa.toUpperCase())

// a) Your answer: [SATURDAY, SUNDAY]
// b) Verify and explain: It gives a syntax error. After having thought about it I remembered you can't run .toUpperCase on an array. You need to convert it to a string via .join and then run it.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: typeof tells you what something is and so it seems datatypes.length as a number rather than "array" and "4"
