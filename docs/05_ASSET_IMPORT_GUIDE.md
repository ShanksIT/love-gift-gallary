# 05. Asset Import Guide

File này hướng dẫn cách import ảnh album và nhạc vào project.

## 1. Album ảnh

Đặt ảnh vào thư mục:

```text
assets/images/album/
```

Tên file gợi ý:

```text
photo-01.jpg
photo-02.jpg
photo-03.jpg
photo-04.jpg
photo-05.jpg
```

Có thể dùng `.jpg`, `.jpeg`, `.png`, `.webp`.

## 2. Ảnh nền

Đặt ảnh nền vào:

```text
assets/images/backgrounds/
```

Tên file gợi ý:

```text
hero-bg.jpg
night-bg.jpg
paper-texture.png
```

Nếu không có ảnh nền, dùng CSS gradient.

## 3. Nhạc nền

Đặt nhạc vào:

```text
assets/music/love-song.mp3
```

Lưu ý:

- Browser thường không cho autoplay audio nếu user chưa click.
- Vì vậy nên phát nhạc sau khi user bấm nút “Mở món quà của anh”.
- Cần có nút bật/tắt nhạc.

## 4. Mapping ảnh trong config

Trong `assets/js/config.js`:

```js
gallery: [
  {
    src: "assets/images/album/photo-01.jpg",
    caption: "Ngày hôm đó em cười rất xinh."
  }
]
```

## 5. Fallback khi thiếu ảnh

Nếu ảnh không load được:

- Không làm crash website.
- Có thể hiển thị placeholder:

```text
Một kỷ niệm đang chờ được thêm ảnh...
```

Hoặc dùng CSS background nhẹ.

## 6. Tối ưu ảnh

Trước khi đưa vào project:

- Resize ảnh về chiều rộng khoảng 1200–1600px là đủ.
- Dùng `.webp` nếu muốn nhẹ.
- Không nên đưa ảnh quá lớn 5–10MB vì sẽ làm load chậm trên mobile.

## 7. Privacy

Nếu deploy public lên GitHub Pages, ảnh có thể được người khác xem nếu biết link.

Nếu muốn riêng tư hơn:

- Deploy private hosting.
- Hoặc chỉ gửi file zip.
- Hoặc dùng tên repository/link khó đoán.
