# Teste de Impressora

Projeto hospedado no GitHub Pages com um pequeno serviço Node.js local.

## Estrutura

- `index.html` — página do teste
- `style.css` — estilos
- `script.js` — comunicação com o serviço local
- `server.js` — serviço Node.js que identifica o computador

## Como usar em outra máquina

1. Instale o Node.js.
2. Baixe o arquivo `server.js` pelo botão da página.
3. Abra o terminal na pasta onde salvou o arquivo.
4. Execute:

```bash
node server.js
```

5. Abra a página do projeto no GitHub Pages.
6. Clique em **IMPRIMIR TESTE**.

O serviço local informa:

- nome do computador;
- usuário do sistema;
- versão do Windows;
- endereço IPv4;
- data;
- hora.

O arquivo `server.js` não precisa de nenhuma dependência externa.
