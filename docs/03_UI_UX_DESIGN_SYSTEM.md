# 03. UI/UX Design System

## Theme chính

Tên theme: **Soft Romantic Pastel**

Website nên dùng cảm giác nhẹ nhàng, mềm mại, không quá sặc sỡ.

## Color Palette

```css
:root {
  --color-primary: #ff6f91;
  --color-primary-soft: #ffc2d1;
  --color-secondary: #cdb4db;
  --color-accent: #ffb3c6;
  --color-background: #fff5f8;
  --color-surface: #ffffff;
  --color-cream: #fffaf3;
  --color-text: #4a2c2a;
  --color-muted: #8a6f6b;
  --color-border: rgba(255, 111, 145, 0.2);
}
```

## Font gợi ý

Dùng font system để tránh phụ thuộc mạng:

```css
font-family: "Segoe UI", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
```

Nếu dùng Google Fonts thì có thể chọn:

- `Playfair Display` cho heading
- `Quicksand` hoặc `Nunito` cho body

Nhưng nếu muốn chạy offline, ưu tiên system font.

## Layout

- Mobile-first.
- Max width nội dung chính: `1080px`.
- Section padding:
  - Desktop: `96px 24px`
  - Mobile: `64px 20px`
- Card border-radius: `24px`
- Shadow nhẹ:
  ```css
  box-shadow: 0 20px 60px rgba(255, 111, 145, 0.15);
  ```

## Component Style

### Button

- Border radius lớn.
- Gradient hồng.
- Hover nâng nhẹ.
- Có transition.

Example:

```css
.love-button {
  border: none;
  border-radius: 999px;
  padding: 14px 28px;
  background: linear-gradient(135deg, #ff6f91, #ff9a9e);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 12px 30px rgba(255, 111, 145, 0.35);
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.love-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 16px 40px rgba(255, 111, 145, 0.45);
}
```

### Card

```css
.love-card {
  background: rgba(255, 255, 255, 0.85);
  border: 1px solid var(--color-border);
  border-radius: 24px;
  padding: 24px;
  backdrop-filter: blur(14px);
}
```

## Animation Guidelines

Animation nên nhẹ, không quá nhiều để tránh rối mắt.

### Nên dùng

- Fade in
- Slide up
- Floating hearts
- Typing text
- Scale nhẹ khi hover
- Sparkle nhẹ ở background

### Không nên dùng

- Animation quá nhanh
- Flashing mạnh
- Màu neon quá gắt
- Quá nhiều object bay làm lag mobile

## Responsive

Breakpoint gợi ý:

```css
@media (max-width: 768px) {
  /* Mobile styles */
}
```

Mobile cần ưu tiên:

- Text ngắn hơn
- Card full width
- Gallery 1-2 cột
- Timeline vertical đơn giản

## Accessibility

- Text contrast đủ đọc.
- Button có `aria-label` nếu cần.
- Không bắt buộc audio tự phát; phải có thao tác user click.
- Có nút bật/tắt nhạc.
- Không làm button chạy trốn quá khó chịu trên mobile.
