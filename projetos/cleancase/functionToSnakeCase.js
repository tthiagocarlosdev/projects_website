function toSnakeCase(text) {
  if (!text) return "";

  return text
    // 1. Remove acentos nativamente (Ex: À -> A, ç -> c)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    
    // 2. Transforma tudo em minúsculo
    .toLowerCase()
    
    // 3. REGRA DE OURO: Tudo que NÃO for letra (a-z) ou número (0-9) vira um espaço.
    // Isso inclui: ª, º, _, -, /, \, #, @, pontos, parênteses, etc.
    .replace(/[^a-z0-9]/g, " ")
    
    // 4. Divide o texto analisando qualquer quantidade de espaços juntos
    .split(/\s+/)
    
    // 5. Remove pedaços vazios (gerados por símbolos no início ou fim do texto)
    .filter(palavra => palavra !== "")
    
    // 6. Junta tudo com um único caractere de underline
    .join("_");
}

// Ex01: O seu caso anterior (com ª e _)
console.log(toSnakeCase("90ª _CIRC. -       PLANTÃO_CARUARU     -")); 
// Saída: "90_circ_plantao_caruaru"

// Ex02: Caminhos de pastas ou URLs (com barras)
console.log(toSnakeCase("projetos/javascript/snake_case")); 
// Saída: "projetos_javascript_snake_case"

// Ex03: Nomes de arquivos com extensão ou tags (com pontos e hashtags)
console.log(toSnakeCase("aula.01 #Urgente!")); 
// Saída: "aula_01_urgente"

// Ex04: Textos com parênteses, arroba ou e-mails
console.log(toSnakeCase("suporte@empresa (TI)")); 
// Saída: "suporte_empresa_ti"

// Ex05: Datas ou códigos com traço colado
console.log(toSnakeCase("relatorio-2026-final")); 
// Saída: "relatorio_2026_final"
