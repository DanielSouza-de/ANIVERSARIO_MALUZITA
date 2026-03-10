/* =========================
   CONTADOR DE NAMORO
========================= */ const tempoNamoro = document.getElementById("tempo-namoro");
if (tempoNamoro) {
    const dataInicio = new Date("2025-06-21 00:00:00");
    function atualizarContador() {
        const agora = new Date();
        const diferenca = agora - dataInicio;
        const dias = Math.floor(diferenca / 86400000);
        const anos = Math.floor(dias / 365);
        const meses = Math.floor(dias % 365 / 30);
        const diasRestantes = dias % 365 % 30;
        let texto = "";
        if (anos > 0) texto += `${anos} anos `;
        texto += `${meses} meses ${diasRestantes} dias`;
        tempoNamoro.innerHTML = texto;
    }
    atualizarContador();
    setInterval(atualizarContador, 1000);
}
/* =========================
   REVELAR MOMENTOS
========================= */ const momentos = document.querySelectorAll(".momento");
function revelarNoScroll() {
    const alturaTela = window.innerHeight;
    momentos.forEach((momento)=>{
        const posicao = momento.getBoundingClientRect().top;
        if (posicao < alturaTela - 120) momento.classList.add("ativo");
    });
}
if (momentos.length > 0) window.addEventListener("scroll", revelarNoScroll);
/* =========================
   SCROLL PARA HISTORIA
========================= */ function scrollToHistory() {
    const section = document.querySelector(".historia");
    if (section) section.scrollIntoView({
        behavior: "smooth"
    });
}
window.scrollToHistory = scrollToHistory;
/* =========================
   NOTA SECRETA
========================= */ const nota = document.getElementById("nota");
const mensagem = document.getElementById("mensagem-secreta");
if (nota && mensagem) nota.addEventListener("click", ()=>{
    mensagem.innerText = "As fotos guardam mais do que mem\xf3rias... talvez uma delas revele algo.";
});
/* =========================s
   FOTO SECRETA
========================= */ const fotoSecreta = document.querySelector(".foto-secreta");
if (fotoSecreta) fotoSecreta.addEventListener("click", ()=>{
    window.location.href = "segredo.html";
});

//# sourceMappingURL=surpresa.c056aa1b.js.map
