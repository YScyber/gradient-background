const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const repeat = document.getElementById("repeat");
const leftBottom = document.getElementById("leftBottom");
const rightTop = document.getElementById("rightTop");
const multi = document.getElementById("multi");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const repeatHtmlSolution = `<div class="box repeat"></div>`;
const repeatCssSolution = `.repeat {
    background: repeating-radial-gradient(
        rgb(0, 255, 255, 0.7) 0 20px,
        rgb(0, 255, 255, 0.4) 20px 40px);
}`;

const leftBottomHtmlSolution = `<div class="box leftBottom"></div>`;
const leftBottomCssSolution = `.leftBottom {
    background: repeating-radial-gradient(
        ellipse farthest-corner at 25% 70%,
        yellow 0 5%,
        green 5% 10%);
}`;

const rightTopHtmlSolution = `<div class="box rightTop"></div>`;
const rightTopCssSolution = `.rightTop {
    background: repeating-radial-gradient(
        ellipse farthest-corner at 75% 30%,
        black,
        blue 5%,
        red 5%,
        green 10%);
}`;

const multiHtmlSolution = `<div class="box multi"></div>`;
const multiCssSolution = `.multi {
    background: repeating-radial-gradient(
                    ellipse at 80% 80%,
                    rgba(0, 0, 0, 0.5) 0 15px,
                    rgba(255, 255, 255, 0.5) 15px 30px) bottom right no-repeat,
                repeating-radial-gradient(
                    ellipse at 25% 25%,
                    rgba(0, 0, 0, 0.5) 0 10px,
                    rgba(255, 255, 255, 0.5) 10px 20px) top left no-repeat yellow;
    background-size: 200px 200px, 100px 100px, 200px 200px;
}`;

let repeatHtmlSolutionEntry = repeatHtmlSolution;
let repeatCssSolutionEntry = repeatCssSolution;

let leftBottomHtmlSolutionEntry = leftBottomHtmlSolution;
let leftBottomCssSolutionEntry = leftBottomCssSolution;

let rightTopHtmlSolutionEntry = rightTopHtmlSolution;
let rightTopCssSolutionEntry = rightTopCssSolution;

let multiHtmlSolutionEntry = multiHtmlSolution;
let multiCssSolutionEntry = multiCssSolution;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    repeat.value = "繰り返し放射に変更";
    leftBottom.value = "繰り返し放射（左下）に変更";
    rightTop.value = "繰り返し放射（右上）に変更";
    multi.value = "繰り返し放射（複数）に変更";
    fillCode();
});

repeat.addEventListener("click", () => {
    if (repeat.value === "繰り返し放射に変更") {
        textareaHTML.value = repeatHtmlSolutionEntry;
        textareaCSS.value = repeatCssSolutionEntry;
        repeat.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        repeat.value = "繰り返し放射に変更";
    }
    fillCode();
});

leftBottom.addEventListener("click", () => {
    if (leftBottom.value === "繰り返し放射（左下）に変更") {
        textareaHTML.value = leftBottomHtmlSolutionEntry;
        textareaCSS.value = leftBottomCssSolutionEntry;
        leftBottom.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        leftBottom.value = "繰り返し放射（左下）に変更";
    }
    fillCode();
});

rightTop.addEventListener("click", () => {
    if (rightTop.value === "繰り返し放射（右上）に変更") {
        textareaHTML.value = rightTopHtmlSolutionEntry;
        textareaCSS.value = rightTopCssSolutionEntry;
        rightTop.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        rightTop.value = "繰り返し放射（右上）に変更";
    }
    fillCode();
});

multi.addEventListener("click", () => {
    if (multi.value === "繰り返し放射（複数）に変更") {
        textareaHTML.value = multiHtmlSolutionEntry;
        textareaCSS.value = multiCssSolutionEntry;
        multi.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        multi.value = "繰り返し放射（複数）に変更";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
