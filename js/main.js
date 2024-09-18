import { GoogleGenerativeAI } from "@google/generative-ai";

let trueRating;
let progressExecuted = false;

// Q: API Segment
const apiKey = "rip";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const button = document.getElementById('myButton');
const prompt = document.getElementById('prompt');
button.addEventListener('click', async function () {
    // Code to execute when the button is clicked
    console.log(prompt.value);
    try {
        const result = await model.generateContent("Hoe betrouwbaar is deze website:" + prompt.value + ". Geef me een waarde van 0 / 100, als format: 'Score: __ / 100', zet dit aan het begin van je bericht");
        console.log(result)

        console.log(result.response.text());
        // const scoreString = 'Score: 68 / 100';
        // const scoreMatch = scoreString.match(/\d+/); // scoreMatch = ['68']
        // const score = scoreMatch[0]; // score = '68'
        const str = result.response.text();
        const match = str.match(/\d+/); // Matches the first sequence of digits

        if (match) {
            const firstNumber = parseInt(match[0], 10); // Convert the match to an integer
            console.log(firstNumber);
            let score = firstNumber;
            startProgress(score)
        } else {
            console.log("No number found.");
        }

        //console.log(result.response.text());
        //return result.response.text()
    } catch (error) {
        console.error("Error generating text:", error);
        //return error
    }
});

// API Segment End

function newsCheck() {
    trueRating = Math.floor(Math.random() * 101);
    console.log(trueRating)
}

newsCheck();

function startProgress(score) {
    if (progressExecuted) return;
    trueRating = score;
    const fillElement = document.getElementById("fill");
    const div = document.getElementById('result');
    let resultText = "Bezig met scannen...";
    let strokeColor = "#e0e0e0"; // Default color for invalid rating

    if (trueRating < 25) {
        resultText = "Je nieuwsbron is niet te vertrouwen!";
        strokeColor = "#ff0000"; // Red for low trust
    } else if (trueRating < 50) {
        resultText = "Vertouw dit op je eigen risico, er zitten fouten hierin!";
        strokeColor = "#ff8000"; // Orange for medium-low trust
    } else if (trueRating < 75) {
        resultText = "Redelijke nieuwsbron, maar let toch op voor enige fouten!";
        strokeColor = "#ffff00"; // Yellow for medium trust
    } else if (trueRating <= 100) {
        resultText = "Je nieuwsbron is goed te vertrouwen!";
        strokeColor = "#00ff00"; // Green for high trust
    } else {
        resultText = "Ongeldige waarde voor trueRating."; // Fallback for unexpected values
    }

    console.log(trueRating);
    console.log(resultText);
    div.innerText = resultText;

    // Calculate the stroke-dashoffset
    const radius = 45; // The radius of the circle
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (trueRating / 100) * circumference;

    fillElement.style.stroke = strokeColor; // Update stroke color
    fillElement.style.strokeDashoffset = offset; // Update stroke-dashoffset for progress

    progressExecuted = true;
}