window.addEventListener('load', init);

let testExplanation
let testArticles
let testResults
let buttonAI
let buttonHuman

let articlesData
//articleNumber wordt gebruikt om het artikel aan te duiden dat momenteel op de pagina staat.
let articleNumber = 0

let correctGuesses = 0


function init() {
    elementLoader()
    ajaxRequest('services/webservice/index.php', jsonLoader)
}

function ajaxRequest(url, successHandler) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            if (typeof data.error !== 'undefined') {
                throw new Error(data.error.message);
            }
            successHandler(data);
        })
}

function elementLoader() {
    // testExplanation = document.getElementById("testExplanation")
    // testArticles = document.getElementById("testArticles")
    // testResults = document.getElementById("testResults")

    buttonAI = document.getElementById("chooseAI")
    buttonAI.addEventListener('click', function () {
        nextArticleButtonPress(false);
    });

    buttonHuman = document.getElementById("chooseHuman")
    buttonHuman.addEventListener('click', function () {
        nextArticleButtonPress(true);
    });
}

function jsonLoader(data) {
    console.log(data)
    articlesData = data
    loadFirstArticle()
}

function loadFirstArticle() {
    let articleData = articlesData[articleNumber]

    articleTitle = document.getElementById("articleTitle")
    articleTitle.innerHTML = articleData['name']

    articleText = document.getElementById("articleText")
    articleText.innerHTML = articleData['text']

    articleImage = document.getElementById("articleImage")
    articleImage.src = articleData['image']

    questionCounter = document.getElementById("questionCounter")
    questionCounter.innerHTML = `${articleNumber + 1}/10`

    correctCounter = document.getElementById("correctCounter")
    correctCounter.innerHTML = `Good answers: ${correctGuesses}/0`
}

function loadNextArticle() {
    let articleData = articlesData[articleNumber]
    console.log(articleData['text'])

    articleTitle = document.getElementById("articleTitle")
    articleTitle.innerHTML = articleData['name']

    articleText = document.getElementById("articleText")
    articleText.innerHTML = articleData['text']

    articleImage = document.getElementById("articleImage")
    articleImage.src = articleData['image']

    questionCounter = document.getElementById("questionCounter")
    questionCounter.innerHTML = `${articleNumber + 1}/10`

    correctCounter = document.getElementById("correctCounter")
    correctCounter.innerHTML = `Good answers: ${correctGuesses}/${articleNumber}`
}

function nextArticleButtonPress(choice) {
    //check if the answer is correct and add a point to the score if it is correct
    if (articlesData[articleNumber]["status"] === choice) {
        //answer is correct, add point to score
        correctGuesses += 1
    }
    //go to the next article
    articleNumber += 1
    loadNextArticle()

    console.log(correctGuesses)
}