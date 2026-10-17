// =====================================================================
//  SİTE VERİLERİ — siteyi güncellemek için genelde sadece bu dosyayı
//  düzenlemeniz yeterli. Her metnin "tr" ve "en" karşılığı vardır.
//  Kalıp:  alan: { tr: "Türkçe metin", en: "English text" },
// =====================================================================

const SITE = {
  name: "Oktay Ürekli",
  title: { tr: "Junior Oyun Geliştirici · Unity", en: "Junior Game Developer · Unity" },
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
      tr: "Dijital oyun masası platformu için çok oyunculu oyunlar geliştirdim; mevcut oyunlarda performans, animasyon ve oyun hissiyatı iyileştirmeleri yaptım.",
      en: "Built multiplayer games for a digital game-table platform and improved performance, animation and game feel across the existing catalogue.",
    },
    stats: [
      { value: "10", label: { tr: "uçtan uca geliştirilen oyun", en: "games built end-to-end" } },
      { value: "30+", label: { tr: "revize edilen oyun", en: "games revised & improved" } },
    ],
  },
];

const EDUCATION = [
  {
    role: { tr: "Bilgisayar Mühendisliği, Lisans", en: "B.Sc. Computer Engineering" },
    place: { tr: "Erciyes Üniversitesi", en: "Erciyes University" },
    date: { tr: "2020 – 2025", en: "2020 – 2025" },
  },
];

// Yetenekler — eğitim kutusunun altında etiketler halinde görünür.
const SKILLS = [
  "Unity", "C#", "OOP", "SOLID",
  { tr: "Oyun Mekanikleri", en: "Gameplay Mechanics" },
  { tr: "UI Geliştirme", en: "UI Development" },
  { tr: "Performans Optimizasyonu", en: "Performance Optimization" },
  "Game Feel",
  "Git / GitHub", "Trello", "Notion",
];

// ---------------------------------------------------------------------
//  PROJELER — sitede bu sırayla (yukarıdan aşağı) görünür.
//  Yeni oyun eklemek için listenin başına yeni bir blok ekleyin.
//  logo : assets/logos/ içindeki dosya. Boş bırakılırsa geçici görsel çıkar.
//  genre: tür ve platform; istemezseniz null yazın.
//  org  : kartın altındaki etiket (şirket adı veya proje türü).
// ---------------------------------------------------------------------
const BAMBU = "https://bambugames.com.tr/";
const BAMBU_ORG = "Bambu Games";
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
    org: BAMBU_ORG,
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
    org: BAMBU_ORG,
  },
  {
    name: "Basket Go",
    logo: "assets/logos/basket-go.webp",
    genre: { tr: "2D Arcade Spor – PC", en: "2D Arcade Sports – PC" },
    desc: {
      tr: "Dunk Hit'ten ilham alan, 1–6 oyunculu yerel arcade basketbol oyunu.",
      en: "Dunk Hit-inspired local arcade basketball for 1–6 players.",
    },
    url: BAMBU,
    org: BAMBU_ORG,
  },
  {
    name: "Dots And Boxes",
    logo: "assets/logos/dots-and-boxes.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Klasik Dots and Boxes oyununun dijital uyarlaması.",
      en: "A digital adaptation of the classic Dots and Boxes.",
    },
    url: BAMBU,
    org: BAMBU_ORG,
  },
  {
    name: "What Am I?",
    logo: "assets/logos/what-am-i.webp",
    genre: { tr: "2D Parti Oyunu – PC", en: "2D Party Game – PC" },
    desc: {
      tr: "\"Ben Kimim?\" oyununun dijital oyun masası uyarlaması; hayalet ekranlı 1v1 ve 2v2 modları.",
      en: "A digital game-table take on \"Who Am I?\" with ghost-screen 1v1 and 2v2 modes.",
    },
    url: BAMBU,
    org: BAMBU_ORG,
  },
  {
    name: "Carrom Bambu",
    logo: "assets/logos/carrom-bambu.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Resmi kurallara uygun, fizik tabanlı nişan ve vuruş mekanikli 1v1 / 2v2 Carrom.",
      en: "Official-rules Carrom with physics-based aiming and shooting, in 1v1 / 2v2.",
    },
    url: BAMBU,
    org: BAMBU_ORG,
  },
  {
    name: "Tombala Bambu",
    logo: "assets/logos/tombala-bambu.webp",
    genre: { tr: "2D Klasik Masa Oyunu – PC", en: "2D Classic Board Game – PC" },
    desc: {
      tr: "Geleneksel Tombala'nın 2–6 oyunculu dijital uyarlaması.",
      en: "A 2–6 player digital adaptation of traditional Tombala.",
    },
    url: BAMBU,
    org: BAMBU_ORG,
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
    org: BAMBU_ORG,
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
    org: BAMBU_ORG,
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
    org: BAMBU_ORG,
  },
  {
    name: "Soul Land: Escaping Adventure",
    logo: "assets/logos/slea.webp",
    genre: { tr: "3D Dungeon Crawler – PC / Web", en: "3D Dungeon Crawler – PC / Web" },
    desc: {
      tr: "10 bölüm ve 14 NPC içeren, yakın ve menzilli dövüşlü izometrik aksiyon oyunu.",
      en: "Isometric action game with 10 levels, 14 NPCs, and melee and ranged combat.",
    },
    url: "https://oktay-urekli.itch.io/slea",
    org: { tr: "Bitirme Projesi", en: "Graduation Project" },
  },
  {
    name: "Anomaly Rocket",
    logo: "assets/logos/anomaly-rocket.webp",
    genre: { tr: "2.5D Parkur Platform – PC / Web", en: "2.5D Parkour Platformer – PC / Web" },
    desc: {
      tr: "7 farklı roket ve 10 bölümden oluşan, bölüm tabanlı platform oyunu.",
      en: "Level-based platformer with 7 unique rockets and 10 levels.",
    },
    url: "https://oktay-urekli.itch.io/anomaly-rocket",
    org: { tr: "Üniversite Projesi", en: "University Project" },
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
  skills: { tr: "Yetenekler", en: "Skills" },
  projects: { tr: "Projeler", en: "Projects" },
  projectsCount: { tr: "{n} oyun · yeniden eskiye", en: "{n} games · newest first" },
  logoSoon: { tr: "logo yakında", en: "logo soon" },
};
