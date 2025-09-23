# git remote

날짜: 2025년 7월 18일

> Git Remote = 내 컴퓨터(Git 로컬 저장소)와 깃허브 같은 서버(원격 저장소)를 연결하는 기능
> 

---

## ✅ 1. git Remote란?

- **git Remote** : 그 원격 저장소와 연결하는 기능
- 로컬에서 만든 프로젝트를 **깃허브(GitHub)**, **깃랩(GitLab)** 등의 원격 서버에 올리고 관리할 때 사용

---

## ✅ 2. 왜 필요할까?

- 코드 백업
- 팀원과 협업 (코드 공유)
- 다른 컴퓨터에서도 프로젝트 작업 가능

---

## ✅ 3. 원격 저장소 예시

| 플랫폼 | 설명 |
| --- | --- |
| GitHub | 가장 많이 사용하는 원격 저장소 |
| GitLab | 기업용으로 많이 사용 |
| Bitbucket | 회사 프로젝트에서 사용됨 |

---

## ✅ 4. 주요 명령어

| 명령어 | 설명 |
| --- | --- |
| `git remote` | 현재 연결된 원격 저장소 목록 보기 |
| `git remote -v` | 원격 저장소 목록 + 연결된 주소(URL) 보기 |
| `git remote add <이름> <주소>` | 새로운 원격 저장소 연결하기 |
| `git remote remove <이름>` | 연결된 원격 저장소 삭제 |
| `git remote rename <이전이름> <새이름>` | 원격 저장소 이름 바꾸기 |

---

## ✅ 5. 실습 예제

### ① 원격 저장소 연결하기

```bash
git remote add origin <https://github.com/내아이디/저장소이름.git>

```

- **origin** : 원격 저장소 기본 이름
- 주소 : 깃허브에서 받은 저장소 주소

---

### ② 연결된 원격 저장소 확인

```bash
git remote -v

```

**예시 결과:**

```
origin  <https://github.com/내아이디/저장소이름.git> (fetch)
origin  <https://github.com/내아이디/저장소이름.git> (push)

```

---

### ③ 원격 저장소로 코드 올리기

```bash
git push -u origin main

```

- **origin** : 원격 저장소 이름
- **main** : 현재 브랜치 이름 (기본값 main 또는 master)

---

### ④ 원격 저장소에서 코드 가져오기

```bash
git pull origin main

```

- 서버의 최신 코드 → 내 컴퓨터로 가져오기

---

### ⑤ 원격 저장소 연결 삭제

```bash
git remote remove origin

```

- 원격 저장소 연결 삭제

---

### ⑥ 원격 저장소 이름 변경

```bash
git remote rename origin upstream

```

- 원격 저장소 이름을 origin → upstream으로 변경

---

## ✅ 6. 원격 저장소 관리

| 상황 | 사용 방법 |
| --- | --- |
| 깃허브로 첫 푸시 | `git remote add` 후 `git push` |
| 깃허브 저장소를 옮긴 경우 | `git remote set-url` 사용 |
| 협업할 다른 원격 저장소 추가 | `git remote add upstream` 사용 |
| 원격 연결 확인하고 관리하고 싶을 때 | `git remote -v` 사용 |

---

## ✅ 7. 참고: URL 바꾸는 법

```bash
git remote set-url origin <https://github.com/새아이디/새저장소.git>

```

- 연결된 원격 저장소 주소(URL)를 변경할 때 사용

---

## 🎯 결론

- **git remote**는 내 컴퓨터 프로젝트와 서버 프로젝트를 연결하는 명령어
- 원격 저장소에 코드를 올리거나, 내려받거나, 연결을 관리할 때 필수
- 깃허브와 함께 항상 사용하게 되는 기능

---

## 📢 가장 많이 사용하는 명령어 3개

```bash
git remote add origin 저장소주소   # 원격 저장소 연결
git push -u origin main           # 원격으로 코드 업로드
git pull origin main              # 원격 코드 가져오기

```

---