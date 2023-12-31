
const listaPeguntaRespostas = [
    {
        pergunta: "O que representa o índice de preços ao consumidor (IPC) em uma economia?", 
        
        opcoes: [
        {texto:"Taxa de juros de referência", resultado: false},
        {texto:"Variação na quantidade de dinheiro em circulação", resultado: false},
        {texto:"Variação nos preços dos bens e serviços consumidos", resultado:true},
    ]
          
},
{
    pergunta: "Em termos macroeconômicos, o que é a política fiscal?",
    
    opcoes: [
       { texto:"Controle da oferta monetária pelo banco central", resultado:false}, 
       {texto:"Regulação dos gastos e impostos pelo governo", resultado:true}, 
       {texto:"Regulamentar o comércio internacional", resultado:false }
    ]
    
},
{
    pergunta: "Qual é o papel do Banco Central em uma economia?",
    opcoes: [
        {texto:"Gerenciar o orçamento do governo", resultado: false},
        {texto:"Controlar a oferta de dinheiro e a política monetária", resultado: true},
        {texto:"Ajustar a taxa de câmbio para impulsionar as exportações",resultado:false}
    ],
    
},
{
    pergunta: "Como um aumento na oferta de um bem afeta o mercado?",
    opcoes: [
        {texto: "O preço e a quantidade vendida aumentam", resultado: false},
        {texto: "O preço aumenta e a quantidade vendida diminui", resultado: false},
        {texto: "O preço diminui e a quantidade vendida aumenta", resultado: true}
    ]
},
{
    pergunta: "O que acontece no mercado quando há uma diminuição na demanda por um produto?",
    opcoes: [
    {texto: "O preço e a quantidade vendida aumentam", resultado: false},
    {texto: "O preço aumenta e a quantidade vendida diminui", resultado: true},
    {texto: "O preço diminui e a quantidade vendida aumenta", resultado: false}
    ]
    },
{
    pergunta: "O que caracteriza um bem inferior em termos econômicos?",
    opcoes: [
        {texto: "Um bem cuja demanda diminui com o aumento da renda do consumidor", resultado: true},
        {texto: "Um bem cuja demanda aumenta com o aumento da renda do consumidor", resultado: false},
        {texto: "Um bem cujo preço é inferior aos outros bens no mercado", resultado: false}
    ]
},
{
    pergunta: "Como a inflação impacta o poder de compra da moeda?",
    opcoes: [
        {texto: "Aumenta o poder de compra, pois os preços ficam mais baixos", resultado: false},
        {texto: "Diminui o poder de compra, pois os preços aumentam", resultado: true},
        {texto: "Não tem efeito sobre o poder de compra", resultado: false}
    ]
},
{
    pergunta: "Quais são os efeitos de uma política monetária expansionista na economia?",
    opcoes: [
        {texto: "Diminui a oferta de dinheiro para conter a inflação", resultado: false},
        {texto: "Aumenta a oferta de dinheiro para estimular o investimento e o consumo", resultado: true},
        {texto: "Aumenta os impostos para reduzir o déficit orçamentário", resultado: false}
    ]
},
{
    pergunta: "Qual é o impacto de um déficit orçamentário na economia?",
    opcoes: [
        {texto: "Estimula o crescimento econômico", resultado: false},
        {texto: "Reduz a dívida pública", resultado: false},
        {texto: "Aumenta a necessidade de financiamento, podendo gerar pressão inflacionária", resultado: true}
    ]
} ,
{
    pergunta: "Em termos macroeconômicos, o que é a política fiscal?",
    opcoes: [
        {texto: "Autoridades monetárias sobre a quantidade de moeda em circulação", resultado: false},
        {texto: "A política fiscal abrange as decisões do governo relacionadas a gastos, impostos e endividamento para estabilizar a economia.", resultado: true},
        {texto: " Orientações ao dispor do Estado destinadas a equilibrar o funcionamento da economia através de alterações das taxas de câmbio", resultado: false}
    ]
},
{
    pergunta: "O que caracteriza a economia circular?",
    opcoes: [
        {texto: "Ênfase no crescimento econômico ilimitado", resultado: false},
        {texto: "Descarte de resíduos sem preocupação ambiental", resultado: false},
        {texto: "Minimização do desperdício por meio da reciclagem e reutilização", resultado: true}
    ]
},
{
    pergunta: "Qual é o papel das agências de classificação de crédito no sistema financeiro?",
    opcoes: [
        {texto: "Regulamentar as transações bancárias", resultado: false},
        {texto: "Avaliar o risco de crédito de empresas e governos", resultado: true},
        {texto: "Determinar a política fiscal do governo", resultado: false}
    ]
},
{
    pergunta: "O que caracteriza uma recessão econômica?",
    opcoes: [
        {texto: "Crescimento econômico sustentável", resultado: false},
        {texto: "Período de contração na atividade econômica", resultado: true},
        {texto: "Aumento constante no nível de emprego", resultado: false}
    ]
},
{
    pergunta: "Como a taxa de juros impacta o consumo e investimento na economia?",
    opcoes: [
        {texto: "Aumenta o consumo e reduz os investimentos", resultado: false},
        {texto: "Reduz o consumo e estimula os investimentos", resultado: false},
        {texto: "Influencia tanto o consumo quanto os investimentos", resultado: true}
    ]
},
{
    pergunta: "Qual é o objetivo principal da política fiscal expansionista?",
    opcoes: [
        {texto: "Estimular a demanda agregada", resultado: true},
        {texto: "Reduzir a inflação", resultado: false},
        {texto: "Diminuir o déficit público", resultado: false}
    ]
}

]

var currentQuestionIndex = 0;
var score = 0;

var currentQuestionIndex = 0;
var score = 0;

function showQuestion() {
    const questionElement = document.getElementById('perguntas');
    const btnAnswer = document.getElementById('opcoes');

    const currentQuestion = listaPeguntaRespostas[currentQuestionIndex];
    questionElement.innerText = currentQuestion.pergunta;
    btnAnswer.innerHTML = '';

    currentQuestion.opcoes.forEach((opcao, index) =>{
        const button = document.createElement('button');
        button.innerText = opcao.texto;
        button.onclick = () => selecionarResposta(index);
        btnAnswer.appendChild(button);
    });
}

function selecionarResposta(index) {
    const currentQuestion = listaPeguntaRespostas[currentQuestionIndex];
    const conteudoProva = document.getElementById('conteudoProva');
    const resultado = document.getElementById('resultado');

    

    if (currentQuestion.opcoes[index].resultado) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < listaPeguntaRespostas.length) {
        showQuestion();
    } else {
        conteudoProva.style.display = 'none'
        resultado.style.display = 'flex'

        resultado.scrollIntoView({behavior: 'smooth'})

        descricaoResultado.innerHTML = `Voce acertou um total de ${score} questões <br>`
        if (score >= 10) {
            descricaoResultado.innerHTML += `Parabéns, voce foi aprovado, aqui esta o seu certificado <br>`

           certificado.innerHTML=`<a target="_blank" class="ancora-certificado" href="../imagens/Certificado.pdf">Certificado</a>`

            inserirCertificado();
        } else {
            descricaoResultado.innerHTML += "Infelizmente, você não foi aprovado, que tal estudar mais um pouco e tentar novamente mais tarde?"
        }
    }
};

function inserirCertificado() {
    
    console.log("Cetificado adicionado")

  fetch(`/cursos/inserirCertificado/${sessionStorage.ID_USUARIO}/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    
  })
    .then(function (resposta) {
      console.log("resposta: ", resposta);

      if (resposta.ok) {
        
      } else {
        throw "Houve um erro ao tentar inserir a meta!";
      }
    })
    .catch(function (resposta) {
      console.log(`#ERRO: ${resposta}`);
    });

  return false;
}


showQuestion();
