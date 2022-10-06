var agora = new Date()
var hora = agora.getHours()
var mensagem = window.document.querySelector('div#mensagem')
var imagem = window.document.getElementById('imagem')
var bomDia = hora > 0 && hora < 12
var boaTarde = hora <= 18
mensagem.innerHTML = `Agora são ${hora} horas!`
if (bomDia) {
    imagem.src = 'morning.png'
    document.body.style.background = '#C5C958'
}else if(boaTarde){
    imagem.src = 'afternoon.png'
    document.body.style.background = '#3D9EE1'
}else{
    imagem.src = 'night.png'
    document.body.style.background = '#713DE1'
}

const modal = document.querySelector('.modal')

function closeModal() {
  modal.classList.add('closeModal')
}