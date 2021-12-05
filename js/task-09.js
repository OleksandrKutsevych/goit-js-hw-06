// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на
// button.change - color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.

const changeColorBtn = document.querySelector('.change-color');

const Body = document.querySelector('body');

const colorEl = document.querySelector('.color');

changeColorBtn.addEventListener('click', newHexColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function newHexColor() {
  const color = getRandomHexColor();
  colorEl.textContent = `${color}`;
  Body.style.backgroundColor = `${color}`;
}
