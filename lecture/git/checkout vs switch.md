# checkout vs switch

날짜: 2025년 7월 21일

## ✅ 1️⃣ `git checkout`

> 브랜치 작업과 파일 복구를 모두 담당하는 전통적인 명령어
> 

### 📌 사용법

```bash
git checkout 브랜치이름          # 브랜치 이동
git checkout -b 새브랜치이름     # 새 브랜치 생성 후 이동
git checkout 커밋ID 파일명       # 특정 커밋의 파일 상태로 복원

```

### 📌 특징

- 브랜치 이동 + 파일 복구 기능 모두 포함
- 초보자에게 헷갈리기 쉬움

---

## ✅ 2️⃣ `git switch`

> 브랜치 관련 작업만 전담하는 최신 명령어
> 
> 
> (Git 2.23+ 버전부터 추가)
> 

### 📌 사용법

```bash
git switch 브랜치이름         # 브랜치 이동
git switch -c 새브랜치이름    # 새 브랜치 생성 후 이동

```

- `c` : create (새 브랜치 생성)

### 📌 특징

- 브랜치 이동/생성 전용
- 파일 복구 기능 없음 (`git restore`로 분리됨)
- 사용법이 단순하고 직관적

---

## 📊 `git checkout` vs `git switch` 차이점

| 기능 | `git checkout` | `git switch` |
| --- | --- | --- |
| 브랜치 이동 | ✅ | ✅ |
| 브랜치 생성 | ✅ (`-b` 옵션) | ✅ (`-c` 옵션) |
| 파일 복구 | ✅ | ❌ |
| 역할 분리 | ❌ (혼합) | ✅ (브랜치 전용) |
| 학습 난이도 | 약간 복잡 | 단순, 직관적 |
| 도입 시기 | 오래된 명령어 | 최신 명령어 (Git 2.23+) |

---

## 🍯 커밋으로 이동하는 방법

### ✅ 1️⃣ `git checkout` (전통적 방법)

```bash
git checkout 커밋ID

```

- 해당 커밋으로 이동
- **Detached HEAD 상태**로 진입
- 과거 커밋 기준으로 코드를 수정하거나 확인할 수 있음

**예시**

```bash
git checkout abc1234
```

### ✅ 2️⃣ `git switch --detach` (최신 방법)

> Git 2.23+ 버전부터 지원되는 최신 방식
> 

```bash
git switch --detach 커밋ID

```

- Detached HEAD 상태로 해당 커밋으로 이동
- 브랜치를 가리키지 않고 커밋 자체를 가리키는 상태가 됨

**예시**

```bash
git switch --detach abc1234

```

---

### ⚠️ Detached HEAD 상태란?

- 브랜치가 아닌 커밋 ID를 직접 가리키는 상태
- 새 커밋을 만들어도 브랜치로 이어지지 않음
- 브랜치를 만들어서 저장해야 안전함

---

### ✅ 실습 예시

```bash
# 방법 1 (전통 방식)
git checkout abc1234

# 방법 2 (최신 방식)
git switch --detach abc1234

```

---