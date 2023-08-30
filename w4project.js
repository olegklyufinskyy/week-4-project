///1Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
///Programmatically subtract the value of the first element in the array from the value in the last element of the array.
///Do not use numbers to reference the last element, find it programmatically.
///ages[7] - ages[0] is not allowed!
///Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
///Use a loop to iterate through the array and calculate the average age////

const ages = [3,9,23,64,2,8,28,93]
 ages.concat = [90]
 function find_average(array) {
    var sum = 0;
    array.forEach(num => {
        sum += num.length;
    });
   
    return sum / array.length
}
console.log(find_average(ages));

     console.log(ages[ages.length-1] - ages[0])
console.log(ages.length)

function find_average(array) {
    var sum = 0;
    array.forEach(num => {
        sum += num.length;
    });
   
    return sum / array.length
}
console.log(find_average(ages));

///2Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
///Use a loop to iterate through the array and calculate the average number of letters per name.
///Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.

const nameArray = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(nameArray[0].length)
function find_average(array) {
    var sum = 0;
    array.forEach(num => {
        sum += num.length;
    });
   
    return sum / array.length
}
console.log(find_average(nameArray));


function oleg(array){
    let answer = "";
    for(let i=0; i < array.length; i++){
       answer = answer + "" + array[i];
    }
    return answer
}

console.log(oleg(nameArray))



////3How do you access the last element of any array?

let arry = [1, 2, 3, 4, 5];
let lastElement = arry[arry.length - 1];

console.log(lastElement);


///4How do you access the first element of any array?

var arr = [ 1, 2, 3, 4, 5 ];
var first = arr[0];
console.log(first);



////5Create a new array called nameLengths. 
///Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
///For example:

///let names = ["Kelly", "Sam", "Kate"];    // starting with this array
///let nameLengths = [5, 3, 4];             // create a new array
let names = ["Jimm", "Tony", "Bob", "Eva"];

let nameLengths = [];

for (let i = 0; i < names.length; i++) {
  nameLengths.push(names[i].length);
}

console.log(nameLengths);



/////6Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.

const newname = [76, 98, 34, 78];
let sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    sum += nameLengths[i];
}

console.log("Sum of array elements:", sum);




///7Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
///(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').

function concatenateWord(word, n) {
    return word.repeat(n);
}

let result = concatenateWord("Hello", 3);
console.log(result);


///8Write a function that takes two parameters, firstName and lastName, and returns a full name. 
///The full name should be the first and the last name separated by a space.
function getFullName(firstName, lastName) {
    return firstName + ' ' + lastName;
  }
  
  const firstName = 'Oleg';
  const lastName = 'Kl';
  const fullName = getFullName(firstName, lastName);
  console.log(fullName);




///9Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
function isSumGreaterThan100(numbersArray) {
    const sum = numbersArray.reduce((acc, num) => acc + num, 0);
    return sum > 100;
  }
  const numbers = [50, 40, 30, 25];
  console.log(isSumGreaterThan100(numbers));


///10Write a function that takes an array of numbers and returns the average of all the elements in the array.
function calculateAverage(numbers) {
    if (numbers.length === 0) {
      return 0;
    }
  
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / numbers.length;
    return average;
  }
  
  const numbersArray = [5, 10, 15, 20];
  const averageValue = calculateAverage(numbersArray);
  console.log("The average is:", averageValue);




////11Write a function that takes two arrays of numbers and returns true if the average of 
///the elements in the first array is greater than the average of the elements in the second array.
function compareAverage(arr1, arr2) {
    if (arr1.length === 0 || arr2.length === 0) {
        return false; 
    }

    const average1 = arr1.reduce((sum, num) => sum + num, 0) / arr1.length;
    const average2 = arr2.reduce((sum, num) => sum + num, 0) / arr2.length;

    return average1 >= average2;
}

const array1 = [4, 6, 8, 10];
const array2 = [2, 5, 7, 9];


console.log(result);




////12Write a function called willBuyDrink that takes a boolean isHotOutside, 
///and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside && moneyInPocket > 10.50) {
        return true;
    } else {
        return false;
    }
}
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 12.00));
console.log(willBuyDrink(false, 15.00));




///13Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

function findAverage(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("Input must be an array of numbers");
    }
  
    if (numbers.length === 0) {
      throw new Error("Array must not be empty");
    }
  
    const sum = numbers.reduce((total, num) => total + num, 0);
    const average = sum / numbers.length;
    return average;
  }
  
  
  const numberArray = [10, 20, 30, 40, 50];
  const avg = findAverage(numberArray);
  console.log("Average:", avg);

