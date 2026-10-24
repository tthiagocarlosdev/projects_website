// Definição e Funções - Definição e Funções
// Remove acentos e transforma TUDO que não é letra minúscula ou número em espaço, retornando um array
function limparParaMinusculas(text) {
    if (!text) return [];
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "");
}

// Remove acentos e transforma TUDO que não é letra (mantendo maiúsculas temporariamente) ou número em espaço, retornando um array
function limparPreservandoCaixa(text) {
    if (!text) return [];
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "");
}

// Função snake_case - Função snake_case
function toSnakeCase(text) {
    return limparParaMinusculas(text).join("_");
}

// Função kebab-case - Função kebab-case
function toKebabCase(text) {
    return limparParaMinusculas(text).join("-");
}

// Função CONSTANT_CASE - Função CONSTANT_CASE
function toConstantCase(text) {
    return limparPreservandoCaixa(text).join("_").toUpperCase();
}

// Função camelCase - Função camelCase
function toCamelCase(text) {
    const partes = limparPreservandoCaixa(text);
    if (partes.length === 0) return "";
    return partes
        .map((palavra, index) => index === 0 ? palavra.toLowerCase() : palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join("");
}

// Função PascalCase - Função PascalCase
function toPascalCase(text) {
    return limparPreservandoCaixa(text)
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join("");
}

// Função PascalSnakeCase - Função PascalSnakeCase - 
function toPascalSnakeCase(text) {
    return limparPreservandoCaixa(text)
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join("_");
}

// Funçao dot.case - Funçao dot.case
function toDotCase(text) {
    return limparParaMinusculas(text).join(".");
}

// Função Train-Case - Função Train-Case
function toTrainCase(text) {
    return limparPreservandoCaixa(text)
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join("-");
}

// Função sWAP cASE - Função sWAP cASE
function toSwapCase(text) {
    return limparPreservandoCaixa(text)
        .map(palavra => palavra.charAt(0).toLowerCase() + palavra.slice(1).toUpperCase())
        .join(" ");
}

// Função Sentence case - Função Sentence case
function toSentenceCase(text) {
    const partes = limparParaMinusculas(text);
    if (partes.length === 0) return "";
    const frase = partes.join(" ");
    return frase.charAt(0).toUpperCase() + frase.slice(1);
}

// Função path/case - Função path/case
function toPathCase(text) {
    return limparParaMinusculas(text).join("/");
}

// Função Capital Case - Função Capital Case
function toCapitalCase(text) {
    return limparPreservandoCaixa(text)
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join(" ");
}

// Função UPPERCASE - Função UPPERCASE
function toUpperCaseClean(text) {
    return limparPreservandoCaixa(text).join(" ").toUpperCase();
}

// Função lowercase - Função lowercase
function toLowerCaseClean(text) {
    return limparParaMinusculas(text).join(" ");
}


// Gerencia qual conversão foi chamada - Gerencia qual conversão foi chamada
// Gerencia qual conversão foi chamada - Gerencia qual conversão foi chamada
function convertText(caseType) {
    const input = document.getElementById('inputText').value;
    const outputElement = document.getElementById('outputText');
    const counterElement = document.getElementById('charCounter');
    const resultadoApareceraAqui = "Adicione um texto de entrada...";

    // Dicionário mapeando cada tipo para a sua respectiva função
    const conversores = {
        'snake_case': toSnakeCase,
        'kebab-case': toKebabCase,
        'CONSTANT_CASE': toConstantCase,
        'camelCase': toCamelCase,
        'PascalCase': toPascalCase,
        'Pascal_Snake_Case': toPascalSnakeCase,
        'dot.case': toDotCase,
        'Train-Case': toTrainCase,
        'sWAP_cASE': toSwapCase,
        'Sentence_case': toSentenceCase,
        'path/case': toPathCase,
        'Capital_Case': toCapitalCase,
        'UPPERCASE': toUpperCaseClean,
        'lowercase': toLowerCaseClean
    };

    // Obtém a função correta baseada no caseType recebido
    const funcaoConversora = conversores[caseType];

    if (funcaoConversora) {
        const result = funcaoConversora(input);
        
        if (!result) {
            outputElement.innerText = resultadoApareceraAqui;
            outputElement.style.color = "var(--danger)";
            counterElement.innerText = "Caracteres: 0";
        } else {
            outputElement.innerText = result;
            outputElement.style.color = "#111827";
            counterElement.innerText = `Caracteres: ${result.length}`;
        }
    }
}


// Função para limpar os campos de entrada e saída
function clearFields() {
    const outputElement = document.getElementById('outputText');
    document.getElementById('inputText').value = "";
    outputElement.innerText = "O resultado aparecerá aqui...";
    outputElement.style.color = "#111827";
    document.getElementById('charCounter').innerText = "Caracteres: 0";
}

// Função para copiar o resultado
function copyToClipboard() {
    const outputText = document.getElementById('outputText').innerText;
    const btnCopy = document.getElementById('btnCopy');

    if (outputText === "O resultado aparecerá aqui..." || outputText === "" || outputText === "Adicione um texto de entrada...") {
        return;
    }

    navigator.clipboard.writeText(outputText).then(() => {
        const originalText = btnCopy.innerHTML;
        btnCopy.classList.add('success');
        btnCopy.innerHTML = '<span>Copiado!</span>';

        setTimeout(() => {
            btnCopy.classList.remove('success');
            btnCopy.innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar texto: ', err);
    });
}
