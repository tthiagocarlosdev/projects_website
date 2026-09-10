const fs = require("fs");

// Importa o arquivo original
const unidadesPoliciais = require("./unidades.js");

// Cria uma nova lista
const novasUnidades = unidadesPoliciais.map(unidade => {
    return {
        ...unidade,
         nomeDaUnidade: unidade.nomeDaUnidade.split(" - ").slice(1).join(" - ")
        // nomeDaUnidade: unidade.nomeDaUnidade.split(" - ")[1]
    };
});

// Gera o novo arquivo
const conteudo = `const unidadesPoliciais = ${JSON.stringify(novasUnidades, null, 4)};\n`;

fs.writeFileSync(
    "unidades_sem_sigla.js",
    conteudo,
    "utf8"
);

console.log("Arquivo criado com sucesso!");