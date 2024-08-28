const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Disponibilidade",
        alternativas: [
            {
                texto: "Estou sempre disponível para ajudar quando meu amigo precisa.",
                afirmacao: "Muito bem!. "
            },
            {
                texto: "Não costumo me envolver muito nas questões dos meus amigos.",
                afirmacao: "Melhore."
            }
        ]
    },
    {
        enunciado: "Escuta Ativa",
        alternativas: [
            {
                texto: "Eu escuto atentamente quando meu amigo quer desabafar.",
                afirmacao: "Eita nota 10!."
            },
            {
                texto: "Geralmente não presto muita atenção no que meus amigos dizem.",
                afirmacao: "Péssimo amg."
            }
        ]
    },
    {
        enunciado: "Respeito",
        alternativas: [
            {
                texto: "Sempre respeito as opiniões e decisões dos meus amigos.",
                afirmacao: "Você é um bom amigo."
            },
            {
                texto: "Tenho dificuldade em aceitar opiniões diferentes das minhas.",
                afirmacao: "Você é um amigo chato."
            }
        ]
    },
    
        
];  


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Vamos ver...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
