var imprimir = document.getElementById("btnImprimir")
window.onload = function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var dados_str = urlParams.get('pageData');
    var dados = JSON.parse(decodeURIComponent(dados_str));

    document.getElementById('place_of_care').innerHTML = dados.serviceLocation.toUpperCase();
    document.getElementById('date_and_time').innerHTML = dados.dateAndTimeInBrazilianFormat.toUpperCase();
    document.getElementById('reported_defect').innerHTML = dados.reportedDefect.toUpperCase();
    document.getElementById('performed_services').innerHTML = dados.performedServices.toUpperCase();
    let list = document.querySelector('#list_of_technicians')
    
    let content = '';
    for (let i = 0; i < dados.techniciansData.names.length; i++) {
        content += `<p> <span style="font-weight: bold; font-size: 1.2rem;">Nome:</span> ${dados.techniciansData.names[i].toUpperCase()}, <span style="font-weight: bold; font-size: 1.2rem;">Matrícula:</span> ${dados.techniciansData.enrollment[i].toUpperCase()} </p>`;
        list.innerHTML = content;
    }
    document.getElementById('user_name').innerHTML = dados.userName.toUpperCase();
    document.getElementById('user_registration').innerHTML = dados.userRegistration.toUpperCase();
}

imprimir.addEventListener("click",() => {
    window.print();
});