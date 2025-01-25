const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 90 },
    { name: "Dave", score: 60 }
  ];
  
  function getTopStudents(arr) {
    return arr.filter(student => student.score > 80).map(student => student.name);
  }
  
  console.log(getTopStudents(students)); // ["Alice", "Charlie"]
  

  const numbersN = [1, 2, 3, 4, 5, 6, 7, 8];

function getSquaresOfEvenNumbers(arr) {
  return arr.filter( number => number % 2 === 0).map(number => number *= number);
}

console.log(getSquaresOfEvenNumbers(numbersN)); // [4, 16, 36, 64]


const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 800 }
  ];
  
  function applyDiscount(arr) {
    return arr.map(product => ({name: product.name, price: product.price - product.price * 0.2}));
     
  }
  
  console.log(applyDiscount(products));
  /*
  [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 400 },
    { name: "Tablet", price: 640 }
  ]
  */
  
  const numbers = [10, 20, 30, 40];

  function addIndexToElements(arr) {
    return arr.map((number, index) => number + index);
  }
  
  console.log(addIndexToElements(numbers)); // [10, 21, 32, 43]
  