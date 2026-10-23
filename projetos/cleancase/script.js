
// Função universal de limpeza snake_case
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

// Função universal de limpeza kebab-case
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

// Função universal de limpeza CONSTANT_CASE
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

// Gerencia qual conversão foi chamada
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

    if (outputText === "O resultado aparecerá aqui..." || outputText === "") {
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
