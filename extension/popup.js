document.getElementById("clickMe").addEventListener("click", function () {
    if (textContainer.innerHTML === "") {
        textContainer.innerHTML = "Deze nieuwsbron wordt als zeer betrouwbaar beschouwd";
    } else {
        textContainer.innerHTML = "";
    }
});