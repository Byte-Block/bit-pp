var drinks = 1;
var maxDrinks = 4;

while (drinks <= maxDrinks) {
    console.log("-------------");
    console.log("Go to bar");
    console.log("Ask for drink");
    console.log("Pay for drink");
    console.log("Drink");
    console.log("-------------");
    drinks = drinks + 1;
}
//-------------------------------
var number = 1;

while (number <= 10) {
    console.log(number);
    number += 1;
}
//----------------------
var maxDrinks = 4;
for (var drinks = 0; drinks < maxDrinks; drinks++) {
    console.log("-------------");
    console.log("Go to bar");
    console.log("Ask for drink");
    console.log("Pay for drink");
    console.log("Drink");
    console.log("-------------");
}
//---------------------------------------------------
for (var number = 10; number >= 1; number--) {
    console.log(number);
}
//--------------------------------------------
for (var number = 10; number > 0; number--) {
    console.log("Number: ", number);

    for (var innerNumber = 0; innerNumber < 5; innerNumber++) {
        console.log("Inner number", innerNumber);
    }
}
//
for (var x = 0; x <= 10; x++) {
    console.log(x * x);
}
//1.
for (var i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
//2.
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        sum += i;
    }
}
console.log(sum);
//3.
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var sum = 0;
var product = 1;

for (var i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum);
for (var i = 1; i < a.length; i++) {
    product *= a[i];
}
console.log(product);
//4.
var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
var res = " ";

for (var i = 0; i < x.length - 2; i++) {
    res += x[i] + "";
}
console.log(res);
//5.
var a = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27]
];
console.log(a);
for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[0].length; j++) {
        console.log(a[i][j]);
    }
}
//6.
var sum = 0;

for (var i = 0; i <= 20; i++) {
    sum += i * i;
}
console.log(sum);
//7.
var a = [80, 77, 88, 95, 68];
var sum = 0;

for (var i = 0; i < a.length; i++) {
    if (a[i] >= 90 && a[i] <= 100) {
        console.log("A");
    }
    if (a[i] >= 80 && a[i] < 90) {
        console.log("B");
    }
    if (a[i] >= 70 && a[i] < 80) {
        console.log("C");
    }
    if (a[i] >= 60 && a[i] < 70) {
        console.log("D");
    }
    if (a[i] < 60) {
        console.log("F");
    }
}

for (var i = 0; i < a.length; i++) {
    sum += a[i];
}

var avg = sum / a.length;

if (avg >= 90 && avg <= 100) {
    console.log("A");
}
if (avg >= 80 && avg <= 89) {
    console.log("B");
}
if (avg >= 70 && avg <= 79) {
    console.log("C");
}
if (avg >= 60 && avg <= 69) {
    console.log("D");
}
if (avg <= 59) {
    console.log("F");
}
//8.
for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}