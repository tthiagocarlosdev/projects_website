let senhasData = {};
const janelaDialog = document.getElementById("modal");

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
            carregarTabela();
            // closeModal();
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

// function sendData() {
//     sessionStorage.setItem('senhasData', JSON.stringify(senhasData));
//     window.location.href = 'mostrar-individual.html';
// };

function carregarTabela() {
    sessionStorage.setItem('senhasData', JSON.stringify(senhasData));
    window.location.href = './pages/tabela.html';
};