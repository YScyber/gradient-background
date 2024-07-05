# 概要

## グラデーションの背景

### 線形グラデーションと繰り返し線形グラデーション

- 線形グラデーション
```css
.linear-gradient {
    background: linear-gradient(rgba(255, 0, 0, 0.8), rgba(0, 255, 0, 0.8), rgba(0, 0, 255, 0.8));
}
```
- 繰り返し線形グラデーション
```css
.repeating-linear-gradient {
    background: repeating-linear-gradient(-45deg, brown 0 5px, yellow 5px 10px);
}
```

### 放射グラデーションと繰り返し放射グラデーション

- 放射グラデーション
```css
.radial-gradient {
    background: radial-gradient(rgba(255, 0, 0, 0.5), rgba(0, 255, 0, 0.5), rgba(0, 0, 255, 0.5));
}
```
- 繰り返し放射グラデーション
```css
.repeating-radial-gradient {
    background: repeating-radial-gradient(rgb(0, 255, 255, 0.7) 0 20px, rgb(0, 255, 255, 0.4) 20px 40px);
}
```

### 扇形グラデーションと繰り返し扇形グラデーション

- 扇形グラデーション
```css
.conic-gradient {
    background: conic-gradient(hsla(0, 100%, 50%, 0.5) 120deg, hsla(120, 100%, 50%, 0.5) 120deg 240deg, hsla(240, 100%, 50%, 0.5) 240deg);
}
```
- 繰り返し扇形グラデーション
```css
.repeating-conic-gradient {
    background: repeating-conic-gradient(orange 0deg 10deg, darkblue 10deg 20deg);
}
```

このリポジトリでは、JavaScriptでDOM操作を行っています。画面最下部にあるボタンをクリックすると、コードが自動で入力され、最上部にあるsection要素にその結果が出力されます。また、すでにコードが入力されているtextarea要素を書き換えることができ、元に戻す際にはリセットボタンをクリックすると最初の画面に戻ります。


[完成ページへ](https://yscyber.github.io/gradient-background/ "https://yscyber.github.io/gradient-background/")
