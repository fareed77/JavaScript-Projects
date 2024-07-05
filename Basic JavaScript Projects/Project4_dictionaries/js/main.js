 // Step 1: Define a dictionary (object) with key-value pairs
 var dictionary = {
    name: "Fareed Ahmad",
    age: 30,
    occupation: "Software Developer"
};

// Step 2: Function to display a key-value pair in an HTML element
function displayKeyValuePair(key) {
    // Step 3: Check if the key exists in the dictionary
    if (dictionary.hasOwnProperty(key)) {
        // Step 4: Get the value associated with the key
        var value = dictionary[key];
        
        // Step 5: Delete the key from the dictionary
        delete dictionary[key];

        // Step 6: Output the key-value pair in the HTML element
        document.getElementById("output").innerHTML = "Key: " + key + ", Value: " + value;
    } else {
        // If the key does not exist, display a message
        document.getElementById("output").innerHTML = "Key not found.";
    }
}