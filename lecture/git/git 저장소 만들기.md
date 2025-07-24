# git 저장소 만들기

날짜: 2025년 7월 18일

## ✅ 1. `git init` : 새 저장소 만들기

> 내 컴퓨터에서 완전히 새로운 Git 프로젝트를 시작할 때 사용
> 

### 사용 방법

```bash
mkdir my-project       # 새 폴더 만들기
cd my-project          # 폴더로 이동
git init               # Git 저장소 생성

```

### 결과

- 현재 폴더에 숨겨진 `.git` 폴더가 생성됨
- 이 폴더가 **Git 저장소** 역할을 하며 모든 기록을 관리
- 앞으로 파일을 만들고 커밋할 수 있음

### 사용 예시

- 개인 프로젝트 시작할 때
- 아무것도 없는 빈 폴더에서 작업을 시작할 때

---

### 📡 로컬 저장소를 원격 저장소로 올리는 방법

1. **깃허브에서 원격 저장소 만들기**
    - [https://github.com/](https://github.com/) 접속
    - ➡️ **New repository** 클릭
    - 저장소 이름 입력 ➡️ **Create repository**
    
    **원격 저장소 주소 예시:**
    
    ```
    <https://github.com/내아이디/저장소이름.git>
    
    ```
    
2. **깃허브에서 원격 저장소 만들기**
    
    ```bash
    cd 내프로젝트폴더
    git init
    
    ```
    
    > 폴더가 Git으로 관리되기 시작합니다.
    > 
3. 브랜치 이름을 main으로 변경하기
    
    > Git 기본 브랜치가 master로 설정될 경우 main으로 변경하기
    > 
    
    ```bash
    git branch -M main
    
    ```
    
    | 명령어 | 설명 |
    | --- | --- |
    | `git branch -M main` | 현재 브랜치 이름을 main으로 강제 변경 |
    
    ※ Git 최신 버전은 기본 브랜치가 main입니다. 구버전은 master일 수 있습니다.
    
4. 파일 추가 + 커밋하기
    
    ```bash
    git add .                      # 모든 파일 스테이징
    git commit -m "첫 커밋 메시지"  # 첫 스냅샷 저장
    
    ```
    
5. 원격 저장소 연결하기
    
    ```bash
    git remote add origin <https://github.com/내아이디/저장소이름.git>
    
    ```
    
    | 명령어 예시 | 설명 |
    | --- | --- |
    | origin | 원격 저장소 이름 (보통 기본값) |
    | 주소 | 깃허브에서 제공한 저장소 주소 |
6. 로컬 코드를 원격 저장소로 올리기 (푸시)
    
    ```bash
    git push -u origin main
    
    ```
    
    | 명령어 | 설명 |
    | --- | --- |
    | git push -u origin main | main 브랜치를 origin(원격 저장소)에 올리기 |
    
    ※ 이후부터는 단순히 `git push`만 입력해도 자동으로 푸시됨.
    

---

### 📊 전체 과정 요약

| 단계 | 명령어 예시 | 설명 |
| --- | --- | --- |
| 1 | `git init` | 로컬에서 Git 시작 |
| 2 | `git branch -M main` | 브랜치명을 main으로 변경 (선택) |
| 3 | `git add .` + `git commit -m "메시지"` | 파일 추가 + 커밋 |
| 4 | `git remote add origin <https://github.com/내아이디/저장소.git`> | 원격 저장소 연결 |
| 5 | `git push -u origin main` | 원격 저장소로 코드 업로드 |

---

### 🎯 한 줄 요약

> 내 컴퓨터(로컬 저장소) → 깃허브(원격 저장소)
> 
> 
> 1️⃣ `git init`
> 
> 2️⃣ `git branch -M main`
> 
> 3️⃣ `git add .` + `git commit`
> 
> 4️⃣ `git remote add origin 주소`
> 
> 5️⃣ `git push -u origin main`
> 

---

## ✅ 2. `git clone` : 기존 프로젝트 복사해오기

> 원격 저장소(예: 깃허브)에 있는 프로젝트를 내 컴퓨터로 복사할 때 사용
> 

### 사용 방법

```bash
git clone <https://github.com/사용자/저장소이름.git>

```

### 결과

- 깃허브에 있는 프로젝트를 그대로 내 컴퓨터에 복사
- 자동으로 `.git` 폴더도 함께 복사됨 → Git 연결 자동 완료
- 바로 커밋, 푸시 작업 가능

### 사용 예시

- 팀 프로젝트를 이어받을 때
- 깃허브에서 소스코드를 가져올 때
- 다른 사람이 만든 오픈소스 프로젝트에 기여할 때

---

## 🎯 두 방법 비교

| 기능 | `git init` | `git clone` |
| --- | --- | --- |
| 용도 | 새 프로젝트 시작 | 기존 프로젝트 복사 |
| 연결 | 로컬 저장소 생성 | 원격 저장소(GitHub 등)와 자동 연결 |
| `.git` 폴더 | 직접 생성됨 | 자동으로 함께 복사됨 |
| 사용 상황 | 처음부터 내 프로젝트로 시작 | 기존 프로젝트를 가져와서 이어서 작업할 때 |