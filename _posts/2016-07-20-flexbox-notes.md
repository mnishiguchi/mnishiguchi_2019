---
layout: post
title: Flexbox notes
comments: true
tags:
- css
- flexbox
---

<!--more-->

- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout
- [philipwalton/solved-by-flexbox](https://github.com/philipwalton/solved-by-flexbox)

```html
<div class="container">
  <div class="left">
    <!-- left column -->
  </div>
  <div class="contents">
    <!-- right column -->
  </div>
</div>
```

```css
.container{
  display: flex;
}
.left{
  width: 300px;
}
.contents{
  flex: 1;
}
```

#### `flex` property
> [a shorthand property that sets flex-grow, flex-shrink, and flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex)

## Links and References

- [floatより辛くない「flexbox」でざっくりレイアウト](http://qiita.com/hashrock/items/939684b9207dbab1d59e)
- [Flexboxレイアウトまとめ](http://qiita.com/takanorip/items/a51989312160530d89a1)
- [脱Bootstrapガイド 〜フルスクラッチCSS〜](http://qiita.com/hashrock/items/5c18bf5086f52e4122e5)
- [CSS3を使ったちょっと便利なテクニックシリーズ](http://qiita.com/kokushin/items/95a0ed389665fd51898a)
- [Bootstrap 4 Flex Box Grid Demo](http://codepen.io/ncerminara/pen/EjqbPj)
- [Railsプログラマが "脱 Bootstrap依存" をするために工夫したこと & デザイナーから指摘を受けたTips](http://qiita.com/regonn/items/01dd8356e6a9686c70be)
