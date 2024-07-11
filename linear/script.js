const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const repeat = document.getElementById("repeat");
const horizon = document.getElementById("horizon");
const multi = document.getElementById("multi");
const check = document.getElementById("check");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const repeatHtmlSolution = `<div class="box repeat"></div>`;
const repeatCssSolution = `.repeat {
    background: repeating-linear-gradient(
        -45deg,
        brown 0 5px,
        yellow 5px 10px);
}`;

const horizonHtmlSolution = `<div class="box horizon"></div>`;
const horizonCssSolution = `.horizon {
    background: repeating-linear-gradient(
        to top,
        rgb(30, 236, 240) 0% 8%,
        rgb(71, 6, 67) 20%);
}`;

const multiHtmlSolution = `<div class="box multi"></div>`;
const multiCssSolution = `.multi {
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
}`;

const checktHtmlSolution = `<div class="box check"></div>`;
const checkCssSolution = `.check {
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
}`;

let repeatHtmlSolutionEntry = repeatHtmlSolution;
let repeatCssSolutionEntry = repeatCssSolution;

let horizonHtmlSolutionEntry = horizonHtmlSolution;
let horizonCssSolutionEntry = horizonCssSolution;

let multiHtmlSolutionEntry = multiHtmlSolution;
let multiCssSolutionEntry = multiCssSolution;

let checkHtmlSolutionEntry = checkHtmlSolution;
let checkCssSolutionEntry = checkCssSolution;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    repeat.value = "繰り返し線形に変更";
    horizon.value = "繰り返し線形（水平線）に変更";
    multi.value = "繰り返し線形（複数）に変更";
    check.value = "チェック柄に変更";
    fillCode();
});

repeat.addEventListener("click", () => {
    if (repeat.value === "繰り返し線形に変更") {
        textareaHTML.value = repeatHtmlSolutionEntry;
        textareaCSS.value = repeatCssSolutionEntry;
        repeat.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        repeat.value = "繰り返し線形に変更";
    }
    fillCode();
});

horizon.addEventListener("click", () => {
    if (horizon.value === "繰り返し線形（水平線）に変更") {
        textareaHTML.value = horizonHtmlSolutionEntry;
        textareaCSS.value = horizonCssSolutionEntry;
        horizon.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        horizon.value = "繰り返し線形（水平線）に変更";
    }
    fillCode();
});

multi.addEventListener("click", () => {
    if (multi.value === "繰り返し線形（複数）に変更") {
        textareaHTML.value = multiHtmlSolutionEntry;
        textareaCSS.value = multiCssSolutionEntry;
        multi.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        multi.value = "繰り返し線形（複数）に変更";
    }
    fillCode();
});

check.addEventListener("click", () => {
    if (check.value === "チェック柄に変更") {
        textareaHTML.value = checkHtmlSolutionEntry;
        textareaCSS.value = checkCssSolutionEntry;
        plaidGradient.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        check.value = "チェック柄に変更";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
