import { options } from './unidades_policiais.js';

const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    toView()
});

function loadOptions() {
    const optionsList = document.getElementById('options-list');

    options.forEach(option => {
        const optionElement = document.createElement('option');
        optionElement.value = option;
        optionsList.appendChild(optionElement);
    });
}

loadOptions(); // Chama a função para carregar as opções quando a página carrega

let technical = {
    names:[],
    enrollment:[],
}

const addTechniciansButton = document.getElementById('addTechniciansButton');
addTechniciansButton.addEventListener('click', addTechnicians);


function addTechnicians(){
    let name = document.querySelector('#name_technician').value;
    let registration = document.querySelector('#registration_technician').value;
    let lista = document.querySelector('#list_of_technicians')    
    const regex_registration = /(^[0-9]{3}.[0-9]{3}-[0-9])/

    if(containsInTheList(name, technical.names) || containsInTheList(registration, technical.enrollment)){
        alert('Técnico já está na lista!')
    } else if(name.length == 0){
        alert("Informe o nome do técnico!")
    } else if(registration.length == 0){
        alert("Informe a matrícula do técnico!")
    } else if(!regex_registration.test(registration)){
        alert("Informe uma matrícula correta!")
    } else {
        technical.names.push(name);
        technical.enrollment.push(registration);
    }
    
    let content = '';
    for (let i = 0; i < technical.names.length; i++) {
        content += `<p class="list-technical-and-registration" > 
        <span>Nome:</span> ${technical.names[i]}, 
        <span>Matrícula:</span> ${technical.enrollment[i]} 
        <a onclick="removeTechnical(this,${i})"> 
        <i class="fa-solid fa-rectangle-xmark"></i> 
        </a> </p> <br>`;
        lista.innerHTML = content;
    }
}

function removeTechnical(item, index) {
    const technicalItem = item.parentElement;
    technicalItem.remove();
    technical.names.splice(index, 1); // remove o nome correspondente
    technical.enrollment.splice(index, 1); // remove a matrícula correspondente
    console.log(technical)
}


function toView(){
    const pageData = {}

    pageData.serviceLocation = document.querySelector('.place-of-care-input').value
    pageData.dateAndTime = document.querySelector('#date_and_time_input').value
    console.log(pageData.dateAndTime)
    pageData.dateAndTimeInBrazilianFormat = dateTime(pageData.dateAndTime)
    console.log(dateTime(pageData.dateAndTime))
    pageData.reportedDefect = document.querySelector('#reported_defect').value
    pageData.performedServices = document.querySelector('#performed_services').value
    pageData.techniciansData = technical
    pageData.userName = document.querySelector('#user_name').value
    pageData.userRegistration = document.querySelector('#user_registration').value

    let regex_registration = /(^[0-9]{3}.[0-9]{3}-[0-9])/
    let validUserRegistration = regex_registration.test(pageData.userRegistration)
   
    if(pageData.serviceLocation.length == 0){
        alert("ATENÇÃO! Adicione o Local de Atendimento!")
    } else if (pageData.reportedDefect.length == 0) {
        alert("ATENÇÃO! Informe a demanda solicitada!")
    } else if (pageData.performedServices.length == 0) {
        alert("ATENÇÃO! Informe os serviços executados!")
    } else if (pageData.techniciansData.names == 0) {
        alert("ATENÇÃO! Informe pelo menos um técnico!")
    } else if (pageData.userName.length == 0) {
        alert("ATENÇÃO! Informe o nome completo do usuário!")
    } else if (pageData.userRegistration.length == 0) {
        alert("ATENÇÃO! Informe o número de matrícula do usuário!")
    } else if (!validUserRegistration) {
        alert("ATENÇÃO! Informe um número válido de matrícula do usuário!")
    } else {
        var dados_str = JSON.stringify(pageData);
        window.location.href = "page_view.html?pageData=" + encodeURIComponent(dados_str);
    }
}

//functions declarations
function dateTime(value) {
    const formatter = new Intl.DateTimeFormat("pt-br", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric"
    });

    if (value.length === 0) {
        // Código para retornar a data, hora e dia da semana atuais
        const computerDate = new Date();
        return formatter.format(computerDate);

    } else {
        // Código para retornar a data, hora e dia da semana a partir do valor fornecido
        const dateObject = new Date(value);
        return formatter.format(dateObject);
    }
}

//função que testa se o valor digitado já se encontra na lista.
function containsInTheList(value, list){
    if(list.indexOf(value) != -1){
        return true
    } else {
        return false
    }
}