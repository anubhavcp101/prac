/* var d = new Date();
console.log(d); */

function absHrAngle(hrs) {
  let angle;
  if (hrs === 12) {
    angle = 0;
    return angle;
  }
  angle = hrs * 30;
  return angle;
}
function getHrAngle(hrs) {
  let angle;
  angle = absHrAngle(hrs) - 90;
  return angle;
}
function absMinAngle(mins) {
  let angle;
  if (mins === 60) {
    angle = 0;
    return angle;
  }
  angle = mins * 6;
  return angle;
}
function getMinAngle(mins) {
  let angle;
  angle = absMinAngle(mins) - 90;
  return angle;
}
function getRelativeMinAngle(hrs, mins) {
  return getMinAngle(mins) - getHrAngle(hrs);
}
function absSecAngle(sec) {
  let angle;
  if (sec === 60) {
    angle = 0;
    return angle;
  }
  angle = sec * 6;
  return angle;
}
function getSecAngle(sec) {
  let angle;
  angle = absSecAngle(sec) - 90;
  return angle;
}
function getRelativeSecAngle(mins, sec) {
  return getSecAngle(sec) - getMinAngle(mins);
}

function startMoving(hrs, mins, sec) {
  let hrHand = document.querySelector(".hour-hand");
  hrHand.style.transform = "rotate(" + getHrAngle(hrs) + "deg)";
  let minHand = document.querySelector(".min-hand");
  minHand.style.transform = "rotate(" + getRelativeMinAngle(hrs, mins) + "deg)";
  let secHand = document.querySelector(".sec-hand");
  secHand.style.transform = "rotate(" + getRelativeSecAngle(mins, sec) + "deg)";

  let hrNum = document.querySelector(".hr-num");
  hrNum.innerHTML = "Hours:" + hrs;
  hrNum.style.transform = "rotate(" + (getHrAngle(hrs)*(-1)) + "deg)";
  let minNum = document.querySelector(".min-num");
  minNum.innerHTML = "Minutes:" + mins;
  minNum.style.transform = "rotate(" + (getMinAngle(mins)*(-1)) + "deg)";

}


function working() {
  let d = new Date();
  startMoving(d.getHours(), d.getMinutes(), d.getSeconds());
  var cont = document.querySelector("p");
  cont.innerText="Time: "+d.getHours()+" : "+d.getMinutes();
}

id = setInterval(working, 1000);

var intog = document.querySelector(".inner");
var outtog = document.querySelector(".outer");
var tog = true;

function movetog() {
  if (tog) {
    intog.style.transform = "translateX(44px)";
    /* intog.style.color = "#e9c46a"; */
    intog.innerHTML = "OFF";
    outtog.style.backgroundColor = "#e9c46a";
    clearInterval(id);
    tog = false;
  } else {
    intog.style.transform = "translateX(0px)";
    /* intog.style.color = "wheat"; */
    intog.innerHTML = "ON";
    outtog.style.backgroundColor = "wheat";
    id = setInterval(working, 1000);
    tog = true;
  }
}

outtog.addEventListener("click", movetog);
