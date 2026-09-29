/* =========================================================
 *  ✏️  내 정보 수정 파일
 *  홈페이지에 보이는 모든 글자는 이 파일 하나에서 수정할 수 있습니다.
 *
 *  - 따옴표("...") 안의 글자만 바꾸세요.
 *  - 줄바꿈이 필요한 곳은 \n 을 넣으면 됩니다.
 *  - 항목을 추가하려면 { ... }, 블록을 복사해서 붙여넣으세요.
 *  - 저장하면 브라우저가 자동으로 새로고침됩니다. (npm run dev 실행 중일 때)
 * ========================================================= */

export const profile = {
  // ── 기본 정보 ─────────────────────────────────────────
  name: "기성훈",

  // 브라우저 탭에 표시되는 제목
  siteTitle: "기성훈 | Experience × Technology × Challenge",

  // ── 프로필 사진 ───────────────────────────────────────
  // 사진을 public/images/ 폴더에 넣고 src 를 "images/profile.jpg" 처럼 바꾸세요.
  // 비워두면("") 기본 placeholder 가 표시됩니다.
  photo: {
    src: "",
    alt: "기성훈 프로필 사진",
  },

  // ── 상단 메뉴 ─────────────────────────────────────────
  // id 는 아래 각 섹션의 id 와 같아야 합니다. (보통은 수정할 필요 없음)
  navigation: [
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "interests", label: "Interests" },
    { id: "vision", label: "Vision" },
    { id: "learning", label: "Learning" },
    { id: "contact", label: "Contact" },
  ],

  // ── 첫 화면 (Hero) ────────────────────────────────────
  hero: {
    badge: "Now exploring AI & Drone",
    tagline: "Experience × Technology × Challenge",
    description:
      "20년 이상의 현장 경험을 바탕으로\nAI와 드론을 통해 새로운 가능성을 만들어갑니다.",
    primaryButton: { label: "About Me", href: "#about" },
    secondaryButton: { label: "Explore My Vision", href: "#vision" },
  },

  // ── About Me ──────────────────────────────────────────
  about: {
    eyebrow: "Who I am",
    title: "About Me",
    lead: "현장에서 배운 것을,\n이제 기술로 확장하려 합니다.",
    story: [
      "저는 20년 넘게 대한민국의 공직자로, 경찰관으로 일해 왔습니다. 현장에서 수많은 사람과 조직, 그리고 예측할 수 없는 상황들을 마주하며 빠르게 판단하고, 사람을 이해하고, 책임 있게 결정하는 법을 배웠습니다.",
      "이제 그 경험을 토대로 AI와 드론이라는 새로운 기술을 배우며 다음 도전을 준비하고 있습니다. 제가 주목하는 것은 기술 그 자체보다, 기술이 현실의 문제를 어떻게 해결할 수 있는가입니다.",
      "아이디어를 떠올리는 데서 멈추지 않고, 직접 만들고 실행하는 사람. 그것이 제가 지금 걸어가고 있는 방향입니다.",
    ],
    keywords: ["Experience", "Challenge", "AI", "Drone", "Automation", "Business", "Future"],
  },

  // ── Experience ────────────────────────────────────────
  // current: true 로 설정한 항목은 "지금 진행 중"으로 강조됩니다.
  experience: {
    eyebrow: "Experience",
    title: "경험이 만든 기반",
    description: "오랜 시간 현장에서 쌓아온 경험이 새로운 도전의 출발점이 됩니다.",
    items: [
      {
        title: "20+ Years",
        subtitle: "Public Service & Field Experience",
        description: "20년 이상 공직에 몸담으며 다양한 현장을 경험하고, 책임감 있게 일해 왔습니다.",
      },
      {
        title: "Leadership",
        subtitle: "현장 대응 및 조직 운영 경험",
        description: "현장에서 팀과 함께 움직이고, 조직이 원활하게 돌아가도록 운영해 온 경험이 있습니다.",
      },
      {
        title: "Problem Solving",
        subtitle: "다양한 상황에서 문제를 판단하고 해결한 경험",
        description: "예측하기 어려운 상황에서도 핵심을 파악하고 최선의 해결책을 찾아 왔습니다.",
      },
      {
        title: "New Challenge",
        subtitle: "AI와 기술을 활용한 새로운 분야에 도전",
        description: "AI 코딩과 드론 기술을 직접 배우며, 아이디어를 실제 서비스로 구현하고 있습니다.",
        current: true,
      },
    ],
  },

  // ── 관심 분야 ─────────────────────────────────────────
  // icon 에 쓸 수 있는 값: "ai", "drone", "platform", "rocket"
  interests: {
    eyebrow: "Interests",
    title: "What I'm Exploring",
    description: "지금 가장 깊이 탐구하고 있는 네 가지 분야입니다.",
    items: [
      {
        icon: "ai",
        title: "AI & Automation",
        description: "AI를 활용해 반복적인 업무를 자동화하고, 새로운 서비스를 만드는 일에 관심이 있습니다.",
        tags: ["AI 자동화", "Claude Code", "업무 자동화"],
      },
      {
        icon: "drone",
        title: "Drone Technology",
        description: "드론 교육, 방제, 자동비행, 지도 데이터 활용 등 드론 산업의 가능성을 연구하고 있습니다.",
        tags: ["드론 교육", "드론 방제", "자동비행", "지도 데이터"],
      },
      {
        icon: "platform",
        title: "Platform Business",
        description: "기술·인력·교육·수요자를 연결하는 플랫폼에 관심이 있습니다. 특히 드론 교육, 인력, 비행장, 농업 방제를 잇고 AI 자동화를 접목하는 모델을 구상하고 있습니다.",
        tags: ["연결", "매칭", "드론 생태계"],
      },
      {
        icon: "rocket",
        title: "AI Entrepreneurship",
        description: "AI를 활용해 소규모 인원, 또는 1인 기업으로도 높은 생산성을 만들 수 있는 비즈니스 모델을 연구하고 있습니다.",
        tags: ["1인 AI 기업", "새로운 사업", "투자 · 경제적 자유"],
      },
    ],
  },

  // ── Vision ────────────────────────────────────────────
  vision: {
    eyebrow: "Vision",
    title: "Experience meets Technology.",
    highlight: "Technology.", // 제목 중 강조 색으로 표시할 부분
    formula: ["Field Experience", "AI · Drone · Automation", "Real-world Value"],
    text: "20년 이상의 현장 경험과 AI, 드론, 자동화 기술을 결합하여\n현실의 문제를 해결하는 서비스를 만들고, 새로운 사업 기회를 만들어가는 것이 저의 목표입니다.",
    statement: "단순히 기술을 배우는 사람이 아니라,\n기술로 실제 가치를 만드는 사람이 되고 싶습니다.",
    steps: [
      { title: "문제를 발견하고", description: "현장의 시선으로 진짜 필요한 것을 찾습니다." },
      { title: "직접 만들고", description: "AI를 활용해 아이디어를 빠르게 구현합니다." },
      { title: "가치로 연결합니다", description: "서비스와 사업으로 현실에 적용합니다." },
    ],
  },

  // ── 현재 배우고 있는 것 ───────────────────────────────
  learning: {
    eyebrow: "Now",
    title: "Currently Learning",
    description:
      "개발자가 아니어도 AI를 활용하면 아이디어를 실제 서비스로 만들 수 있다고 믿습니다.\n이 홈페이지도 그 실험의 일부입니다.",
    items: [
      { name: "Claude Code", note: "AI와 함께 코드를 작성하고 서비스 만들기" },
      { name: "AI Coding", note: "아이디어를 직접 구현하는 개발 역량" },
      { name: "AI Automation", note: "반복 업무를 자동화하는 워크플로" },
      { name: "Web Development", note: "HTML · CSS · JavaScript 기초부터" },
      { name: "Drone Technology", note: "자동비행, 방제, 지도 데이터 활용" },
      { name: "Business Modeling", note: "기술을 사업으로 연결하는 설계" },
    ],
  },

  // ── Contact ───────────────────────────────────────────
  // 값을 비워두면("") "준비 중" 버튼으로 표시됩니다.
  // 예) email: "me@example.com"
  //     linkedin: "https://www.linkedin.com/in/내아이디"
  //     github: "https://github.com/내아이디"
  contact: {
    title: "Let's Build Something New.",
    description: "새로운 기술과 아이디어,\n그리고 새로운 가능성에 관심이 있습니다.",
    email: "",
    linkedin: "",
    github: "",
  },

  // ── 맨 아래 (Footer) ──────────────────────────────────
  footerNote: "Built with curiosity & AI",
};
