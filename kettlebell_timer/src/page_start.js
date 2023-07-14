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

    nomeDoAtleta.innerHTML = `Nome do Atleta: ${dados.athleteName}`;
    nomeDaProva.innerHTML = `Nome da Prova: ${dados.athleteTest}`;
    pesoDoKettlebell.innerHTML = `Peso da Prova: ${dados.kettlebellWeight} kg`;
    tempoDaProva.innerHTML = `Tempo da prova: ${dados.timeTest} min`
}