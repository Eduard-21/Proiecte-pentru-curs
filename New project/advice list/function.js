const adviceElement = document.getElementById('advice');
const adviceNumber = document.getElementById('number');
const button = document.getElementById('button');

function adjustFontSize() {
     
}

function renderAdcive(advice) {
    adviceElement.textContent = advice
}

async function getAdvice() {
    const url = `https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`; // timestamp-ul este folosit pentru a nu permite cache-ul si a nu repeta aceiasi valoare
    const adNumb = Math.floor(Math.random() * 1000) + 1;
    let advice = 'Not downloaded advice';
    adviceNumber.textContent = `Advice # ${adNumb}`;
    try {
        const response = await fetch(url, { cache: "no-store" }); // nu permite cache-ul, adica nu repeta aceiasi valoare
        const data = await response.json()
        advice = data.slip.advice;
    } catch (e) {
        console.log(e)
    }
    renderAdcive(advice)
}

button.addEventListener('click', getAdvice);