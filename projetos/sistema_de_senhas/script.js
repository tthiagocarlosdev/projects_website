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
    
    console.log(verificarConteudoOutros(sistema));

    // Remover botões "Copiar" existentes antes de adicionar novos
    removerBotoesCopiar();

    // Adicionar botões "Copiar" 
    if ( sistema.login.length !== 0 ) {
        adicionarBotaoCopiar('login_sistema');
    };
    if ( sistema.senha.length !== 0 ) {
        adicionarBotaoCopiar('senha_sistema');
    };

    renderizarOutros(sistema.outros);
    
}

function renderizarOutros(outros) {
    const boxOutro = document.getElementById('box_outro');
    // Limpa o conteúdo atual antes de adicionar novos elementos
    boxOutro.innerHTML = '';

    if (outros && 
        Array.isArray(outros.outrosNomes) && outros.outrosNomes.length !== 0 && 
        Array.isArray(outros.outrosSenhas) && outros.outrosSenhas.length !== 0) {
        
        for (let i = 0; i < outros.outrosNomes.length; i++) {
            const nome = `${outros.outrosNomes[i]}: `;
            const senha = outros.outrosSenhas[i];

            const div = document.createElement('div')

            const p = document.createElement('p');
            p.id = `outros${i}`;
            p.textContent = nome;

            const span = document.createElement('span');
            span.id = `outro_senha${i}`;
            span.textContent = senha;

            p.appendChild(span);
            div.appendChild(p)
            boxOutro.appendChild(div);
            adicionarBotaoCopiar(`outros${i}`);
        }

    } else {
        
        const p = document.createElement('p');
        p.textContent = `Lista de outros vazia.`;
        boxOutro.appendChild(p);

    }
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

function adicionarBotaoCopiar(paragraphElementId) {
    // Obter o elemento <p> pelo id
    const paragraphElement = document.getElementById(paragraphElementId);

    // Criar o botão "Copiar"
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar';

    // Adicionar a classe ao botão
    copyButton.classList.add('botao_copiar');
    copyButton.classList.add('button');

    // Adicionar evento de clique ao botão "Copiar"
    copyButton.addEventListener('click', function() {
        // Obter o span dentro do próprio parágrafo
        const spanElement = paragraphElement.querySelector('span');
        // Copiar o texto do span para a área de transferência
        copiarDados(spanElement);
    });

    // Adicionar o botão "Copiar" após o elemento <p>
    paragraphElement.insertAdjacentElement('afterend', copyButton);
}
