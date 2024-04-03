$(document).ready(function() {
    generateLorem();
});

const lorem = document.querySelector('#lorem');
const dataAtual = document.querySelector('.data_atual');

function primeiraLetraEmMaiusculo(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}

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

function generateLorem() {
    const textoDataHora = dataHora();
    $(lorem).BaconIpsum({
        type:'all-meat', 
        paras:2, 
        start_with_lorem:true,
        after_paragraph: textoDataHora,
    });
}