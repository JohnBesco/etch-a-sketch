let canvas = document.getElementById("canvas");
let isClicked = false;

for (let i = 0; i < 1802; i++) {
  let newDiv = document.createElement("div");
  newDiv.className = "square-div";

  newDiv.addEventListener("click", function() {
    isClicked = !isClicked;
    console.log('Clicked!');
  });

  newDiv.addEventListener("mouseover", function() {
    if (isClicked) {
      this.classList.add("hovered");
    }
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