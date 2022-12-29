// import "../css/styles.css";

const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

/*
✅ The text of the title should change when the mouse is on top of it.
마우스가 title 위로 올라가면 텍스트가 변경되어야 함.
mouseenter 이벤트 사용.

✅ The text of the title should change when the mouse is leaves it.
마우스가 title 을 벗어나면 텍스트가 변경되어야 함.
mouseleave 이벤트 사용.

✅ When the window is resized the title should change.
브라우저 창의 사이즈가 변하면 title 이 바뀌어야 함.
resize 이벤트 사용.

✅ On right click the title should also change.
마우스를 우 클릭하면 title 이 바뀌어야 함.
contextmenu 이벤트 사용.

✅ The colors of the title should come from a color from the colors array.
title 의 색상은 colors 배열에 있는 색을 사용해야 함.
✅ DO NOT CHANGE .css, or .html files.
.css와 .html의 파일은 수정하지 않음.
✅ ALL function handlers should be INSIDE of "superEventHandler"
모든 함수 핸들러는 superEventHandler 내부에 작성해야 함.
*/

const title = document.querySelector("h2");
console.dir(title);

const superEventHandler = {
  handleMouseEnterEvent() {
    console.log("handleMouseEnterEvent");
    title.innerText = "mouseenter 이벤트 발생!";
    title.style.color = colors[0];
  },

  handleMouseLeaveEvent() {
    console.log("handleMouseLeaveEvent");
    title.innerText = "mouseleave 이벤트 발생!";
    title.style.color = colors[1];
  },

  handleResizeEvent() {
    console.log("handleResizeEvent");
    title.innerText = "resize 이벤트 발생!";
    title.style.color = colors[2];
  },

  handleContextMenuEvent() {
    console.log("handleContextMenuEvent");
    title.innerText = "contextmenu 이벤트 발생!";
    title.style.color = colors[3];
  },
};

// title.onmouseenter(superEventHandler.handleMouseEnterEvent);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnterEvent);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeaveEvent);
window.addEventListener("resize", superEventHandler.handleResizeEvent);
window.addEventListener(
  "contextmenu",
  superEventHandler.handleContextMenuEvent
);
