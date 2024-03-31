const outher = document.querySelector("#outher");
outher.style.backgroundColor = "darkred";
outher.style.width = "300px";
outher.style.height = "300px";
outher.style.borderRadius = "50%";
outher.style.margin = "7rem 6rem";
outher.style.display = "flex";
outher.style.justifyContent = "center";
outher.style.alignItems = "center";
outher.style.transform = `rotate(180deg)`;

const insider = document.querySelector("#insider");
insider.style.backgroundColor = "white";
insider.style.width = "285px";
insider.style.height = "285px";
insider.style.borderRadius = "50%";
insider.style.position = "relative";

// const dot = document.querySelector("#dot");
// dot.style.backgroundColor = "coral";
// dot.style.width = "20px";
// dot.style.height = "20px";
// dot.style.borderRadius = "50%";
// dot.style.position = "relative";
// dot.style.left = "139px";
// dot.style.top = "119px";

const sayac = document.querySelector("#sayac");
sayac.style.backgroundColor = "coral";
sayac.style.width = "6px";
sayac.style.height = "130px";
sayac.style.borderRadius = "6px";
sayac.style.position = "absolute";
sayac.style.left = "139px";
sayac.style.top = "115px";
sayac.style.transformOrigin = "3px 27px";
sayac.style.zIndex = 400;

const sayacTwo = document.querySelector("#sayacTwo");
sayacTwo.style.backgroundColor = "darkred";
sayacTwo.style.width = "10px";
sayacTwo.style.height = "140px";
sayacTwo.style.borderRadius = "6px";
sayacTwo.style.position = "absolute";
sayacTwo.style.left = "137px";
sayacTwo.style.top = "115px";
sayacTwo.style.transformOrigin = "5px 27px";
sayacTwo.style.zIndex = 200;

const sayacThree = document.querySelector("#sayacThree");
sayacThree.style.backgroundColor = "darkred";
sayacThree.style.width = "14px";
sayacThree.style.height = "120px";
sayacThree.style.borderRadius = "6px";
sayacThree.style.position = "absolute";
sayacThree.style.zIndex = 100;
sayacThree.style.left = "135px";
sayacThree.style.top = "115px";
sayacThree.style.transformOrigin = "7px 27px";

const center = document.querySelector("#center");
center.style.backgroundColor = "coral";
center.style.width = "20px";
center.style.height = "20px";
center.style.position = "relative";
center.style.left = "-7px";
center.style.top = "17px";
center.style.borderRadius = "50%";

let previousSec;
let previousMinute;
let previousHour;

function time(timestamp) {
  const currentDate = new Date();

  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hours = currentDate.getHours();

  if (previousSec !== seconds) {
    sayac.style.transform = `rotate(${seconds * 6}deg)`;
  }

  if (previousMinute !== minutes) {
    sayacTwo.style.transform = `rotate(${minutes * 6}deg)`;
  }

  if (previousHour !== hours) {
    if (hours > 12) {
      let temp = hours - 12;
      sayacThree.style.transform = `rotate(${
        (temp * 360) / 12 + minutes / 2
      }deg)`;
    } else {
      sayacThree.style.transform = `rotate(${
        (hours * 360) / 12 + minutes / 2
      }deg)`;
    }
  }

  previousSec = seconds;
  previousMinute = minutes;
  previousHour = hours;

  requestAnimationFrame(time);
  console.log(hours + ", " + minutes + ", " + seconds);
}
requestAnimationFrame(time);

// time();
