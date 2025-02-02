function processUserInput(name, callback) {
 callback(name);
  }
  
  processUserInput("Анна", function (name) {
    console.log(`Привіт, ${name}!`);
  });
  

  function fetchData(callback) {
    setTimeout(function() {
      const data = { user: "Анна", age: 25 };
      callback(data);
    }, 2000); // Імітація асинхронної операції (2 секунди)
  }
  
  fetchData(function(data) {
    console.log(`Отримані дані: ${data.user}, ${data.age} років`);
  });
  
  const add = (a, b) => a + b;
  
  
  console.log(add(3, 5)); // 8
  
  const isEven = (num) => num % 2 === 0;
  
  console.log(isEven(4)); // true
  console.log(isEven(7)); // false
  

  function processNumber(num, callback) {
    if (num % 2 === 0) {
        callback("Парне");
    } else {
        callback("Непарне")
    }
    
  }
  
  processNumber(47, (result) => {
    console.log(result); // Очікуємо "Парне"
  });
  
  function fetchDataFromServer(callback) {
    setTimeout(function() {
        const data = {
            name: "Kelly",
            age: 23, 
        }
        callback(data);
    }, 3000);
  
  }
  
  fetchDataFromServer((data) => {
    console.log(`Отримані дані: ${data.name}, ${data.age} років`);
  });
  