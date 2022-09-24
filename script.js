const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const min = document.getElementById("minutos");
const segundos = document.getElementById('segundos');

const anoNovo = '1 Jan 2023';

function countdown() {
    const anoNovoData = new Date(anoNovo);
    const dataAtual = new Date()

    const segundosTotais = ( anoNovoData - dataAtual) / 1000;

    const days = Math.floor(segundosTotais / 3600 / 24);
    const hours = Math.floor(segundosTotais / 3600) % 24;
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const seconds = Math.floor(segundosTotais) % 60;

    dias.innerHTML = days ;
    horas.innerHTML = hours;
    min.innerHTML = minutos;
    segundos.innerHTML = seconds;
}

countdown()

setInterval(countdown, 1000)




