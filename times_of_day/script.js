const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const images = document.getElementById('photo');
let counter = 0;
const modal = document.querySelector('.modal')

function closeModal() {
  modal.classList.add('closeModal')
}

const myImages = {
    morning:[
        "https://images.pexels.com/photos/955656/pexels-photo-955656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/910411/pexels-photo-910411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/2278543/pexels-photo-2278543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/757240/pexels-photo-757240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/297954/pexels-photo-297954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    afternoon:[
        "https://images.pexels.com/photos/2911667/pexels-photo-2911667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1117256/pexels-photo-1117256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/4298129/pexels-photo-4298129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/5931979/pexels-photo-5931979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/13359833/pexels-photo-13359833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    nights:[
        "https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/421129/pexels-photo-421129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/239107/pexels-photo-239107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/96810/pexels-photo-96810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]
}

const counterTime = setInterval(function cT(){
    counter++;
    if(counter == 5) counter = 0;
}, 300000)

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hours = dateToday.getHours();
    let minutes = dateToday.getMinutes();
    let seconds = dateToday.getSeconds();

    if(hours < 10) hours = '0' + hours;
    if(minutes < 10) minutes = '0' + minutes;
    if(seconds < 10) seconds = '0' + seconds;

    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = seconds;

    if(hours >= 19 || hours < 5){
        images.src = myImages.nights[counter];
        document.body.style.background = 'rgb(60, 0, 138)';
    } else if(hours >= 12){
        images.src = myImages.afternoon[counter];
        document.body.style.background = 'rgb(255, 86, 2)';
    } else if (hours >= 5){
        images.src = myImages.morning[counter];
        document.body.style.background = 'rgb(0, 199, 253)';
    }

})