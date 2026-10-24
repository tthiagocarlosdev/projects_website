

# 📖 Documentação do Código Técnico — `script.js` (`CleanCase`)

Esta documentação detalha de forma cirúrgica e microscópica o funcionamento do arquivo `script.js` do projeto **CleanCase**. Esta versão reflete a arquitetura otimizada sob o princípio **DRY (Don't Repeat Yourself)**, onde os processos repetitivos de higienização foram centralizados em funções utilitárias de alto desempenho.

---

## ⚙️ 1. O Core da Aplicação: Funções Utilitárias de Higienização

O diferencial arquitetural do **CleanCase** está nestas duas funções ajudantes localizadas no topo do arquivo. Elas recebem o texto bruto, aplicam tratamentos complexos e devolvem um Array (lista) de palavras perfeitamente limpas.

### 🌐 Função: `limparParaMinusculas(text)`
Esta função limpa a string contra acentos e caracteres especiais e força todas as palavras a ficarem em letras minúsculas.

*   **`if (!text) return [];`**
    *   **O que faz:** Proteção de segurança. Se o parâmetro `text` for nulo, indefinido ou uma string vazia `""`, ela encerra a execução retornando um array vazio `[]`. Isso impede que o sistema tente rodar métodos em algo inexistente, o que causaria travamentos (*runtime errors*).
*   **`.normalize("NFD")`**
    *   **O que faz:** Decompõe os caracteres Unicode combinados. Na prática, separa as letras de seus acentos. Por exemplo, a letra `ã` é decomposta em duas partes físicas na memória: a letra limpa `a` + o acento gráfico til `~`.
*   **`.replace(/[\u0300-\u036f]/g, "")`**
    *   **O que faz:** Localiza e apaga todos os acentos gerados pelo método anterior.
    *   **RegEx dissecada:** O bloco `[\u0300-\u036f]` representa a tabela Unicode de diacríticos combinados (onde ficam guardados todos os tipos de acentos do mundo). A flag `/g` (*global*) força a varredura por todo o texto. A substituição por `""` remove os acentos e deixa apenas os caracteres de base puros.
*   **`.toLowerCase()`**
    *   **O que faz:** Transforma todas as letras do texto em minúsculas para padronizar o ponto de partida do processamento.
*   **`.replace(/[^a-z0-9]/g, " ")`**
    *   **O que faz:** Converte qualquer elemento que não seja letra ou número em um espaço comum.
    *   **RegEx dissecada:** O símbolo `^` dentro de colchetes significa **negação (NÃO)**. O padrão busca tudo o que **NÃO** for uma letra minúscula (`a-z`) e **NÃO** for um número (`0-9`). Símbolos como `ª`, `º`, traços, barras, pontuações e emojis entram nessa regra e são convertidos em um caractere de espaço `" "`, impedindo o agrupamento indevido de palavras coladas.
*   **`.split(/\s+/)`**
    *   **O que faz:** Corta o texto em pedaços e o transforma em uma lista (Array).
    *   **RegEx dissecada:** O meta-caractere `\s` captura espaços, tabulações e quebras de linha. O sinal de mais `+` (quantificador) indica **"uma ou mais ocorrências grudadas"**. Isso garante que se houver dez espaços em branco consecutivos, o motor trate tudo como uma única barreira de corte, evitando gerar itens fantasmas no array.
*   **`.filter(palavra => palavra !== "")`**
    *   **O que faz:** Remove strings vazias `""` de dentro do array.
    *   **Por que é usada:** Caso o texto original possua caracteres inválidos ou espaços no início ou fim (ex: `" - teste - "`), as etapas anteriores produziriam lacunas vazias no primeiro e último índice da lista. Esse filtro limpa o array para que restem puramente as palavras reais.

### 🔠 Função: `limparPreservandoCaixa(text)`
Esta função executa exatamente a mesma rotina de limpeza contra acentos e símbolos especiais que a anterior, porém com um detalhe crucial: ela **mantém as letras maiúsculas e minúsculas originais intactas** no array de saída.

*   **Sua diferença na RegEx: `.replace(/[^a-zA-Z0-9]/g, " ")`**
    *   **O que faz:** Inclui o intervalo de `A-Z` (maiúsculas) na lista de caracteres protegidos pela negação.
    *   **Por que é necessária:** Formatos como `camelCase`, `PascalCase` e `CONSTANT_CASE` dependem da identificação de quais letras já eram maiúsculas na string original para aplicar suas regras de estilização exclusivas.

---

## 🛠️ 2. As Funções de Formatação (Casos Específicos)

Graças ao processo de centralização, estas funções agora atuam apenas na formatação e junção final dos dados limpos fornecidos pelas funções centrais.

### `toSnakeCase(text)`
*   **Linha:** `return limparParaMinusculas(text).join("_");`
*   **O que faz:** Solicita o array totalmente limpo e minúsculo e une todas as posições colando o caractere de sublinhado (`_`) como o elo de separação.

### `toKebabCase(text)`
*   **Linha:** `return limparParaMinusculas(text).join("-");`
*   **O que faz:** Agrupa o array de palavras minúsculas e insere um hífen comum (`-`) entre cada um dos intervalos.

### `toConstantCase(text)`
*   **Linha:** `return limparPreservandoCaixa(text).join("_").toUpperCase();`
*   **O que faz:** Solicita o array com as caixas preservadas, une as palavras com underline (`_`) e aplica o método `.toUpperCase()` para garantir a transformação completa de toda a string gerada em caixa alta.

### `toCamelCase(text)`
```javascript
const partes = limparPreservandoCaixa(text);
if (partes.length === 0) return "";
return partes
    .map((palavra, index) => index === 0 ? palavra.toLowerCase() : palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join("");
```
*   **O que faz linha por linha:**
    *   `if (partes.length === 0) return "";`: Retorna uma string vazia imediatamente caso o array resultante da limpeza não possua palavras válidas.
    *   `.map((palavra, index) => ...)`: Percorre cada item da lista injetando um contador numérico (`index`) para identificar a posição da palavra atual.
    *   `index === 0 ? palavra.toLowerCase() : ...`: Utiliza um Operador Ternário (um `if/else` simplificado em uma linha). Se for a primeira palavra do texto (`index === 0`), transforma-a inteira em minúscula.
    *   `palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()`: Se for qualquer outra palavra posterior, isola a primeira letra (`charAt(0)`) em maiúscula e a concatena com o restante do corpo recortado (`slice(1)`) forçado a ficar em minúsculas.
    *   `.join("")`: Agrupa tudo fundindo as palavras sem nenhum tipo de caractere separador entre elas.

### `toPascalCase(text)`
```javascript
return limparPreservandoCaixa(text)
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join("");
```
*   **O que faz:** Diferente do camelCase, aplica a regra de capitalização (inicial Maiúscula e restante minúsculo) em **todas** as palavras da lista, agrupando-as sem separadores via `.join("")`.

### `toPascalSnakeCase(text)`
```javascript
return limparPreservandoCaixa(text)
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join("_");
```
*   **O que faz:** Aplica a regra de capitalização em todas as palavras da lista do array e realiza a junção delas inserindo o caractere de underline (`_`) como o conectivo padrão.

### `toDotCase(text)`
*   **Linha:** `return limparParaMinusculas(text).join(".");`
*   **O que faz:** Reúne a coleção de strings limpas e minúsculas inserindo um ponto final literal (`.`) como o delimitador de intervalos.

### `toTrainCase(text)`
```javascript
return limparPreservandoCaixa(text)
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join("-");
```
*   **O que faz:** Organiza as palavras com iniciais maiúsculas e realiza a junção estrutural das partes injetando o hífen (`-`) entre os blocos textuais.

### `toSwapCase(text)`
```javascript
return limparPreservandoCaixa(text)
    .map(palavra => palavra.charAt(0).toLowerCase() + palavra.slice(1).toUpperCase())
    .join(" ");
```
*   **O que faz:** Inverte a estrutura visual padrão por palavra após a higienização: a primeira letra vira obrigatoriamente minúscula (`.toLowerCase()`) e o corpo restante da palavra vira maiúsculo (`.toUpperCase()`), unindo-as com um espaço simples `" "`.

### `toSentenceCase(text)`
```javascript
const partes = limparParaMinusculas(text);
if (partes.length === 0) return "";
const frase = partes.join(" ");
return frase.charAt(0).toUpperCase() + frase.slice(1);
```
*   **O que faz linha por linha:**
    *   `const frase = partes.join(" ");`: Cria uma frase unindo as palavras minúsculas limpas com um espaço em branco convencional.
    *   `frase.charAt(0).toUpperCase() + frase.slice(1)`: Captura cirurgicamente a primeira letra de toda a frase montada e a altera para maiúscula, concatenando-a com o resto da frase cortada a partir do índice `1`.

### `toPathCase(text)`
*   **Linha:** `return limparParaMinusculas(text).join("/");`
*   **O que faz:** Conecta a listagem de strings minúsculas utilizando o caractere de barra comum (`/`), simulando caminhos de arquivos ou rotas web.

### `toCapitalCase(text)`
```javascript
return limparPreservandoCaixa(text)
    .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join(" ");
```
*   **O que faz:** Aplica o padrão de iniciais maiúsculas e corpo minúsculo para todas as palavras da lista, efetuando o agrupamento por meio de um caractere de espaço simples.

### `toUpperCaseClean(text)`
*   **Linha:** `return limparPreservandoCaixa(text).join(" ").toUpperCase();`
*   **O que faz:** Agrupa as palavras purificadas separando-as por um espaço simples e força o conjunto textual inteiro a ficar em letras maiúsculas.

### `toLowerCaseClean(text)`
*   **Linha:** `return limparParaMinusculas(text).join(" ");`

Use o código com cuidado.

- **O que faz:** Retorna o array de palavras que já foram nativamente limpas e passadas para minúsculas unidas por um único espaço em branco comum.

------

## 🧭 3. O Distribuidor Central de Eventos (`convertText`)

Esta função centraliza a escuta de ações disparadas pelos botões na tela. Ela gerencia o fluxo de transformação de dados e evita o uso obsoleto e complexo de estruturas encadeadas de `if/else` ou `switch`.

- **`const input = document.getElementById('inputText').value;`**

  - **O que faz:** Acessa a interface da árvore de elementos (DOM) do navegador, localiza a caixa de entrada através do seu identificador ID único e extrai o texto digitado pelo usuário (`.value`).

- **`const outputElement = document.getElementById('outputText');`**

  - **O que faz:** Captura a referência física do contêiner HTML onde o resultado processado será renderizado visualmente em tela para o usuário.

- **O Objeto `conversores` (Object Literal Lookup):**

  javascript

  ```javascript
  const conversores = {
      'snake_case': toSnakeCase,
      'kebab-case': toKebabCase,
      ...
  };
  ```

  - **O que é isso e por que funciona:** É um dicionário estrutural de pares de chave/valor. A chave à esquerda é uma string de identificação (enviada pelo clique do botão HTML). O valor à direita é a própria referência de função do JavaScript. Esse padrão substitui de forma elegante e performática as estruturas de controle tradicionais, executando buscas diretas na memória em tempo constante $O(1)$.

- **`const funcaoConversora = conversores[caseType];`**

  - **O que faz:** Tenta extrair a função do dicionário dinamicamente usando o identificador `caseType` recebido por parâmetro.

- **🧭 O Bloco de Execução e Validação de Erros (Dentro de `convertText`):**

  ```javascript
  if (funcaoConversora) {
      const result = funcaoConversora(input);
      
      if (!result) {
          outputElement.innerText = resultadoApareceraAqui;
          outputElement.style.color = "var(--danger)";
      } else {
          outputElement.innerText = result;
          outputElement.style.color = "#111827";
      }
  }
  ```

  

  *   **`if (funcaoConversora) {`**
      *   Verifica se a chave recebida pelo clique do botão existe dentro do dicionário de conversores. Isso impede que o sistema tente executar uma função inexistente, evitando falhas de sistema.
  *   **`const result = funcaoConversora(input);`**
      *   Executa dinamicamente a função de transformação correspondente (ex: `toSnakeCase`), passando o texto bruto do usuário como parâmetro, e armazena o texto convertido na constante `result`.
  *   **`if (!result) {`**
      *   Inicia uma estrutura condicional que verifica se a variável `result` retornou vazia (o que acontece se o usuário não digitou nada ou inseriu apenas espaços e caracteres especiais que foram apagados pelo motor de limpeza).
  *   **`outputElement.innerText = resultadoApareceraAqui;`**
      *   Caso a string esteja vazia, injeta no elemento de saída a mensagem de alerta guardada na constante: `"Adicione um texto de entrada..."`.
  *   **`outputElement.style.color = "var(--danger)";`**
      *   Acessa diretamente as propriedades de estilo CSS do elemento e altera a cor da fonte para vermelho (utilizando a variável `--danger` do seu tema), dando um feedback visual imediato de erro ao usuário.
  *   **`} else {`**
      *   Gatilha o caminho alternativo caso a conversão tenha ocorrido com sucesso absoluto e exista um texto válido para exibir.
  *   **`outputElement.innerText = result;`**
      *   Renderiza na interface do navegador o texto perfeitamente convertido e higienizado pelo aplicativo.
  *   **`outputElement.style.color = "#111827";`**
      *   Redefine a propriedade de estilo de cor da fonte para o tom escuro padrão da aplicação, limpando qualquer estado visual de erro anterior.
  *   **`}`**
      *   Encerra o bloco de checagem condicional e a execução do fluxo da função.



------

## 🧹 4. Funções de Suporte ao Sistema (Interface e Cópia)

Esta seção detalha as funções utilitárias responsáveis por gerenciar a interação do usuário com a tela, controlando a limpeza dos dados e a comunicação com a área de transferência do sistema operacional.

---

### 📥 Função: `clearFields()`
Esta função é responsável por resetar o estado visual da aplicação, apagando os dados inseridos e restaurando as mensagens originais de fábrica.

*   **`function clearFields() {`**
    *   Declara a função chamada `clearFields`, que não recebe nenhum parâmetro e será executada quando o usuário clicar no botão "Limpar" no HTML.
*   **`document.getElementById('inputText').value = "";`**
    *   `document.getElementById('inputText')`: Varre a página HTML em busca do elemento `<textarea>` que possui o ID único `inputText`.
    *   `.value = ""`: Acessa a propriedade que guarda o texto digitado pelo usuário e a substitui por uma string vazia `""`. Isso apaga instantaneamente tudo o que estava escrito no campo de entrada.
*   **`document.getElementById('outputText').innerText = "O resultado aparecerá aqui...";`**
    *   `document.getElementById('outputText')`: Localiza o contêiner (a `<div>`) que exibe o resultado final modificado através do ID `outputText`.
    *   `.innerText = "..."`: Altera o texto visível dentro dessa div, removendo o texto convertido e reinserindo a mensagem padrão de espera do sistema.
*   **`counterElement.innerText = "Caracteres: 0";`**
    *   Caso a string resultante seja inválida ou vazia, força o contador visual a exibir o tamanho zero.
*   **`counterElement.innerText = 'Caracteres: ${result.length}';`**
    *   Utiliza a propriedade nativa `.length` da string gerada pelo JavaScript para calcular o tamanho exato de caracteres e atualiza dinamicamente o texto em tela usando interpolação de strings (*Template Literals*).
*   **`}`**
    *   Fecha o bloco de execução da função `clearFields`.

---

### 📋 Função: `copyToClipboard()`
Esta função lida com processos assíncronos modernos para injetar o texto gerado na memória do computador do usuário, além de gerenciar os estados visuais de feedback do botão.

*   **`function copyToClipboard() {`**
    *   Declara a função chamada `copyToClipboard`, responsável por gerenciar a ação de cópia do texto modificado.
*   **`const outputText = document.getElementById('outputText').innerText;`**
    *   Localiza o elemento de saída pelo ID `outputText`, captura todo o texto contido dentro dele através da propriedade `.innerText` e armazena esse valor dentro de uma constante segura chamada `outputText`.
*   **`const btnCopy = document.getElementById('btnCopy');`**
    *   Busca o botão de cópia na página através do seu ID `btnCopy` e guarda a sua referência na constante `btnCopy`, permitindo que o código altere sua cor e seu texto mais abaixo.
*   **`if (outputText === "O resultado aparecerá aqui..." || outputText === "" || outputText === "Adicione um texto de entrada...") {`**
    *   Inicia uma estrutura condicional de segurança (`if`). Ela usa o operador lógico `||` (OU) para verificar três cenários: se o texto na tela é o aviso padrão de espera, se está totalmente vazio, ou se exibe um alerta de falta de texto.
*   **`return;`**
    *   Se qualquer uma das três condições acima for verdadeira, o comando `return` é acionado. Ele encerra a função imediatamente (um corte abrupto). Isso impede que o usuário salve mensagens de sistema ou espaços vazios na área de transferência do seu dispositivo.
*   **`}`**
    *   Fecha o bloco de validação de segurança do `if`.
*   **`navigator.clipboard.writeText(outputText).then(() => {`**
    *   `navigator.clipboard.writeText(outputText)`: Invoca a API de Área de Transferência nativa do navegador para salvar o conteúdo da variável `outputText` no sistema operacional (fazer o comando Ctrl+C via código).
    *   `.then(() => {`: Como o ato de gravar dados na memória do sistema pode demorar alguns milissegundos, o JavaScript trata isso como uma promessa (*Promise*). O método `.then()` aguarda a confirmação de que o texto foi copiado com sucesso absoluto para poder executar o código de feedback visual que vem a seguir.
*   **`const originalText = btnCopy.innerHTML;`**
    *   Ganha acesso ao conteúdo interno do botão (incluindo tags HTML e textos como `<span>Copiar</span>`) através da propriedade `.innerHTML` e guarda esse estado original dentro da constante `originalText`.
*   **`btnCopy.classList.add('success');`**
    *   Adiciona dinamicamente a classe CSS chamada `success` ao botão. Na folha de estilos (`style.css`), essa classe força o botão a mudar de cor (ficando verde), indicando visualmente que a operação deu certo.
*   **`btnCopy.innerHTML = '<span>Copiado!</span>';`**
    *   Substitui temporariamente o texto interno do botão para "Copiado!", dando uma resposta clara e amigável ao usuário.
*   **`setTimeout(() => {`**
    *   Inicia um temporizador nativo do JavaScript (*timer*). Ela serve para adiar a execução de um bloco de código por um período determinado.
*   **`btnCopy.classList.remove('success');`**
    *   Esta linha roda apenas quando o tempo do temporizador esgota. Ela remove a classe CSS `success`, fazendo o botão perder a cor verde de sucesso.
*   **`btnCopy.innerHTML = originalText;`**
    *   Restaura o texto original do botão (ex: "Copiar"), devolvendo a interface ao seu estado inicial.
*   **`}, 2000);`**
    *   Define o tempo de espera do `setTimeout` para exatamente 2000 milissegundos (2 segundos). É o tempo que o botão permanecerá verde com o texto "Copiado!".
*   **`}).catch(err => {`**
    *   `.catch(err => {`: Caso a API do navegador falhe ao tentar acessar a área de transferência (por falta de permissão do usuário ou bloqueio do navegador), o fluxo do `.then()` é desviado para este bloco de captura de erros (`catch`).
*   **`console.error('Erro ao copiar texto: ', err);`**
    *   Imprime uma mensagem detalhada de falha técnica no console de ferramentas do desenvolvedor (`F12`), exibindo o motivo real do erro (`err`) sem travar a navegação do usuário.
*   **`});`**
    *   Encerra o tratamento da promessa da API de cópia.
*   **`}`**
    *   Fecha o escopo principal da função `copyToClipboard`.





```tex
- archive
	|__ cleanCaseFirstVersion.js
- css
	|__ style.css
- DOCUMENTATION.MD
- index.html
- README.md
- script.js

```

