let mainDiv = document.querySelector('div.main');
let helloItem = document.createElement('h2');
let firstItem = mainDiv.firstChild.nextSibling;

helloItem.textContent = "Добро пожаловать!"
helloItem.style.textAlign = "center";

window.onload = function() {
    window.setInterval(function(){
                    let now = new Date()
                    let clock = document.getElementById("clock");
                    clock.innerHTML = now.toLocaleString();
                    }, 1000);
    
    mainDiv.insertBefore(helloItem, firstItem);
}

move();
function move() {
    var banner = document.querySelector('div.banner'); 
    var pos = parseInt(window.getComputedStyle(banner, null).getPropertyValue("margin-top"));
    var i;

    setInterval(frame, 20);
    function frame() {
        if (pos == 0) {
            i = 1;
        } 
        if (pos == 50) {
            i = -i;
        }   
        
        pos += i;
        banner.style.marginTop = pos.toString() + "px";    
    }
}

function openInfoWindow() {
    var name = document.getElementsByTagName("input")[0].value;
    var message = document.getElementsByTagName("textarea")[0].value;    
    window.open("infoPage.html?name=" + name + "&message=" + message, "width=400,height=300,resize=yes");
}