// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color
// і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const backgroundBody = document.querySelector(".widget");
const prgSpan = document.querySelector(".color");
const buttonPrm = document.querySelector(".change-color");

buttonPrm.addEventListener("click", () => {
  let color = getRandomHexColor();
  backgroundBody.style.backgroundColor = color;
  prgSpan.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
