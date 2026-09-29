# 기성훈 개인 홈페이지

AI · 드론 · 새로운 도전을 소개하는 개인 브랜딩 홈페이지입니다.
[Vite](https://vite.dev)와 순수 HTML / CSS / JavaScript로 만들었습니다.

## 실행 방법

처음 한 번만 설치:

```bash
npm install
```

개발 서버 실행 (수정하면 브라우저가 자동으로 새로고침됩니다):

```bash
npm run dev
```

브라우저에서 **http://localhost:5173** 으로 접속하세요. 끄려면 터미널에서 `Ctrl + C`.

배포용 파일 만들기:

```bash
npm run build     # dist 폴더가 만들어집니다
npm run preview   # 만들어진 결과를 http://localhost:4173 에서 확인
```

## ✏️ 내용 수정하기 — `src/data/profile.js` 하나만 보면 됩니다

| 바꾸고 싶은 것 | `profile.js` 안의 위치 |
| --- | --- |
| 이름 | `name` |
| 첫 화면 문구 · 버튼 | `hero` |
| 자기소개 | `about` (`lead`, `story`, `keywords`) |
| 경력 | `experience.items` |
| 관심 분야 | `interests.items` (아이콘: `ai`, `drone`, `platform`, `rocket`) |
| 비전 | `vision` |
| 배우고 있는 것 | `learning.items` |
| 이메일 · LinkedIn · GitHub | `contact.email`, `contact.linkedin`, `contact.github` |
| 사진 | `photo.src` |

- 글자는 따옴표 `"..."` 안만 바꾸세요.
- 줄바꿈은 `\n` 을 넣으면 됩니다.
- 항목을 늘리려면 `{ ... },` 블록을 통째로 복사해서 붙여넣으세요.
- 연락처를 비워두면(`""`) "준비 중" 버튼으로 표시되고, 값을 넣으면 실제 링크가 됩니다.

## 📷 프로필 사진 넣기

1. 사진 파일을 `public/images/` 폴더에 넣습니다. (예: `profile.jpg`, 세로 4:5 비율 추천)
2. `src/data/profile.js` 에서 다음처럼 바꿉니다.

```js
photo: {
  src: "images/profile.jpg",
  alt: "기성훈 프로필 사진",
},
```

## 🎨 색상 바꾸기

`src/styles/variables.css` 의 `--color-accent` 한 줄을 바꾸면 사이트 전체의 포인트 색상이 바뀝니다.

## 폴더 구조

```
my-intro/
├─ index.html              페이지 뼈대
├─ public/
│  ├─ favicon.svg          브라우저 탭 아이콘
│  └─ images/              ← 프로필 사진을 넣는 곳
└─ src/
   ├─ data/profile.js      ← 모든 문구와 개인정보 (여기만 수정하면 됨)
   ├─ main.js              섹션들을 조립하는 파일
   ├─ components/          메뉴 · 아이콘 · 사진 · 섹션 제목
   ├─ sections/            화면 섹션별 파일 (hero, about, experience …)
   ├─ styles/              디자인(CSS) 파일
   └─ utils/               스크롤 애니메이션 등 보조 기능
```
