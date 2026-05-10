# 06. Implementation Plan

## Source code structure

Codex hãy tạo project theo cấu trúc sau:

```text
love-gift/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── config.js
│   │   └── main.js
│   ├── images/
│   │   ├── album/
│   │   └── backgrounds/
│   └── music/
│       └── love-song.mp3
└── docs/
```

## index.html requirements

`index.html` cần có các section chính:

```html
<section id="opening"></section>
<main id="mainContent">
  <section id="hero"></section>
  <section id="loveCounter"></section>
  <section id="timeline"></section>
  <section id="gallery"></section>
  <section id="reasons"></section>
  <section id="letter"></section>
  <section id="final"></section>
</main>
```

Thêm modal/lightbox:

```html
<div id="galleryModal"></div>
<div id="hugModal"></div>
```

Thêm audio:

```html
<audio id="bgMusic" loop></audio>
```

## CSS modules

Trong `style.css`, chia theo thứ tự:

```css
/* 1. Reset & Variables */
/* 2. Base Layout */
/* 3. Opening Screen */
/* 4. Hero */
/* 5. Love Counter */
/* 6. Timeline */
/* 7. Gallery */
/* 8. Reasons */
/* 9. Letter */
/* 10. Final Section */
/* 11. Modal */
/* 12. Floating Hearts */
/* 13. Responsive */
```

## JavaScript modules

Trong `main.js`, nên có các function:

```js
initApp();
initOpening();
initMusic();
renderHero();
renderLoveCounter();
renderTimeline();
renderGallery();
renderReasons();
renderLetter();
renderFinalSection();
initScrollReveal();
createFloatingHeart();
openGalleryModal();
closeGalleryModal();
openHugModal();
closeHugModal();
```

## Data rendering

Content lấy từ `LOVE_CONFIG` trong `config.js`.

Ví dụ:

```js
function renderReasons() {
  const container = document.querySelector("#reasonsList");
  LOVE_CONFIG.reasons.forEach((reason, index) => {
    // create reason card
  });
}
```

## Audio handling

Pseudo flow:

```js
const audio = document.querySelector("#bgMusic");
audio.src = LOVE_CONFIG.music.src;

openButton.addEventListener("click", async () => {
  try {
    await audio.play();
  } catch (error) {
    console.warn("Audio autoplay blocked or file missing", error);
  }
});
```

## Love Counter logic

Input:

```js
LOVE_CONFIG.couple.startDate
```

Output:

- days
- hours
- minutes
- seconds

Cần xử lý nếu startDate invalid.

## Gallery modal

Khi click ảnh:

- set ảnh modal
- set caption
- show modal

Khi click close hoặc backdrop:

- hide modal

## Scroll reveal

Có thể dùng IntersectionObserver:

```js
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
    }
  });
});
```

## Floating hearts

Tạo heart element ngẫu nhiên:

```js
function createFloatingHeart() {
  const heart = document.createElement("span");
  heart.className = "floating-heart";
  heart.textContent = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}
```

## “Button chạy trốn” optional

Chỉ enable trên desktop:

```js
if (window.innerWidth > 768) {
  // move secondary button on mouseenter
}
```

Trên mobile không nên để button chạy quá khó bấm.

## Done criteria

Website được coi là hoàn thành khi:

- Mở `index.html` chạy không lỗi.
- Có đủ 8 section.
- Content render từ config.
- Love Counter hoạt động.
- Gallery hoạt động.
- Nhạc bật/tắt được.
- Responsive mobile đẹp.
- Không crash khi thiếu ảnh/nhạc.
