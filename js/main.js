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

  function renderTimeline(containerId, items) {
    const box = document.getElementById(containerId);
    box.replaceChildren();
    items.forEach((item) => {
      const row = el("div", "entry");
      const head = el("div", "entry__head");
      head.append(el("h3", "entry__role", t(item.role)), el("span", "entry__date", t(item.date)));
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
        item.stats.forEach((s) => {
          const stat = el("div", "stat");
          stat.append(el("strong", "stat__value", s.value), el("span", "stat__label", t(s.label)));
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
    document.getElementById("projects-sub").textContent = t(UI_TEXT.projectsCount).replace("{n}", PROJECTS.length);
    const list = document.getElementById("project-list");
    list.replaceChildren();
    PROJECTS.forEach((p) => {
      const card = el("a", "card reveal");
      card.href = p.url;
      card.target = "_blank";
      card.rel = "noopener";

      const logo = el("div", "card__logo");
      if (p.logo) {
        const img = el("img");
        img.src = p.logo;
        img.alt = p.name;
        img.loading = "lazy";
        img.width = 360;
        img.height = 360;
        logo.append(img);
      } else {
        logo.classList.add("card__logo--empty");
        logo.append(el("span", "card__initials", initials(p.name)), el("span", "card__soon", t(UI_TEXT.logoSoon)));
      }

      const info = el("div", "card__info");
      // Oyun adları İngilizce: büyük harfe çevrilirken "WİNG" yerine "WING" olsun
      const name = el("h3", "card__name", p.name);
      name.lang = "en";
      info.append(name);
      if (p.genre) info.append(el("p", "card__genre", t(p.genre)));
      info.append(el("p", "card__desc", t(p.desc)));

      card.append(logo, info);
      list.append(card);
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

  let firstRender = true;
  function render() {
    renderStatic();
    renderHero();
    renderTimeline("experience-list", EXPERIENCE);
    renderTimeline("education-list", EDUCATION);
    renderProjects();
    // Dil değişiminde yeniden çizilen kartlar tekrar animasyonla belirmesin
    if (!firstRender) document.querySelectorAll(".reveal").forEach((n) => n.classList.add("is-visible"));
    firstRender = false;
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
})();
