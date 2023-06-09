let canvas = document.getElementById("canvas");
let isClicked = false;

let largeCanvasSelector = document.getElementById("large-btn");
let medCanvasSelector = document.getElementById("medium-btn");
let smallCanvasSelector = document.getElementById("small-btn");

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
}

largeCanvasSelector.addEventListener('click', function() {
  let newDiv = document.querySelectorAll(".square-div");
    newDiv.forEach(function(newDiv) {
      newDiv.classList.remove("hovered");
  });

  for (let i = 0; i < 1802; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "square-div";

    newDiv.style.width = '15px';
    newDiv.style.height = '15px';
  
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
}, {once : true});

medCanvasSelector.addEventListener('click', function () {
  let newDiv = document.querySelectorAll(".square-div");
    newDiv.forEach(function(newDiv) {
      newDiv.classList.remove("hovered");
  });
  for (let i = 0; i < 504; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "square-div";

    newDiv.style.width = '29px';
    newDiv.style.height = '29px';
  
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
},  {once : true});

smallCanvasSelector.addEventListener('click', function () {
  let newDiv = document.querySelectorAll(".square-div");
    newDiv.forEach(function(newDiv) {
      newDiv.classList.remove("hovered");
  });
  for (let i = 0; i < 126; i++) {
    let newDiv = document.createElement("div");
    newDiv.className = "square-div";

    newDiv.style.width = '59px';
    newDiv.style.height = '59px';
  
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
},  {once : true});


let resetBtn = document.getElementById("reset-btn");

resetBtn.addEventListener("click", function() {
    let newDiv = document.querySelectorAll(".square-div");
    newDiv.forEach(function(newDiv) {
        newDiv.classList.remove("hovered");
    });
});

let squareDiv = document.querySelectorAll ('.square-div');

let colorPickerBtn = document.getElementById('color-btn');