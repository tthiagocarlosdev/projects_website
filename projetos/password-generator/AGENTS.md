# Contexto do Projeto - Password Generator

## Objetivo
Gerador de senhas seguras desenvolvido em HTML, CSS e JavaScript puro. O sistema permite ao usuário gerar senhas com quantidade customizada entre 8 e 40 caracteres, garantindo que contenham pelo menos um caractere de cada tipo exigido.

## Estado atual
- Projeto funcional em sua 2ª versão
- Interface com instruções, campo para quantidade de caracteres e botão "Gerar senha"
- Gera senha garantindo no mínimo: letras maiúsculas, minúsculas, números e símbolos
- Exibe resultado em modal com breakdown dos tipos de caracteres e botão para copiar
- Possui modal informativo sobre a versão
- Evita caracteres repetidos na senha gerada

## Estrutura
- `index.html` - Estrutura HTML com interface, modais e referências JS/CSS
- `scripts.js` - Lógica de geração, validação, modais e cópia para área de transferência
- `style.css` - Estilos da página
- `images/` - Pasta com imagens (vazia ou com assets)

## Arquivos alterados
- `index.html` - Botão de copiar no modal passa `this` para `copyToClipboard`
- `scripts.js` - Função `copyToClipboard` reescrita para aceitar botão, copiar do `#password_modal`, mostrar feedback "Copiado!" com classe `.success` e tratamento defensivo
- `style.css` - Ajuste da regra `.success` para maior especificidade (sobrescrever cores do botão)

## Decisões importantes
- Geração baseada em códigos ASCII (33-126) com filtragem por faixa
- Garante mínimo de caracteres por tipo = floor(n/4) para n entre 8-40
- Regera senha caso não atinja mínimo de cada tipo
- Evita repetições através de verificação dupla
- Usa `navigator.clipboard.writeText()` para copiar senha

## Funcionalidades
- [x] Validação de entrada (apenas números, entre 8 e 40)
- [x] Geração com todos os 4 tipos de caracteres
- [x] Evitar repetições
- [x] Exibir detalhes da senha no modal
- [x] Copiar senha para clipboard
- [x] Modais abertos/fechados

## Próximos passos
- [ ] Definir se há melhorias desejadas (ex: opção de excluir símbolos, permitir repetições, etc.)
- [ ] Verificar se precisa adicionar README.md
- [ ] Testar funcionamento em diferentes navegadores
- [ ] Considerar melhorias na UI/UX

## Comandos relevantes
Para testar localmente, basta abrir o `index.html` no navegador:
```bash
xdg-open index.html  # Linux
```

## Histórico de sessões
- Sessão 1: Mapeamento e criação do arquivo de contexto
- Sessão 2 (atual): Implementação da função `copyToClipboard` com feedback visual "Copiado!" no modal, ajustes no JS/CSS/HTML
