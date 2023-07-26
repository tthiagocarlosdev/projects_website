window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dados_str = urlParams.get('dataAthlete');
    const dados = JSON.parse(decodeURIComponent(dados_str));

    const nomeDoAtleta = document.querySelector('.nome_do_atleta');
    const nomeDaProva = document.querySelector('.nome_da_prova')
    const pesoDoKettlebell = document.querySelector('.peso_do_kettlebell');
    const tempoDaProva = document.querySelector('.tempo_da_prova');
    console.log(dados)

    document.getElementById('show_athlete_name').innerHTML = `Nome do Atleta: ${dados.athleteName}`;
    document.getElementById('show_athleteTest').innerHTML = `Prova: ${dados.athleteTest}`;
    document.getElementById('show_kettlebellWeight').innerHTML = `Peso Kettlebell ${dados.kettlebellWeight} kg`;

    // CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK
    // Define a quantidade de minutos que o cronômetro deve contar
    const minutos = dados.timeTest;
    console.log(`minutos: ${minutos}`);

    // Converte os minutos em segundos
    let segundos = minutos * 60;

    // Define uma função que atualiza o cronômetro a cada segundo
    const atualizarCronometro = () => {
    // Converte os segundos em minutos e segundos
    const minutosExibicao = Math.floor(segundos / 60).toString().padStart(2, "0");
    const segundosExibicao = (segundos % 60).toString().padStart(2, "0");

    // Atualiza o texto do cronômetro
    document.getElementById('minutos').innerHTML = minutosExibicao;
    document.getElementById('segundos').innerHTML = segundosExibicao;

    // Decrementa o número de segundos restantes
    segundos--;

    // Para o cronômetro quando atingir zero
    if (segundos < 0) {
        clearInterval(intervalId);
    }
    };

    // Adicione um evento de clique ao botão
    document.getElementById('startButton').addEventListener('click', () => {
    // Chama a função atualizarCronometro a cada segundo
    const intervalId = setInterval(atualizarCronometro, 1000);
    });
};