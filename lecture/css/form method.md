# method

날짜: 2025년 7월 16일

웹에서 데이터를 전송하거나 서버와 통신할 때 사용하는 **form 메서드(method 속성)**와

**REST API 메서드(HTTP Method)**의 개념과 차이를 정리한 문서입니다.

---

## 📌 1. HTML Form Method란?

HTML `<form>` 태그에서 사용하는 속성으로,

사용자가 입력한 데이터를 서버로 전송하는 방식을 지정합니다.

```html
<form action="/submit" method="POST">
  <!-- 입력 폼 -->
</form>

```

### 📮 Form Method 종류

| 메서드 | 설명 |
| --- | --- |
| `GET` | 데이터 전송을 URL에 붙여 전송 (쿼리스트링 방식) |
| `POST` | 데이터 전송을 HTTP 요청 본문에 담아서 전송 |

---

## 📌 2. REST API Method란?

HTTP 통신에서 사용하는 표준 메서드로,

서버의 자원을 제어하거나 데이터를 CRUD 방식으로 다루기 위한 프로토콜입니다.

```
fetch('/users/1', {
  method: 'DELETE'
});

```

### 🌐 REST API 주요 메서드

| 메서드 | 기능 |
| --- | --- |
| `GET` | 데이터 조회(Read) |
| `POST` | 새 데이터 등록(Create) |
| `PUT` | 기존 데이터 전체 수정(Update) |
| `PATCH` | 기존 데이터 일부 수정(Update) |
| `DELETE` | 데이터 삭제(Delete) |

---

## 📊 폼 메서드 vs REST API 메서드 비교

| 구분 | 폼 메서드 | REST API 메서드 |
| --- | --- | --- |
| 역할 | 폼 데이터 전송 (사용자 입력 제출) | 서버 자원 관리 (CRUD) |
| 사용 환경 | HTML `<form>` 태그 | 웹 통신 프로토콜 (AJAX, fetch 등) |
| 가능한 메서드 | GET, POST | GET, POST, PUT, PATCH, DELETE 등 |
| 데이터 위치 (POST 기준) | 요청 본문 (body) | 요청 본문 (body) |
| 목적 | 단순 데이터 제출 | 자원 상태 변경 및 조작 |

---

## 📡 네트워크 요청 차이

### 📬 GET 요청 (폼 / REST API 공통)

| 특징 | 설명 |
| --- | --- |
| 데이터 전송 | URL 뒤에 붙여 전송 (쿼리스트링) |
| 데이터 표시 | 주소창에 노출됨 |
| 요청 본문 | 없음 |

**예시:**

```
GET /submit?name=홍길동 HTTP/1.1

```

---

### 📦 POST 요청 (폼 / REST API 공통)

| 특징 | 설명 |
| --- | --- |
| 데이터 전송 | 요청 본문에 포함되어 전송 |
| 데이터 표시 | URL에 노출되지 않음 |
| 요청 본문 | 데이터 포함 (예: JSON, 폼데이터 등) |

**예시:**

```
POST /submit HTTP/1.1
Content-Type: application/x-www-form-urlencoded

name=홍길동&email=test@example.com

```

---

## 📌 결론

- **HTML Form Method**는 데이터 전송 방법 (단순 전송)
- **REST API Method**는 웹 통신 프로토콜 (자원 관리 및 서버 조작)

REST API는 보다 범용적이고 강력한 데이터 제어 기능을 제공합니다.