---
title: Sass’ta Klasör Yapısı
date: "2019-09-30"
description: "CSS yazmak her zaman heyecan verici ve zevkli bir iştir, ancak küçük projeler büyüdükçe CSS ile baş etmek daha karmaşık hale geldiği için daha kolay yönetilebilir bir yapı ihtiyacını doğurdu..."
---

CSS yazmak her zaman heyecan verici ve zevkli bir iştir, ancak küçük projeler büyüdükçe CSS ile baş etmek daha karmaşık hale geldiği için daha kolay yönetilebilir bir yapı ihtiyacını doğurdu. Bu soruna çözüm olarak CSS dosyalarını farklı klasörlerde dosyalayıp, **“@import”** yapısı kullanılması denendi, ancak bu yapı CSS’te dosyaların yüklenmesinde yavaşlığa neden olduğu için bir çözüme kavuşamadı. Bu ihtiyaçlara yanıt olarak ta CSS Derleyicileri ortaya çıktı. Böylelikle tek bir CSS dosyası içinde kaybolmaktansa daha sistematik bir şekilde çalışma sağlanmış oldu.

Bir CSS derleyicisi kullanmanın avantajlarından biri performansı etkilemeden kodunuzu birkaç dosyaya bölme yeteneğine sahip olmasıdır. Sass’ın **“@import”** yapısı sayesinde istediğiniz gibi stil kodlarını klasörleyip, daha sonra bu klasör içindeki stilleri tek bir dizinde import edebilirsiniz.

## 7–1 Sass Mimarisi

Sass projelerinizde klasörlerinizi yapılandırmanızı sağlayan bir modeldir. Mantığı temel olarak 7 Farklı sass klasörü ve bütün dosyaların toplandığı tek bir ana dosyadan oluşur. Böylelikle klasörlerdeki bütün dosyalar derlenmeyip sadece ana dizindeki dosya derlenmiş olur.

```
sass/
|
|– base/
|
|– components/
|
|– layout/
|
|– pages/
|
|– themes/
|
|– helpers/
|
|– vendors/
|
`– main.scss
```

Yukarıda ki klasör isimleri projeye ve geliştirciye göre değişiklik gösterebilir, ancak temel yapı olarak bunlar kullanılabilir.

Daha sonraki aşamada, bu klasörler ne gibi stilleri barındırmalıdır? İşte aşağıdaki örnekte bir sass klasör yapısını bulabilirsiniz.

```
sass/
|
|– base/
|   |– _normalize.scss   # Normalize.css
|   |– _typography.scss  # Tipografi kuralları
|
|– components/
|   |– _buttons.scss     # Butonlar
|   |– _dropdown.scss    # Açılır Menüler
|
|– layout/
|   |– _navigation.scss  # Navigasyonlar
|   |– _grid.scss        # Izgara Sistemi
|   |– _header.scss      # ÜstBilgi
|   |– _footer.scss      # AltBilgi
|   |– _sidebar.scss     # Kenar Menüler
|   |– _forms.scss       # Formlar
|
|– pages/
|   |– _home.scss        # Anasayfa Stilleri
|   |– _contact.scss     # İletişim Sayfa Stilleri
|
|– themes/
|   |– _theme.scss       # Varsayılan Tema Stilleri
|
|– Helpers/
|   |– _variables.scss   # Sass Değişkenleri
|   |– _functions.scss   # Sass Fonksiyonları
|   |– _mixins.scss      # Sass Karışımları
|
|– vendors/
|   |– _bootstrap.scss   # Bootstrap
|   |– _jquery-ui.scss   # jQuery UI
|
|
`– main.scss             # Main Sass Dosyası
`– readme.md             # Projeye ait açıklama dosyası
```

Gördüğünüz gibi kök dizininde tek bir sass dosyası vardır main.scss, diğer tüm dosyalar uygun klasöre ayrılır.

**Base:** Bu klasörde projeye ait demirbaş diyebileceğimiz kodlar bulunur. normalize.css, tipografi ile ilgili temel kodlar bulunur.

**Components:** Components klasörü daha küçük bileşenlerin bulunduğu klasördür. Bu klasörde genellikle buttons.scss, dropdown.scss gibi bileşenler bulunur.

**Layout:** Layout klasörü ( bazen partial olarak adlandırılır. ) genellikle projedeki her bir ana bölmelerin bulunduğu klasördür, component klasöründen farklı olarak bu klasörde, projeye ait daha büyük bileşenler yer alır. Örneğin header.scss, sidebar.scss, navigation.scss gibi bileşenler olur.

**Pages:** Sayfaya özgü stillerin bulunduğu klasörüdür. Örneğin projeye ait bir “bize ulaşın” sayfasında kullanılan stil kuralları bu klasörde yer alır.

**Themes:** Projeniz birden fazla tema içeriyorsa stiller bu klasörde toplanır.

**Helpers:** Tüm sass araçları ve proje boyunca kullanacağınız yardımcı stilleri ( değişkenler, fonksiyonlar ) bu klasörde yer alır.

**Vendors:** Harici kütüphanelerden gelen tüm stil dosyaların bu klasör adı altında toplanır.

### Son olarak,

Bazı sass dosyalarının css’e derlenmesine gerek yoktur. Bu dosyalar diğer sass dosyalarına hizmet etmek için vardırlar. Örneğin “\_variables.scss” bu dosyanın amacı, diğer sass dosyaları bu dosyadan bilgi kullanabilmesi için vardır.

<br>
<br>

#### Kaynaklar;

- https://fatihhayrioglu.com/sass-klasor-yapisi/
- https://www.sitepoint.com/architecture-sass-project/
