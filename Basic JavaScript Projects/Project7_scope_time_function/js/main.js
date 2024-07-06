// Global variable
var globalGreeting = "Hello, World!";

// Constructor function using the "new" and "this" keywords
function Person(name) {
    this.name = name;
}

// Function to display the results of the constructor function within an HTML element
function displayGreeting() {
    // Local variable
    let nameInput = document.getElementById('nameInput').value;

    // Ternary operation to check if the input is empty and assign a default name if true
    let personName = nameInput ? nameInput : "Guest";

    // Create a new instance of the Person constructor function
    let person = new Person(personName);

    // Function to create a greeting message
    function createGreetingMessage() {
        return `Hello, ${person.name}! Welcome to the site.`;
    }

    // Nested function to update the HTML content with the greeting message
    function updateGreeting() {
        document.getElementById('greeting').textContent = createGreetingMessage();
    }

    // Call the nested function to update the greeting
    updateGreeting();
}

// Function with an if statement
function checkInputLength() {
    // Get the input value from the HTML input element
    let nameInput = document.getElementById('nameInput').value;

    // If statement to check the length of the input value
    if (nameInput.length > 0) {
        console.log("Input is not empty");
    } else {
        console.log("Input is empty");
    }
}

// Intentionally erroneous function for debugging
function erroneousFunction() {
    try {
        // Intentional error: variable not defined
        let result = undefinedVariable + 10;
    } catch (error) {
        console.log("Error detected: ", error.message);
    }
}

// Time function to display a time-based greeting
function Time_function() {
    let timeGreeting;
    let currentHour = new Date().getHours();

    // If statement to set time-based greeting
    if (currentHour < 12) {
        timeGreeting = "Good morning!";
    } else if (currentHour < 18) {
        timeGreeting = "Good afternoon!";
    } else {
        timeGreeting = "Good evening!";
    }

    // Display the time-based greeting
    document.getElementById('timeGreeting').textContent = timeGreeting;
}

// Call the erroneous function to debug it in the console
erroneousFunction();

// End of script