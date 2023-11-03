/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 *  
 */

// initialise a variable called cats to the variable: Kate, Katie.
// then initialise a variable called dogs to the variable: Patrick, Park.
// then console log out and concatenate the two arrays with cats first and then dogs.

var cats = ["Kate", "Katie"];
var dogs = ["Patrick", "Park"];

console.log(cats.concat(dogs));


/**
 * Question 6 - create a 2 dimensions array that is 2-by-4.
 * Grab some values out of this array
 * to create a sentence using concatenation.
 */

// initialise a variable called work dates to a 2-Dimensional array containing the values below:
// intialise a variable called holidays with values: Family Day, Christmas.
/**
 *          column[0]         column[1]          column[2]           column[3]
 * row 1     Monday           Tuesday            Wednesday           Thursday
 * row 2     Oct 1            Oct 2              Oct 3               Oct 4
 *  
 * then use console.table() to showcase the information in a table.
 * initialise the variable sentence one to this sentence below:
 * I have a shift on Monday, Oct 1.
 * initialise the variable sentence two to this sentence
 * I do not work on Family Day.
 * then console log out and concatenate the two arrays with sentence one first and then sentence two.
 * */

var workDates = [
    ["Monday", "Tuesday", "Wednesday", "Thursday"],
    ["Oct 1", "Oct 2", "Oct 3", "Oct 4"],
];

var holidays = ["Family Day", "Christmas"];

console.table(workDates);
var sentenceOne = `I have a shift on ${workDates[0][0]} ${workDates[1][0]}.`;
var sentenceTwo = ` I do not work on ${holidays[0]}.`;

console.log(sentenceOne.concat(sentenceTwo));
