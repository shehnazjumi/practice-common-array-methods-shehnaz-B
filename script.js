// Task 1: Create the Order System
let drinks = ["Latte", "Tea", "Espresso"];
let pastry = ["Croissant", "Muffin", "Bagel"];

// Task 2: Log the number of drinks and number of pastries
console.log("--- Task 2: Number of Items ---");
console.log("Number of drinks: " + drinks.length);
console.log("Number of pastries: " + pastry.length);

// Task 3: Access Orders Using Bracket Notation
console.log("\n--- Task 3: Three Combinations ---");
// Combination 1: First drink and last pastry
console.log("Combination 1: " + drinks[0] + " and " + pastry[pastry.length - 1]);
// Combination 2: Second drink and first pastry
console.log("Combination 2: " + drinks[1] + " and " + pastry[0]);
// Combination 3: Third drink and second pastry
console.log("Combination 3: " + drinks[2] + " and " + pastry[1]);

// Task 4: Access Orders Dynamically with Variables
console.log("\n--- Task 4: Dynamic Access Using Variables ---");
let drinkIndex = 1; // Index 1 corresponds to "Tea"
let pastryIndex = 2; // Index 2 corresponds to "Bagel"

console.log("Selected Drink: " + drinks[drinkIndex]);
console.log("Selected Pastry: " + pastry[pastryIndex]);

// Task 5: Write a loop that logs all the items in the drink category
console.log("\n--- Task 5: All Drink Items ---");
for (let i = 0; i < drinks.length; i++) {
  console.log("- " + drinks[i]);
}

// Task 6: Add a New Order & Track Length
console.log("\n--- Task 6: Add New Order ---");
// Add "flat white" to the drinks array dynamically
drinks.push("flat white");
console.log("Updated number of drinks: " + drinks.length);
