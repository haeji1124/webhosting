const clock = document.querySelector("h2#clock");
clock.classList.add("clock")
// let num=1
function getClock(){
    const date= new Date();
    const hours = String(date.getHours()).padStart(2,'0')
    const min = String(date.getMinutes()).padStart(2,'0')
    const sec = String(date.getSeconds()).padStart(2,'0')
    clock.innerHTML=`${hours}:${min}:${sec}`;
}
getClock();
setInterval(getClock, 1000);
