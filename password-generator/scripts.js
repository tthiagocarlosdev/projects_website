/* variable declaration */
const numberOfCharactersTyped = document.querySelector('#number_of_characters_typed')

const modal_password = document.querySelector('.modal-password')
const numberOfCharactersModal = document.querySelector('#number_of_characters_modal')
const symbolsModal = document.querySelector('#symbols_modal')
const numbersModal = document.querySelector('#numbers_modal')
const smallLettersModal = document.querySelector('#small_letters_modal')
const capitalLettersModal = document.querySelector('#capital_letters_modal')
const passwordModal = document.querySelector('#password_modal')

/* functions declaration */
//function close modal
function closeModalPassword() {
  modal_password.classList.add('closeModalPassword')
}

//function open modal
function openModalPassword(){
  modal_password.classList.add('openModalPassword')
  modal_password.classList.remove('closeModalPassword')
}

/* function regular expression */
function isRegularExpression(stringValue, regex){
  return regex.test(stringValue) ? true : false
}

// // function generating a random integer between two values, inclusive
function getRandomIntInclusive(min, max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function passwordGenerator(){
  let regexNumber = /\d/gi
  let itsNumber = isRegularExpression(String(numberOfCharactersTyped.value), regexNumber)

  if (!itsNumber) {
    alert('[ATENÇÃO!] Valor incorreto! Digite um número!')
  } else if (Number(numberOfCharactersTyped.value) < 8 || Number(numberOfCharactersTyped.value) > 40) {
    alert('[ATENÇÃO!] Valor incorreto! Digite um valor entre 8 e 40!')  
  } else if (itsNumber && Number(numberOfCharactersTyped.value) >= 8 && Number(numberOfCharactersTyped.value) <= 40) {

    // definição da resposta e variáveis
    let numberOfCharacters = Math.floor(numberOfCharactersTyped.value)
    let minimumOfEachCharacter = Number.parseInt(numberOfCharacters / 4) // Cada tipo caractere terá que apresentar uma quantidade mínima na senha.
    let passwordInNumber = []
    let passwordInCharacter = ''
    let minimumCharacter = false
    let symbols = 0
    let numbers = 0
    let smallLetters = 0
    let capitalLetters = 0

    //sorteio do valores da escala ascii
    while(minimumCharacter == false){
      //sorteio do valores da escala ascii
      for(let counter = 0; counter < numberOfCharacters; counter++) {
        passwordInNumber[counter] = getRandomIntInclusive(33, 126)
      }

      //validação para não repetir caracteres na senha
      for (let a = 0; a < numberOfCharacters - 1; a++){
        for (let b = a+1; b < numberOfCharacters; b++){
          while (passwordInNumber[a] == passwordInNumber[b]){
            passwordInNumber[b] = getRandomIntInclusive(33, 126)
            a = 0
            b = 1
          }
        }
      }


      //validação quantidade dos tipos de caracteres
      for(let value of passwordInNumber){
        if(value >= 33 && value <= 47 || value >= 58 && value <= 64 || value >= 91 && value <= 96 || value >= 122 && value <= 126){
          symbols++
        } else if (value >= 48 && value <=57) {
          numbers++
        } else if (value >= 97 && value <=122) {
          smallLetters++
        } else if (value >= 65 && value <=90) {
          capitalLetters++
        }
      }

      if (symbols < minimumOfEachCharacter || numbers < minimumOfEachCharacter || smallLetters < minimumOfEachCharacter || capitalLetters < minimumOfEachCharacter){
        minimumCharacter = false
        symbols = 0
        numbers = 0
        smallLetters = 0
        capitalLetters = 0
      } else {
        minimumCharacter = true
      }
    }

    //confecção de senha a partir da tabela ascii em caracteres
		for (let contador = 0; contador < numberOfCharacters; contador++){
			passwordInCharacter += String.fromCharCode(passwordInNumber[contador])
		}

    numberOfCharactersModal.innerHTML = numberOfCharacters
    symbolsModal.innerHTML = symbols
    numbersModal.innerHTML = numbers
    smallLettersModal.innerHTML = smallLetters
    capitalLettersModal.innerHTML = capitalLetters
    passwordModal.innerHTML = passwordInCharacter
    openModalPassword()
  }
  
}

   /* function button copy */
  function copyToClipboard(){
    navigator.clipboard.writeText(passwordModal.innerHTML).then(() => {
      alert(`Copied text: ${passwordModal.innerHTML}`)
    }) 
  }
   
  const modal = document.querySelector('.modal')

  function closeModal() {
    modal.classList.add('closeModal')
  }
  
  