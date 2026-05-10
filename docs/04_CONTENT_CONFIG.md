# 04. Content Config

File này mô tả dữ liệu nên được đưa vào `assets/js/config.js`.

Codex hãy tạo một object cấu hình tên `LOVE_CONFIG`.

## Config structure đề xuất

```js
const LOVE_CONFIG = {
  couple: {
    senderName: "Anh",
    receiverName: "Em",
    startDate: "2023-07-15"
  },

  opening: {
    title: "Dành riêng cho cô gái đặc biệt nhất của anh",
    buttonText: "Mở món quà của anh"
  },

  hero: {
    title: "Gửi em, người làm thế giới của anh dịu dàng hơn",
    subtitle: "Anh đã làm một điều nhỏ này bằng tất cả sự chân thành của mình.",
    typingMessages: [
      "Anh không giỏi nói lời hoa mỹ...",
      "Nhưng anh muốn dùng code để gửi đến em một điều thật chân thành.",
      "Cảm ơn em vì đã xuất hiện trong cuộc đời anh."
    ]
  },

  timeline: [
    {
      date: "2024/02/14",
      title: "Ngày đầu tiên của chúng ta",
      description: "Một ngày rất bình thường, nhưng từ đó mọi thứ trở nên đặc biệt.",
      image: "assets/images/album/photo-01.jpg"
    },
    {
      date: "2024/05/20",
      title: "Kỷ niệm đầu tiên",
      description: "Anh vẫn nhớ cảm giác khi được ở bên em ngày hôm đó.",
      image: "assets/images/album/photo-02.jpg"
    },
    {
      date: "2024/12/24",
      title: "Một mùa đông ấm áp",
      description: "Có em bên cạnh, mùa đông cũng trở nên dịu dàng hơn.",
      image: "assets/images/album/photo-03.jpg"
    }
  ],

  gallery: [
    {
      src: "assets/images/album/photo-01.jpg",
      caption: "Ngày hôm đó em cười rất xinh."
    },
    {
      src: "assets/images/album/photo-02.jpg",
      caption: "Một khoảnh khắc nhỏ nhưng anh nhớ mãi."
    },
    {
      src: "assets/images/album/photo-03.jpg",
      caption: "Cảm ơn em vì đã cùng anh lưu giữ kỷ niệm này."
    }
  ],

  reasons: [
    "Vì em luôn làm anh cảm thấy bình yên.",
    "Vì nụ cười của em khiến một ngày bình thường trở nên thật đẹp.",
    "Vì ở bên em, anh được là chính mình.",
    "Vì em luôn cố gắng theo cách rất đáng trân trọng.",
    "Vì chỉ cần nghĩ đến em, anh đã thấy trong lòng ấm hơn.",
    "Vì em là người anh muốn kể mọi chuyện nhỏ nhặt trong ngày.",
    "Vì em khiến anh muốn trở thành một phiên bản tốt hơn của chính mình.",
    "Vì anh yêu cả những điều rất giản dị nơi em."
  ],

  letter: {
    title: "Một bức thư nhỏ gửi em",
    paragraphs: [
      "Em à,",
      "Có những điều anh không phải lúc nào cũng nói ra được, nhưng trong lòng anh luôn ghi nhớ rất rõ: em đã mạnh mẽ, kiên nhẫn và hy sinh nhiều đến nhường nào trong hành trình IVF này.",
      "Anh biết, con đường mình đang đi không hề dễ dàng. Có những ngày em phải chịu đau, chịu mệt, chịu áp lực, vừa lo lắng vừa hy vọng. Có những lần chờ đợi kết quả khiến trái tim mình như thắt lại. Và dù anh luôn ở bên cạnh, anh hiểu rằng người chịu đựng nhiều nhất vẫn là em.",
      "Cảm ơn em vì đã không buông tay. Cảm ơn em vì đã cùng anh bước qua từng lần thử thách, từng nỗi lo, từng giọt nước mắt. Anh thương em nhiều hơn mỗi ngày, không chỉ vì em là vợ anh, mà còn vì anh nhìn thấy trong em một người phụ nữ vô cùng bản lĩnh, giàu yêu thương và đáng trân trọng.",
      "Anh muốn em biết rằng: dù kết quả đến sớm hay muộn, anh vẫn luôn ở đây, nắm tay em, cùng em đi tiếp. Anh tin rằng những cố gắng, những đau đớn và hy sinh của em rồi sẽ được đền đáp bằng một điều thật xứng đáng.",
      "Em không cô đơn trên hành trình này. Mọi mũi tiêm, mọi lần thăm khám, mọi lần chờ đợi, anh đều ghi nhớ. Anh biết ơn em, thương em và càng yêu em nhiều hơn vì tất cả những gì em đã làm cho gia đình mình.",
      "Mình cùng cố gắng thêm nhé, em yêu. Anh tin ngày hạnh phúc ấy rồi sẽ đến.",
      "Thương em rất nhiều."
    ]
  },

  final: {
    question: "Em có muốn cùng anh viết tiếp những chương thật đẹp phía sau không?",
    primaryButton: "Nhận một cái ôm từ anh",
    secondaryButton: "Để em suy nghĩ thêm",
    popupTitle: "Đã gửi một cái ôm thật chặt",
    popupMessage: "Kèm theo rất nhiều yêu thương và một lời hứa sẽ luôn trân trọng em."
  },

  music: {
    src: "assets/music/love-song.mp3",
    enabled: true
  }
};
```

## Quy tắc content

- Text nên ngắn, chân thành, không quá sến.
- Mỗi timeline item nên có 1 kỷ niệm rõ.
- Gallery caption nên cá nhân hóa theo ảnh thật.
- Reasons nên có khoảng 8–20 lý do.
- Letter nên có 4–6 đoạn là đủ.

## Các câu romantic dành cho developer

Có thể dùng ở một section nhỏ tên `Developer Love Note`:

```text
Nếu cuộc đời là một đoạn code dài, thì em chính là dòng comment dịu dàng nhất giúp anh hiểu vì sao mọi thứ trở nên có ý nghĩa.
```

```text
Trong hàng triệu dòng code anh từng viết, em là exception duy nhất mà anh không bao giờ muốn catch.
```

```text
const love = "forever";
```

## Nội dung cần người dùng tự thay

- `receiverName`
- `startDate`
- Timeline date/title/description
- Gallery image paths/caption
- Letter paragraphs
- Music file name
