let seconds = document.getElementById('indicator').textContent;
toggleIndicator(indicator);
let timerId = setInterval(() => {
    --seconds;
    indicator.textContent = seconds;
    if (seconds <= 0) {
        clearInterval(timerId);
        toggleIndicator(indicator);           
        errorMessage();       
     }
}, 1000); 

function toggleIndicator(element) {
    indicator.classList.toggle(`red`);
    indicator.classList.toggle(`green`);
}

function disableAllElem() {
    var divs = document.querySelectorAll('input');
    [].forEach.call(divs, function(input) {
        input.disabled = true;             
    });   
}

function submitClick() {
    clearInterval(timerId);
    disableAllElem();
    document.getElementById('indicator').textContent = 0;
    toggleIndicator(indicator);

    let gradText = document.createElement('p');
    gradText.textContent = "Поздравляем! Тест успешно сдан! :-)"
    gradText.style.color = "green"
    let mainDiv = document.querySelector('div.main');
    let lastItem = mainDiv.lastChild.previousSibling;
    mainDiv.insertBefore(gradText, lastItem);
}

function errorMessage() {
    disableAllElem(); 
    let gradText = document.createElement('p');
    gradText.textContent = "К сожалению, тест не сдан! :-("
    gradText.style.color = "red"
    let mainDiv = document.querySelector('div.main');
    let lastItem = mainDiv.lastChild.previousSibling;
    mainDiv.insertBefore(gradText, lastItem);
}