// steps 1 - 3
var fruits = []; 

let numberOfFruits = parseInt(prompt("How many fruits do you want to enter? (Enter a number between 3 and 10)"));

if (numberOfFruits < 3 || numberOfFruits > 10) {
  alert("Please enter a number between 3 and 10.");
} else {

  for (let i = 0; i < numberOfFruits; i++) {
    let fruit = prompt("Enter the name of fruit:");
    fruits.push(fruit.toLowerCase());
  }

// steps 4 - 8

  console.log("Array of fruits:", fruits);
  console.log("First fruit entered:", fruits[0]);
  console.log("Last fruit entered:", fruits[fruits.length - 1]);
  fruits.sort((a, b) => b.localeCompare(a));
  console.log("Fruits in descending order:", fruits);
  console.log("Second fruit in the array:", fruits[1]);
  fruits.splice(0, 1); // Delete the 1st fruit
  fruits.splice(1, 1); // Delete the 3rd fruit
  console.log("Array after deleting 1st and 3rd fruits:", fruits);
}

// step 9

// step 1 (vegetables)

var vegetables = [];
let numberOfVegetables = parseInt(prompt
  ("How many vegetables do you want to enter? (Enter a number between 3 and 10)"));

if (numberOfVegetables < 3 || numberOfVegetables > 10) {
  alert("Please enter a number between 3 and 10.");
} else {

  for (let i = 0; i < numberOfVegetables; i++) {
    let vegetable = prompt("Enter the name of vegetable:");
    vegetables.push(vegetable.toLowerCase());
  }

  // Steps 4 - 8

  console.log("Array of vegetables:", vegetables);
  console.log("First vegetable entered:", vegetables[0]);
  console.log("Last vegetable entered:", vegetables[vegetables.length - 1]);
  vegetables.sort((a, b) => b.localeCompare(a));
  console.log("Vegetables in descending order:", vegetables);
  console.log("Second vegetable in the array:", vegetables[1]);
  vegetables.splice(0, 1); // Delete the 1st vegetable
  vegetables.splice(1, 1); // Delete the 3rd vegetable
  console.log("Array after deleting 1st and 3rd vegetables:", vegetables);
}

// step 10
var food = fruits.concat(vegetables);

// Step 11
for (let i = 0; i < food.length; i++) {
  let foodName = food[i];
  let isEven = i % 2 === 0;
  let wordLength = foodName.length;
  let secondLetter = foodName[1];
  let reversedWord = foodName.split('').reverse().join('');

  console.log(`Index ${i} is ${isEven ? 'even' : 'odd'}
  and the food inside it is called ${foodName}. The word ${foodName}
  has ${wordLength} letters and the second letter is ${secondLetter}. 
  If you reverse it, it becomes ${reversedWord}.`);
}

// Step 12
let userFood = prompt("Enter a food:");
let foundIndex = food.indexOf(userFood);

if (foundIndex !== -1) {
  alert(`Food is found at index ${foundIndex}`);
} else {
  alert("Food not found");
}

// Step 13
food[0] = "START";
food[food.length - 1] = "END";
food = food.map(item => item.toUpperCase());

// Step 14
console.log(food);
