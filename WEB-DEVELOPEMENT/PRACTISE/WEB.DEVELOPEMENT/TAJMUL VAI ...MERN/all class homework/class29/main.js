let button = document.getElementById("btn");
let p = document.getElementById("Text");

button.addEventListener("click", () => {
    
    if (p.style.display === "none") {
        p.style.display = "block";
        button.style.cursor = "pointer";
        button.innerText = "See Less<<<";
    } else {
        p.style.display = "none";
        button.style.cursor = "pointer";
        button.innerText = "See More>>>";
    }

});