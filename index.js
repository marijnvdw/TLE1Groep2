console.log('hi');
import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyB2GMGVf7U4xJV95W-ah1UosIEoC-WX44E";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
const button = document.getElementById('myButton');
const prompt = document.getElementById('prompt');
button.addEventListener('click', async function()
{
    // Code to execute when the button is clicked
    console.log(prompt.value);
    try {
        const result = await model.generateContent("Hoe betrouwbaar is deze website:"+ prompt.value+". Geef me een waarde van 0 / 100, als format: 'Score: __ / 100', zet dit aan het begin van je bericht");
        console.log(result.response.text());
        // const scoreString = 'Score: 68 / 100';
        // const scoreMatch = scoreString.match(/\d+/); // scoreMatch = ['68']
        // const score = scoreMatch[0]; // score = '68'
        console.log(await score)

        //console.log(result.response.text());
        //return result.response.text()
    } catch (error) {
        console.error("Error generating text:", error);
        //return error
    }
});

