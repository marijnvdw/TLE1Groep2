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
        <h1>Is this article made by AI or by a Human?</h1>
    </header>

    <?php require_once('nav.html'); ?>

    <main>
        <div id="testExplanation" class="">
            <div>
                <h2>
                    In this test you will be choosing if an article has been written by artificial intelligence or a human.
                </h2>
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
                <button id="chooseAI">AI</button>
                <button id="chooseHuman">Human</button>
            </div>
        </div>
        <div id="testResults" class="hidden">
            <div id="resultsScore">You scored 6/10</div>
            <button id="returnHome">Return to home</button>
        </div>
    </main>

    <footer>
    © - Quinten van der Blom, Hidde Scheringa, Jaimy van den Berg, Marijn van de Waterlaat, David de Knegt, Sem van Osch
    </footer>
</body>

</html>