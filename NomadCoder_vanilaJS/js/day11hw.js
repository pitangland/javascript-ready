// 사용자가 버튼을 클릭하면 colors 배열에서 두 가지 색상이 랜덤으로 선택.
// body 태그의 style을 랜덤으로 선택된 두 가지 색상을 사용해 linear-gradient로 변경.
/*
hint
linear-gradient: 선형 그라데이션을 만들어주는 CSS 함수]
background: linear-gradient(#e66465, #9198e5);
Math.floor(): 주어진 숫자의 소수점 이하를 내림해서 반환하는 함수
Math.random(): 0에서 1보다 작은 범위의 난수를 반환하는 함수
length: 배열의 길이(요소의 개수)를 반환하는 프로퍼티
*/

// 내가 생각한 로직?
// 버튼이 클릭됐을 때 랜덤으로 두 색상을 뽑아.
// 그리고 linear-gradient로 그려 그걸 추가해줘

const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const button = document.querySelector("button");

function colorChange() {
  const firstColor = colors[Math.floor(Math.random() * colors.length)];
  const secondColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.background = `linear-gradient(0.25turn, ${firstColor}, ${secondColor})`;
}

button.addEventListener("click", colorChange);
