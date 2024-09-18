window.addEventListener('load', init);

let testExplanation
let testArticles
let testResults
let articleData


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
    articleData = data
    loadFirstArticle()
}

function loadFirstArticle() {
    console.log(articleData[0])
}

function loadNextArticle() {

}