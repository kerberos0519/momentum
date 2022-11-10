const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-Button");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function paintGreeting(username) {
    greeting.innerText = `안녕하세요 ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    console.log(greeting);
}
function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    console.log(username);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);
    
if(savedUserName === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    paintGreeting(savedUserName);
}



// loginForm.addEventListener("submit",onLoginSubmit)
console.dir(loginInput);