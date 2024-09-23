<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <script type="text/javascript" src="js/main.js" defer></script>
    <title>Website</title>
</head>

<body>
    <header>
        <i class="fa-solid fa-bars nav-button" id="toggleMenu"></i>
        <h1>Is this article fake or real?</h1>
    </header>

    <?php require_once('nav.html'); ?>

    <main>
        <div id="testExplanation" class="">
            <div>
                <h2>
                    In this test you will be choosing if an article is fake news, or real news.
                </h2>
                <p>
                    We have chosen a few articles written with factually correct information and a few articles with incorrect information. It is up to you to find out if the article is real or fake news.
                </p>
                <h2>
                    In deze test moet u kiezen of een artikel nepnieuws of echt nieuws is.
                </h2>
                <p>
                    Wij hebben een paar artikelen uitgekozen met feitelijke informatie en een paar artikelen met onjuiste informatie. Het is aan u om uit te zoeken of het artikel echt- of nepniews is
                </p>
            </div>
            <button id="startTestMixed"><strong>Start test</strong></button>
        </div>
        <div id="testArticles" class="hidden">
            <div id="article">
                <h2 id="articleTitle">Lorem ipsum</h2>
                <div class="wrappedImageDiv">
                    <img id="articleImage" src="images/1000_F_142628436_BdXXMV34Xf665lwSRmBbAVICjFXh7vG9.jpg">
                </div>
                <div id="articleText">

                </div>
            </div>
            <div class="bottomText">
                <div class="upperBottomText">
                    <div id="questionCounter">2/10</div>
                    <div id="correctCounter">Good answers: 0/10</div>
                </div>
                <div class="bottomTextCentered">This is:</div>
            </div>
            <div class="bottomButtons">
                <button id="chooseAI">Fake news</button>
                <button id="chooseHuman">Real news</button>
            </div>
            <div id="articleInfo" class="hidden">
                <div class="alignMiddle">
                    <div id="colorText" class="redText">
                        <div id="showCorrect">
                            Correct, this article was written by:
                        </div>
                        <div id="articleType">
                            AI
                        </div>
                        <div id="sourceLink">

                        </div>
                    </div>
                    <button id="continueToNextArticle">Continue</button>
                </div>
            </div>
        </div>
        <div id="testResults" class="hidden">
            <div id="resultsScore">You scored 6/10</div>
            <div>You could download our extension if you didn't score 10/10. Our extension will help you with recognizing fake news.</div>
            <button id="returnHome">Return to home</button>
        </div>
    </main>

    <footer>
        © - Quinten van der Blom, Hidde Scheringa, Jaimy van den Berg, Marijn van de Waterlaat, David de Knegt, Sem van Osch
    </footer>
</body>

</html>