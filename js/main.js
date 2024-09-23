window.addEventListener('load', init);

let testExplanation
let testArticles
let testResults
let buttonAI
let buttonHuman

let articlesData
//articleNumber wordt gebruikt om het artikel uit de database te halen.
//articleTestNumber wordt gebruikt om het artikel aan te duiden dat momenteel op de pagina staat.
let articleNumber = 0
let articleTestNumber = 0

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

    startTestMixed = document.getElementById("startTestMixed")
    startTestMixed.addEventListener('click', function () {
        startTest('mixed')
    });

    buttonAI = document.getElementById("chooseAI")
    buttonAI.addEventListener('click', function () {
        nextArticleButtonPress(false);
    });

    buttonHuman = document.getElementById("chooseHuman")
    buttonHuman.addEventListener('click', function () {
        nextArticleButtonPress(true);
    });

    continueToNextArticle = document.getElementById("continueToNextArticle")
    continueToNextArticle.addEventListener('click', function () {
        loadNextArticle()
    });

    returnHome = document.getElementById("returnHome")
    returnHome.addEventListener('click', function () {
        location.reload()
    });
}

function jsonLoader(data) {
    console.log(data)
    articlesData = data
    loadFirstArticle()
}

function loadFirstArticle() {
    let articleData = articlesData[articleNumber]
    // console.log(articleData['text'])

    articleTitle = document.getElementById("articleTitle")
    articleTitle.innerHTML = articleData['name']

    articleText = document.getElementById("articleText")
    articleText.innerHTML = articleData['text']

    articleImage = document.getElementById("articleImage")
    articleImage.src = articleData['image']

    questionCounter = document.getElementById("questionCounter")
    questionCounter.innerHTML = `${articleTestNumber + 1}/10`

    correctCounter = document.getElementById("correctCounter")
    correctCounter.innerHTML = `Good answers: ${correctGuesses}/0`
}

function loadNextArticle() {
    articleInfo = document.getElementById("articleInfo")
    articleInfo.classList.add("hidden")

    let articleData = articlesData[articleNumber]

    articleTitle = document.getElementById("articleTitle")
    articleTitle.innerHTML = articleData['name']

    articleText = document.getElementById("articleText")
    articleText.innerHTML = articleData['text']

    articleImage = document.getElementById("articleImage")
    articleImage.src = articleData['image']

    questionCounter = document.getElementById("questionCounter")
    questionCounter.innerHTML = `${articleTestNumber + 1}/10`

    correctCounter = document.getElementById("correctCounter")
    correctCounter.innerHTML = `Good answers: ${correctGuesses}/${articleTestNumber}`
}

function nextArticleButtonPress(choice) {
    colorText = document.getElementById("colorText")

    //check if the answer is correct and add a point to the score if it is correct
    if (articlesData[articleNumber]["status"] === choice) {
        //answer is correct, add point to score
        correctGuesses += 1

        //make info text green if it was correct
        colorText.classList.remove("redText")
        colorText.classList.add("greentext")
    } else {
        colorText.classList.remove("greentext")
        colorText.classList.add("redText")
    }
    //check if article is the last article
    if (articleTestNumber < 9) {
        //enter info text
        articleType = document.getElementById("articleType")
        sourceLink = document.getElementById("sourceLink")

        if (articlesData[articleNumber]["status"] === true) {
            articleType.innerHTML = 'Human'
            sourceLink.innerHTML = `Source: ${articlesData[articleNumber]["link"]}`
        } else {
            articleType.innerHTML = 'AI'
            sourceLink.innerHTML = 'Source: ChatGPT'
        }

        //show the info text
        articleInfo = document.getElementById("articleInfo")
        articleInfo.classList.remove("hidden")

        //go to the next article
        articleNumber += 1
        articleTestNumber += 1
    } else {
        //laat de laatste pagina met de score zien
        console.log('this is the last article')
        endTest()
    }

    console.log(correctGuesses)
}

function startTest(language) {
    if (language === 'mixed') {
        articleNumber = 0
        console.log('start test in mixed languages')
    }

    testExplanation = document.getElementById("testExplanation")
    testExplanation.remove();

    testArticles = document.getElementById("testArticles")
    testArticles.classList.remove("hidden")
}

function endTest() {
    resultsScore = document.getElementById("resultsScore")
    resultsScore.innerHTML = `You scored ${correctGuesses}/10`

    testArticles = document.getElementById("testArticles")
    testArticles.classList.add("hidden")

    testResults = document.getElementById("testResults")
    testResults.classList.remove("hidden")
}