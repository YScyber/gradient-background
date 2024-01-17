# 概要

## グラデーションの背景

### 線形グラデーションと繰り返し線形グラデーション

- [線形グラデーション](https://developer.mozilla.org/ja/docs/Web/CSS/gradient/linear-gradient "MDN Web Docs linear-gradient()")
```css
.linear-gradient {
    background: linear-gradient(rgba(255, 0, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 0, 255, 0.8));
}
```
- [繰り返し線形グラデーション](https://developer.mozilla.org/ja/docs/Web/CSS/gradient/repeating-linear-gradient "MDN Web Docs repeating-linear-gradient()")
```css
.repeating-linear-gradient {
    background: repeating-linear-gradient(-45deg, brown 0 5px, yellow 5px 10px);
}
```

### 放射グラデーションと繰り返し放射グラデーション

- [放射グラデーション](https://developer.mozilla.org/ja/docs/Web/CSS/gradient/radial-gradient "MDN Web Docs radial-gradient()")
```css
.radial-gradient {
    background: radial-gradient(rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0.5));
}
```
- [繰り返し放射グラデーション](https://developer.mozilla.org/ja/docs/Web/CSS/gradient/repeating-radial-gradient "MDN Web Docs repeating-radial-gradient()")
```css
.repeating-radial-gradient {
    background: repeating-radial-gradient(rgb(0, 255, 255, 0.7) 0 20px, rgb(0, 255, 255, 0.4) 20px 40px);
}
```

### 扇形グラデーションと繰り返し扇形グラデーション

- [扇形グラデーション](https://developer.mozilla.org/ja/docs/Web/CSS/gradient/conic-gradient "MDN Web Docs conic-gradient()")
```css
.conic-gradient {
    background: conic-gradient(hsla(0, 100%, 50%, 0.5) 120deg, hsla(120, 100%, 50%, 0.5) 120deg 240deg, hsla(240, 100%, 50%, 0.5) 240deg);
}
```
- [繰り返し扇形グラデーション](https://developer.mozilla.org/ja/docs/Web/CSS/gradient/repeating-conic-gradient "MDN Web Docs/repeating-conic-gradient()")
```css
.repeating-conic-gradient {
    background: repeating-conic-gradient(orange 0deg 10deg, darkblue 10deg 20deg);
}
```
[完成ページへ](https://yscyber.github.io/gradient-background/ "https://yscyber.github.io/gradient-background/")
