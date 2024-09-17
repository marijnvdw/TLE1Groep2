document.getElementById("clickMe").addEventListener("click", function () {
    if (textContainer.innerHTML === "") {
        textContainer.innerHTML = "Deze nieuwsbron word als zeer betrouwbaar beschoud";
    } else {
        textContainer.innerHTML = "";
    }
});