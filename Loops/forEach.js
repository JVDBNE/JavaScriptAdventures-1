// Using forEach, add together all the elements in the numbers array, and store the total in the variable total.

const numbers = [1, 2, 3, 4, 5];
let total = 0;

// Write loop here:

numbers.forEach(number => total += number);

//---------------------------------------------------------------------------------------------------------------------

//Using forEach, copy only the first 2 characters of each string in the days array and store the abbreviations in the dayAbbreviations array.

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let dayAbbreviations = [];

// dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
// Write your code below

days.forEach( day => dayAbbreviations.push(day.slice(0,2)));                          //final index wont be returned

//----------------------------------------------------------------------------------------------------------------------

//Using forEach, turn the number strings from the stringPrices array into floats and add them all, storing the total in the variable priceTotal.

const stringPrices = ['5.47', '3.12', '8.00', '5.63', '10.70'];
let priceTotal = 0;

// priceTotal should be: 32.92
// Write your code below

stringPrices.forEach( stringPrice => priceTotal += parseFloat(stringPrice));


//----------------------------------------------------------------------------------------------------------------------

//The split method turns a string into an array. In the case of alphabet below, each letter of the string is being turned into an element in an 
//array by split. Using forEach, iterate over the alphabet array and store each letter in the array noel except for the L character.

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
let noel = [];

// noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
// Write your code below

alphabet.forEach(character => {
    if (character !== 'L') {
    noel.push(character)
    }
} )

//-----------------------------------------------------------------------------------------------------------------------

//Using forEach, iterate over the percentages and store all percentages over 50 percent in the array upperRange.

const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];
let upperRange = [];

// upperRange should be: [67, 90, 82, 99]
// Write your code below

percentages.forEach(percent => {
    if (percent > 50) {
        upperRange.push(percent)
    }
})

//-----------------------------------------------------------------------------------------------------------------------

//Using forEach, iterate over the colors array and store the hex colors that start with the letter F (ex. #FF0000) in the array filteredColors.

const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];
let filteredColors = [];

// filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
// Write your code below

colors.forEach(hex => {
    if (hex(1) === 'F' ) {                                           
        filteredColors.push(hex)
    }
});
//-----------------------------------------------------------------------------------------------------------------------

//Using forEach, capitalize all the strings in the months array and store them in the array capitalizedMonths.

const months = ['january', 'february', 'march', 'april', 'may'];
let capitalizedMonths = [];

// capitalizedMonths should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
// Write your code below

months.forEach(month => capitalizedMonths.push(month.toUpperCase()))





