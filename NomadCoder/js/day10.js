const clock = document.querySelector("h2#clock");

// setInterval(function이름, 5000ms -> 5초)
// setTimeout(function이름, 5000ms -> 5초) => 5초이후에 함수가 실행됨.

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
