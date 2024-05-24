let senhasData = {};
const janelaDialog = document.getElementById("modal");
const datalist = document.getElementById('opcoes_de_sistemas')

function escolherArquivo() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (file) {
        loadJSON(file);
    } else {
        alert("Por favor, selecione um arquivo JSON.");
    }
}

function loadJSON(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            senhasData = JSON.parse(event.target.result);
            alert("Arquivo JSON carregado com sucesso!");
            // console.log(senhasData);
            listaSistemas(senhasData.senhas);
            closeModal();
        } catch (error) {
            alert("Erro ao carregar o arquivo JSON.");
            console.error(error);
        }
    };
    reader.readAsText(file);
}


// Função para fechar modal
function closeModal() {
    janelaDialog.close();
};

// Função para abrir modal
function abrirModal(){
    janelaDialog.showModal();
};

// Abre o modal quando a página é carregada
document.addEventListener('DOMContentLoaded', (event) => {
    abrirModal()
});


function listaSistemas(lista){
    // console.log(lista)
    // Verifica se lista.senhas é uma matriz
    if (Array.isArray(lista)) {
        // Itera sobre a lista de sistemas
        lista.forEach(sistema => {
            // Cria um elemento de opção para cada sistema
            const option = document.createElement('option');
            option.value = sistema.nomeDoSistema;
            datalist.appendChild(option);
        });
    } else {
        console.error("A lista de sistemas não é uma matriz.");
    }
}


// Função para buscar o sistema
function buscarSistema() {
    if (!senhasData) {
        alert("Por favor, carregue um arquivo JSON primeiro.");
        return;
    }

    const nomeDoSistema = document.getElementById('nome_do_sistema').value.trim().toLowerCase();
    if (!nomeDoSistema) {
        alert("Por favor, informe o nome do sistema.");
        return;
    }

    // Procurar pelo sistema na lista de senhas
    const sistema = senhasData.senhas.find(s => s.nomeDoSistema.toLowerCase() === nomeDoSistema);
    // console.log(sistema);

    if (!sistema) {
        alert("Sistema não encontrado.");
        return;
    }

    // console.log(sistema);

    // Atualizar a UI com as informações do sistema
    document.getElementById('linkSistema').href = sistema.endereco;
    document.getElementById('linkSistema').textContent = sistema.nomeDoSistema;
    document.getElementById('login').textContent = sistema.login;
    document.getElementById('senha').textContent = sistema.senha;

    // console.log(Object.keys(sistema.outros).length);
    
    // console.log(getArraySizes(sistema.outros));
    
    console.log(verificarConteudoOutros(sistema));

    // if (verificarConteudoOutros(sistema)) {
    //     atualizarOutros(sistema);

    //     sistema.outros.outrosNomes.forEach(element => {
    //         console.log(element);
    //     });
    // } else {
    //     console.log("Array vazio");

    //     atualizarOutros(sistema);
        
    //     // const outrosElement = document.getElementById('outros');
    //     // outrosElement.innerHTML = `Outros: <span id="outro_senha"> Não possui </span>`;
    // };

    if (sistema.outros.length === 0 && sistema.outrosSenha.length === 0) {
        const outrosElement = document.getElementById('outros');
        outrosElement.innerHTML = `Outros: <span id="outro_senha"> Não possui </span>`;
    } else {
        const outrosElement = document.getElementById('outros');
        outrosElement.innerHTML = `${sistema.outros}: <span id="outro_senha">${sistema.outrosSenha}</span>`;
    };

    // Remover botões "Copiar" existentes antes de adicionar novos
    removerBotoesCopiar();

    // Adicionar botões "Copiar" 
    if ( sistema.login.length !== 0 ) {
        adicionarBotaoCopiar('box_login_sistema', 'login');
    };
    if ( sistema.senha.length !== 0 ) {
        adicionarBotaoCopiar('box_senha_sistema', 'senha');
    };
    if (sistema.outros.length !== 0 && sistema.outrosSenha.length !== 0) {
        adicionarBotaoCopiar('box_outro', 'outro_senha');
    };
    
}

// Função para atualizar os elementos 'outros' e 'outro_senha'
function atualizarOutros(sistema) {
    const outrosElement = document.getElementById('outros');
    outrosElement.innerHTML = ""; // Limpa o conteúdo existente

    sistema.outros.outrosNomes.forEach((nome, index) => {
        const nomeElement = document.createElement('span');
        nomeElement.textContent = `${nome}: `;

        const senhaElement = document.createElement('span');
        senhaElement.id = 'outro_senha';
        senhaElement.textContent = sistema.outros.outrosSenhas[index];

        // Adiciona os elementos criados ao elemento 'outros'
        outrosElement.appendChild(nomeElement);
        outrosElement.appendChild(senhaElement);
        outrosElement.appendChild(document.createElement('br')); // Adiciona uma quebra de linha
    });
}


function verificarConteudoOutros(obj) {
    let resultado = false;

    if (Array.isArray(obj.outros.outrosNomes) && obj.outros.outrosNomes.length > 0) {
        resultado = true;
    }

    if (Array.isArray(obj.outros.outrosSenhas) && obj.outros.outrosSenhas.length > 0) {
        resultado = true;
    }

    return resultado;
}

// Função que retorna um novo objeto contendo os tamanhos dos arrays presentes no objeto original
function getArraySizes(obj) {
    const sizes = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
            sizes[key] = obj[key].length;
        }
    }
    return sizes;
}

// Função para remover todos os botões "Copiar" existentes
function removerBotoesCopiar() {
    const existingCopyButtons = document.querySelectorAll('.botao_copiar');
    existingCopyButtons.forEach(button => button.remove());
}

//Função para copiar o texto para a área de transferência
function copiarDados(element) {
    const text = element.textContent.trim();
    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = text;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);
    alert(`${text} copiado para a área de transferência.`);
}


// Função para adicionar o botão "Copiar" após o elemento <p> em uma div específica
function adicionarBotaoCopiar(nomeDaDiv, idDoSpan) {
    // Obter o elemento <p> dentro da div especificada
    const paragraphElement = document.querySelector(`#${nomeDaDiv} p`);

    // Criar o botão "Copiar"
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar ';

    // Adicionar a classe ao botão
    copyButton.classList.add('botao_copiar');
    copyButton.classList.add('button');

    // Adicionar evento de clique ao botão "Copiar"
    copyButton.addEventListener('click', function() {
        // Copiar o texto do span para a área de transferência
        copiarDados(document.getElementById(idDoSpan));
    });

    // Adicionar o botão "Copiar" após o elemento <p>
    paragraphElement.insertAdjacentElement('afterend', copyButton);
}

