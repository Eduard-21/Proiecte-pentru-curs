const button = document.getElementById ('button');
const textBox = document.getElementById ('speech');
function renderJoke (joke) {
    textBox.textContent = joke
}

async function getJoke () {
    const url = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky"
    try {
        const response = await fetch (url)
        const data = await response.json()

        if (data.setup) {
            joke = `${data.setup} ... ${data.delivery}`
        } else {
            joke = data.joke
        }

        } catch (e) {
        console.log (e)
    }
    renderJoke(joke)
   // tellMeAJoke(joke)
}

function tellMeAJoke () {
    VoiceRSS.speech({
        key: '5ff4b1b6ab8143f488a977bc3a2f2a9c',
        src: joke,
        hl: 'en-us',
        v: 'Linda',
        r: 0, 
        c: 'mp3',
        f: '44khz_16bit_stereo',
        ssml: false
    });
}

button.addEventListener('click', getJoke);