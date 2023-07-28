window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dados_str = urlParams.get('dataAthlete');
    const dados = JSON.parse(decodeURIComponent(dados_str));

    // const nomeDoAtleta = document.querySelector('.nome_do_atleta');
    // const nomeDaProva = document.querySelector('.nome_da_prova')
    // const pesoDoKettlebell = document.querySelector('.peso_do_kettlebell');
    // const tempoDaProva = document.querySelector('.tempo_da_prova');
    console.log(dados)

    document.getElementById('show_athlete_name').innerHTML = dados.athleteName;
    document.getElementById('show_athleteTest').innerHTML = dados.athleteTest;
    document.getElementById('show_kettlebellWeight').innerHTML = `${dados.kettlebellWeight} Kg`;
    if(dados.timeTest < 10){
        document.getElementById('minutos').innerHTML = `0${dados.timeTest}`;
    }else{
        document.getElementById('minutos').innerHTML = dados.timeTest;
    }
    

    // CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK
    // Define a quantidade de minutos que o cronômetro deve contar
    // const minutos = dados.timeTest;
    const minutos = 1
    let intervalId;

    // Converte os minutos em segundos
    // let segundos = (minutos * 60) - 1;
    let segundos = 10

    // Define uma função que atualiza o cronômetro a cada segundo
    const atualizarCronometro = () => {
        // Converte os segundos em minutos e segundos
        const minutosExibicao = Math.floor(segundos / 60).toString().padStart(2, "0");
        const segundosExibicao = (segundos % 60).toString().padStart(2, "0");

        // Atualiza o texto do cronômetro
        document.getElementById('minutos').innerHTML = minutosExibicao;
        document.getElementById('segundos').innerHTML = segundosExibicao;
        
        if(minutosExibicao === "00" && segundosExibicao <= 0){
            clearInterval(intervalId); // Para o cronômetro quando atingir zero
            const incrementButton = document.getElementById('incrementButton');
            incrementButton.style.display = 'none'
        }
        // Decrementa o número de segundos restantes
        segundos--;
    };

    // Adicione um evento de clique ao botão
    document.getElementById('startButton').addEventListener('click', () => {
        //Faz com que o botão +1 rep apareça na tela
        const incrementButton = document.getElementById('incrementButton');
        incrementButton.style.display = 'flex'
        
        // Chama a função atualizarCronometro a cada segundo
        intervalId = setInterval(atualizarCronometro, 1000);
        atualizarCronometro(); // Chama a função imediatamente para atualizar o cronômetro ao iniciar

        //Tira o botão start da tela após ser clicado
        const startButton = document.getElementById('startButton');
        startButton.style.display = 'none'
        
    });

    //BOTAO INCREMENTAR BOTAO INCREMENTAR BOTAO INCREMENTAR BOTAO INCREMENTAR
    let contador = 0;

    // Função para atualizar o número na tela
    const atualizarNumero = () => {
        contador++;
        document.getElementById('repetations').innerHTML = contador;
    };

    // Adicione um evento de clique ao botão
    document.getElementById('incrementButton').addEventListener('click', atualizarNumero);

};