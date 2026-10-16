let bancoDados = [];

    // Carrega o arquivo JSON assim que a página abre
    async function carregarDados() {
      const resultadosDiv = document.getElementById('resultados');
      try {
        // Busca o arquivo dados.json que está na mesma pasta do repositório
        const resposta = await fetch('dados.json');
        if (!resposta.ok) throw new Error('Não foi possível carregar o arquivo JSON.');
        bancoDados = await resposta.json();
      } catch (erro) {
        console.error(erro);
        resultadosDiv.innerHTML = '<div class="status-msg" style="color: #c0392b;">Erro crítico: Falha ao carregar a base de dados local.</div>';
      }
    }

    function executarPesquisa() {
      const termo = document.getElementById('inputPesquisa').value.toLowerCase().trim();
      const resultadosDiv = document.getElementById('resultados');

      // Se o campo estiver em branco
      if (termo === "") {
        resultadosDiv.innerHTML = '<div class="status-msg">Digite algo para iniciar a pesquisa.</div>';
        return;
      }

      // Filtra os dados: busca ocorrências na chave 'unidade'
      const filtrados = bancoDados.filter(item => 
        item.unidade.toLowerCase().includes(termo)
      );

      // Se não encontrar nada
      if (filtrados.length === 0) {
        resultadosDiv.innerHTML = '<div class="status-msg">Nenhuma unidade correspondente encontrada.</div>';
        return;
      }

      // Renderiza os cards na tela
      resultadosDiv.innerHTML = "";
      filtrados.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'resultado-item';
        
        itemDiv.innerHTML = `

          <div class="unidade-container" >
            <div class="unidade-nome">${item.unidade}</div>
            <button class="btn-copiar" type="button"> Copiar </button>
          </div>

          <div class="diretoria-container">
            <span class="diretoria-label">Diretoria / Regional</span>
            <div class="diretoria-nome">${item.diretoria}</div>
          </div>
        `;

      const botaoCopiar = itemDiv.querySelector('.btn-copiar');
    
      // Lógica de clique para copiar o texto
      botaoCopiar.addEventListener('click', () => {
      navigator.clipboard.writeText(item.unidade)
        .then(() => {
              // Feedback visual temporário no botão
              botaoCopiar.textContent = 'Copiado!';
              botaoCopiar.style.backgroundColor = '#4CAF50'; // Verde de sucesso
              botaoCopiar.style.color = '#fff';
              botaoCopiar.style.border = '1px solid black'
              
              // Restaura o botão após 1.5 segundos
              setTimeout(() => {
                  botaoCopiar.textContent = 'Copiar';
                  botaoCopiar.style.backgroundColor = '';
                  botaoCopiar.style.color = '';
              }, 1500);
          })
          .catch(err => {
              console.error('Erro ao copiar: ', err);
              alert('Não foi possível copiar o texto.');
          });
        })

        resultadosDiv.appendChild(itemDiv);
      });
    }

    // Inicialização e Eventos
    document.addEventListener('DOMContentLoaded', () => {
      carregarDados();
      document.getElementById('inputPesquisa').addEventListener('input', executarPesquisa);
    });