const button = document.getElementById("button");

button.addEventListener("click", function(event) {
    event.preventDefault(); 
    let a = parseFloat(document.getElementById("inp").value);
    const yesDiv = document.querySelector(".yes p");
    const noDiv = document.querySelector(".no p");

    yesDiv.style.display = "none";
    noDiv.style.display = "none";

    if (a === 18) {
        yesDiv.style.display = "block";
    } else if (a < 18) {
        noDiv.style.display = "block";
    } else {
        noDiv.style.display = "block";
    }
});
