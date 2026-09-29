// 스타일
import "./styles/variables.css";
import "./styles/base.css";
import "./styles/components.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/sections.css";

// 내 정보 (문구 수정은 src/data/profile.js 에서)
import { profile } from "./data/profile.js";

// 화면 조각들
import { renderNavbar, initNavbar } from "./components/navbar.js";
import { renderHero } from "./sections/hero.js";
import { renderAbout } from "./sections/about.js";
import { renderExperience } from "./sections/experience.js";
import { renderInterests } from "./sections/interests.js";
import { renderVision } from "./sections/vision.js";
import { renderLearning } from "./sections/learning.js";
import { renderContact, initContact } from "./sections/contact.js";
import { renderFooter } from "./sections/footer.js";
import { initReveal } from "./utils/reveal.js";

document.title = profile.siteTitle;

document.querySelector("#app").innerHTML = `
  ${renderNavbar(profile)}
  <main>
    ${renderHero(profile)}
    ${renderAbout(profile)}
    ${renderExperience(profile)}
    ${renderInterests(profile)}
    ${renderVision(profile)}
    ${renderLearning(profile)}
    ${renderContact(profile)}
  </main>
  ${renderFooter(profile)}
`;

initNavbar();
initContact();
initReveal();
