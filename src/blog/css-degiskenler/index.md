---
title: CSS’te Değişkenler
date: "2018-08-18"
description: "Değişkenler programlama dillerinin neredeyse hepsinde kullanılan bir özelliktir. Frontend dünyasında ise, değişkenler en çok talep edilen CSS özelliklerinden birisiydi."
---

![Thumbnail](./browser-support.png)


Değişkenler programlama dillerinin neredeyse hepsinde kullanılan bir özelliktir. Frontend dünyasında ise, değişkenler en çok talep edilen CSS özelliklerinden birisiydi. Bu özelliği önceden sadece CSS Önişlemcileri (pre-processor) ile birlikte kullanabiliyorduk. Büyük projelerde, derlenme sürelerinin uzun sürmesi gibi durumlar Önişlemci kullanmanın dezavantajlarını ortaya çıkardı. CSS’in bugün geldiği noktaya bakarsak, herhangi bir Önişlemciye ihtiyaç duymadan bu özelliği kullanmamızı sağlıyor.

Bir proje üzerinde çalışırken birçok öge için aynı değerleri (metin renkleri, arka plan renkleri vb.) kullanmamız gerekir. Bu gibi durumlarda aynı kodu tekrar tekrar yazmak yerine, bir defaya mahsus değişkene bir değer tanımlayıp, bu değişkeni kullanacağımız yerlerde çağırmak, projemiz açısından hem tutarlılık sağlayacak, hemde projenin bakımını kolaylaştıracaktır.

Değişkenler, renkleri, yazı tiplerini ve boşluk değerleri gibi CSS özelliklerini tek bir noktadan yönetmeyi ve bir kod tabanı genelinde tutarlılık sağlamayı kolaylaştırır. Değişkenleri kullanarak bir özelliğe bir değer atayabilir ve bunu CSS kodumuzda ihtiyaç olunan yerlerde yeniden kullanabiliriz.

**Bu bölümde CSS değişkenlerinin şu özelliklerine değinmeye çalışacağım;**


* CSS’te değişkenler nasıl tanımlanır ve bu değişkenler için varsayılan değerler nasıl ayarlanır?
* Tanımladığımız değişkenleri projemizde nasıl kullanabiliriz?
* CSS’te değişkenler nasıl tanımlanır ve bu değişkenler için varsayılan değerler nasıl ayarlanır?
* Değişken değerlerine yedek bir değer ataması nasıl yapılır?
* Değişkenlerde dinamik yapı nedir ve medya sorguları ile nasıl çalışır?
* Değişkenlerin güncel tarayıcı destek durumları


### Değişken Tanımlama


```html
<label class="c-custom-checkbox">
    <input type="checkbox" />

    <svg width="32" height="32" viewBox="-4 -4 39 39" aria-hidden="true" focusable="false">
        <!-- The background -->
        <rect class="checkbox__bg" width="35" height="35" x="-2" y="-2" stroke="currentColor" fill="none" stroke-width="3" rx="6"
            ry="6"></rect>
        <!-- The checkmark-->
        <polyline class="checkbox__checkmark" points="4,14 12,23 28,5" stroke="transparent" stroke-width="4" fill="none"></polyline>
    </svg>

    <span>The checkbox label text</span>
</label>
```


