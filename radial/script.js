const section = document.querySelector("section");
const editable = document.querySelector(".editable");
const textareaHTML = document.querySelector(".playable-html");
const textareaCSS = document.querySelector(".playable-css");
const reset = document.getElementById("reset");
const repeatingRadial = document.getElementById("repeatingRadial");
const radialLeftBottom = document.getElementById("radialLeftBottom");
const radialRightTop = document.getElementById("radialRightTop");
const multiRepeatingRadial = document.getElementById("multiRepeatingRadial");

let htmlCode = textareaHTML.value;
let cssCode = textareaCSS.value;

function fillCode() {
    section.innerHTML = textareaHTML.value;
    editable.innerHTML = textareaCSS.value;
}

const htmlRepeatingRadial = `<div class="box repeatingRadial"></div>`;
const cssRepeatingRadial = `.repeatingRadial {
    background: repeating-radial-gradient(
        rgb(0, 255, 255, 0.7) 0 20px,
        rgb(0, 255, 255, 0.4) 20px 40px);
}
`;

const htmlRadialLeftBottom = `<div class="box radialLeftBottom"></div>`;
const cssRadialLeftBottom = `.radialLeftBottom {
    background: repeating-radial-gradient(
        ellipse farthest-corner at 25% 70%,
        yellow 0 5%,
        green 5% 10%);
}
`;

const htmlRadialRightTop = `<div class="box radialRightTop"></div>`;
const cssRadialRightTop = `.radialRightTop {
    background: repeating-radial-gradient(
        ellipse farthest-corner at 75% 30%,
        black,
        blue 5%,
        red 5%,
        green 10%);
}
`;

const htmlMultiRepeatingRadial = `<div class="box multiRepeatingRadial"></div>`;
const cssMultiRepeatingRadial = `.multiRepeatingRadial {
    background: repeating-radial-gradient(
                    ellipse at 80% 80%,
                    rgba(0, 0, 0, 0.5) 0 15px,
                    rgba(255, 255, 255, 0.5) 15px 30px) bottom right no-repeat,
                repeating-radial-gradient(
                    ellipse at 25% 25%,
                    rgba(0, 0, 0, 0.5) 0 10px,
                    rgba(255, 255, 255, 0.5) 10px 20px) top left no-repeat yellow;
    background-size: 200px 200px, 100px 100px, 200px 200px;
}
`;

let htmlRepeatingRadialEntry = htmlRepeatingRadial;
let cssRepeatingRadialEntry = cssRepeatingRadial;

let htmlRadialLeftBottomEntry = htmlRadialLeftBottom;
let cssRadialLeftBottomEntry = cssRadialLeftBottom;

let htmlRadialRightTopEntry = htmlRadialRightTop;
let cssRadialRightTopEntry = cssRadialRightTop;

let htmlMultiRepeatingRadialEntry = htmlMultiRepeatingRadial;
let cssMultiRepeatingRadialEntry = cssMultiRepeatingRadial;

reset.addEventListener("click", () => {
    textareaHTML.value = htmlCode;
    textareaCSS.value = cssCode;
    repeatingRadial.value = "繰り返し放射に変更";
    radialLeftBottom.value = "繰り返し放射（左下）に変更";
    radialRightTop.value = "繰り返し放射（右上）に変更";
    multiRepeatingRadial.value = "繰り返し放射（複数）に変更";
    fillCode();
});

repeatingRadial.addEventListener("click", () => {
    if (repeatingRadial.value === "繰り返し放射に変更") {
        textareaHTML.value = htmlRepeatingRadialEntry;
        textareaCSS.value = cssRepeatingRadialEntry;
        repeatingRadial.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        repeatingRadial.value = "繰り返し放射に変更";
    }
    fillCode();
});

radialLeftBottom.addEventListener("click", () => {
    if (radialLeftBottom.value === "繰り返し放射（左下）に変更") {
        textareaHTML.value = htmlRadialLeftBottomEntry;
        textareaCSS.value = cssRadialLeftBottomEntry;
        radialLeftBottom.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        radialLeftBottom.value = "繰り返し放射（左下）に変更";
    }
    fillCode();
});

radialRightTop.addEventListener("click", () => {
    if (radialRightTop.value === "繰り返し放射（右上）に変更") {
        textareaHTML.value = htmlRadialRightTopEntry;
        textareaCSS.value = cssRadialRightTopEntry;
        radialRightTop.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        radialRightTop.value = "繰り返し放射（右上）に変更";
    }
    fillCode();
});

multiRepeatingRadial.addEventListener("click", () => {
    if (multiRepeatingRadial.value === "繰り返し放射（複数）に変更") {
        textareaHTML.value = htmlMultiRepeatingRadialEntry;
        textareaCSS.value = cssMultiRepeatingRadialEntry;
        multiRepeatingRadial.value = "元に戻す";
    } else {
        textareaHTML.value = htmlCode;
        textareaCSS.value = cssCode;
        multiRepeatingRadial.value = "繰り返し放射（複数）に変更";
    }
    fillCode();
});

textareaHTML.addEventListener("input", fillCode);
textareaCSS.addEventListener("input", fillCode);
window.addEventListener("load", fillCode);
