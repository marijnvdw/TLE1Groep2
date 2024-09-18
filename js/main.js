window.addEventListener('load', init);

fetch('index.php')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Gebruik de data hier in je JavaScript-bestand
    })
    .catch(error => console.error('Error:', error));