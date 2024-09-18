window.addEventListener('load', init);

let testExplanation
let testArticles
let testResults
let articlesData
//articleNumber wordt gebruikt om het artikel aan te duiden dat momenteel op de pagina staat.
let articleNumber = 0


function init() {
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
    testExplanation = document.getElementById("testExplanation")
    testArticles = document.getElementById("testArticles")
    testResults = document.getElementById("testResults")
}

function jsonLoader(data) {
    console.log(data)
    articlesData = data
    loadFirstArticle()
}

function loadFirstArticle() {
    let articleData = articlesData[0]
    console.log(articleData['text'])

    articleTitle = document.getElementById("articleTitle")
    articleTitle.innerHTML = articleData['name']

    articleText = document.getElementById("articleText")
    articleText.innerHTML = articleData['text']

}

function loadNextArticle() {

}
