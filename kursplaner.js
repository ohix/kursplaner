

// import { PDFDocument, StandardFonts } from 'pdf-lib';

// async function fillInPdfForm() {
//     // ...
//     // const response = await fetch('https://melanchthon-schule-berlin.de/images/stories/plaene/Uebersichtsplan_Kurshalbjahre_2023.pdf');
//     // const data = await response.json();


//     const pdfBytes = await fetch('https://melanchthon-schule-berlin.de/images/stories/plaene/Uebersichtsplan_Kurshalbjahre_2023.pdf').then(res => res.arrayBuffer());
//     const pdfDoc = await PDFDocument.load(pdfBytes);
//     // const form = pdfDoc.getForm();
    
//     // Set the value of a form field
//     // form.getTextField('Name').setText(data.name);
//     // form.getTextField('Email').setText(data.email);
    
//     // Save the filled-in PDF to a file
//     const filledInPdfBytes = await pdfDoc.save();
//     const blob = new Blob([filledInPdfBytes], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);
//     window.location.href = url;
    
//     // Or send the filled-in PDF back to the client
//     // res.setHeader('Content-Type', 'application/pdf');
//     // res.send(filledInPdfBytes);
// }



// Define an empty array to store the strings
export const faecher11 = [];
let faecher11_0_4 = [];
let faecher11_0_5 = [];
export const faecher12 = [];
let faecher12_0_5 = [];

const buttons = document.querySelectorAll('.subject-button');
const inputFinishedButton = document.getElementById('input-finished');

const year11 = document.getElementById('year11'); 
const year12 = document.getElementById('year12');
const clearBtn = document.getElementById('clear-btn');

let activeArray11 = null;
let activeArray12 = null;

function displayArrayLength(array, elementId) {
    const arrayLengthElement = document.getElementById(elementId);
    arrayLengthElement.textContent = array.length;
}

displayArrayLength(faecher11,"array-length11");
displayArrayLength(faecher12,"array-length12");

// const faecher11length = document.getElementById("array-length11");
// faecher11length.textContent = faecher11.length;
// const faecher12length = document.getElementById("array-length12");
// faecher12length.textContent = faecher12.length;

function addToFaecher11() {
    const subject = this.dataset.subject;
    faecher11.push(subject);
    console.log(faecher11);
    this.disabled = true;
    const arrayDisplay11 = document.getElementById('array-display11');
    arrayDisplay11.textContent = faecher11.join(', ');
    // const faecher11length = document.getElementById("array-length11");
    // faecher11length.textContent = faecher11.length;
    displayArrayLength(faecher11,"array-length11");
}

function addToFaecher12() {
    const subject = this.dataset.subject;
    faecher12.push(subject);
    console.log(faecher12);
    this.disabled = true;
    const arrayDisplay12 = document.getElementById('array-display12');
    arrayDisplay12.textContent = faecher12.join(', ');
    // const faecher12length = document.getElementById("array-length12");
    // faecher12length.textContent = faecher12.length;
    displayArrayLength(faecher12,"array-length12");
}

function clearArray(faecherarray) {
    console.log(faecherarray);
    faecherarray.length = 0;
    buttons.forEach(button => {
        button.disabled = false;
    });
}

function displayArray(faecherarray) {
    console.log(faecherarray);
    if (faecherarray === faecher11) {
        const arrayDisplay11 = document.getElementById('array-display11');
        arrayDisplay11.textContent = faecherarray;
    }
    if (faecherarray === faecher12) {
        const arrayDisplay12 = document.getElementById('array-display12');
        arrayDisplay12.textContent = faecherarray;
    }
}

// User feedback entfernen
function clearLogs() {
    logs.length = 0;
    const consoleOutput = document.getElementById("console-output");
    consoleOutput.innerHTML = "";
    logsResult.length = 0;
    const consoleOutputResult = document.getElementById("console-output-result");
    consoleOutputResult.innerHTML = "";
}

// Versuch Eingabe für 11. Klasse
year11.addEventListener('click', function() {
    year12.disabled = false;
    buttons.forEach(button => {
        button.removeEventListener('click', addToFaecher12);
        button.addEventListener('click', addToFaecher11);
        activeArray11 = true;
        activeArray12 = false;
        // activate all buttons
        button.disabled = false;
        // disable buttons for input 11
        buttons.forEach(button => {
            if (faecher11.includes(button.dataset.subject)) {
                button.disabled = true;
            }
        });
        year11.disabled = true;
        
    });
    
    clearBtn.addEventListener('click', function() {
        if (activeArray11 === true && activeArray12 === false) {
            clearArray(faecher11);
            displayArray(faecher11);
            // const faecher11length = document.getElementById("array-length11");
            // faecher11length.textContent = faecher11.length;
            displayArrayLength(faecher11,"array-length11");            
            // User feedback entfernen
            clearLogs();
        }
    });
});

// remove last element of array
const removeBtn = document.getElementById('remove-btn');
removeBtn.addEventListener('click', function() {
    if (activeArray11 === true && activeArray12 === false) {
        faecher11.pop();
        console.log(faecher11);
        buttons.forEach(button => {
            if (!faecher11.includes(button.dataset.subject)) {
                button.disabled = false;
            }
        });
        const arrayDisplay = document.getElementById('array-display11');
        arrayDisplay.textContent = faecher11.join(', ');
        // const faecher11length = document.getElementById("array-length11");
        // faecher11length.textContent = faecher11.length;
        displayArrayLength(faecher11,"array-length11");
        
        // User feedback entfernen
        clearLogs();
    }else{
        faecher12.pop();
        console.log(faecher12);
        buttons.forEach(button => {
            if (!faecher12.includes(button.dataset.subject)) {
                button.disabled = false;
            }
        });
        const arrayDisplay12 = document.getElementById('array-display12');
        arrayDisplay12.textContent = faecher12.join(', ');
        // const faecher12length = document.getElementById("array-length12");
        // faecher12length.textContent = faecher12.length;
        displayArrayLength(faecher12,"array-length12");
        
        // User feedback entfernen
        clearLogs();
    }
});
//----------------------------------------------------------------------------------------

// Versuch Eingabe für 12. Klasse
year12.addEventListener('click', function() {
    year11.disabled = false;
    buttons.forEach(button => {
        button.removeEventListener('click', addToFaecher11);
        button.addEventListener('click', addToFaecher12);
        activeArray11 = false;
        activeArray12 = true;
        // activate all buttons
        button.disabled = false;
        // disable buttons for input 12
        buttons.forEach(button => {
            if (faecher12.includes(button.dataset.subject)) {
                button.disabled = true;
            }
        });
        year12.disabled = true;
    });
    
    
    //clear elements of array
    clearBtn.addEventListener('click', function() {
        if (activeArray11 === false && activeArray12 === true) {
            clearArray(faecher12);
            displayArray(faecher12);
            // const faecher12length = document.getElementById("array-length12");
            // faecher12length.textContent = faecher12.length;
            displayArrayLength(faecher12,"array-length12");
            
            // User feedback entfernen
            clearLogs();
        }
    });
});

let logs = [];
let logsResult = [];

// Neustart button
const clearAll = document.getElementById('clear-All');
clearAll.addEventListener('click', function() {
    
    faecher11.length = 0;
    faecher12.length = 0;
    buttons.forEach(button => {
        button.disabled = false;
    });

    displayArray(faecher11);
    // const arrayDisplay11 = document.getElementById('array-display11');
    // arrayDisplay11.textContent = '';
    displayArrayLength(faecher11,"array-length11");
    // const faecher11length = document.getElementById("array-length11");
    // faecher11length.textContent = faecher11.length;
    displayArray(faecher12);
    // const arrayDisplay12 = document.getElementById('array-display12');
    // arrayDisplay12.textContent = '';
    displayArrayLength(faecher12,"array-length12");
    // const faecher12length = document.getElementById("array-length12");
    // faecher12length.textContent = faecher12.length;
    buttons.forEach(button => {
        button.removeEventListener('click', addToFaecher11);
        button.removeEventListener('click', addToFaecher12);
    });
    year11.disabled = false;
    year12.disabled = false;
    
    // User feedback entfernen
    clearLogs();
});

// remove last element of array
// const removeBtn = document.getElementById('remove-btn');
// removeBtn.addEventListener('click', function() {
//     if (activeArray11 === false && activeArray12 === true) {
//         faecher12.pop();
//         console.log(faecher12);
//         buttons.forEach(button => {
//             if (!faecher12.includes(button.dataset.subject)) {
//                 button.disabled = false;
//             }
//         });
//         const arrayDisplay12 = document.getElementById('array-display12');
//         arrayDisplay12.textContent = faecher12.join(', ');
//     }
// });




//----------------------------------------------------------------------------------------

// // Add event listeners to the buttons for each subject
// buttons.forEach((button, index) => {
//     button.addEventListener('click', function() {
//         const subject = button.dataset.subject;
//         faecher11.push(subject);
//         console.log(faecher11);
//         button.disabled = true;
//         // if (index == 4) {
//         //     faecher11_0_5 = faecher11.slice(0, 5);
//         //     console.log(faecher11_0_5);
//         // }
//         const arrayDisplay = document.getElementById('array-display');
//         arrayDisplay.textContent = faecher11.join(', ');
//     });
// });

// // remove last element of array
// const removeBtn = document.getElementById('remove-btn');
// removeBtn.addEventListener('click', function() {
//     faecher11.pop();
//     console.log(faecher11);
//     buttons.forEach(button => {
//         if (!faecher11.includes(button.dataset.subject)) {
//             button.disabled = false;
//         }
//     });
//     const arrayDisplay = document.getElementById('array-display');
//     arrayDisplay.textContent = faecher11.join(', ');
// });

// // clear elements of array
// const clearBtn = document.getElementById('clear-btn');
// clearBtn.addEventListener('click', function() {
//     faecher11.length = 0;
//     buttons.forEach(button => {
//         button.disabled = false;
//     });
//     const arrayDisplay = document.getElementById('array-display');
//     arrayDisplay.textContent = '';
// });


// let faecher11_0_4 = faecher11.slice(0, 5);
// let faecher11_0_5 = faecher11.slice(0, 6);
// folgende brauchen wir nicht
// let faecher12_0_4 = faecher12.slice(0, 5);
// let faecher12_0_5 = faecher12.slice(0, 6);



export let regel_alle = false;

//.---------------------------------------------------------------------------------------



function logToPage(message) {
    logs.push(message);
}
function logToPageResult(message) {
    logsResult.push(message);
}

export const variableName = 'aahh';
// export const variableNam = 'some value';


// --- Regeln ---

// input finish button
inputFinishedButton.addEventListener('click', function() {
    
    console.log("---------------------------------------------------------------")

    logs.length = 1;
    logsResult.length = 1;

    let faecher11_0_5 = faecher11.slice(0, 5);
    let faecher11_0_4 = faecher11.slice(0, 4);
    // darunter macht Stelle 0,1,2
    let faecher11_0_3 = faecher11.slice(0, 3);
    // darunter nur für Sport Theorie
    let faecher11_5_End = faecher11.slice(5, faecher11.length);

    let faecher12_0_5 = faecher12.slice(0, 5);
    let faecher12_0_4 = faecher12.slice(0, 4);
    let faecher12_0_3 = faecher12.slice(0, 3);
    
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
    let regel13 = false;
    let regel14 = false;
    let regel15 = false;
    let regel16 = false;
    let regel17 = false;

    regel_alle = false;
    
    if (JSON.stringify(faecher11_0_5) === JSON.stringify(faecher12_0_5)) {
        regel1 = true;
    }
    if ((JSON.stringify(faecher11_0_4) === JSON.stringify(faecher12_0_4)) && faecher12_0_5[4] === "SportTheorie") {
        regel1 = true;
    }
    if ((JSON.stringify(faecher11_0_3) === JSON.stringify(faecher12_0_3)) && (faecher12_0_4[3] === "SportTheorie") && (faecher11_0_5[4] === faecher12_0_5[4])) {
        regel1 = true;
    }

    if(regel1 === true) {
        console.log("regel1 = true");
    }

    if(regel1 === false) {
        logToPage("LF1, LF2, 3.PF, 4.PF, 5.PK müssen in Jahren 11 und 12 gleich sein");
    }
    
    // ------------------
    // Regel 2...
    
    if (faecher11[0] === "Deutsch" || faecher11[0] === "Mathematik" || faecher11[0] === "Spanisch" || faecher11[0] === "Englisch" || faecher11[0] === "Physik" || faecher11[0] === "Chemie" || faecher11[0] === "Biologie" || faecher11[1] === "Deutsch" || faecher11[1] === "Mathematik" || faecher11[1] === "Spanisch" || faecher11[1] === "Englisch" || faecher11[1] === "Physik" || faecher11[1] === "Chemie" || faecher11[1] === "Biologie") {
        regel2 = true;
        console.log("regel2 = true");
    } else {
        logToPage("Eines der folgenden Faecher:'De, Ma, Sp, En, Ph, Ch, Bi' muss ein LF sein");
    }
    
    // ------------------
    // Regel 3...
    
    let MaDe1 = 0;
    for (let s of faecher11) {
        if (s === "Mathematik" || s === "Deutsch") {
            MaDe1++;
            if (MaDe1 === 2) {
                for (let sb of faecher12) {
                    if (sb === "Mathematik" || sb === "Deutsch") {
                        MaDe1++;
                    }
                }
            }
        }
    }
    
    if (MaDe1 === 4) {
        regel3 = true;
        console.log("regel3 = true");
    } else {
        logToPage("Mathe und Deutsch müssen belegt werden");
    }
    
    // ------------------
    // Regel 4...
    
    let FremdEn = 0;
    let FremdSp = 0;
    let FremdLa = 0;
    let FremdFr = 0;
    let FremdJa = 0;
    
    // Eine Fremdsprache in Q1, 2 und Q3, 4 belegt?
    for (let s of faecher11) {
        if (s === "Spanisch") {
            FremdSp++;
            for (let sb of faecher12) {
                if (sb === "Spanisch") {
                    FremdSp++;
                }
            }
        }
        if (s === "Englisch") {
            FremdEn++;
            for (let sb of faecher12) {
                if (sb === "Englisch") {
                    FremdEn++;
                }
            }
        }
        if (s === "Latein") {
            FremdLa++;
            for (let sb of faecher12) {
                if (sb === "Latein") {
                    FremdLa++;
                }
            }
        }
        if (s === "Französisch") {
            FremdFr++;
            for (let sb of faecher12) {
                if (sb === "Französisch") {
                    FremdFr++;
                }
            }
        }
        if (s === "Japanisch") {
            FremdJa++;
            for (let sb of faecher12) {
                if (sb === "Japanisch") {
                    FremdJa++;
                }
            }
        }
    }
    
    if (FremdSp === 2 || FremdEn === 2 || FremdLa === 2 || FremdFr === 2 || FremdJa === 2) {
        regel4 = true;
        console.log("regel4 = true")
    } else {
        logToPage("Es muss eine Fremdsprache über 4 Semester belegt werden");
    }
    
    // ------------------
    // Regel 5...
    
    let Fach2PW = 0;
    let Fach2Ge = 0;
    let Fach2Geo = 0;
    let Fach2WW = 0;
    let Fach2Ph = 0;
    let Af268K = 0;
    
    for (let s of faecher11) {
        if (s === "Politikwissenschaften") {
            Fach2PW++;
            for (let sb of faecher12) {
                if (sb === "Politikwissenschaften") {
                    Fach2PW++;
                    for (let ssb of faecher11){
                        if (ssb === "Geschichte" || ssb === "Geografie" || ssb === "Wirtschaftswissenschaften" || ssb === "Philosophie" || ssb === "StudiumBeruf") {
                            Af268K++;
                        }
                    }
                    for (let ssbb of faecher12) {
                        if (ssbb === "Geschichte" || ssbb === "Geografie" || ssbb === "Wirtschaftswissenschaften" || ssbb === "Philosophie") {
                            Af268K++;
                        }
                    }
                }
            }
        }
        
        if (s === "Geschichte") {
            Fach2Ge++;
            for (let sb of faecher12) {
                if (sb === "Geschichte") {
                    Fach2Ge++;
                    for (let ssb of faecher11) {
                        if (ssb === "Politikwissenschaften" || ssb === "Geografie" || ssb === "Wirtschaftswissenschaften" || ssb === "Philosophie" || ssb === "StudiumBeruf") {
                            Af268K++;
                        }
                    }
                    for (let ssbb of faecher12) {
                        if (ssbb === "Politikwissenschaften" || ssbb === "Geografie" || ssbb === "Wirtschaftswissenschaften" || ssbb === "Philosophie") {
                            Af268K++;
                        }
                    }
                }
            }
        }
        
        if (s === "Geografie") {
            Fach2Geo++;
            for (let sb of faecher12) {
                if (sb === "Geografie") {
                    Fach2Geo++;
                    for (let ssb of faecher11) {
                        if (ssb === "Politikwissenschaften" || ssb === "Geschichte" || ssb === "Wirtschaftswissenschaften" || ssb === "Philosophie" || ssb === "StudiumBeruf") {
                            Af268K++;
                        }
                    }
                    for (let ssbb of faecher12) {
                        if (ssbb === "Politikwissenschaften" || ssbb === "Geschichte" || ssbb === "Wirtschaftswissenschaften" || ssbb === "Philosophie") {
                            Af268K++;
                        }
                    }
                }
            }
        }
        
        if (s === "Wirtschaftswissenschaften") {
            Fach2WW++;
            for (let sb of faecher12) {
                if (sb === "Wirtschaftswissenschaften") {
                    Fach2WW++;
                    for (let ssb of faecher11) {
                        if (ssb === "Politikwissenschaften" || ssb === "Geschichte" || ssb === "Geografie" || ssb === "Philosophie" || ssb === "StudiumBeruf") {
                            Af268K++;
                        }
                    }
                    for (let ssbb of faecher12) {
                        if (ssbb === "Politikwissenschaften" || ssbb === "Geschichte" || ssbb === "Geografie" || ssbb === "Philosophie") {
                            Af268K++;
                        }
                    }
                }
            }
        }
        
        if (s === "Philosophie") {
            Fach2Ph++;
            for (let sb of faecher12) {
                if (sb === "Philosophie") {
                    Fach2Ph++;
                    for (let ssb of faecher11) {
                        if (ssb === "Politikwissenschaften" || ssb === "Geschichte" || ssb === "Geografie" || ssb === "Wirtschaftswissenschaften" || ssb === "StudiumBeruf") {
                            Af268K++;
                        }
                    }
                    for (let ssbb of faecher12) {
                        if (ssbb === "Politikwissenschaften" || ssbb === "Geschichte" || ssbb === "Geografie" || ssbb === "Wirtschaftswissenschaften") {
                            Af268K++;
                        }
                    }
                }
            }
        }
    }
    
    if (Af268K >= 1) {
        if (Fach2PW === 2 || Fach2WW === 2 || Fach2Ge === 2 || Fach2Geo === 2 || Fach2Ph === 2) {
            regel5 = true;
            console.log("regel5 = true")
        } else {
            logToPage("6-8 Semester müssen 2 Fächer des 2.AF (Ge,Geo,WW,PW,Phi) belegt werden");
        }
    } else {
        logToPage("6-8 Semester müssen 2 Fächer des 2.AF (Ge,Geo,WW,PW,Phi) belegt werden");
    }
    
    // ------------------
    // Regel 6...
    
    let FachBi = 0;
    let FachCh = 0;
    let FachPhy = 0;
    let BiPhCh = 0;
    // Eine Naturwissenschaft 4 Semester belegt?
    for (let s of faecher11) {
        if (s === "Biologie") {
            FachBi++;
            for (let sb of faecher12) {
                if (sb === "Biologie") {
                    FachBi++;
                    for (let ssb of faecher11) {
                        if (ssb === "Physik" || ssb === "Chemie") {
                            BiPhCh++;
                        }
                    }
                    for (let sbb of faecher12) {
                        if (sbb === "Physik" || sbb === "Chemie") {
                            BiPhCh++;
                        }
                    }
                }
            }
        }
        if (s === "Chemie") {
            FachCh++;
            for (let sb of faecher12) {
                if (sb === "Chemie") {
                    FachCh++;
                }
            }
        }
        if (s === "Physik") {
            FachPhy++;
            for (let sb of faecher12) {
                if (sb === "Physik") {
                    FachPhy++;
                }
            }
        }
    }
    if ((FachBi === 2 && BiPhCh >= 1) || FachPhy === 2 || FachCh === 2) {
        regel6 = true;
        console.log("regel6 = true")
    } else {
        logToPage("Eine Naturwissenschaft muss über 4 Semester belegt werden");
        logToPage("Bei der Wahl von Biologie müssen mindestens zusätzlich 2 Semester Chemie oder Physik belegt werden");
    }
    
    // ------------------
    // Regel 7...
    
    let FachSport = 0;
    // Einen Sport Kurs gewählt?
    for (let s of faecher11) {
        if (s === "Sport") {
            FachSport++;
            for (let sb of faecher12) {
                if (sb === "Sport") {
                    FachSport++;
                }
            }
        }
    }
    
    if (FachSport === 2) {
        regel7 = true;
        console.log("regel7 = true")
    } else {
        logToPage("Sport Praxis muss über 4 Semester belegt werden");
    }
    
    // ------------------
    // Regel 8...
    
    let noStBe = 0;

    for (let s of faecher12) {
        if (s !== "StudiumBeruf") {
            noStBe++;
        }
    }
    
    if (noStBe === faecher12.length) {
        regel8 = true;
        console.log("regel8 = true");
    } else {
        logToPage("Studium und Beruf darf nur im Semester 1&2 belegt werden");
    }
    
    // ------------------
    // Regel 9...
    
    let Pruef141 = 0;
    let Pruef142 = 0;
    let Pruef143 = 0;
    let Pruef144 = 0;
    
    for (let s of faecher11_0_4) {
        if (s === "Deutsch") {
            Pruef141++;
        }
        if (s === "Mathematik") {
            Pruef142++;
        }
        if (s === "Spanisch") {
            Pruef143++;
        }
        if (s === "Englisch") {
            Pruef144++;
        }
    }
    
    if ((Pruef141 + Pruef142 + Pruef143) >= 2 || (Pruef141 + Pruef142 + Pruef144) >= 2) {
        regel9 = true;
        console.log("regel9 = true");
    } else {
        logToPage("2 von 3 folgenden Fächern müssen als LF und 3., 4. PF belegt werden: Mathe, Deutsch und Fremdsprache");
    }
    
    // ------------------
    // Regel 10...
    
    let Pruef151 = 0;
    let Pruef152 = 0;
    let Pruef153 = 0;
    
    for (let s of faecher11_0_5) {
        if (s === "Deutsch" || s === "Englisch" || s === "Franzoesisch" ||  s === "Latein" || s=== "Spanisch" ||  s === "Japanisch" || s === "Musik" || s === "BildendeKunst" || s === "DarstellendesSpielTheater") {
            Pruef151++;
        }
        if (s === "Politikwissenschaften" || s === "Geschichte" || s === "Geografie" || s === "Wirtschaftswissenschaften" || s === "Philosophie") {
            Pruef152++;
        }
        if (s === "Mathematik" || s === "Physik" || s === "Chemie" || s === "Biologie" || s === "Informatik") {
            Pruef153++;
        }
    }
    
    if (Pruef151 >= 1 && Pruef152 >= 1 && Pruef153 >= 1) {
        regel10 = true;
        console.log("regel10 = true");
    } else {
        logToPage("Alle drei Af müssen von LK und 3,4,5 PK belegt werden, geschafft");
    }
    
    // ------------------
    // Regel 11...
    
    let KunstlerFach = 0;
    for (let s of faecher11) {
        if (s === "Musik" || s === "BildendeKunst" || s === "DarstellendesSpielTheater") {
            KunstlerFach++;
        }
    }
    for (let s of faecher12) {
        if (s === "Musik" || s === "BildendeKunst" || s === "DarstellendesSpielTheater") {
            KunstlerFach++;
        }
    }
    
    if (KunstlerFach >= 1) {
        regel11 = true;
        console.log("regel11 = true");
    } else {
        logToPage("Ein Künstlerisches Fach muss 2 Semester belegt werden");
    }
    
    // ------------------
    // Regel 12...
    
    let Ges2Sem = 0;
    for (let s of faecher12) {
        if (s === "Geschichte") {
            Ges2Sem++;
        }
    }
    
    if (Ges2Sem === 1) {
        regel12 = true;
        console.log("regel12 = true");
    } else {
        logToPage("Geschichte muss in der 12. Klasse belegt werden");
    }
    
    // ------------------
    // Regel 13...
    
    if (faecher11[2] === "Wirtschaftswissenschaften"){
        logToPage("Wirtschaftswissenschaften darf nicht als 3.PF belegt werden");
    }else{
        regel13 = true;
        console.log("regel13 = true")
    }
    
    // ------------------
    // Regel 14...
    
    let nosport = 0;
    for (let s of faecher11_0_5) {
        if (s !== "Sport") {
            nosport++;
        }
    }
    
    if (nosport === faecher11_0_5.length) {
        regel14 = true;
        console.log("regel14 = true");
    } else {
        console.log("Sport darf nicht als LF, PF und 5.PK gewählt werden");
    }
    
    // ------------------
    // Regel 15...
    
    if (faecher11[0] === "Politikwissenschaften" || faecher11[1] === "Politikwissenschaften"){
        logToPage("Politikwissenschaften darf nicht als Leistungsfach belegt werden");
    }else{
        regel15 = true;
        console.log("regel15 = true")
    }
    
    // ------------------
    // Regel 16...
    
    let noSpTh12 = 0;
    for (let s of faecher12_0_3) {
        if (s !== "SportTheorie"){
            noSpTh12++;
        }  
    }

    if (noSpTh12 === faecher12_0_3.length) {
        regel16 = true;
        console.log("regel16 = true");
    } else {
        logToPage("Sport Theorie darf nicht als LF und 3. PF und gewählt werden");
    }
    
    // ------------------
    // Regel 17...

    if ((faecher11.length === 10) && (faecher12.length == 10 || faecher12.length == 11|| faecher12.length == 12)) {
        regel17 = true;
    }
    if ((faecher11.length === 11) && (faecher12.length == 10 || faecher12.length == 11|| faecher12.length == 12)) {
        regel17 = true;
    }
    if ((faecher11.length === 12) && (faecher12.length == 10 || faecher12.length == 11|| faecher12.length == 12)) {
        regel17 = true;
    }

    if (regel17 === false) {
        logToPage("Anzahl der gewählten Kurse anpassen");
    }

    // ------------------
    // Regel 18...

    let noSpTh11 = 0;
    for (let s of faecher11_0_3) {
        if (s !== "SportTheorie") {
            noSpTh11++;
        }
    }

    for (let s of faecher11_5_End) {
        if (s !== "SportTheorie") {
            noSpTh11++;
        }
    }
    
    if (noSpTh11 === faecher11_0_3.length + faecher11_5_End.length) {
        regel8 = true;
        console.log("regel18 = true");
    } else {
        logToPage("SportTheorie darf im 1./2. Semester nur als 4.PF und als 5.PK belegt werden");
    }

    // ------------------

    // ------------------
    
    if (regel1 === true && regel2 === true && regel3 === true && regel4 === true && regel5 === true && regel6 === true && regel7 === true && regel8 === true && regel9 === true && regel10 === true && regel11 === true && regel12 === true && regel13 === true && regel14 === true && regel15 === true && regel16 === true && regel17 === true) {
        logToPageResult("    !!! ALLES GESCHAFFT !!!   ");
        logToPageResult("!!! Deine Wahl ist erlaubt !!!");
        regel_alle = true;
    } else {
        logToPageResult("Du solltest die Wahl deiner Kurse leider berichtigen.");
    }
    
    // ------------------
    
    // ------------------
    
    // User feedback entfernen
    const consoleOutputResult = document.getElementById("console-output-result");
    // consoleOutput.textContent = logs.join("\n");
    consoleOutputResult.innerHTML = logsResult.map(message => `${message}<br>`).join('--');
    
    // ------------------
    const consoleOutput = document.getElementById("console-output");
    // consoleOutput.textContent = logs.join("\n");
    consoleOutput.innerHTML = logs.map(message => `${message}<br>`).join('--');
    
    // ---------------------------------------------------------------------------------------------------------------
    
    
    // import { PDFDocument, StandardFonts } from 'pdf-lib';
    
    // async function fillInPdfForm() {
    //     const response = await fetch('https://example.com/data');
    //     const data = await response.json();
        
    //     // ...
    // }
    
    // fillInPdfForm();
});