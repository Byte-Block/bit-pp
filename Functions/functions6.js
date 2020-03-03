"use strict";
//1. Write a function to count vowels in a provided string.
// Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
var result = (function (text) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];

    var count = 0;
    for (var i = 0; i < text.length; i++) {
        if (vowels.indexOf(text[i].toLocaleLowerCase()) === -1) {
            continue;
        }

        count++;
    }

    return count;
})("Lorem Ipsumiiiiiidgdtreterstsdgt")

console.log(result);

//2. Write a function that combines two arrays by alternatingly taking elements.
//[‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]

(function (array1, array2) {
    var res = [];
    for (var i = 0; i < array1.length; i++) {
        res.push(array1[i]);
        res.push(array2[i]);
    }
    console.log(res);
})(['a', 'b', 'c'], [1, 2, 3]);

//3. Write a function that rotates a list by k elements.
//For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]

(function (array, number) {
    for (var i = 0; i < number; i++) {
        array.push(array.shift());
    }
    console.log(array);
})([1, 2, 3, 4, 5, 6], 2);

//4. Write a function that takes a number and returns array of its digits.
(function (number) {
    var array = number + '';
    console.log(array.split(""));
})(2131651512);
(function (number) {
    number += '';
    var array = []
    for (var i = 0; i < number.length; i++) {
        array.push(parseInt(number[i]));
    }
    console.log(array);
    array.sort(function (a, b) { return a - b; });
    console.log(array);
    array.sort(function (a, b) { return b - a; });
    console.log(array);
})(2131651512);
//5. Write a program that prints a multiplication table for numbers up to 12.
(function () {
    var res = '';
    for (var i = 1; i <= 12; i++) {
        for (var j = 1; j <= 12; j++) {
            res += i + " * " + j + " = " + (i * j) + "\n";
        }
    }
    console.log(res);
})();
//6. Write a function to input temperature in Centigrade and convert to Fahrenheit.
//(0°C × 9/5) + 32 = 32°F
(function (temperature) {
    console.log(((temperature * (9 / 5)) + 32) + " °Fahrenheit");
})(15);


//7. Write a function to find the maximum element in array of numbers. Filter out all non-number elements.

(function (array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i].
    }

})([1, 2, 5, 66, 5, 4, 899, 56, "srdja", "veljko", "bit"])
