# Contexto do Projeto - Password Generator

## Objetivo
Gerador de senhas seguras desenvolvido em HTML, CSS e JavaScript puro. O sistema permite ao usuário gerar senhas com quantidade customizada entre 8 e 40 caracteres, garantindo que contenham pelo menos um caractere de cada tipo exigido.

## Estado atual
- Projeto funcional em sua 2ª versão
- Layout em coluna centralizada: `box-instructions`, `box-input-generator`, `box-result` (oculto até gerar) e `box-test-links`
- Resultado exibido em uma seção abaixo do gerador (não mais em modal), com breakdown dos tipos de caracteres e botão para copiar
- Nova seção com links de sites para testar a senha gerada (Password Monster, NordPass, Bitwarden, Security.org, Kaspersky)
- Layout responsivo (desktop, tablet e celular) com `meta viewport` e media queries
- Gera senha garantindo no mínimo: letras maiúsculas, minúsculas, números e símbolos
- Possui modal informativo sobre a versão
- Evita caracteres repetidos na senha gerada

## Estrutura
- `index.html` - Estrutura HTML com interface, modais e referências JS/CSS
- `scripts.js` - Lógica de geração, validação, modais e cópia para área de transferência
- `style.css` - Estilos da página
- `images/` - Pasta com imagens (vazia ou com assets)

## Arquivos alterados
- `index.html` - Layout em coluna com seções centralizadas (`box-instructions`, `box-input-generator`, `box-result`, `box-test-links`); resultado movido do modal para a seção `box-result` (oculta via atributo `hidden`); link de teste trocado para NordPass
- `style.css` - Estilos das seções/cards, nova seção de resultado `.box-result`/`.result-password`/`#password_result` e animação de entrada; removidos estilos do antigo modal de senha; media query para telas <= 600px
- `scripts.js` - Geração preenche os IDs `*_result` e revela `#box-result` com `scrollIntoView`; `copyToClipboard` copia de `#password_result`; removidas funções do modal de senha

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
- [x] Exibir detalhes da senha em seção de resultado
- [x] Copiar senha para clipboard
- [x] Modal informativo sobre a versão
- [x] Layout responsivo centralizado
- [x] Seção de links para testar a senha gerada

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
- Sessão 2: Implementação da função `copyToClipboard` com feedback visual "Copiado!" no modal, ajustes no JS/CSS/HTML
- Sessão 3: Reestruturação do layout (seções empilhadas e centralizadas), nova seção de links para testar a senha e responsividade para múltiplos dispositivos
- Sessão 4 (atual): Resultado da senha movido do modal para uma seção abaixo do gerador (com cópia e breakdown); link de teste trocado para NordPass
