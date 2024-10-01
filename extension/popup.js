import { GetFromAi } from './js/prompt.js';

const browser = window.browser || window.chrome;

document.addEventListener("DOMContentLoaded", function () {

   async function urlHandler(params) {
        browser.tabs.query({ active: true, currentWindow: true }, tabs => {

            let url = tabs[0].url;
            console.log(url);

            browser.storage.local.set({ currentUrl: url })
                .then(() => {
                    console.log("URL stored:", url);
                })
                .catch((error) => {
                    console.error("Error storing URL:", error);
                });
        });
    }

    async function scanHandler(params) {
        try {
            // URL ophalen uit lokale storage
            const data = await browser.storage.local.get("currentUrl");
            const url = data.currentUrl;

            if (!url) {
                console.error("Geen URL gevonden in storage.");
                return;
            }

            console.log("Verzenden naar AI:", url);

            // AI-aanroep via fetchAiData, gebruik makend van de opgeslagen URL
            fetchAiData(url);
        } catch (error) {
            console.error("Fout bij ophalen van URL:", error);
        }
    }

    document.getElementById("clickMe").addEventListener("click", function () {
        urlHandler()
        scanHandler()
    })

    async function fetchAiData(url) {
        try {
            // Roep de prompt aan via de GetFromAi functie
            const [score, result] = await GetFromAi(url);
            console.log("Score van AI:", score);
            console.log("Volledige resultaat van AI:", result);

            // Score gebruiken om de progressie in te stellen
            startProgress(score);

            // Resultaat opslaan in de database
            insertDatabase(url, score, result.response.text());

        } catch (error) {
            console.error("Fout bij ophalen van data van AI:", error);
        }
    }

    function insertDatabase(link, inputScore, inputResponse) {
        $.post("./php/insert.php",
            {
                url: link,
                score: inputScore,
                response: inputResponse,
            },
            function (data, status) {
                console.log("Database update status:", status);
            }
        );
    }

    // Functie om de score weer te geven (deze bestaat al in je code)
    function startProgress(score) {
        const fillElement = document.getElementById("fill");
        const resultDiv = document.getElementById('response');
        let resultText = "Bezig met scannen...";
        let strokeColor = "#e0e0e0";

        if (score < 25) {
            resultText = "Je nieuwsbron is niet te vertrouwen!";
            strokeColor = "#ff0000";
        } else if (score < 50) {
            resultText = "Vertrouw dit op eigen risico!";
            strokeColor = "#ff8000";
        } else if (score < 75) {
            resultText = "Redelijke nieuwsbron, maar wees voorzichtig!";
            strokeColor = "#ffff00";
        } else if (score <= 100) {
            resultText = "Je nieuwsbron is goed te vertrouwen!";
            strokeColor = "#00ff00";
        } else {
            resultText = "Ongeldige waarde voor de score.";
        }

        resultDiv.innerText = resultText;

        const radius = 45;
        const circumference = 2 * Math.PI * radius;
        fillElement.style.strokeDasharray = circumference;
        const offset = circumference - (score / 100) * circumference;

        fillElement.style.stroke = strokeColor;
        fillElement.style.strokeDashoffset = offset;
    }

});
    


// let articlePercentage = 40
// let sourcePercentage = 60



// document.getElementById("clickMe").addEventListener("click", function () {
    
//     urlHandler()

//     const circles = document.querySelectorAll(".circle");
    
//     circles.forEach(circle => {
//         circle.classList.toggle("hidden");
//     });

//     const textBox = document.querySelectorAll(".textBoxContainer");
//     textBox.forEach(textBoxContainer => {
//         textBoxContainer.classList.toggle("hiddenBox");
//     });
   
// });

// function percentageChanger(params) {
//    sourceCircle = document.getElementById('source-circle')
//    sourceCircle.setAttribute("stroke-dasharray", `${sourcePercentage}, 100`);
//     if (sourcePercentage <= 24) {
//         sourceCircle.style.stroke = 'red';
//     } else if (sourcePercentage <= 49) {
//         sourceCircle.style.stroke = 'orange'
//     } else if (sourcePercentage <= 74) {
//         sourceCircle.style.stroke = 'yellow'
//      } else if (sourcePercentage <= 89) {
//             sourceCircle.style.stroke = 'lightgreen'
//     } else {
//         sourceCircle.style.stroke = 'green'
//     }

//     let percentageInTheSourceCircle = document.getElementById("sourcePercentage")
//     percentageInTheSourceCircle.innerHTML = `${sourcePercentage}%`


//     articleCircle = document.getElementById('article-circle')
//     articleCircle.setAttribute("stroke-dasharray", `${articlePercentage}, 100`);
//     if (articlePercentage <= 24) {
//         articleCircle.style.stroke = 'red';
//     } else if (articlePercentage <= 49) {
//         articleCircle.style.stroke = 'orange'
//     } else if (articlePercentage <= 74) {
//         articleCircle.style.stroke = 'yellow'
    
//     }else if (articlePercentage <= 89) {
//             articleCircle.style.stroke = 'lightgreen'
        
//     } else {
//         articleCircle.style.stroke = 'green'
//     }
    
//     let percentageInTheArticleCircle = document.getElementById("articlePercentage")
//     percentageInTheArticleCircle.innerHTML = `${articlePercentage}%`

    
// }


// percentageChanger()



// });