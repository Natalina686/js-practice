// function greet(name, callback) {
//     return callback(name);
// }
// function sayHello(name) {
//     console.log(`Привіт, ${name}!`);
//   }
  
//   greet("Аня", sayHello);
  

 function processArray(numbers, callback) {
   return numbers.map(callback);
}

// function double(num) {
//     return num * 2;
//   }
  
//   const numbers = [1, 2, 3, 4];
//   const result = processArray(numbers, double);
//   console.log(result); // [2, 4, 6, 8]

//   function square(num) {
//     return num ** 2;
//   }
  
//   const squaredNumbers = processArray(numbers, square);
//   console.log(squaredNumbers); // [1, 4, 9, 16]
  
//   function decrement(num) {
//     return num - 1;
// }

// function filterArray(numbers, callback) {
//     return numbers.filter(callback);
// }

// function isEven(num) {
//     return num % 2 === 0;
// }

// function isGreaterThanThree(num) {
//     return num > 3;
// }
// const filteredNumbers = filterArray(numbers, isGreaterThanThree);
// console.log(filteredNumbers); // [4]


// const decrementedNumbers = processArray(numbers, decrement);
// console.log(decrementedNumbers); // [0, 1, 2, 3]

// const cubedNumbers = processArray(numbers, num => num ** 3);
// console.log(cubedNumbers); // [1, 8, 27, 64]

// const evenNumbers = filterArray(numbers, isEven);
// console.log(evenNumbers);


const words = ["apple", "banana", "cherry"];
function toUpperCase(word) {
    return word.toUpperCase();
}

const upperCaseWords = processArray(words, toUpperCase);
console.log(upperCaseWords);

function processData(arr, callback) {
    return arr.map(callback);
}

console.log(processData([1, 4, 5, 8], num => num * 10));