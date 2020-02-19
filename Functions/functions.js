//1.Write a program that calculates the maximum of two given numbers. 
function max(number1, number2) {
    if (number1 > number2) {
        return number1;
    } else if (number2 > number1) {
        return number2;
    } else {
        return 'The numbers are equal';
    }
}
console.log(max(4, 5));
console.log(max(5, 4));
console.log(max(5, 5));
//2.Write a program that checks if a given number is odd.
function isOdd(number) {
    if (number % 3 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(isOdd(3));
console.log(isOdd(2));
//3.Write a program that checks if a given number is a three digit long number.
function isThreeDigit(number) {
    if (number > 000 && number < 1000) {
        return true;
    } else {
        return false;
    }
}
console.log(isThreeDigit(333));
console.log(isThreeDigit(4444));
//4.Write a program that calculates an arithmetic mean of four numbers.
function meanOfFourNumbers(number1, number2, number3, number4) {
    return ((number1 + number2 + number3 + number4) / 4);
}

console.log(meanOfFourNumbers(1, 2, 3, 4));
console.log(meanOfFourNumbers(1, 22, 333, 4444));
// //5.Write a program that draws a square of a given size. For example,  if the size of square is 5 the program should draw: 
// *****
// *   *
// *   *
// *   *
// *****
function drawSquare(number) {
    square = '';
    for (var i = 0; i < number; i++) {
        for (var j = 0; j < number; j++) {
            if (i === 0 || i === number - 1) {
                square += '*';
            } else {
                if (j === 0 || j === number - 1) {
                    square += '*';
                } else {
                    square += ' ';
                }
            }
        }
        square += '\n';
    }
    return square;
}
console.log(drawSquare(4));
console.log(drawSquare(5));
console.log(drawSquare(6));
// //6.Write a program that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the program should draw:
// * * * * *
// * * *
// * * * * * * *
function drawHorizontalChart(number1, number2, number3) {
    var starsNumber = [number1, number2, number3];

    var chart = '';
    for (var i = 0; i < starsNumber[0]; i++) {
        chart += '*';
    }
    chart += '\n';
    for (var i = 0; i < starsNumber[1]; i++) {
        chart += '*';
    }
    chart += '\n';
    for (var i = 0; i < starsNumber[2]; i++) {
        chart += '*';
    }
    return chart;
}
console.log(drawHorizontalChart(5, 3, 7));

function drawHorizontalChart2(number1, number2, number3) {
    var chart = '';
    var maxParameter;
    if (number1 > number2 && number1 > number3) {
        maxParameter = number1;
    } else if (number2 > number3) {
        maxParameter = number2;
    } else {
        maxParameter = number3;
    }
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < maxParameter; j++) {
            if (i === 0) {
                if (j < number1) {
                    chart += '*';
                }
            } else if (i === 1) {
                if (j < number2) {
                    chart += '*';
                }
            } else {
                chart += '*';
            }
        }
        chart += '\n';
    }
    return chart;
}
console.log(drawHorizontalChart2(5, 3, 7));
console.log('-------------------------');
console.log(drawHorizontalChart2(10, 5, 13));

function drawHorizontalChart3() {               //Most simple way.
    var chart = '';

    for (var j = 0; j < arguments.length; j++) {
        for (var i = 0; i < arguments[j]; i++) {
            chart += '*';
        }
        chart += '\n';
    }

    return chart;
}
console.log(drawHorizontalChart3(5, 3, 7));
//7. Write a program that calculates a number of digits of a given number. 
function numberOfDigits(number) {
    for (var i = 0; number !== 0; i++) {
        number = ((number - (number % 10)) / 10);
    }
    return i;
}
console.log(numberOfDigits(1234567890));
//8.Write a program that calculates a number of appearances of a given number in a given array.
// Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
// Result: 3
function numberOfAppearances(array, givenNumber) {
    var count = 0;
    for (var i = 0; i < array.length; i++)
        if (array[i] === givenNumber) {
            count++;
        }
    return count;
}
var a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;
console.log(numberOfAppearances(a, e));
//9.Write a program that calculates the sum of odd elements of a given array.
function sumOfOddInArray(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            sum += array[i];
        }
    }
    return sum;
}
var a = [2, 4, 7, 8, 7, 7, 1];
console.log(sumOfOddInArray(a));
//10.Write a program that calculates the number of appearances of a letter a in a given string.
// Modify the program so it calculates the number of both letters a and A.
function numberOfALetter(string) {
    var aCount = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            aCount++;
        }

    }
    return aCount;
}
var a = 'abcabcabcabc'

console.log(numberOfALetter(a));

function numberOfALetter(string) {
    var lowerA = 0;
    var upperA = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'a') {
            lowerA++;
        } else if (string[i] === 'A') {
            upperA++;
        }

    }
    return [lowerA, upperA];
}
var a = 'abcAbcabcAbc'

console.log(numberOfALetter(a));
//11.Write a program that concatenates a given string given number of times.
// For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
function multipleConcatenation(string, number) {
    var res = '';
    for (var i = 0; i < number; i++) {
        res += string;
    }
    return res;
}

var a = 'abc';
var e = 4;

console.log(multipleConcatenation(a, e));

