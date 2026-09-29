import { icon } from "../components/icons.js";
import { lines } from "../utils/text.js";

// 배경의 추상 그래픽: 궤도 + 비행 경로(웨이포인트)
const heroGraphic = `
  <svg class="hero__graphic" viewBox="0 0 600 600" fill="none">
    <circle cx="300" cy="300" r="280" class="hero__ring" />
    <circle cx="300" cy="300" r="210" class="hero__ring hero__ring--dashed" />
    <circle cx="300" cy="300" r="140" class="hero__ring" />
    <circle cx="300" cy="300" r="70" class="hero__ring hero__ring--dashed" />
    <path d="M300 10v580M10 300h580" class="hero__axis" />
    <polyline points="110,390 200,260 320,310 420,180 500,230" class="hero__path" />
    <g class="hero__waypoints">
      <circle cx="110" cy="390" r="5" /><circle cx="200" cy="260" r="5" />
      <circle cx="320" cy="310" r="5" /><circle cx="420" cy="180" r="5" />
      <circle cx="500" cy="230" r="5" />
    </g>
    <g class="hero__spin"><circle cx="300" cy="20" r="5" class="hero__satellite" /></g>
    <g class="hero__spin hero__spin--slow"><circle cx="300" cy="510" r="3.5" class="hero__satellite hero__satellite--dim" /></g>
  </svg>`;

export function renderHero({ name, hero }) {
  const tagline = hero.tagline.split("×").join('<span class="hero__times">×</span>');

  return `
    <section class="hero" id="home">
      <div class="hero__bg" aria-hidden="true">
        <div class="hero__grid"></div>
        <div class="hero__glow"></div>
        <div class="hero__glow hero__glow--secondary"></div>
        ${heroGraphic}
      </div>

      <div class="container">
        <div class="hero__content">
          <p class="hero__badge reveal"><span class="hero__badge-dot"></span>${hero.badge}</p>
          <h1 class="hero__title reveal" style="--delay: 80ms">${name}</h1>
          <p class="hero__tagline reveal" style="--delay: 160ms">${tagline}</p>
          <p class="hero__desc reveal" style="--delay: 240ms">${lines(hero.description)}</p>
          <div class="hero__actions reveal" style="--delay: 320ms">
            <a class="btn btn--primary" href="${hero.primaryButton.href}">
              ${hero.primaryButton.label} ${icon("arrowRight", "btn__icon")}
            </a>
            <a class="btn btn--ghost" href="${hero.secondaryButton.href}">
              ${hero.secondaryButton.label}
            </a>
          </div>
        </div>
      </div>

      <a class="hero__scroll" href="#about" aria-label="아래로 스크롤">
        <span>Scroll</span><i></i>
      </a>
    </section>`;
}
