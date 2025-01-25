const deeplyNestedArray = [1, [2, [3, [4, [5]]]], 6];

function recursiveFlattenArray(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
        return acc.concat(recursiveFlattenArray(item));
    } else {
        return acc.concat(item)
    }
  }, []);
}

console.log(recursiveFlattenArray(deeplyNestedArray)); 
// Результат: [1, 2, 3, 4, 5, 6]


const numbers = [10, 20, 30, 40, 50];
function getSubArray(arr, startIndex, endIndex) {
  return arr.slice(startIndex, endIndex);
}
console.log(getSubArray(numbers, 1, 3)); // [20, 30]
console.log(getSubArray([1, 2, 3, 4, 5], 0, 2)); // [1, 2]
console.log(getSubArray(['a', 'b', 'c', 'd'], 1, 3)); // ['b', 'c']

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
  }
  
  console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
  console.log(mergeArrays(['a', 'b'], ['c', 'd', 'e'])); // ['a', 'b', 'c', 'd', 'e']
  

  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  
  function findUserByName(arr, name) {
    return arr.find(user => user.name === name);
  }
  
  console.log(findUserByName(users, "Bob")); // { id: 2, name: "Bob" }
  console.log(findUserByName(users, "Eve")); // undefined
  
  function areAllNumbersEven(arr) {
    return arr.every(number => number % 2 ===0);
  }
  
  console.log(areAllNumbersEven([2, 4, 6, 8])); // true
  console.log(areAllNumbersEven([2, 3, 6, 8])); // false 
  
  
  function hasNumberGreaterThanTen(arr) {
    return arr.some(number => number > 10);
  }
  
  console.log(hasNumberGreaterThanTen([1, 2, 3, 11])); // true
  console.log(hasNumberGreaterThanTen([1, 2, 3, 4]));  // false
  