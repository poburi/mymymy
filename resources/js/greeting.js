const form = document.querySelector(".js-enter-form"),
  input = form.querySelector(".inp"),
  greeting = document.querySelector(".js-greetings"),
  intro = document.querySelector(".js-introduce"),
  modal = document.querySelector(".js-modal");

const USER_LS = "currentUser",
  SHOWING_CN = "active",
  OUT_CN = "out";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

// enter 이벤트
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue, status);
  saveName(currentValue);
}

function askForName() {
  modal.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text, status) {
  const parent = document.querySelector('.pic');
  const nodewrap = document.createElement('div');
  const node = document.createElement('p');
  const textNode = document.createTextNode(`안녕, ${text} 💛`);

  // 폼 숨김
  form.classList.remove(SHOWING_CN);

  // 인트로박스 쇼잉
  modal.classList.remove(SHOWING_CN);
  modal.classList.add(OUT_CN);
  greeting.classList.remove(SHOWING_CN);
  intro.classList.add(SHOWING_CN);

  nodewrap.className = 'speech js-speech';
  nodewrap.appendChild(node);
  node.appendChild(textNode);
  parent.appendChild(nodewrap);
  // greeting.innerText = `반가워요, ${text}💛`;


}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);

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

