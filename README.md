# oktayurekli.github.io

🌐 **Canlı site: [https://oktayurekli.github.io](https://oktayurekli.github.io)**

Oktay Ürekli'nin oyun geliştirici portfolyosu. Sade HTML + CSS + JavaScript ile yazılmıştır; derleme adımı yoktur. Değişiklikleri commit edip push etmeniz yeterlidir, GitHub Pages siteyi 1–2 dakika içinde günceller.

## Dosya yapısı

```
index.html          Sayfa iskeleti
css/style.css       Tasarım (renkler en üstte :root içinde)
js/data.js          TÜM İÇERİK: isim, linkler, CV, deneyim, eğitim, projeler, metinler
js/main.js          Sayfayı data.js'ten oluşturan kod (genelde dokunmanız gerekmez)
assets/logos/       Oyun logoları
assets/cv/          CV dosyaları
assets/favicon.svg  Tarayıcı sekmesindeki ikon
```

## Sık yapılan güncellemeler

Hepsi `js/data.js` içinde yapılır. Her metnin `tr` ve `en` karşılığı vardır.

### Yeni oyun eklemek
1. Logoyu `assets/logos/` klasörüne koyun (kare, ~360×360 px, `.webp` veya `.png`).
2. `PROJECTS` listesinin **en başına** (en yeni oyun en üstte görünür) şu bloğu ekleyin:

```js
  {
    name: "Oyun Adı",
    logo: "assets/logos/oyun-adi.webp",
    genre: { tr: "2D Casual – PC", en: "2D Casual – PC" },   // istemezseniz: null
    desc: {
      tr: "Tek cümlelik Türkçe açıklama.",
      en: "One-sentence English description.",
    },
    url: "https://oyunun-linki",
  },
```

> Dikkat: `{ tr: "...", en: "..." }` kalıbındaki süslü parantezleri ve satır sonundaki virgülleri silmeyin; biri eksik olursa sayfa boş görünür.

### Açıklaması "Yakında" olan bir oyunu güncellemek
İlgili oyunun `desc: SOON` satırını yukarıdaki gibi `{ tr: "...", en: "..." }` ile değiştirin; isterseniz `genre` da ekleyin.

### CV butonunu açmak
1. PDF'leri `assets/cv/` klasörüne koyun (ör. `Oktay_Urekli_CV_TR.pdf`, `Oktay_Urekli_CV_EN.pdf`).
2. `SITE.cv` içindeki yolları doldurun:

```js
  cv: {
    tr: "assets/cv/Oktay_Urekli_CV_TR.pdf",
    en: "assets/cv/Oktay_Urekli_CV_EN.pdf",
  },
```

Yol boş bırakılırsa buton pasif görünür ve "Yakında" yazar.

## Önbellek (sürüm numarası)

`index.html`'in sonunda dosyalar `js/data.js?v=10` gibi bir sürüm numarasıyla yüklenir. `js/` veya `css/` içindeki bir dosyayı değiştirdiğinizde bu sayıyı (üç yerde) bir artırın; böylece ziyaretçilerin tarayıcısı önbellekteki eski dosyayı kullanmaz.

## Büyük/küçük harf

CSS metinleri büyük harfe çevirmez; büyük/küçük harf `data.js`'te nasıl yazıldıysa sitede de öyle görünür.

## Yerelde önizleme

Klasörde bir terminal açıp şunu çalıştırın, ardından tarayıcıda `http://localhost:8000` adresini açın:

```
python3 -m http.server 8000
```

## Lisanslar

İkonlar: [Font Awesome Free 6.5.2](https://fontawesome.com/license/free) (CC BY 4.0). Fontlar: Shantell Sans ve Nunito (Google Fonts, SIL OFL).
