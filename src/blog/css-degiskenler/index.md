---
title: CSS’te Değişkenler
date: "2020-07-18"
description: "Değişkenler programlama dillerinin neredeyse hepsinde kullanılan bir özelliktir. Frontend dünyasında ise, değişkenler en çok talep edilen CSS özelliklerinden birisiydi..."
---

Değişkenler programlama dillerinin neredeyse hepsinde kullanılan bir özelliktir. Frontend dünyasında ise, değişkenler en çok talep edilen CSS özelliklerinden birisiydi. Bu özelliği önceden sadece CSS Önişlemcileri (pre-processor) ile birlikte kullanabiliyorduk. Büyük projelerde, derlenme sürelerinin uzun sürmesi gibi durumlar Önişlemci kullanmanın dezavantajlarını ortaya çıkardı. CSS’in bugün geldiği noktaya bakarsak, herhangi bir Önişlemciye ihtiyaç duymadan bu özelliği kullanmamızı sağlıyor.

Bir proje üzerinde çalışırken birçok öge için aynı değerleri (metin renkleri, arka plan renkleri vb.) kullanmamız gerekir. Bu gibi durumlarda aynı kodu tekrar tekrar yazmak yerine, bir defaya mahsus değişkene bir değer tanımlayıp, bu değişkeni kullanacağımız yerlerde çağırmak, projemiz açısından hem tutarlılık sağlayacak, hemde projenin bakımını kolaylaştıracaktır.
Değişkenler, renkleri, yazı tiplerini ve boşluk değerleri gibi CSS özelliklerini tek bir noktadan yönetmeyi ve bir kod tabanı genelinde tutarlılık sağlamayı kolaylaştırır. Değişkenleri kullanarak bir özelliğe bir değer atayabilir ve bunu CSS kodumuzda ihtiyaç olunan yerlerde yeniden kullanabiliriz.


#### Bu bölümde CSS değişkenlerinin şu özelliklerine değinmeye çalışacağım;
* CSS’te değişkenler nasıl tanımlanır ve bu değişkenler için varsayılan değerler nasıl ayarlanır?
* Tanımladığımız değişkenleri projemizde nasıl kullanabiliriz?
* Değişkenlerde dinamik yapı nedir ve medya sorguları ile nasıl çalışır?
* Değişkenlerin güncel tarayıcı destek durumları



## Değişken Tanımlama

Her Önişlemci, değişkenleri tanımlamak için farklı yollar kullanır. Örneğin Sass’ta değişken tanımlamak için değişken isminin başına “**$**” işareti, Less’te ise “**@**” işareti gelir. Bir CSS değişkeni tanımlamak için ise, değişken isminin önüne çift tire (--) ile başlayan bir tanım yapılır. Tire işareti CSS ayrıştırıcısına bunun bir CSS değişkeni olduğu belirtir ve bu değişkenin kullanıldığı heryerde, tanımlanan değişken değeri kullanılır.

```css
--primary-color: #1A73E8;
```

Bildiğiniz gibi Javascript’te değişkenleri, global ve local olarak iki şekilde tanımlayabiliyoruz. Aynı durum CSS değişkenleri içinde geçerlidir.

```css
:root {
  --primary-color: #1A73E8;
}

p {
  --secondary-color: #191970;
}
```

`:root` seçici, Belgenin kök elamanın yerine geçer(yani onu temel alır). Örneğin HTML dosyasında :root, <html> etiketini temsil eder. Dolayısıyla :root’ a tanımlanan değişkenler, global değişken olarak kabul edilir. `--secondary-color` değişkeni ise bir local değişkendir.


Değişken isimleri büyük küçük harf duyarlıdır. Yani `--primary-color` ve `--primary-Color` iki farklı değişkenlerdir.
```css
:root {
  --primary-color: #1A73E8;
  --primary-Color: #191970;
}
```


## Değişken Kullanımı
CSS’te değişkenler `var()` fonksiyonu ile çağırılır. Örneğin `--primary-color` değişkenimize atanan değeri, buton arka plan rengi olarak kullanmak isteseydik;
```css
:root {
  --primary-color: #1A73E8;
}

button {
  background-color: var(--primary-color);
}
```
şeklinde tanımlama yapmamız gerekirdi.

CSS değişkenleri yalnızca standart CSS özelliklerinin değerlerini ayarlamak için kullanılabilir. Örneğin bir özellik adını, bir değişken olarak tanımlayıp kullanamayız.


```css
:root {
  --top-border: border-top;
}

button {
  var(--top-border): 10px solid #1A73E8;
}
```

Ayrıca bir özellik değerini de değişken olarak tanımlayıp kullanamayız.

```css
:root {
  --text-color: 'color: orange';
}

button {
  var(--text-color);
}
```
Yapılamayacaklardan bir tanesi de bir değişkeni, bir değer dizesinin parçası olarak birleştiremeyiz.

```css
:root {
  --base-font-size: 10;
}

body {
    font-size: var(--base-font-size)px;
}
```


## Bir Yedek Belirleme
`var()` fonksiyonunu kullanarak, verilen değişken henüz tanımlanmamışsa veya geçersiz bir değere sahipse, yedek bir değer atayabiliyoruz.
`var()` fonksiyonu en fazla iki değer alabilir. Bunlardan ilki bir mutlaka bir özellik adı olmalıdır. İkincisi değer ise, isteğe bağlı olup, ilk değerin geçersiz olduğu durumda kullanılır.
```css
:root {
  --primary-color: #1A73E8;
}

button {
  background-color: var(--primary-color, blue);
}
```
`--primary-color` değişkenine bir değer ataması yapıldıysa, arka plan rengi **#1A73E8** olacaktır, tanımlanmamış ise o zaman arka plan rengi blue değerinin rengi olacaktır.

Var() fonksiyonu içinde, ikinci bir değer olarakta değişken kullanabiliyoruz.


```css
:root {
  --primary-color: #1A73E8;
  --secondary-color: #191970;
}

button {
  background-color: var(--primary-color, var(--secondary-color));
}
```
Yukarıda ki kod bloğunda `--primary-color` değişkenine bir değer ataması yapıldıysa arka plan rengi primary-color’a atanan değer, tanımlanmamış ise secondary-color’a atanan değer olacaktır. İki değişkene de tanımlama yapılmadıysa arka plan rengi, özelliğin başlangıç değeri olacaktır.

## Dinamik Yapısı ve Medya Sorguları ile Kullanma

CSS değişkenlerinin en büyük avantajlarından bir tanesi de dinamik bir yapısının olmasıdır. Peki nedir bu dinamik yapı?


Ön işlemcilerle birlikte kullanılan değişkenler statik bir yapıya sahiptirler, CSS’te ise bu durum farklıdır. CSS’te tanımlanan bir değişken, dinamik yapıya sahip olduğu için değiştirilebilir özelliği vardır.

Bunu en çok kullandığımız noktalardan bir tanesi de, farklı ekran boyutları için kullandığımız, medya sorguları ile birlikte kullanımını göreceğiz.

CSS değişkenlerini medya sorguları ile birlikte kullanabiliyoruz. Böylece farklı ekran boyutları için stillerimizi tek bir noktadan yönetmek daha kolay hale geliyor.

```css
:root {
  --button-padding: 1rem;
}

@media (min-width:576px) {
  :root {
    --button-padding: 2rem;
  }
}

button {
  padding: var(--button-padding);
}
```

Yukarıda ki örnekte, ekran genişliği 576px’ e kadar Butonun padding değeri 1rem olarak ayarlanacak, ekran genişliği 576px’ i aştığı an padding değeri 2rem olacaktır.


## Tarayıcı Desteği
CSS’te değişkenler, birçok güncel tarayıcı tarafından desteklenir. İnternet Explorer hiçbir sürümü desteklemezken, Microsoft Edge’in 15'ten, Safari’nin ise 9.1'den sonraki sürümleri destekler. Microsoft Edge’in 15 sürümü desteklemesine rağmen hâlâ birkaç hataya sahiptir.

![Thumbnail](./browser-support.png)

Tarayıcı desteğinin güncel durumunu ve diğer CSS özelliklerinin tarayıcı destek durumlarına aşağıdaki linkten ulaşabilirsiniz. <br>
https://caniuse.com/?search=Custom%20Properties


### Özetle;

CSS Değişkenleri:
* Herhangi bir ön işlemci kullanmadan, değişken tanımlamamıza,
* Basit ve bakımı kolay Css yazmamıza,
* Tekrarlanan değerler için tek referans noktası oluşturmamıza,
* Farklı ekran boyutları için atanan değerleri daha kolay yönetmemize olanak sağlar.

<br>
<br>

#### Kaynaklar;

* https://www.sitepoint.com/premium/books/css-master-2nd-edition
* https://fatihhayrioglu.com/css-degiskenleri-custom-properties/


