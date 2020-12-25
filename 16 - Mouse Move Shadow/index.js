const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 50;

function shadow(e){
    const width = this.offsetWidth;
    const height = this.offsetHeight;

    let x,y;
    x = e.offsetX;
    y = e.offsetY;

    // console.log(x,y);

    if(e.target !== this){
        x += e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    const xWalk = (x/width)*walk - walk/2;      //-walk/2 to walk/2
    const yWalk = (y/height)*walk - walk/2;

    text.style.textShadow = `
        ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0,0,0,0.4)
    `;

    // text.style.textShadow = `
    //   ${xWalk}px ${yWalk}px 0 rgba(255,0,255,0.7),
    //   ${xWalk * -1}px ${yWalk}px 0 rgba(0,255,255,0.7),
    //   ${yWalk}px ${xWalk * -1}px 0 rgba(0,255,0,0.7),
    //   ${yWalk * -1}px ${xWalk}px 0 rgba(0,0,255,0.7)
    // `;

}

hero.addEventListener('mousemove',shadow);