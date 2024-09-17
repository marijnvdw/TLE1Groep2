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