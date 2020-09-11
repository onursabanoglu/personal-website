---
title: Reset.Css & Normalize.Css
date: "2019-04-08"
description: "Bir Web sayfasını farklı tarayıcılarda açtığınızda ne kadar farklı göründüğünü hiç farkettiniz mi? Bu tarayıcılardan kaynaklanan bir problemdir."
---

Bir Web sayfasını farklı tarayıcılarda açtığınızda ne kadar farklı göründüğünü hiç farkettiniz mi? Bu tarayıcılardan kaynaklanan bir problemdir. Her tarayıcının kendine özel varsayılan değerleri farklıdır. Örneğin Google Chrome’un site kenar boşluğu 5px iken Firefox’ta bu boşluk 10px olabiliyor. Buda beraberinde Web sayfasının farklı tarayıcılarda farklı sonuçlar alınmasına neden oluyor. Bu farklılığı ortadan kaldırmak için Web geliştiricisi olan Eric Mayer, reset.css’i çıkardı.

```css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```

Temel kullanım mantığı bütün tarayıcıların varsayılan değerlerini sıfırlamaya yarar. Uzun yıllar boyunca kullanılan reset.css, bütün değerleri sıfırlamasından dolayı Web geliştiricilerine bazı yerlerde sorunlar çıkarmaya başlamıştı. Bunun üzerine normalize.css çıktı. Normalize.css, Html öğelerinin varsayılan değerlerini sıfırlamak yerine, bütün tarayıcılara sabit değer sağlayan küçük bir CSS dosyasıdır. Tüm tarayıcıların varsayılan stillerini kaldırmaz. Ancak, çeşitli tarayıcıları stilleriyle tutarlı kılar.


### Reset.css ve Normalize.css Arasındaki Farklar?

- Normalize.css herşeyi biçimlendirmez.
- Normalize.css daha modülerdir. Kod yapısı birbirinden bağımsız bölümlerden oluşur. Projenizde ihtiyaç duymayacağınız kısımları silebilirsiniz.



## Reset.css ve Normalize.css Nasıl kullanılır ?

Reset.css kullanmak için üst kısımda bulunan kodları projenizin en üst kısmına yapıştırmak. Normalize.css’i projenize dâhil etmek için ilk önce normalize.css dosyasını [şu adresten](https://necolas.github.io/normalize.css/) indirin. Dosyayı indirdikten sonra Projenizin CSS dosyasının en üstüne bu kodları yerleştirdikten sonra bütün tarayıcılarda ki farklılıklar ortadan kalkmış oluyor.
