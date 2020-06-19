let CookieClicker1 = document.getElementById("Cookie");
let button = document.getElementById("button");
let x2 = document.getElementById("x2Clicker");
let button2 = document.getElementById("x2");
let DoIhaveX2 = false;
let canibuyx2 = false;
if (CookieClicker1.innerHTML >= 30) canibuyx2 = true;

function onClickCookies() {
    if (!DoIhaveX2) {
        let previous = parseInt(CookieClicker1.innerHTML)
        CookieClicker1.innerHTML = previous + 1;
    }
}

// function onClickCookiesX2() {
//     if (DoIhaveX2) {
//         let pr = parseInt(CookieClicker1.innerHTML)
//         CookieClicker1.innerHTML = pr + 2;
//     }
// }

// function onUpgradeBuyClick() {
//     if (canibuyx2) {
//         DoIhaveX2 = true;
//     }
// }
if (DoIhaveX2 == false) {
    button.onclick = onClickCookies;
}
if (DoIhaveX2 == true) {
    button.onclick = onClickCookiesX2;
}