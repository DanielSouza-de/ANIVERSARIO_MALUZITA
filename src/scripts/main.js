const contador = document.getElementById("contador");

if (contador) {
  const dataDoEvento = new Date("Mar 11, 2026 00:10:00").getTime();

  setInterval(() => {
    const agora = new Date().getTime();
    const distancia = dataDoEvento - agora;

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor(
      (distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    contador.innerHTML = `${dias}d ${horas}h ${minutos}m ${segundos}s`;

    if (distancia <= 0) {
      document.body.style.transition = "opacity 1s";
      document.body.style.opacity = "0";

      setTimeout(() => {
        window.location.href = "surpresa.html";
      }, 1000);
    }
  }, 1000);
}
