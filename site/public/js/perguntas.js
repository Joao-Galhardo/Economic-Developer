
const listaPeguntaRespostas = [
    {
        pergunta: "O que representa o índice de preços ao consumidor (IPC) em uma economia?", 
        
        opcoes: ["Taxa de juros de referência","Variação na quantidade de dinheiro em circulação","Variação nos preços dos bens e serviços consumidos"],
        resposta: "Variação nos preços dos bens e serviços consumidos"
  
},
{
    pergunta: "Em termos macroeconômicos, o que é a política fiscal?",
    
    opcoes: ["Controle da oferta monetária pelo banco central", "Regulação dos gastos e impostos pelo governo", "Regulamentar o comércio internacional" ],
    
    resposta: "Regulação dos gastos e impostos pelo governo"

},
{
    pergunta: "Qual é o papel do Banco Central em uma economia?",
    opcoes: [
        "Gerenciar o orçamento do governo",
        "Controlar a oferta de dinheiro e a política monetária",
        "Ajustar a taxa de câmbio para impulsionar as exportações"
    ],
    resposta: "Controlar a oferta de dinheiro e a política monetária"
},
{
    pergunta: "Como um aumento na oferta de um bem afeta o mercado?",
    opcoes: [
        "O preço e a quantidade vendida aumentam",
        "O preço aumenta e a quantidade vendida diminui",
        "O preço diminui e a quantidade vendida aumenta"
    ],
    resposta: "O preço diminui e a quantidade vendida aumenta"
},
{
    pergunta: " Como um aumento na oferta de um bem afeta o mercado?", 
        opcoes: [
            "O preço e a quantidade vendida aumentam",
            " O preço aumenta e a quantidade vendida diminui",
            " O preço diminui e a quantidade vendida aumenta"

        ],
    resposta: "O preço diminui e a quantidade vendida aumenta"

},
{
    pergunta: "O que é um bem inferior em termos econômicos?",
    opcoes: [
        "Um bem cuja demanda diminui com o aumento da renda do consumidor",
        "Um bem cuja demanda aumenta com o aumento da renda do consumidor",
        "Um bem cujo preço é inferior aos outros bens no mercado"
    ],
    resposta: "Um bem cuja demanda diminui com o aumento da renda do consumidor"
},
{
    pergunta: "Qual é o principal instrumento utilizado pelo banco central para implementar a política monetária?",
    opcoes: [
        "Impostos sobre o consumo",
        "Taxa de juros",
        "Gastos do governo"
    ],
    resposta: "Taxa de juros"
},
{
    pergunta: "Como uma política monetária expansionista afeta a economia?",
    opcoes: [
        "Diminui a oferta de dinheiro para conter a inflação",
        "Aumenta a oferta de dinheiro para estimular o investimento e o consumo",
        "Aumenta os impostos para reduzir o déficit orçamentário"
    ],
    resposta: "Aumenta a oferta de dinheiro para estimular o investimento e o consumo"
},
{
    pergunta: "Qual é o papel de uma instituição financeira no sistema financeiro?",
    opcoes: [
        "Fiscalizar o mercado de ações",
        "Intermediar transações financeiras e fornecer serviços bancários",
        "Regular a política monetária do país"
    ],
    resposta: "Intermediar transações financeiras e fornecer serviços bancários"
},
{
    pergunta: "Em termos macroeconômicos, o que é a política fiscal?",
    opcoes: [
        "Mercado onde são negociados bens de consumo",
        "Mercado onde são negociados títulos e valores mobiliários de longo prazo",
        "Mercado onde são realizadas transações de câmbio"
    ],
    resposta: "Mercado onde são negociados títulos e valores mobiliários de longo prazo"
},
{
    pergunta: "O que caracteriza a economia circular?",
    opcoes: [
        "Ênfase no crescimento econômico ilimitado",
        "Descarte de resíduos sem preocupação ambiental",
        "Minimização do desperdício por meio da reciclagem e reutilização"
    ],
    resposta: "Minimização do desperdício por meio da reciclagem e reutilização"
},


]


function aparecerQuestao() {
    const questaoAtual = listaPeguntaRespostas[questaoAtualIndex];

    // Seleciona os elementos HTML
    const perguntasElement = document.getElementById('perguntas');
    const opcoesContainer = document.getElementById('opcoes');

    // Atualiza o conteúdo dos elementos HTML
    perguntasElement.innerText = questaoAtual.pergunta;
    opcoesContainer.innerHTML = '';

    // Cria botões para cada opção de resposta
    questaoAtual.respostas.forEach((resposta, index) => {
        const button = document.createElement('button');
        button.innerText = resposta.opcao;
        button.onclick = () => verificarResposta(resposta.opcao);
        opcoesContainer.appendChild(button);
    });
}


function verificarResposta(opcaoSelecionada) {
    const questaoAtual = listaPeguntaRespostas[questaoAtualIndex];

    
    alert(opcaoSelecionada === questaoAtual.resposta ? 'Resposta correta!' : 'Resposta incorreta. A resposta correta é: ' + questaoAtual.resposta);

    
    questaoAtualIndex++;

  
    if (questaoAtualIndex < listaPeguntaRespostas.length) {
        aparecerQuestao();
    } else {
        alert('Quiz concluído! Parabéns!');
    }
}


aparecerQuestao();