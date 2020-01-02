// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyDnEwfMQ0QfP0Mrr7VAnC50_0UlEiDfQBc',
	authDomain: 'mymymy-1f526.firebaseapp.com',
	databaseURL: 'https://mymymy-1f526.firebaseio.com',
	projectId: 'mymymy-1f526',
	storageBucket: 'mymymy-1f526.appspot.com',
	messagingSenderId: '934732989373',
	appId: '1:934732989373:web:9937bba1c26875090c88d4',
	measurementId: 'G-VGCHZSW945',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const addUserBtnUI = document.querySelector(".subbtn-submit");
addUserBtnUI.addEventListener("click", saveHandle);

function saveHandle(){
 
  if(inp.val() == ''){
    alert("빈 칸을 모두 채워주세요.");
    return false;
  }

  const dbRef = firebase.database().ref();
  const usersRef = dbRef.child('users');

  const addUserInputsUI = document.getElementsByClassName("user-input");
  console.log(addUserInputsUI)

  let newUser = {};

  console.log(addUserInputsUI.length)

  for (let i = 0, len = addUserInputsUI.length; i < len; i++) {
    let key = addUserInputsUI[i].getAttribute('data-key');
    let value = addUserInputsUI[i].value;
    newUser[key] = value;
  }

  usersRef.push(newUser, function(){
    if (confirm("확인 후 연락드리겠습니다.")) document.location = window.location.pathname;
  })
}



 