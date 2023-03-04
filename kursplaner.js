// Define an empty array to store the strings
const faecher11 = [];
let faecher11_0_4 = [];
let faecher11_0_5 = [];
const faecher12 = [];
let faecher12_0_5 = [];

const buttons = document.querySelectorAll('.subject-button');
const inputFinishedButton = document.getElementById('input-finished');

const year11 = document.getElementById('year11'); 
const year12 = document.getElementById('year12');
const feedback = document.getElementById('feedback');


let activeArray11 = null;
let activeArray12 = null;


function addToFaecher11() {
    const subject = this.dataset.subject;
    faecher11.push(subject);
    console.log(faecher11);
    this.disabled = true;
    const arrayDisplay11 = document.getElementById('array-display11');
    arrayDisplay11.textContent = faecher11.join(', ');
}

function addToFaecher12() {
    const subject = this.dataset.subject;
    faecher12.push(subject);
    console.log(faecher12);
    this.disabled = true;
    const arrayDisplay12 = document.getElementById('array-display12');
    arrayDisplay12.textContent = faecher12.join(', ');
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

    const clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', function() {
        if (activeArray11 === true && activeArray12 === false) {
            faecher11.length = 0;
            buttons.forEach(button => {
                button.disabled = false;
            });
            const arrayDisplay = document.getElementById('array-display11');
            arrayDisplay.textContent = '';
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
    const clearBtn = document.getElementById('clear-btn');
    clearBtn.addEventListener('click', function() {
        if (activeArray11 === false && activeArray12 === true) {
            faecher12.length = 0;
            buttons.forEach(button => {
                button.disabled = false;
            });
            const arrayDisplay12 = document.getElementById('array-display12');
            arrayDisplay12.textContent = '';
        }
    });
});

// Neustart button
const clearAll = document.getElementById('clear-All');
clearAll.addEventListener('click', function() {
    
    faecher11.length = 0;
    faecher12.length = 0;
    buttons.forEach(button => {
        button.disabled = false;
    });
    const arrayDisplay11 = document.getElementById('array-display11');
    arrayDisplay11.textContent = '';
    const arrayDisplay12 = document.getElementById('array-display12');
    arrayDisplay12.textContent = '';
    buttons.forEach(button => {
        button.removeEventListener('click', addToFaecher11);
        button.removeEventListener('click', addToFaecher12);
    });
    year11.disabled = false;
    year12.disabled = false;
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

//.---------------------------------------------------------------------------------------




// --- Regeln ---

// input finish button
inputFinishedButton.addEventListener('click', function() {
    faecher11_0_4 = faecher11.slice(0, 4);
    faecher11_0_5 = faecher11.slice(0, 5);
    faecher12_0_5 = faecher12.slice(0, 5);
    
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
    
    if (JSON.stringify(faecher11_0_5) === JSON.stringify(faecher12_0_5)) {
        regel1 = true;
        console.log("regel1 = true");
    } else {
        console.log("LK1, LK2, 3.-5.PK muessen in Jahren 11 und 12 gleich sein, nicht geschafft");
    }
    
    // ------------------
    // Regel 2...
    
    if (faecher11[0] === "Deutsch" || faecher11[0] === "Mathematik" || faecher11[0] === "Spanisch" || faecher11[0] === "Englisch" || faecher11[0] === "Physik" || faecher11[0] === "Chemie" || faecher11[0] === "Biologie" || faecher11[1] === "Deutsch" || faecher11[1] === "Mathematik" || faecher11[1] === "Spanisch" || faecher11[1] === "Englisch" || faecher11[1] === "Physik" || faecher11[1] === "Chemie" || faecher11[1] === "Biologie") {
        regel2 = true;
        console.log("regel2 = true");
    } else {
        console.log("Eines der folgenden Faecher:'De, Ma, Sp, En, Ph, Ch, Bi' muss ein LK sein");
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
        console.log("Mathe und Deutsch müssen belegt werden, nicht geschafft");
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
        console.log("Es muss eine Fremdsprache über 4 Semester belegt werden, nicht geschafft");
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
            console.log("6-8 Semester muessen 2 Faecher des 2.AF belegt werden, nicht geschafft");
        }
    } else {
        console.log("6-8 Semester muessen 2 Faecher des 2.AF belegt werden, nicht geschafft");
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
        console.log("Eine Naturwissenschaft muss über 4 Semester belegt werden, nicht geschafft");
        console.log("Bei der Wahl von Biologie muessen mindestens zusaetzlich 2 Semester Chemie oder Physik belegt werden");
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
        console.log("Sport Praxis muss über 4 Semester belegt werden, nicht geschafft");
    }
    
    // ------------------
    // Regel 8...
    
    let nostsp = 0;
    for (let s of faecher11) {
        if (s !== "SportTheorie") {
            nostsp++;
        }
    }
    
    for (let s of faecher12) {
        if (s !== "StudiumBeruf") {
            nostsp++;
        }
    }
    
    if (nostsp === faecher11.length + faecher12.length) {
        regel8 = true;
        console.log("regel8 = true");
    } else {
        console.log("Studium und Beruf darf nur im Semester 1. und 2. und SportTheorie darf nur im 3. und 4. belegt werden, nicht geschafft");
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
        console.log("2 von 3 folgenden Faechern müssen als LK und 3., 4. PF belegt werden: Mathe, Deutsch und Fremdsprache, nicht geschafft");
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
        console.log("Alle drei Af muessen von LK und 3,4,5 PK belegt werden, geschafft");
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
        console.log("Ein Kunstlerisches Fach muss 2 Semester belegt werden, nicht geschafft");
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
        console.log("Geschichte muss in der 12. Klasse belegt werden, geschafft");
    }
    
    // ------------------
    // Regel 13...
    
    if (faecher11[2] === "Wirtschaftswissenschaften"){
        console.log("Wirtschaftswissenschaften darf nicht als 3.PF belegt werden")
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

    // ------------------
    
    if (regel1 === true && regel2 === true && regel3 === true && regel4 === true && regel5 === true && regel6 === true && regel7 === true && regel8 === true && regel9 === true && regel10 === true && regel11 === true && regel12 === true && regel13 === true && regel14 === true) {
        console.log("    !!! ALLES GESCHAFFT !!!   ");
        console.log("!!! Deine Wahl ist erlaubt !!!");
    } else {
        console.log("Fehler, du musst deine Wahl deiner Kurse leider berichtigen");
    }
    
    // ------------------
    
    // ------------------
    
});