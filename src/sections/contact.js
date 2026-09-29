import { icon } from "../components/icons.js";
import { lines } from "../utils/text.js";

export function renderContact({ contact }) {
  const links = [
    { label: "Email", icon: "mail", url: contact.email ? `mailto:${contact.email}` : "" },
    { label: "LinkedIn", icon: "linkedin", url: contact.linkedin },
    { label: "GitHub", icon: "github", url: contact.github },
  ];

  const buttons = links
    .map((link) => {
      const content = `${icon(link.icon, "btn__icon-left")}${link.label}`;
      if (!link.url) {
        // 주소가 아직 없으면 "준비 중" 버튼으로 표시
        return `<button class="btn btn--ghost" type="button" data-placeholder-link="${link.label}">
                  ${content}<span class="btn__badge">준비 중</span>
                </button>`;
      }
      const external = link.url.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
      return `<a class="btn btn--ghost" href="${link.url}"${external}>${content}</a>`;
    })
    .join("");

  return `
    <section class="section contact" id="contact">
      <div class="container">
        <div class="contact__panel reveal">
          <h2 class="contact__title">${contact.title}</h2>
          <p class="contact__desc">${lines(contact.description)}</p>
          <div class="contact__links">${buttons}</div>
          <p class="contact__hint" data-contact-hint aria-live="polite"></p>
        </div>
      </div>
    </section>`;
}

export function initContact() {
  const hint = document.querySelector("[data-contact-hint]");
  document.querySelectorAll("[data-placeholder-link]").forEach((button) => {
    button.addEventListener("click", () => {
      hint.textContent = `${button.dataset.placeholderLink} 링크는 아직 준비 중입니다.`;
    });
  });
}
