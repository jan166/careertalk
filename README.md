# 어문학도의 NAVER 취업기 · Career Talk

경희대 커리어 토크용 발표 자료 (약 50분). 어문학이라는 출발점에서 강점을 발견하고
직무로 연결해 NAVER에 닿기까지의 과정을 담은 슬라이드 덱과 발표 스크립트.

## 구성

| 파일 | 설명 |
|---|---|
| `어문학도의_NAVER_취업기.html` | **본 덱** — 단일 HTML 프레젠테이션 (12 슬라이드, 키보드/스와이프 네비) |
| `발표스크립트.md` / `.docx` | 슬라이드별 발표 스크립트 (시간 배분·전환 멘트·딜리버리 팁 포함) |
| `deck_build/build.js` | pptx 빌드 스크립트 (`pptxgenjs`) |
| `deck_build/textures.py` | 배경 텍스처 생성 (Pillow) |
| `deck_build/assets/` | 생성된 종이/폴더 배경 텍스처 |
| `.shots/` | 슬라이드 렌더 미리보기 |

## 슬라이드 흐름

1. 표지 · 목차
2. PROFILE 연사 소개 — 전공은 출발점
3. WHY 인문학의 시대 — AI 시대, 가장 인간적인 능력
4. STRENGTH 나의 강점 발견 — 읽는 힘
5. ROLE 강점을 직무로
6. PROVE 인턴으로 증명
7. ATTITUDE 결국, 태도
8. FUTURE 오래갈 커리어
9. ACTION 오늘부터 해볼 것
10. FAQ · 맺음말 (Draw your own path)

## 보기

`어문학도의_NAVER_취업기.html` 를 브라우저로 열면 됩니다.
표지 클릭 → 전체화면, `←/→/Space` 로 이동.

## pptx 재생성

```bash
cd deck_build
npm install
node build.js   # → 어문학도의_NAVER_취업기.pptx
```

---
© 2026 · 발표: 정효주 (NAVER)
