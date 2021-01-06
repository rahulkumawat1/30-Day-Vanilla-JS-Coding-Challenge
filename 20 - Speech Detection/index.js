window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();


recognition.interimResults = true;
recognition.lang = 'en-US';

let p = document.createElement('p');
const words = document.querySelector('.words');
let br = document.createElement('hr');

words.appendChild(p);

let stop = false;

recognition.addEventListener('result', (event) => {
    // console.log(event.results);
    const transcript = Array.from(event.results)
                        .map(result => result[0])
                        .map(result => result.transcript)
                        .join('');

    console.log(event.results);

    if(transcript === 'stop')
        stop = true;

    p.textContent = transcript;

    if(event.results[0].isFinal){
        words.appendChild(br);
        br = document.createElement('hr');

        p = document.createElement('p');
        words.appendChild(p);
    }
    // console.log(transcript);
});


recognition.addEventListener('end', () => {
    if(!stop)
        recognition.start();
});

recognition.start();