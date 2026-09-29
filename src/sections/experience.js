import { sectionHeader } from "../components/sectionHeader.js";

// "20+ Years" 처럼 숫자로 시작하면 숫자 부분을 강조색으로 표시
const formatTitle = (title) => title.replace(/^(\d+\+?)/, '<span class="accent">$1</span>');

export function renderExperience({ experience }) {
  const items = experience.items
    .map(
      (item, i) => `
        <li class="timeline__item ${item.current ? "timeline__item--current" : ""} reveal" style="--delay: ${i * 90}ms">
          <span class="timeline__dot" aria-hidden="true"></span>
          <article class="card timeline__card">
            <p class="timeline__step">
              ${String(i + 1).padStart(2, "0")}
              ${item.current ? '<span class="timeline__now">Now</span>' : ""}
            </p>
            <h3 class="timeline__title">${formatTitle(item.title)}</h3>
            <p class="timeline__subtitle">${item.subtitle}</p>
            <p class="timeline__desc">${item.description}</p>
          </article>
        </li>`
    )
    .join("");

  return `
    <section class="section section--alt" id="experience">
      <div class="container">
        ${sectionHeader(experience)}
        <ol class="timeline">${items}</ol>
      </div>
    </section>`;
}
