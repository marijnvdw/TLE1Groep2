import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyB2GMGVf7U4xJV95W-ah1UosIEoC-WX44E";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "";

try {
    const result = await model.generateContent(prompt);
    console.log(result.response.text());
    //return result.response.text()
} catch (error) {
    console.error("Error generating text:", error);
    //return error
}