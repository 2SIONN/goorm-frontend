# git merge

날짜: 2025년 7월 21일

---

## 😀 Merge (브랜치 병합)

### 1️⃣ **3-way Merge (3-방향 병합)**

- 병합할 때 **공통 조상 / 현재 브랜치 / 병합할 브랜치** 세 가지 기준으로 병합
- 일반적인 `git merge`

![image.png](git%20merge%2023482e0c2676806cae77da6671a303be/image.png)

**두 개의 브랜치를 그대로 합치는 것**

```
main:   A---B---C
                  \\
feature:           D---E

```

```bash
git merge feature

```

**병합 후**

```
main:   A---B---C---F
                  \\ /
                   D---E

```

- F : 병합 커밋(Merge Commit)

---

### 2️⃣ Fast-forward Merge (빠른 병합)

**브랜치가 분기된 후 다른 작업이 없을 때**

![image.png](git%20merge%2023482e0c2676806cae77da6671a303be/image%201.png)

```
main:    A---B---C
                  \\
feature:           D---E

```

```bash
git merge feature

```

**결과 (Fast-forward로 병합됨)**

```
main:    A---B---C---D---E

```

- 병합 커밋 없이 브랜치 포인터만 앞으로 이동

---

### 3️⃣ Squash (커밋 압축 병합)

**브랜치에서 만든 여러 커밋을 하나로 합쳐서 병합**

```
main:    A---B---C
                   \\
feature:            D---E---F

```

```bash
git merge --squash feature
git commit -m "기능 추가 완료"

```

**병합 후**

```
main:    A---B---C---G

```

- G : 하나로 합쳐진 단일 커밋

---

## 🤬 Rebase (커밋 이동)

**브랜치에서 작업한 커밋을 다른 브랜치 끝으로 옮김**

원래 구조:

```
main:    A---B---C
                   \\
feature:            D---E

```

```bash
git checkout feature
git rebase main

```

Rebase 후:

```
main:    A---B---C---D'---E'

```

- D' E' : 커밋이 재작성됨 (히스토리 깔끔)

**주의**: 협업 중 공유된 브랜치에서는 리베이스 사용 주의!

---

## 🥶 Submodule (서브모듈)

**다른 Git 프로젝트를 내 프로젝트 안에 포함시키는 기능**

```bash
git submodule add <https://github.com/다른프로젝트.git> 폴더이름

```

폴더 구조:

```
내 프로젝트/
 ├── 메인 코드
 └── 라이브러리 코드 (서브모듈)

```

- 서브모듈은 독립적으로 버전 관리됨
- 필요할 때 서브모듈로 이동하여 직접 pull 해야 최신화됨

---

# 🛠️ 실습 예제

## ✅ Merge 실습

```bash
git checkout main
git merge feature

```

## ✅ Squash 실습

```bash
git checkout main
git merge --squash feature
git commit -m "기능 추가"

```

## ✅ Rebase 실습

```bash
git checkout feature
git rebase main

```

## ✅ Submodule 실습

```bash
git submodule add <https://github.com/사용자/프로젝트.git> 라이브러리폴더
git submodule update --init --recursive

```

---

# 📊 비교 요약표

| 개념 | 기록 관리 | 병합 커밋 | 특징 |
| --- | --- | --- | --- |
| Merge | 복잡 | O | 브랜치 기록 유지 |
| Rebase | 깔끔 | X | 커밋 이동으로 히스토리 재작성 |
| Submodule | 별도 | 해당없음 | 다른 프로젝트 포함 |

---

# 🎯 정리

- **Merge** : 브랜치를 그대로 합치고 기록을 남긴다.
- **Squash** : 여러 커밋을 하나로 합쳐서 기록을 깔끔하게 만든다.
- **3-way Merge** : 표준 병합 알고리즘.
- **Fast-forward** : 브랜치가 따로 작업 없을 때 포인터만 이동.
- **Rebase** : 브랜치를 재배열하여 기록을 일자로 만든다.
- **Submodule** : 다른 Git 프로젝트를 내 프로젝트에 포함시킨다.