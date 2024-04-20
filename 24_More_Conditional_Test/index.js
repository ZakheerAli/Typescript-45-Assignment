"use strict";
// Question no 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality with strings
console.log("Equality test with string: ", "apple" === "apple");
// • Tests for inequality with strings
console.log("Inequality test with string: ", "apple" != "orange");
// • Tests using the lower case function
console.log("Test with lower case function: ", 'ALI'.toLowerCase() === "ali");
// • Numerical tests involving equality ,
console.log("Equality test with number: ", 15 === 15);
// Numerical tests involving inequality,
console.log("Inequality test with number: ", 15 != 10);
//greater than test,
console.log("Greater than test: ", 10 > 5);
// less than test,
console.log("Less than test: ", 5 < 10);
// greater than or equal to test,
console.log("Greater than and equal to test: ", 20 >= 10);
// less than or equal to test,
console.log("Less than and equal to test: ", 10 <= 20);
//  Tests using "and"  operators,
console.log("Test using 'and' operator: ", 20 === 20 && 20 > 10);
//  Tests using ""or" operators,
console.log("Test using 'or' operator: ", 20 < 40 || 10 > 15);
//  Test whether an item is in a array,
let items = ["orange", "pineapple", "banana"];
console.log("Testing 'orange' is in array: ", items.includes("orange"));
// • Test whether an item is not in a array
console.log("Testing 'mango' is not in a array: ", !items.includes("mango"));
