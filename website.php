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

    <script>
        // Use the fetch API to get the JSON data from the PHP file
        fetch('services/webservice/index.php') // Assumes your PHP file is called data.php
            .then(response => response.json()) // Parse the response as JSON
            .then(data => {
                console.log(data); 
            })
            .catch(error => {
                console.error('Error fetching data:', error); 
            });
    </script>


    <main>
        <!-- <div id="testExplanation">
            <p>
                In this test you will be choosing if an article has been written by artificial intelligence or a human.
            </p>
            <button>Start test</button>
        </div> -->
        <div id="testArticles">
            <div id="article">
                <h2 id="articleTitle">Lorem ipsum</h2>
                <div class="wrappedImageDiv">
                    <img id="articleImage" src="images/1000_F_142628436_BdXXMV34Xf665lwSRmBbAVICjFXh7vG9.jpg">
                </div>
                <div id="articleText">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean erat nunc, tempor non
                        molestie
                        eget,
                        suscipit eget ex. Quisque lobortis consectetur lobortis. Duis tempor mauris a ullamcorper
                        interdum.
                        Sed
                        in nibh justo. Duis dignissim leo sapien. Nam porttitor lectus nisl. Vestibulum ornare sit
                        amet
                        lectus
                        vitae gravida. Cras ultrices nisl eu nisi ullamcorper laoreet. Suspendisse sed erat
                        consectetur,
                        faucibus ligula eget, dictum purus. Ut lacinia porta nibh quis luctus. Sed tincidunt purus
                        in
                        turpis
                        tincidunt pellentesque.
                    </p>
                    <p>
                        Nulla ipsum magna, volutpat sed nunc a, imperdiet pretium lectus. Sed suscipit fermentum
                        lorem
                        nec
                        auctor. Maecenas mattis a felis vel viverra. Nulla sagittis, turpis ut luctus luctus, eros
                        nisl
                        iaculis
                        erat, eget viverra tortor tellus eget felis. Pellentesque sem velit, bibendum sit amet
                        mattis
                        vitae,
                        congue at magna. Sed ornare ligula odio, in dignissim enim elementum eget. Integer ut mollis
                        risus,
                        ac
                        suscipit risus. Integer bibendum sit amet nibh id auctor. Donec aliquam sodales sem, aliquam
                        maximus
                        orci auctor sed. Nunc sollicitudin ligula odio. In ullamcorper elit lacus. Aliquam maximus
                        luctus
                        mi,
                        sit amet tristique justo lacinia et. Nullam rhoncus euismod congue. Integer non blandit
                        nibh.
                        Donec
                        non
                        leo nisl. Pellentesque euismod, dui euismod mollis aliquet, quam quam commodo lectus, et
                        euismod
                        mi
                        magna at purus.
                    </p>
                    <p>
                        Ut odio dui, viverra id ligula vel, tincidunt suscipit libero. Donec at sapien fermentum,
                        vehicula
                        massa
                        at, ornare leo. Fusce commodo vel mi sit amet aliquam. Etiam vel dapibus mauris. Mauris
                        varius
                        interdum
                        massa ac commodo. Duis scelerisque metus ut placerat pulvinar. Sed ut molestie tortor, non
                        interdum
                        nisl. In hac habitasse platea dictumst. Vestibulum cursus enim turpis, quis dictum libero
                        mattis
                        eu.
                        Maecenas suscipit sapien non libero ornare, quis tempor ante maximus. Vivamus vehicula ex in
                        justo
                        posuere accumsan. Etiam blandit, purus in sollicitudin tincidunt, diam nisi tempor ex, ac
                        sollicitudin
                        libero metus laoreet leo. Donec tellus enim, blandit in orci at, tristique auctor ipsum.
                        Pellentesque in
                        nulla mollis ex lobortis consectetur quis sed nisl. Sed tempor eros in felis mollis
                        faucibus.
                    </p>
                    <p>
                        Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia
                        curae;
                        Sed non ipsum finibus, pulvinar ex at, egestas lorem. Integer ac pharetra sapien. Aliquam
                        rutrum
                        id
                        lectus a tincidunt. Pellentesque vel hendrerit quam. Etiam vulputate, nulla non laoreet
                        posuere,
                        velit
                        orci mattis lectus, a venenatis nisl nibh eget mauris. Etiam ac orci nunc. In non augue quis
                        mi
                        interdum
                        tincidunt vel at nibh. Duis eget justo turpis. Aenean cursus euismod augue vel egestas.
                    </p>
                    <p>
                        Suspendisse non vulputate felis, nec semper ante. Suspendisse non tristique dui. Fusce a
                        volutpat
                        sem,
                        sed vehicula nisi. Pellentesque porta ultricies tellus, eget blandit nibh luctus quis.
                        Aenean
                        eleifend
                        nibh sed malesuada pretium. Etiam hendrerit massa tellus, vulputate venenatis turpis finibus
                        quis.
                        Quisque quis turpis ut ligula auctor suscipit. Vestibulum ante ipsum primis in faucibus orci
                        luctus
                        et
                        ultrices posuere cubilia curae; Nulla nec enim imperdiet, vestibulum sapien sit amet,
                        euismod
                        ex.
                        Nunc
                        vulputate urna nisl, eget gravida augue lacinia id. Pellentesque imperdiet, ipsum id
                        venenatis
                        commodo,
                        metus nisi finibus libero, nec volutpat est ligula egestas nunc. Sed quis est et quam
                        finibus
                        facilisis
                        eu vitae dolor. Donec auctor arcu nec lorem blandit sagittis. Suspendisse volutpat, neque
                        eget
                        auctor
                        ullamcorper, neque urna pretium diam, id euismod lacus mi id sapien. Curabitur scelerisque
                        elit
                        et
                        porta
                        aliquet. Sed tempus, lacus eu gravida molestie, arcu felis vulputate augue, et egestas erat
                        leo
                        vehicula
                        nisi.
                    </p>
                </div>
            </div>
            <div class="bottomText">
                <div id="questionCounter">2/10</div>
                <div class="bottomTextCentered">This is:</div>
            </div>
            <div class="bottomButtons">
                <button id="chooseAI">AI</button>
                <button id="chooseHuman">Human</button>
            </div>
        </div>
        <!-- <div id="testResults">
            <p>You scored 6/10</p>
            <button>Return to home</button>
        </div> -->
    </main>

    <footer>
        test
    </footer>
</body>

</html>