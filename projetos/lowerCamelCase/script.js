/* MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL MODAL */
const modal = document.querySelector('.modal')

function closeModal() {
  modal.classList.add('closeModal')
}

/* lowerCamelCase lowerCamelCase lowerCamelCase lowerCamelCase lowerCamelCase lowerCamelCase */
const typed_text = document.querySelector('.typed-text')
const string_final = document.querySelector('.string_final')
const string_size = document.querySelector('.string_size')

function lowerCamelCase(){

    let typedText = typed_text.value.toLowerCase()
    let textSize = typedText.length
    let arrayLowerCamelCaseText = []
    let lowerCamelCaseText = ''

    arrayLowerCamelCaseText = typedText.split('')

    //construíndo o lower camel case
    arrayLowerCamelCaseText = typedText.split('')

    for(let counter = 0; counter < textSize; counter++){
        if(counter == 0){
            arrayLowerCamelCaseText[counter] = arrayLowerCamelCaseText[counter].toLowerCase()
        }else if(arrayLowerCamelCaseText[counter] == ' '){
            arrayLowerCamelCaseText[counter + 1] = arrayLowerCamelCaseText[counter + 1].toUpperCase()
        }
    }

    // processando cada caracter do array para detectar um acento ou símbolo e fazer a substituição
    for (let counter = 0; counter < textSize; counter++) {
        // array_numbers.push(underlined_text.charCodeAt(counter)) // comment

        //conditions
        let numbers =
        typedText.charCodeAt(counter) >= 48 &&
        typedText.charCodeAt(counter) <= 57

        let capital_letters =
        typedText.charCodeAt(counter) >= 65 &&
        typedText.charCodeAt(counter) <= 90

        let small_letters =
        typedText.charCodeAt(counter) >= 97 &&
        typedText.charCodeAt(counter) <= 122

        let underline = typedText.charCodeAt(counter) === 95

        let letter_a =
        (typedText.charCodeAt(counter) >= 192 &&
            typedText.charCodeAt(counter) <= 197) ||
        (typedText.charCodeAt(counter) >= 224 &&
            typedText.charCodeAt(counter) <= 229)

        let letter_e =
        (typedText.charCodeAt(counter) >= 200 &&
            typedText.charCodeAt(counter) <= 203) ||
        (typedText.charCodeAt(counter) >= 232 &&
            typedText.charCodeAt(counter) <= 235)

        let letter_i =
        (typedText.charCodeAt(counter) >= 204 &&
            typedText.charCodeAt(counter) <= 207) ||
        (typedText.charCodeAt(counter) >= 236 &&
            typedText.charCodeAt(counter) <= 239) ||
        typedText.charCodeAt(counter) === 305

        let letter_o =
        (typedText.charCodeAt(counter) >= 210 &&
            typedText.charCodeAt(counter) <= 214) ||
        typedText.charCodeAt(counter) === 216 ||
        (typedText.charCodeAt(counter) >= 242 &&
            typedText.charCodeAt(counter) <= 246) ||
        typedText.charCodeAt(counter) === 248

        let letter_u =
        (typedText.charCodeAt(counter) >= 217 &&
            typedText.charCodeAt(counter) <= 220) ||
        (typedText.charCodeAt(counter) >= 249 &&
            typedText.charCodeAt(counter) <= 252)

        let letter_c =
        typedText.charCodeAt(counter) === 199 ||
        typedText.charCodeAt(counter) === 231 ||
        typedText.charCodeAt(counter) === 162

        let letter_y =
        typedText.charCodeAt(counter) === 221 ||
        typedText.charCodeAt(counter) === 253 ||
        typedText.charCodeAt(counter) === 255 ||
        typedText.charCodeAt(counter) === 376

        let letter_n =
        typedText.charCodeAt(counter) === 209 ||
        typedText.charCodeAt(counter) === 241

        let letter_d =
        typedText.charCodeAt(counter) === 208 ||
        typedText.charCodeAt(counter) === 240

        let letter_sz = typedText.charCodeAt(counter) === 223

        let letter_ae =
        typedText.charCodeAt(counter) === 198 ||
        typedText.charCodeAt(counter) === 230

        let letter_x = typedText.charCodeAt(counter) === 215

        //processing
        if (numbers && capital_letters && small_letters && underline) {
        } else if (letter_a) {
        arrayLowerCamelCaseText[counter] = 'a'
        } else if (letter_e) {
        arrayLowerCamelCaseText[counter] = 'e'
        } else if (letter_i) {
        arrayLowerCamelCaseText[counter] = 'i'
        } else if (letter_o) {
        arrayLowerCamelCaseText[counter] = 'o'
        } else if (letter_u) {
        arrayLowerCamelCaseText[counter] = 'u'
        } else if (letter_c) {
        arrayLowerCamelCaseText[counter] = 'c'
        } else if (letter_y) {
        arrayLowerCamelCaseText[counter] = 'y'
        } else if (letter_n) {
        arrayLowerCamelCaseText[counter] = 'n'
        } else if (letter_d) {
        arrayLowerCamelCaseText[counter] = 'd'
        } else if (letter_sz) {
        arrayLowerCamelCaseText[counter] = 'sz'
        } else if (letter_ae) {
        arrayLowerCamelCaseText[counter] = 'ae'
        } else if (letter_x) {
        arrayLowerCamelCaseText[counter] = 'x'
        } else if (!numbers && !capital_letters && !small_letters && !underline) {
        arrayLowerCamelCaseText[counter] = ''
        }
    }

    //criando a nova string a partir dos novos valores do array
    lowerCamelCaseText = arrayLowerCamelCaseText
    .toString()
    .replace(/,/gi, '')

    string_final.value = `${lowerCamelCaseText}`
    string_size.innerHTML = `${lowerCamelCaseText.length} characters!`
}

/* function button copy */
function copyToClipboard(){
  navigator.clipboard.writeText(string_final.value).then(() => {
    alert(`Copied text: ${string_final.value}`)
    typed_text.value = ``
  }) 
}

/*
video clipboard
https://www.youtube.com/watch?v=6-Egmf_BlXg
 */

