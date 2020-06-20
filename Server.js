let CookieClicker1 = document.getElementById("Cookie"),
    button = document.getElementById("button"),
    button2 = document.getElementById("x2");
let canibuyx2 = false,
    DoIhaveX2 = false;
// window.onload = (event) => {
//     window.prompt("On refresh it will reset upgrades and cookies", "")
// }

function onClickCookies() {
    let previous = parseInt(CookieClicker1.innerHTML)
    CookieClicker1.innerHTML = previous + 1;
    console.log("piza")
}

function onClickCookiesX2() {
    let pr = parseInt(CookieClicker1.innerHTML);
    CookieClicker1.innerHTML = pr + 2;
    console.log("sadasdsa")
}

function onUpgradeBuyClick() {
    let pred = parseInt(CookieClicker1.innerHTML);
    CookieClicker1.innerHTML = pred - 30;
    console.log("im dasdsa")
    DoIhaveX2 = true;
}
// if (canibuyx2 == false) {
//     console.warn("I can\'t buy more upgrades")
// }
button2.onclick = onUpgradeBuyClick;
if (DoIhaveX2 == true)
    button.onclick = onClickCookiesX2;
if (DoIhaveX2 == false)
    button.onclick = onClickCookies;