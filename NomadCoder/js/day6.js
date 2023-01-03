const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // 브라우저가 submit할 때 기본 동작을 안하게 됨.
  // 그 기본 동작은 멈추고 우리가 원하는 것을 할 수 있음.
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);

  // 유효성 검사를 해줘야 함. -> HTML 파일에서 함.
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  paintGreetings(savedUsername);
}

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
