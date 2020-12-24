const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const flscreen = player.querySelector('.fullscreen');

function playVideo(){
    const method = (video.paused)? 'play':'pause';
    video[method]();
}

function ButtonChange(){
    const icon = video.paused ? '►' : '❚❚';
    toggle.textContent = icon;
}

function skip(){
    // console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    video.currentTime = (e.offsetX/progress.offsetWidth)*video.duration;
}

video.addEventListener('click',playVideo);
video.addEventListener('play',ButtonChange);
video.addEventListener('pause',ButtonChange);
video.addEventListener('timeupdate',handleProgress);

toggle.addEventListener("click",playVideo);
skipButtons.forEach(skipButton => skipButton.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('click',handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove',handleRangeUpdate));

let mousedown = false;

progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e) => 
    {if(mousedown)
        scrub(e);}
);
progress.addEventListener('mousedown',() => mousedown = true);
progress.addEventListener('mouseup',() => mousedown = false);

flscreen.addEventListener('click',() => {
    if(video.requestFullscreen)
        video.requestFullscreen();
});