import { sectionHeader } from "../components/sectionHeader.js";
import { profilePhoto } from "../components/profilePhoto.js";
import { lines } from "../utils/text.js";

export function renderAbout({ name, photo, about }) {
  const story = about.story
    .map((text, i) => `<p class="reveal" style="--delay: ${i * 80}ms">${text}</p>`)
    .join("");

  return `
    <section class="section about" id="about">
      <div class="container about__grid">
        <div class="about__media reveal">
          ${profilePhoto({ photo, name })}
        </div>

        <div class="about__body">
          ${sectionHeader(about)}
          <p class="about__lead reveal">${lines(about.lead)}</p>
          <div class="about__story">${story}</div>
          <ul class="about__keywords reveal" aria-label="핵심 키워드">
            ${about.keywords.map((word) => `<li class="tag">${word}</li>`).join("")}
          </ul>
        </div>
      </div>
    </section>`;
}
