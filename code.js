//in 11 days
// 1000 milliseconds = 1 second 

let countDownDate = new Date("Jul 2, 2024 2:30:59 ").getTime()
//console.log(countDownDate);

let counter = setInterval( () => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days ;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes ;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds ;

    if (dateDiff < 0){
        clearInterval(counter);
    }
}, 1000);