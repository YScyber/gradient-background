const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const repeat = document.getElementById("repeat");
const leftTop = document.getElementById("leftTop");
const rightBottom = document.getElementById("rightBottom");
const ichimatsu = document.getElementById("ichimatsu");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const repeatHtmlSolution = `<div class="box repeat"></div>`;
const repeatCssSolution = `.repeat {
    background: repeating-conic-gradient(
        orange 0deg 10deg,
        darkblue 10deg 20deg);
}`;

const leftTopHtmlSolution = `<div class="box leftTop"></div>`;
const leftTopCssSolution = `.leftTop {
    background: repeating-conic-gradient(
        from 3deg at 5% 5%,
        hsl(74, 100%, 50%) 0deg 10deg,
        hsl(200, 100%, 60%) 5deg 20deg);
}`;

const rightBottomHtmlSolution = `<div class="box rightBottom"></div>`;
const rightBottomCssSolution = `.rightBottom {
    background: repeating-conic-gradient(
        from 3deg at 75% 75%,
        beige,
        blue 2deg 5deg,
        beige,
        red 15deg 18deg,
        beige 20deg);
}`;

const ichimatsuHtmlSolution = `<div class="box ichimatsu"></div>`;
const ichimatsuCssSolution = `.ichimatsu {
    background: conic-gradient(
        black 0.25turn,
        chocolate 0.25turn 0.5turn,
        black 0.5turn 0.75turn,
        chocolate 0.75turn) top left / 25% 25% repeat;
}`;

let repeatHtmlSolutionEntry = repeatHtmlSolution;
let repeatCssSolutionEntry = repeatCssSolution;

let leftTopHtmlSolutionEntry = leftTopHtmlSolution;
let leftTopCssSolutionEntry = leftTopCssSolution;

let rightBottomHtmlSolutionEntry = rightBottomHtmlSolution;
let rightBottomCssSolutionEntry = rightBottomCssSolution;

let ichimatsuHtmlSolutionEntry = ichimatsuHtmlSolution;
let ichimatsuCssSolutionEntry = ichimatsuCssSolution;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    repeat.value = "繰り返し扇形に変更";
    leftTop.value = "繰り返し扇形（左上）に変更";
    rightBottom.value = "繰り返し扇形（右下）に変更";
    ichimatsu.value = "市松模様に変更";
    fillCode();
});

repeat.addEventListener("click", () => {
    if (repeat.value === "繰り返し扇形に変更") {
        textareaHTML.value = repeatHtmlSolutionEntry;
        textareaCSS.value = repeatCssSolutionEntry;
        repeat.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        repeat.value = "繰り返し扇形に変更";
    }
    fillCode();
});

leftTop.addEventListener("click", () => {
    if (leftTop.value === "繰り返し扇形（左上）に変更") {
        textareaHTML.value = leftTopHtmlSolutionEntry;
        textareaCSS.value = leftTopCssSolutionEntry;
        leftTop.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        leftTop.value = "繰り返し扇形（左上）に変更";
    }
    fillCode();
});

rightBottom.addEventListener("click", () => {
    if (rightBottom.value === "繰り返し扇形（右下）に変更") {
        textareaHTML.value = rightBottomHtmlSolutionEntry;
        textareaCSS.value = rightBottomCssSolutionEntry;
        rightBottom.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        rightBottom.value = "繰り返し扇形（右下）に変更";
    }
    fillCode();
});

ichimatsu.addEventListener("click", () => {
    if (ichimatsu.value === "市松模様に変更") {
        textareaHTML.value = ichimatsuHtmlSolutionEntry;
        textareaCSS.value = ichimatsuCssSolutionEntry;
        ichimatsu.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        ichimatsu.value = "市松模様に変更";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
