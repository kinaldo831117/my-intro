import { lines } from "../utils/text.js";

// 각 섹션 상단의 작은 라벨 + 큰 제목 + 설명
export function sectionHeader({ eyebrow, title, description, align = "left" }) {
  return `
    <div class="section-header section-header--${align} reveal">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ""}
      <h2 class="section-title">${title}</h2>
      ${description ? `<p class="section-desc">${lines(description)}</p>` : ""}
    </div>`;
}
