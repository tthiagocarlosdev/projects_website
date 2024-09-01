let senhasData = {};
const janelaDialog = document.getElementById("modal");

function escolherArquivo() {
    const fileInput = document.getElementById('file-input');
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
            // alert("Arquivo JSON carregado com sucesso!");
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

function carregarTabela() {
    sessionStorage.setItem('senhasData', JSON.stringify(senhasData));
    window.location.href = './pages/tabela.html';
};

function criarArquivo(){
    sessionStorage.setItem('senhasData', JSON.stringify(senhasData));
    window.location.href = './pages/tabela.html';
};