const imags = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

function showimg(){
    imags.forEach(img => {
        const slideInAt = window.scrollY + window.innerHeight - img.height/2;
        const imgBottom = img.offsetTop + img.height;

        const isHalfShownfromBottom = slideInAt > img.offsetTop;
        const isNotscrolled = window.scrollY < imgBottom;

        if(isHalfShownfromBottom && isNotscrolled){
            img.classList.add('active');
        }
        else{
            img.classList.remove('active');
        }
    });
}

window.addEventListener('scroll',debounce(showimg));