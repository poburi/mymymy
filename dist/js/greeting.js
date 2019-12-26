const form = document.querySelector(".js-enter-form"),
  input = form.querySelector(".inp"),
  greeting = document.querySelector(".js-greetings"),
  intro = document.querySelector(".js-introduce");

const USER_LS = "currentUser",
  SHOWING_CN = "showing",
  HIDE_CN = "hide";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.add(HIDE_CN);
  greeting.classList.add(SHOWING_CN);
  intro.classList.add(SHOWING_CN);

  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  console.log(currentUser);

  if (currentUser === null) {
    // not here
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
}

init();
