const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
  ];
  
  function getUserNames(arr) {
   return arr.map(user => user.name);
   
  }
  
  console.log(getUserNames(users)); // ["Alice", "Bob", "Charlie"]
  

  const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 75 },
    { name: "Charlie", score: 95 },
  ];
  
  function boostScores(arr) {
    return arr.map(student => {
        const boostedScore = Math.min(student.score + 10, 100);
        return {...student, score: boostedScore};
    });
  }
  
  console.log(boostScores(students));
  /*
  Результат:
  [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 100 },
  ]
  */

  const numbers = [1, 2, 3, 4, 5];

function doubleNumbers(arr) {
  return arr.map(number => number * 2);
}

console.log(doubleNumbers(numbers)); 
// Результат: [2, 4, 6, 8, 10]

const numbersS = [10, 20, 30, 40, 50];

function convertToStrings(arr) {
  return arr.map(number => String(number) );
}

console.log(convertToStrings(numbersS)); 
// Результат: ["10", "20", "30", "40", "50"]

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 800 },
  ];
  
  function stringifyPrices(arr) {
    return arr.map(product => {
        const strNum = String(product.price);
        return {...product, price: strNum};

    })
  }
  
  console.log(stringifyPrices(products));
  /* Результат:
  [
    { name: "Laptop", price: "1000" },
    { name: "Phone", price: "500" },
    { name: "Tablet", price: "800" },
  ]
  */

  const productsP = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 800 },
];

function capitalizeNames(arr) {
    return arr.map(product => {
        const capName = product.name.toUpperCase();
        return {...product, name: capName};
    });
}

console.log(capitalizeNames(productsP));
// Результат:
// [
//   { name: "LAPTOP", price: 1000 },
//   { name: "PHONE", price: 500 },
//   { name: "TABLET", price: 800 }
// ]

const products5 = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 800 },
];

function convertPricesAndNames(arr) {
    return arr.map(product => {
        const smallName = product.name.toLowerCase();
        const strPrice = String(product.price);
        return {...product, name: smallName, price: strPrice};
        
    });
}

console.log(convertPricesAndNames(products5));
// Результат:
// [
//   { name: "laptop", price: "1000" },
//   { name: "phone", price: "500" },
//   { name: "tablet", price: "800" }
// ]

const students1 = [
    { name: "Alice", grades: { math: 85, physics: 40, chemistry: 78 } },
    { name: "Bob", grades: { math: 45, physics: 55, chemistry: 62 } },
    { name: "Charlie", grades: { math: 95, physics: 80, chemistry: 30 } },
  ];
  
  function getPassedSubjects(arr) {
    return arr.map(student => {
      const passedSubjects = Object.entries(student.grades).filter(([subject, grade]) => grade > 50).map(([subject]) => subject);
      return {name: student.name, passedSubjects};
      
    });
  }
  
  console.log(getPassedSubjects(students1));
  