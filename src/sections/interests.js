import { sectionHeader } from "../components/sectionHeader.js";
import { icon } from "../components/icons.js";

export function renderInterests({ interests }) {
  const cards = interests.items
    .map(
      (item, i) => `
        <li class="reveal" style="--delay: ${(i % 2) * 100}ms">
          <article class="card interest-card">
            <span class="interest-card__index">${String(i + 1).padStart(2, "0")}</span>
            <div class="interest-card__icon">${icon(item.icon)}</div>
            <h3 class="interest-card__title">${item.title}</h3>
            <p class="interest-card__desc">${item.description}</p>
            <ul class="interest-card__tags">
              ${item.tags.map((tag) => `<li class="tag tag--sm">${tag}</li>`).join("")}
            </ul>
          </article>
        </li>`
    )
    .join("");

  return `
    <section class="section" id="interests">
      <div class="container">
        ${sectionHeader(interests)}
        <ul class="interests__grid">${cards}</ul>
      </div>
    </section>`;
}
