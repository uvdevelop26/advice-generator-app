//se debe generar un nuevo consejo cuando se oprime el botón
const adviceApi = 'https://api.adviceslip.com/advice';
const generateAdvice = document.querySelector('.icon-dice');

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let randomId = 0;


window.addEventListener('load', () => {
    randomId = randomIntFromInterval(1, 220);

    fetch(adviceApi + '/' + randomId)
        .then((response) => response.json())
        .then((advice) => {
            const adviceId = document.querySelector('.advice-nro');
            const adviceText = document.querySelector('.advice');

            adviceId.innerText = 'Advice #' + advice.slip.id
            adviceText.innerText = advice.slip.advice
        })

});

generateAdvice.addEventListener('click', () => {
    randomId = randomIntFromInterval(1, 220);

    fetch(adviceApi + '/' + randomId)
        .then((response) => response.json())
        .then((advice) => {
            const adviceId = document.querySelector('.advice-nro');
            const adviceText = document.querySelector('.advice');

            adviceId.innerText = 'Advice #' + advice.slip.id
            adviceText.innerText = advice.slip.advice
        })

});
