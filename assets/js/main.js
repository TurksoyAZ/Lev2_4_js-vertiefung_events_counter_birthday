let inputDate = document.querySelector("#inputDate");

let dayOutput = document.querySelector("#dayOutput");
let hoursOutput = document.querySelector("#hoursOutput");
let minOutput = document.querySelector("#minOutput");
let secOutput = document.querySelector("#secOutput");

function clock() {
  let inputZeit = new Date(inputDate.value);

  let total = inputZeit.getTime() - new Date().getTime();

  let getSecund = Math.floor(total / 1000);
  let getMinute = Math.floor(getSecund / 60);
  let getHours = Math.floor(getMinute / 60);
  let getDay = Math.floor(getHours / 24);

  if (+inputZeit) {
    let a = getSecund - getMinute * 60;
    let b = getMinute - getHours * 60;
    let c = getHours - getDay * 24;

    a < 10 ? (secOutput.innerHTML = "0" + a) : (secOutput.innerHTML = a);
    b < 10 ? (minOutput.innerHTML = "0" + b) : (minOutput.innerHTML = b);
    c < 10 ? (hoursOutput.innerHTML = "0" + c) : (hoursOutput.innerHTML = c);
    getDay < 10
      ? (dayOutput.innerHTML = "0" + getDay)
      : (dayOutput.innerHTML = getDay);

    secOutput.style.color = "red";
    minOutput.style.color = "red";
    hoursOutput.style.color = "red";
    dayOutput.style.color = "red";
  }
}

setInterval(clock, 1000);
