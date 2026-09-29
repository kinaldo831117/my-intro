import { sectionHeader } from "../components/sectionHeader.js";

export function renderLearning({ learning }) {
  const items = learning.items
    .map(
      (item, i) => `
        <li class="reveal" style="--delay: ${(i % 3) * 80}ms">
          <div class="card learning-card">
            <span class="learning-card__num">${String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 class="learning-card__name">${item.name}</h3>
              <p class="learning-card__note">${item.note}</p>
            </div>
            <span class="learning-card__status" aria-hidden="true"></span>
          </div>
        </li>`
    )
    .join("");

  return `
    <section class="section section--alt" id="learning">
      <div class="container">
        ${sectionHeader(learning)}
        <ul class="learning__grid">${items}</ul>
      </div>
    </section>`;
}
