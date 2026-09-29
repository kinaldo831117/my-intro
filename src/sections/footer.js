export function renderFooter({ name, footerNote }) {
  return `
    <footer class="footer">
      <div class="container footer__inner">
        <p>© ${new Date().getFullYear()} ${name}. All rights reserved.</p>
        <p>${footerNote}</p>
      </div>
    </footer>`;
}
