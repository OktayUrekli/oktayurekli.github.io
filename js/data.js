// =====================================================================
//  SİTE VERİLERİ — siteyi güncellemek için genelde sadece bu dosyayı
//  düzenlemeniz yeterli. Her metnin "tr" ve "en" karşılığı vardır.
// =====================================================================

const SITE = {
  name: "Oktay Ürekli",
  title: { tr: "Jr. Oyun Geliştirici | Unity", en: "Jr. Game Developer | Unity" },
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
    date: "10/2025 – 10/2026",
    stats: [
      { value: "10", label: { tr: "oyunu baştan sona geliştirdim", en: "games built end to end" } },
      { value: "30+", label: { tr: "oyunda revizyon", en: "games revised" } },
    ],
  },
];

const EDUCATION = [
  {
    role: { tr: "Bilgisayar Mühendisliği", en: "Computer Engineering" },
    place: { tr: "Erciyes Üniversitesi", en: "Erciyes University" },
    date: "2020 – 2025",
  },
];

// ---------------------------------------------------------------------
//  PROJELER — sitede bu sırayla (yukarıdan aşağı) görünür.
//  Yeni oyun eklemek için listenin başına yeni bir blok ekleyin.
//  logo: assets/logos/ içindeki dosya. Boş bırakılırsa geçici görsel çıkar.
//  genre: boş bırakılabilir.
// ---------------------------------------------------------------------
const BAMBU = "https://bambugames.com.tr/";
const SOON = { tr: "Yakında açıklama eklenecek.", en: "Description coming soon." };

const PROJECTS = [
  {
    name: "Tap Target",
    logo: "assets/logos/tap-target.webp",
    genre: { tr: "2D Arcade – PC", en: "2D Arcade – PC" },
    desc:{
      tr: "Refleks-Zamanlama tabanlı,1-6 kişilik arcade oyun",
      en: "Reflex- and timing-based arcade game for 1–6 players",
    },
    url: BAMBU,
  },
  {
    name: "Block Rain",
    logo: "assets/logos/block-rain.webp",
    genre: { tr: "2D Arcade – PC", en: "2D Arcade – PC" },
    desc: {
      tr: "Tetris'ten ilham alan, 1–6 oyunculu arcade oyun",
      en: "An arcade game for 1–6 players, inspired by Tetris",
    },
    url: BAMBU,
  },
  {
    name: "Basket Go",
    logo: "assets/logos/basket-go.webp",
    genre: { tr: "2D Arcade Spor – PC", en: "2D Arcade Sports – PC" },
    desc: {
      tr: "Dunk Hit'ten ilham alan, 1–6 oyunculu yerel arcade basketbol oyunu.",
      en: "Local arcade basketball for 1–6 players, inspired by Dunk Hit.",
    },
    url: BAMBU,
  },
  {
    name: "Dots And Boxes",
    logo: "assets/logos/dots-and-boxes.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Klasik Dots And Boxes oyunu uyarlaması",
      en: "An adaptation of the classic Dots and Boxes game",
    },
    url: BAMBU,
  },
  {
    name: "What Am I?",
    logo: "assets/logos/what-am-i.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Dijital oyun masasında hayalet ekran ile, solo(1vs1) ve takımlı(2vs2) olarak oynanan, Ben Kimim? oyununun uyarlaması",
      en: "An adaptation of the game Who Am I?—played either solo (1v1) or in teams (2v2)—featuring a ghost screen on a digital game table.",
    },
    url: BAMBU,
  },
  {
    name: "Carrom Bambu",
    logo: "assets/logos/carrom-bambu.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Fizik tabanlı nişan ve vuruş mekanikleriyle 1v1 / 2v2 Carrom.",
      en: "1v1 / 2v2 Carrom with physics-based aiming and shooting.",
    },
    url: BAMBU,
  },
  {
    name: "Tombala Bambu",
    logo: "assets/logos/tombala-bambu.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Geleneksel Tombala'nın 2–6 oyunculu dijital uyarlaması.",
      en: "A 2–6 player digital take on traditional Tombala.",
    },
    url: BAMBU,
  },
  {
    name: "Wing Party",
    logo: "assets/logos/wing-party.webp",
    genre: { tr: "2D Casual – PC", en: "2D Casual – PC" },
    desc: {
      tr: "Güçlendirmeler ve dinamik zorlukla takım bazlı Flappy Bird tarzı oyun.",
      en: "Team-based Flappy Bird-style game with power-ups and dynamic difficulty.",
    },
    url: BAMBU,
  },
  {
    name: "Pin Pin",
    logo: "assets/logos/pin-pin.webp",
    genre: { tr: "2D Arcade – PC", en: "2D Arcade – PC" },
    desc: {
      tr: "2–6 oyuncunun birlikte oynadığı Refleks & Zamanlama türünde arcade takım oyunu",
      en: "An arcade team game of the reflex & timing genre, played by 2–6 players together",
    },
    url: BAMBU,
  },
  {
    name: "8 Ball Pool",
    logo: "assets/logos/8-ball-pool.webp",
    genre: { tr: "3D Spor Simülasyonu – PC", en: "3D Sports Simulation – PC" },
    desc: {
      tr: "Gerçekçi top çarpışmaları ve masa fiziğine sahip bilardo oyunu.",
      en: "Billiards with realistic ball collisions and table physics.",
    },
    url: BAMBU,
  },
  {
    name: "Soul Land: Escaping Adventure",
    logo: "assets/logos/slea.webp",
    genre: { tr: "3D Dungeon Crawler – PC / Web", en: "3D Dungeon Crawler – PC / Web" },
    desc: {
      tr: "10 bölüm ve 14 NPC'li, yakın ve menzilli dövüşlü izometrik aksiyon oyunu.",
      en: "Isometric action game with 10 levels, 14 NPCs, melee and ranged combat.",
    },
    url: "https://oktay-urekli.itch.io/slea",
  },
  {
    name: "Anomaly Rocket",
    logo: "assets/logos/anomaly-rocket.webp",
    genre: { tr: "2.5D Parkur Platform – PC / Web", en: "2.5D Parkour Platformer – PC / Web" },
    desc: {
      tr: "7 farklı roket ve 10 bölümden oluşan platform oyunu.",
      en: "Level-based platformer with 7 rockets and 10 levels.",
    },
    url: "https://oktay-urekli.itch.io/anomaly-rocket",
  },
];

// ---------------------------------------------------------------------
//  ARAYÜZ METİNLERİ
// ---------------------------------------------------------------------
const UI_TEXT = {
  navExperience: { tr: "Deneyim & Eğitim", en: "Experience & Education" },
  cvDownload: { tr: "CV İndir", en: "Download CV" },
  cvSoon: { tr: "CV · Yakında", en: "CV · Soon" },
  experience: { tr: "Deneyim", en: "Experience" },
  education: { tr: "Eğitim", en: "Education" },
  projects: { tr: "Projeler", en: "Projects" },
  logoSoon: { tr: "logo yakında", en: "logo soon" },
};
