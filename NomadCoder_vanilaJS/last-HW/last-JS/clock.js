const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  //padStart(글자의 길이, 모자랄경우 채워줄 문자열)
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
