let container = document.getElementById("container")

for (let i = 0; i < 182; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "square-div"
    
    newDiv.addEventListener("mouseover", function() {
        this.classList.add("hovered");
    });
    
    container.appendChild(newDiv);
}

  