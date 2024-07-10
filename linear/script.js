const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const repeatingLinear = document.getElementById("repeatingLinear");
const repeatingHorizontalLine = document.getElementById("repeatingHorizontalLine");
const multiRepeatingLinear = document.getElementById("multiRepeatingLinear");
const plaidGradient = document.getElementById("plaidGradient");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const htmlRepeatingLinear = `<div class="box repeatingLinear"></div>`;
const cssRepeatingLinear = `.repeatingLinear {
    background: repeating-linear-gradient(
        -45deg,
        brown 0 5px,
        yellow 5px 10px);
}
`;

const htmlRepeatingHorizontalLine = `<div class="box repeatingHorizontalLine"></div>`;
const cssRepeatingHorizontalLine = `.repeatingHorizontalLine {
    background: repeating-linear-gradient(
        to top,
        rgb(30, 236, 240) 0% 8%,
        rgb(71, 6, 67) 20%);
}
`;

const htmlMultiRepeatingLinear = `<div class="box multiRepeatingLinear"></div>`;
const cssMultiRepeatingLinear = `.multiRepeatingLinear {
    background: repeating-linear-gradient(
                    190deg,
                    rgba(255, 0, 0, 0.5) 10px,
                    rgba(255, 153, 0, 0.5) 30px,
                    rgba(255, 255, 0, 0.5) 50px,
                    rgba(0, 255, 0, 0.5) 70px,
                    rgba(0, 0, 255, 0.5) 90px,
                    rgba(75, 0, 130, 0.5) 110px,
                    rgba(238, 130, 238, 0.5) 130px,
                    rgba(255, 0, 0, 0.5) 150px),
                repeating-linear-gradient(
                    -190deg,
                    rgba(255, 0, 0, 0.5) 20px,
                    rgba(255, 153, 0, 0.5) 40px,
                    rgba(255, 255, 0, 0.5) 60px,
                    rgba(0, 255, 0, 0.5) 80px,
                    rgba(0, 0, 255, 0.5) 100px,
                    rgba(75, 0, 130, 0.5) 120px,
                    rgba(238, 130, 238, 0.5) 140px,
                    rgba(255, 0, 0, 0.5) 160px),
                repeating-linear-gradient(
                    23deg,
                    red 10px,
                    orange 20px,
                    yellow 30px,
                    green 40px,
                    blue 50px,
                    indigo 60px,
                    violet 70px,
                    red 80px);
}
`;

const htmlPlaidGradient = `<div class="box plaidGradient"></div>`;
const cssPlaidGradient = `.plaidGradient {
    background: repeating-linear-gradient(
                    90deg,
                    transparent 0 15px,
                    rgba(21, 27, 0, 0.25) 15px 30px,
                    transparent 30px 45px,
                    rgba(21, 27, 0, 0.25) 45px 60px,
                    transparent 60px 75px,
                    rgba(21, 0, 106, 0.25) 75px 90px),
                repeating-linear-gradient(
                    0deg,
                    transparent 0 15px,
                    rgba(21, 27, 0, 0.25) 15px 30px,
                    transparent 30px 45px,
                    rgba(21, 27, 0, 0.25) 45px 60px,
                    transparent 60px 75px,
                    rgba(21, 0, 106, 0.25) 75px 90px),
                repeating-linear-gradient(
                    -45deg,
                    transparent 0 5px,
                    rgba(113, 117, 36, 0.25) 5px 20px),
                repeating-linear-gradient(
                    45deg,
                    transparent 0 5px,
                    rgba(113, 117, 36, 0.25) 5px 20px);
}
`;

let htmlRepeatingLinearEntry = htmlRepeatingLinear;
let cssRepeatingLinearEntry = cssRepeatingLinear;

let htmlRepeatingHorizontalLineEntry = htmlRepeatingHorizontalLine;
let cssRepeatingHorizontalLineEntry = cssRepeatingHorizontalLine;

let htmlMultiRepeatingLinearEntry = htmlMultiRepeatingLinear;
let cssMultiRepeatingLinearEntry = cssMultiRepeatingLinear;

let htmlPlaidGradientEntry = htmlPlaidGradient;
let cssPlaidGradientEntry = cssPlaidGradient;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    repeatingLinear.value = "繰り返し線形に変更";
    repeatingHorizontalLine.value = "繰り返し線形（水平線）に変更";
    multiRepeatingLinear.value = "繰り返し線形（複数）に変更";
    plaidGradient.value = "チェック柄に変更";
    fillCode();
});

repeatingLinear.addEventListener("click", () => {
    if (repeatingLinear.value === "繰り返し線形に変更") {
        textareaHTML.value = htmlRepeatingLinearEntry;
        textareaCSS.value = cssRepeatingLinearEntry;
        repeatingLinear.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        repeatingLinear.value = "繰り返し線形に変更";
    }
    fillCode();
});

repeatingHorizontalLine.addEventListener("click", () => {
    if (repeatingHorizontalLine.value === "繰り返し線形（水平線）に変更") {
        textareaHTML.value = htmlRepeatingHorizontalLineEntry;
        textareaCSS.value = cssRepeatingHorizontalLineEntry;
        repeatingHorizontalLine.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        repeatingHorizontalLine.value = "繰り返し線形（水平線）に変更";
    }
    fillCode();
});

multiRepeatingLinear.addEventListener("click", () => {
    if (multiRepeatingLinear.value === "繰り返し線形（複数）に変更") {
        textareaHTML.value = htmlMultiRepeatingLinearEntry;
        textareaCSS.value = cssMultiRepeatingLinearEntry;
        multiRepeatingLinear.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        multiRepeatingLinear.value = "繰り返し線形（複数）に変更";
    }
    fillCode();
});

plaidGradient.addEventListener("click", () => {
    if (plaidGradient.value === "チェック柄に変更") {
        textareaHTML.value = htmlPlaidGradientEntry;
        textareaCSS.value = cssPlaidGradientEntry;
        plaidGradient.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        plaidGradient.value = "チェック柄に変更";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
