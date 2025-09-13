const cronometro = document.querySelector('.cronometro');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const continuar = document.querySelector('#continuar');
const zerar = document.querySelector('#zerar');
let horas = 0;
let minutos = 0;
let segundos = 0;
let interval;
let pause = false;

iniciar.addEventListener('click', iniciarTempo)
pausar.addEventListener('click', pausarTempo)
continuar.addEventListener('click', continuarTempo)
zerar.addEventListener('click', zerarTempo)

function iniciarTempo() {
    clearInterval(interval);
    interval = setInterval(() => {
        if (!pause) {
            segundos++;
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
            if (minutos === 60) {
                horas++;
                minutos = 0;
            }

            cronometro.textContent = `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;

        }
    }, 1000);
    iniciar.style.display = 'none';
    pausar.style.display = 'block';
    zerar.style.display = 'block';

}

function pausarTempo() {
    pause = true;
    pausar.style.display = 'none';
    continuar.style.display = 'block';
}

function continuarTempo() {
    pause = false;
    continuar.style.display = 'none';
    pausar.style.display = 'block';
}

function zerarTempo() {
    clearInterval(interval);
    horas = 0;
    minutos = 0;
    segundos = 0;
    cronometro.textContent = '00:00:00'
    pause = false;
    iniciar.style.display = 'block';
    pausar.style.display = 'none';
    continuar.style.display = 'none';
    zerar.style.display = 'none';

}