// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй
// её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.
let counterValue = document.querySelector('#value');
let newValue = 0;
counterValue.textContent = newValue;

const decrementBtn = document.querySelector('[data-action="decrement"]');
// console.log('decrementBtn', decrementBtn);
const incrementBtn = document.querySelector('[data-action="increment"]');
// console.log('incrementBtn', incrementBtn);

// console.log(counterValue.textContent);

incrementBtn.addEventListener('click', () => {
  onChangesValue(+1);
  counterValue.textContent = newValue;
  // console.log(counterValue.textContent);
});

decrementBtn.addEventListener('click', () => {
  onChangesValue(-1);
  counterValue.textContent = newValue;
  // console.log(counterValue.textContent);
});

function onChangesValue(value) {
  return (newValue += value);
}
