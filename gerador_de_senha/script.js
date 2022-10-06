const modal = document.querySelector('.modal')

function closeModal() {
  modal.classList.add('closeModal')
}

function gerarSenha(){
    var quantidadeCaracteres = document.querySelector('input#quantidadeCaracteres')
    var resposta = document.querySelector('div#resposta')
    resposta.innerHTML = ``
    quantidadeCaracteres = Number(quantidadeCaracteres.value)
    if(quantidadeCaracteres < 6 || quantidadeCaracteres > 40){
        alert('[ATENÇÃO!] Valor incorreto! Digite um valor entre 6 e 40!')
    } else {
        // função gerando um número inteiro aleatório entre dois valores, inclusive
        function getRandomIntInclusive(min, max){
            min = Math.ceil(min)
            max = Math.floor(max)
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        // definição da resposta e variáveis
        let mininoTipoCaractere = Number.parseInt(quantidadeCaracteres / 4) // Cada tipo caractere terá que apresentar uma quantidade mínima na senha.
        let senhaEmNumero = []
        let senhaEmCaractere = ''
        let mininoCaracteres = false
        let simbolo = 0
        let numeros = 0
        let letraMinusculas = 0
        let letraMaiusculas = 0

        //sorteio do valores da escala ascii
		while(mininoCaracteres == false){
			    //sorteio do valores da escala ascii
		    	for(let contador = 0; contador < quantidadeCaracteres; contador++) {
				    senhaEmNumero[contador] = getRandomIntInclusive(33, 126)
		    	}
                
		    	//validação para não repetir caracteres na senha
		    	for (let a = 0; a < quantidadeCaracteres - 1; a++){
				    for (let b = a+1; b < quantidadeCaracteres; b++){
				        while (senhaEmNumero[a] == senhaEmNumero[b]){
                            senhaEmNumero[b] = getRandomIntInclusive(33, 126)
						    a = 0
						    b = 1
					    }
			    	}
		    	}
                
			
                //validação quantidade dos tipos de caracteres
                for (let contador = 0; contador < quantidadeCaracteres; contador++){
                    if (senhaEmNumero[contador] >= 33 && senhaEmNumero[contador] <= 47 || senhaEmNumero[contador] >= 58 && senhaEmNumero[contador] <= 64 || senhaEmNumero[contador] >= 91 && senhaEmNumero[contador] <= 96 || senhaEmNumero[contador] >= 122 && senhaEmNumero[contador] <= 126){
                        simbolo++
                    } else if (senhaEmNumero[contador] >= 48 && senhaEmNumero[contador] <=57){
                        numeros++
                    } else if (senhaEmNumero[contador] >= 97 && senhaEmNumero[contador] <=122){
                        letraMinusculas++
                    } else if (senhaEmNumero[contador] >= 65 && senhaEmNumero[contador] <=90){
                        letraMaiusculas++
                    }
                }
            
                if (simbolo < mininoTipoCaractere || numeros < mininoTipoCaractere || letraMinusculas < mininoTipoCaractere || letraMaiusculas < mininoTipoCaractere){
                    mininoCaracteres = false
                    simbolo = 0
                    numeros = 0
                    letraMinusculas = 0
                    letraMaiusculas = 0
                } else {
                    mininoCaracteres = true
                }
		}

        //confecção de senha a partir da tabela ascii em caracteres
		for (let contador = 0; contador < quantidadeCaracteres; contador++){
			senhaEmCaractere += String.fromCharCode(senhaEmNumero[contador])
		}

        // mostrar o resultado
        resposta.innerHTML += `<p>Sua senha tem ${quantidadeCaracteres} caracteres, sendo:</p>`
        resposta.innerHTML += `<p>${simbolo} símbolos;</p>`
        resposta.innerHTML += `<p>${numeros} números;</p>`
        resposta.innerHTML += `<p>${letraMaiusculas} letras maiúsculas;</p>`
        resposta.innerHTML += `<p>${letraMinusculas} letras minúsculas;</p>`
        //resposta.innerHTML += `<p>Mímino : ${mininoTipoCaractere}`
        resposta.innerHTML += `<p><strong>Sua senha é: </strong></p>`
        resposta.innerHTML += `<p><strong>${senhaEmCaractere}</strong></p>`
    }
    
}

/*
símbolos - !"#$%&'()*+,-./:;<=>?@[\]^_`~
numeros - 0123456789
letras maiúsculas - ABCDEFGHIJKLMNOPQRSTUVWXYZ
letras minúsculas - abcdefghijklmnopqrstuvwxyz
*/