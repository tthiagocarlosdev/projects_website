/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL */
const modal = document.querySelector('.modal')

function closeModal() {
  modal.classList.add('closeModal')
}

/* SNAKE_CASE SNAKE_CASE SNAKE_CASE SNAKE_CASE SNAKE_CASE SNAKE_CASE SNAKE_CASE */
const typed_text = document.querySelector('.typed-text')
const string_final = document.querySelector('.string_final')
const string_size = document.querySelector('.string_size')

function snakeCase() {

  let underlined_text = typed_text.value.replace(/ /gi, '_')
  let text_size = underlined_text.length
  let array_without_accent = []
  let text_snake_case = ''
  // let array_numbers = [] // comment

  //extraindo cada caracter da string para um array
  array_without_accent = underlined_text.split('')

  // processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
  for (let counter = 0; counter < text_size; counter++) {
    // array_numbers.push(underlined_text.charCodeAt(counter)) // comment

    //conditions
    let numbers =
      underlined_text.charCodeAt(counter) >= 48 &&
      underlined_text.charCodeAt(counter) <= 57

    let capital_letters =
      underlined_text.charCodeAt(counter) >= 65 &&
      underlined_text.charCodeAt(counter) <= 90

    let small_letters =
      underlined_text.charCodeAt(counter) >= 97 &&
      underlined_text.charCodeAt(counter) <= 122

    let underline = underlined_text.charCodeAt(counter) === 95

    let letter_a =
      (underlined_text.charCodeAt(counter) >= 192 &&
        underlined_text.charCodeAt(counter) <= 197) ||
      (underlined_text.charCodeAt(counter) >= 224 &&
        underlined_text.charCodeAt(counter) <= 229)

    let letter_e =
      (underlined_text.charCodeAt(counter) >= 200 &&
        underlined_text.charCodeAt(counter) <= 203) ||
      (underlined_text.charCodeAt(counter) >= 232 &&
        underlined_text.charCodeAt(counter) <= 235)

    let letter_i =
      (underlined_text.charCodeAt(counter) >= 204 &&
        underlined_text.charCodeAt(counter) <= 207) ||
      (underlined_text.charCodeAt(counter) >= 236 &&
        underlined_text.charCodeAt(counter) <= 239) ||
      underlined_text.charCodeAt(counter) === 305

    let letter_o =
      (underlined_text.charCodeAt(counter) >= 210 &&
        underlined_text.charCodeAt(counter) <= 214) ||
      underlined_text.charCodeAt(counter) === 216 ||
      (underlined_text.charCodeAt(counter) >= 242 &&
        underlined_text.charCodeAt(counter) <= 246) ||
      underlined_text.charCodeAt(counter) === 248

    let letter_u =
      (underlined_text.charCodeAt(counter) >= 217 &&
        underlined_text.charCodeAt(counter) <= 220) ||
      (underlined_text.charCodeAt(counter) >= 249 &&
        underlined_text.charCodeAt(counter) <= 252)

    let letter_c =
      underlined_text.charCodeAt(counter) === 199 ||
      underlined_text.charCodeAt(counter) === 231 ||
      underlined_text.charCodeAt(counter) === 162

    let letter_y =
      underlined_text.charCodeAt(counter) === 221 ||
      underlined_text.charCodeAt(counter) === 253 ||
      underlined_text.charCodeAt(counter) === 255 ||
      underlined_text.charCodeAt(counter) === 376

    let letter_n =
      underlined_text.charCodeAt(counter) === 209 ||
      underlined_text.charCodeAt(counter) === 241

    let letter_d =
      underlined_text.charCodeAt(counter) === 208 ||
      underlined_text.charCodeAt(counter) === 240

    let letter_sz = underlined_text.charCodeAt(counter) === 223

    let letter_ae =
      underlined_text.charCodeAt(counter) === 198 ||
      underlined_text.charCodeAt(counter) === 230

    let letter_x = underlined_text.charCodeAt(counter) === 215

    //processing
    if (numbers && capital_letters && small_letters && underline) {
    } else if (letter_a) {
      array_without_accent[counter] = 'a'
    } else if (letter_e) {
      array_without_accent[counter] = 'e'
    } else if (letter_i) {
      array_without_accent[counter] = 'i'
    } else if (letter_o) {
      array_without_accent[counter] = 'o'
    } else if (letter_u) {
      array_without_accent[counter] = 'u'
    } else if (letter_c) {
      array_without_accent[counter] = 'c'
    } else if (letter_y) {
      array_without_accent[counter] = 'y'
    } else if (letter_n) {
      array_without_accent[counter] = 'n'
    } else if (letter_d) {
      array_without_accent[counter] = 'd'
    } else if (letter_sz) {
      array_without_accent[counter] = 'sz'
    } else if (letter_ae) {
      array_without_accent[counter] = 'ae'
    } else if (letter_x) {
      array_without_accent[counter] = 'x'
    } else if (!numbers && !capital_letters && !small_letters && !underline) {
      array_without_accent[counter] = ''
    }
  }

  // console.log(array_numbers) //comment
  // console.log(array_numbers.sort()) // comment

  //criando a nova string a partir dos novos valores do array
  text_snake_case = array_without_accent
    .toString()
    .replace(/,/gi, '')
    .toLowerCase()

  string_final.value = `${text_snake_case}`
  string_size.innerHTML = `${text_snake_case.length} characters!`

  console.log(text_snake_case)
}

/* function button copy */
function copyToClipboard(){
  navigator.clipboard.writeText(string_final.value).then(() => {
    alert(`Copied text: ${string_final.value}`)
  }) 
}

/*
video clipboard
https://www.youtube.com/watch?v=6-Egmf_BlXg
 */

