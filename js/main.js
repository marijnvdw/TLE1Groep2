let trueRating;
let progressExecuted = false;
function newsCheck() {
    trueRating = Math.floor(Math.random() * 101);
    console.log(trueRating)
}

newsCheck();

function startProgress() {
    if (progressExecuted) return;

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