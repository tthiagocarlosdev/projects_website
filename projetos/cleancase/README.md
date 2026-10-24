

# CleanCase 🚀

O **CleanCase** é uma ferramenta web moderna e indispensável para desenvolvedores, projetada para converter e formatar textos em diferentes padrões de escrita (*letter cases*) instantaneamente. 

Diferente de outros conversores comuns, o **CleanCase possui um motor universal de higienização de strings**. Ele remove automaticamente acentos (ex: `ã` vira `a`, `ç` vira `c`), trata múltiplos espaços invisíveis e elimina símbolos especiais e pontuações indesejadas (como `ª`, `º`, `#`, `!`). Isso garante que o resultado final esteja sempre 100% limpo e pronto para ser usado diretamente em códigos, nomes de arquivos, variáveis, banco de dados ou URLs slug.

---



## 🕹️ Como Usar a Aplicação

Usar o **CleanCase** é extremamente simples e rápido. Siga os passos abaixo para transformar seus textos:

1. **Insira o seu Texto:** No campo **"Texto de Entrada"**, digite ou cole o texto bruto que você deseja modificar (pode conter acentos, símbolos como `ª`, `º`, parênteses ou múltiplos espaços).
2. **Escolha o Formato:** Na seção **"Transformar para"**, clique no botão correspondente ao formato de escrita que você precisa (ex: `snake_case`, `camelCase`, `kebab-case`, etc.).
3. **Visualize o Resultado:** O texto totalmente limpo e convertido aparecerá instantaneamente no campo **"Texto Modificado"**.
4. **Copie o Texto:** Clique no botão **"Copiar"** localizado ao lado do texto modificado. O botão mudará temporariamente para uma cor verde com o texto **"Copiado!"**, indicando que o resultado já está na sua área de transferência pronto para ser colado onde você quiser.
5. **Limpe os Campos:** Se quiser iniciar uma nova conversão do zero, basta rolar até o final e clicar no botão vermelho **"Limpar"**. Ele apagará o texto de entrada e resetará o campo de saída.

---



## 🛠️ Definição das Funções de Conversão

Cada botão do painel ativa uma função específica de tratamento. Abaixo estão as definições de cada comportamento:

### 1. `snake_case`
* **O que faz:** Transforma todas as letras em minúsculas e une as palavras com um único caractere de sublinhado (`_`).
* **Uso comum:** Nomes de variáveis em Python, chaves de bancos de dados, chaves de APIs JSON e nomes de arquivos no GitHub.

### 2. `kebab-case` (conhecido como *param-case* ou *spinal-case*)
* **O que faz:** Coloca todas as letras em minúsculas e separa as palavras por um hífen comum (`-`).
* **Uso comum:** Criação de URLs amigáveis (slugs), seletores de classes no CSS e nomes de pacotes no ecossistema Node.js (npm).

### 3. `CONSTANT_CASE` (conhecido como *SCREAMING_SNAKE_CASE*)
* **O que faz:** Transforma todas as letras do texto em maiúsculas e conecta as palavras usando o caractere de sublinhado (`_`).
* **Uso comum:** Declaração de variáveis constantes globais na programação (cujos valores nunca mudam), além de configurações em arquivos `.env`.

### 4. `camelCase` (conhecido como *lowerCamelCase*)
* **O que faz:** Une todas as palavras removendo os espaços. A primeira palavra permanece totalmente em minúscula, enquanto a primeira letra de todas as palavras seguintes é convertida para maiúscula.
* **Uso comum:** Padrão absoluto para nomeação de variáveis, funções e propriedades de objetos em JavaScript, Java e TypeScript.

### 5. `PascalCase` (conhecido como *UpperCamelCase*)
* **O que faz:** Semelhante ao camelCase, junta todas as palavras sem espaços, porém força a primeira letra de **todas** as palavras (inclusive a primeiríssima) a ficar em maiúscula.
* **Uso comum:** Nomeação de Classes, Componentes (React/Vue/Angular) e Construtores na programação orientada a objetos.

### 6. `Pascal_Snake_Case` (conhecido como *Ada_Case*)
* **O que faz:** Modifica a primeira letra de cada palavra para maiúscula (com o restante em minúscula) e faz a união de todas elas através de um sublinhado (`_`).
* **Uso comum:** Utilizado em convenções específicas de nomenclatura em algumas linguagens clássicas de programação (como Ada) ou estruturas de pastas organizadas.

### 7. `dot.case`
* **O que faz:** Converte todo o texto para letras minúsculas e faz a separação das palavras puras utilizando um ponto final (`.`).
* **Uso comum:** Mapeamento de propriedades profundas de objetos em arquivos de configuração (ex: `config.database.local`) ou nomes de pacotes em Java.

### 8. `Train-Case` (conhecido como *HTTP-Header-Case*)
* **O que faz:** Transforma a primeira letra de cada palavra em maiúscula e realiza a conexão entre elas usando um hífen (`-`).
* **Uso comum:** Padrão oficial utilizado para a nomeação de cabeçalhos de requisições e respostas HTTP (ex: `Content-Type`, `Accept-Encoding`).

### 9. `sWAP cASE` (conhecido como *Invert Case*)
* **O que faz:** Após higienizar a string contra acentos e símbolos, ele aplica uma lógica invertida: a primeira letra de cada palavra fica obrigatoriamente em minúscula e todo o restante do corpo da palavra fica em maiúscula.
* **Uso comum:** Formatação estilizada de textos e filtros para correção de textos digitados acidentalmente com a tecla *Caps Lock* ativada.

### 10. `Sentence case` (conhecido como *Frase normal*)
* **O que faz:** Formata o texto para que ele siga a estrutura de escrita de um livro: apenas a primeira letra da frase inteira fica em maiúscula, mantendo todas as outras letras em minúsculas e separadas por espaços simples.
* **Uso comum:** Formatação automática de títulos amigáveis, textos de parágrafos gerados dinamicamente e descrições visuais na interface.

### 11. `path/case`
* **O que faz:** Passa todo o texto para letras minúsculas e faz a separação de cada uma das palavras utilizando uma barra comum (`/`).
* **Uso comum:** Mapeamento dinâmico de endpoints de rotas de servidores (URLs) e caminhos de diretórios/pastas no terminal de sistemas Unix/Linux.

### 12. `Capital Case` (conhecido como *Title Case*)
* **O que faz:** Converte a primeira letra de absolutamente cada palavra para maiúscula e mantém o restante em minúscula, separando-as de forma organizada por um espaço em branco simples.
* **Uso comum:** Criação de títulos principais de páginas, títulos de artigos e formatação de nomes próprios de usuários em cadastros.

### 13. `UPPERCASE` (conhecido como *Caixa Alta*)
* **O que faz:** Deixa todas as letras do texto de forma estrita em maiúsculas, separando as palavras limpas com um espaço em branco comum.
* **Uso comum:** Destacar títulos críticos de avisos, siglas, formatação de dados de documentos específicos ou comandos SQL.

### 14. `lowercase` (conhecido como *Caixa Baixa*)
* **O que faz:** Deixa todas as letras do texto de forma estrita em minúsculas, mantendo as palavras unidas por um espaço em branco simples.
* **Uso comum:** Normalização de buscas textuais em bancos de dados (para ignorar diferenças de caixa) e padronização de e-mails de usuários.

---

## 🚀 Tecnologias Utilizadas

O projeto foi construído focando em performance máxima e leveza, sem o uso de frameworks pesados:
* **HTML5** - Estruturação semântica da aplicação.
* **CSS3** - Design moderno, responsivo com variáveis CSS e efeitos visuais suaves.
* **JavaScript (ES6+)** - Lógica nativa de manipulação de strings com Expressões Regulares (RegEx) e mapeamento dinâmico de funções.



