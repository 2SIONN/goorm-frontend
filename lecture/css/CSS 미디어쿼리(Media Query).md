# CSS 미디어쿼리(Media Query)

날짜: 2025년 7월 15일

미디어쿼리는 웹페이지를 **다양한 화면 크기와 장치에 맞게 스타일을 다르게 적용**할 수 있도록 도와주는 CSS 기능입니다. 반응형 웹 디자인의 필수 도구입니다.

---

## 🎯 미디어쿼리란?

> 화면의 크기, 방향, 해상도 등에 따라 CSS 스타일을 다르게 적용하는 기능
> 

```css
@media 조건 {
  /* 조건이 만족될 때 적용할 CSS */
}

```

---

## ✅ 기본 예시

```css
/* 768px 이하일 때 적용 */
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}

```

```css
/* 1024px 이상일 때 적용 */
@media (min-width: 1024px) {
  body {
    font-size: 18px;
  }
}

```

---

## 📏 주요 미디어 조건

| 조건 | 설명 | 예시 |
| --- | --- | --- |
| `min-width` | 지정한 너비 **이상**일 때 | `@media (min-width: 600px)` |
| `max-width` | 지정한 너비 **이하**일 때 | `@media (max-width: 768px)` |
| `min-height` / `max-height` | 높이 조건 | `@media (min-height: 500px)` |
| `orientation` | 화면 방향 (가로/세로) | `@media (orientation: portrait)` |
| `screen` / `print` | 스크린, 프린터 | `@media only screen and ...` |
| `resolution` | 화면 해상도 (선택적) | `@media (min-resolution: 2dppx)` |

---

## 📱 방향(Orientation) 예시

```css
/* 화면이 가로일 때 적용 */
@media (orientation: landscape) {
  body {
    background-color: lightgreen;
  }
}

```

---

## 📈 반응형 웹 패턴 (모바일 퍼스트)

```css
/* 기본 (모바일) */
body {
  font-size: 14px;
}

/* 태블릿 */
@media (min-width: 768px) {
  body {
    font-size: 16px;
  }
}

/* 데스크탑 */
@media (min-width: 1200px) {
  body {
    font-size: 18px;
  }
}

```

---

## ⚙️ 미디어쿼리 조합

### AND 조건

```css
@media (min-width: 600px) and (orientation: portrait) {
  body {
    background-color: pink;
  }
}

```

### OR 조건 (쉼표 사용)

```css
@media (max-width: 500px), (orientation: landscape) {
  body {
    background-color: orange;
  }
}

```

---

## 🎯 `device-pixel-ratio`란?

> *디바이스 픽셀 비율(Device Pixel Ratio)**에 따라 스타일을 다르게 적용하는 방법을 정리합니다. 고해상도(레티나) 디스플레이에서는 더 선명한 이미지나 다른 스타일을 적용할 때 유용합니다.
> 

| 디바이스 종류 | 픽셀 비율 예시 |
| --- | --- |
| 일반 디스플레이 | 1x |
| 레티나 디스플레이 | 2x |
| 고밀도 디스플레이 | 3x 이상 |

---

## 📐 미디어쿼리 사용법

```css
/* 크롬, 사파리용 (비표준 접두사) */
@media (-webkit-min-device-pixel-ratio: 2) { }

/* 표준 CSS */
@media (min-resolution: 2dppx) { }

```

### 📄 예제 1: CSS `background-image` 방식

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <title>Device Pixel Ratio 예제</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: #ccc;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 20px;
    }

    /* 고해상도 화면 (2x 이상)일 때 스타일 변경 */
    @media
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 2dppx) {

      .box {
        background-color: #3498db;
        font-size: 24px;
      }
    }
  </style>
</head>
<body>

  <div class="box">화면 확인</div>

</body>
</html>

```

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <title>고해상도 이미지 교체</title>
  <style>
    .logo {
      width: 200px;
      height: 100px;
      background-image: url('logo.png');
      background-size: contain;
      background-repeat: no-repeat;
    }

    /* 레티나 (2x) */
    @media
      (-webkit-min-device-pixel-ratio: 2),
      (min-resolution: 2dppx) {
      .logo {
        background-image: url('logo@2x.png');
      }
    }

    /* 초고해상도 (3x) */
    @media
      (-webkit-min-device-pixel-ratio: 3),
      (min-resolution: 3dppx) {
      .logo {
        background-image: url('logo@3x.png');
      }
    }
  </style>
</head>
<body>

  <div class="logo"></div>

</body>
</html>

```

---

### 📄 예제 2: HTML `<img srcset="">` 방식 (추천)

```html
<img
  src="logo.png"
  srcset="logo@2x.png 2x, logo@3x.png 3x"
  alt="로고 이미지"
  width="200"
  height="100" />

```

브라우저가 자동으로 해상도에 맞는 이미지를 골라서 보여줍니다.

---

## 🔎 차이점 비교

| 방식 | 장점 | 단점 |
| --- | --- | --- |
| `background-image` | CSS로 디자인 요소 제어 쉬움 | HTML에 노출되지 않음 (접근성 낮음) |
| `<img srcset>` | 브라우저 자동 최적화, 접근성 높음 | 배경 이미지처럼 스타일링 어렵다 |

---

## 🙋🏻‍♀️ 어떤 경우에 써야 할까?

| 사용 상황 | 추천 방식 |
| --- | --- |
| 로고, 배경, 아이콘 등 디자인 요소 | `background-image` |
| 콘텐츠 이미지 (사진, 상품 이미지 등) | `<img srcset="">` |

---

## ✅ 요약

- 고해상도 기기에서는 더 큰 이미지로 교체해줘야 선명하게 보임
- CSS `@media` + `background-image`로 처리 가능
- HTML `<img srcset="">` 방식도 매우 유용
- 이미지 크기는 **기기 배율에 맞게 2x, 3x로 준비해야 함**

---

**미디어쿼리**를 잘 활용하면 하나의 코드로 **모바일부터 데스크탑까지 대응하는 반응형 웹페이지**를 만들 수 있습니다! 🚀