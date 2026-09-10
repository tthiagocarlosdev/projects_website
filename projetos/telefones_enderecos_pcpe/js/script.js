// Importando a lista de unidades
import { unidadesPoliciais } from './unidades.js';

// Obtendo referências aos elementos do DOM
const datalist = document.getElementById('options-list'); // Preencher o datalist com as opções de unidades
const botaoCarregar = document.getElementById('botao_carregar');

// Iterar sobre a matriz de unidades e adicionar cada nome de unidade ao datalist
unidadesPoliciais.forEach(unidade => {
    const option = document.createElement('option');
    option.value = unidade.nomeDaUnidade;
    datalist.appendChild(option);
});

// Adicionando evento de clique ao botão carregar
botaoCarregar.addEventListener('click', function(event) {
    event.preventDefault();
    
    // Chamar a função para carregar as informações da unidade
    carregarInformacoesUnidade();
});

// Função para carregar as informações da unidade ao ser clicado o botão ou ao carregar a página
function carregarInformacoesUnidade() {
    // Remover os botões de cópia existentes
    removerBotoesCopiar();

    // Remover a lista de telefones existente
    removerListaDeTelefones();

    // Obter as informações da unidade selecionada
    const informacoesUnidade = obterInformacoesUnidadeSelecionada();

    // Verificar se as informações da unidade foram retornadas
    if (informacoesUnidade) {
        // Se sim, exibir as informações no console
        console.log(informacoesUnidade);

        // Carregar o nome da unidade
        carregarNomeDaUnidade(informacoesUnidade);
        // Carregar o endereço da unidade
        carregarEnderecoDaUnidade(informacoesUnidade);
        // Carregar os telefones da unidade
        carregarTelefoneDaUnidade(informacoesUnidade);
        // Carregar as coordenadas da unidade
        carregarCoordenadasDaUnidade(informacoesUnidade);
        // Carregar o mapa da unidade
        carregarMapaDaUnidade(informacoesUnidade);

        // Adicionar dinamicamente o botão "Copiar Tudo" após carregar as informações da unidade
        adicionarBotaoCopiarTudo();

        // Chamando a função para adicionar o botão "Copiar" na div box_unidade_policial
        adicionarBotaoCopiar('box_unidade_policial', 'nome_da_unidade');

        // Chamando a função para adicionar o botão "Copiar" na div box_endereco
        adicionarBotaoCopiar('box_endereco', 'endereco_da_unidade');

        // Chamando a função para adicionar o botão "Copiar" na div box_iframe
        adicionarBotaoCopiar('box_localizacao', 'latitude_longitude_da_unidade');

        // Chamar a função para adicionar o botão "Copiar" em cada item da lista de telefones
        adicionarBotaoCopiarTelefone('lista_numeros_de_telefones', 'span_numero_de_telefone');

        // Chamar a função para adicionar o botão "Copiar Todos" na div box_telefone
        adicionarBotaoCopiarTodos();

    } else {
        // Se não, exibir a mensagem no console
        console.log("Unidade não encontrada!")
    }
}

// Função para remover os botões de cópia existentes
function removerBotoesCopiar() {
    // Remover todos os botões de cópia existentes
    document.querySelectorAll('.botao_copiar').forEach(botao => botao.remove());
}

// Função para remover a lista de telefones existente
function removerListaDeTelefones() {
    document.querySelectorAll('.lista_numeros_de_telefones').forEach(lista => lista.remove());
}


// Função para retornar as informações da unidade selecionada ou "Unidade não encontrada" caso não seja encontrada
function obterInformacoesUnidadeSelecionada() {
    // Obter o nome da unidade selecionada
    const nomeUnidadeSelecionada = document.getElementById('search-input').value;

    // Localizar o objeto da unidade selecionada
    const unidadeSelecionada = unidadesPoliciais.find(unidade => unidade.nomeDaUnidade === nomeUnidadeSelecionada);

    // Verificar se a unidade foi encontrada
    if (unidadeSelecionada) {
        // Criar um novo objeto com as informações da unidade selecionada
        const informacoesUnidadeSelecionada = {
            nomeDaUnidade: unidadeSelecionada.nomeDaUnidade,
            enderecoDaUnidade: unidadeSelecionada.enderecoDaUnidade,
            telefoneDaUnidade: unidadeSelecionada.telefoneDaUnidade,
            coordenadasDaUnidade: unidadeSelecionada.coordenadasDaUnidade
        };

        // Retornar as informações da unidade selecionada
        return informacoesUnidadeSelecionada;
    } else {
        // Se a unidade não for encontrada, imprimir a mensagem no console
        alert('Digite o nome de uma unidade!');
        console.log('Unidade não encontrada!');
        // Retornar null para indicar que a unidade não foi encontrada
        return null;
    }
}

// Função para carregar o nome da unidade no elemento span
function carregarNomeDaUnidade(informacoesUnidade) {
    // Obter o elemento span com o ID "nome_da_unidade"
    const spanNomeUnidade = document.getElementById('nome_da_unidade');

    // Verificar se as informações da unidade foram fornecidas
    if (informacoesUnidade) {
        // Atualizar o conteúdo do span com o nome da unidade
        spanNomeUnidade.textContent = informacoesUnidade.nomeDaUnidade;
    } else {
        // Se as informações da unidade não foram fornecidas, limpar o conteúdo do span
        spanNomeUnidade.textContent = '';
    }
}

// Função para carregar o endereço da unidade no elemento span
function carregarEnderecoDaUnidade(informacoesUnidade) {
    // Obter o elemento span com o ID "endereco_da_unidade"
    const spanEnderecoUnidade = document.getElementById('endereco_da_unidade');

    // Verificar se as informações da unidade foram fornecidas
    if (informacoesUnidade) {
        // Atualizar o conteúdo do span com o endereço da unidade
        spanEnderecoUnidade.textContent = informacoesUnidade.enderecoDaUnidade;
    } else {
        // Se as informações da unidade não foram fornecidas, limpar o conteúdo do span
        spanEnderecoUnidade.textContent = '';
    }
}



// Função para carregar os telefones da unidade no elemento span
function carregarTelefoneDaUnidade(informacoesUnidade) {
    // Obter o elemento span com o ID "telefones_da_unidade"
    const spanTelefonesUnidade = document.getElementById('telefones_da_unidade');
    const divBoxSecaoTelefone = document.getElementById('box_secao_telefone');

    // Verificar se as informações da unidade foram fornecidas e se os telefones estão disponíveis
    if (informacoesUnidade && informacoesUnidade.telefoneDaUnidade && informacoesUnidade.telefoneDaUnidade.length > 0) {
        // Limpar o conteúdo atual do span
        spanTelefonesUnidade.innerHTML = '';

        // Criar uma lista não ordenada para os telefones
        const listaTelefones = document.createElement('ul');
        listaTelefones.classList.add('lista_numeros_de_telefones'); // Adicionando a classe à lista

        // Iterar sobre os telefones da unidade
        informacoesUnidade.telefoneDaUnidade.forEach(telefone => {
            // Criar um item de lista para cada telefone
            const itemLista = document.createElement('li');
            const spanLista = document.createElement('span');
            spanLista.textContent = telefone;
            itemLista.classList.add('numero_de_telefone'); // Adicionando a classe ao elemento li
            spanLista.classList.add('span_numero_de_telefone')
            itemLista.appendChild(spanLista)
            listaTelefones.appendChild(itemLista);
        });

        // Adicionar a lista de telefones ao span
        spanTelefonesUnidade.appendChild(listaTelefones);
        divBoxSecaoTelefone.appendChild(listaTelefones);

    } else {
        // Se as informações da unidade ou os telefones não estiverem disponíveis, limpar o conteúdo do span
        spanTelefonesUnidade.textContent = '';
    }
}


// Função para carregar as coordenadas da unidade no elemento span
function carregarCoordenadasDaUnidade(informacoesUnidade) {
    // Obter o elemento span com o ID "latitude_longitude_da_unidade"
    const spanCoordenadas = document.getElementById('latitude_longitude_da_unidade');

    // Verificar se as informações da unidade foram fornecidas e se as coordenadas estão disponíveis
    if (informacoesUnidade && informacoesUnidade.coordenadasDaUnidade && informacoesUnidade.coordenadasDaUnidade.latitude && informacoesUnidade.coordenadasDaUnidade.longitude) {
        // Obter as coordenadas da unidade
        const latitude = informacoesUnidade.coordenadasDaUnidade.latitude;
        const longitude = informacoesUnidade.coordenadasDaUnidade.longitude;

        // Atualizar o conteúdo do span com as coordenadas da unidade no formato "latitude,longitude"
        spanCoordenadas.textContent = `${latitude},${longitude}`;
    } else {
        // Se as informações da unidade ou as coordenadas não estiverem disponíveis, limpar o conteúdo do span
        spanCoordenadas.textContent = 'Coordenadas não disponíveis';
    }
}


// Função para carregar o mapa da unidade no elemento iframe
function carregarMapaDaUnidade(informacoesUnidade) {
    // Obter o elemento iframe com o ID "map-frame"
    const iframeMapa = document.getElementById('map-frame');

    // Verificar se as informações da unidade foram fornecidas e se as coordenadas estão disponíveis
    if (informacoesUnidade && informacoesUnidade.coordenadasDaUnidade && informacoesUnidade.coordenadasDaUnidade.latitude && informacoesUnidade.coordenadasDaUnidade.longitude) {
        // Construir a URL do mapa com as coordenadas fornecidas
        const latitude = informacoesUnidade.coordenadasDaUnidade.latitude;
        const longitude = informacoesUnidade.coordenadasDaUnidade.longitude;
        const mapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d678.7986346482409!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1710509079163!5m2!1spt-BR!2sbr`;
        // Atualizar o atributo "src" do iframe com a URL do mapa
        iframeMapa.src = mapUrl;
    } else {
        // Se as informações da unidade ou as coordenadas não estiverem disponíveis, limpar o atributo "src" do iframe
        iframeMapa.src = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058240.75215817!2d-39.50934462849578!3d-6.6313021556049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7007c9d931c86c5%3A0x1de0196a93401726!2sPernambuco!5e0!3m2!1spt-BR!2sbr!4v1710516559473!5m2!1spt-BR!2sbr`;
    }
}


// Função para adicionar o botão "Copiar" após o elemento <p> em uma div específica
function adicionarBotaoCopiar(nomeDaDiv, idDoSpan) {
    // Obter o elemento <p> dentro da div especificada
    const paragraphElement = document.querySelector(`.${nomeDaDiv} p`);

    // Criar o botão "Copiar"
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copiar ';

    // Criar o ícone
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa', 'fa-regular', 'fa-copy');

    // Adicionar o ícone como filho do botão
    copyButton.appendChild(iconElement);

    // Adicionar a classe ao botão
    copyButton.classList.add('botao_copiar');

    // Adicionar evento de clique ao botão "Copiar"
    copyButton.addEventListener('click', function() {
        // Copiar o texto do span para a área de transferência
        copiarDados(document.getElementById(idDoSpan));
    });

    // Adicionar o botão "Copiar" após o elemento <p>
    paragraphElement.insertAdjacentElement('afterend', copyButton);
}


// Função para adicionar o botão "Copiar" após cada elemento li da lista de telefones
function adicionarBotaoCopiarTelefone(classeUl, classeLi) {
    // Obter a lista de telefones da unidade
    const listaTelefones = document.querySelectorAll(`.${classeUl} .${classeLi}`);

    // Iterar sobre cada item da lista de telefones
    listaTelefones.forEach(itemLista => {
        // Criar o botão "Copiar" para o telefone
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copiar ';
        const icon = document.createElement('i');
        icon.classList.add('fa', 'fa-regular', 'fa-copy');
        copyButton.appendChild(icon);

        // Adicionar a classe ao botão
        copyButton.classList.add('botao_copiar');
        // console.log(itemLista)

        copyButton.addEventListener('click', function() {
            // Copiar apenas o número de telefone para a área de transferência
            copiarDados(itemLista);
        });

        // Adicionar o botão "Copiar" após o telefone no item da lista
        itemLista.insertAdjacentElement('afterend', copyButton);
    });
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


// Função para adicionar o botão "Copiar Todos" após o elemento <p> na div box_telefone
function adicionarBotaoCopiarTodos(classeUl, classeLi) {
    // Obter o elemento <p> dentro da div box_telefone
    const paragraphElement = document.querySelector('.box_telefone p');

    // Criar o botão "Copiar Todos"
    const copyAllButton = document.createElement('button');
    copyAllButton.textContent = 'Copiar Todos ';

    // Criar o ícone para o botão
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa', 'fa-regular', 'fa-copy');

    // Adicionar o ícone como filho do botão
    copyAllButton.appendChild(iconElement);

    // Adicionar a classe ao botão
    copyAllButton.classList.add('botao_copiar');

    // Adicionar evento de clique ao botão "Copiar Todos"
    copyAllButton.addEventListener('click', function() {
         // Copiar todos os números de telefone para a área de transferência
        copiarTodosOsTelefones('lista_numeros_de_telefones', 'span_numero_de_telefone');
    });

    // Adicionar o botão "Copiar Todos" após o elemento <p> na div box_telefone
    paragraphElement.insertAdjacentElement('afterend', copyAllButton);
}



// Função para copiar todos os números de telefone para a área de transferência
function copiarTodosOsTelefones(classeUl, classeLi) {
    // Obter todos os elementos de número de telefone
    const numerosTelefone = document.querySelectorAll(`.${classeUl} .${classeLi}`);

    // Inicializar uma variável para armazenar todos os números de telefone
    let todosOsTelefones = '';

    // Iterar sobre cada número de telefone e adicioná-lo à string
    numerosTelefone.forEach(numero => {
        todosOsTelefones += numero.textContent.trim() + '\n'; // Adicionando um quebra de linha entre cada número
    });

    // Copiar a string de todos os números de telefone para a área de transferência
    copiarDados({ textContent: todosOsTelefones });
}


// Função para adicionar o botão "Copiar Todos" após o carregamento das informações da unidade
function adicionarBotaoCopiarTudo() {
    // Obter a div onde o botão será adicionado
    const boxBotaoCopiarTudoDiv = document.querySelector('.box_botao_copiar_tudo');

    boxBotaoCopiarTudoDiv.classList.add('boxs_resultado')

    // Criar o botão "Copiar Todos"
    const copyAllButton = document.createElement('button');
    copyAllButton.textContent = 'Copiar Tudo ';

    // Criar o ícone para o botão
    const iconElement = document.createElement('i');
    iconElement.classList.add('fa', 'fa-regular', 'fa-copy');

    // Adicionar o ícone como filho do botão
    copyAllButton.appendChild(iconElement);

    // Adicionar a classe ao botão
    copyAllButton.classList.add('botao_copiar');

    // Adicionar evento de clique ao botão "Copiar Todos"
    copyAllButton.addEventListener('click', function() {
        // Copiar todos os dados da unidade para a área de transferência
        copiarTodosOsDados();
    });

    // Adicionar o botão "Copiar Todos" à div
    boxBotaoCopiarTudoDiv.appendChild(copyAllButton);
}


// Função para copiar todos os dados da unidade para a área de transferência
function copiarTodosOsDados() {
    // Obter todas as informações da unidade
    const nomeDaUnidade = document.getElementById('nome_da_unidade').textContent.trim();
    const enderecoDaUnidade = document.getElementById('endereco_da_unidade').textContent.trim();
    
    // Obter os telefones da unidade e remover o texto "Copiar"
    const telefonesDaUnidade = Array.from(document.querySelectorAll('.lista_numeros_de_telefones .span_numero_de_telefone'))
                                     .map(telefone => telefone.textContent.replace('Copiar', '').trim())
                                     .join(', ');

    const coordenadasDaUnidade = document.getElementById('latitude_longitude_da_unidade').textContent.trim();

    // Concatenar todas as informações em uma string
    const dadosUnidade = `Nome: ${nomeDaUnidade}\nEndereço: ${enderecoDaUnidade}\nTelefones: ${telefonesDaUnidade}\nCoordenadas: ${coordenadasDaUnidade}`;

    // Copiar os dados da unidade para a área de transferência
    copiarDados({ textContent: dadosUnidade });
}
