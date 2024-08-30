let senhasData;

window.onload = function(){
    senhasData = JSON.parse(sessionStorage.getItem('senhasData'));
    console.log(senhasData);
    renderizarSistemas();
};

// Receber dados existentes de sessionStorage
// const senhasData = JSON.parse(sessionStorage.getItem('senhasData')) || { senhas: [] };
        
function renderizarSistemas() {
    const listaSistemas = document.getElementById('sistemasList');
    listaSistemas.innerHTML = '';  // Limpa a lista para evitar duplicações

    senhasData.senhas.forEach((sistema, index) => {
        const li = document.createElement('li');
        li.textContent = sistema.nomeDoSistema;

        li.classList.add('sistema-item');
        li.classList.add('displayFlexCenterCenter');

        // Botão de editar
        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.classList.add('button');
        editButton.addEventListener('click', () => preencherFormulario(index));
        li.appendChild(editButton);

        // Botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('button');
        deleteButton.addEventListener('click', () => excluirSistema(index));
        li.appendChild(deleteButton);

        listaSistemas.appendChild(li);
    });
}

function preencherFormulario(index) {
    const sistema = senhasData.senhas[index];
    document.getElementById('nomeDoSistema').value = sistema.nomeDoSistema;
    document.getElementById('endereco').value = sistema.endereco;
    document.getElementById('login').value = sistema.login;
    document.getElementById('senha').value = sistema.senha;
    document.getElementById('outrosNomes').value = sistema.outros.outrosNomes.join(', ');
    document.getElementById('outrosSenhas').value = sistema.outros.outrosSenhas.join(', ');
    document.getElementById('sistemaForm').dataset.index = index;
}

function excluirSistema(index) {
    senhasData.senhas.splice(index, 1);
    renderizarSistemas();
}

document.getElementById('sistemaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const index = this.dataset.index;

    const sistemaAtualizado = {
        nomeDoSistema: document.getElementById('nomeDoSistema').value,
        endereco: document.getElementById('endereco').value,
        login: document.getElementById('login').value,
        senha: document.getElementById('senha').value,
        outros: {
            outrosNomes: document.getElementById('outrosNomes').value.split(',').map(nome => nome.trim()),
            outrosSenhas: document.getElementById('outrosSenhas').value.split(',').map(senha => senha.trim())
        }
    };

    if (index !== undefined && index !== "") {
        senhasData.senhas[index] = sistemaAtualizado; // Atualizar sistema existente
    } else {
        senhasData.senhas.push(sistemaAtualizado); // Adicionar novo sistema
    }

    this.reset(); // Resetar o formulário
    delete this.dataset.index;
    renderizarSistemas();
    console.log(senhasData);
});

document.getElementById('downloadJson').addEventListener('click', function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(senhasData, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "senhas_atualizado.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
});

// Renderizar a lista de sistemas ao carregar a página
// window.onload = renderizarSistemas;