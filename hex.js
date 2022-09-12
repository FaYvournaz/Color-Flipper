const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const button = document.getElementById("btn");
const colors = document.querySelector(".color");

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

button.addEventListener("click", function () {
  let hexColors = "#";
  for (let i = 0; i < 6; i++) {
    hexColors += hex[getRandomNumber()];
  }

  colors.textContent = hexColors;
  document.body.style.backgroundColor = hexColors;
});
