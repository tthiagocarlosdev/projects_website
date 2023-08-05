window.onload = function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dados_str = urlParams.get('dataAthlete');
    const dados = JSON.parse(decodeURIComponent(dados_str));

    console.log(dados)

    document.getElementById('show_athlete_name').innerHTML = dados.athleteName;
    document.getElementById('show_athleteTest').innerHTML = dados.athleteTest;
    document.getElementById('show_kettlebellWeight').innerHTML = `${dados.kettlebellWeight}Kg`;
    if(dados.timeTest < 10){
        document.getElementById('minutos').innerHTML = `0${dados.timeTest}`;
    }else{
        document.getElementById('minutos').innerHTML = dados.timeTest;
    }
    

    // CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK - CLOCK
    // Define a quantidade de minutos que o cronômetro deve contar
    const minutos = dados.timeTest;
    let segundos = (minutos * 60) - 1; // Converte os minutos em segundos
    let intervalId;

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
            //Faz com que os botões +1 rep e -1 rep não apareçam na tela quan o cronometro zerar
            const incrementButton = document.getElementById('incrementButton');
            incrementButton.style.display = 'none';
            const decrementButton = document.getElementById('decrementButton');
            decrementButton.style.display = 'none';
            //Faz com que a mensagem final apareça na tela após o cronometro zerar
            const finalMessage = document.getElementById('final-message');
            finalMessage.style.display = 'block';
        }
        // Decrementa o número de segundos restantes
        segundos--;
    };

    // Adicione um evento de clique ao botão
    document.getElementById('startButton').addEventListener('click', () => {
        //Faz com que os botões +1 rep e -1 rep apareçam na tela
        const incrementButton = document.getElementById('incrementButton');
        incrementButton.style.display = 'flex';
        const decrementButton = document.getElementById('decrementButton');
        decrementButton.style.display = 'flex';
        
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
    const incrementNumber = () => {
        contador++;
        document.getElementById('repetations').innerHTML = contador;
    };

    const decrementNumber = () => {
        contador <= 0 ? contador = 0 : contador--;
        document.getElementById('repetations').innerHTML = contador;
    };
    
    // Adicione um evento de clique ao botão
    document.getElementById('incrementButton').addEventListener('click', incrementNumber);
    document.getElementById('decrementButton').addEventListener('click', decrementNumber);
    
};