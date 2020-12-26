const times = Array.from(document.querySelectorAll('[data-time]'));

const seconds = times
                    .map(time => time.dataset.time)
                    .map(time => {
                        const [min,sec] = time.split(':').map(parseFloat);
                        return (min*60)+sec;
                    })
                    .reduce((total, time) => total + time, 0);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft/3600);
secondsLeft = secondsLeft%3600;

const mins = Math.floor(secondsLeft/60);
secondsLeft = secondsLeft%60;
                    
console.log(hours, mins, secondsLeft);