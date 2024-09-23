let articlePercentage = 80
let sourcePercentage = 90


document.addEventListener("DOMContentLoaded", function () {
document.getElementById("clickMe").addEventListener("click", function () {
    
    const circles = document.querySelectorAll(".circle");
    
    circles.forEach(circle => {
        circle.classList.toggle("hidden");
    });

    const textBox = document.querySelectorAll(".textBoxContainer");
    textBox.forEach(textBoxContainer => {
        textBoxContainer.classList.toggle("hiddenBox");
    });
   
});

function percentageChanger(params) {
   sourceCircle = document.getElementById('source-circle')
   sourceCircle.setAttribute("stroke-dasharray", `${sourcePercentage}, 100`);
    if (sourcePercentage <= 24) {
        sourceCircle.style.stroke = 'red';
    } else if (sourcePercentage <= 49) {
        sourceCircle.style.stroke = 'orange'
    } else if (sourcePercentage <= 74) {
        sourceCircle.style.stroke = 'yellow'
     } else if (sourcePercentage <= 89) {
            sourceCircle.style.stroke = 'lightgreen'
    } else {
        sourceCircle.style.stroke = 'green'
    }


    articleCircle = document.getElementById('article-circle')
    articleCircle.setAttribute("stroke-dasharray", `${articlePercentage}, 100`);
    if (articlePercentage <= 24) {
        articleCircle.style.stroke = 'red';
    } else if (articlePercentage <= 49) {
        articleCircle.style.stroke = 'orange'
    } else if (articlePercentage <= 74) {
        articleCircle.style.stroke = 'yellow'
    
    }else if (articlePercentage <= 89) {
            articleCircle.style.stroke = 'lightgreen'
        
    } else {
        articleCircle.style.stroke = 'green'
    }
    


    
}


percentageChanger()

});
