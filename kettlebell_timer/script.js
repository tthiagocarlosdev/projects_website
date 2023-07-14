function registrationFunction(){
    const athlete_name = document.querySelector('#athleteName');
    const athlete_test  = document.querySelector('#athleteTest');
    const kettlebell_weight = document.querySelector('#kettlebellWeight');
    const time_test = document.querySelector('#timeTest');

    const dataAthlete = {
        athleteName: athlete_name.value,
        athleteTest: athlete_test.value,
        kettlebellWeight: kettlebell_weight.value,
        timeTest: time_test.value,
    };

    if(dataAthlete.athleteName.length == 0 || 
        dataAthlete.athleteTest.length == 0 || 
        dataAthlete.kettlebellWeight.length == 0 ||
        dataAthlete.timeTest.length == 0){
        alert('Preencha todos os dados');
    }else{
        const dados_str = JSON.stringify(dataAthlete);
        window.location.href = "./pages/page_start.html?dataAthlete=" + encodeURIComponent(dados_str);
    }
}