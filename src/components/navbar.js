// 상단 고정 메뉴 (데스크톱 + 모바일 햄버거 메뉴)
export function renderNavbar({ name, navigation }) {
  const links = navigation
    .map(
      (item) =>
        `<li><a class="navbar__link" href="#${item.id}" data-nav-link="${item.id}">${item.label}</a></li>`
    )
    .join("");

  return `
    <header class="navbar" data-navbar>
      <nav class="navbar__inner container" aria-label="주요 메뉴">
        <a class="navbar__logo" href="#home">
          <span class="navbar__logo-mark" aria-hidden="true"></span>
          <span>${name}</span>
        </a>
        <button class="navbar__toggle" type="button" aria-expanded="false" aria-controls="navbar-menu" aria-label="메뉴 열기" data-nav-toggle>
          <span></span><span></span>
        </button>
        <div class="navbar__menu" id="navbar-menu">
          <ul class="navbar__links">${links}</ul>
        </div>
      </nav>
    </header>`;
}

export function initNavbar() {
  const navbar = document.querySelector("[data-navbar]");
  const toggle = navbar.querySelector("[data-nav-toggle]");
  const links = [...navbar.querySelectorAll("[data-nav-link]")];
  const sections = links.map((link) => document.getElementById(link.dataset.navLink)).filter(Boolean);

  // 모바일 메뉴 열기/닫기
  const setOpen = (open) => {
    navbar.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "메뉴 닫기" : "메뉴 열기");
  };

  toggle.addEventListener("click", () => setOpen(!navbar.classList.contains("is-open")));
  navbar.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (event) => event.key === "Escape" && setOpen(false));
  window.matchMedia("(min-width: 861px)").addEventListener("change", () => setOpen(false));

  // 스크롤 시 배경 표시 + 현재 섹션 메뉴 강조
  const update = () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 12);

    const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    const marker = window.innerHeight * 0.4;
    let currentId = null;
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top <= marker) currentId = section.id;
    });
    if (atBottom && sections.length) currentId = sections[sections.length - 1].id;

    links.forEach((link) => {
      const active = link.dataset.navLink === currentId;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });
  };

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    },
    { passive: true }
  );
  window.addEventListener("resize", update);
  update();
}
