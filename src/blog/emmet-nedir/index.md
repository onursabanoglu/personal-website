---
title: Emmet Nedir? Nasıl Kullanılır?
date: "2019-03-15"
description: "Emmet, Html ve CSS iş akışını büyük ölçüde geliştiren,biz web geliştiricilerinin sıklıkla kullandığı, kodları daha hızlı yazıp zamandan tasarruf etmek için tercih ettiğimiz bir eklenti diyebiliriz."
---

Emmet, Html ve CSS iş akışını büyük ölçüde geliştiren,biz web geliştiricilerinin sıklıkla kullandığı, kodları daha hızlı yazıp zamandan tasarruf etmek için tercih ettiğimiz bir eklenti diyebiliriz.

**Neden Kullanmalıyız?**

*Emmet’in temel mantığı, yazılımcıya kodlama yaparken zaman kazandırmasıdır. Bu yüzden çoğu yazılımcı text editöründe Emmet eklentisini kullanır. bir örnekle açıklayacak olursak örneğin;

```html
<div>
  <ul>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
  </ul>
</div>
```
şeklindeki iç içe girmiş bir kod yapımız olsun, bu kodu tek tek iç içe yazmak yerine;
**div>ul>li*5>a** şeklinde yazarak ekrandaki kod yapısını elde etmiş oluruz.

Emmet birçok Text Editörü ile uyumlu şekilde çalışır. Yapmanız gereken sadece [emmet.io](https://emmet.io/) adresine gidip burada Download sekmesine gittikten sonra ekranda bulunan text editörlerinden size uygun olanı seçip,indirmek. Bu kısaltmalarınızın editörünüzde çalışması için, kısaltılmış kodları yazdıktan sonra editörün tamamlaması için klavyenizden TAB tuşuna basmalısınız.


şimdi bu kısaltmalarda kullanılan bazı simgelerin ne işe yaradığını ele alacağız.

## Yerleştirme Operatörleri

**Child (>)** : Elemente alt elemanlar eklemek için kullanılır. **div>ul>li*5>a** şeklinde kullanılır.
```html
<div>
  <ul>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
    <li><a href="#"></a></li>
  </ul>
</div>
```



**Sibling (+)** : Elementin yanına elamanlar ekler. **body>div+div+div** şeklinde kullanılır.
```html
<body>
  <ul>
    <div></div>
    <div></div>
    <div></div>
  </ul>
</body>
```


**Multiplication (*)** : Elementin kaç defa üretileceğini belirtir. **div>ul>li*5** şeklinde kullanılır.
```html
<div>
  <ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
  </ul>
</div>
```

**Class (.)** : karakteri ile oluşturmak istediğiniz elemente class özelliği eklenmiş olur ve girmiş olduğunuz değer atamasıda class özelliğine atanmış olur. **div.navigation>ul>li.nav-item** şeklinde kullanılır.
```html
<div class="navigation">
  <ul>
    <li class="nav-item"></li>
  </ul>
</div>
```


**ID (#)** : Karakteri ile oluşturmak istediğiniz elemente id özelliği eklenmiş olur ve girmiş olduğunuz değer atamasıda id özelliğine atanmış olur. **div#navigation>ul>li#nav-item** şeklinde kullanılır.
```html
<div id="navigation">
  <ul>
    <li id="nav-item"></li>
  </ul>
</div>
```

**Item numbering ($)** : İşareti ile sayısal olarak otomatik artan değer üretimi sağlar. **ul>li.item$*5** şeklinde kullanılır.
```html
<ul>
  <li class="item1"></li>
  <li class="item2"></li>
  <li class="item3"></li>
  <li class="item4"></li>
  <li class="item5"></li>
</ul>
```

**Text ({})** : Belirttiğimiz elementin için metin eklememize yardımcı olur. **p{ Merhaba Dünya }** şeklinde kullanılır.
```html
<p>Merhaba Dünya</p>
```


## Emmet ile HTML 5 İskeleti Oluşturmak

Bir HTML sayfası oluştururken bunun için yapmanız gereken ilk şey sayfa için bir iskelet oluşturmaktır. Bazen bu iskeleti oluştururken hangi kodun nerede olduğu unutabiliyoruz. İşte Emmet tam burada devreye giriyor ve HTML uzantılı dosyamıza sadece “ **!** ” yazdıktan sonra **TAB** tuşana basmamız yeter. sadece tek bir ünlem işareti ile HTML 5 iskeletimizi oluşturmuş oluyoruz.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```