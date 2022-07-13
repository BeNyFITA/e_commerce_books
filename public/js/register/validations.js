let formRegister = document.querySelector('form.register');
let inputName = document.querySelector('input[name="nome"]')

formRegister.addEventListener('submit', (e) => {
    e.preventDefault()
    if(inputName.value.length < 3){
      inputName.style.backgroundColor = 'red'
    }
    if(inputName.value == ''){
      inputName.style.backgroundColor = 'red'
    }
})