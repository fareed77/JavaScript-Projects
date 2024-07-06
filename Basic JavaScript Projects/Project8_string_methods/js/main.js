// Function to demonstrate the concat() method
function concatExample() {
    // Define two strings
    let str1 = "Hello, ";
    let str2 = "world!";
    
    // Concatenate the strings using concat()
    let result = str1.concat(str2);
    
    // Display the result in the HTML element with id "concatResult"
    document.getElementById('concatResult').textContent = result;
}

// Function to demonstrate the slice() method
function sliceExample() {
    // Define a string
    let str = "The quick brown fox jumps over the lazy dog.";
    
    // Extract a part of the string using slice()
    let result = str.slice(4, 19); // Extracts "quick brown fox"
    
    // Display the result in the HTML element with id "sliceResult"
    document.getElementById('sliceResult').textContent = result;
}

// Function to demonstrate the toString() method
function toStringExample() {
    // Define a number
    let num = 123;
    
    // Convert the number to a string using toString()
    let result = num.toString();
    
    // Display the result in the HTML element with id "toStringResult"
    document.getElementById('toStringResult').textContent = result;
}

// Function to demonstrate the toPrecision() method
function toPrecisionExample() {
    // Define a number
    let num = 123.456789;
    
    // Format the number to a specified precision using toPrecision()
    let result = num.toPrecision(5); // Formats to "123.46"
    
    // Display the result in the HTML element with id "toPrecisionResult"
    document.getElementById('toPrecisionResult').textContent = result;
}

// End of script