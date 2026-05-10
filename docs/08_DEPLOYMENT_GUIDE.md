# 08. Deployment Guide

## Option 1: Chạy local

Chỉ cần mở:

```text
index.html
```

bằng browser.

Nếu audio hoặc một số asset không load ổn khi mở trực tiếp bằng `file://`, có thể chạy local server.

## Option 2: Chạy local server bằng VS Code

Cài extension:

```text
Live Server
```

Sau đó click chuột phải vào `index.html`:

```text
Open with Live Server
```

## Option 3: Chạy local server bằng Python

Nếu có Python:

```bash
python3 -m http.server 5500
```

Sau đó mở:

```text
http://localhost:5500
```

## Option 4: Deploy GitHub Pages

1. Tạo repository GitHub.
2. Push toàn bộ source code lên repository.
3. Vào Settings.
4. Chọn Pages.
5. Source: `Deploy from a branch`.
6. Branch: `main`.
7. Folder: `/root`.
8. Save.
9. Chờ GitHub tạo link.

Link sẽ có dạng:

```text
https://your-username.github.io/repository-name/
```

## Option 5: Deploy Netlify

1. Vào Netlify.
2. Chọn Add new site.
3. Chọn Deploy manually.
4. Kéo thả folder project.
5. Netlify tạo link public.

## Privacy note

Nếu website có ảnh riêng tư, nên cân nhắc:

- Không đặt repository public nếu không cần.
- Không chia sẻ link rộng rãi.
- Dùng ảnh đã resize và không chứa thông tin nhạy cảm.
