// hint
// date 생성자
// Date().getFullYear() : 2021처럼 4자리의 연도를 얻을 수 있는 함수.
// Math.floor: 주어진 수와 같거나 작은 수 중에서 가장 큰 정수를 반환하는 함수.
// setInterval: 인수로 전달받은 함수를 지정해 둔 일정한 간격으로 실행할 수 있게 해주는 함수.

const dDay = document.querySelector("#dDay");

// d h m s 로 표현해야 함.
function getDday() {
  const bDay = new Date("2023-02-03");
  const tDay = new Date();

  const diff = bDay - tDay; // mm로 표현.

  // 60초 60분 24시간
  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHour = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const diffMin = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const diffSec = String(Math.floor((diff / 1000) % 60)).padStart(2, "0");

  dDay.innerText = `${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s`;
}

getDday();
setInterval(getDday, 1000);
