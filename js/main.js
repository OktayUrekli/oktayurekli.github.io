(function () {
  const LANGS = ["tr", "en"];
  const STORAGE_KEY = "lang";

  function initialLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (LANGS.includes(saved)) return saved;
    } catch (e) { /* depolama kapalı olabilir */ }
    return (navigator.language || "").toLowerCase().startsWith("tr") ? "tr" : "en";
  }

  let lang = initialLang();

  // { tr, en } nesnesinden aktif dildeki metni döndürür; düz metni olduğu gibi bırakır.
  const t = (v) => (v && typeof v === "object" ? v[lang] : v) || "";

  function el(tag, cls, text) {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text != null) node.textContent = text;
    return node;
  }

  function renderHero() {
    document.getElementById("hero-name").textContent = SITE.name;
    document.getElementById("hero-title").textContent = t(SITE.title);

    const email = document.getElementById("hero-email");
    email.href = "mailto:" + SITE.email;
    email.querySelector("span").textContent = SITE.email;

    document.getElementById("link-linkedin").href = SITE.links.linkedin;
    document.getElementById("link-github").href = SITE.links.github;
    document.getElementById("link-itch").href = SITE.links.itch;

    const cv = document.getElementById("cv-btn");
    const file = SITE.cv[lang];
    if (file) {
      cv.href = file;
      cv.setAttribute("download", "");
      cv.classList.remove("is-disabled");
      cv.removeAttribute("aria-disabled");
      cv.querySelector("span").textContent = t(UI_TEXT.cvDownload);
    } else {
      cv.removeAttribute("href");
      cv.removeAttribute("download");
      cv.classList.add("is-disabled");
      cv.setAttribute("aria-disabled", "true");
      cv.querySelector("span").textContent = t(UI_TEXT.cvSoon);
    }
  }

  // "Speed/Power" tarzı bölmeli çubuk: her oyun bir bölme (14'ten büyük sayılarda
  // bir bölme = 2 oyun), sonda gelişim payı için 2 boş bölme.
  function meter(value, index) {
    const v = parseInt(value, 10) || 0;
    const lit = Math.min(v > 14 ? Math.round(v / 2) : v, 20);
    const bar = el("span", "meter meter--" + (index % 2 ? "pink" : "mint"));
    bar.setAttribute("aria-hidden", "true");
    for (let k = 0; k < lit + 2; k++) {
      const seg = el("i", k < lit ? "is-lit" : null);
      seg.style.setProperty("--i", k);
      bar.append(seg);
    }
    return bar;
  }

  function renderTimeline(containerId, items) {
    const box = document.getElementById(containerId);
    box.replaceChildren();
    items.forEach((item) => {
      const row = el("div", "entry");
      const head = el("div", "entry__head");
      head.append(el("h4", "entry__role", t(item.role)), el("span", "entry__date", t(item.date)));
      row.append(head);

      const placeName = t(item.place);
      if (item.url) {
        const a = el("a", "entry__place", placeName);
        a.href = item.url;
        a.target = "_blank";
        a.rel = "noopener";
        row.append(a);
      } else {
        row.append(el("p", "entry__place", placeName));
      }

      if (item.summary) row.append(el("p", "entry__summary", t(item.summary)));

      if (item.stats && item.stats.length) {
        const stats = el("div", "stats");
        item.stats.forEach((s, j) => {
          const stat = el("div", "stat");
          stat.append(el("strong", "stat__value", s.value), el("span", "stat__label", t(s.label)), meter(s.value, j));
          stats.append(stat);
        });
        row.append(stats);
      }
      box.append(row);
    });
  }

  function initials(name) {
    return name.split(/[\s:]+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase();
  }

  function renderProjects() {
    const list = document.getElementById("project-list");
    list.replaceChildren();
    // Kartlar ikişerli satırlara dizilir (masaüstünde 2 sütun)
    let row = null;
    PROJECTS.forEach((p, i) => {
      if (i % 2 === 0) {
        row = el("div", "project-row");
        list.append(row);
      }
      const card = el("a", "card reveal");
      card.href = p.url;
      card.target = "_blank";
      card.rel = "noopener";

      const logo = el("div", "card__logo");
      if (p.logo) {
        const img = el("img");
        img.src = p.logo;
        img.alt = "";   // oyun adı zaten kartın başlığında
        img.loading = "lazy";
        img.width = 360;
        img.height = 360;
        logo.append(img);
      } else {
        logo.classList.add("card__logo--empty");
        logo.append(el("span", "card__initials", initials(p.name)), el("span", "card__soon", t(UI_TEXT.logoSoon)));
      }

      const info = el("div", "card__info");
      // Oyun adları İngilizce: dil etiketi doğru olsun
      const name = el("h3", "card__name", p.name);
      name.lang = "en";
      info.append(name);
      if (p.genre) {
        // "– PC / Web" gibi platform kısmı satır sonunda bölünmesin
        const g = el("p", "card__genre");
        const s = t(p.genre);
        const cut = s.lastIndexOf(" – ");
        if (cut < 0) g.textContent = s;
        else g.append(s.slice(0, cut) + " ", el("span", "card__platform", s.slice(cut + 1)));
        info.append(g);
      }
      // "1–6" gibi sayı aralıkları iki satıra bölünmesin (kelime birleştirici)
      info.append(el("p", "card__desc", t(p.desc).replace(/(\d)–(\d)/g, "$1–\u2060$2")));

      card.append(logo, info);
      row.append(card);
    });
  }

  function renderStatic() {
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(UI_TEXT[node.dataset.i18n]);
    });
    document.querySelectorAll(".lang__btn").forEach((b) => {
      const active = b.dataset.lang === lang;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-pressed", active);
    });
    document.documentElement.lang = lang;
    document.title = t(UI_TEXT.pageTitle);
  }

  function render() {
    renderStatic();
    renderHero();
    renderTimeline("experience-list", EXPERIENCE);
    renderTimeline("education-list", EDUCATION);
    // Dil değişiminde yalnızca daha önce görünmüş kartlar görünür kalsın (tekrar
    // animasyon oynamasın); henüz görünmemiş kartlar ve pencereler sırasını beklesin.
    const oldCards = [...document.querySelectorAll("#project-list .card")];
    const shown = oldCards.map((c) => c.classList.contains("is-visible"));
    if (observer) oldCards.forEach((c) => observer.unobserve(c));
    renderProjects();
    document.querySelectorAll("#project-list .card").forEach((c, i) => { if (shown[i]) c.classList.add("is-visible"); });
    observeReveals();
  }

  // Kaydırınca yumuşakça beliren öğeler
  let observer = null;
  function observeReveals() {
    const nodes = document.querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-visible"));
      return;
    }
    if (!observer) {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        });
      }, { threshold: 0.12 });
    }
    nodes.forEach((n) => observer.observe(n));
  }

  document.querySelectorAll(".lang__btn").forEach((b) => {
    b.addEventListener("click", () => {
      lang = b.dataset.lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* yok say */ }
      safeRender();
    });
  });

  // Belirme animasyonu yalnızca sayfa sorunsuz çizilirse açık kalır; bir hata
  // olursa içerik gizli kalmasın diye animasyon kapatılır.
  function safeRender() {
    try {
      render();
    } catch (e) {
      document.documentElement.classList.remove("reveal-on");
      throw e;
    }
  }

  document.documentElement.classList.add("reveal-on");
  document.getElementById("year").textContent = new Date().getFullYear();
  safeRender();
  window.__rendered = true;   // index.html'deki son güvenlik kontrolü bunu okur
})();
