const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

/*
if-else 문을 이용해 사이트 사이즈가 변할 때마다 배경 색깔을 바꿔줌!

힌트
if...else : 조건식의 결과에 따라 {}로 묶인 블록의 실행 여부를 결정하는 조건문.
classList: 요소에 적용된 클래스들의 이름을 리스트 형태로 반환해줌.
remove: classList의 메서드. classList를 통해 반환된 리스트 중에서 원하는 클래스를 제거할 수 있음.
add: classList의 메서드. classList의 리스트에 원하는 클래스를 추가할 수 있음.
innerWidth: 브라우저의 가로 길이를 나타내는 Window 객체의 프로퍼티.
*/

console.log(document.classList);
const body = document.querySelector("body");

function handleResizeBackColor() {
  if (innerWidth >= 1200) {
    body.style.backgroundColor = colors[0];
    console.log(1);
  } else if (innerWidth > 600 && innerWidth < 1200) {
    body.style.backgroundColor = colors[1];
    console.log(2);
  } else if (innerWidth <= 600) {
    body.style.backgroundColor = colors[2];
    console.log(3);
  }
}

window.addEventListener("resize", handleResizeBackColor);
