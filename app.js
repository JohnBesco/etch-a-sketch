let canvas = document.getElementById("canvas")

for (let i = 0; i < 256; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "square-div"
    
    newDiv.addEventListener("mouseover", function() {
        this.classList.add("hovered");
    });
    
    canvas.appendChild(newDiv);
}

  