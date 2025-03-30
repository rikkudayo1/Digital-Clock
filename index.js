const clockText = document.getElementById("text");

setInterval(setTime, 1000);

function setTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    
    //check if any units is less than 10, so we add 0 infront of it
    //ex. 12:01:01
    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    clockText.innerText = hour + ":" + min + ":" + sec;
}

setTime();