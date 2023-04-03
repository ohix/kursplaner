
import { faecher11 } from './kursplaner.js';
// console.log(faecher11)
import { faecher12 } from './kursplaner.js';
// console.log(faecher12)
import { regel_alle } from './kursplaner.js';
// console.log(faecher12)

const { degrees, PDFDocument, rgb, StandardFonts } = PDFLib

const modifyPdf = document.getElementById('pdf');
modifyPdf.addEventListener('click', function() {
    
    async function modifyPdf() {
        
        // Fetch an existing PDF document
        // const url = 'http://127.0.0.1:5500/Kursplaner_Wasserzeichen.pdf'
        const url = './Kursplaner_Wasserzeichen.pdf'
        const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
        
        // Load a PDFDocument from the existing PDF bytes
        const pdfDoc = await PDFDocument.load(existingPdfBytes)
        
        // Embed the Helvetica font
        const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
        
        // Get the first page of the document
        const pages = pdfDoc.getPages()
        const firstPage = pages[0]
        
        // Get the width and height of the first page
        const { width, height } = firstPage.getSize()
        
        // Draw a string of text diagonally across the first page
        // firstPage.drawText('This text was added with JavaScript!', {
        //     // x von links nach rechts größer
        //     x: 10,
        //     // y von oben nach unten kleiner
        //     y: height / 2 + 300,
        //     size: 50,
        //     font: helveticaFont,
        //     color: rgb(0.95, 0.1, 0.1),
        //     rotate: degrees(-45),
        // })
        
        // 11. Klasse Fächer markieren
        for (let s of faecher11) {
            if (s === "Deutsch") {
                firstPage.drawText('X',{x: 300,y: 666,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 666,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Englisch") {
                firstPage.drawText('X',{x: 300,y: 644,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 644,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Franzoesisch") {
                firstPage.drawText('X',{x: 300,y: 621,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 621,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Latein") {
                firstPage.drawText('X',{x: 300,y: 598,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 598,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Spanisch") {
                firstPage.drawText('X',{x: 300,y: 575,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 575,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Japanisch") {
                firstPage.drawText('X',{x: 300,y: 552,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 552,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Musik") {
                firstPage.drawText('X',{x: 300,y: 529,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 529,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "BildendeKunst") {
                firstPage.drawText('X',{x: 300,y: 506,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 506,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "DarstellendesSpielTheater") {
                firstPage.drawText('X',{x: 300,y: 483,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 483,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Politikwissenschaften") {
                firstPage.drawText('X',{x: 300,y: 460,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 460,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Geschichte") {
                firstPage.drawText('X',{x: 300,y: 437,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 437,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Geografie") {
                firstPage.drawText('X',{x: 300,y: 414,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 414,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Wirtschaftswissenschaften") {
                firstPage.drawText('X',{x: 300,y: 391,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 391,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Philosophie") {
                firstPage.drawText('X',{x: 300,y: 368,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 368,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "StudiumBeruf") {
                firstPage.drawText('X',{x: 300,y: 345,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 345,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Mathematik") {
                firstPage.drawText('X',{x: 300,y: 322,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 322,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Physik") {
                firstPage.drawText('X',{x: 300,y: 299,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 299,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Chemie") {
                firstPage.drawText('X',{x: 300,y: 276,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 276,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Biologie") {
                firstPage.drawText('X',{x: 300,y: 253,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 253,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Informatik") {
                firstPage.drawText('X',{x: 300,y: 229,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 229,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "SportTheorie") {
                firstPage.drawText('X',{x: 300,y: 115,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 328,y: 115,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
        }
        // -------------------------
        // 12. Klasse Fächer markieren
        for (let s of faecher12) {
            if (s === "Deutsch") {
                firstPage.drawText('X',{x: 356,y: 666,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 666,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Englisch") {
                firstPage.drawText('X',{x: 356,y: 644,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 644,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Franzoesisch") {
                firstPage.drawText('X',{x: 356,y: 621,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 621,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Latein") {
                firstPage.drawText('X',{x: 356,y: 598,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 598,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Spanisch") {
                firstPage.drawText('X',{x: 356,y: 575,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 575,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Japanisch") {
                firstPage.drawText('X',{x: 356,y: 552,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 552,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Musik") {
                firstPage.drawText('X',{x: 356,y: 529,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 529,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "BildendeKunst") {
                firstPage.drawText('X',{x: 356,y: 506,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 506,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "DarstellendesSpielTheater") {
                firstPage.drawText('X',{x: 356,y: 483,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 483,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Politikwissenschaften") {
                firstPage.drawText('X',{x: 356,y: 460,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 460,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Geschichte") {
                firstPage.drawText('X',{x: 356,y: 437,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 437,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Geografie") {
                firstPage.drawText('X',{x: 356,y: 414,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 414,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Wirtschaftswissenschaften") {
                firstPage.drawText('X',{x: 356,y: 391,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 391,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Philosophie") {
                firstPage.drawText('X',{x: 356,y: 368,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 368,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Mathematik") {
                firstPage.drawText('X',{x: 356,y: 322,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 322,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Physik") {
                firstPage.drawText('X',{x: 356,y: 299,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 299,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Chemie") {
                firstPage.drawText('X',{x: 356,y: 276,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 276,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Biologie") {
                firstPage.drawText('X',{x: 356,y: 253,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 253,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "Informatik") {
                firstPage.drawText('X',{x: 356,y: 229,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 229,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
            if (s === "SportTheorie") {
                firstPage.drawText('X',{x: 356,y: 115,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
                firstPage.drawText('X',{x: 384,y: 115,size: 25,font: helveticaFont,color: rgb(0, 0, 0),})
            }
        }
        // -------------------------
        // LK1 Klasse Fächer markieren
        
        if (faecher11[0] === "Deutsch") {
            firstPage.drawText('LF',{x: 238,y: 668,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Englisch") {
            firstPage.drawText('LF',{x: 238,y: 644,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Franzoesisch") {
            firstPage.drawText('LF',{x: 238,y: 621,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Latein") {
            firstPage.drawText('LF',{x: 238,y: 598,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Spanisch") {
            firstPage.drawText('LF',{x: 238,y: 575,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Japanisch") {
            firstPage.drawText('LF',{x: 238,y: 552,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Musik") {
            firstPage.drawText('LF',{x: 238,y: 529,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "BildendeKunst") {
            firstPage.drawText('LF',{x: 238,y: 506,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "DarstellendesSpielTheater") {
            firstPage.drawText('LF',{x: 238,y: 483,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Politikwissenschaften") {
            firstPage.drawText('LF',{x: 238,y: 460,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Geschichte") {
            firstPage.drawText('LF',{x: 238,y: 437,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Geografie") {
            firstPage.drawText('LF',{x: 238,y: 414,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Wirtschaftswissenschaften") {
            firstPage.drawText('LF',{x: 238,y: 391,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Philosophie") {
            firstPage.drawText('LF',{x: 238,y: 368,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Mathematik") {
            firstPage.drawText('LF',{x: 238,y: 322,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Physik") {
            firstPage.drawText('LF',{x: 238,y: 299,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Chemie") {
            firstPage.drawText('LF',{x: 238,y: 276,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Biologie") {
            firstPage.drawText('LF',{x: 238,y: 253,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[0] === "Informatik") {
            firstPage.drawText('LF',{x: 238,y: 229,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        // if (faecher11[0] === "SportTheorie") {
        //     firstPage.drawText('LF',{x: 238,y: 115,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        // }
        // -------------------------
        // LK2 Klasse Fächer markieren
        
        if (faecher11[1] === "Deutsch") {
            firstPage.drawText('LF',{x: 238,y: 668,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Englisch") {
            firstPage.drawText('LF',{x: 238,y: 644,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Franzoesisch") {
            firstPage.drawText('LF',{x: 238,y: 621,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Latein") {
            firstPage.drawText('LF',{x: 238,y: 598,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Spanisch") {
            firstPage.drawText('LF',{x: 238,y: 575,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Japanisch") {
            firstPage.drawText('LF',{x: 238,y: 552,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Musik") {
            firstPage.drawText('LF',{x: 238,y: 529,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "BildendeKunst") {
            firstPage.drawText('LF',{x: 238,y: 506,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "DarstellendesSpielTheater") {
            firstPage.drawText('LF',{x: 238,y: 483,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Politikwissenschaften") {
            firstPage.drawText('LF',{x: 238,y: 460,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Geschichte") {
            firstPage.drawText('LF',{x: 238,y: 437,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Geografie") {
            firstPage.drawText('LF',{x: 238,y: 414,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Wirtschaftswissenschaften") {
            firstPage.drawText('LF',{x: 238,y: 391,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Philosophie") {
            firstPage.drawText('LF',{x: 238,y: 368,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Mathematik") {
            firstPage.drawText('LF',{x: 238,y: 322,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Physik") {
            firstPage.drawText('LF',{x: 238,y: 299,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Chemie") {
            firstPage.drawText('LF',{x: 238,y: 276,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Biologie") {
            firstPage.drawText('LF',{x: 238,y: 253,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[1] === "Informatik") {
            firstPage.drawText('LF',{x: 238,y: 229,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        // if (faecher11[1] === "SportTheorie") {
        //     firstPage.drawText('LF',{x: 238,y: 115,size: 17,font: helveticaFont,color: rgb(0, 0, 0),})
        // }
        
        // -------------------------
        // PF3 Klasse Fächer markieren
        
        if (faecher11[2] === "Deutsch") {
            firstPage.drawText('3.PF',{x: 238,y: 668,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Englisch") {
            firstPage.drawText('3.PF',{x: 238,y: 644,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Franzoesisch") {
            firstPage.drawText('3.PF',{x: 238,y: 621,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Latein") {
            firstPage.drawText('3.PF',{x: 238,y: 598,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Spanisch") {
            firstPage.drawText('3.PF',{x: 238,y: 575,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Japanisch") {
            firstPage.drawText('3.PF',{x: 238,y: 552,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Musik") {
            firstPage.drawText('3.PF',{x: 238,y: 529,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "BildendeKunst") {
            firstPage.drawText('3.PF',{x: 238,y: 506,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "DarstellendesSpielTheater") {
            firstPage.drawText('3.PF',{x: 238,y: 483,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Politikwissenschaften") {
            firstPage.drawText('3.PF',{x: 238,y: 460,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Geschichte") {
            firstPage.drawText('3.PF',{x: 238,y: 437,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Geografie") {
            firstPage.drawText('3.PF',{x: 238,y: 414,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Wirtschaftswissenschaften") {
            firstPage.drawText('3.PF',{x: 238,y: 391,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Philosophie") {
            firstPage.drawText('3.PF',{x: 238,y: 368,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Mathematik") {
            firstPage.drawText('3.PF',{x: 238,y: 322,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Physik") {
            firstPage.drawText('3.PF',{x: 238,y: 299,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Chemie") {
            firstPage.drawText('3.PF',{x: 238,y: 276,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Biologie") {
            firstPage.drawText('3.PF',{x: 238,y: 253,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[2] === "Informatik") {
            firstPage.drawText('3.PF',{x: 238,y: 229,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        // if (faecher11[2] === "SportTheorie") {
        //     firstPage.drawText('3.PF',{x: 238,y: 110,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        // }

        // -------------------------
        // PF4 Klasse Fächer markieren
        
        if (faecher11[3] === "Deutsch") {
            firstPage.drawText('4.PF',{x: 238,y: 668,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Englisch") {
            firstPage.drawText('4.PF',{x: 238,y: 644,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Franzoesisch") {
            firstPage.drawText('4.PF',{x: 238,y: 621,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Latein") {
            firstPage.drawText('4.PF',{x: 238,y: 598,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Spanisch") {
            firstPage.drawText('4.PF',{x: 238,y: 575,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Japanisch") {
            firstPage.drawText('4.PF',{x: 238,y: 552,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Musik") {
            firstPage.drawText('4.PF',{x: 238,y: 529,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "BildendeKunst") {
            firstPage.drawText('4.PF',{x: 238,y: 506,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "DarstellendesSpielTheater") {
            firstPage.drawText('4.PF',{x: 238,y: 483,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Politikwissenschaften") {
            firstPage.drawText('4.PF',{x: 238,y: 460,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Geschichte") {
            firstPage.drawText('4.PF',{x: 238,y: 437,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Geografie") {
            firstPage.drawText('4.PF',{x: 238,y: 414,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Wirtschaftswissenschaften") {
            firstPage.drawText('4.PF',{x: 238,y: 391,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Philosophie") {
            firstPage.drawText('4.PF',{x: 238,y: 368,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Mathematik") {
            firstPage.drawText('4.PF',{x: 238,y: 322,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Physik") {
            firstPage.drawText('4.PF',{x: 238,y: 299,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Chemie") {
            firstPage.drawText('4.PF',{x: 238,y: 276,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Biologie") {
            firstPage.drawText('4.PF',{x: 238,y: 253,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "Informatik") {
            firstPage.drawText('4.PF',{x: 238,y: 229,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[3] === "SportTheorie") {
            firstPage.drawText('4.PF',{x: 238,y: 114,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }

        // -------------------------
        // PF5 Klasse Fächer markieren
        
        if (faecher11[4] === "Deutsch") {
            firstPage.drawText('5.PF',{x: 238,y: 668,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Englisch") {
            firstPage.drawText('5.PF',{x: 238,y: 644,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Franzoesisch") {
            firstPage.drawText('5.PF',{x: 238,y: 621,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Latein") {
            firstPage.drawText('5.PF',{x: 238,y: 598,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Spanisch") {
            firstPage.drawText('5.PF',{x: 238,y: 575,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Japanisch") {
            firstPage.drawText('5.PF',{x: 238,y: 552,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Musik") {
            firstPage.drawText('5.PF',{x: 238,y: 529,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "BildendeKunst") {
            firstPage.drawText('5.PF',{x: 238,y: 506,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "DarstellendesSpielTheater") {
            firstPage.drawText('5.PF',{x: 238,y: 483,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Politikwissenschaften") {
            firstPage.drawText('5.PF',{x: 238,y: 460,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Geschichte") {
            firstPage.drawText('5.PF',{x: 238,y: 437,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Geografie") {
            firstPage.drawText('5.PF',{x: 238,y: 414,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Wirtschaftswissenschaften") {
            firstPage.drawText('5.PF',{x: 238,y: 391,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Philosophie") {
            firstPage.drawText('5.PF',{x: 238,y: 368,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Mathematik") {
            firstPage.drawText('5.PF',{x: 238,y: 322,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Physik") {
            firstPage.drawText('5.PF',{x: 238,y: 299,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Chemie") {
            firstPage.drawText('5.PF',{x: 238,y: 276,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Biologie") {
            firstPage.drawText('5.PF',{x: 238,y: 253,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "Informatik") {
            firstPage.drawText('5.PF',{x: 238,y: 229,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }
        if (faecher11[4] === "SportTheorie") {
            firstPage.drawText('5.PF',{x: 238,y: 114,size: 10,font: helveticaFont,color: rgb(0, 0, 0),})
        }


        // ---------------------------------------------------------------------------------------------------------
        // Wochenstunden 11 ausrechnen und notieren
        //const faecher11Length = faecher11.length.toString();
        
        const faecher11Length = faecher11.length;
        let Wochenstunden11 = 0;
        if (faecher11Length === 10) {
            Wochenstunden11=Wochenstunden11+33;
        }else if (faecher11Length === 11){
            Wochenstunden11=36;
        }else if (faecher11Length === 12){
            Wochenstunden11=39;
        }else{
            Wochenstunden11='Error'
            // console.log("Error: in 11 nicht korrekte Anzahl Wochenstunden");
        }
        
        const Wochenstunden11String = Wochenstunden11.toString();
        
        // console.log(Wochenstunden11String);
        firstPage.drawText(Wochenstunden11String,{x: 300,y: 92,size: 20,font: helveticaFont,color: rgb(0, 0, 0),})
        firstPage.drawText(Wochenstunden11String,{x: 325,y: 92,size: 20,font: helveticaFont,color: rgb(0, 0, 0),})

        //---------------------
        // Wochenstunden 12ausrechnen und notieren
        const faecher12Length = faecher12.length;
        let Wochenstunden12 = 0;
        if (faecher12Length === 10) {
            Wochenstunden12=Wochenstunden12+33;
        }else if (faecher12Length === 11){
            Wochenstunden12=36;
        }else if (faecher12Length === 12){
            Wochenstunden12=39;
        }else{
            Wochenstunden12='Error'
            // console.log("Error: in 12 nicht korrekte Anzahl Wochenstunden");
        }
        
        const Wochenstunden12String = Wochenstunden12.toString();
        
        // console.log(Wochenstunden12);
        firstPage.drawText(Wochenstunden12String,{x: 355,y: 92,size: 20,font: helveticaFont,color: rgb(0, 0, 0),})
        firstPage.drawText(Wochenstunden12String,{x: 380,y: 92,size: 20,font: helveticaFont,color: rgb(0, 0, 0),})
        
        //---------------------------------------
        // Wochenstunden ausrechnen und notieren

        let Wochenstundeninsgesamt=Wochenstunden11+Wochenstunden12;
        const WochenstundeninsgesamtString = Wochenstundeninsgesamt.toString();

        firstPage.drawText(WochenstundeninsgesamtString,{x: 267,y: 92,size: 20,font: helveticaFont,color: rgb(0, 0, 0),})

        // --------------------------------------------------------------------------------------------------------------------
        
        
        
        if (regel_alle === true) {
            
            // Serialize the PDFDocument to bytes (a Uint8Array)
            const pdfBytes = await pdfDoc.save()
            
            // Trigger the browser to download the PDF document
            download(pdfBytes, "Deine Kurswahl.pdf", "application/pdf");
        }else{
            console.log("Falsche Eingabe, deshalb kein Download")
        }
    }
    modifyPdf();
    
});


// modifyPdf();