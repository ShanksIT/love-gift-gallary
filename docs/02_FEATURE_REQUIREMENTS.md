# 02. Feature Requirements

## 1. Opening / Loading Screen

### Mục tiêu

Tạo cảm giác tò mò và bất ngờ khi bạn gái mở website.

### Nội dung gợi ý

```text
Dành riêng cho vợ yêu Thanh Tâm của anh.
```

Button:

```text
Mở món quà từ trái tym anh
```

### Behavior

- Màn hình opening chiếm toàn bộ viewport.
- Có animation trái tim, ánh sáng, sparkle hoặc gradient mềm.
- Khi click button:
  - Opening biến mất bằng fade-out.
  - Main content hiện ra.
  - Nhạc nền phát nếu browser cho phép.
  - Nhúng video nhạc nền tại URL sau: https://www.youtube.com/watch?v=oM_JJIJygYw
  - Hiệu ứng trái tim bắt đầu.

### Acceptance Criteria

- Opening screen hiển thị đẹp trên mobile.
- Button dễ bấm.
- Không lỗi nếu nhạc không phát do browser policy.
- Nếu audio bị block, website vẫn hoạt động bình thường.

---

## 2. Hero Section

### Mục tiêu

Gửi lời nhắn đầu tiên thật ngắn, ngọt ngào và cảm xúc.

### Nội dung gợi ý

Title:

```text
Gửi em, người làm thế giới của anh dịu dàng hơn
```

Subtitle:

```text
Anh đã làm một điều nhỏ này bằng tất cả sự chân thành của mình.
```

### Behavior

- Có typing effect hoặc fade-in từng dòng.
- Có ảnh nền hoặc gradient.
- Có icon trái tim/mặt trăng/sao tùy theme.

### Acceptance Criteria

- Text rõ, dễ đọc.
- Không quá nhiều chữ.
- Có cảm giác mở đầu câu chuyện.

---

## 3. Love Counter

### Mục tiêu

Hiển thị số ngày hai người đã bên nhau.

### Data input

Từ `config.js`:

```js
startDate: "2024-02-14"
```

### Output

Hiển thị:

```text
Chúng ta đã bên nhau
xxx ngày
xxx giờ
xxx phút
xxx giây
```

### Behavior

- Tự tính từ ngày bắt đầu đến thời điểm hiện tại.
- Cập nhật theo thời gian thực mỗi giây hoặc mỗi phút.

### Acceptance Criteria

- Tính đúng ngày.
- Không crash nếu startDate chưa được set.
- Có fallback text nếu thiếu ngày.

---

## 4. Timeline Section

### Mục tiêu

Kể lại các mốc kỷ niệm đáng nhớ.

### Data input

Mỗi timeline item gồm:

```js
{
  date: "2024/02/14",
  title: "Ngày đầu tiên của chúng ta",
  description: "Một ngày rất bình thường, nhưng từ đó mọi thứ trở nên đặc biệt.",
  image: "assets/images/album/photo-01.jpg"
}
```

### UI

- Dạng vertical timeline.
- Mỗi mốc là một card.
- Có ngày, title, description, ảnh optional.
- Scroll reveal animation.

### Acceptance Criteria

- Timeline render từ config.
- Nếu item không có ảnh thì card vẫn đẹp.
- Responsive tốt trên mobile.

---

## 5. Gallery Section

### Mục tiêu

Hiển thị album ảnh của hai người.

### Data input

Mỗi ảnh gồm:

```js
{
  src: "assets/images/album/photo-01.jpg",
  caption: "Ngày hôm đó em cười rất xinh."
}
```

### UI Options

- Polaroid card gallery
- Masonry grid
- Carousel nhẹ
- Click ảnh mở modal/lightbox

### Behavior

- Render ảnh từ config.
- Có caption dưới ảnh.
- Khi click ảnh, mở ảnh lớn trong modal.

### Acceptance Criteria

- Ảnh không bị méo.
- Có object-fit: cover.
- Nếu ảnh không tồn tại, hiển thị placeholder nhẹ nhàng hoặc bỏ qua item.
- Trải nghiệm tốt trên điện thoại.

---

## 6. Reasons Section

### Mục tiêu

Hiển thị các lý do yêu cô ấy.

### Data input

```js
reasons: [
  "Vì em luôn làm anh cảm thấy bình yên.",
  "Vì nụ cười của em khiến một ngày bình thường trở nên thật đẹp.",
  "Vì ở bên em, anh được là chính mình."
]
```

### UI

- Card nhỏ.
- Có số thứ tự.
- Có icon trái tim.
- Có thể ban đầu show 6 items, click “Xem thêm” để hiển thị hết.

### Acceptance Criteria

- Render từ config.
- Có animation khi card xuất hiện.
- Dễ đọc, không quá rối.

---

## 7. Letter Section

### Mục tiêu

Một bức thư tình chân thành.

### Nội dung gợi ý

```text
Em à,

Anh không biết phải bắt đầu từ đâu để nói hết những điều trong lòng mình.
Từ ngày có em, những điều rất bình thường cũng trở nên đáng nhớ hơn.

Anh không hứa rằng mình sẽ luôn hoàn hảo.
Nhưng anh hứa sẽ luôn cố gắng để em cảm thấy được yêu thương,
được lắng nghe và được trân trọng.

Cảm ơn em vì đã đến, ở lại,
và làm thế giới của anh trở nên ấm áp hơn.

Yêu em.
```

### UI

- Dạng love letter card.
- Background giấy thư hoặc card trắng kem.
- Có line-height thoải mái.
- Có thể dùng typing/fade-in nhẹ.

### Acceptance Criteria

- Text dễ đọc.
- Không bị dài quá trên mobile.
- Có cảm giác như bức thư riêng.

---

## 8. Final Button / Hug Popup

### Mục tiêu

Tạo đoạn kết dễ thương và cảm xúc.

### Button options

```text
Nhận một cái ôm từ anh
```

hoặc

```text
Em có muốn cùng anh viết tiếp chương sau không?
```

### Popup message

```text
Đã gửi đến em một cái ôm thật chặt.
Kèm theo rất nhiều yêu thương.
```

### Optional funny behavior

Có hai button:

```text
Có, em đồng ý
Để em suy nghĩ thêm
```

Button “Để em suy nghĩ thêm” có thể chạy trốn khi hover/click.

### Acceptance Criteria

- Popup hoạt động tốt.
- Có hiệu ứng confetti/trái tim.
- Không gây khó chịu trên mobile.
