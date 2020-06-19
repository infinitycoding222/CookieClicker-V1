let CookieClicker1 = document.getElementById("Cookie"),
    button = document.getElementById("button"),
    button2 = document.getElementById("x2");
let canibuyx2 = false,
    DoIhaveX2 = false;
let multi = 1;
// window.onload = (event) => {
//     window.prompt("On refresh it will reset upgrades and cookies", "")
// }
if (parseInt(CookieClicker1.innerHTML) >= 30) {
    // canibuyx2 = true;
    console.log("dsadsa")
};

function onClickCookies() {
    let previous = parseInt(CookieClicker1.innerHTML)
    CookieClicker1.innerHTML = previous +
        multi;
    console.log(".dsafsad")
};

function onClickCookiesX2() {
    let pr = parseInt(CookieClicker1.innerHTML);
    multi = 2;
    CookieClicker1.innerHTML = pr + multi;
    console.log("sadasdsa")
}

function onUpgradeBuyClick() {
    // DoIhaveX2 = true;
    let pred = parseInt(CookieClicker1.innerHTML);
    CookieClicker1.innerHTML = pred - 30;
    console.log("im dasdsa")
};
if (canibuyx2) {
    button2.onclick = onUpgradeBuyClick;
};
button.onclick = onClickCookies;
if (DoIhaveX2 == true) {
    button.onclick = onClickCookiesX2;
};