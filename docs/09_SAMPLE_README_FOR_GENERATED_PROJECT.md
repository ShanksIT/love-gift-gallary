# Sample README for Generated Project

# Our Love Story

Một static website romantic được tạo để gửi tặng người yêu.

## Cách chạy

Mở trực tiếp file:

```text
index.html
```

Hoặc chạy bằng Live Server trong VS Code.

## Cách thay nội dung

Mở file:

```text
assets/js/config.js
```

Sau đó chỉnh:

- Tên người nhận
- Ngày bắt đầu yêu
- Timeline
- Gallery
- Reasons
- Letter
- Final message

## Cách thay ảnh

Đặt ảnh vào:

```text
assets/images/album/
```

Sau đó cập nhật đường dẫn trong `assets/js/config.js`.

Ví dụ:

```js
{
  src: "assets/images/album/photo-01.jpg",
  caption: "Caption của ảnh"
}
```

## Cách thay nhạc

Đặt file nhạc vào:

```text
assets/music/love-song.mp3
```

Hoặc đổi đường dẫn trong `config.js`:

```js
music: {
  src: "assets/music/your-song.mp3",
  enabled: true
}
```

## Deploy

Có thể deploy bằng:

- GitHub Pages
- Netlify
- Vercel
