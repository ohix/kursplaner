// Define an empty array to store the strings
const Faecherarray = [];

// Get a reference to the button element
// Get all the buttons with the subject-button class
const buttons = document.querySelectorAll('.subject-button');

// Add event listeners to the buttons for each subject
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const subject = button.dataset.subject;
        Faecherarray.push(subject);
        console.log(Faecherarray);
        button.disabled = true;
    });
});

