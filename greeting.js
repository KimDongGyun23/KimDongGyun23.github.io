const form = document.querySelector(".form");
const input = form.querySelector("input");
const greeting = document.querySelector(".greetings");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
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
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);

    const date = new Date();
    const hours = date.getHours();
    let mention = 'Hello';
    if(0<= hours && hours <= 4 || 20 < hours){
        mention = 'Good night';
    } else if (hours<12){
        mention = 'Good morning';
    } else{
        mention = 'Good afternoon';
    }
 
    greeting.innerText = `${mention}, ${text}.`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }else{
        paintGreeting(currentUser);
    }
}
function initGreeting() {
    loadName();
}

// 이름 삭제하기
// window.localStorage.removeItem(USER_LS);

initGreeting();