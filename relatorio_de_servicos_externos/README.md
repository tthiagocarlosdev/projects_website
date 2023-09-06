# Relatório de Serviços Externos

Projeto desenvolvido para a página Relatório de Serviços Externos que gera um relatório dos atendimentos realizados pelas equipes da Diretoria da Tecnologia da Informação - DTI da Polícia Civil de Pernambuco.

Acesse a página clicando [aqui]()

Abaixo segue documentação do projeto:

## Estrutura de páginas e arquivos:

- Pasta relatorio_de_servicos_externos
  - Pasta CSS
    - Arquivo style_page_view.css
    - Arquivo style.css
  - Pasta imagens
    - Arquivo bandeira_pernambuco.jpg
    - Arquivo bandeira_policia_civil.png
  - **Arquivo index.html**
  - Arquivo page_view.html
  - script.js
  - script_page_view.js
  - README.md

## Arquivo index.html

### Estrutura básica:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Relatório de serviços externos da DTI">
    <title>Relatório de Serviços Externos</title>
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    
</body>
</html>
```

- `<html lang="pt-BR">`: A tag `<html>` é o elemento raiz do documento HTML e o atributo `lang` define o idioma do documento como português do Brasil.

- `<head>`: A tag `<head>` contém meta dados e informações sobre o documento HTML.

- `<meta charset="UTF-8">`: O meta tag define a codificação de caracteres como UTF-8, que é uma codificação amplamente utilizada para suportar caracteres multilíngues.

- `<meta http-equiv="X-UA-Compatible" content="IE=edge">`: Esse meta tag especifica a versão do Internet Explorer que o navegador deve usar para renderizar a página.

- `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: O meta tag define a configuração de visualização da página, ajustando a largura para o tamanho do dispositivo e definindo a escala inicial para 1.0.

- `<meta name="description" content="Relatório de serviços externos da DTI">`: O meta tag define uma breve descrição do conteúdo da página para os mecanismos de busca e outros serviços.

- `<title>Relatorio de Serviços Externos</title>`: A tag `<title>` define o título do documento que será exibido na barra de título do navegador.
- `<link rel="stylesheet" href="./css/style.css">`: A tag `<link>` é usada para vincular um arquivo CSS externo ao documento HTML, especificando o caminho do arquivo CSS.

- `<body>`: A tag `<body>` contém todo o conteúdo visível da página.



### Conteúdo da Página

- `<div class="container">`: A div com a classe "container" é um contêiner que envolve todo o conteúdo da página.
- `<header class="header">`: O elemento `<header>` representa o cabeçalho da página.
- `<section class="attendance_control">`: A tag `<section>` define uma seção do conteúdo relacionado. Neste caso, a seção é para o controle de atendimento.
- `<footer class="footer">`: O elemento `<footer>` representa o rodapé da página.

```html
<body>
    <div class="container">

        <div class="header">

        </div>

        <div class="attendance_control">

        </div>

        <div class="footer">
            
        </div>
    </div>
</body>
```



### Header

- `<header class="header">`: O elemento `<header>` representa o cabeçalho da página.

- `<div class="containers-images">`: A div com a classe "containers-images" é um contêiner para as imagens no cabeçalho.
- `<img src="./images/bandeira_policia_civil.png" alt="brasao da policia civil de pe">`: A tag `<img>` exibe uma imagem. O atributo `src` define o caminho da imagem e o atributo `alt` fornece um texto alternativo para a imagem.
- `<div class="header_title">`: A div com a classe "header_title" contém os títulos do cabeçalho.
- `<h1>POLÍCIA CIVIL DE PERNAMBUCO</h1>`: A tag `<h1>` é um cabeçalho de primeiro nível que exibe o título principal.
- `<h2>Diretoria de Tecnologia da Informação</h2>`: A tag `<h2>` é um cabeçalho de segundo nível que exibe um subtitulo.
- `<h2>Relatório de Serviços Externos</h2>`: Outro `<h2>` que exibe um subtitulo.
- `<div class="containers-images">`: Outra div com a classe "containers-images", que é um contêiner para a segunda imagem no cabeçalho.
- `<img src="./images/bandeira_pernambuco.jpg" alt="bandeira de pernambuco" id="bandeira-pernambuco">`: Outra tag `<img>` que exibe a segunda imagem no cabeçalho. O atributo `id` é usado para identificar exclusivamente o elemento.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Relatório de serviços externos da DTI">
    <title>Relatório de Serviços Externos</title>
</head>
<body>
    <div class="container">

        <header class="header">

            <div class="containers-images">
                <img src="./images/bandeira_policia_civil.png" alt="brasao da policia civil de pe">
            </div>
            
            <div class="header_title">
                <h1>POLÍCIA CIVIL DE PERNAMBUCO</h1>
                <h2>Diretoria de Tecnologia da Informação</h2>
                <h2>Relatório de Serviços Externos</h2>        
            </div>

            <div class="containers-images">
                <img src="./images/bandeira_pernambuco.jpg" alt="bandeira de pernambuco" id="bandeira-pernambuco">    
            </div>

        </header>

        <div class="attendance_control">

        </div>

        <div class="footer">

        </div>
    </div>
</body>
</html>
```



### Controle de Atendimento - section attendance_control

- `<section class="attendance_control">`: A tag `<section>` define uma seção do conteúdo relacionado. Neste caso, a seção é para o controle de atendimento.
- `<div class="container-title">`: Uma div com a classe "container-title" que envolve o título da seção de controle de atendimento.
- `<h2>Controle de atendimento</h2>`: Um cabeçalho `<h2>` que exibe o título da seção de controle de atendimento.
- `<div class="container-form">`: Uma div com a classe "container-form" que envolve os elementos relacionados ao controle de atendimento.
- `<div class="container_date_time_and_place_of_care">`: Uma div com a classe "container_date_time_and_place_of_care" que envolve os elementos relacionados à data, hora e local de atendimento.
- `<div class="container_services">`: Uma div com a classe "container_services" que envolve os elementos relacionados aos serviços.
- `<div class="container_technician_and_user">`: Uma div com a classe "container_technician_and_user" que envolve os elementos relacionados ao técnico e ao usuário.

```html
<div class="attendance_control">

    <div class="container-title">
        <h2>Controle de atendimento</h2>
    </div>

    <div class="container-form">

        <div class="container_date_time_and_place_of_care">

        </div>

        <div class="container_services">

        </div>

        <div class="container_technician_and_user">

        </div>
    </div>
</div>
```



### Data, hora e local de atendimento - container_date_time_and_place_of_care

- `<div class="container_date_time_and_place_of_care">`: Uma div com a classe "container_date_time_and_place_of_care" que envolve os elementos relacionados à data, hora e local de atendimento.
- `<div class="date_and_time">`: Uma div com a classe "date_and_time" que contém o input de data e hora

- `<label>Data e Hora: </label>`: Um rótulo `<label>` que descreve o campo de entrada de data e hora.
- `<input type="datetime-local" name="date_and_time" id="date_and_time_input">`: Um campo de entrada `<input>` do tipo "datetime-local" que permite ao usuário selecionar a data e hora.

- `<div class="place_of_care">`: Uma div com a classe "place_of_care" que contém o campo de seleção da unidade policial.
- `<label> Unidade Policial: </label>`: Um rótulo `<label>` que descreve o campo de seleção da unidade policial.
- `<select name="tpUnidadeOperacional" class="place_of_care_select">`: Um campo de seleção `<select>` com o nome "tpUnidadeOperacional" e a classe "place_of_care_select".
- `<option value="">SELECIONE</option>`: Uma opção vazia no campo de seleção, exibindo "SELECIONE".
- `<option value="DEPARTAMENTO DE HOMICÍDIOS E PROTEÇÃO A PESSOA">DEPARTAMENTO DE HOMICÍDIOS E PROTEÇÃO A PESSOA</option>`: Uma opção no campo de seleção com o valor "DEPARTAMENTO DE HOMICÍDIOS E PROTEÇÃO A PESSOA" e o texto correspondente.
- As demais tags `<option>` seguem o mesmo padrão, com diferentes valores e textos de opção. Trata-se das unidades policiais que serão selecionadas pelo usuário na hora de preencher o relatório.

```html
<div class="container_date_time_and_place_of_care">

    <div class="date_and_time">
        <label>Data e Hora: </label>
        <input type="datetime-local" name="date_and_time" id="date_and_time_input">
    </div>

    <div class="place_of_care">
        <label> Unidade Policial: </label>
        <select name="tpUnidadeOperacional" class="place_of_care_select">
            <option value="">SELECIONE</option>
            <option value="DEPARTAMENTO DE HOMICÍDIOS E PROTEÇÃO A PESSOA">DEPARTAMENTO DE HOMICÍDIOS E PROTEÇÃO A PESSOA</option>
            <option value="ACADEMIA DE POLICIA">ACADEMIA DE POLICIA</option>
            <option value="CENTRAL DE PLANTOES DA CAPITAL">CENTRAL DE PLANTOES DA CAPITAL</option>
            <option value="COMANDO DE OPERAÇÕES E RECURSOS ESPECIAIS">COMANDO DE OPERAÇÕES E RECURSOS ESPECIAIS</option>
            <option value="CORREGEDORIA GERAL DA SDS">CORREGEDORIA GERAL DA SDS</option>
            <option value="DELEGACIA DE CRIMES CONTRA ADMINISTRACAO E SERVICOS PUBLICOS - DECASP">DELEGACIA DE CRIMES CONTRA ADMINISTRACAO E SERVICOS PUBLICOS - DECASP</option>
            <option value="DELEGACIA DE POLÍCIA DA 001ª CIRCUNSCRIÇÃO - RIO BRANCO - DP1ªCIRC DIM/1ªDESEC">DELEGACIA DE POLÍCIA DA 001ª CIRCUNSCRIÇÃO - RIO BRANCO - DP1ªCIRC DIM/1ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 002ª CIRCUNSCRIÇÃO - BOA VISTA - DP2ªCIRC DIM/1ªDESEC">DELEGACIA DE POLÍCIA DA 002ª CIRCUNSCRIÇÃO - BOA VISTA - DP2ªCIRC DIM/1ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 003ª CIRCUNSCRIÇÃO - JOANA BEZERRA - DP3ªCIRC DIM/1ªDESEC">DELEGACIA DE POLÍCIA DA 003ª CIRCUNSCRIÇÃO - JOANA BEZERRA - DP3ªCIRC DIM/1ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 004ª CIRCUNSCRIÇÃO - ESPINHEIRO - DP4ªCIRC DIM/2ªDESEC">DELEGACIA DE POLÍCIA DA 004ª CIRCUNSCRIÇÃO - ESPINHEIRO - DP4ªCIRC DIM/2ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 005ª CIRCUNSCRIÇÃO - CASA AMARELA - DP5ªCIRC DIM/5ªDESEC">DELEGACIA DE POLÍCIA DA 005ª CIRCUNSCRIÇÃO - CASA AMARELA - DP5ªCIRC DIM/5ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 006ª CIRCUNSCRIÇÃO - CORDEIRO - DP6ªCIRC DIM/2ªDESEC">DELEGACIA DE POLÍCIA DA 006ª CIRCUNSCRIÇÃO - CORDEIRO - DP6ªCIRC DIM/2ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 007ª CIRCUNSCRIÇÃO - BOA VIAGEM - DP7ªCIRC DIM/3ªDESEC">DELEGACIA DE POLÍCIA DA 007ª CIRCUNSCRIÇÃO - BOA VIAGEM - DP7ªCIRC DIM/3ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 008ª CIRCUNSCRIÇÃO - JORDÃO - DP8ªCIRC DIM/3ªDESEC">DELEGACIA DE POLÍCIA DA 008ª CIRCUNSCRIÇÃO - JORDÃO - DP8ªCIRC DIM/3ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 009ª CIRCUNSCRIÇÃO - IPSEP - DP9ªCIRC DIM/3ªDESEC">DELEGACIA DE POLÍCIA DA 009ª CIRCUNSCRIÇÃO - IPSEP - DP9ªCIRC DIM/3ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 010ª CIRCUNSCRIÇÃO - IBURA - DP10ªCIRC DIM/3ªDESEC">DELEGACIA DE POLÍCIA DA 010ª CIRCUNSCRIÇÃO - IBURA - DP10ªCIRC DIM/3ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 011ª CIRCUNSCRIÇÃO - AFOGADOS - DP11ªCIRC DIM/4ªDESEC">DELEGACIA DE POLÍCIA DA 011ª CIRCUNSCRIÇÃO - AFOGADOS - DP11ªCIRC DIM/4ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 012ª CIRCUNSCRIÇÃO - JARDIM SÃO PAULO - DP12ªCIRC DIM/4ªDESEC">DELEGACIA DE POLÍCIA DA 012ª CIRCUNSCRIÇÃO - JARDIM SÃO PAULO - DP12ªCIRC DIM/4ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 013ª CIRCUNSCRIÇÃO - MUSTARDINHA - DP13ªCIRC DIM/4ªDESEC">DELEGACIA DE POLÍCIA DA 013ª CIRCUNSCRIÇÃO - MUSTARDINHA - DP13ªCIRC DIM/4ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 014ª CIRCUNSCRIÇÃO - VÁRZEA - DP14ªCIRC DIM/4ªDESEC">DELEGACIA DE POLÍCIA DA 014ª CIRCUNSCRIÇÃO - VÁRZEA - DP14ªCIRC DIM/4ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 015ª CIRCUNSCRIÇÃO - ALTO DO PASCOAL - DIM/5ªDESEC">DELEGACIA DE POLÍCIA DA 015ª CIRCUNSCRIÇÃO - ALTO DO PASCOAL - DIM/5ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 016ª CIRCUNSCRIÇÃO - ÁGUA FRIA - DP16ªCIRC DIM/2ªDESEC">DELEGACIA DE POLÍCIA DA 016ª CIRCUNSCRIÇÃO - ÁGUA FRIA - DP16ªCIRC DIM/2ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 017ª CIRCUNSCRIÇÃO - VASCO DA GAMA - DP17ªCIRC DIM/5ªDESEC">DELEGACIA DE POLÍCIA DA 017ª CIRCUNSCRIÇÃO - VASCO DA GAMA - DP17ªCIRC DIM/5ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 018ª CIRCUNSCRIÇÃO - MACAXEIRA - DP18ªCIRC DIM/5ªDESEC">DELEGACIA DE POLÍCIA DA 018ª CIRCUNSCRIÇÃO - MACAXEIRA - DP18ªCIRC DIM/5ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 019ª CIRCUNSCRIÇÃO - PRAZERES - DP19ªCIRC DIM/6ªDESEC">DELEGACIA DE POLÍCIA DA 019ª CIRCUNSCRIÇÃO - PRAZERES - DP19ªCIRC DIM/6ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 019ª CIRCUNSCRIÇÃO - 2ª DELEGACIA DE POLICIA MURIBECA - DIM/6ªDESEC">DELEGACIA DE POLÍCIA DA 019ª CIRCUNSCRIÇÃO - 2ª DELEGACIA DE POLICIA MURIBECA - DIM/6ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 020ª CIRCUNSCRIÇÃO - JABOATÃO DOS GUARARAPES - DP20ªCIRC DIM/6ªDESEC">DELEGACIA DE POLÍCIA DA 020ª CIRCUNSCRIÇÃO - JABOATÃO DOS GUARARAPES - DP20ªCIRC DIM/6ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 021ª CIRCUNSCRIÇÃO - MORENO - DP21ªCIRC DIM/6ªDESEC">DELEGACIA DE POLÍCIA DA 021ª CIRCUNSCRIÇÃO - MORENO - DP21ªCIRC DIM/6ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 022ª CIRCUNSCRIÇÃO - PIEDADE - DP22ªCIRC DIM/6ªDESEC">DELEGACIA DE POLÍCIA DA 022ª CIRCUNSCRIÇÃO - PIEDADE - DP22ªCIRC DIM/6ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 023ª CIRCUNSCRIÇÃO - CAVALEIRO - DP23ªCIRC DIM/6ªDESEC">DELEGACIA DE POLÍCIA DA 023ª CIRCUNSCRIÇÃO - CAVALEIRO - DP23ªCIRC DIM/6ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 024ª CIRCUNSCRIÇÃO - VARADOURO - DP24ªCIRC DIM/7ªDESEC">DELEGACIA DE POLÍCIA DA 024ª CIRCUNSCRIÇÃO - VARADOURO - DP24ªCIRC DIM/7ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 025ª CIRCUNSCRIÇÃO - PEIXINHOS - DP25ªCIRC DIM/7ªDESEC">DELEGACIA DE POLÍCIA DA 025ª CIRCUNSCRIÇÃO - PEIXINHOS - DP25ªCIRC DIM/7ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 026ª CIRCUNSCRIÇÃO - RIO DOCE - DP26ªCIRC DIM/7ªDESEC">DELEGACIA DE POLÍCIA DA 026ª CIRCUNSCRIÇÃO - RIO DOCE - DP26ªCIRC DIM/7ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 027ª CIRCUNSCRIÇÃO - ABREU E LIMA - DP27ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 027ª CIRCUNSCRIÇÃO - ABREU E LIMA - DP27ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 028ª CIRCUNSCRIÇÃO - PAULISTA - DP28ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 028ª CIRCUNSCRIÇÃO - PAULISTA - DP28ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 029ª CIRCUNSCRIÇÃO - IGARASSU - DP29ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 029ª CIRCUNSCRIÇÃO - IGARASSU - DP29ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 030ª CIRCUNSCRIÇÃO - ITAMARACÁ - DP30ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 030ª CIRCUNSCRIÇÃO - ITAMARACÁ - DP30ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 031ª CIRCUNSCRIÇÃO - ITAPISSUMA - DP31ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 031ª CIRCUNSCRIÇÃO - ITAPISSUMA - DP31ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 032ª CIRCUNSCRIÇÃO - ENGENHO MARANGUAPE - DP32ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 032ª CIRCUNSCRIÇÃO - ENGENHO MARANGUAPE - DP32ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 033ª CIRCUNSCRIÇÃO - CRUZ DE REBOUÇAS - DP33ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 033ª CIRCUNSCRIÇÃO - CRUZ DE REBOUÇAS - DP33ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 034ª CIRCUNSCRIÇÃO - MARIA FARINHA - DP34ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 034ª CIRCUNSCRIÇÃO - MARIA FARINHA - DP34ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 035ª CIRCUNSCRIÇÃO - ARACOIABA - DP35ªCIRC DIM/8ªDESEC">DELEGACIA DE POLÍCIA DA 035ª CIRCUNSCRIÇÃO - ARACOIABA - DP35ªCIRC DIM/8ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 036ª CIRCUNSCRIÇÃO - FERNANDO DE NORONHA - DP36ªCIRC DIRESP">DELEGACIA DE POLÍCIA DA 036ª CIRCUNSCRIÇÃO - FERNANDO DE NORONHA - DP36ªCIRC DIRESP</option>
            <option value="DELEGACIA DE POLÍCIA DA 037ª CIRCUNSCRIÇÃO - CAMARAGIBE - DP37ªCIRC DIM/9ªDESEC">DELEGACIA DE POLÍCIA DA 037ª CIRCUNSCRIÇÃO - CAMARAGIBE - DP37ªCIRC DIM/9ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 038ª CIRCUNSCRIÇÃO - SÃO LOURENÇO DA MATA - DP38ªCIRC DIM/9ªDESEC">DELEGACIA DE POLÍCIA DA 038ª CIRCUNSCRIÇÃO - SÃO LOURENÇO DA MATA - DP38ªCIRC DIM/9ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 039ª CIRCUNSCRIÇÃO - ALDEIA - DP39ªCIRC DIM/9ªDESEC">DELEGACIA DE POLÍCIA DA 039ª CIRCUNSCRIÇÃO - ALDEIA - DP39ªCIRC DIM/9ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 040ª CIRCUNSCRIÇÃO - CABO DE SANTO AGOSTINHO - DP40ªCIRC DIM/10ªDESEC">DELEGACIA DE POLÍCIA DA 040ª CIRCUNSCRIÇÃO - CABO DE SANTO AGOSTINHO - DP40ªCIRC DIM/10ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 041ª CIRCUNSCRIÇÃO - PONTE DOS CARVALHOS - DP41ªCIRC DIM/10ªDESEC">DELEGACIA DE POLÍCIA DA 041ª CIRCUNSCRIÇÃO - PONTE DOS CARVALHOS - DP41ªCIRC DIM/10ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 042ª CIRCUNSCRIÇÃO - IPOJUCA - DP42ªCIRC DIM/10ªDESEC">DELEGACIA DE POLÍCIA DA 042ª CIRCUNSCRIÇÃO - IPOJUCA - DP42ªCIRC DIM/10ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 043ª CIRCUNSCRIÇÃO - PORTO DE GALINHAS - DP43ªCIRC DIM/10ªDESEC">DELEGACIA DE POLÍCIA DA 043ª CIRCUNSCRIÇÃO - PORTO DE GALINHAS - DP43ªCIRC DIM/10ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 044ª CIRCUNSCRIÇÃO - GOIANA - DP44ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 044ª CIRCUNSCRIÇÃO - GOIANA - DP44ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 045ª CIRCUNSCRIÇÃO - CARPINA - DP45ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 045ª CIRCUNSCRIÇÃO - CARPINA - DP45ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 046ª CIRCUNSCRIÇÃO - TIMBAUBA - DP46ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 046ª CIRCUNSCRIÇÃO - TIMBAUBA - DP46ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 047ª CIRCUNSCRIÇÃO - PAUDALHO - DP47ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 047ª CIRCUNSCRIÇÃO - PAUDALHO - DP47ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 048ª CIRCUNSCRIÇÃO - ALIANÇA - DP48ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 048ª CIRCUNSCRIÇÃO - ALIANÇA - DP48ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 049ª CIRCUNSCRIÇÃO - ITAMBÉ - DP49ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 049ª CIRCUNSCRIÇÃO - ITAMBÉ - DP49ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 050ª CIRCUNSCRIÇÃO - NAZARÉ DA MATA - DP50ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 050ª CIRCUNSCRIÇÃO - NAZARÉ DA MATA - DP50ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 051ª CIRCUNSCRIÇÃO - VICÊNCIA - DP51ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 051ª CIRCUNSCRIÇÃO - VICÊNCIA - DP51ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 052ª CIRCUNSCRIÇÃO - MACAPARANA - DP52ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 052ª CIRCUNSCRIÇÃO - MACAPARANA - DP52ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 053ª CIRCUNSCRIÇÃO - CONDADO - DP53ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 053ª CIRCUNSCRIÇÃO - CONDADO - DP53ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 054ª CIRCUNSCRIÇÃO - LAGOA DE ITAENGA - DP54ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 054ª CIRCUNSCRIÇÃO - LAGOA DE ITAENGA - DP54ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 055ª CIRCUNSCRIÇÃO - ITAQUITINGA - DP55ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 055ª CIRCUNSCRIÇÃO - ITAQUITINGA - DP55ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 056ª CIRCUNSCRIÇÃO - LAGOA DO CARRO - DP56ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 056ª CIRCUNSCRIÇÃO - LAGOA DO CARRO - DP56ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 057ª CIRCUNSCRIÇÃO - TRACUNHAÉM - DP57ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 057ª CIRCUNSCRIÇÃO - TRACUNHAÉM - DP57ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 058ª CIRCUNSCRIÇÃO - BUENOS AIRES - DP58ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 058ª CIRCUNSCRIÇÃO - BUENOS AIRES - DP58ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 059ª CIRCUNSCRIÇÃO - FERREIROS - DP59ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 059ª CIRCUNSCRIÇÃO - FERREIROS - DP59ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 060ª CIRCUNSCRIÇÃO - CAMUTANGA - DP60ªCIRC DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 060ª CIRCUNSCRIÇÃO - CAMUTANGA - DP60ªCIRC DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 061ª CIRCUNSCRIÇÃO - VITÓRIA DE SANTO ANTÃO - DP61ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 061ª CIRCUNSCRIÇÃO - VITÓRIA DE SANTO ANTÃO - DP61ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 062ª CIRCUNSCRIÇÃO - GRAVATÁ - DP62ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 062ª CIRCUNSCRIÇÃO - GRAVATÁ - DP62ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 063ª CIRCUNSCRIÇÃO - ESCADA - DP63ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 063ª CIRCUNSCRIÇÃO - ESCADA - DP63ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 064ª CIRCUNSCRIÇÃO - GLORIA DO GOITÁ - DP64ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 064ª CIRCUNSCRIÇÃO - GLORIA DO GOITÁ - DP64ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 065ª CIRCUNSCRIÇÃO - POMBOS - DP65ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 065ª CIRCUNSCRIÇÃO - POMBOS - DP65ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 066ª CIRCUNSCRIÇÃO - AMARAJI - DP66ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 066ª CIRCUNSCRIÇÃO - AMARAJI - DP66ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 067ª CIRCUNSCRIÇÃO - CHÃ GRANDE - DP67ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 067ª CIRCUNSCRIÇÃO - CHÃ GRANDE - DP67ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 068ª CIRCUNSCRIÇÃO - PRIMAVERA - DP68ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 068ª CIRCUNSCRIÇÃO - PRIMAVERA - DP68ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 069ª CIRCUNSCRIÇÃO - CHÃ DE ALEGRIA - DP69ªCIRC DINTER1/12ªDESEC">DELEGACIA DE POLÍCIA DA 069ª CIRCUNSCRIÇÃO - CHÃ DE ALEGRIA - DP69ªCIRC DINTER1/12ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 070ª CIRCUNSCRIÇÃO - PALMARES - DP70ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 070ª CIRCUNSCRIÇÃO - PALMARES - DP70ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 071ª CIRCUNSCRIÇÃO - RIBEIRÃO - DP71ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 071ª CIRCUNSCRIÇÃO - RIBEIRÃO - DP71ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 072ª CIRCUNSCRIÇÃO - BARREIROS - DP72ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 072ª CIRCUNSCRIÇÃO - BARREIROS - DP72ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 073ª CIRCUNSCRIÇÃO - SIRINHAÉM - DP73ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 073ª CIRCUNSCRIÇÃO - SIRINHAÉM - DP73ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 074ª CIRCUNSCRIÇÃO - CATENDE - DP74ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 074ª CIRCUNSCRIÇÃO - CATENDE - DP74ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 075ª CIRCUNSCRIÇÃO - ÁGUA PRETA - DP75ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 075ª CIRCUNSCRIÇÃO - ÁGUA PRETA - DP75ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 076ª CIRCUNSCRIÇÃO - GAMELEIRA - DP76ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 076ª CIRCUNSCRIÇÃO - GAMELEIRA - DP76ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 077ª CIRCUNSCRIÇÃO - QUIPAPA - DP77ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 077ª CIRCUNSCRIÇÃO - QUIPAPA - DP77ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 078ª CIRCUNSCRIÇÃO - RIO FORMOSO - DP78ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 078ª CIRCUNSCRIÇÃO - RIO FORMOSO - DP78ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 079ª CIRCUNSCRIÇÃO - TAMANDARÉ - DP79ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 079ª CIRCUNSCRIÇÃO - TAMANDARÉ - DP79ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 080ª CIRCUNSCRIÇÃO - JOAQUIM NABUCO - DP80ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 080ª CIRCUNSCRIÇÃO - JOAQUIM NABUCO - DP80ªCIRC  DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 081ª CIRCUNSCRIÇÃO - MARAIAL - DP81ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 081ª CIRCUNSCRIÇÃO - MARAIAL - DP81ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 082ª CIRCUNSCRIÇÃO - SÃO JOSÉ DA COROA GRANDE - DP82ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 082ª CIRCUNSCRIÇÃO - SÃO JOSÉ DA COROA GRANDE - DP82ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 083ª CIRCUNSCRIÇÃO - XEXÉU - DP83ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 083ª CIRCUNSCRIÇÃO - XEXÉU - DP83ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 084ª CIRCUNSCRIÇÃO - CORTES - DP84ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 084ª CIRCUNSCRIÇÃO - CORTES - DP84ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 085ª CIRCUNSCRIÇÃO - JAQUEIRA - DP85ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 085ª CIRCUNSCRIÇÃO - JAQUEIRA - DP85ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 086ª CIRCUNSCRIÇÃO - BELÉM DE MARIA - DP86ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 086ª CIRCUNSCRIÇÃO - BELÉM DE MARIA - DP86ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 087ª CIRCUNSCRIÇÃO - SÃO BENEDITO DO SUL - DP87ªCIRC DINTER1/13ªDESEC">DELEGACIA DE POLÍCIA DA 087ª CIRCUNSCRIÇÃO - SÃO BENEDITO DO SUL - DP87ªCIRC DINTER1/13ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 088ª CIRCUNSCRIÇÃO - CARUARU - DP88ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 088ª CIRCUNSCRIÇÃO - CARUARU - DP88ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 089ª CIRCUNSCRIÇÃO - CARUARU - DP89ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 089ª CIRCUNSCRIÇÃO - CARUARU - DP89ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 090ª CIRCUNSCRIÇÃO - CARUARU - DP90ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 090ª CIRCUNSCRIÇÃO - CARUARU - DP90ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 091ª CIRCUNSCRIÇÃO - BEZERROS - DP91ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 091ª CIRCUNSCRIÇÃO - BEZERROS - DP91ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 092ª CIRCUNSCRIÇÃO - BONITO - DP92ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 092ª CIRCUNSCRIÇÃO - BONITO - DP92ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 093ª CIRCUNSCRIÇÃO - PANELAS - DP93ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 093ª CIRCUNSCRIÇÃO - PANELAS - DP93ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 094ª CIRCUNSCRIÇÃO - CUPIRA - DP94ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 094ª CIRCUNSCRIÇÃO - CUPIRA - DP94ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 095ª CIRCUNSCRIÇÃO - ALTINHO - DP95ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 095ª CIRCUNSCRIÇÃO - ALTINHO - DP95ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 096ª CIRCUNSCRIÇÃO - AGRESTINA - DP96ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 096ª CIRCUNSCRIÇÃO - AGRESTINA - DP96ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 097ª CIRCUNSCRIÇÃO - SÃO JOAQUIM DO MONTE - DP97ªCIRC  DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 097ª CIRCUNSCRIÇÃO - SÃO JOAQUIM DO MONTE - DP97ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 098ª CIRCUNSCRIÇÃO - RIACHO DAS ALMAS - DP98ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 098ª CIRCUNSCRIÇÃO - RIACHO DAS ALMAS - DP98ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 099ª CIRCUNSCRIÇÃO - LAGOA DOS GATOS - DP99ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 099ª CIRCUNSCRIÇÃO - LAGOA DOS GATOS - DP99ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 100ª CIRCUNSCRIÇÃO - CAMOCIM DE SÃO FELIX - DP100ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 100ª CIRCUNSCRIÇÃO - CAMOCIM DE SÃO FELIX - DP100ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 101ª CIRCUNSCRIÇÃO - SAIRÉ - DP101ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 101ª CIRCUNSCRIÇÃO - SAIRÉ - DP101ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 102ª CIRCUNSCRIÇÃO - BARRA DE GUABIRABA - DP102ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DA 102ª CIRCUNSCRIÇÃO - BARRA DE GUABIRABA - DP102ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 103ª CIRCUNSCRIÇÃO - IBIRAJUBA - DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 103ª CIRCUNSCRIÇÃO - IBIRAJUBA - DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 104ª CIRCUNSCRIÇÃO - BELO JARDIM - DP104ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 104ª CIRCUNSCRIÇÃO - BELO JARDIM - DP104ªCIRC DINTER1/15ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 105ª CIRCUNSCRIÇÃO - PESQUEIRA - DP105ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 105ª CIRCUNSCRIÇÃO - PESQUEIRA - DP105ªCIRC DINTER1/15ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 106ª CIRCUNSCRIÇÃO - SÃO BENTO DO UNA - DP106ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 106ª CIRCUNSCRIÇÃO - SÃO BENTO DO UNA - DP106ªCIRC DINTER1/15ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 107ª CIRCUNSCRIÇÃO - BREJO DA MADRE DE DEUS - DP107ªCIRC DINTER1/17ªDESEC">DELEGACIA DE POLÍCIA DA 107ª CIRCUNSCRIÇÃO - BREJO DA MADRE DE DEUS - DP107ªCIRC DINTER1/17ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 108ª CIRCUNSCRIÇÃO - SÃO CAETANO - DP108ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 108ª CIRCUNSCRIÇÃO - SÃO CAETANO - DP108ªCIRC DINTER1/15ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 109ª CIRCUNSCRIÇÃO - CACHOEIRINHA - DP109ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 109ª CIRCUNSCRIÇÃO - CACHOEIRINHA - DP109ªCIRC DINTER1/15ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 110ª CIRCUNSCRIÇÃO - SANHARÓ - DP110ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 110ª CIRCUNSCRIÇÃO - SANHARÓ - DP110ªCIRC DINTER1/15ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 111ª CIRCUNSCRIÇÃO - JATAÚBA - DP111ªCIRC DINTER1/17ªDESEC">DELEGACIA DE POLÍCIA DA 111ª CIRCUNSCRIÇÃO - JATAÚBA - DP111ªCIRC DINTER1/17ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 112ª CIRCUNSCRIÇÃO - TACAIMBÓ - DP112ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 112ª CIRCUNSCRIÇÃO - TACAIMBÓ - DP112ªCIRC DINTER1/15ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 113ª CIRCUNSCRIÇÃO - ALAGOINHA - DP113ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 113ª CIRCUNSCRIÇÃO - ALAGOINHA - DP113ªCIRC DINTER1/15ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 114ª CIRCUNSCRIÇÃO - POÇÃO - DP114ªCIRC DINTER1/15ªDESEC">DELEGACIA DE POLÍCIA DA 114ª CIRCUNSCRIÇÃO - POÇÃO - DP114ªCIRC DINTER1/15ªDESEC</option>

            <option value="DELEGACIA DE POLÍCIA DA 115ª CIRCUNSCRIÇÃO - LIMOEIRO - DP115ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 115ª CIRCUNSCRIÇÃO - LIMOEIRO - DP115ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 116ª CIRCUNSCRIÇÃO - SURUBIM - DP116ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 116ª CIRCUNSCRIÇÃO - SURUBIM - DP116ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 117ª CIRCUNSCRIÇÃO - BOM JARDIM - DP117ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 117ª CIRCUNSCRIÇÃO - BOM JARDIM - DP117ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 118ª CIRCUNSCRIÇÃO - PASSIRA - DP118ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 118ª CIRCUNSCRIÇÃO - PASSIRA - DP118ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 119ª CIRCUNSCRIÇÃO - CUMARU - DP119ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 119ª CIRCUNSCRIÇÃO - CUMARU - DP119ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 120ª CIRCUNSCRIÇÃO - JOÃO ALFREDO - DP120ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 120ª CIRCUNSCRIÇÃO - JOÃO ALFREDO - DP120ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 121ª CIRCUNSCRIÇÃO - OROBÓ - DP121ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 121ª CIRCUNSCRIÇÃO - OROBÓ - DP121ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 122ª CIRCUNSCRIÇÃO - FEIRA NOVA - DP122ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 122ª CIRCUNSCRIÇÃO - FEIRA NOVA - DP122ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 123ª CIRCUNSCRIÇÃO - SÃO VICENTE FERRER - DP123ªCIRC  DINTER1/11ªDESEC">DELEGACIA DE POLÍCIA DA 123ª CIRCUNSCRIÇÃO - SÃO VICENTE FERRER - DP123ªCIRC  DINTER1/11ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 124ª CIRCUNSCRIÇÃO - CASINHAS - DP124ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 124ª CIRCUNSCRIÇÃO - CASINHAS - DP124ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 125ª CIRCUNSCRIÇÃO - MACHADOS - DP125ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 125ª CIRCUNSCRIÇÃO - MACHADOS - DP125ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 126ª CIRCUNSCRIÇÃO - VERTENTE DO LÉRIO - DP126ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 126ª CIRCUNSCRIÇÃO - VERTENTE DO LÉRIO - DP126ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 127ª CIRCUNSCRIÇÃO - SALGADINHO - DP127ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 127ª CIRCUNSCRIÇÃO - SALGADINHO - DP127ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 128ª CIRCUNSCRIÇÃO - SANTA CRUZ DO CAPIBARIBE - DP128CIRC DINTER1/17ªDESEC">DELEGACIA DE POLÍCIA DA 128ª CIRCUNSCRIÇÃO - SANTA CRUZ DO CAPIBARIBE - DP128CIRC DINTER1/17ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 129ª CIRCUNSCRIÇÃO - TORITAMA - DP129ªCIRC  DINTER/17ªDESEC">DELEGACIA DE POLÍCIA DA 129ª CIRCUNSCRIÇÃO - TORITAMA - DP129ªCIRC  DINTER/17ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 130ª CIRCUNSCRIÇÃO - TAQUARITINGA DO NORTE - DP130ªCIRC  DINTER1/17ªDESEC">DELEGACIA DE POLÍCIA DA 130ª CIRCUNSCRIÇÃO - TAQUARITINGA DO NORTE - DP130ªCIRC  DINTER1/17ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 131ª CIRCUNSCRIÇÃO - VERTENTES - DP131ªCIRC  DINTER1/17ªDESEC">DELEGACIA DE POLÍCIA DA 131ª CIRCUNSCRIÇÃO - VERTENTES - DP131ªCIRC  DINTER1/17ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 132ª CIRCUNSCRIÇÃO - FREI MIGUELINHO - DP132ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 132ª CIRCUNSCRIÇÃO - FREI MIGUELINHO - DP132ªCIRC DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 133ª CIRCUNSCRIÇÃO - SANTA MARIA DO CAMBUCÁ - DP133ªCIRC  DINTER1/16ªDESEC">DELEGACIA DE POLÍCIA DA 133ª CIRCUNSCRIÇÃO - SANTA MARIA DO CAMBUCÁ - DP133ªCIRC  DINTER1/16ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 134ª CIRCUNSCRIÇÃO - GARANHUNS - DP134ªCIRC  DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 134ª CIRCUNSCRIÇÃO - GARANHUNS - DP134ªCIRC  DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 135ª CIRCUNSCRIÇÃO - GARANHUNS - DP135ªCIRC  DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 135ª CIRCUNSCRIÇÃO - GARANHUNS - DP135ªCIRC  DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 136ª CIRCUNSCRIÇÃO - BOM CONSELHO - DP136ªCIRC  DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 136ª CIRCUNSCRIÇÃO - BOM CONSELHO - DP136ªCIRC  DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 137ª CIRCUNSCRIÇÃO - ÁGUAS BELAS - DP137ªCIRC  DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 137ª CIRCUNSCRIÇÃO - ÁGUAS BELAS - DP137ªCIRC  DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 138ª CIRCUNSCRIÇÃO - LAJEDO - DP138ªCIRC  DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 138ª CIRCUNSCRIÇÃO - LAJEDO - DP138ªCIRC  DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 139ª CIRCUNSCRIÇÃO - CANHOTINHO - DP139ªCIRC  DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 139ª CIRCUNSCRIÇÃO - CANHOTINHO - DP139ªCIRC  DINTER1/18ªDESEC</option>

            <option value="DELEGACIA DE POLÍCIA DA 140ª CIRCUNSCRIÇÃO - CAETÉS - DP140ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 140ª CIRCUNSCRIÇÃO - CAETÉS - DP140ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 141ª CIRCUNSCRIÇÃO - SÃO JOÃO - DP141ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 141ª CIRCUNSCRIÇÃO - SÃO JOÃO - DP141ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 142ª CIRCUNSCRIÇÃO - CAPOEIRAS - DP142ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 142ª CIRCUNSCRIÇÃO - CAPOEIRAS - DP142ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 143ª CIRCUNSCRIÇÃO - IATI - DP143ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 143ª CIRCUNSCRIÇÃO - IATI - DP143ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 144ª CIRCUNSCRIÇÃO - CORRENTES - DP144ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 144ª CIRCUNSCRIÇÃO - CORRENTES - DP144ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 145ª CIRCUNSCRIÇÃO - SALOÁ - DP145ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 145ª CIRCUNSCRIÇÃO - SALOÁ - DP145ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 146ª CIRCUNSCRIÇÃO - JUREMA - DP146ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 146ª. CIRCUNSCRIÇÃO - JUREMA - DP146ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 147ª CIRCUNSCRIÇÃO - JUPI - DP147ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 147ª CIRCUNSCRIÇÃO - JUPI - DP147ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 148ª CIRCUNSCRIÇÃO - CALÇADOS - DP148ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 148ª CIRCUNSCRIÇÃO - CALÇADOS - DP148ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 149ª CIRCUNSCRIÇÃO - LAGOA DO OURO - DP149ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 149ª CIRCUNSCRIÇÃO - LAGOA DO OURO - DP149ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 150ª CIRCUNSCRIÇÃO - PARANATAMA - DP150ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 150ª CIRCUNSCRIÇÃO - PARANATAMA - DP150ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 151ª CIRCUNSCRIÇÃO - JUCATI - DP151ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 151ª CIRCUNSCRIÇÃO - JUCATI - DP151ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 152ª CIRCUNSCRIÇÃO - PALMEIRINA - DP152ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 152ª CIRCUNSCRIÇÃO - PALMEIRINA - DP152ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 153ª CIRCUNSCRIÇÃO - ANGELIM - DP153ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 153ª CIRCUNSCRIÇÃO - ANGELIM - DP153ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 154ª CIRCUNSCRIÇÃO - BREJÃO - DP154ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 154ª CIRCUNSCRIÇÃO - BREJÃO - DP154ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 155ª CIRCUNSCRIÇÃO - TEREZINHA - DP155ªCIRC DINTER1/18ªDESEC">DELEGACIA DE POLÍCIA DA 155ª CIRCUNSCRIÇÃO - TEREZINHA - DP155ªCIRC DINTER1/18ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 156ª CIRCUNSCRIÇÃO - ARCOVERDE - DP156ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 156ª CIRCUNSCRIÇÃO - ARCOVERDE - DP156ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 157ª CIRCUNSCRIÇÃO - BUIQUE - DP157ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 157ª CIRCUNSCRIÇÃO - BUIQUE - DP157ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 158ª CIRCUNSCRIÇÃO - SERTÂNIA - DP158ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 158ª CIRCUNSCRIÇÃO - SERTÂNIA - DP158ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 159ª CIRCUNSCRIÇÃO - CUSTÓDIA - DP159ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 159ª CIRCUNSCRIÇÃO - CUSTÓDIA - DP159ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 160ª CIRCUNSCRIÇÃO - ITAIBA - DP160ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 160ª CIRCUNSCRIÇÃO - ITAIBA - DP160ªCIRC DINTER2/19ªDESEC</option>

            <option value="DELEGACIA DE POLÍCIA DA 161ª CIRCUNSCRIÇÃO - IBIMIRIM - DP161ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 161ª CIRCUNSCRIÇÃO - IBIMIRIM - DP161ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 162ª CIRCUNSCRIÇÃO - TUPANATINGA - DP162ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 162ª CIRCUNSCRIÇÃO - TUPANATINGA - DP162ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 163ª CIRCUNSCRIÇÃO - PEDRA - DP101ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 163ª CIRCUNSCRIÇÃO - PEDRA - DP101ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 164ª CIRCUNSCRIÇÃO - VENTUROSA - DP164ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 164ª CIRCUNSCRIÇÃO - VENTUROSA - DP164ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 165ª CIRCUNSCRIÇÃO - INAJÁ - DP165ªCIRC DINTER2/22ªDESEC">DELEGACIA DE POLÍCIA DA 165ª CIRCUNSCRIÇÃO - INAJÁ - DP165ªCIRC DINTER2/22ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 166ª CIRCUNSCRIÇÃO - MANARI - DP166ªCIRC DINTER2/19ªDESEC">DELEGACIA DE POLÍCIA DA 166ª CIRCUNSCRIÇÃO - MANARI - DP166ªCIRC DINTER2/19ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 167ª CIRCUNSCRIÇÃO - AFOGADOS DA INGAZEIRA - DP167ªCIRC DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 167ª CIRCUNSCRIÇÃO - AFOGADOS DA INGAZEIRA - DP167ªCIRC DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 168ª CIRCUNSCRIÇÃO - SÃO JOSÉ DO EGITO - DP168ªCIRC DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 168ª CIRCUNSCRIÇÃO - SÃO JOSÉ DO EGITO - DP168ªCIRC DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 169ª CIRCUNSCRIÇÃO - TABIRA - DP169ªCIRC DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 169ª CIRCUNSCRIÇÃO - TABIRA - DP169ªCIRC DINTER2/20ªDESEC</option>

            <option value="DELEGACIA DE POLÍCIA DA 170ª CIRCUNSCRIÇÃO - ITAPETIM - DP170ªCIRC  DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 170ª CIRCUNSCRIÇÃO - ITAPETIM - DP170ªCIRC  DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 171ª CIRCUNSCRIÇÃO - IGUARACI - DP171ªCIRC  DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 171ª CIRCUNSCRIÇÃO - IGUARACI - DP171ªCIRC  DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 172ª CIRCUNSCRIÇÃO - SANTA TEREZINHA - DP172ªCIRC  DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 172ª CIRCUNSCRIÇÃO - SANTA TEREZINHA - DP172ªCIRC  DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 173ª CIRCUNSCRIÇÃO - TUPARETAMA - DP173ªCIRC  DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 173ª CIRCUNSCRIÇÃO - TUPARETAMA - DP173ªCIRC  DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 174ª CIRCUNSCRIÇÃO - BREJINHO - DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 174ª CIRCUNSCRIÇÃO - BREJINHO - DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 175ª CIRCUNSCRIÇÃO - SOLIDÃO - DP175ªCIRC  DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 175ª CIRCUNSCRIÇÃO - SOLIDÃO - DP175ªCIRC  DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 176ª CIRCUNSCRIÇÃO - INGAZEIRA - DP176ªCIRC  DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 176ª CIRCUNSCRIÇÃO - INGAZEIRA - DP176ªCIRC  DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 177ª CIRCUNSCRIÇÃO - SERRA TALHADA - DP177ªCIRC  DINTER2/21ªDESEC">DELEGACIA DE POLÍCIA DA 177ª CIRCUNSCRIÇÃO - SERRA TALHADA - DP177ªCIRC  DINTER2/21ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 178ª CIRCUNSCRIÇÃO - SÃO JOSÉ DO BELMONTE - DP178ªCIRC  DINTER2/21ªDESEC">DELEGACIA DE POLÍCIA DA 178ª CIRCUNSCRIÇÃO - SÃO JOSÉ DO BELMONTE - DP178ªCIRC  DINTER2/21ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 179ª CIRCUNSCRIÇÃO - FLORES - DP179ªCIRC  DINTER2/21ªDESEC">DELEGACIA DE POLÍCIA DA 179ª CIRCUNSCRIÇÃO - FLORES - DP179ªCIRC  DINTER2/21ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 180ª CIRCUNSCRIÇÃO - CARNAIBA - DP101ªCIRC  DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 180ª CIRCUNSCRIÇÃO - CARNAIBA - DP101ªCIRC  DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 181ª CIRCUNSCRICAO - TRIUNFO - DP181ªCIRC  DINTER2/21ªDESEC">DELEGACIA DE POLÍCIA DA 181ª CIRCUNSCRICAO - TRIUNFO - DP181ªCIRC  DINTER2/21ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 182ª CIRCUNSCRIÇÃO - BETÂNIA - DP182ªCIRC  DINTER2/21ªDESEC">DELEGACIA DE POLÍCIA DA 182ª CIRCUNSCRIÇÃO - BETÂNIA - DP182ªCIRC  DINTER2/21ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 183ª CIRCUNSCRIÇÃO - SANTA CRUZ DA BAIXA VERDE - DP183ªCIRC DINTER2/21ªDESEC">DELEGACIA DE POLÍCIA DA 183ª CIRCUNSCRIÇÃO - SANTA CRUZ DA BAIXA VERDE - DP183ªCIRC DINTER2/21ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 184ª CIRCUNSCRIÇÃO - CALUMBI - DP184ªCIRC  DINTER2/21ªDESEC">DELEGACIA DE POLÍCIA DA 184ª CIRCUNSCRIÇÃO - CALUMBI - DP184ªCIRC  DINTER2/21ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 185ª CIRCUNSCRIÇÃO - QUIXABA - DP185ªCIRC  DINTER2/20ªDESEC">DELEGACIA DE POLÍCIA DA 185ª CIRCUNSCRIÇÃO - QUIXABA - DP185ªCIRC  DINTER2/20ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 186ª CIRCUNSCRIÇÃO - PETROLÂNDIA - DP186ªCIRC  DINTER2/22ªDESEC">DELEGACIA DE POLÍCIA DA 186ª CIRCUNSCRIÇÃO - PETROLÂNDIA - DP186ªCIRC  DINTER2/22ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 187ª CIRCUNSCRIÇÃO - FLORESTA - DP187ªCIRC  DINTER2/22ªDESEC">DELEGACIA DE POLÍCIA DA 187ª CIRCUNSCRIÇÃO - FLORESTA - DP187ªCIRC  DINTER2/22ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 188ª CIRCUNSCRIÇÃO - BELÉM DE SÃO FRANCISCO - DP188ªCIRC DINTER2/22ªDESEC">DELEGACIA DE POLÍCIA DA 188ª CIRCUNSCRIÇÃO - BELÉM DE SÃO FRANCISCO  -   DP188ªCIRC DINTER2/22ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 189ª CIRCUNSCRIÇÃO - TACARATU - DP189ªCIRC  DINTER2/22ªDESEC">DELEGACIA DE POLÍCIA DA 189ª CIRCUNSCRIÇÃO - TACARATU - DP189ªCIRC  DINTER2/22ªDESEC</option>

            <option value="DELEGACIA DE POLÍCIA DA 190ª CIRCUNSCRIÇÃO - JATOBÁ - DP190ªCIRC  DINTER2/22ªDESEC">DELEGACIA DE POLÍCIA DA 190ª CIRCUNSCRIÇÃO - JATOBÁ - DP190ªCIRC  DINTER2/22ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 191ª CIRCUNSCRIÇÃO - CARNAUBEIRA DA PENHA - DP191ªCIRC  DINTER2/22ªDESEC">DELEGACIA DE POLÍCIA DA 191ª CIRCUNSCRIÇÃO - CARNAUBEIRA DA PENHA - DP191ªCIRC  DINTER2/22ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 192ª CIRCUNSCRIÇÃO - ITACURUBA - DP192ªCIRC  DINTER2/22ªDESEC">DELEGACIA DE POLÍCIA DA 192ª CIRCUNSCRIÇÃO - ITACURUBA - DP192ªCIRC  DINTER2/22ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 193ª CIRCUNSCRIÇÃO - SALGUEIRO - DP193ªCIRC  DINTER2/23ªDESEC">DELEGACIA DE POLÍCIA DA 193ª CIRCUNSCRIÇÃO - SALGUEIRO - DP193ªCIRC  DINTER2/23ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 194ª CIRCUNSCRIÇÃO - PARNAMIRIM - DP194CIRC  DINTER2/23ªDESEC">DELEGACIA DE POLÍCIA DA 194ª CIRCUNSCRIÇÃO - PARNAMIRIM - DP194CIRC  DINTER2/23ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 195ª CIRCUNSCRIÇÃO - SERRITA - DP195ªCIRC  DINTER2/23ªDESEC">DELEGACIA DE POLÍCIA DA 195ª CIRCUNSCRIÇÃO - SERRITA - DP195ªCIRC  DINTER2/23ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 196ª CIRCUNSCRIÇÃO - MIRANDIBA - DP196ªCIRC  DINTER2/23ªDESEC">DELEGACIA DE POLÍCIA DA 196ª CIRCUNSCRIÇÃO - MIRANDIBA - DP196ªCIRC  DINTER2/23ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 197ª CIRCUNSCRIÇÃO - CEDRO - DP197ªCIRC  DINTER2/23ªDESEC">DELEGACIA DE POLÍCIA DA 197ª CIRCUNSCRIÇÃO - CEDRO - DP197ªCIRC  DINTER2/23ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 198ª CIRCUNSCRIÇÃO - VERDEJANTE - DP198ªCIRC  DINTER2/23ªDESEC">DELEGACIA DE POLÍCIA DA 198ª CIRCUNSCRIÇÃO - VERDEJANTE - DP198ªCIRC  DINTER2/23ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 199ª CIRCUNSCRIÇÃO - TERRA NOVA - DP199ªCIRC  DINTER2/23ªDESEC">DELEGACIA DE POLÍCIA DA 199ª CIRCUNSCRIÇÃO - TERRA NOVA - DP199ªCIRC  DINTER2/23ªDESEC</option>

            <option value="DELEGACIA DE POLÍCIA DA 200ª CIRCUNSCRIÇÃO - ARARIPINA - DP200ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 200ª CIRCUNSCRIÇÃO - ARARIPINA - DP200ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 201ª CIRCUNSCRIÇÃO - OURICURI - DP201ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 201ª CIRCUNSCRIÇÃO - OURICURI - DP201ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 202ª CIRCUNSCRIÇÃO - EXU - DP202ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 202ª CIRCUNSCRIÇÃO - EXU - DP202ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 203ª CIRCUNSCRIÇÃO - BODOCÓ - DP203ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 203ª CIRCUNSCRIÇÃO - BODOCÓ - DP203ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 204ª CIRCUNSCRIÇÃO - IPUBI - DP204ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 204ª CIRCUNSCRIÇÃO - IPUBI - DP204ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 205ª CIRCUNSCRIÇÃO - TRINDADE - DP205ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 205ª CIRCUNSCRIÇÃO - TRINDADE - DP205ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 206ª CIRCUNSCRIÇÃO - SANTA FILOMENA - DP206ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 206ª CIRCUNSCRIÇÃO - SANTA FILOMENA - DP206ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 207ª CIRCUNSCRIÇÃO - SANTA CRUZ DE MALTA - DP207ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 207ª CIRCUNSCRIÇÃO - SANTA CRUZ DE MALTA - DP207ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 208ª CIRCUNSCRIÇÃO - MOREILÂNDIA - DP208ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 208ª CIRCUNSCRIÇÃO - MOREILÂNDIA - DP208ªCIRC  DINTER2/24ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 209ª CIRCUNSCRIÇÃO - GRANITO - DP209ªCIRC  DINTER2/24ªDESEC">DELEGACIA DE POLÍCIA DA 209ª CIRCUNSCRIÇÃO - GRANITO - DP209ªCIRC  DINTER2/24ªDESEC</option>

            <option value="DELEGACIA DE POLÍCIA DA 210ª CIRCUNSCRIÇÃO - SANTA MARIA DA BOA VISTA - DP210ªCIRC  DINTER2/25ªDESEC">DELEGACIA DE POLÍCIA DA 210ª CIRCUNSCRIÇÃO - SANTA MARIA DA BOA VISTA - DP210ªCIRC  DINTER2/25ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 211ª CIRCUNSCRIÇÃO - CABROBÓ - DP211ªCIRC  DINTER2/25ªDESEC">DELEGACIA DE POLÍCIA DA 211ª CIRCUNSCRIÇÃO - CABROBÓ - DP211ªCIRC  DINTER2/25ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 212ª CIRCUNSCRIÇÃO - OROCÓ - DP212ªCIRC  DINTER2/25ªDESEC">DELEGACIA DE POLÍCIA DA 212ª CIRCUNSCRIÇÃO - OROCÓ - DP212ªCIRC  DINTER2/25ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 213ª CIRCUNSCRIÇÃO - PETROLINA - DP213ªCIRC  DINTER2/26ªDESEC">DELEGACIA DE POLÍCIA DA 213ª CIRCUNSCRIÇÃO - PETROLINA - DP213ªCIRC  DINTER2/26ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 214ª CIRCUNSCRIÇÃO - PETROLINA - DP214ªCIRC  DINTER2/26ªDESEC">DELEGACIA DE POLÍCIA DA 214ª CIRCUNSCRIÇÃO - PETROLINA - DP214ªCIRC  DINTER2/26ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 215ª CIRCUNSCRIÇÃO - LAGOA GRANDE - DP215ªCIRC  DINTER2/26ªDESEC">DELEGACIA DE POLÍCIA DA 215ª CIRCUNSCRIÇÃO - LAGOA GRANDE - DP215ªCIRC   DINTER2/26ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 216ª CIRCUNSCRIÇÃO - AFRÂNIO - DP216ªCIRC  DINTER2/26ªDESEC">DELEGACIA DE POLÍCIA DA 216ª CIRCUNSCRIÇÃO - AFRÂNIO - DP216ªCIRC  DINTER2/26ªDESEC</option>
            <option value="DELEGACIA DE POLÍCIA DA 217ª CIRCUNSCRIÇÃO - DORMENTES - P217ªCIRC  DINTER2/26ªDESEC">DELEGACIA DE POLÍCIA DA 217ª CIRCUNSCRIÇÃO - DORMENTES - P217ªCIRC  DINTER2/26ªDESEC</option>

            <option value="DELEGACIA DE POLICIA DE CRIMES CONTRA A PROPRIEDADE IMATERIAL - DEPRIM">DELEGACIA DE POLICIA DE CRIMES CONTRA A PROPRIEDADE IMATERIAL - DEPRIM</option>
            <option value="DELEGACIA DE POLICIA DE CRIMES CONTRA O CONSUMIDOR">DELEGACIA DE POLICIA DE CRIMES CONTRA O CONSUMIDOR</option>
            <option value="DELEGACIA DE POLICIA DE PLANTAO - 1A. SECCIONAL- BOA VISTA">DELEGACIA DE POLICIA DE PLANTAO - 1A. SECCIONAL- BOA VISTA</option>
            <option value="DELEGACIA DE POLICIA DE PLANTAO - 11A. SECCIONAL - GOIANA">DELEGACIA DE POLICIA DE PLANTAO - 11A. SECCIONAL - GOIANA</option>
            <option value="DELEGACIA DE POLICIA DE PLANTAO - 213ª CIRCUNSCRICAO - PETROLINA">DELEGACIA DE POLICIA DE PLANTAO - 213ª CIRCUNSCRICAO - PETROLINA</option>
            <option value="DELEGACIA DE POLICIA DE PLANTAO - 4A. SECCIONAL - CORDEIRO">DELEGACIA DE POLICIA DE PLANTAO - 4A. SECCIONAL - CORDEIRO</option>
            <option value="DELEGACIA DE POLICIA DE PLANTAO - 7A. SECCIONAL - OLINDA">DELEGACIA DE POLICIA DE PLANTAO - 7A. SECCIONAL - OLINDA</option>
            <option value="DELEGACIA DE POLICIA DE PLANTAO - 8A. SECCIONAL- PAULISTA">DELEGACIA DE POLICIA DE PLANTAO - 8A. SECCIONAL- PAULISTA</option>
            <option value="DELEGACIA DE POLÍCIA DE PLANTÃO DA 091ª CIRCUNSCRIÇÃO - BEZERROS - DPP91ªCIRC DINTER1/14ªDESEC">DELEGACIA DE POLÍCIA DE PLANTÃO DA 091ª CIRCUNSCRIÇÃO - BEZERROS - DPP91ªCIRC DINTER1/14ªDESEC</option>
            <option value="DELEGACIA DE POLICIA DO MEIO AMBIENTE - DEPOMA">DELEGACIA DE POLICIA DO MEIO AMBIENTE - DEPOMA</option>

            <option value="DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE">DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE</option>
            <option value="DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE (UNIDADE MOVEL - AFLITOS)">DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE (UNIDADE MOVEL - AFLITOS)</option>
            <option value="DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE (UNIDADE MOVEL - ARENA)">DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE (UNIDADE MOVEL - ARENA)</option>
            <option value="DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE (UNIDADE MOVEL - ARRUDA)">DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE (UNIDADE MOVEL - ARRUDA)</option>
            <option value="DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE (UNIDADE MOVEL - ILHA DO RETIRO)">DELEGACIA DE REPRESSAO A INTOLERANCIA ESPORTIVA - DPRIE (UNIDADE MOVEL - ILHA DO RETIRO)</option>
            <option value="DELEGACIA DE TREINAMENTO">DELEGACIA DE TREINAMENTO</option>
            <option value="DELEGACIA PELA INTERNET">DELEGACIA PELA INTERNET</option>
            <option value="DENARC - 1ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 1ªDPRN">DENARC - 1ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 1ªDPRN</option>
            <option value="DENARC - 10ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 10ªDPRN">DENARC - 10ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 10ªDPRN</option>
            <option value="DENARC - 11ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 11ªDPRN">DENARC - 11ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 11ªDPRN</option>
            <option value="DENARC - 12ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 12ªDPRN">DENARC - 12ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 12ªDPRN</option>
            <option value="DENARC - 2ª DELEGACIA DE POLICA DE REPRESSÃO AO NARCOTRÁFICO - 2ªDPRN">DENARC - 2ª DELEGACIA DE POLICA DE REPRESSÃO AO NARCOTRÁFICO - 2ªDPRN</option>

            <option value="DENARC - 3ª DELEGACIA DE POLICA DE REPRESSÃO AO NARCOTRÁFICO - 3ªDPRN">DENARC - 3ª DELEGACIA DE POLICA DE REPRESSÃO AO NARCOTRÁFICO - 3ªDPRN</option>
            <option value="DENARC - 4ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 4ªDPRN">DENARC - 4ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 4ªDPRN</option>
            <option value="DENARC - 5ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 5ªDPRN">DENARC - 5ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 5ªDPRN</option>
            <option value="DENARC - 6ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 6ªDPRN">DENARC - 6ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 6ªDPRN</option>
            <option value="DENARC - 7ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 7ªDPRN">DENARC - 7ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 7ªDPRN</option>
            <option value="DENARC - 8ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 8ªDPRN">DENARC - 8ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 8ªDPRN</option>
            <option value="DENARC - 9ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 9ªDPRN">DENARC - 9ª DELEGACIA DE POLICIA DE REPRESSÃO AO NARCOTRÁFICO - 9ªDPRN</option>
            <option value="DEPARTAMENTO DE FINANCAS DIVISAO DE TESOURARIA">DEPARTAMENTO DE FINANCAS DIVISAO DE TESOURARIA</option>
            <option value="DEPARTAMENTO DE REPRESSÃO AO NARCOTRÁFICO - DENARC">DEPARTAMENTO DE REPRESSÃO AO NARCOTRÁFICO - DENARC</option>
            <option value="DEPARTAMENTO DE REPRESSÃO AOS CRIMES PATRIMONIAIS">DEPARTAMENTO DE REPRESSÃO AOS CRIMES PATRIMONIAIS</option>

            <option value="DEPATRI - DELEGACIA DE POLÍCIA DE DELITOS DE TRÂNSITO - DPDT">DEPATRI - DELEGACIA DE POLÍCIA DE DELITOS DE TRÂNSITO - DPDT</option>
            <option value="DEPATRI - DELEGACIA DE POLÍCIA DE REPRESSÃO AO ESTELIONATO - DPRE">DEPATRI - DELEGACIA DE POLÍCIA DE REPRESSÃO AO ESTELIONATO - DPRE</option>
            <option value="DEPATRI - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS - DPRF">DEPATRI - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS - DPRF</option>
            <option value="DEPATRI - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS DE CARGAS - DPRFC">DEPATRI - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS DE CARGAS - DPRFC</option>
            <option value="DEPATRI - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS DE VEÍCULOS - DPRFV">DEPATRI - DELEGACIA DE POLÍCIA DE ROUBOS E FURTOS DE VEÍCULOS - DPRFV</option>
            <option value="DEPATRI - DELEGACIA DE POLÍCIA DO TURISTA - DPTUR">DEPATRI - DELEGACIA DE POLÍCIA DO TURISTA - DPTUR</option>
            <option value="DHPP - DELEGACIA DE DESAPARECIDOS E DE PROTECAO A PESSOA - DDPP">DHPP - DELEGACIA DE DESAPARECIDOS E DE PROTECAO A PESSOA - DDPP</option>
            <option value="DHPP - DELEGACIA DE POLÍCIA DE PLANTÃO DE HOMICÍDIO - DPPH">DHPP - DELEGACIA DE POLÍCIA DE PLANTÃO DE HOMICÍDIO - DPPH</option>
            <option value="DHPP - DELEGACIA POLICIAL DO IDOSO - DPID">DHPP - DELEGACIA POLICIAL DO IDOSO - DPID</option>
            <option value="DHPP - FORÇA TAREFA DE HOMICÍDIOS DA REGIÃO METROPOLITANA NORTE">DHPP - FORÇA TAREFA DE HOMICÍDIOS DA REGIÃO METROPOLITANA NORTE</option>

            <option value="DHPP - FORÇA TAREFA DE HOMICÍDIOS DA REGIÃO METROPOLITANA SUL">DHPP - FORÇA TAREFA DE HOMICÍDIOS DA REGIÃO METROPOLITANA SUL</option>
            <option value="DHPP - FORÇA TAREFA DE HOMICÍDIOS NA CAPITAL">DHPP - FORÇA TAREFA DE HOMICÍDIOS NA CAPITAL</option>
            <option value="DHPP - 01ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - DPH">DHPP - 01ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - DPH</option>
            <option value="DHPP - 02ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - 2ªDPH">DHPP - 02ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - 2ªDPH</option>
            <option value="DHPP - 03ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - 3ªDPH">DHPP - 03ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - 3ªDPH</option>
            <option value="DHPP - 04º DELEGACIA DE POLÍCIA DE HOMICÍDIOS - 4ªDPH">DHPP - 04º DELEGACIA DE POLÍCIA DE HOMICÍDIOS - 4ªDPH</option>
            <option value="DHPP - 05º DELEGACIA DE POLÍCIA DE HOMICÍDIOS - 5ªDPH">DHPP - 05º DELEGACIA DE POLÍCIA DE HOMICÍDIOS - 5ªDPH</option>
            <option value="DIM - COORDENAÇÃO DOS SERVIÇOS DE PLANTÃO POLICIAL - COORDPLAN">DIM - COORDENAÇÃO DOS SERVIÇOS DE PLANTÃO POLICIAL - COORDPLAN</option>
            <option value="DIM - GERÊNCIA DE CONTROLE OPERACIONAL INTERIOR 1 DA POLICIA CIVIL">DIM - GERÊNCIA DE CONTROLE OPERACIONAL INTERIOR 1 DA POLICIA CIVIL</option>

            <option value="DIM - GERÊNCIA DE CONTROLE OPERACIONAL INTERIOR 2 DA POLICIA CIVIL">DIM - GERÊNCIA DE CONTROLE OPERACIONAL INTERIOR 2 DA POLICIA CIVIL</option>
            <option value="DIM - GERÊNCIA DE CONTROLE OPERACIONAL METROPOLITANO DA POLICIA CIVIL">DIM - GERÊNCIA DE CONTROLE OPERACIONAL METROPOLITANO DA POLICIA CIVIL</option>
            <option value="DIM - 01ª DELEGACIA SECCIONAL DE POLÍCIA - SANTO AMARO">DIM - 01ª DELEGACIA SECCIONAL DE POLÍCIA - SANTO AMARO</option>
            <option value="DIM - 02ª DELEGACIA SECCIONAL DE POLICÍA CIVIL - ESPINHEIRO">DIM - 02ª DELEGACIA SECCIONAL DE POLICÍA CIVIL - ESPINHEIRO</option>
            <option value="DIM - 03ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - BOA VIAGEM">DIM - 03ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - BOA VIAGEM</option>
            <option value="DIM - 04ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - VÁRZEA">DIM - 04ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - VÁRZEA</option>
            <option value="DIM - 05ª DELEGACIA SECCIONAL DE POLICIA CIVIL - APIPUCOS">DIM - 05ª DELEGACIA SECCIONAL DE POLICIA CIVIL - APIPUCOS</option>
            <option value="DIM - 06ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - JABOATÃO DOS GUARARAPES">DIM - 06ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - JABOATÃO DOS GUARARAPES</option>
            <option value="DIM - 07ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - OLINDA">DIM - 07ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - OLINDA</option>
            <option value="DIM - 08ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - PAULISTA">DIM - 08ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - PAULISTA</option>

            <option value="DIM - 09ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - SÃO LOURENÇO DA MATA">DIM - 09ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - SÃO LOURENÇO DA MATA</option>
            <option value="DIM - 10ª DELEGACIA SECCIONAL DE POLICIA CIVIL - CABO DE SANTO AGOSTINHO">DIM - 10ª DELEGACIA SECCIONAL DE POLICIA CIVIL - CABO DE SANTO AGOSTINHO</option>
            <option value="DINTER1 - 11ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - GOIANA">DINTER1 - 11ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - GOIANA</option>
            <option value="DINTER1 - 12ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - VITÓRIA DE SANTO ANTÃO">DINTER1 - 12ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - VITÓRIA DE SANTO ANTÃO</option>
            <option value="DINTER1 - 13ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - PALMARES">DINTER1 - 13ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - PALMARES</option>
            <option value="DINTER1 - 14ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - CARUARU">DINTER1 - 14ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - CARUARU</option>
            <option value="DINTER1 - 15ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - BELO JARDIM">DINTER1 - 15ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - BELO JARDIM</option>
            <option value="DINTER1 - 16ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GOIANA">DINTER1 - 16ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GOIANA</option>
            <option value="DINTER1 - 16ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - LIMOEIRO">DINTER1 - 16ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - LIMOEIRO</option>
            <option value="DINTER1 - 17ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - VITÓRIA DE SANTO ANTÃO">DINTER1 - 17ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - VITÓRIA DE SANTO ANTÃO</option>

            <option value="DINTER1 - 17ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - SANTA CRUZ DO CAPIBARIBE">DINTER1 - 17ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - SANTA CRUZ DO CAPIBARIBE</option>
            <option value="DINTER1 - 18ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PALMARES">DINTER1 - 18ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PALMARES</option>
            <option value="DINTER1 - 18ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - GARANHUNS">DINTER1 - 18ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - GARANHUNS</option>
            <option value="DINTER1 - 19ª DELEGACIA DE POLICÍA DE HOMICÍDIOS - CARUARU, DA 3A DH-AGRESTE">DINTER1 - 19ª DELEGACIA DE POLICÍA DE HOMICÍDIOS - CARUARU, DA 3A DH-AGRESTE</option>
            <option value="DINTER1 - 20ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - CARUARU, DA 3A DH-AGRESTE">DINTER1 - 20ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - CARUARU, DA 3A DH-AGRESTE</option>
            <option value="DINTER1 - 21ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - SANTA CRUZ DO CAPIBARIBE, DA 3A DH-AGRESTE">DINTER1 - 21ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - SANTA CRUZ DO CAPIBARIBE, DA 3A DH-AGRESTE</option>
            <option value="DINTER1 - 22ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GARANHUNS, DA 3A DH-AGRESTE">DINTER1 - 22ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - GARANHUNS, DA 3A DH-AGRESTE</option>
            <option value="DINTER1 - 3ª DIVISÃO DE HOMICÍDIOS - AGRESTE">DINTER1 - 3ª DIVISÃO DE HOMICÍDIOS - AGRESTE</option>
            <option value="DINTER2 - 19ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - ARCOVERDE">DINTER2 - 19ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - ARCOVERDE</option>
            <option value="DINTER2 - 20ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - AFOGADOS DA INGAZEIRA">DINTER2 - 20ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - AFOGADOS DA INGAZEIRA</option>

            <option value="DINTER2 - 21ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - SERRA TALHADA">DINTER2 - 21ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - SERRA TALHADA</option>
            <option value="DINTER2 - 22ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - FLORESTA">DINTER2 - 22ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL - FLORESTA</option>
            <option value="DINTER2 - 23ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - ARCOVERDE, DA 23A DPH-SERTÃO">DINTER2 - 23ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - ARCOVERDE, DA 23A DPH-SERTÃO</option>
            <option value="DINTER2 - 23ª DELEGACIA SECCIONAL DE POLICIA CIVIL - SALGUEIRO">DINTER2 - 23ª DELEGACIA SECCIONAL DE POLICIA CIVIL - SALGUEIRO</option>
            <option value="DINTER2 - 24ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - ARARIPINA, DA 24A DPH-SERTÃO">DINTER2 - 24ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - ARARIPINA, DA 24A DPH-SERTÃO</option>
            <option value="DINTER2 - 24ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - ARARIPINA">DINTER2 - 24ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - ARARIPINA</option>
            <option value="DINTER2 - 25ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PETROLINA, DA 25A DPH-SERTÃO">DINTER2 - 25ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PETROLINA, DA 25A DPH-SERTÃO</option>
            <option value="DINTER2 - 25ªDELEGACIA SECCIONAL DE POLÍCIA CIVIL  - CABROBO">DINTER2 - 25ªDELEGACIA SECCIONAL DE POLÍCIA CIVIL  - CABROBO</option>
            <option value="DINTER2 - 26ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - PETROLINA">DINTER2 - 26ª DELEGACIA SECCIONAL DE POLÍCIA CIVIL  - PETROLINA</option>
            <option value="DIRESP - DEPARTAMENTO DE POLÍCIA DA CRIANÇA E DO ADOLESCENTE - DPCA">DIRESP - DEPARTAMENTO DE POLÍCIA DA CRIANÇA E DO ADOLESCENTE - DPCA</option>

            <option value="DIRESP - DEPARTAMENTO DE POLÍCIA DA MULHER">DIRESP - DEPARTAMENTO DE POLÍCIA DA MULHER</option>
            <option value="DIRESP - DEPARTAMENTO DE REPRESSAO AO CRIME ORGANIZADO - DRACO">DIRESP - DEPARTAMENTO DE REPRESSAO AO CRIME ORGANIZADO - DRACO</option>
            <option value="DIRESP - DIVISÃO DE HOMICÍDIOS METROPOLITANA NORTE - DHMN">DIRESP - DIVISÃO DE HOMICÍDIOS METROPOLITANA NORTE - DHMN</option>
            <option value="DIRESP - DIVISÃO DE HOMICÍDIOS METROPOLITANA SUL - DHMS ">DIRESP - DIVISÃO DE HOMICÍDIOS METROPOLITANA SUL - DHMS </option>
            <option value="DIRESP - 06ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA">DIRESP - 06ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA</option>
            <option value="DIRESP - 07ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA">DIRESP - 07ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA</option>
            <option value="DIRESP - 10ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS -SÃO LOURENÇO DA MATA">DIRESP - 10ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS -SÃO LOURENÇO DA MATA</option>
            <option value="DIRESP - 11ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES">DIRESP - 11ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES</option>
            <option value="DIRESP - 12ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES">DIRESP - 12ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - JABOATÃO DOS GUARARAPES</option>
            <option value="DIRESP - 13ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS- JABOATÃO DOS GUARARAPES/MORENO">DIRESP - 13ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS- JABOATÃO DOS GUARARAPES/MORENO</option>
            <option value="DIRESP - 14ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS- CABO DE SANTO AGOSTINHO">DIRESP - 14ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS- CABO DE SANTO AGOSTINHO</option>
            <option value="DIRESP - 15ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS -IPOJUCA">DIRESP - 15ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS -IPOJUCA</option>
            <option value="DIRESP - 8ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA">DIRESP - 8ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - PAULISTA</option>
            <option value="DIRESP - 9ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - OLINDA">DIRESP - 9ª DELEGACIA DE POLÍCIA DE HOMICÍDIOS - OLINDA</option>
            <option value="DIRETORIA DE INTELIGENCIA">DIRETORIA DE INTELIGENCIA</option>

            <option value="DIRETORIA DE POLICIA JUDICIÁRIA - PC">DIRETORIA DE POLICIA JUDICIÁRIA - PC</option>
            <option value="DIRETORIA DE RECURSOS HUMANOS - PC">DIRETORIA DE RECURSOS HUMANOS - PC</option>
            <option value="DIRETORIA ESPECIALIZADA DA POLICIA CIVIL">DIRETORIA ESPECIALIZADA DA POLICIA CIVIL</option>
            <option value="DIRETORIA INTEGRADA DO INTERIOR 1 - POLICIA CIVIL">DIRETORIA INTEGRADA DO INTERIOR 1 - POLICIA CIVIL</option>
            <option value="DIRETORIA INTEGRADA DO INTERIOR 2 - POLICIA CIVIL">DIRETORIA INTEGRADA DO INTERIOR 2 - POLICIA CIVIL</option>
            <option value="DIRETORIA INTEGRADA METROPOLITANA - POLICIA CIVIL">DIRETORIA INTEGRADA METROPOLITANA - POLICIA CIVIL</option>
            <option value="DIVISÃO DE INVESTIGAÇÃO E APURAÇÃO DO TJPE">DIVISÃO DE INVESTIGAÇÃO E APURAÇÃO DO TJPE</option>
            <option value="DPCA - DELEGACIA  POLÍCIA DE CRIMES CONTRA CRIANÇA E ADOLESCENTE - PLANTÃO">DPCA - DELEGACIA  POLÍCIA DE CRIMES CONTRA CRIANÇA E ADOLESCENTE - PLANTÃO</option>
            <option value="DPCA - DELEGACIA DE POLICIA DE ATOS INFRACIONAIS - DPAI">DPCA - DELEGACIA DE POLICIA DE ATOS INFRACIONAIS - DPAI</option>
            <option value="DPCA - DELEGACIA DE POLÍCIA DE ATOS INFRACIONAIS - PLANTÃO">DPCA - DELEGACIA DE POLÍCIA DE ATOS INFRACIONAIS - PLANTÃO</option>
            <option value="DPCA - DELEGACIA DE POLÍCIA DE CRIMES CONTRA CRIANÇA E ADOLESCENTE">DPCA - DELEGACIA DE POLÍCIA DE CRIMES CONTRA CRIANÇA E ADOLESCENTE</option>
            <option value="DPCA - DELEGACIA DE POLÍCIA DE PREVENÇÃO E REPRESSÃO AOS ATOS INFRACIONAIS - JABOATÃO DOS GUARARAPES">DPCA - DELEGACIA DE POLÍCIA DE PREVENÇÃO E REPRESSÃO AOS ATOS INFRACIONAIS - JABOATÃO DOS GUARARAPES</option>
            <option value="DPCA - DELEGACIA DE POLÍCIA DE PREVENÇÃO E REPRESSÃO AOS ATOS INFRACIONAIS - PAULISTA">DPCA - DELEGACIA DE POLÍCIA DE PREVENÇÃO E REPRESSÃO AOS ATOS INFRACIONAIS - PAULISTA</option>
            <option value="DPCA - UNIDADE DE PREVENÇÃO E REPRESSÃO AOS ATOS INFRACIONAIS - UNIPRAI">DPCA - UNIDADE DE PREVENÇÃO E REPRESSÃO AOS ATOS INFRACIONAIS - UNIPRAI</option>
            <option value="DPCA - UNIDADE DE PREVENÇÃO E REPRESSÃO AOS CRIMES CONTRA CRIANÇA E ADOLESCENTE - UNIPRECA">DPCA - UNIDADE DE PREVENÇÃO E REPRESSÃO AOS CRIMES CONTRA CRIANÇA E ADOLESCENTE - UNIPRECA</option>                        

            <option value="DPCA - 1ª. DEL. DE POLÍCIA DE CRIMES CONTRA A CRIANÇA E ADOLESCENTE E ATOS INFRACIONAIS - PAULISTA">DPCA - 1ª. DEL. DE POLÍCIA DE CRIMES CONTRA A CRIANÇA E ADOLESCENTE E ATOS INFRACIONAIS - PAULISTA</option>
            <option value="DPCA - 13ªDELEGACIA DE  POLÍCIA DE PLANTÃO DE CRIMES CONTRA CRIANÇA  ADOLESCENTE E ATOS INFRACIONAIS">DPCA - 13ªDELEGACIA DE  POLÍCIA DE PLANTÃO DE CRIMES CONTRA CRIANÇA  ADOLESCENTE E ATOS INFRACIONAIS</option>
            <option value="DPCA - 2ª. DEL. DE POLICIA DE CRIMES CONTRA A CRIANÇA E ADOLESCENTE E ATOS INFRACIONAIS - JABOATÃO">DPCA - 2ª. DEL. DE POLICIA DE CRIMES CONTRA A CRIANÇA E ADOLESCENTE E ATOS INFRACIONAIS - JABOATÃO</option>
            <option value="DPMUL - NÚCLEO DE PREVENÇÃO AOS CRIMES CONTRA A MULHER">DPMUL - NÚCLEO DE PREVENÇÃO AOS CRIMES CONTRA A MULHER</option>
            <option value="DPMUL - NÚCLEO DE PREVENÇÃO AOS CRIMES CONTRA A MULHER -NUPREM">DPMUL - NÚCLEO DE PREVENÇÃO AOS CRIMES CONTRA A MULHER -NUPREM</option>
            <option value="DPMUL - 01ª DELEGACIA DE POLÍCIA DA MULHER - 1ª DEMUL SANTO AMARO">DPMUL - 01ª DELEGACIA DE POLÍCIA DA MULHER - 1ª DEMUL SANTO AMARO</option>
            <option value="DPMUL - 02ª DELEGACIA DE POLÍCIA DA MULHER - 2ªDEMUL PRAZERES">DPMUL - 02ª DELEGACIA DE POLÍCIA DA MULHER - 2ªDEMUL PRAZERES</option>
            <option value="DPMUL - 03ª DELEGACIA DE POLÍCIA DA MULHER  - 3ªDEMUL PETROLINA">DPMUL - 03ª DELEGACIA DE POLÍCIA DA MULHER  - 3ªDEMUL PETROLINA</option>
            <option value="DPMUL - 04ª DELEGACIA DE POLÍCIA DA MULHER - 4ªDEMUL CARUARU">DPMUL - 04ª DELEGACIA DE POLÍCIA DA MULHER - 4ªDEMUL CARUARU</option>
            <option value="DPMUL - 05ª DELEGACIA DE POLÍCIA DA MULHER - 5ª DEMUL PAULISTA">DPMUL - 05ª DELEGACIA DE POLÍCIA DA MULHER - 5ª DEMUL PAULISTA</option>
            <option value="DPMUL - 06ª DELEGACIA DE POLÍCIA DA MULHER - 6ªDMUL IPOJUCA">DPMUL - 06ª DELEGACIA DE POLÍCIA DA MULHER - 6ªDMUL IPOJUCA</option>
            <option value="DPMUL - 07ª DELEGACIA DE POLICIA DA MULHER  - 7ªDEMUL SURUBIM">DPMUL - 07ª DELEGACIA DE POLICIA DA MULHER  - 7ªDEMUL SURUBIM</option>
            <option value="DPMUL - 08ª DELEGACIA DE POLÍCIA DA MULHER  - 8ªDEMUL GOIANA">DPMUL - 08ª DELEGACIA DE POLÍCIA DA MULHER  - 8ªDEMUL GOIANA</option>
            <option value="DPMUL - 09ª DELEGACIA DE POLÍCIA DA MULHER - 9ªDEMUL GARANHUNS">DPMUL - 09ª DELEGACIA DE POLÍCIA DA MULHER - 9ªDEMUL GARANHUNS</option>
            <option value="DPMUL - 10ª DELEGACIA DE POLÍCIA DA MULHER  - 10ªDEMUL  VITORIA DE SANTO ANTAO">DPMUL - 10ª DELEGACIA DE POLÍCIA DA MULHER  - 10ªDEMUL  VITORIA DE SANTO ANTAO</option>

            <option value="DPMUL - 11ª DELEGACIA DE POLÍCIA DA MULHER - 11ªDEMUL SALGUEIRO">DPMUL - 11ª DELEGACIA DE POLÍCIA DA MULHER - 11ªDEMUL SALGUEIRO</option>
            <option value="DPMUL - 12ª DELEGACIA DE POLÍCIA DA MULHER - 12ªDEMUL OURICURI">DPMUL - 12ª DELEGACIA DE POLÍCIA DA MULHER - 12ªDEMUL OURICURI</option>
            <option value="DPMUL - 13ª DELEGACIA DE POLÍCIA DA MULHER - 13ªDEMUL AFOGADOS DA INGAZEIRA">DPMUL - 13ª DELEGACIA DE POLÍCIA DA MULHER - 13ªDEMUL AFOGADOS DA INGAZEIRA</option>
            <option value="DPMUL - 14ª DELEGACIA DE POLÍCIA DA MULHER - 14ªDEMUL CABO DE SANTO AGOSTINHO">DPMUL - 14ª DELEGACIA DE POLÍCIA DA MULHER - 14ªDEMUL CABO DE SANTO AGOSTINHO</option>
            <option value="DPMUL - 15ª DELEGACIA DE POLÍCIA DA MULHER - 15ª DEAM OLINDA">DPMUL - 15ª DELEGACIA DE POLÍCIA DA MULHER - 15ª DEAM OLINDA</option>
            <option value="DPMUL - 16ª DELEGACIA DE POLÍCIA DA MULHER - 16ª DEAM PALMARES">DPMUL - 16ª DELEGACIA DE POLÍCIA DA MULHER - 16ª DEAM PALMARES</option>
            <option value="DPMUL - 17ª DELEGACIA DE POLÍCIA DA MULHER - 17ª DEAM ARCOVERDE">DPMUL - 17ª DELEGACIA DE POLÍCIA DA MULHER - 17ª DEAM ARCOVERDE</option>
            <option value="DRACO - DELEGACIA DE CRIMES CONTRA A ORDEM TRIBUTARIA - DECCOT">DRACO - DELEGACIA DE CRIMES CONTRA A ORDEM TRIBUTARIA - DECCOT</option>
            <option value="DRACO - DELEGACIA DE POLICIA DE REPRESSAO AO CRIME CIBERNETICO - DPCRICI">DRACO - DELEGACIA DE POLICIA DE REPRESSAO AO CRIME CIBERNETICO - DPCRICI</option>
            <option value="DRACO - DELEGACIA DE POLICIA INTERESTADUAL E CAPTURAS - POLINTER">DRACO - DELEGACIA DE POLICIA INTERESTADUAL E CAPTURAS - POLINTER</option>
            <option value="DRACO - GRUPO DE OPERACOES ESPECIAIS - GOE">DRACO - GRUPO DE OPERACOES ESPECIAIS - GOE</option>
            <option value="DRACO - 1ª DELEGACIA DE COMBATE A CORRUPÇÃO -1ª DECCOR">DRACO - 1ª DELEGACIA DE COMBATE A CORRUPÇÃO -1ª DECCOR</option>
            <option value="DRACO - 2ª DELEGACIA DE COMBATE A CORRUPÇÃO - 2ª DECCOR ">DRACO - 2ª DELEGACIA DE COMBATE A CORRUPÇÃO - 2ª DECCOR </option>
            <option value="DRACO - 3ª DELEGACIA DE COMBATE A CORRUPÇÃO - 3ª DECCOR ">DRACO - 3ª DELEGACIA DE COMBATE A CORRUPÇÃO - 3ª DECCOR </option>
            <option value="DRACO - 4ª DELEGACIA DE COMBATE A CORRUPÇÃO - 4ª DECCOR ">DRACO - 4ª DELEGACIA DE COMBATE A CORRUPÇÃO - 4ª DECCOR </option>

            <option value="DTI">DTI</option>
            <option value="FORÇA TAREFA DE SEGURANÇA PÚBLICA DE PERNAMBUCO -  FTSP-PE">FORÇA TAREFA DE SEGURANÇA PÚBLICA DE PERNAMBUCO -  FTSP-PE</option>
            <option value="GEPCA - POSTO POLICIAL DA CEASA">GEPCA - POSTO POLICIAL DA CEASA</option>
            <option value="GERÊNCIA DE CONTROLE OPERACIONAL ESPECIALIZADA DA POLICIA CIVIL">GERÊNCIA DE CONTROLE OPERACIONAL ESPECIALIZADA DA POLICIA CIVIL</option>
            <option value="GERENCIA DE INTELIGENCIA">GERENCIA DE INTELIGENCIA</option>
            <option value="NUCLEO DO IPSEP">NUCLEO DO IPSEP</option>
            <option value="POSTO POLICIAL - HOSPITAL DOM MOURA">POSTO POLICIAL - HOSPITAL DOM MOURA</option>
            <option value="POSTO POLICIAL DA CEASA - 13ª CIRC. - DEL. DE MUSTARDINHA">POSTO POLICIAL DA CEASA - 13ª CIRC. - DEL. DE MUSTARDINHA</option>
            <option value="POSTO POLICIAL DA CEASA- 12ª CIRCUNSCRICAO - TEJIPIO">POSTO POLICIAL DA CEASA- 12ª CIRCUNSCRICAO - TEJIPIO</option>
            <option value="POSTO POLICIAL DE BONANCA - 21ª CIRC. - DEL. DE MORENO">POSTO POLICIAL DE BONANCA - 21ª CIRC. - DEL. DE MORENO</option>
            <option value="POSTO POLICIAL DE GAIBU - 40ª - CIRC. - DEL. DO CABO DE STº AGOSTINHO">POSTO POLICIAL DE GAIBU - 40ª - CIRC. - DEL. DO CABO DE STº AGOSTINHO</option>
            <option value="POSTO POLICIAL DO HOSPITAL AGAMENON MAGALHÃES">POSTO POLICIAL DO HOSPITAL AGAMENON MAGALHÃES</option>
            <option value="POSTO POLICIAL DO HOSPITAL AGAMENON MAGALHAES - 5ª CIRC. - DEL. DE CASA AMARELA">POSTO POLICIAL DO HOSPITAL AGAMENON MAGALHAES - 5ª CIRC. - DEL. DE CASA AMARELA</option>
            <option value="POSTO POLICÍAL DO HOSPITAL DA RESTAURACAO - DP4ªCIRC DIM/2ªDESEC  ">POSTO POLICÍAL DO HOSPITAL DA RESTAURACAO - DP4ªCIRC DIM/2ªDESEC  </option>
            <option value="POSTO POLICIAL DO HOSPITAL DOM MALAM - PETROLINA">POSTO POLICIAL DO HOSPITAL DOM MALAM - PETROLINA</option>

            <option value="POSTO POLICIAL DO HOSPITAL GETULIO VARGAS - 6ª CIRC. DEL. DO CORDEIRO">POSTO POLICIAL DO HOSPITAL GETULIO VARGAS - 6ª CIRC. DEL. DO CORDEIRO</option>
        0    <option value="POSTO POLICIAL DO HOSPITAL MIGUEL ARRAES - 28ª CIRC DEL. PAULISTA">POSTO POLICIAL DO HOSPITAL MIGUEL ARRAES - 28ª CIRC DEL. PAULISTA</option>
            <option value="POSTO POLICIAL DO HOSPITAL OTAVIO DE FREITAS - 12ª CIRC. - DEL. DE TEJIPIO">POSTO POLICIAL DO HOSPITAL OTAVIO DE FREITAS - 12ª CIRC. - DEL. DE TEJIPIO</option>
            <option value="POSTO POLICIAL DO HOSPITAL REGIONAL DO AGRESTE - 90ª CIRCUNSCRICAO CARUARU">POSTO POLICIAL DO HOSPITAL REGIONAL DO AGRESTE - 90ª CIRCUNSCRICAO CARUARU</option>
            <option value="POSTO POLICIAL IGNES ANDREAZZA - 11ª CIRC. - DEL. DE AFOGADOS">POSTO POLICIAL IGNES ANDREAZZA - 11ª CIRC. - DEL. DE AFOGADOS</option>
            <option value="POSTOPC/POSTO POLICIAL DE SAO DOMINGOS - 107A. CIRC. (BREJO DA MADRE DE DEUS)">POSTOPC/POSTO POLICIAL DE SAO DOMINGOS - 107A. CIRC. (BREJO DA MADRE DE DEUS)</option>
            <option value="PPHDHC - POSTO POLICIAL HOSPITAL DOM HELDER CAMARA">PPHDHC - POSTO POLICIAL HOSPITAL DOM HELDER CAMARA</option>
            <option value="UNIDADE DE SERVIÇOS GERAIS">UNIDADE DE SERVIÇOS GERAIS</option>
            <option value="UNIDADE INTEGRADA DE SEGURANCA - CURADO">UNIDADE INTEGRADA DE SEGURANCA - CURADO</option>
            <option value="UNIDADE MOVEL">UNIDADE MOVEL</option>
            <option value="11º DEREPOL - DEPARTAMENTO REGIONAL DE POLICIA CIVIL">11º DEREPOL - DEPARTAMENTO REGIONAL DE POLICIA CIVIL</option>
            <option value="12º DEREPOL - DEPARTAMENTO REGIONAL DE POLICIA CIVIL">12º DEREPOL - DEPARTAMENTO REGIONAL DE POLICIA CIVIL</option>
            <option value="19ª DELEGACIA DE POLICIA DE PLANTAO -  JABOATAO">19ª DELEGACIA DE POLICIA DE PLANTAO -  JABOATAO</option>
            <option value="3º DEREPOL - DEPARTAMENTO REGIONAL DE POLICIA CIVIL">3º DEREPOL - DEPARTAMENTO REGIONAL DE POLICIA CIVIL</option>
            <option value="6A. DPMET - DELEGACIA POLICIA METROPOLITANA">6A. DPMET - DELEGACIA POLICIA METROPOLITANA</option>
            <option value="7ª DELEGACIA DE POLICIA DE PLANTAO DA GPCA - 7ªDPPLANGPCA">7ª DELEGACIA DE POLICIA DE PLANTAO DA GPCA - 7ªDPPLANGPCA</option>
            <option value="9º DEREPOL - DEPARTAMENTO REGIONAL DE POLICIA CIVIL">9º DEREPOL - DEPARTAMENTO REGIONAL DE POLICIA CIVIL</option>
        </select>
    </div>

</div>
```



### Defeitos e serviços - container_services

- `<div class="container_services">`: Uma div com a classe "container_services" que envolve os elementos relacionados aos serviços.
- `<div class="reported_defect">`: Uma div com a classe "reported_defect" que contém o rótulo e a área de texto para o defeito informado.
- `<label>Defeito Informado:</label>`: Um rótulo `<label>` que descreve a área de texto do defeito informado.
- `<textarea name="reported_defect" id="reported_defect" cols="30" rows="10" ></textarea>`: Uma área de texto `<textarea>` com o nome "reported_defect", o ID "reported_defect" e 30 colunas e 10 linhas de tamanho.
- `<div class="performed_services">`: Uma div com a classe "performed_services" que contém o rótulo e a área de texto para os serviços executados.
- `<label>Serviços Executados:</label>`: Um rótulo `<label>` que descreve a área de texto dos serviços executados.
- `<textarea name="performed_services" id="performed_services" cols="30" rows="10" ></textarea>`: Uma área de texto `<textarea>` com o nome "performed_services", o ID "performed_services" e 30 colunas e 10 linhas de tamanho.

```html
<div class="container_services">

    <div class="reported_defect">
        <label>Defeito Informado:</label>
        <textarea name="reported_defect" id="reported_defect" cols="30" rows="10" ></textarea>
    </div>
    <div class="performed_services">
        <label>Serviços Executados:</label>
        <textarea name="performed_services" id="performed_services" cols="30" rows="10" ></textarea>
    </div>
</div>
```



### Técnicos e usuário - container_technician_and_user

- `<div class="container_technician_and_user">`: Uma div com a classe "container_technician_and_user" que envolve os elementos relacionados aos técnicos e ao usuário.
- `<div class="sub_title_technician_and_registration">`: Uma div com a classe "sub_title_technician_and_registration" que contém os rótulos para o técnico e a matrícula.
- `<div class="technician">`: Uma div com a classe "technician" que contém os campos de entrada do técnico.
- `<div class="user">`: Uma div com a classe "user" que contém os campos de entrada do usuário.
- `<div class="box_button">`: Uma div com a classe "box_button" que envolve o botão de visualização.

```html
<div class="container_technician_and_user">
    <div class="sub_title_technician_and_registration">

    </div>
    <div class="technician">

    </div>
    <div class="user">

    </div>
    <div class="box_button">

    </div>
</div>
```



### Sub Titulo - sub_title_technician_and_registration

- `<div class="sub_title_technician_and_registration">`: Uma div com a classe "sub_title_technician_and_registration" que contém os rótulos para o técnico e a matrícula.
- `<label id="x">Técnico(s): </label>`: Um rótulo `<label>` que descreve o campo de entrada do técnico.
- `<label>Matrícula: </label>`: Um rótulo `<label>` que descreve o campo de entrada da matrícula.

```html
<div class="sub_title_technician_and_registration">
    <label id="x">Técnico(s): </label>
    <label>Matrícula: </label>
</div>
```



### Técnicos - technician

- `<div class="technician">`: Uma div com a classe "technician" que contém os campos de entrada do técnico.

- `<div class="box_input">`: É uma div com a classe "box_input" que serve como um container para os campos de entrada do técnico.
- `<input type="text" class="technician_input" id="name_technician">`: É um campo de entrada do tipo "text" que permite ao usuário inserir o nome do técnico. Ele possui a classe "technician_input" e o ID "name_technician".
- `<input type="text" class="registration_input" id="registration_technician" placeholder="000.000-0">`: É outro campo de entrada do tipo "text" que permite ao usuário inserir a matrícula do técnico. Ele possui a classe "registration_input" e o ID "registration_technician". Além disso, possui um espaço reservado (placeholder) que exibe o exemplo "000.000-0".

- `<div class="box_list_of_technicians">`: Uma div com a classe "box_list_of_technicians" que envolve a lista de técnicos adicionados.
- `<p id="list_of_technicians">`: Um parágrafo `<p>` com o ID "list_of_technicians" que exibirá a lista de técnicos.
- `<button type="button" class="button" onclick="addTechnicians()">Adicionar</button>`: Um botão `<button>` com a classe "button" que chama a função "addTechnicians()" quando clicado.

```html
<div class="technician">
    <div class="box_input">
        <input type="text" class="technician_input" id="name_technician" >
        <input type="text" class="registration_input" id="registration_technician" placeholder="000.000-0">
    </div>
    <div class="box_list_of_technicians">
        <p id="list_of_technicians"></p>
    </div>
    <button type="button" class="button" onclick="addTechnicians()">Adicionar</button>

</div>
```



### Usuários - user

- `<div class="user">`: Uma div com a classe "user" que contém os campos de entrada do usuário.
- `<div class="box_user_name">`: Uma div com a classe "box_user_name" que envolve o rótulo e o campo de entrada do nome do usuário.
- `<label>Nome do usuário:</label>`: Um rótulo `<label>` que descreve o campo de entrada do nome do usuário.

- `<input type="text" name="user_name" id="user_name">`: Um campo de entrada `<input>` do tipo "text" com o nome "user_name" e o ID "user_name". Recebe o nome do usuário da unidade de atendimento.
- `<div class="box_user_registragion">`: Uma div com a classe "box_user_registragion" que envolve o rótulo e o campo de entrada da matrícula do usuário.
- `<label>Matrícula do usuário:</label>`: Um rótulo `<label>` que descreve o campo de entrada da matrícula do usuário.
- `<input type="text" name="user_registration" id="user_registration" placeholder="000.000-0">`: Um campo de entrada `<input>` do tipo "text" com o nome "user_registration", o ID "user_registration" e um espaço reservado (placeholder) de exemplo. Recebe a matrícula do usuário da unidade de atendimento.

```html
<div class="user">

    <div class="box_user_name">
        <label>Nome do usuário:</label>
        <input type="text" name="user_name" id="user_name">
    </div>
    <div class="box_user_registragion">
        <label>Matrícula do usuário:</label>
        <input type="text" name="user_registration" id="user_registration" placeholder="000.000-0">
    </div>
</div>
```



### Botão Visualizar - box_button

- `<div class="box_button">`: Uma div com a classe "box_button" que envolve o botão de visualização.
- `<button type="button" class="button" onclick="toView()">Visualizar</button>`: Um botão `<button>` com a classe "button" que chama a função "toView()" quando clicado. Ao clicar esse botão, será visualizado o relatório pronto para impressão.

```html
<div class="box_button">
    <button type="button" class="button" onclick="toView()">Visualizar</button>
</div>
```



### Footer

- `<footer class="footer">`: O elemento `<footer>` representa o rodapé da página.
- `<h2 class="footer_title"> Desenvolvido por tthiagocarlosdev </h2>`: Um cabeçalho `<h2>` com a classe "footer_title" que exibe o título "Desenvolvido por tthiagocarlosdev".
- `<ul class="links_social_media">`: Uma lista não ordenada `<ul>` com a classe "links_social_media" que contém links para as redes sociais.
- `<li> <a href="https://github.com/tthiagocarlosdev" target="_blank"> <i class="fa-brands fa-github"></i> </a></li>`: Um item de lista `<li>` que contém um link para o perfil do GitHub, usando o ícone do GitHub.
- As demais tags `<li>` seguem o mesmo padrão, com diferentes links e ícones para as outras redes sociais.

```html
<footer class="footer">
    <h2 class="footer_title"> Desenvolvido por tthiagocarlosdev </h2>
    <ul class="links_social_media">
      <li> <a href="https://github.com/tthiagocarlosdev" target="_blank"> <i class="fa-brands fa-github"></i> </a></li>
      <li> <a href="mailto:tthiagocarlos.dev@gmail.com" target="_blank"> <i class="fa-sharp fa-solid fa-g"></i> </a></li>
      <li> <a href="https://www.youtube.com/channel/UCZN-uQtc4UDQt_tLu-I7Wpw" target="_blank"> <i class="fa-brands fa-youtube"></i> </a></li>
      <li> <a href="https://www.instagram.com/tthiagocarlos.dev/" target="_blank"> <i class="fa-brands fa-instagram"></i>  </a></li>
      <li> <a href="https://www.linkedin.com/in/thiago-carlos-80a480244" target="_blank"> <i class="fa-brands fa-linkedin"></i>  </a></li>
    </ul>
</footer>
```



### Scripts

- `<script src="https://kit.fontawesome.com/bec2f6bc88.js" crossorigin="anonymous"></script>`: Um script que carrega a biblioteca de ícones Font Awesome.
- `<script src="script.js"></script>`: Um script que carrega o arquivo JavaScript "script.js", que contém código personalizado para a página.

```html
<script src="https://kit.fontawesome.com/bec2f6bc88.js" crossorigin="anonymous"></script>
<script src="script.js"></script>
```



### Arquivo index.html completo

Clique [aqui](https://github.com/tthiagocarlosdev/projects_website/blob/main/relatorio_de_servicos_externos/index.html) para ver o arquivo **index.html** completo.



##  Arquivo style.css - estilização da página index.html

## Cores do projeto

```css
:root{
    --black-color: black;
    --white-color: white;
    --hover-color: lightgray;
    --container-color: whitesmoke;
    --blue-buttons-hover: rgb(0, 132, 255);
}
```

Esse código CSS define variáveis personalizadas usando a sintaxe `--nome-da-variavel: valor;` dentro do seletor `:root`. Essas variáveis personalizadas serão usadas posteriormente em outras partes do código CSS, permitindo uma fácil personalização e reutilização de cores em todo o documento.

- `:root` é um seletor especial que representa o elemento raiz (normalmente o elemento `<html>`) em um documento HTML.
- `--black-color: black;` define uma variável chamada `--black-color` com o valor preto.
- `--white-color: white;` define uma variável chamada `--white-color` com o valor branco.
- `--hover-color: lightgray;` define uma variável chamada `--hover-color` com o valor cinza claro.
- `--container-color: whitesmoke;` define uma variável chamada `--container-color` com o valor branco esfumaçado.
- `--blue-buttons-hover: rgb(0, 132, 255);` define uma variável chamada `--blue-buttons-hover` com o valor de um tom de azul.

### Responsividade - @media

```css
@media(max-width:1080px){
	html{
		font-size: 90%;
	}
}

@media(max-width:720px){
	html{
		font-size: 75%;
	}
}

@media(max-width:600px){
	html{
		font-size: 60%;
	}
}

@media(max-width:300px){
	html{
		font-size: 40%;
	}
}
```

`@media` é uma regra de mídia do CSS que permite aplicar estilos diferentes com base nas características e capacidades do dispositivo de exibição. É usado para criar layouts responsivos, adaptando o design e a aparência do conteúdo com base nas propriedades da tela, como largura, altura, densidade de pixels, orientação, entre outros.

A regra `@media` é usada em conjunto com um ou mais seletores de mídia, que especificam as condições em que os estilos devem ser aplicados. As condições são definidas usando consultas de mídia, que consistem em uma ou mais expressões de mídia, como largura máxima, largura mínima, orientação, etc.

Dentro de um bloco `@media`, você pode definir estilos CSS específicos para o contexto especificado pela consulta de mídia. Isso permite que você ajuste a aparência e o layout do seu conteúdo com base nas características do dispositivo e nas necessidades de design responsivo.

Por exemplo, podemos definir estilos diferentes para telas pequenas e grandes, alterando o tamanho da fonte, o layout das colunas, a visibilidade de elementos, entre outros aspectos. Isso permite que o conteúdo seja exibido de forma adequada e otimizada em uma ampla variedade de dispositivos, desde telas de desktop até dispositivos móveis.

Esse código CSS usa as regras `@media` para aplicar estilos diferentes com base na largura da tela:

- `@media (max-width: 1080px)` define uma regra de mídia para telas com uma largura máxima de 1080 pixels.
- `html { font-size: 90%; }` define um estilo para o elemento `<html>` quando a largura da tela é menor ou igual a 1080 pixels. Nesse caso, o tamanho da fonte é definido como 90% do tamanho padrão.

- `@media (max-width: 720px)` define uma regra de mídia para telas com uma largura máxima de 720 pixels.
- `html { font-size: 75%; }` define um estilo para o elemento `<html>` quando a largura da tela é menor ou igual a 720 pixels. Nesse caso, o tamanho da fonte é definido como 75% do tamanho padrão.

- `@media (max-width: 600px)` define uma regra de mídia para telas com uma largura máxima de 600 pixels.
- `html { font-size: 60%; }` define um estilo para o elemento `<html>` quando a largura da tela é menor ou igual a 600 pixels. Nesse caso, o tamanho da fonte é definido como 60% do tamanho padrão.

- `@media (max-width: 300px)` define uma regra de mídia para telas com uma largura máxima de 300 pixels.
- `html { font-size: 40%; }` define um estilo para o elemento `<html>` quando a largura da tela é menor ou igual a 300 pixels. Nesse caso, o tamanho da fonte é definido como 40% do tamanho padrão.

## Configurações gerais

```css
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: Arial, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	font-size: 16px;
}

.container {
    width: 67.5rem;
    border: 2px solid var(--black-color);
    margin: 4rem auto;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
}
```

Essas regras CSS estabelecem um conjunto de estilos básicos para todos os elementos da página e definem o estilo de um contêiner específico com bordas, largura fixa, alinhamento centralizado e uma disposição de coluna para os itens dentro dele.

- A primeira regra `*` seleciona todos os elementos da página e define algumas propriedades comuns para eles.
  - `padding: 0;` remove o preenchimento interno dos elementos.
  - `margin: 0;` remove as margens externas dos elementos.
  - `box-sizing: border-box;` define o modelo de caixa como "border-box", o que significa que o tamanho total do elemento inclui o preenchimento e a borda, em vez de ser adicionado a eles.
  - `font-family: Arial, Helvetica, sans-serif;` define a família de fontes padrão para ser Arial, Helvetica ou uma fonte genérica do tipo sans-serif.
  - `-webkit-font-smoothing: antialiased;` melhora a suavização das fontes em navegadores WebKit (como Chrome e Safari).
  - `-moz-osx-font-smoothing: grayscale;` melhora a suavização das fontes em navegadores Firefox no macOS.
  - `font-size: 16px;` define o tamanho da fonte padrão para 16 pixels.

- Em seguida, temos uma regra para a classe `.container`.
  - `.container` é uma classe usada para estilizar um elemento que representa um contêiner na página.
  - `width: 67.5rem;` define a largura do contêiner como 67.5 rem, uma unidade de medida relativa ao tamanho da fonte raiz.
  - `border: 2px solid var(--black-color);` define uma borda sólida de 2 pixels com a cor definida pela variável `--black-color`.
  - `margin: 4rem auto;` define margens superior e inferior de 4 rem e margens esquerda e direita automáticas, centralizando o contêiner horizontalmente na página.
  - `display: flex;` define o contêiner como um contêiner flexível.
  - `flex-wrap: nowrap;` impede que os itens dentro do contêiner sejam quebrados em várias linhas quando não couberem em uma única linha.
  - `flex-direction: column;` define a direção dos itens dentro do contêiner como uma coluna, empilhando-os verticalmente.


### Estilização do Header

```css
/* header - header - header - header - header - header - header - header - header - header - header - header - header */

.header {
    background-color: var(--hover-color);
    height: 10rem;
    width: 67.25rem;
    order: 1;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--black-color);
}

.containers-images {
    display: flex;
}

.header img {
    height: 10rem;
    width: 15rem;   
}

#bandeira-pernambuco {
    border: 1px solid var(--black-color);
}

.header_title {
    width: 100%;
    text-align: center;
    line-height: 1.5rem;
    padding: 1rem;
}

.header_title h1 {
    font-size: 1.7rem;
    padding: 0.6rem;
}

.header_title h2 {
    font-size: 1.3rem;
    padding: 0.3rem;
}
```

Essas regras CSS estabelecem estilos para o cabeçalho da página, incluindo cor de fundo, altura, largura, alinhamento de itens, bordas, estilos de imagem e estilos de texto para os títulos:

- A primeira seção é um comentário que descreve a seção do código relacionada ao cabeçalho.

- Em seguida, temos uma regra para a classe `.header`, que estiliza o cabeçalho da página.
  - `background-color: var(--hover-color);` define a cor de fundo do cabeçalho como a cor definida pela variável `--hover-color`.
  - `height: 10rem;` define a altura do cabeçalho como 10 rem.
  - `width: 67.25rem;` define a largura do cabeçalho como 67.25 rem.
  - `order: 1;` define a ordem do cabeçalho em relação a outros elementos flexíveis.
  - `display: flex;` define o cabeçalho como um contêiner flexível.
  - `flex-wrap: nowrap;` impede que os itens dentro do cabeçalho sejam quebrados em várias linhas quando não couberem em uma única linha.
  - `justify-content: space-between;` alinha os itens dentro do cabeçalho ao longo do eixo principal, com espaçamento igual entre eles.
  - `align-items: center;` alinha os itens dentro do cabeçalho ao longo do eixo transversal, centralizando-os verticalmente.
  - `border-bottom: 1px solid var(--black-color);` adiciona uma borda inferior de 1 pixel sólida com a cor definida pela variável `--black-color`.

- A regra `.containers-images` estiliza um contêiner flexível que contém as imagens no cabeçalho.
  - `display: flex;` define o contêiner como um contêiner flexível.

- A regra `header img` estiliza as imagens dentro do cabeçalho.
  - `height: 10rem;` define a altura das imagens como 10 rem.
  - `width: 15rem;` define a largura das imagens como 15 rem.

- A regra `#bandeira-pernambuco` estiliza uma imagem específica com o ID `bandeira-pernambuco`.
  - `border: 1px solid var(--black-color);` adiciona uma borda de 1 pixel sólida com a cor definida pela variável `--black-color` à imagem.

- A regra `.header_title` estiliza o título do cabeçalho.
  - `width: 100%;` define a largura do título como 100% do contêiner pai.
  - `text-align: center;` centraliza o texto horizontalmente dentro do título.
  - `line-height: 1.5rem;` define a altura da linha do texto como 1.5 rem.
  - `padding: 1rem;` adiciona preenchimento interno de 1 rem ao redor do título.

- A regra `.header_title h1` estiliza o elemento `h1` dentro do título do cabeçalho.
  - `font-size: 1.7rem;` define o tamanho da fonte do `h1` como 1.7 rem.
  - `padding: 0.6rem;` adiciona preenchimento interno de 0.6 rem ao redor do `h1`.

- A regra `.header_title h2` estiliza o elemento `h2` dentro do título do cabeçalho.
  - `font-size: 1.3rem;` define o tamanho da fonte do `h2` como 1.3 rem.
  - `padding: 0.3rem;` adiciona preenchimento interno de 0.3 rem ao redor do `h2`.

###  Seção attendance_control





## Script.js

### Function dateTime()

```javascript
function dateTime(value) {
  const formatter = new Intl.DateTimeFormat("pt-br", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric"
  });
```

- A função `dateTime` é definida, e recebe um parâmetro chamado `value`.
- É criada uma constante chamada `formatter` que utiliza a classe `Intl.DateTimeFormat` para formatar datas e horas.
- O construtor de `DateTimeFormat` recebe dois parâmetros: o primeiro é a localização "pt-br" para indicar o idioma e país desejados (Português do Brasil), e o segundo é um objeto de opções que especifica o estilo de formatação desejado, incluindo o dia da semana, dia, mês, ano, hora e minuto.

```javascript
  if (value.length === 0) {
    // Código para retornar a data, hora e dia da semana atuais
    const computerDate = new Date();
    return formatter.format(computerDate);
```

- A condição `if (value.length === 0)` verifica se o parâmetro `value` está vazio, ou seja, se não foi fornecido nenhum valor.
- Dentro do bloco `if`, é criada uma constante chamada `computerDate` que representa a data e hora atuais, obtida através do construtor `Date()`.
- A função `format()` do objeto `formatter` é chamada, passando `computerDate` como argumento, para formatar a data e hora atuais de acordo com as opções definidas anteriormente.
- O resultado formatado é retornado pela função `dateTime()`.

```javascript
  } else {
    // Código para retornar a data, hora e dia da semana a partir do valor fornecido
    const dateObject = new Date(value);
    return formatter.format(dateObject);
  }
}
```

- Se o parâmetro `value` não estiver vazio (ou seja, foi fornecido um valor), o bloco `else` é executado.
- É criada uma constante chamada `dateObject` que representa a data e hora com base no valor fornecido no parâmetro `value`. O construtor `Date()` é utilizado para criar o objeto `Date` correspondente.
- A função `format()` do objeto `formatter` é chamada, passando `dateObject` como argumento, para formatar a data e hora fornecidas de acordo com as opções definidas anteriormente.
- O resultado formatado é retornado pela função `dateTime()`.

Dessa forma, a função `dateTime()` retorna a data e hora formatadas corretamente, tanto para o valor atual (se não for fornecido nenhum valor) quanto para um valor específico fornecido como argumento.