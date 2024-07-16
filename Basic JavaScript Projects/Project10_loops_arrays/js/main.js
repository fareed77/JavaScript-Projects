// Function that utilizes a while loop
function whileLoopFunction() {
    let count = 0; // Initialize the count variable
    let result = ""; // Initialize the result string

    // Using a while loop to count from 0 to 4
    while (count < 5) {
        result += count + " "; // Append the current count to the result string
        count++; // Increment the count
    }

    // Display the result in the HTML paragraph
    document.getElementById("whileLoopResult").innerHTML = "While Loop: " + result;
}

// Function that utilizes a for loop
function forLoopFunction() {
    let result = ""; // Initialize the result string

    // Using a for loop to count from 0 to 4
    for (let i = 0; i < 5; i++) {
        result += i + " "; // Append the current index to the result string
    }

    // Display the result in the HTML paragraph
    document.getElementById("forLoopResult").innerHTML = "For Loop: " + result;
}

// Function that utilizes an array
function arrayFunction() {
    // Define an array
    let fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
    let result = ""; // Initialize the result string

    // Iterate over the array elements
    for (let i = 0; i < fruits.length; i++) {
        result += fruits[i] + " "; // Append the current fruit to the result string
    }

    // Display the result in the HTML paragraph
    document.getElementById("arrayResult").innerHTML = "Array Elements: " + result;
}

// Create an object using the let keyword
let person = {
    name: "John Doe",
    age: 30,
    occupation: "Software Developer"
};

// Display the object's properties in the console
console.log("Person Object: ", person);