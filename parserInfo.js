window.onload = function() {
let userName = document.createElement('p');
let userMessage = document.createElement('p');
let data = parent.document.URL.substring(parent.document.URL.indexOf('?'), parent.document.URL.length);

userName.textContent = "Пользователь: " + decodeURIComponent(data.substring(data.indexOf('=') + 1, data.indexOf('&')));
document.body.append(userName);

userMessage.textContent = "Cообщение: " + decodeURIComponent(data.substring(data.indexOf('&') + 9, data.length));
document.body.append(userMessage);
}