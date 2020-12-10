var secHand = document.querySelector(".sec-hand");
var minHand = document.querySelector(".min-hand");
var hourHand = document.querySelector(".hour-hand");

function setTime(){

    // alert("hello");
    var now = new Date();

    var sec = now.getSeconds();
    var min = now.getMinutes();
    var hour = now.getHours();

    var secDegree = ((sec / 60) * 360 + 90);
    var minDegree = ((min / 60) * 360 + 90);
    var hourDegree = ((hour / 60) * 360 + 90);

    secHand.style.transform = "rotate("+ secDegree +"deg)";
    minHand.style.transform = "rotate("+ minDegree +"deg)";
    hourHand.style.transform = "rotate("+ hourDegree +"deg)";
}

setInterval(setTime,1000);

// setTime();