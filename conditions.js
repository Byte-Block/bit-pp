//Task 1.
// var x = 3;
// var y = -7;
// var z = 2;
// var product = x * y * z;
// var result = "";

// // if (x * y * z < 0) {
// //     console.log("The output sign is -");
// // } else {
// //     console.log("The output sign is +");
// // }

// if (product < 0) {
//     result += "The output is -";
// } else {
//     result += "The output is +";
// }

// console.log(result);
//--------------------------------------------------------------------------------
//Task 1.
// var q = -5;
// var w = -2;
// var x = -6;  
// var y = 0;
// var z = -1;
// var max;

// if (q >= w && q >= x && q >= y && q >= z) {
//     max = q;
// } else if (w >= x && w >= y && w >= z) {
//     max = w;
// } else if (x >= y && x >= z) {
//     max = x;
// } else if (y >= z) {
//     max = y;
// } else {
//     max = z;
// }

// console.log(max);
//-----------------------------------------------------------------------------------
//Task 2.
// var res = "";
// var balance = 100;
// var notebook = 60;

// var isNumeric = typeof balance === "number" && typeof notebook === "number";

// if (isNumeric) {
//     var hasEnoughMoney = balance >= notebook;
//     if (hasEnoughMoney) {
//         var newBalance = balance - notebook;
//         res = "Starting Transaction!";
//         res += "\nNew balance: " + newBalance;
//     } else {
//         res = "There is not enough money in the bank account";
//     }
//     //----something, something in the month o may.
// } else {
//     res = "Invalid input data!";
// }

// console.log(res);
//-----------------------------------------------------------------------------------
//Task 3.
// var a = 0;
// var b = -1;
// var c = 4;
// var res = "";
// if (a > b && a > c) {
//     if (b > c) {
//         res = a + ", " + b + ", " + c;
//     } else {
//         res = a + ", " + c + ", " + b;
//     }
// }
// else if (b > a && b > c) {
//     if (a > c) {
//         res += b + ", " + a + ", " + c;
//     } else {
//         res += b + ", " + c + ", " + a;
//     }

// } else if (a > b) {
//     res += c + ", " + a + ", " + b;
// } else {
//     res += c + ", " + b + ", " + a;
// }
// console.log(res);
//--------------------------------------------------------------------------------------
//Task 4.
// var isANumber;
// var number = 10;
// var res = "";

// if (typeof number === "number") {
//     if (number % 2 === 0) {
//         res += number;
//     } else {
//         res += "X";
//     }
// }

// console.log(res);
//---------------------------------------------------------------------------------------
//Task 5.
// var oneNumber = 200;
// var twoNumber = 150;
// var res = "";
// if (oneNumber > twoNumber) {
//     res += oneNumber;
// } else {
//     res += twoNumber;
// }

// console.log(res);
//------------------------------------------------------------------------------------------
//Task 6.
// var sampleInputInCelsius = 60;

// var fahrenheit = (9 * sampleInputInCelsius / 5) + 32;
// var celsius = ((fahrenheit - 32) / 9) * 5;

// console.log(celsius + "C is " + fahrenheit + "F");
//------------------------------------------------------------------------------------------
//Task 7.
// var number = 11;
// var data = 13;
// var res;

// if (number > data) {
//     res = (number - data) * 2;
// } else {
//     res = data - number;
// }
// console.log(res);
//Task 7. Variation 2.
// var number = 32;
// var data = 13;
// var res;
// var difference = number - data;
// if (difference>13) {
//     res = (difference - 13)*2;
// } else{
//     res = difference;
// }

// console.log(res);
//--------------------------------------------------------------------------------------------
//Task 8.
// var numberOne = 8;
// var numberTwo = 8;
// var res;

// if (numberOne === numberTwo) {
//     res = (numberOne + numberTwo) * 3;
// } else {
//     res = numberTwo + numberOne;
// }
// console.log(res);
//-----------------------------------------------------------------------------------------------
//Task 9.
// var numberOne = 6;
// var numberTwo = 50;
// var res;
// if (numberOne === 50 || numberTwo === 50 || numberOne + numberTwo === 50) {
//     res = true;
// } else {
//     res = "-";
// } console.log(res);
//---------------------------------------------------------------------------------------------------
//Task 10.
// var anyGivenInteger = 256;
// var res = "";
// if (20 < anyGivenInteger && anyGivenInteger < 100) {
//     res += "20 <==> 100";
// } else if (100 < anyGivenInteger && anyGivenInteger < 400) {
//     res += "100 <==> 400";
// } else {
//     res += "-";
// }
// console.log(res);

