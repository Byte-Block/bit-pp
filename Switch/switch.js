//1.
var numberInput = 4;
var result = "";

switch (numberInput) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thor\'s day";
        break
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    default:
        result = "Someday";
        break;
}

console.log(result);
//2.
var numberInput = 1;
var result = "";

switch (numberInput) {
    case 1:
        result = "Monday";
        break;
    case 2:
        result = "Tuesday";
        break;
    case 3:
        result = "Wednesday";
        break;
    case 4:
        result = "Thor\'s day";
        break
    case 5:
        result = "Friday";
        break;
    case 6:
        result = "Saturday";
        break;
    case 7:
        result = "Sunday";
        break;
    default:
        result = "Input must be a number between 1 and 7";
        break;
}

console.log(result);
//3.
var numberInput = 2;
var result = "";

switch (numberInput) {
    case 1:
        result = "It\s a weekday";
        break;
    case 2:
        result = "It\s a weekday";
        break;
    case 3:
        result = "It\s a weekday";
        break;
    case 4:
        result = "It\s a weekday";
        break
    case 5:
        result = "It\s a weekday";
        break;
    case 6:
        result = "It\s a weekend";
        break;
    case 7:
        result = "It\s a weekend";
        break;
    default:
        result = "Input must be a number between 1 and 7";
        break;
}

console.log(result);
//4.
var numberInput = 2;
var result = "";

switch (numberInput) {
    case 1:
        result = "January";
        break;
    case 2:
        result = "February";
        break;
    case 3:
        result = "March";
        break;
    case 4:
        result = "April";
        break
    case 5:
        result = "May";
        break;
    case 6:
        result = "June";
        break;
    case 7:
        result = "July";
        break;
    case 8:
        result = "August";
        break;
    case 9:
        result = "September";
        break;
    case 10:
        result = "October";
        break;
    case 11:
        result = "November";
        break
    case 12:
        result = "December";
        break;
    default:
        result = "Input must be a number between 1 and 12";
        break;
}

console.log(result);
//5.
var numberInput = 4;
var result = "";

switch (numberInput) {
    case 1:
        result = "Winter";
        break;
    case 2:
        result = "Winter";
        break;
    case 3:
        result = "Spring";
        break;
    case 4:
        result = "Spring";
        break
    case 5:
        result = "Spring";
        break;
    case 6:
        result = "Summer";
        break;
    case 7:
        result = "Summer";
        break;
    case 8:
        result = "Summer";
        break;
    case 9:
        result = "Autumn";
        break;
    case 10:
        result = "Autumn";
        break;
    case 11:
        result = "Autumn";
        break
    case 12:
        result = "Winter";
        break;
    default:
        result = "Input must be a number between 1 and 12";
        break;
}

console.log(result);
//6.
var inputString = "A";
var result = "";

switch (inputString) {
    case "A":
        result = "Good job";
        break;
    case "B":
        result = "Pretty good";
        break;
    case "C":
        result = "Passed";
        break;
    case "D":
        result = "Not so good";
        break;
    case "E":
        result = "Pretty bad";
        break;
    case "F":
        result = "Failed";
    default:
        result = "Unknown grade";
        break;
}

console.log(result);
//7.
var inputCityName = "Barcelona";
var result = "";

switch (inputCityName) {
    case "Amsterdam":
        result = "Nether lands";
        break;
    case "Barcelona":
        result = "Spain";
        break;
    case "Madrid":
        result = "Spain";
        break;
    case "Berlin":
        result = "Germany";
        break;
    case "Frankfurt":
        result = "Germany";
        break;
    case "Dortmund":
        result = "Germany";
        break;
    case "Dusseldorf":
        result = "Germany";
        break;
    case "Hamburg":
        result = "Germany";
        break;
    case "City 9":
        result = "Country 4";
        break;
    case "City 10":
        result = "Country 4";
        break;
    case "City 11":
        result = "Country 4";
        break;
    case "City 12":
        result = "Country 5";
        break;
    case "City 13":
        result = "Country 5";
        break;
    case "City 14":
        result = "Country 5";
        break;
    case "City 15":
        result = "Country 5";
        break;
    default:
        result = "Please choose a different city";
        break;
}

console.log(result);
//8.
var inputNumberOne = 1;
var inputNumberTwo = 0;
var operationInString = "/";
var result = "";

switch (operationInString) {
    case "+":
        result = inputNumberOne + inputNumberTwo;
        break;
    case "-":
        result = inputNumberOne - inputNumberTwo;
        break;
    case "*":
        result = inputNumberOne * inputNumberTwo;
        break;
    case "/":
        if (inputNumberTwo === 0) {
            result = "Watch out for division by zero!";
        } else {
            result = inputNumberOne / inputNumberTwo;
        }
        break;
    default:
        result = "Please input a valid sign operator";
        break;
}
console.log(result);