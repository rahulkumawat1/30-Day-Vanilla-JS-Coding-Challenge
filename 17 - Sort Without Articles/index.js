const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i,'').trim();
}

const sortedBands = bands.sort((sec,fir) => {
    if(strip(sec) > strip(fir)) return 1;
    else return -1;
});

document.querySelector('#bands').innerHTML = sortedBands.map(band => 
    {return `<li>${band}</li>`}).join('');