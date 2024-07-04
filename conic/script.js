const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const repeatingConic = document.getElementById("repeatingConic");
const conicLeftTop = document.getElementById("conicLeftTop");
const conicRightBottom = document.getElementById("conicRightBottom");
const checkeredPattern = document.getElementById("checkeredPattern");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const htmlRepeatingConic = `<div class="box repeatingConic"></div>`;
const htmlConicLeftTop = `<div class="box conicLeftTop"></div>`;
const htmlConicRightBottom = `<div class="box conicRightBottom"></div>`;
const htmlCheckeredPattern = `<div class="box checkeredPattern"></div>`;


const cssRepeatingConic = `.repeatingConic {
    background: repeating-conic-gradient(
        orange 0deg 10deg,
        darkblue 10deg 20deg);
}
`;
const cssConicLeftTop = `.conicLeftTop {
    background: repeating-conic-gradient(
        from 3deg at 5% 5%,
        hsl(74, 100%, 50%) 0deg 10deg,
        hsl(200, 100%, 60%) 5deg 20deg);
}
`;

const cssConicRightBottom = `.conicRightBottom {
    background: repeating-conic-gradient(
        from 3deg at 75% 75%,
        beige,
        blue 2deg 5deg,
        beige,
        red 15deg 18deg,
        beige 20deg);
}
`;

const cssCheckeredPattern = `.checkeredPattern {
    background: conic-gradient(
        black 0.25turn,
        chocolate 0.25turn 0.5turn,
        black 0.5turn 0.75turn,
        chocolate 0.75turn) top left / 25% 25% repeat;
}
`;

let htmlRepeatingConicEntry = htmlRepeatingConic;
let htmlConicLeftTopEntry = htmlConicLeftTop;
let htmlConicRightBottomEntry = htmlConicRightBottom;
let htmlCheckeredPatternEntry = htmlCheckeredPattern;

let cssRepeatingConicEntry = cssRepeatingConic;
let cssConicLeftTopEntry = cssConicLeftTop;
let cssConicRightBottomEntry = cssConicRightBottom;
let cssCheckeredPatternEntry = cssCheckeredPattern;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    repeatingConic.value = "繰り返し扇形に変更";
    conicLeftTop.value = "繰り返し扇形（左上）に変更";
    conicRightBottom.value = "繰り返し扇形（右下）に変更";
    checkeredPattern.value = "チェック柄に変更";
    fillCode();
});

repeatingConic.addEventListener("click", () => {
    if (repeatingConic.value === "繰り返し扇形に変更") {
        textareaHTML.value = htmlRepeatingConicEntry;
        textareaCSS.value = cssRepeatingConicEntry;
        repeatingConic.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        repeatingConic.value = "繰り返し扇形に変更";
    }
    fillCode();
});

conicLeftTop.addEventListener("click", () => {
    if (conicLeftTop.value === "繰り返し扇形（左上）に変更") {
        textareaHTML.value = htmlConicLeftTopEntry;
        textareaCSS.value = cssConicLeftTopEntry;
        conicLeftTop.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        conicLeftTop.value = "繰り返し扇形（左上）に変更";
    }
    fillCode();
});

conicRightBottom.addEventListener("click", () => {
    if (conicRightBottom.value === "繰り返し扇形（右下）に変更") {
        textareaHTML.value = htmlConicRightBottomEntry;
        textareaCSS.value = cssConicRightBottomEntry;
        conicRightBottom.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        conicRightBottom.value = "繰り返し扇形（右下）に変更";
    }
    fillCode();
});

checkeredPattern.addEventListener("click", () => {
    if (checkeredPattern.value === "チェック柄に変更") {
        textareaHTML.value = htmlCheckeredPatternEntry;
        textareaCSS.value = cssCheckeredPatternEntry;
        checkeredPattern.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        checkeredPattern.value = "チェック柄に変更";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);