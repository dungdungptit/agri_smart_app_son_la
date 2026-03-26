# 🌱 Trợ lý AI Nông nghiệp tỉnh Sơn La - Nền tảng nông nghiệp thông minh tỉnh Sơn La

<p align="center">
  <strong>Ứng dụng hỗ trợ nông dân Việt Nam quản lý cây trồng, dự báo thời tiết, chẩn đoán sâu bệnh và cập nhật giá thị trường.</strong>
</p>

![Expo SDK](https://img.shields.io/badge/Expo-SDK%2052-000020?logo=expo)
![React Native](https://img.shields.io/badge/React%20Native-0.76-61DAFB?logo=react)
![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20iOS%20%7C%20Web-brightgreen)

---

## 📋 Mục lục

- [Tính năng](#-tính-năng)
- [Yêu cầu hệ thống](#-yêu-cầu-hệ-thống)
- [Cài đặt](#-cài-đặt)
- [Chạy ứng dụng (Development)](#-chạy-ứng-dụng-development)
- [Build Production](#-build-production)
- [Cấu trúc dự án](#-cấu-trúc-dự-án)
- [Cấu hình môi trường](#-cấu-hình-môi-trường)

---

## ✨ Tính năng

### 🏠 Trang chủ (Home)
- Hiển thị thời tiết hiện tại dựa trên vị trí GPS
- Gợi ý canh tác từ AI
- Cập nhật giá nông sản
- Bài viết kiến thức GAP

### 🌤️ Thời tiết (Weather)
- Dự báo thời tiết 7 ngày
- Dự báo theo giờ (24 giờ tiếp theo)
- Tích hợp API Open-Meteo (miễn phí, không cần API key)
- Tự động lấy vị trí GPS
- Hiển thị: nhiệt độ, độ ẩm, tốc độ gió, xác suất mưa

### 🐛 Chẩn đoán Sâu bệnh (Pest)
- **Chẩn đoán bằng AI** - Chụp ảnh hoặc chọn từ thư viện
- Hỗ trợ cây **Cà phê** và **Mắc ca**
- Upload ảnh qua ImageBB API
- Phân tích bệnh bằng AI (PTIT AI Chat)
- Lưu lịch sử chẩn đoán
- Đổi tên, xóa, xem chi tiết bản chẩn đoán

### 📊 Giá thị trường (Market)
- Cập nhật giá nông sản: cà phê, mắc ca, tiêu, điều...
- Biểu đồ xu hướng giá
- Tin mua bán nông sản

### 📚 Kiến thức GAP
- Bài viết về quy trình thực hành nông nghiệp tốt
- Hướng dẫn chăm sóc cây trồng

### 💬 Hỏi & Đáp AI (AI Chat)
- Chatbot AI thông minh tích hợp Dify API
- Hỗ trợ đa cuộc hội thoại
- Lưu lịch sử chat
- Đổi tên, xóa cuộc hội thoại
- Sidebar quản lý lịch sử

### 🔐 Xác thực
- Đăng nhập bằng số điện thoại
- Xác thực OTP

---

## 💻 Yêu cầu hệ thống

| Công cụ | Phiên bản |
|---------|-----------|
| Node.js | >= 18.x |
| npm | >= 9.x |
| Expo CLI | >= 6.x |
| EAS CLI | >= 16.28.0 |

### Để build native:
- **Android**: Android Studio, JDK 17+
- **iOS**: macOS với Xcode 15+

---

## 📦 Cài đặt

### 1. Clone repository

```bash
git clone <repository-url>
cd Trợ lý AI Nông nghiệp tỉnh Sơn La
```

### 2. Cài đặt dependencies

```bash
npm install
```

### 3. Cài đặt Expo CLI và EAS CLI (nếu chưa có)

```bash
npm install -g expo-cli eas-cli
```

### 4. Đăng nhập Expo (để sử dụng EAS Build)

```bash
eas login
```

---

## 🚀 Chạy ứng dụng (Development)

### Chạy trên Expo Go (nhanh nhất)

```bash
npm start
# hoặc
npx expo start
```

Sau đó quét QR code bằng ứng dụng Expo Go trên điện thoại.

### Chạy trên Android Emulator

```bash
npm run android
# hoặc
npx expo run:android
```

### Chạy trên iOS Simulator (chỉ macOS)

```bash
npm run ios
# hoặc
npx expo run:ios
```

### Chạy trên Web

```bash
npm run web
# hoặc
npx expo start --web
```

### Clear cache (nếu gặp lỗi)

```bash
npx expo start --clear
```

---

## 🏗️ Build Production

Trợ lý AI Nông nghiệp tỉnh Sơn La sử dụng **EAS Build** để build ứng dụng production.

### Cấu hình EAS (eas.json)

```json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  }
}
```

---

### 📱 Build Android

#### Build APK (Preview - để test)

```bash
eas build -p android --profile preview
```

#### Build AAB (Production - để upload Google Play)

```bash
eas build -p android --profile production
```

#### Build và chạy local (Development Client)

```bash
eas build -p android --profile development
```

---

### 🍎 Build iOS

> ⚠️ **Lưu ý**: Build iOS yêu cầu tài khoản Apple Developer ($99/năm)

#### Build cho TestFlight / Internal Testing

```bash
eas build -p ios --profile preview
```

#### Build cho App Store

```bash
eas build -p ios --profile production
```

---

### 🌐 Build Web

#### Export static web (SPA)

```bash
npx expo export --platform web
```

File build sẽ được xuất ra thư mục `dist/`.

#### Preview web build

```bash
npx serve dist
```

#### Deploy lên hosting (Vercel, Netlify, Firebase Hosting...)

```bash
# Ví dụ với Vercel
npx vercel dist/

# Hoặc với Netlify
npx netlify deploy --dir=dist --prod
```

---

## 📁 Cấu trúc dự án

```
Trợ lý AI Nông nghiệp tỉnh Sơn La/
├── App.js                 # Entry point
├── app.json               # Expo configuration
├── eas.json               # EAS Build configuration
├── package.json           # Dependencies
├── babel.config.js        # Babel configuration
├── .env                   # Environment variables (không commit!)
│
├── assets/                # Icons, splash screen
│   ├── icon.png
│   ├── splash-icon.png
│   └── adaptive-icon.png
│
├── src/
│   ├── navigation/
│   │   └── AppNavigator.js    # Navigation configuration
│   │
│   ├── screens/
│   │   ├── splash/            # Splash screen
│   │   ├── onboarding/        # Terms, Location, CropSelection
│   │   ├── auth/              # Login, OTP
│   │   ├── home/              # Home screen
│   │   ├── weather/           # Weather forecast
│   │   ├── pest/              # Pest diagnosis
│   │   ├── market/            # Market prices
│   │   ├── gap/               # GAP knowledge
│   │   └── qna/               # AI Chat
│   │
│   ├── services/
│   │   └── weatherService.js  # Open-Meteo API integration
│   │
│   ├── data/
│   │   └── mockData.js        # Sample data
│   │
│   └── theme/
│       └── index.js           # Design system (colors, typography)
│
└── dist/                  # Web build output
```

---

## ⚙️ Cấu hình môi trường

Tạo file `.env` tại thư mục gốc:

```env
# Pest Diagnosis API
EXPO_PUBLIC_PEST_API_URL=https://your-pest-api-url
EXPO_PUBLIC_PEST_API_KEY=your-pest-api-key

# AI Chat API (Dify)
EXPO_PUBLIC_DIFY_API_BASE=https://your-dify-api-base
EXPO_PUBLIC_DIFY_API_KEY=your-dify-api-key

# ImageBB (for image upload)
EXPO_PUBLIC_IMGBB_API_KEY=your-imgbb-api-key
```

### Cấu hình biến môi trường trên EAS Build

Để bảo mật API keys trên cloud build:

```bash
# Thêm secrets vào EAS
eas secret:create --name EXPO_PUBLIC_PEST_API_KEY --value "your-api-key"
eas secret:create --name EXPO_PUBLIC_DIFY_API_KEY --value "your-api-key"
eas secret:create --name EXPO_PUBLIC_IMGBB_API_KEY --value "your-api-key"
```

---

## 🔑 Permissions (Android)

App yêu cầu các quyền sau:

| Permission | Mục đích |
|------------|----------|
| `ACCESS_FINE_LOCATION` | Lấy vị trí GPS chính xác |
| `ACCESS_COARSE_LOCATION` | Lấy vị trí GPS tương đối |
| `CAMERA` | Chụp ảnh chẩn đoán sâu bệnh |
| `RECORD_AUDIO` | Dự phòng cho camera |

---

## 📖 API được sử dụng

| API | Mô tả | Yêu cầu Key |
|-----|-------|-------------|
| [Open-Meteo](https://open-meteo.com/) | Dự báo thời tiết | ❌ Miễn phí |
| [ImageBB](https://imgbb.com/) | Upload ảnh | ✅ Free tier |
| [Dify](https://dify.ai/) | AI Chatbot | ✅ Cần API key |
| PTIT AI Chat | Chẩn đoán sâu bệnh | ✅ Cần API key |

---

## 🤝 Đóng góp

1. Fork repository
2. Tạo branch: `git checkout -b feature/TenTinhNang`
3. Commit: `git commit -m 'Thêm tính năng XYZ'`
4. Push: `git push origin feature/TenTinhNang`
5. Tạo Pull Request

---

## 📄 License

MIT License - xem file [LICENSE](LICENSE) để biết thêm chi tiết.

---

<p align="center">
  Made with ❤️ for Vietnamese Farmers
</p>
