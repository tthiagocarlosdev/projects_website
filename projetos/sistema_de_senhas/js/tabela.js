let senhasData;

window.onload = function(){
    senhasData = JSON.parse(sessionStorage.getItem('senhasData'));
    // console.log(senhasData);
    renderTable();
};

// Função para renderizar a tabela com os nomes dos sistemas em ordem alfabética
function renderTable() {
    const tableBody = document.querySelector('#sistemasTable tbody');
    const sistemasOrdenados = senhasData.senhas.sort((a, b) => a.nomeDoSistema.localeCompare(b.nomeDoSistema));
    sistemasOrdenados.forEach(sistema => {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.textContent = sistema.nomeDoSistema;
        row.appendChild(cell);
        tableBody.appendChild(row);
    });
};


function paginaInicial(){
    window.location.href = '../index.html';
};