// Constructor function using the "new" and "this" keywords
function Person(name) {
    this.name = name;
}

// Function to display the results of the constructor function within an HTML element
function displayGreeting() {
    // Get the input value from the HTML input element
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

// End of script