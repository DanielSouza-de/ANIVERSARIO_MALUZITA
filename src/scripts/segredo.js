let nivel = 1

const alvo = document.getElementById("alvo")
const area = document.getElementById("areaJogo")

function esconder(){

const x = Math.random() * (area.clientWidth - alvo.clientWidth)
const y = Math.random() * (area.clientHeight - alvo.clientHeight)

alvo.style.left = x + "px"
alvo.style.top = y + "px"

}

alvo.onclick = () => {

nivel++

if(nivel == 2){
document.getElementById("nivel").innerText = "Nível 2 - Médio"
alvo.style.width = "50px"
}

else if(nivel == 3){
document.getElementById("nivel").innerText = "Nível 3 - Difícil"
alvo.style.width = "30px"
}

else if(nivel == 4){
document.getElementById("nivel").innerText = "Nível 4 - Hardcore"
alvo.style.width = "20px"
}

else{

alert("🎂 Feliz aniversário! Você encontrou os bolos! Agora vamos para o quiz")

document.getElementById("minigame").style.display = "none"
document.getElementById("quiz").style.display = "block"

mostrarPergunta()

return

}

esconder()

}

esconder()


/* ======================
    QUIZ
====================== */

let perguntaAtual = 0
let acertos = 0

const perguntas = [
{
pergunta: `Qual foi o lugar do nosso primeiro "encontro"`,
opcoes: ["Cinema", "Praça", "Minha Casa"],
correta: 2
},

{
pergunta: "Qual comida eu mais gosto?",
opcoes: ["Peixe", "Hambúrguer", "Lasanha"],
correta: 0
},

{
pergunta: "Quem disse 'eu te amo' primeiro?",
opcoes: ["Você", "Eu", "Os dois"],
correta: 1
},

{
pergunta: "Qual é o dia especial de hoje?",
opcoes: ["Natal", "Ano Novo", "O dia da princesa mais linda"],
correta: 2
},
{
pergunta: "Quem programou esse site?",
opcoes: ["Um maluco", "Um Hacker", "Um Nerd", "Eu"],
correta: 3
},
{
pergunta: "Por que ele fez esse site?",
opcoes: ["Tédio", "Estudar", "Porque queria te fazer feliz 🎂"],
correta: 2
},
{
pergunta: "Você acha que ele gosta de você?",
opcoes: ["talvez", "um pouco", "sim", "óbvio que sim"],
correta: 3
}
]

function mostrarPergunta(){

const perguntaEl = document.getElementById("pergunta")
const respostasEl = document.getElementById("respostas")

perguntaEl.innerText = perguntas[perguntaAtual].pergunta

respostasEl.innerHTML = ""

perguntas[perguntaAtual].opcoes.forEach((opcao, index) => {

const botao = document.createElement("button")
botao.innerText = opcao

botao.onclick = () => verificarResposta(index)

respostasEl.appendChild(botao)

})

}

function verificarResposta(resposta){

const resultado = document.getElementById("resultado")

if(resposta === perguntas[perguntaAtual].correta){
resultado.innerText = "Acertou ❤️"
acertos++
}else{
resultado.innerText = "Errou 😜"
}

perguntaAtual++

if(perguntaAtual < perguntas.length){

setTimeout(() => {
resultado.innerText = ""
mostrarPergunta()
}, 1000)

}else{

document.getElementById("pergunta").style.display = "none"
document.getElementById("respostas").style.display = "none"

if(acertos === perguntas.length){

resultado.innerText = "Você acertou tudo ❤️"

document.getElementById("abrirCarta").style.display = "inline-block"

chuvaCoracoes()

}else{

resultado.innerText = "Hmm... tente novamente 😜"

const botaoRecomecar = document.createElement("button")
botaoRecomecar.innerText = "Tentar novamente"

botaoRecomecar.onclick = reiniciarQuiz

document.getElementById("quiz").appendChild(botaoRecomecar)

}

}

}

function reiniciarQuiz(){

perguntaAtual = 0
acertos = 0

document.getElementById("pergunta").style.display = "block"
document.getElementById("respostas").style.display = "block"

document.getElementById("resultado").innerText = ""

mostrarPergunta()

}


/* ======================
    CHUVA DE CORAÇÕES
====================== */

function chuvaCoracoes(){

for(let i = 0; i < 40; i++){

const coracao = document.createElement("div")

coracao.innerText = "💖"

coracao.style.position = "fixed"
coracao.style.left = Math.random() * 100 + "vw"
coracao.style.top = "-50px"
coracao.style.fontSize = (20 + Math.random() * 20) + "px"

coracao.style.animation = `cair ${2 + Math.random() * 3}s linear`

document.body.appendChild(coracao)

setTimeout(() => {
coracao.remove()
},5000)

}

}


/* ======================
    CARTA
====================== */

document.getElementById("abrirCarta").onclick = () => {

const carta = document.getElementById("carta")

carta.style.display = "block"
carta.innerHTML = ""

posicao = 0

escreverCarta()

}

const textoCarta = "Se você chegou até aqui... é porque realmente me conhece. Eu só queria dizer que gosto muito de você ❤️"

let posicao = 0
const velocidade = 50

function escreverCarta(){

const carta = document.getElementById("carta")

if(posicao < textoCarta.length){

carta.innerHTML += textoCarta.charAt(posicao)

posicao++

setTimeout(escreverCarta, velocidade)

}

}