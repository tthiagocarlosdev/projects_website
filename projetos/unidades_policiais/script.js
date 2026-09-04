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
          <div class="unidade-nome">${item.unidade}</div>
          <div class="diretoria-container">
            <span class="diretoria-label">Diretoria / Regional</span>
            <div class="diretoria-nome">${item.diretoria}</div>
          </div>
        `;
        resultadosDiv.appendChild(itemDiv);
      });
    }

    // Inicialização e Eventos
    document.addEventListener('DOMContentLoaded', () => {
      carregarDados();
      document.getElementById('inputPesquisa').addEventListener('input', executarPesquisa);
    });