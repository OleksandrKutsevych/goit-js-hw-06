// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

const refs = {
  inputEl: document.querySelector('#name-input'),
  outputEl: document.querySelector('#name-output'),
};
console.log('inputEl', refs.inputEl);
console.log('outputEl', refs.outputEl);

// refs.inputEl.addEventListener('focus', onInputFocus);
// refs.inputEl.addEventListener('blur', onInputBlur);
// refs.inputEl.addEventListener('change', onInputChange);
refs.inputEl.addEventListener('input', onInput);

// function onInputFocus() {
//   console.log('input focus');
// }

// function onInputBlur() {
//   console.log('input blur');
// }

// function onInputChange(event) {
//   console.log(event.currentTarget.value);
// }

function onInput(event) {
  refs.outputEl.textContent =
    event.currentTarget.value.length > 0
      ? event.currentTarget.value
      : 'Anonimus';
  console.log(event.currentTarget.value);
}
