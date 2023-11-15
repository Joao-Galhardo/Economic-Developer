var resultado;

//  Trecho que faz a requisição da API 

$.ajax({
  type: "GET",
  dataType: "JSON",
  url: "https://economia.awesomeapi.com.br/json/all",
  success: function (data) {
    resultado = data
  },
  error: function (data) {
    alert('Erro! O site não conseguiu carregar os valores atuais da cotação. Tente novamente mais tarde. :(');
  }
});

//

// Obtem o valor da moeda através do querySelector utilizando o #id e faz a verificação se os dois parametros foram escrito
// Se a taxa de câmbio é válida, realiza o cálculo da conversão para reais, formata os valores e exibe o resultado no elemento com o id "saida".
// Chama a função getHorarioAtualizacao para exibir a data e hora da última atualização das taxas.

function converter() {
  var numeroDigitado = document.querySelector("#entrada").value;
  var selecionado = document.querySelector("#moedas").value;

  if (isNaN(numeroDigitado) || numeroDigitado <= 0 || selecionado === "NULL") {
    alert("Digite um valor válido e escolha uma moeda!");
    return;
  }

  var valorMoeda = resultado[selecionado]["bid"];

  if (!isNaN(valorMoeda)) {
    var calculo = numeroDigitado * valorMoeda;
    var simboloMoeda = resultado[selecionado]["code"]; 

    numeroDigitado = numeroDigitado.toLocaleString('en-us', { style: 'currency', currency: selecionado });
    calculo = calculo.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

    var saida = document.querySelector("#saida");
    
    saida.innerHTML = `Resultado: ${numeroDigitado} (${simboloMoeda}) = ${calculo}`;

    getHorarioAtualizacao(selecionado);
  } else {
    alert("Erro na conversão. Verifique se o valor e a moeda selecionada estão corretos.");
  }
}

function getHorarioAtualizacao(codigoMoeda) {
  var data = resultado[codigoMoeda]["create_date"];
  var dia = data.substring(8, 10);
  var mes = data.substring(5, 7);
  var ano = data.substring(0, 4);
  var hora = data.substring(11, 16);
  var dataFormatada = `${dia}/${mes}/${ano} às ${hora}`;
  var atualizacao = document.querySelector("#atualizacao");
  atualizacao.innerHTML = 'Cotação atualizada em ' + dataFormatada;
}''