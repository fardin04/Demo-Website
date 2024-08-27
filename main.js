let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");
let product = document.getElementsByClassName("product");
let productPage = Math.ceil(product.length / 4);
let l = 0;
let movePer = 25.34;
let maxMove = 100; // Adjusted to match the percentage needed

// mobile_view
let mob_view = window.matchMedia("(max-width: 768px)");
if (mob_view.matches) {
  movePer = 50.36;
  maxMove = 200; // Adjusted for mobile
}

let rightMover = () => {
  l = l + movePer;
  if (product.length === 1) {
    l = 0;
  }
  for (let i of product) {
    if (l > maxMove) {
      l = l - movePer;
    }
    i.style.transform = `translateX(-${l}%)`;
  }
};

let leftMover = () => {
  l = l - movePer;
  if (l < 0) {
    l = 0;
  }
  for (let i of product) {
    i.style.transform = `translateX(-${l}%)`;
  }
};

arrowRight.addEventListener("click", rightMover);
arrowLeft.addEventListener("click", leftMover);
