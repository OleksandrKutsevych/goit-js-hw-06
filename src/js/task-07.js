// Напиши скрипт, который реагирует на изменение значения
// input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

const fontSizeInputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

fontSizeInputEl.addEventListener('input', (event) => {
  const size = Number(event.currentTarget.value);
  textEl.style.fontSize = `${size}px`;
});
