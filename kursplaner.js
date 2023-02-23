        // Define an empty array to store the strings
        const stringsArray = [];
        
        // Get a reference to the button element
        const button = document.querySelector('button');
        
        // Add an event listener to the button
        button.addEventListener('click', function() {
            // Append the predetermined strings to the array
            stringsArray.push('string1', 'string2', 'string3');
            console.log(stringsArray);
        });