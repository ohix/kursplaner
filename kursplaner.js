// Define an empty array to store the strings
const faecher11 = [];
let faecher11_0_4 = [];
let faecher11_0_5 = [];
const faecher12 = ['Englisch', 'Latein', 'Spanisch', 'Japanisch', 'Musik'];
let faecher12_0_5 = faecher12.slice(0, 5);

const buttons = document.querySelectorAll('.subject-button');

// Add event listeners to the buttons for each subject
buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
        const subject = button.dataset.subject;
        faecher11.push(subject);
        console.log(faecher11);
        button.disabled = true;
        if (index == 4) {
            faecher11_0_5 = faecher11.slice(0, 5);
            console.log(faecher11_0_5);
        }
    });
});

// let faecher11_0_4 = faecher11.slice(0, 5);
// let faecher11_0_5 = faecher11.slice(0, 6);
// folgende brauchen wir nicht
// let faecher12_0_4 = faecher12.slice(0, 5);
// let faecher12_0_5 = faecher12.slice(0, 6);

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

// --- Regeln ---

// Regel 1
// Die Bedingung "faecher11.length === 5" sollten wir ersetzen durch einen "fertig/bestaetigen" button der Eingabe
const intervalId = setInterval(function() {
    if (faecher11.length === 5) {
        if (JSON.stringify(faecher11_0_5) === JSON.stringify(faecher12_0_5)) {
            regel1 = true;
        } else {
            console.log("yeah");
        }
        clearInterval(intervalId); // Stop the interval
    }
}, 1000);

// ------------------
// Regel 2...