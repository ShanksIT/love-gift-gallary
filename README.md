# Our Love Story

Một static website romantic chạy trực tiếp bằng `index.html`, được tạo theo spec trong `love-gift-vibe-coding-spec`.

## Cách chạy

Mở trực tiếp file `index.html` trong browser.

Nếu muốn test qua local server:

```bash
python3 -m http.server 5500
```

Sau đó mở `http://localhost:5500`.

## Cách thay nội dung

Mở `assets/js/config.js` và chỉnh tên người nhận, ngày bắt đầu yêu, timeline, gallery, reasons, letter và final message.

## Cách thay ảnh

Đặt ảnh thật vào `assets/images/album/`, ví dụ `photo-01.jpg`, `photo-02.jpg`, rồi cập nhật đường dẫn trong `assets/js/config.js`.

Nếu ảnh chưa tồn tại, website sẽ hiện placeholder nhẹ nhàng và không crash.

## Cách thay nhạc

Đặt file nhạc vào `assets/music/love-song.mp3`. Browser thường chỉ cho phát nhạc sau khi người dùng bấm nút mở quà. Nếu file nhạc chưa có hoặc bị chặn, website vẫn hoạt động và hiển thị bản nhạc YouTube gợi ý từ config.

## Cấu trúc

```text
index.html
assets/css/style.css
assets/js/config.js
assets/js/main.js
assets/images/album/
assets/images/backgrounds/
assets/music/
docs/
```
