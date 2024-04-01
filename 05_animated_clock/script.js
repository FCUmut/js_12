function styleItem(
  item,
  bColor,
  width,
  height,
  bRadius,
  position,
  display,
  justify,
  align,
  zIndex,
  top,
  left,
  tOrigin,
  margin,
  transform
) {
  return (
    bColor ? (item.style.backgroundColor = bColor) : null,
    width ? (item.style.width = width) : null,
    height ? (item.style.height = height) : null,
    bRadius ? (item.style.borderRadius = bRadius) : null,
    position ? (item.style.position = position) : null,
    display ? (item.style.display = display) : null,
    justify ? (item.style.justifyContent = justify) : null,
    align ? (item.style.alignItems = align) : null,
    zIndex ? (item.style.zIndex = zIndex) : null,
    top ? (item.style.top = top) : null,
    left ? (item.style.left = left) : null,
    tOrigin ? (item.style.transformOrigin = tOrigin) : null,
    margin ? (item.style.margin = margin) : null,
    transform ? (item.style.transform = transform) : null
  );
}

const outher = document.querySelector("#outher");

styleItem(
  outher,
  "darkred",
  "300px",
  "300px",
  "50%",
  false,
  "flex",
  "center",
  "center",
  false,
  false,
  false,
  false,
  "7rem 6rem",
  "rotate(180deg)"
);

const insider = document.querySelector("#insider");

styleItem(
  insider,
  "#f4f4f4",
  "285px",
  "285px",
  "50%",
  "relative",
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false
);

const sayac = document.querySelector("#sayac");

styleItem(
  sayac,
  "coral",
  "6px",
  "130px",
  "6px",
  "absolute",
  false,
  false,
  false,
  400,
  "115px",
  "139px",
  "3px 27px",
  false,
  false
);

const sayacTwo = document.querySelector("#sayacTwo");

styleItem(
  sayacTwo,
  "darkred",
  "10px",
  "150px",
  "6px",
  "absolute",
  false,
  false,
  false,
  200,
  "115px",
  "137px",
  "5px 27px",
  false,
  false
);

const sayacThree = document.querySelector("#sayacThree");

styleItem(
  sayacThree,
  "darkred",
  "14px",
  "115px",
  "14px",
  "absolute",
  false,
  false,
  false,
  100,
  "115px",
  "135px",
  "7px 27px",
  false,
  false
);

const center = document.querySelector("#center");

styleItem(
  center,
  "coral",
  "20px",
  "20px",
  "50%",
  "relative",
  false,
  false,
  false,
  false,
  "17px",
  "-7px",
  false,
  false,
  false
);

function backTicks() {
  let tempArr = [];
  let degOne;
  let degTwo;

  for (let i = 0; i < 12; i++) {
    const div = document.createElement("div");
    degOne = 30 * (i + 1);
    tempArr.push(degOne);
    styleItem(
      div,
      "black",
      "5px",
      "250px",
      "20px",
      "absolute",
      "flex",
      "center",
      "center",
      1,
      false, // top
      false, // left
      false, // tOrigin
      false, // margin
      `rotate(${degOne}deg)` // transform
    );

    const divIns = document.createElement("div");

    styleItem(
      divIns,
      "#f4f4f4",
      "10px",
      "200px",
      false,
      "absolute",
      false,
      false,
      false,
      2,
      false, // top
      false, // left
      false, // tOrigin
      false, // margin
      false // transform
    );

    div.appendChild(divIns);
    outher.appendChild(div);
  }
  console.log(tempArr);
  for (let i = 0; i < 60; i++) {
    // console.log(degTwo);
    const divMini = document.createElement("div");
    degTwo = 6 * (i + 1);
    if (tempArr.includes(degTwo)) {
      continue;
    } else {
      styleItem(
        divMini,
        "black",
        "3px",
        "250px",
        "6px",
        "absolute",
        "flex",
        "center",
        "center",
        1,
        false, // top
        false, // left
        false, // tOrigin
        false, // margin
        `rotate(${degTwo}deg)` // transform
      );

      const divMiniIns = document.createElement("div");

      styleItem(
        divMiniIns,
        "#f4f4f4",
        "10px",
        "235px",
        false,
        "absolute",
        false,
        false,
        false,
        2,
        false, // top
        false, // left
        false, // tOrigin
        false, // margin
        false // transform
      );

      divMini.appendChild(divMiniIns);
      outher.appendChild(divMini);
    }
  }
}

backTicks();

let previousSec;
let previousMinute;
let previousHour;

function time() {
  const currentDate = new Date();

  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hours = currentDate.getHours();

  if (previousSec !== seconds) {
    sayac.style.transform = `rotate(${seconds * 6}deg)`;
  }

  if (previousMinute !== minutes) {
    sayacTwo.style.transform = `rotate(${minutes * 6 + seconds / 10}deg)`;
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
}
requestAnimationFrame(time);
