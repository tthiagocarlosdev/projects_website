
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
console.log(dataAtual);

 // Função para criar o elemento <p> com o texto "Teste de impressora" e um <span> com a data atualizada
 function criarElementos() {
    const texto = 'Teste de impressora';
    const span = `<span class="data_atual">${dataHora()}</span>`;
    let conteudo = '';

    // Criar o conteúdo a ser inserido
    for (let i = 0; i < 12; i++) {
        conteudo += `${texto} - ${span}; `;
    }

    // Selecionar todos os elementos com a classe .secao_texto_data
    const secoesTextoData = document.querySelectorAll('.secao_texto_data');

    // Iterar sobre cada elemento e inserir o conteúdo
    secoesTextoData.forEach(function(secao) {
        const p = `<p>${conteudo}</p>`;
        secao.insertAdjacentHTML('afterbegin', p);
    });
}


// Chamar a função ao carregar a página
window.addEventListener('load', criarElementos);