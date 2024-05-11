
const dataAtual = document.querySelector('.data_atual');

// Função para formatar a primeira letra em maiúsculo
function primeiraLetraEmMaiusculo(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Função para obter a data atual formatada
function dataHora() {
    const formatter = new Intl.DateTimeFormat("pt-br", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    const dataDoComputador = new Date();
    return primeiraLetraEmMaiusculo(formatter.format(dataDoComputador));

}

dataAtual.innerHTML = dataHora();

let enderecoIpPublico = ''; 

// Função para obter o endereço IP público
function obterEnderecoIpPublico() {
    // Retornar a promessa da chamada fetch
    return fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const enderecoIP = data.ip;
            enderecoIpPublico = `<span>${enderecoIP}</span>`;
             
            // Chamar a função criarElementos() aqui, dentro do bloco then(), garantindo que só seja chamada após a obtenção do endereço IP
            criarElementos();
        })
        .catch(error => {
            console.error('Erro ao obter o endereço IP:', error);
        });
}

// Chamar a função para obter o endereço IP público
obterEnderecoIpPublico();

 // Função para criar o elemento <p> com o texto "Teste de impressora" e um <span> com a data atualizada
 function criarElementos() {
    // Obter a data atual
    const span = `<span class="data_atual">${dataHora()}</span>`;
    // Obter informações sobre o sistema operacional
    const sistemaOperacional = `<span>${window.navigator.platform}</span>`;
    // Obter informações sobre o navegador
    const navegador = `<span>${window.navigator.userAgent}</span>`;
    // Obter resolução da tela
    const larguraTela = window.screen.width;
    const alturaTela = window.screen.height;
    const resolucaoDaTela = `<span> ${larguraTela} x ${alturaTela}</span>`

    let conteudo = '';

    // Criar o conteúdo a ser inserido
    for (let i = 0; i < 3; i++) {
        conteudo += `Teste de impressora: ${span};
                    Sitema Operacional: ${sistemaOperacional};
                    Navegador: ${navegador};
                    Resolução da Tela:${resolucaoDaTela}; 
                    Endereço IP: ${enderecoIpPublico}; `;
    }
    

    // Selecionar todos os elementos com a classe .secao_texto_data
    const secoesTextoData = document.querySelectorAll('.secao_texto_data');

    // Iterar sobre cada elemento e inserir o conteúdo
    secoesTextoData.forEach(function(secao) {
        const p = `<p>${conteudo}</p>`;
        secao.insertAdjacentHTML('afterbegin', p);
    });
}
