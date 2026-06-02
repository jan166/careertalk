const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.defineLayout({ name: "W", width: 13.333, height: 7.5 });
p.layout = "W";

// ---- type ----
const SERIF = "AppleMyungjo";   // korean serif (myeongjo)
const ENG = "Georgia";          // latin high-contrast serif
const SCRIPT = "Snell Roundhand";
const SANS = "Pretendard";
const MONO = "Courier New";

// ---- palette (dusty / nostalgia editorial) ----
const INK = "433F39";       // body ink on cream
const INK_SOFT = "847F75";  // muted
const CREAM = "E9E3D6";
const PAPER = "F2EDE2";     // light card
const LINE = "C9C1B2";      // hairline on cream
const BLUE = "A7C1D4", BLUE_DK = "33495B", BLUE_DEEP = "243743";
const BLUSH = "E0C2C3", BLUSH_DK = "8A5B5D";
const SAGE = "AFBBA0", SAGE_DK = "566349";
const ON_DK = "EBE5D8";     // text on charcoal
const ON_DK_SOFT = "A39D8F";
const CARD_DK = "37322C";   // card on charcoal
const TAPE = "EFE9DC";

const W = 13.333, H = 7.5, M = 0.7;
const img = (name) => "assets/" + name + ".png";

function label(s, txt, x, y, color, size = 11, w = 6, align = "left") {
  s.addText(txt, { x, y, w, h: 0.32, fontFace: MONO, fontSize: size, color, charSpacing: 2, align, valign: "middle" });
}
function pageNo(s, n, color = INK_SOFT) {
  s.addText("— " + String(n).padStart(2, "0"), { x: W - 2, y: H - 0.55, w: 1.3, h: 0.3, fontFace: MONO, fontSize: 11, color, align: "right", charSpacing: 1 });
}
// folder tab + divider (content header)
function tab(s, en, tabFill, tabTx, lineColor) {
  s.addShape(p.ShapeType.line, { x: M, y: 1.6, w: W - M * 2, h: 0, line: { color: lineColor, width: 1.25 } });
  s.addShape(p.ShapeType.roundRect, { x: M, y: 1.02, w: 2.7, h: 0.58, rectRadius: 0.1, fill: { color: tabFill } });
  s.addText(en, { x: M, y: 1.02, w: 2.7, h: 0.58, fontFace: MONO, fontSize: 12.5, bold: true, color: tabTx, align: "center", valign: "middle", charSpacing: 2 });
}
function head(s, en, num, ko, tagline, tabFill, tabTx, lineColor = LINE) {
  tab(s, en, tabFill, tabTx, lineColor);
  s.addText(ko, { x: M, y: 1.85, w: W - M * 2, h: 0.75, fontFace: SERIF, fontSize: 38, color: INK, align: "left", valign: "middle" });
  if (tagline) s.addText(tagline, { x: M + 0.03, y: 2.62, w: W - M * 2, h: 0.4, fontFace: SANS, fontSize: 14.5, italic: true, color: INK_SOFT, align: "left" });
  pageNo(s, num);
}

// =====================================================================
// S1 — COVER (blue folder)
// =====================================================================
let s = p.addSlide(); s.background = { path: img("blue") };
label(s, "KYUNGHEE UNIV.  ·  CAREER TALK", M, 0.85, BLUE_DEEP, 12, 9);
s.addText("어문학도의", { x: M, y: 2.05, w: 11.5, h: 1.0, fontFace: SERIF, fontSize: 56, color: BLUE_DEEP });
s.addText([
  { text: "NAVER", options: { fontFace: ENG, bold: true, color: BLUE_DEEP } },
  { text: " 취업기", options: { fontFace: SERIF, color: BLUE_DEEP } },
], { x: M, y: 3.0, w: 11.5, h: 1.1, fontSize: 60 });
s.addText("어문학이라는 무기로, 나만의 길을 그리다", { x: M + 0.05, y: 4.25, w: 11, h: 0.55, fontFace: SERIF, fontSize: 22, italic: true, color: BLUE_DEEP });

// white label sticker
s.addShape(p.ShapeType.rect, { x: M, y: 5.45, w: 5.0, h: 1.05, fill: { color: "F7F4EE" }, line: { color: BLUE_DEEP, width: 1 } });
s.addText("정효주", { x: M + 0.3, y: 5.6, w: 4.4, h: 0.45, fontFace: SERIF, fontSize: 21, color: BLUE_DEEP });
label(s, "NAVER 세일즈기획실  ·  SALES PLANNING", M + 0.32, 6.08, BLUE_DK, 10.5, 4.5);

// =====================================================================
// S2 — 연사 소개 (cream, blue)
// =====================================================================
s = p.addSlide(); s.background = { path: img("cream") };
head(s, "PROFILE", 1, "연사 소개", "전공은 출발점, 커리어는 강점으로 완성된다", BLUE, BLUE_DEEP);

// filing card (left)
s.addShape(p.ShapeType.rect, { x: M, y: 3.2, w: 3.9, h: 3.5, fill: { color: PAPER }, line: { color: LINE, width: 1 } });
s.addShape(p.ShapeType.rect, { x: M, y: 3.2, w: 3.9, h: 0.18, fill: { color: BLUE } });
label(s, "ID · 001", M + 0.32, 3.55, INK_SOFT, 10, 3);
s.addText("정효주", { x: M + 0.3, y: 3.95, w: 3.3, h: 0.6, fontFace: SERIF, fontSize: 30, color: INK });
s.addShape(p.ShapeType.line, { x: M + 0.32, y: 4.65, w: 3.2, h: 0, line: { color: LINE, width: 1 } });
s.addText("NAVER 세일즈기획실", { x: M + 0.32, y: 4.78, w: 3.3, h: 0.4, fontFace: SANS, fontSize: 15, bold: true, color: BLUE_DK });
s.addText("어문계열 전공\n스포츠 이벤트 광고 스폰서십 기획", { x: M + 0.32, y: 5.2, w: 3.3, h: 1.0, fontFace: SANS, fontSize: 13.5, color: INK_SOFT, lineSpacingMultiple: 1.3 });

// vertical timeline (right)
const tx = M + 4.6;
const steps = [
  ["어문계열 전공", "언어 · 텍스트 · 사고력의 토대"],
  ["인턴십", "관심 직무에 직접 뛰어들기"],
  ["정규직 전환", "직무 적합성을 증명하다"],
  ["NAVER 세일즈기획실", "강점을 살린 기획 직무"],
];
const ty0 = 3.25, tgap = 0.96;
steps.forEach((st, i) => {
  const cy = ty0 + i * tgap;
  const last = i === steps.length - 1;
  if (i < steps.length - 1) s.addShape(p.ShapeType.line, { x: tx + 0.26, y: cy + 0.52, w: 0, h: tgap - 0.52, line: { color: LINE, width: 1.5 } });
  s.addShape(p.ShapeType.ellipse, { x: tx, y: cy, w: 0.52, h: 0.52, fill: { color: last ? BLUE_DK : PAPER }, line: { color: BLUE_DK, width: 2 } });
  s.addText(String(i + 1), { x: tx, y: cy, w: 0.52, h: 0.52, fontFace: ENG, fontSize: 15, bold: true, color: last ? ON_DK : BLUE_DK, align: "center", valign: "middle" });
  s.addText(st[0], { x: tx + 0.82, y: cy - 0.07, w: 6.6, h: 0.42, fontFace: SERIF, fontSize: 20, color: INK });
  s.addText(st[1], { x: tx + 0.82, y: cy + 0.37, w: 6.6, h: 0.32, fontFace: SANS, fontSize: 13, color: INK_SOFT });
});

// =====================================================================
// S3 — 인문학의 시대 (charcoal, quote notes)
// =====================================================================
s = p.addSlide(); s.background = { path: img("charcoal") };
s.addShape(p.ShapeType.line, { x: M, y: 1.6, w: W - M * 2, h: 0, line: { color: "5A5347", width: 1 } });
s.addShape(p.ShapeType.roundRect, { x: M, y: 1.02, w: 2.9, h: 0.58, rectRadius: 0.1, fill: { color: BLUE } });
s.addText("WHY HUMANITIES", { x: M, y: 1.02, w: 2.9, h: 0.58, fontFace: MONO, fontSize: 12, bold: true, color: BLUE_DEEP, align: "center", valign: "middle", charSpacing: 1 });
s.addText("인문학의 시대가 온다", { x: M, y: 1.85, w: 12, h: 0.7, fontFace: SERIF, fontSize: 38, color: ON_DK });
s.addText("AI 시대, 가장 인간적인 능력이 가장 강하다", { x: M + 0.03, y: 2.6, w: 12, h: 0.4, fontFace: SANS, fontSize: 14.5, italic: true, color: ON_DK_SOFT });

const qcW = (W - M * 2 - 0.6) / 2, qy = 3.25, qh = 2.7;
function note(x, quote, who, role, accent) {
  s.addShape(p.ShapeType.rect, { x, y: qy, w: qcW, h: qh, fill: { color: PAPER } });
  // tape
  s.addShape(p.ShapeType.rect, { x: x + qcW / 2 - 0.6, y: qy - 0.16, w: 1.2, h: 0.34, fill: { color: TAPE, transparency: 35 }, rotate: 3 });
  s.addText("“", { x: x + 0.25, y: qy + 0.02, w: 1, h: 0.7, fontFace: ENG, fontSize: 48, bold: true, color: accent });
  s.addText(quote, { x: x + 0.4, y: qy + 0.62, w: qcW - 0.8, h: 1.5, fontFace: SERIF, fontSize: 16.5, color: INK, lineSpacingMultiple: 1.3, valign: "top" });
  s.addShape(p.ShapeType.line, { x: x + 0.4, y: qy + qh - 0.62, w: qcW - 0.8, h: 0, line: { color: LINE, width: 1 } });
  s.addText([
    { text: who, options: { fontFace: ENG, bold: true, italic: true, color: accent } },
    { text: "   " + role, options: { fontFace: SANS, color: INK_SOFT } },
  ], { x: x + 0.4, y: qy + qh - 0.5, w: qcW - 0.8, h: 0.4, fontSize: 11.5 });
}
note(M, "철학 학위가 좋은 취업 전망이라는 말, 마지막으로 들어본 게 언제인가요? 그런데 이제는 그렇습니다.", "Jack Clark", "Anthropic 공동창업자", BLUE_DK);
note(M + qcW + 0.6, "인문학 공부는 그 어느 때보다 중요해질 것입니다. Anthropic은 기술보다 커뮤니케이션·대인 능력·친절함을 우선해 채용합니다.", "Daniela Amodei", "Anthropic 공동창업자·President", BLUSH_DK);

s.addText("커뮤니케이션 · 철학 등 인문학 역량의 수요가 빠르게 오르고 있다.", { x: M, y: 6.35, w: 8.5, h: 0.4, fontFace: SANS, fontSize: 13.5, color: ON_DK_SOFT });
label(s, "SOURCE · FORTUNE 2026.2 · ENTREPRENEUR", W - M - 5, 6.38, "7E776A", 9.5, 5, "right");

// =====================================================================
// S4 — 나의 강점 발견 (cream, sage)
// =====================================================================
s = p.addSlide(); s.background = { path: img("cream") };
head(s, "STRENGTH", 2, "나의 강점 발견", "읽는 법을 배우면, 무엇이든 읽어낼 수 있다", SAGE, "FFFFFF");

s.addShape(p.ShapeType.rect, { x: M, y: 3.2, w: 7.1, h: 2.85, fill: { color: PAPER }, line: { color: LINE, width: 1 } });
s.addShape(p.ShapeType.rect, { x: M, y: 3.2, w: 0.16, h: 2.85, fill: { color: SAGE } });
s.addText("스페인 소설 수업에서 ‘적극적 읽기’를 배웠다", { x: M + 0.4, y: 3.45, w: 6.4, h: 0.55, fontFace: SERIF, fontSize: 20, color: INK });
s.addText("행간과 맥락을 끝까지 파고드는 읽기. 그 읽는 법을 익히자, 맥락 파악이 어려운 AI 논문조차 빠르게 흡수할 수 있었다. 전공이 길러준 ‘읽는 힘’은 어떤 분야로도 옮겨졌다.", {
  x: M + 0.4, y: 4.05, w: 6.4, h: 1.8, fontFace: SANS, fontSize: 14.5, color: INK, lineSpacingMultiple: 1.4, valign: "top",
});

const chips = ["언어", "깊이 읽기", "맥락 이해", "사고력", "문화 감수성"];
const chx = M + 7.6;
label(s, "어문학이 길러준 힘", chx, 3.22, SAGE_DK, 10.5, 4.5);
chips.forEach((c, i) => {
  const cy = 3.7 + i * 0.5;
  s.addShape(p.ShapeType.rect, { x: chx, y: cy, w: 4.45, h: 0.42, fill: { color: PAPER }, line: { color: LINE, width: 1 } });
  s.addShape(p.ShapeType.rect, { x: chx, y: cy, w: 0.12, h: 0.42, fill: { color: SAGE } });
  s.addText(c, { x: chx + 0.35, y: cy, w: 3.9, h: 0.42, fontFace: SANS, fontSize: 14, bold: true, color: INK, valign: "middle" });
});

s.addShape(p.ShapeType.rect, { x: M, y: 6.25, w: W - M * 2, h: 0.85, fill: { color: "DDE2D0" }, line: { color: SAGE, width: 1 } });
s.addText("✻", { x: M + 0.3, y: 6.25, w: 0.5, h: 0.85, fontFace: ENG, fontSize: 22, color: SAGE_DK, align: "center", valign: "middle" });
s.addText("대학은 깊게 사고하고, 내가 무엇을 좋아하는지 가장 자유롭게 탐구할 수 있는 시간이다.", { x: M + 0.85, y: 6.25, w: W - M * 2 - 1.1, h: 0.85, fontFace: SERIF, fontSize: 17, color: SAGE_DK, valign: "middle" });

// =====================================================================
// S5 — 강점을 직무로 (cream, blush)
// =====================================================================
s = p.addSlide(); s.background = { path: img("cream") };
head(s, "ROLE", 3, "강점을 직무로 연결하기", "회사보다 직무, 직무는 강점에서 출발", BLUSH, BLUSH_DK);

s.addText([
  { text: "직무가 우선", options: { fontFace: SERIF, color: BLUSH_DK } },
  { text: "  —  업계·회사는 그 다음. 내 강점이 빛나는 직무부터 찾는다.", options: { fontFace: SANS, color: INK } },
], { x: M, y: 3.15, w: W - M * 2, h: 0.45, fontSize: 16, valign: "middle" });

const jobs = [
  ["기획", "사업·서비스를 설계하고 끌고 간다"],
  ["마케팅", "메시지로 사람의 마음을 움직인다"],
  ["세일즈", "관계와 설득으로 성과를 만든다"],
  ["글로벌·해외사업", "언어와 문화 감수성이 무기"],
  ["콘텐츠", "이야기를 만들고 다듬는다"],
  ["브랜드·커뮤니케이션", "조직의 언어를 설계한다"],
];
const cols = 3, gx = 0.4, gy = 0.28, cw = (W - M * 2 - gx * 2) / 3, ch = 1.22;
jobs.forEach((j, i) => {
  const r = Math.floor(i / cols), c = i % cols;
  const x = M + c * (cw + gx), y = 3.68 + r * (ch + gy);
  s.addShape(p.ShapeType.rect, { x, y, w: cw, h: ch, fill: { color: PAPER }, line: { color: LINE, width: 1 } });
  s.addShape(p.ShapeType.rect, { x, y, w: cw, h: 0.12, fill: { color: BLUSH } });
  s.addText(j[0], { x: x + 0.3, y: y + 0.2, w: cw - 0.5, h: 0.42, fontFace: SERIF, fontSize: 18, color: INK });
  s.addText(j[1], { x: x + 0.3, y: y + 0.66, w: cw - 0.55, h: 0.48, fontFace: SANS, fontSize: 12, color: INK_SOFT, lineSpacingMultiple: 1.12 });
});
s.addText("나는 강점을 살려 세일즈기획 직무로 — NAVER에서 스포츠 스폰서십을 기획하고 있다.", { x: M, y: 6.7, w: W - M * 2, h: 0.4, fontFace: SANS, fontSize: 13, italic: true, color: INK_SOFT });

// =====================================================================
// S6 — 인턴으로 증명하기 (cream, blue)
// =====================================================================
s = p.addSlide(); s.background = { path: img("cream") };
head(s, "PROVE", 4, "인턴으로 증명하기", "들어가서 증명하는 게 가장 빠른 길", BLUE, BLUE_DEEP);

s.addShape(p.ShapeType.roundRect, { x: M, y: 3.2, w: 2.9, h: 0.8, rectRadius: 0.4, fill: { color: PAPER }, line: { color: BLUE_DK, width: 1.25 } });
s.addText("인턴", { x: M, y: 3.2, w: 2.9, h: 0.8, fontFace: SERIF, fontSize: 19, color: INK, align: "center", valign: "middle" });
s.addText("→", { x: M + 3.0, y: 3.2, w: 0.8, h: 0.8, fontFace: ENG, fontSize: 26, color: BLUE_DK, align: "center", valign: "middle" });
s.addShape(p.ShapeType.roundRect, { x: M + 3.85, y: 3.2, w: 2.9, h: 0.8, rectRadius: 0.4, fill: { color: BLUE_DK } });
s.addText("정규직 전환", { x: M + 3.85, y: 3.2, w: 2.9, h: 0.8, fontFace: SERIF, fontSize: 19, color: ON_DK, align: "center", valign: "middle" });

s.addText("인턴은 ‘스펙 한 줄’이 아니라, 직무 적합성을 직접 증명하는 시간이다.", { x: M, y: 4.25, w: W - M * 2, h: 0.5, fontFace: SERIF, fontSize: 18, color: INK });

const pts = [
  ["작게 시작했다", "관심 직무에 인턴으로 뛰어들어 실무를 경험"],
  ["끝까지 책임졌다", "작은 일이라도 내 일처럼 마무리하며 신뢰를 쌓음"],
  ["전환으로 이어졌다", "‘함께 일하고 싶은 사람’이라는 평가가 정규직으로"],
];
pts.forEach((pt, i) => {
  const y = 5.0 + i * 0.72;
  s.addShape(p.ShapeType.ellipse, { x: M, y: y + 0.02, w: 0.42, h: 0.42, fill: { color: PAPER }, line: { color: BLUE_DK, width: 1.75 } });
  s.addText(String(i + 1), { x: M, y: y + 0.02, w: 0.42, h: 0.42, fontFace: ENG, fontSize: 13, bold: true, color: BLUE_DK, align: "center", valign: "middle" });
  s.addText([
    { text: pt[0] + "    ", options: { fontFace: SERIF, color: INK } },
    { text: pt[1], options: { fontFace: SANS, color: INK_SOFT } },
  ], { x: M + 0.65, y, w: W - M * 2 - 0.65, h: 0.55, fontSize: 15.5, valign: "middle" });
});

// =====================================================================
// S7 — 결국 가장 중요한 건 태도 (charcoal)
// =====================================================================
s = p.addSlide(); s.background = { path: img("charcoal") };
s.addShape(p.ShapeType.line, { x: M, y: 1.6, w: W - M * 2, h: 0, line: { color: "5A5347", width: 1 } });
s.addShape(p.ShapeType.roundRect, { x: M, y: 1.02, w: 2.7, h: 0.58, rectRadius: 0.1, fill: { color: BLUSH } });
s.addText("ATTITUDE", { x: M, y: 1.02, w: 2.7, h: 0.58, fontFace: MONO, fontSize: 12.5, bold: true, color: BLUSH_DK, align: "center", valign: "middle", charSpacing: 2 });
s.addText("결국, 가장 중요한 건 ‘태도’", { x: M, y: 1.85, w: 12, h: 0.7, fontFace: SERIF, fontSize: 38, color: ON_DK });
s.addText("스펙이 아니라 태도가 합격을 만든다", { x: M + 0.03, y: 2.6, w: 12, h: 0.4, fontFace: SANS, fontSize: 14.5, italic: true, color: ON_DK_SOFT });

s.addText("“저를 왜 뽑으셨어요?” 라고 물었더니 —", { x: M, y: 3.25, w: 12, h: 0.5, fontFace: SERIF, fontSize: 21, italic: true, color: "D9B98C" });

const reasons = [
  ["적극적으로 배우는 태도", "무엇이든 먼저 묻고, 먼저 배우려 했다"],
  ["없으면 안 될 사람", "팀에 자연스럽게 녹아들어 ‘이 사람 없으면 안 되겠다’는 느낌을 줬다"],
];
const rw = (W - M * 2 - 0.5) / 2;
reasons.forEach((rs, i) => {
  const x = M + i * (rw + 0.5);
  s.addShape(p.ShapeType.rect, { x, y: 3.95, w: rw, h: 1.7, fill: { color: CARD_DK } });
  s.addText(String(i + 1), { x: x + 0.35, y: 4.15, w: 0.8, h: 0.7, fontFace: ENG, fontSize: 34, bold: true, color: BLUSH });
  s.addText(rs[0], { x: x + 1.15, y: 4.2, w: rw - 1.45, h: 0.55, fontFace: SERIF, fontSize: 19, color: ON_DK, valign: "middle" });
  s.addText(rs[1], { x: x + 0.4, y: 4.85, w: rw - 0.8, h: 0.7, fontFace: SANS, fontSize: 13.5, color: ON_DK_SOFT, lineSpacingMultiple: 1.25, valign: "top" });
});

s.addShape(p.ShapeType.rect, { x: M, y: 5.95, w: W - M * 2, h: 0.85, fill: { color: "2A3A2E" }, line: { color: SAGE_DK, width: 1 } });
s.addText([
  { text: "→ Anthropic도 ", options: { color: ON_DK_SOFT } },
  { text: "기술보다 커뮤니케이션·사람·태도", options: { fontFace: SERIF, color: "BFD0AE" } },
  { text: "로 뽑는다고 했다.  태도는 어디서나 통한다.", options: { color: ON_DK_SOFT } },
], { x: M + 0.4, y: 5.95, w: W - M * 2 - 0.8, h: 0.85, fontFace: SANS, fontSize: 15, valign: "middle" });
pageNo(s, 5, ON_DK_SOFT);

// =====================================================================
// S8 — 오래갈 커리어 빌딩 (cream, sage)
// =====================================================================
s = p.addSlide(); s.background = { path: img("cream") };
head(s, "FUTURE", 6, "오래갈 커리어 빌딩", "레이스는 길다 — 강점과 태도는 복리로 쌓인다", SAGE, "FFFFFF");

s.addText("합격은 끝이 아니라 시작이다. 강점과 태도를 꾸준히 쌓으면, 커리어는 시간이 갈수록 단단해진다.", { x: M, y: 3.15, w: W - M * 2, h: 0.5, fontFace: SANS, fontSize: 15.5, color: INK });

const build = [
  ["강점을 확장한다", "잘하는 것을 깊게, 그리고 인접 영역으로 넓혀간다"],
  ["태도로 신뢰를 쌓는다", "함께 일하고 싶은 사람이라는 평판이 기회를 부른다"],
  ["나의 모양을 닮은 길로", "남을 따라가지 않고, 내 색을 가진 커리어를 그린다"],
];
const bw = (W - M * 2 - 0.5 * 2) / 3;
build.forEach((b, i) => {
  const x = M + i * (bw + 0.5);
  s.addShape(p.ShapeType.rect, { x, y: 3.85, w: bw, h: 2.85, fill: { color: PAPER }, line: { color: LINE, width: 1 } });
  s.addShape(p.ShapeType.rect, { x, y: 3.85, w: bw, h: 0.14, fill: { color: SAGE } });
  s.addText(String(i + 1).padStart(2, "0"), { x: x + 0.35, y: 4.15, w: bw - 0.7, h: 0.7, fontFace: ENG, fontSize: 38, bold: true, color: SAGE_DK });
  s.addText(b[0], { x: x + 0.35, y: 4.95, w: bw - 0.7, h: 0.85, fontFace: SERIF, fontSize: 19, color: INK, lineSpacingMultiple: 1.05, valign: "top" });
  s.addText(b[1], { x: x + 0.35, y: 5.78, w: bw - 0.7, h: 0.85, fontFace: SANS, fontSize: 13, color: INK_SOFT, lineSpacingMultiple: 1.3, valign: "top" });
});

// =====================================================================
// S9 — 오늘부터 해볼 것 (cream, blush)
// =====================================================================
s = p.addSlide(); s.background = { path: img("cream") };
head(s, "ACTION", 7, "오늘부터 해볼 것", "작게, 그러나 지금 바로", BLUSH, BLUSH_DK);

const tasks = [
  ["강점 키워드 3개 뽑기", "시간 가는 줄 몰랐던 수업·책 3개에서 ‘왜?’를 파고들어 내 강점 키워드를 찾기"],
  ["‘적극적 읽기’ 한 편", "어려운 글 1편 → 한 줄 요약 + 저자에게 던질 질문 3개 + 다르게 볼 지점 1개"],
  ["채용공고 1개 해부", "끌리는 직무의 자격요건을 ‘내 강점 언어’로 번역해 보고, 없는 건 메모하기"],
  ["커피챗 1건", "가고 싶은 분야의 현직자·선배에게 15분 대화를 정중히 요청하기"],
  ["‘나의 모양’ 한 문장", "“나는 ___할 때 가장 나답다 / 오래 즐겁게 할 수 있다” 채워 보기"],
];
const rh = 0.74, ry0 = 3.2;
tasks.forEach((t, i) => {
  const y = ry0 + i * (rh + 0.06);
  s.addShape(p.ShapeType.rect, { x: M, y, w: W - M * 2, h: rh, fill: { color: i % 2 ? CREAM : PAPER }, line: { color: LINE, width: 1 } });
  s.addShape(p.ShapeType.rect, { x: M, y, w: 0.62, h: rh, fill: { color: BLUSH } });
  s.addText(String(i + 1), { x: M, y, w: 0.62, h: rh, fontFace: ENG, fontSize: 22, bold: true, color: BLUSH_DK, align: "center", valign: "middle" });
  s.addText(t[0], { x: M + 0.9, y, w: 3.6, h: rh, fontFace: SERIF, fontSize: 17, color: INK, valign: "middle" });
  s.addText(t[1], { x: M + 4.6, y, w: W - M * 2 - 4.85, h: rh, fontFace: SANS, fontSize: 13, color: INK_SOFT, valign: "middle", lineSpacingMultiple: 1.12 });
});

// =====================================================================
// S10 — 어문학도에게 (cream letter + binder rings, verbatim)
// =====================================================================
s = p.addSlide(); s.background = { path: img("creamlt") };
// binder rings (left)
[1.95, 3.6, 5.25].forEach((ry) => {
  s.addShape(p.ShapeType.roundRect, { x: 0.3, y: ry, w: 0.95, h: 0.18, rectRadius: 0.09, fill: { color: "2C2825" } });
  s.addShape(p.ShapeType.roundRect, { x: 0.46, y: ry + 0.03, w: 0.62, h: 0.12, rectRadius: 0.06, fill: { color: "F2EDE2" } });
});
label(s, "TO STUDENTS · 어문학도에게", M + 1.05, 1.0, INK_SOFT, 11.5, 8);
s.addText("“", { x: M + 0.85, y: 1.35, w: 1.6, h: 1.0, fontFace: ENG, fontSize: 72, bold: true, color: BLUE_DK });
s.addText([
  { text: "취업이 잘 되는 전공은 있을 수 있어도, 결국 ", options: { color: INK } },
  { text: "특별함은 내가 만들어 나가는 것", options: { color: BLUE_DK } },
  { text: ".\n\n지금 내가 듣는 수업이, 책 한 줄이, 그 모든 것이 ", options: { color: INK } },
  { text: "나의 자산이 될 수 있다는 태도", options: { color: BLUSH_DK } },
  { text: "로 임하면 —\n\n지금 잠깐 헤매더라도, 어느새 ", options: { color: INK } },
  { text: "나의 모양을 닮은 길", options: { color: SAGE_DK } },
  { text: "을 그려가며 원하는 곳에 도달해 있을 거예요.", options: { color: INK } },
], { x: M + 1.05, y: 2.45, w: W - M * 2 - 1.55, h: 3.7, fontFace: SERIF, fontSize: 21, lineSpacingMultiple: 1.28, valign: "top" });
s.addText("✻", { x: W - M - 1.0, y: 6.45, w: 0.6, h: 0.4, fontFace: ENG, fontSize: 20, color: BLUSH_DK, align: "right" });

// =====================================================================
// S11 — Q&A (charcoal)
// =====================================================================
s = p.addSlide(); s.background = { path: img("charcoal") };
label(s, "ASK ME ANYTHING", M, 1.5, ON_DK_SOFT, 12, 8);
s.addText("Q&A", { x: M - 0.05, y: 1.95, w: 12, h: 1.5, fontFace: ENG, fontSize: 86, bold: true, color: ON_DK });
s.addText("무엇이든 물어보세요", { x: M + 0.05, y: 3.45, w: 12, h: 0.55, fontFace: SERIF, fontSize: 24, color: "BFD0AE" });

const qs = ["어문 전공의 활용성은?", "인턴 → 전환 팁이 있다면?", "AI 시대, 어떻게 준비할까?", "세일즈기획은 어떤 일?"];
qs.forEach((q, i) => {
  const x = M + (i % 2) * 6.0;
  const y = 4.5 + Math.floor(i / 2) * 0.8;
  s.addShape(p.ShapeType.rect, { x, y, w: 5.6, h: 0.6, fill: { color: CARD_DK } });
  s.addShape(p.ShapeType.rect, { x, y, w: 0.1, h: 0.6, fill: { color: BLUE } });
  s.addText(q, { x: x + 0.35, y, w: 5.1, h: 0.6, fontFace: SANS, fontSize: 14, color: ON_DK, valign: "middle" });
});
s.addText("¡Muchas gracias!", { x: M, y: 6.3, w: 9, h: 0.7, fontFace: SCRIPT, fontSize: 34, italic: true, color: "D9B98C" });

// ---------------------------------------------------------------------
p.writeFile({ fileName: "어문학도의_NAVER_취업기.pptx" }).then((f) => console.log("WROTE", f));
