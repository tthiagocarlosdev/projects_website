// Declaração de variáveis
const dataAtual = document.querySelector('.data_atual');
const informacoesPrincipais = {};


// Declaração de funções
// Função para Deixar a primeira Letra da string em maiúsculo
function primeiraLetraEmMaiusculo(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

// Função para obter a data e hora atual
function dataHora() {
  const formatter = new Intl.DateTimeFormat("pt-br", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric"
  });

  const dataDoComputador = new Date();
  return primeiraLetraEmMaiusculo(formatter.format(dataDoComputador));
}

// Função para obter informações sobre o sistema operacional
function obterSistemaOperacional() {
  return window.navigator.platform;
}

// Função para obter informações sobre o navegador
function obterNomeDoNavegador() {
  const userAgentString = window.navigator.userAgent;
  const agentesConhecidos = [
      { nome: 'Chrome', string: 'Chrome' },
      { nome: 'Firefox', string: 'Firefox' },
      { nome: 'Safari', string: 'Safari' },
      { nome: 'Edge', string: 'Edg' },
      { nome: 'Internet Explorer', string: 'Trident' }
  ];

  for (const agente of agentesConhecidos) {
      if (userAgentString.includes(agente.string)) {
          return agente.nome;
      }
  }

  return 'Desconhecido';
}

// Função para obter a resolução da tela
function obterResolucaoDaTela() {
  const larguraTela = window.screen.width;
  const alturaTela = window.screen.height;

  return `${larguraTela} x ${alturaTela}`;
}

// Função para obter o endereço IP público
function obterEnderecoIpPublico() {
  return fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => {
          const enderecoIP = data.ip;
          return `${enderecoIP}`;
      })
      .catch(error => {
          console.error('Erro ao obter o endereço IP:', error);
          return `Erro ao obter o endereço IP`
      });
}


// Função para criar os elementos HTML com as informações fornecidas
function criarElementos(informacoesPrincipais) {
  
  let conteudo = '';

  for (let i = 0; i < 4; i++) {
      conteudo += `Teste de Impressora: <span>${informacoesPrincipais.dataAtualFormatada}</span> - 
                  Sitema Operacional: <span>${informacoesPrincipais.sistemaOperacional}</span> - 
                  Navegador: <span>${informacoesPrincipais.navegador}</span> - 
                  Resolução da Tela: <span> ${informacoesPrincipais.resolucaoDaTela}</span> - 
                  Endereço IP Público: <span> ${informacoesPrincipais.enderecoIpPublico}</span>; `;
  }

  const secoesTextoData = document.querySelectorAll('.secao_texto_data');

  secoesTextoData.forEach(function(secao) {
      const p = `<p>${conteudo}</p>`;
      secao.insertAdjacentHTML('afterbegin', p);
  });
}


// Função principal assíncrona
async function main() {
  try {
    dataAtual.innerHTML = dataHora();
    informacoesPrincipais.dataAtualFormatada = dataHora();
    informacoesPrincipais.sistemaOperacional = obterSistemaOperacional();
    informacoesPrincipais.navegador = obterNomeDoNavegador();
    informacoesPrincipais.resolucaoDaTela = obterResolucaoDaTela();
    informacoesPrincipais.enderecoIpPublico = await obterEnderecoIpPublico();
  
    criarElementos(informacoesPrincipais);
      console.log(informacoesPrincipais)
  } catch (error) {
    console.error('Erro:', error);
    criarElementos(informacoesPrincipais);
    console.log(informacoesPrincipais)
  }
}

// Chamada da função principal
main();