let nivel = 1;
const alvo = document.getElementById("alvo");
const area = document.getElementById("areaJogo");
function esconder() {
    const x = Math.random() * (area.clientWidth - alvo.clientWidth);
    const y = Math.random() * (area.clientHeight - alvo.clientHeight);
    alvo.style.left = x + "px";
    alvo.style.top = y + "px";
}
alvo.onclick = ()=>{
    nivel++;
    if (nivel == 2) {
        document.getElementById("nivel").innerText = "N\xedvel 2 - M\xe9dio";
        alvo.style.width = "50px";
    } else if (nivel == 3) {
        document.getElementById("nivel").innerText = "N\xedvel 3 - Dif\xedcil";
        alvo.style.width = "30px";
    } else if (nivel == 4) {
        document.getElementById("nivel").innerText = "N\xedvel 4 - Hardcore";
        alvo.style.width = "20px";
    } else {
        alert("\uD83C\uDF82 Feliz anivers\xe1rio! Voc\xea encontrou os bolos! Agora vamos para o quiz");
        document.getElementById("minigame").style.display = "none";
        document.getElementById("quiz").style.display = "block";
        mostrarPergunta();
        return;
    }
    esconder();
};
esconder();
/* ======================
        QUIZ
    ====================== */ let perguntaAtual = 0;
let acertos = 0;
const perguntas = [
    {
        pergunta: `Qual foi o lugar do nosso primeiro "encontro"`,
        opcoes: [
            "Cinema",
            "Pra\xe7a",
            "Minha Casa"
        ],
        correta: 2
    },
    {
        pergunta: "Qual comida eu mais gosto?",
        opcoes: [
            "Peixe",
            "Hamb\xfarguer",
            "Lasanha"
        ],
        correta: 0
    },
    {
        pergunta: "Quem disse 'eu te amo' primeiro?",
        opcoes: [
            "Voc\xea",
            "Eu",
            "Os dois"
        ],
        correta: 1
    },
    {
        pergunta: "Qual \xe9 o dia especial de hoje?",
        opcoes: [
            "Natal",
            "Ano Novo",
            "O dia da princesa mais linda"
        ],
        correta: 2
    },
    {
        pergunta: "Quem programou esse site?",
        opcoes: [
            "Um maluco",
            "Um Hacker",
            "Um Nerd",
            "Seu namorado"
        ],
        correta: 3
    },
    {
        pergunta: "Por que ele fez esse site?",
        opcoes: [
            "T\xe9dio",
            "Estudar",
            "Porque queria te fazer feliz \uD83C\uDF82"
        ],
        correta: 2
    },
    {
        pergunta: "Voc\xea acha que ele gosta de voc\xea?",
        opcoes: [
            "talvez",
            "um pouco",
            "sim",
            "\xf3bvio que sim"
        ],
        correta: 3
    }
];
function mostrarPergunta() {
    const perguntaEl = document.getElementById("pergunta");
    const respostasEl = document.getElementById("respostas");
    perguntaEl.innerText = perguntas[perguntaAtual].pergunta;
    respostasEl.innerHTML = "";
    perguntas[perguntaAtual].opcoes.forEach((opcao, index)=>{
        const botao = document.createElement("button");
        botao.innerText = opcao;
        botao.onclick = ()=>verificarResposta(index);
        respostasEl.appendChild(botao);
    });
}
function verificarResposta(resposta) {
    const resultado = document.getElementById("resultado");
    if (resposta === perguntas[perguntaAtual].correta) {
        resultado.innerText = "Acertou \u2764\uFE0F";
        acertos++;
    } else resultado.innerText = "Errou \uD83D\uDE1C";
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) setTimeout(()=>{
        resultado.innerText = "";
        mostrarPergunta();
    }, 1000);
    else {
        document.getElementById("pergunta").style.display = "none";
        document.getElementById("respostas").style.display = "none";
        if (acertos === perguntas.length) {
            resultado.innerText = "Voc\xea acertou tudo \u2764\uFE0F";
            document.getElementById("abrirCarta").style.display = "inline-block";
            chuvaCoracoes();
        } else {
            resultado.innerText = "Hmm... tente novamente \uD83D\uDE1C";
            const botaoRecomecar = document.createElement("button");
            botaoRecomecar.innerText = "Tentar novamente";
            botaoRecomecar.onclick = reiniciarQuiz;
            document.getElementById("quiz").appendChild(botaoRecomecar);
        }
    }
}
function reiniciarQuiz() {
    perguntaAtual = 0;
    acertos = 0;
    document.getElementById("pergunta").style.display = "block";
    document.getElementById("respostas").style.display = "block";
    document.getElementById("resultado").innerText = "";
    mostrarPergunta();
}
/* ======================
        CHUVA DE CORAÇÕES
    ====================== */ function chuvaCoracoes() {
    for(let i = 0; i < 40; i++){
        const coracao = document.createElement("div");
        coracao.innerText = "\uD83D\uDC96";
        coracao.style.position = "fixed";
        coracao.style.left = Math.random() * 100 + "vw";
        coracao.style.top = "-50px";
        coracao.style.fontSize = 20 + Math.random() * 20 + "px";
        coracao.style.animation = `cair ${2 + Math.random() * 3}s linear`;
        document.body.appendChild(coracao);
        setTimeout(()=>{
            coracao.remove();
        }, 5000);
    }
}
/* ======================
        CARTA
    ====================== */ document.getElementById("abrirCarta").onclick = ()=>{
    const carta = document.getElementById("carta");
    carta.style.display = "block";
    carta.innerHTML = "";
    posicao = 0;
    escreverCarta();
};
const textoCarta = "Se voc\xea chegou at\xe9 aqui... \xe9 porque realmente me conhece. Amor, muito obrigado por ter aceitado meu pedido de namoro, desde esse dia eu sou a pessoa mais feliz do mundo... Ter voc\xea \xe9 um sonho realizado, um sonho quase imposs\xedvel, eu nunca pensei que teria uma namorada e muito menos uma t\xe3o perfeitinha e lindinha que d\xe1 vontade de apertar. Eu amo voc\xea amor, eu quero que seja mais e mais feliz comigo, quero ser seu ref\xfagio quando o mundo pressionar, quero ser seu cantinho de paz porque voc\xea merece, sua pimentinha. \u2764\uFE0F";
let posicao = 0;
const velocidade = 50;
function escreverCarta() {
    const carta = document.getElementById("carta");
    if (posicao < textoCarta.length) {
        carta.innerHTML += textoCarta.charAt(posicao);
        posicao++;
        setTimeout(escreverCarta, velocidade);
    }
}

//# sourceMappingURL=secreto.0ae1862d.js.map
