const loginForm = document.querySelector("#login");
const nickName = document.querySelector("#nickName");
const greeting = document.querySelector("#greeting");

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);

  paintGreetings(username);
}

function paintGreetings(username) {
  nickName.innerText = `안녕하세요. ${username}님`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginButton.addEventListener("click", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
