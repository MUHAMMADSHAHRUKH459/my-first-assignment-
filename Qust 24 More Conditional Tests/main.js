"use strict";
// Question Number 24
let var1 = "shahrukh";
let var2 = "SHAHRUKH";
let Number1 = 10;
let Number2 = 20;
let array = [1.2, 3, 4, 5];
console.log("Equality test for string: shahrukh == 'shahrukh' ");
console.log(var1 == "shahrukh"); //1
console.log("String inequality test: shahrukh == 'SHAHRUKH' ");
console.log(var1 == "SHAHRUKH"); //2
console.log("lowercase test: SHAHRUKH == var1 ");
console.log(var2.toLowerCase() == var1); //3
console.log("Numerical test : 10 > 20");
console.log(Number1 > Number2); //4
console.log("Numerical test : 10 < 20");
console.log(Number1 < Number2); //5
console.log("Numerical test : 20 <= 10");
console.log(Number2 <= Number1); //6
console.log("Numerical test : 10 <= 20");
console.log(Number1 <= Number2); //7
console.log("Both test and logical : 10 > 20 AND var1 == 'shahrukh' ");
console.log(Number1 < Number2 && var1 == "shahrukh"); //8
console.log("Both test and logical : 10 > 20 AND var1 == 'shahrukh' ");
console.log(Number1 > Number2 && var1 == var2); //9
console.log("Verify if '6' is absent from the array [1,2,3,4,5] ");
console.log(array.includes(3)); //10
console.log("Verify if '6' is not absent from the array [1,2,3,4,5] ");
console.log(!array.includes(3)); //11
