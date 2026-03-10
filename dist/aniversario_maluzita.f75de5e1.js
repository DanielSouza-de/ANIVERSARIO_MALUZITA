const contador = document.getElementById("contador");
if (contador) {
    const dataDoEvento = new Date("Mar 11, 2026 00:00:00").getTime();
    setInterval(()=>{
        const agora = new Date().getTime();
        const distancia = dataDoEvento - agora;
        const dias = Math.floor(distancia / 86400000);
        const horas = Math.floor(distancia % 86400000 / 3600000);
        const minutos = Math.floor(distancia % 3600000 / 60000);
        const segundos = Math.floor(distancia % 60000 / 1000);
        contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
        if (distancia <= 0) {
            document.body.style.transition = "opacity 1s";
            document.body.style.opacity = "0";
            setTimeout(()=>{
                window.location.href = "surpresa.html";
            }, 1000);
        }
    }, 1000);
}

//# sourceMappingURL=aniversario_maluzita.f75de5e1.js.map
