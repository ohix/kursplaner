// Define an empty array to store the strings
const faecher11 = [];
const faecher12 = [];


// Get a reference to the button element
// Get all the buttons with the subject-button class
const buttons = document.querySelectorAll('.subject-button');

// Add event listeners to the buttons for each subject
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const subject = button.dataset.subject;
        faecher11.push(subject);
        console.log(faecher11);
        button.disabled = true;
        
    });
});

//Faecherarray von Index 0 bis 4
faecher11_0_4 = faecher11.slice(0, 5);
faecher11_0_5 = faecher11.slice(0, 6);
faecher12_0_4 = faecher12.slice(0, 5);
faecher12_0_5 = faecher12.slice(0, 6);