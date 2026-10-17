// =====================================================================
//  SİTE VERİLERİ — siteyi güncellemek için genelde sadece bu dosyayı
//  düzenlemeniz yeterli. Her metnin "tr" ve "en" karşılığı vardır.
//  Kalıp:  alan: { tr: "Türkçe metin", en: "English text" },
// =====================================================================

const SITE = {
  name: "Oktay Ürekli",
  // Unvan olduğu gibi gösterilir; CSS hiçbir metni büyük harfe çevirmez (Türkçe İ/I karışmasın).
  // "\u00a0" bölünmez boşluktur: "· Unity" önceki kelimeden ayrılıp tek başına alt satıra düşmesin.
  title: { tr: "Junior Oyun Geliştirici\u00a0·\u00a0Unity", en: "Junior Game Developer\u00a0·\u00a0Unity" },
  email: "oktay.u.bm@gmail.com",

  links: {
    linkedin: "https://www.linkedin.com/in/oktay-urekli",
    github: "https://github.com/OktayUrekli",
    itch: "https://oktay-urekli.itch.io/",
  },

  // CV dosyaları hazır olunca assets/cv/ klasörüne koyup yolları yazın.
  // Boş ("") bırakılırsa buton pasif görünür ve "Yakında" yazar.
  cv: {
    tr: "",
    en: "",
  },
};

const EXPERIENCE = [
  {
    role: { tr: "Junior Unity Oyun Geliştirici", en: "Junior Unity Game Developer" },
    place: "Bambu Games",
    url: "https://bambugames.com.tr/",
    date: { tr: "Ekim 2025 – Ekim 2026", en: "Oct 2025 – Oct 2026" },
    summary: {
      tr: "Dijital oyun masası platformu için çok oyunculu oyunlar geliştirdim; mevcut oyunların performansını, animasyonlarını ve oyun hissiyatını iyileştirdim.",
      en: "Built multiplayer games for a digital game-table platform and improved the performance, animation and game feel of existing titles.",
    },
    stats: [
      { value: "10", label: { tr: "yazılımı tek başına geliştirilen oyun", en: "games programmed solo" } },
      { value: "30+", label: { tr: "revize edilip iyileştirilen oyun", en: "games revised & improved" } },
    ],
  },
];

const EDUCATION = [
  {
    role: { tr: "Bilgisayar Mühendisliği, Lisans", en: "B.Sc. in Computer Engineering" },
    place: { tr: "Erciyes Üniversitesi", en: "Erciyes University" },
    date: { tr: "2020 – 2025", en: "2020 – 2025" },
  },
];

// ---------------------------------------------------------------------
//  PROJELER — sitede bu sırayla (yukarıdan aşağı) görünür.
//  Yeni oyun eklemek için listenin başına yeni bir blok ekleyin.
//  logo : assets/logos/ içindeki dosya. Boş bırakılırsa geçici görsel çıkar.
//  genre: tür ve platform; istemezseniz null yazın.
// ---------------------------------------------------------------------
const BAMBU = "https://bambugames.com.tr/";
const SOON = { tr: "Yakında açıklama eklenecek.", en: "Description coming soon." };

const PROJECTS = [
  {
    name: "Tap Target",
    logo: "assets/logos/tap-target.webp",
    genre: { tr: "2D Arcade – PC", en: "2D Arcade – PC" },
    desc: {
      tr: "Refleks ve zamanlamaya dayalı, 1–6 oyunculu arcade oyunu.",
      en: "Reflex- and timing-based arcade game for 1–6 players.",
    },
    url: BAMBU,
  },
  {
    name: "Block Rain",
    logo: "assets/logos/block-rain.webp",
    genre: { tr: "2D Arcade – PC", en: "2D Arcade – PC" },
    desc: {
      tr: "Tetris'ten ilham alan, 1–6 oyunculu arcade blok oyunu.",
      en: "Tetris-inspired arcade block game for 1–6 players.",
    },
    url: BAMBU,
  },
  {
    name: "Basket Go",
    logo: "assets/logos/basket-go.webp",
    genre: { tr: "2D Arcade Spor – PC", en: "2D Arcade Sports – PC" },
    desc: {
      tr: "Dunk Hit'ten ilham alan, 1–6 oyunculu arcade basketbol oyunu.",
      en: "Dunk Hit-inspired arcade basketball game for 1–6 players.",
    },
    url: BAMBU,
  },
  {
    name: "Dots And Boxes",
    logo: "assets/logos/dots-and-boxes.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Klasik Dots and Boxes oyununun dijital uyarlaması.",
      en: "Digital adaptation of the classic Dots and Boxes game.",
    },
    url: BAMBU,
  },
  {
    name: "What Am I?",
    logo: "assets/logos/what-am-i.webp",
    genre: { tr: "2D Parti Oyunu – PC", en: "2D Party Game – PC" },
    desc: {
      tr: "Hayalet ekranlı 1v1 ve 2v2 modlarıyla \"Ben Kimim?\" oyununun dijital uyarlaması.",
      en: "Digital adaptation of \"Who Am I?\" with ghost-screen 1v1 and 2v2 modes.",
    },
    url: BAMBU,
  },
  {
    name: "Carrom Bambu",
    logo: "assets/logos/carrom-bambu.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Resmi kurallara uygun, fizik tabanlı nişan ve vuruş mekaniklerine sahip, 1v1 ve 2v2 modlu Carrom oyunu.",
      en: "Carrom game following official rules, with physics-based aiming and shooting in 1v1 and 2v2 modes.",
    },
    url: BAMBU,
  },
  {
    name: "Tombala Bambu",
    logo: "assets/logos/tombala-bambu.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Geleneksel Tombala'nın 2–6 oyunculu dijital uyarlaması.",
      en: "Digital adaptation of traditional Tombala for 2–6 players.",
    },
    url: BAMBU,
  },
  {
    name: "Wing Party",
    logo: "assets/logos/wing-party.webp",
    genre: { tr: "2D Casual – PC", en: "2D Casual – PC" },
    desc: {
      tr: "Güçlendirmeler ve dinamik zorluk içeren, 2–6 oyunculu takım bazlı Flappy Bird tarzı oyun.",
      en: "Team-based Flappy Bird-style game for 2–6 players with power-ups and dynamic difficulty.",
    },
    url: BAMBU,
  },
  {
    name: "Pin Pin",
    logo: "assets/logos/pin-pin.webp",
    genre: { tr: "2D Arcade – PC", en: "2D Arcade – PC" },
    desc: {
      tr: "Refleks ve zamanlamaya dayalı, 2–6 oyunculu arcade takım oyunu.",
      en: "Reflex- and timing-based arcade team game for 2–6 players.",
    },
    url: BAMBU,
  },
  {
    name: "8 Ball Pool",
    logo: "assets/logos/8-ball-pool.webp",
    genre: { tr: "3D Spor Simülasyonu – PC", en: "3D Sports Simulation – PC" },
    desc: {
      tr: "Gerçekçi top çarpışmaları ve masa fiziğine sahip bilardo simülasyonu.",
      en: "Billiards simulation with realistic ball collisions and table physics.",
    },
    url: BAMBU,
  },
  {
    name: "Soul Land: Escaping Adventure",
    logo: "assets/logos/slea.webp",
    genre: { tr: "3D Dungeon Crawler – PC / Web", en: "3D Dungeon Crawler – PC / Web" },
    desc: {
      tr: "Yakın ve menzilli dövüş sistemine sahip, 10 bölüm ve 14 NPC içeren izometrik aksiyon oyunu.",
      en: "Isometric action game with melee and ranged combat, 10 levels and 14 NPCs.",
    },
    url: "https://oktay-urekli.itch.io/slea",
  },
  {
    name: "Anomaly Rocket",
    logo: "assets/logos/anomaly-rocket.webp",
    genre: { tr: "2.5D Parkur Platform – PC / Web", en: "2.5D Parkour Platformer – PC / Web" },
    desc: {
      tr: "7 farklı roket ve 10 bölüm içeren platform oyunu.",
      en: "Platformer with 7 distinct rockets and 10 levels.",
    },
    url: "https://oktay-urekli.itch.io/anomaly-rocket",
  },
];

// ---------------------------------------------------------------------
//  ARAYÜZ METİNLERİ
// ---------------------------------------------------------------------
const UI_TEXT = {
  pageTitle: { tr: "Oktay Ürekli · Unity Oyun Geliştirici", en: "Oktay Ürekli · Unity Game Developer" },
  navExperience: { tr: "Deneyim & Eğitim", en: "Experience & Education" },
  cvDownload: { tr: "CV İndir", en: "Download CV" },
  cvSoon: { tr: "CV · Yakında", en: "CV · Soon" },
  experience: { tr: "Deneyim", en: "Experience" },
  education: { tr: "Eğitim", en: "Education" },
  projects: { tr: "Projeler", en: "Projects" },
  projectsCount: { tr: "{n} oyun · en yeniden eskiye", en: "{n} games · newest first" },
  logoSoon: { tr: "logo yakında", en: "logo soon" },
};
