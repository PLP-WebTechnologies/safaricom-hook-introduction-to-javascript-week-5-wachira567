// Part 1: JavaScript Basics

// Variables and Data Types
let userName = "Alice Johnson"; // string
let userAge = 30; // number
let isMember = false; // boolean
let favoriteColors = ["blue", "green", "red"]; // array
let userProfile = { name: "Alice", age: 30, membership: "Gold" }; // object

// Print values and types to the console
console.log(`User  Name: ${userName} (Type: ${typeof userName})`);
console.log(`User  Age: ${userAge} (Type: ${typeof userAge})`);
console.log(`Is Member: ${isMember} (Type: ${typeof isMember})`);
console.log(`Favorite Colors: ${favoriteColors} (Type: ${typeof favoriteColors})`);
console.log(`User  Profile: ${JSON.stringify(userProfile)} (Type: ${typeof userProfile})`);

// Operators
function simpleCalculator() {
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let operation = prompt("Choose an operation (+, -, *, /):");

    // Validate user input
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation.");
            return;
    }
    alert(`Result: ${result}`);
}

// Call the calculator function
simpleCalculator();

// Functions
function welcomeUser (name) {
    return `Welcome, ${name}! Enjoy your time exploring JavaScript.`;
}

// Display greeting in the dynamic-content div
document.getElementById("dynamic-content").innerHTML += `<p>${welcomeUser (userName)}</p>`;

// Part 2: JavaScript Control Structures

// If Statements
let ageInput = parseInt(prompt("Please enter your age:"));
if (ageInput >= 18) {
    document.getElementById("dynamic-content").innerHTML += `<p>You are eligible to vote.</p>`;
} else {
    document.getElementById("dynamic-content").innerHTML += `<p>You are not eligible to vote.</p>`;
}

// Loops
let numberList = document.createElement("ul");
for (let i = 1; i <= 10; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Number: ${i}`;
    numberList.appendChild(listItem);
}
document.getElementById("dynamic-content").appendChild(numberList);

// Part 3: Introduction to the DOM

// Selecting and Modifying HTML Elements
document.querySelector("h1").textContent = "JavaScript in Action!";
let additionalParagraph = document.createElement("p");
additionalParagraph.textContent = "This content was dynamically added using JavaScript!";
document.getElementById("dynamic-content").appendChild(additionalParagraph);