// Definição e Funções - Definição e Funções
// Função snake_case - Função snake_case
function toSnakeCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        .join("_");
}

// Função kebab-case - Função kebab-case
function toKebabCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        .join("-");
}

// Função CONSTANT_CASE - Função CONSTANT_CASE
function toConstantCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        .join("_")
        .toUpperCase();
}

// Função camelCase - Função camelCase
function toCamelCase(text) {
    if (!text) return "";

    const partes = text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ") // Mantém maiúsculas/minúsculas temporariamente
        .split(/\s+/)
        .filter(palavra => palavra !== "");

    if (partes.length === 0) return "";

    // Transforma a primeira palavra em minúscula e as próximas com a primeira letra Maiúscula
    return partes
        .map((palavra, index) => {
            if (index === 0) {
                return palavra.toLowerCase();
            }
            return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase();
        })
        .join("");
}

// Função PascalCase - Função PascalCase
function toPascalCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        // Transforma a primeira letra de CADA palavra em maiúscula
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join("");
}

// Função PascalSnakeCase - Função PascalSnakeCase - 
function toPascalSnakeCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        // Transforma a primeira letra de cada palavra em maiúscula
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join("_");
}

// Funçao dot.case - Funçao dot.case
function toDotCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        .join(".");
}

// Função Train-Case - Função Train-Case
function toTrainCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        // Transforma a primeira letra de cada palavra em maiúscula
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join("-");
}

// Função sWAP cASE - Função sWAP cASE
function toSwapCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        // Aplica a nova regra: primeira letra minúscula, restante maiúscula
        .map(palavra => palavra.charAt(0).toLowerCase() + palavra.slice(1).toUpperCase())
        .join(" ");
}

// Função Sentence case - Função Sentence case
function toSentenceCase(text) {
    if (!text) return "";

    const partes = text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "");

    if (partes.length === 0) return "";

    const fraseCompleta = partes.join(" ").toLowerCase();

    // Deixa apenas a primeiríssima letra de toda a frase em maiúscula
    return fraseCompleta.charAt(0).toUpperCase() + fraseCompleta.slice(1);
}

// Função path/case - Função path/case
function toPathCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        .join("/");
}

// Função Capital Case - Função Capital Case
function toCapitalCase(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9]/g, " ")
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        // Transforma a primeira letra de cada palavra em maiúscula
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join(" ");
}


// Função UPPERCASE - Função UPPERCASE
function toUpperCaseClean(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-zA-Z0-9]/g, " ")   // Tudo o que não é letra/número vira espaço
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        .join(" ")                       // Une com espaço simples
        .toUpperCase();                  // Transforma tudo em maiúsculo
}

// Função lowercase - Função lowercase
function toLowerCaseClean(text) {
    if (!text) return "";

    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Remove acentos
        .replace(/[^a-zA-Z0-9]/g, " ")   // Tudo o que não é letra/número vira espaço
        .split(/\s+/)
        .filter(palavra => palavra !== "")
        .join(" ")                       // Une com espaço simples
        .toLowerCase();                  // Transforma tudo em minúsculo
}

// 3. Adicione as novas condições no seu gerenciador de conversão
function convertText(caseType) {
    const input = document.getElementById('inputText').value;
    const outputElement = document.getElementById('outputText');
    
    if (caseType === 'snake_case') {
        const result = toSnakeCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'kebab-case') {
        const result = toKebabCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'CONSTANT_CASE') {
        const result = toConstantCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'camelCase') {
        const result = toCamelCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'PascalCase') {
        const result = toPascalCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'Pascal_Snake_Case') {
        const result = toPascalSnakeCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'dot.case') {
        const result = toDotCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'Train-Case') {
        const result = toTrainCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'sWAP_cASE') {
        const result = toSwapCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'Sentence_case') {
        const result = toSentenceCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'path/case') {
        const result = toPathCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'Capital_Case') {
        const result = toCapitalCase(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'UPPERCASE') { // <-- ADICIONE ESTE BLOCO
        const result = toUpperCaseClean(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    } else if (caseType === 'lowercase') { // <-- ADICIONE ESTE BLOCO
        const result = toLowerCaseClean(input);
        outputElement.innerText = result || "O resultado aparecerá aqui...";
    }
}

// Função para limpar os campos de entrada e saída
function clearFields() {
    document.getElementById('inputText').value = "";
    document.getElementById('outputText').innerText = "O resultado aparecerá aqui...";
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
