const dDay = document.querySelector("#dDay");

function getDday() {
  const bDay = new Date("2023-02-03");
  const tDay = new Date();

  const diff = bDay - tDay;

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  dDay.innerText = `D-${diffDay}`;
}

getDday();
setInterval(getDday, 1000);
