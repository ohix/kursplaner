// Define an empty array to store the strings
const faecher11 = [];
const faecher12 = [];


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

let faecher11_0_4 = faecher11.slice(0, 5);
let faecher11_0_5 = faecher11.slice(0, 6);
let faecher12_0_4 = faecher12.slice(0, 5);
let faecher12_0_5 = faecher12.slice(0, 6);

let regel1 = false;
let regel2 = false; 
let regel3 = false;
let regel4 = false;
let regel5 = false;
let regel6 = false;
let regel7 = false;
let regel8 = false;
let regel9 = false;
let regel10 = false;
let regel11 = false;
let regel12 = false;


