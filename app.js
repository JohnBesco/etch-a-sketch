let canvas = document.getElementById("canvas")

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "square-div"
    
    newDiv.addEventListener("mouseover", function() {
        this.classList.add("hovered");
    });
    
    canvas.appendChild(newDiv);
}

let resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function() {
    let newDiv = document.querySelectorAll(".square-div");
    newDiv.forEach(function(newDiv) {
        newDiv.classList.remove("hovered");
    });
});