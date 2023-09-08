import { confetti } from "https://cdn.jsdelivr.net/npm/tsparticles-confetti/+esm";

const duration = 35 * 1000,
  animationEnd = Date.now() + duration,
  defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

function randomInRange(min, max) {
  return Math.random() * (max - min) + min;
}

const run = () => {
  const interval = setInterval(function () {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    const particleCount = 70 * (timeLeft / duration);

    // since particles fall down, start a bit higher than random
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      })
    );
    confetti(
      Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      })
    );
  }, 450);
};
document.getElementById('inputform').addEventListener('submit', function (e) {
  e.preventDefault(); 
  countdown();
  setInterval(countdown,1000);
});
const days1=document.getElementById("days");
const hours1=document.getElementById("hours");
const min1=document.getElementById("min");
const sec1=document.getElementById("second");
const newyear="9 sep 2023";
function countdown(){
  const container = document.getElementById('inputform');
  container.style.display = 'none';
  const evenname=document.getElementById("eventname").value;
  const title1=document.getElementById("title");
  const inputDate = document.getElementById('eventdate').value;
  const enteredDate = new Date(inputDate);
  const currdate=new Date();
  const timeleft=(enteredDate-currdate)/1000;
  const days=Math.floor(timeleft/3600/24);
  const hours=Math.floor((timeleft/3600)%24);
  const min=Math.floor((timeleft/60)%60);
  const sec=Math.floor(timeleft)%60;
  days1.innerHTML=formatTime(days);
  hours1.innerHTML=formatTime(hours);
  min1.innerHTML=formatTime(min);
  sec1.innerHTML=formatTime(sec);
  title1.innerText=`${evenname} countdown`;
  if (
    enteredDate.getFullYear() === currdate.getFullYear() &&
    enteredDate.getMonth() === currdate.getMonth() &&
    enteredDate.getDate() === currdate.getDate()
  ){
    title1.innerText=`Happy ${evenname}`
    run();
  }
}
function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}