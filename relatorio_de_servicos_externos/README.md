## Function dateTime()

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