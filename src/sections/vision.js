import { lines } from "../utils/text.js";

export function renderVision({ vision }) {
  const title = vision.highlight
    ? vision.title.replace(vision.highlight, `<span class="text-gradient">${vision.highlight}</span>`)
    : vision.title;

  // 경험 + 기술 = 가치 형태의 한 줄 공식
  const formula = vision.formula
    .map((part, i) => {
      const isLast = i === vision.formula.length - 1;
      const op = i === 0 ? "" : `<span class="formula__op" aria-hidden="true">${isLast ? "=" : "+"}</span>`;
      return `${op}<span class="formula__item ${isLast ? "formula__item--result" : ""}">${part}</span>`;
    })
    .join("");

  const steps = vision.steps
    .map(
      (step, i) => `
        <li class="reveal" style="--delay: ${i * 90}ms">
          <div class="card vision-step">
            <p class="vision-step__num">Step ${String(i + 1).padStart(2, "0")}</p>
            <h3 class="vision-step__title">${step.title}</h3>
            <p class="vision-step__desc">${step.description}</p>
          </div>
        </li>`
    )
    .join("");

  return `
    <section class="section vision" id="vision">
      <div class="vision__bg" aria-hidden="true"></div>
      <div class="container">
        <p class="eyebrow reveal">${vision.eyebrow}</p>
        <h2 class="vision__title reveal">${title}</h2>
        <div class="formula reveal">${formula}</div>
        <div class="vision__text">
          <p class="reveal">${lines(vision.text)}</p>
          <p class="vision__statement reveal">${lines(vision.statement)}</p>
        </div>
        <ol class="vision__steps">${steps}</ol>
      </div>
    </section>`;
}
