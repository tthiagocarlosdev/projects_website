const typed_text = document.querySelector('.typed-text')
const athlete_name = document.querySelector('#athleteName')

// let teste = {
//     nomeDoAtleta:"",
// }

let teste = '';

function dados(data){
    return data
}

function registrationFunction(){
    // if(dataAthlete.athleteName.value == ''){
    //     alert('Please text athelte name');
    // }

    const dataAthlete = {
        athleteName: athlete_name.value,
    };

    teste.nomeDoAtleta = dataAthlete.athleteName.value

    console.log(dataAthlete)

    teste = dados(dataAthlete.athleteName)    
    
} 


console.log(teste)