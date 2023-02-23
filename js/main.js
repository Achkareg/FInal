const input_1 = document.querySelector('#password1');
const input_2 = document.querySelector('#password2');
const input = document.querySelectorAll('.form__auth');

input.forEach(inputEl => {
  inputEl.addEventListener('input', () => {
    if (input_2.value != input_1.value)  {
      input_1.classList.remove('pass');
      input_2.classList.remove('pass');
      input_1.classList.add('error');
      input_2.classList.add('error');
    }
    else if (input_2.value !=''){
      input_1.classList.remove('error');
      input_2.classList.remove('error');
      input_1.classList.add('pass');
      input_2.classList.add('pass');
    }
  });
})

// const card = document.querySelectorAll('.card');
// card.forEach(cardEl => {
//   cardEl.
// })
