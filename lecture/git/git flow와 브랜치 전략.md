# git flow와 브랜치 전략

날짜: 2025년 7월 21일

> **Git Flow**는 프로젝트 개발과 배포 과정을 체계적으로 관리하기 위한 Git 브랜치 전략
> 
> 
> Vincent Driessen가 2010년에 제안한 방식
> 기능 개발, 테스트, 배포, 버그 수정 등을 브랜치로 구분
> 

---

## 🎬 도입 : 왜 브랜치 전략이 필요할까?

- 팀 프로젝트에서 코드 충돌 방지
- 기능 개발과 배포 안정성 확보
- 코드 품질과 협업 효율을 높이는 핵심 도구

> 브랜치 전략 = "우리 팀의 협업 규칙"
> 

---

# 📌 1️⃣ 브랜치 기본 개념 복습

- **브랜치(branch)** : 프로젝트 안에서 독립된 작업 공간
- 작업이 끝나면 **병합(merge)** 으로 코드 통합

### 브랜치의 장점

- 메인 코드를 안전하게 보호
- 여러 사람이 동시에 개발 가능
- 기능별로 작업을 분리하여 관리

---

# 🚀 2️⃣ Git 브랜치 전략의 종류

## ✅ 1. Git Flow 전략

> 기능, 릴리스, 유지보수를 모두 분리해서 관리하는 가장 전통적인 브랜치 전략
> 

### 📊 Git Flow 구조

| 브랜치 종류 | 역할 |
| --- | --- |
| `main` | 최종 배포되는 코드 |
| `release/*` | 배포 준비용 브랜치 |
| `develop` | 다음 릴리스를 위한 통합 개발 브랜치 |
| `feature/*` | 새로운 기능 개발용 브랜치 |
| `hotfix/*` | 배포 중 발견된 긴급 버그 수정 브랜치 |

### Git Flow 작업 흐름

1. `develop` 브랜치에서 기능 브랜치 분기
2. 기능 개발 완료 후 `develop`으로 병합
3. 배포 직전 `release` 브랜치에 머지
4. 배포 완료 후 `main`에 병합 + 태깅 (운영 버전관리)
5. 배포 중 긴급 버그 발생 시 `hotfix` 브랜치 사용

---

## 🛠️ 3️⃣ 실습 예시 (Git Flow)

```bash
# 기능 개발 시작
git checkout develop
git checkout -b feature/login

# 작업 후 병합
git checkout develop
git merge feature/login

# 배포 준비
git checkout -b release/1.0.0

# 배포 후
git checkout main
git merge release/1.0.0
git tag 1.0.0

```