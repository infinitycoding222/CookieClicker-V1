let CookieClicker1 = document.getElementById("Cookie");
let button = document.getElementById("button");
let button2 = document.getElementById("x2");
let DoIhaveX2 = false;
let canibuyx2 = false;
let canibuyautoc = false;
let autoc = document.getElementById("autoclicker")
// window.onload = (event) => {
//     window.prompt("On refresh it will reset upgrades and cookies", "")
// }
if (CookieClicker1.innerHTML >= 30) canibuyx2 = true;
if (CookieClicker1.innerHTML >= 100) canibuyautoc = true;

function onClickCookies() {
    if (DoIhaveX2 == false) {
        let previous = parseInt(CookieClicker1.innerHTML)
        CookieClicker1.innerHTML = previous + 1;
    }
}

function onClickCookiesX2() {
    if (DoIhaveX2 == true) {
        let pr = parseInt(CookieClicker1.innerHTML)
        CookieClicker1.innerHTML = pr + 2;
    }
}

function onUpgradeBuyClick() {
    if (canibuyx2 == true) {
        DoIhaveX2 = true;
        let pred = parseInt(CookieClicker1.innerHTML)
        CookieClicker1.innerHTML = pred - 30;
    }
}

function onAutoClickerClick() {
    if (canibuyautoc == true) {
        let predi1 = parseInt(CookieClicker1.innerHTML);
        CookieClicker1.innerHTML = predi1 - 100;
    }
}
if (DoIhaveX2 == false)
    button.onclick = onClickCookies;

if (DoIhaveX2 == true)
    button.onclick = onClickCookiesX2;

button2.onclick = onUpgradeBuyClick;
autoc.onclick = onAutoClickerClick;