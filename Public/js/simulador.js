function simular() {
    span_periodo.innerHTML = "";
    valor_final.innerHTML = "";
    valor_cImpostos.innerHTML = "";

    var valorInicial = parseFloat(input_valor_inicial.value);
    var valorMensal = parseFloat(input_valor_mensal.value);
    var taxaJuros = parseFloat(input_taxa_juros.value);
    var taxaJurosPeriodo = Number(select_juros.value);
    var periodo = Number(input_periodo.value);
    var periodoPeriodo = Number(select_periodo.value);

    var textoPeriodo = "";

    var taxaJurosDecimal = 0;
    var total = 0;
    
    if (taxaJurosPeriodo == 1) {
        taxaJurosDecimal = Math.pow(1 + taxaJuros / 100, 1 / 12) - 1;
    } else {
        taxaJurosDecimal = taxaJuros / 100;
    }
    
    var periodoConta = 0;
    
    if (periodoPeriodo == 0) {
        periodoConta = periodo;
    } else {
        periodoConta = periodo * 12;
    }
    
    
    totalJurosComposto = valorInicial * Math.pow(1 + taxaJurosDecimal, periodoConta);
    total = valorInicial * Math.pow(1 + taxaJurosDecimal, periodoConta) + valorMensal * ((Math.pow(1 + taxaJurosDecimal, periodoConta) - 1) / taxaJurosDecimal);
    var valorInvestido = valorInicial + valorMensal * periodo;
    var taxaImposto = 0;

    if (periodoConta <= 6) {
        taxaImposto = 0.225
    } else if (periodoConta <= 12) {
        taxaImposto = 0.2
    } else if (periodoConta <= 24 ) {
        taxaImposto = 0.175
    } else {
        taxaImposto = 0.15
    }

    var totalCImpostos = total - ((total - valorInvestido) * taxaImposto)



    if (periodoPeriodo == 0) {
      textoPeriodo = "meses";
    } else {
      textoPeriodo = "anos";
    }

    if (
      valorInicial == ""||
      taxaJuros == "" ||
      periodo == ""
    ) {
      alert("Todos os valores devem ser preenchidos");
    } else {
      if (
        (taxaJuros > 2 && taxaJurosPeriodo == 0) ||
        (taxaJuros > 18 && taxaJurosPeriodo == 1)
      ) {
        alert(
          `Me indique esse investimento  e-mail: joao.galhardo@sptech.school`
        );
      }

      div_resultado.style.display = "flex";
      span_periodo.innerHTML += `${periodo}  ${textoPeriodo}`;

      valor_final.innerHTML += `${total.toFixed(2)}`;
      valor_cImpostos.innerHTML += `${totalCImpostos.toFixed(2)}`
    }
  }