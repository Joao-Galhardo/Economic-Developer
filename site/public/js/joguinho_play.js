const questions = [
    {
        question: 'O que significa a sigla PIB?',
        opcoes: [
            { texto: 'Preço Interno Barato', resultado: false },
            { texto: 'Produto Interno Bruto', resultado: true },
            { texto: 'Preço Interno Bruto', resultado: false }
        ]
    },
    {
        question: 'Qual é um dos principais objetivos da economia circular?',
        opcoes: [
            { texto: 'Maximizar a produção de resíduos para estimular a reciclagem.', resultado: false },
            { texto: 'Promover o descarte rápido e eficiente de produtos obsoletos.', resultado: false },
            { texto: 'Minimizar o desperdício, promover a reutilização e a reciclagem de recursos.', resultado: true }
        ]
    },
    {
        question: 'Qual é o papel principal do Banco Central em um sistema financeiro?',
        opcoes: [
            { texto: 'Facilitar a abertura de contas bancárias para a população', resultado: false },
            { texto: 'Regular a política fiscal do governo.', resultado: false },
            { texto: 'Controlar a política monetária e garantir a estabilidade financeira.', resultado: true }
        ]
    }
];

var currentQuestionIndex = 0;
var score = 0;

function showQuestion() {
    const questionElement = document.getElementById('pergunta');
    const btnAnswer = document.getElementById('btn-answer');
    const currentQuestion = questions[currentQuestionIndex];

    questionElement.innerText = currentQuestion.question;
    btnAnswer.innerHTML = '';

    currentQuestion.opcoes.forEach((opcao, index) => {
        const button = document.createElement('button');
        button.innerText = opcao.texto;
        button.classList.add('btn');
        button.onclick = () => selecionarResposta(index);
        btnAnswer.appendChild(button);
    });
}

function selecionarResposta(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const selectedAnswer = currentQuestion.opcoes[index];

    if (selectedAnswer.resultado) {
        alert('Resposta correta!');
        score++
    } else {
        alert('Resposta incorreta. A resposta correta é: ' + currentQuestion.opcoes.find(opcao => opcao.resultado).texto);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Quiz concluído! Parabéns!' + score);
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestionIndex = 0;
    showQuestion();
}





var pontuacao = 0;



