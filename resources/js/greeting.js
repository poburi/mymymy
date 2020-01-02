const form = document.querySelector(".js-enter-form"),
  input = form.querySelector(".inp"),
  greeting = document.querySelector(".js-greetings"),
  intro = document.querySelector(".js-introduce");

const USER_LS = "currentUser",
  SHOWING_CN = "active";

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
  // 폼 숨김
  form.classList.remove(SHOWING_CN);

  // 인트로박스 쇼잉
  greeting.classList.add(SHOWING_CN);
  intro.classList.add(SHOWING_CN);

  greeting.innerText = `Hello, ${text}💛`;

  $(function() {
		$('.js-slider').touchSlider({
			view: 3,
			gap: 20,
		});
  });
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
