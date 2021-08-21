# GIT

## GIT 특징

- 단순한 구조와 빠른 속도

- 분산형 저장소 지원

- 비선형적 개발(수천개의 브랜치) 가능

## 장점

- 소스코드 주고받기 없이 동시 작업이 가능해져 생산성이 증가

- 수정 내용은 commit 단위로 관리, 배포 뿐만 아니라 원하는 시점으로 checkout도 가능

	- commit 단위 : 타임 스탬프를 찍어 시점 이동도 가능하고 전 버전에 어떤 변경사항이 존재하는지 체크 가능

- 새로운 기능 추가는 branch로 개발하여 편안한 실험이 가능하며 성공적으로 개발이 완료되면 merge하여 반영 

	- 도전적인 개발이 가능해짐

- 인터넷이 연결되지 않아도 개발 가능 (local repo)


## GIT이란?

- 작업해서 메모한 후 넘긴다

	- local : working directory( 코드 작성), staging area (기능대로 분류하여 메모 남김), local repo(쌓아놓는다)

	- remote : remote repo (local에서 넘겨 공유할 수 있다)

## 정리

1. `mkdir 디렉토리 이름`

2. `cd 디렉토리 이름`

3. git init

4. `git remote add origin {repo address}`

5. `touch 파일이름.확장자`

6. `git add 파일이름.확장자`

7. `git commit`

8. `git branch -M main` (only if default branch name is master)

9. `git push -u origin main` (remote repo와 local repo가 동일하다는 것을 알려줌 : -u)
