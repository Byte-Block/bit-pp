//1.Write a functional expression that duplicates each element of a given array.
//Input: [2, 4, 7, 11, -2, 1]
//Output: [2, 2, 4, 4, 7, 7, 11, 11,  -2, -2, 1, 1]

function duplicateEachElement(array) {
    var res = [];

    for (var i = 0; i < array.length; i++) {
        res.push(array[i]);
        res.push(array[i]);
    }

    return res;
}

var input = [2, 4, 7, 11, -2, 1];
var output = duplicateEachElement(input);
console.log(output);




//  2.              Write a functional expression that removes all duplicates in a given array.


//Input: [8, 13, 8, 9, 12, 8, 1, 1, 4, 13]
//Output: [1, 4, 8, 9, 12, 13] 

function niz(array) {
    var newNiz = [];
    for (i = 0; i < array.length; i++) {
        if (newNiz.indexOf(array[i]) === -1) {
            newNiz[newNiz.length] = (array[i]);
        }
    }
    newNiz.sort(function (a, b) {
        return a - b
    })
    return newNiz

}


var input = [8, 13, 8, 9, 12, 8, 1, 1, 4, 13];
var output = niz(input);
console.log(output)






//3.     pogresno protumacen zadatak


// Write a function that checks if a given array has odd number of elements.
// Input: [1, 2, 9, 2, 1]
// Output: true

function niz(array) {
    var res = false;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            res = true
        }
    }
    return res
}


var input = [1, 2, 9, 2, 6];
var output = niz(input);
console.log(output)


////////////////////////////////




// 3. (a)                a moze i da se uradi samo samo ==>  return array.length % 2 !== 0; bez if-a

function niz(array) {
    var res = false;
    if (array.length % 2 !== 0) {
        res = true;
    }
    return res
}

var input = [1, 2, 9, 2, 6, 7];
var output = niz(input);
console.log(output)





//3.(b)
// Write a function that counts the number of elements less than the middle element. If the given array has an even number of elements, print out an error message. 
// Input: [-1, 8.1, 3, 6, 2.3, 44, 2.11]
// Output: 4

function niz(array) {
    if (array.length % 2 === 0) {
        return "error";
    }
    for (i = 0; i < array.length; i++) {

    }

}


var input = [-1, 8.1, 3, 6, 2.3, 44, 2.11,];
var output = niz(input);
console.log(output)

//4.Write a function that finds the smallest element of a given array.
//The function should return an object that contains the smallest value and its last position in the array.
//Input: [1, 4, -2, 11, 8, 1, -2, 3]
//Output:  { minValue: -2, minLastIndex: 6 }

function returnSmallestValueLastPosition(array) {
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return { minValue: min, minLastIndex: array.lastIndexOf(min) }
}

var input = [1, 4, -2, 11, 8, 1, -2, 3];
console.log(returnSmallestValueLastPosition(input));

//5.a.Write a function that finds all the elements in a given array less than a given element. 
//Input: [2, 3, 8, -2, 11, 4], 6 
//Output: [2, 3, -2, 4]

function allTheElementsLessThanAGiven(array, element) {
    var res = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] < element) {
            res.push(array[i]);
        }
    }
    return res;
}

var input = [2, 3, 8, -2, 11, 4];
var givenElement = 6;

console.log(allTheElementsLessThanAGiven(input, givenElement));

//5.b. Write a function that finds all the elements in a given array that start with the “pro” substring.
// The function should be case insensitive. 
//Input: [’JavaScript’, ’Programming’, ’fun’, ’product’] 
//Output: [’Programming’, ‘product’]

function findAllElementsInAGivenArray(input, subString) {
    var res = [];
    var temp;
    for (var i = 0; i < input.length; i++) {
        temp = input[i];
        if (temp.slice(0, 3).toLowerCase() === subString) { //also startsWith() method.
            res.push(input[i]);
        }
    }
    return res;
}

var input = ['JavaScript', 'Programming', 'fun', 'product'];
var subString = "pro";

console.log(findAllElementsInAGivenArray(input, subString));

//c.Write a function that expects an array and a callback function that filters out some of the elements.
// Use functions defined in a) or b) to test it. 


//6.a.Write a list (array) of products you usually buy in the supermarket. 
//Write a price and name for each product. For example,
var a = [{ name: 'apples', price: 100 }, { name: 'milk', price: 80 }, { name: 'bananas', price: 150 }];

//b.Write a function that calculates the total price of your shopping list. 
function totalPriceOfMyShoppingList(array) {
    var res = 0;
    for (var i = 0; i < array.length; i++) {
        res += array[i].price;
    }
    return res;
}

console.log(totalPriceOfMyShoppingList(a));

//c.Write a function that calculates the average product price of your shopping list.
//Print this value with the precision of three decimals. 
function averageProductPrice(array) {
    var res = 0;
    for (var i = 0; i < array.length; i++) {
        res += array[i].price;
    }
    return (res / array.length).toFixed(3);
}

var a = [{ name: 'apples', price: 123 }, { name: 'milk', price: 456 }, { name: 'bananas', price: 789 }];
console.log(averageProductPrice(a));

//d.Write a function that prints out the name of the most expensive product on your shopping list.
/// Write the name in uppercase. 

function mostExpensiveProduct(array) {
    max = array[0].price;
    var index;
    for (var i = 0; i < array.length; i++) {
        if (array[i].price > max) {
            index = i;
        }
    }
    return array.indexOf(max);
    //return array[index].name;
}

var a = [{ name: 'apples', price: 123 }, { name: 'milk', price: 456 }, { name: 'bananas', price: 789 }];
console.log(mostExpensiveProduct(a));

//7.a.Write a function that checks if a given string is written in all capitals.
