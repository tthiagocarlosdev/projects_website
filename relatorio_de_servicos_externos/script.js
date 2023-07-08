let technical = {
    names:[],
    enrollment:[],
}


function addTechnicians(){
    let name = document.querySelector('#name_technician').value;
    let registration = document.querySelector('#registration_technician').value;
    let lista = document.querySelector('#list_of_technicians')
    const regex_registration = /(^[0-9]{3}.[0-9]{3}-[0-9])/

    if(containsInTheList(name, technical.names) || containsInTheList(registration, technical.enrollment)){
        alert('Técnico já está na lista!')
    } else if( !regex_registration.test(registration) ){
        alert("Informe uma matrícula correta!")
    } else if(registration.length == 0){
        alert("Por favor, informe a matrícula do técnico!")
    } else if(name.length == 0){
        alert("Por favor, informe o nome do técnico!")
    } else {
        technical.names.push(name);
        technical.enrollment.push(registration);
    }
    
    let content = '';
    for (let i = 0; i < technical.names.length; i++) {
        content += `<span style="font-weight: bold;">Nome:</span> ${technical.names[i]}, <span style="font-weight: bold;">Matrícula:</span> ${technical.enrollment[i]}<br>`;
        lista.innerHTML = content;
    }
}

function toView(){
    const pageData = {}

    pageData.serviceLocation = document.querySelector('.place_of_care_select').value
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
        alert("Por favor, adicione o Local de Atendimento!")
    } else if (pageData.reportedDefect.length == 0) {
        alert("Por favor, informe o defeito!")
    } else if (pageData.performedServices.length == 0) {
        alert("Por favor, informe o serviço executado!")
    } else if (pageData.techniciansData.names == 0) {
        alert("Por favor, informe pelo menos um técnico!")
    } else if (pageData.userName.length == 0) {
        alert("Por favor, informe o nome completo do usuário!")
    } else if (pageData.userRegistration.length == 0) {
        alert("Por favor, informe o número de matrícula do usuário!")
    } else if (!validUserRegistration) {
        alert("Por favor, informe um número válido de matrícula do usuário!")
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