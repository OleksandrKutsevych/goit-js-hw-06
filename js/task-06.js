// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//   проверяет его содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid,
// которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');
console.log('inputEl', inputEl);

inputEl.addEventListener('focus', () => {
  console.log('input has focus');
});
inputEl.addEventListener('blur', ouInputChange);

function ouInputChange(event) {
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }

  console.log('input has bur');
  console.log(event.currentTarget.value.length);
}
