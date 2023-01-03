const loginForm = document.getElementById("#login-form");
const greeting = document.querySelector("#greeting");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const userName = loginInput.valuse;
  greeting.innerText = `Hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  // 유효성 검사를 해줘야 함. -> HTML 파일에서 함.
}

loginButton.addEventListener("submit", onLoginSubmit);

/*
// a 링크 관련
const link = document.querySelector("a");

function handleLinkClick(event) {
  // 기본동작을 막고 있음. 이벤트는 멈추게 되고 아무것도 진행되지 않음.
  event.preventDefault();
  console.dir(event);
}

// addEventListener 안에 있는 함수는 직접 실행하지 않는다는 것.
link.addEventListener("click", handleLinkClick);
*/
