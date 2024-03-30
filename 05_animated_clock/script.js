const outher = document.querySelector("#outher");
outher.style.backgroundColor = "darkred";
outher.style.width = "300px";
outher.style.height = "300px";
outher.style.borderRadius = "50%";
outher.style.margin = "7rem 6rem";
outher.style.display = "flex";
outher.style.justifyContent = "center";
outher.style.alignItems = "center";

const insider = document.querySelector("#insider");
insider.style.backgroundColor = "white";
insider.style.width = "285px";
insider.style.height = "285px";
insider.style.borderRadius = "50%";
insider.style.display = "flex";
insider.style.justifyContent = "center";
insider.style.alignItems = "center";

const dot = document.querySelector("#dot");
dot.style.backgroundColor = "white";
dot.style.width = "20px";
dot.style.height = "20px";
dot.style.borderRadius = "50%";

const sayac = document.querySelector("#sayac");
sayac.style.backgroundColor = "grey";
sayac.style.width = "140px";
sayac.style.height = "6px";
//sayac.style.borderRadius = "6px";
sayac.style.position = "relative";
sayac.style.left = "-12px";
sayac.style.top = "5px";

const center = document.querySelector("#center");
center.style.backgroundColor = "red";
center.style.width = "6px";
center.style.height = "6px";
center.style.position = "relative";
center.style.left = "20px";
center.style.top = "0px";

let count = 0;
let previousSec;

function time(timestamp) {
  const currentDate = new Date();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  //   if (previousSec !== seconds) {
  if (seconds === 0) {
    count = 1;
  }
  count++;
  sayac.style.transformOrigin = "20px 0px";
  sayac.style.transform = `rotate(${count}deg)`;

  // console.log(seconds + count);

  previousSec = seconds;

  requestAnimationFrame(time);
  // console.log(hours + ", " + minutes + ", " + seconds);
}

requestAnimationFrame(time);

// time();
