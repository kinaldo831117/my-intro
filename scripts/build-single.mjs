// dist 폴더의 결과물을 CSS·JS가 모두 들어간 index.html 한 파일로 합칩니다.
// 결과: standalone/index.html (더블클릭으로 바로 열 수 있음)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";

const dist = (file) => new URL(`../dist/${file.replace(/^\.\//, "")}`, import.meta.url);
let html = readFileSync(dist("index.html"), "utf8");

// CSS 파일 → <style> (인터넷 글꼴 링크는 그대로 둠)
html = html.replace(/<link rel="stylesheet"[^>]*href="(\.\/[^"]+)"[^>]*>/g, (_, href) => {
  return `<style>\n${readFileSync(dist(href), "utf8")}\n</style>`;
});

// JS 파일 → <script>
html = html.replace(/<script type="module"[^>]*src="([^"]+)"[^>]*><\/script>/g, (_, src) => {
  const js = readFileSync(dist(src), "utf8").replace(/<\/script/gi, "<\\/script");
  return `<script type="module">\n${js}\n</script>`;
});

// 파비콘 → 파일 안에 포함
html = html.replace(/href="\.?\/?favicon\.svg"/, () => {
  const svg = readFileSync(dist("favicon.svg"), "utf8");
  return `href="data:image/svg+xml,${encodeURIComponent(svg)}"`;
});

mkdirSync(new URL("../standalone/", import.meta.url), { recursive: true });
writeFileSync(new URL("../standalone/index.html", import.meta.url), html);
console.log("✓ standalone/index.html 생성 완료");
