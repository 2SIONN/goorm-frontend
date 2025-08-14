# 오프라인 태그형 북마크 대시보드

## Feature List

### Store.js

- [x] localStorage 기반 데이터 저장/복원 시스템
- [x] 테마 상태 localStorage 저장/복원
- [x] Pub/Sub 패턴을 활용한 상태 관리 (Store)
- [x] 불변 상태 업데이트 (스프레드 연산자)
- [x] localStorage 에러 핸들링
- [x] 가짜 비동기 처리 (async/await)
- [x] Set 직렬화/역직렬화 (배열 ↔ Set 변환)

### Magnager.js

- [x] 북마크 추가 (Create)
- [x] 태그 파싱 (쉼표 구분, 트림, 빈 값 제거)
- [x] 북마크 삭제 (Delete)
- [x] 제목에서 검색
- [x] 태그에서 검색
- [x] `recent`: createdAt 내림차순 정렬
- [x] `title`: localeCompare로 제목 오름차순
- [x] `tags`: 태그 개수 내림차순 정렬
- [x] 대소문자 구분 없는 검색
- [x] Set 기반 태그 필터링
- [x] 선택된 태그 하나 이상 포함하는 항목 표시

### renderer.js

- [x] 외부 링크 안전 설정 (`target="_blank" rel="noreferrer"`)
- [x] 선택된 태그 토글 시 색상 변경
- [x] URL/메모 구분
- [x] data-id, data-tag 속성 설정
- [x] 작성일 추가

### handleEvents.js

- [x] 이벤트 위임을 통한 삭제 버튼 처리
- [x] closest() 메서드 활용
- [x] 제목 필수 입력 검증
- [x] 필터 초기화 기능
- [x] 태그 배지 클릭으로 토글
- [x] 디바운스 검색 (300ms 대기)
- [x] 폼 리셋 및 성공 토스트
- [x] 삭제 후 토스트 알림

### utils.js

- [x] 클로저를 활용한 디바운스 함수
- [x] HTML 이스케이프 함수 (`& < > " '`)
- [x] 속성값 이스케이프 함수
- [x] 유니크 ID 생성 (`Date.now() + Math.random()`)
- [x] 날짜 포맷팅 함수

### toast.js

- [x] 2.2초 후 토스트 자동 제거

### 기타

- [x] 반응형 디자인 (모바일 지원)
- [x] Array 메서드 체이닝 (filter, map, sort)

### HTML 이스케이프

```
escapeHtml('<img src=x onerror=alert(1)>');

// 출력: "&lt;img src=x onerror=alert(1)&gt;"

```
