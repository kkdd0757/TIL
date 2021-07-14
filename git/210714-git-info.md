# GIT

## GIT 생성 방법

1. 터미널에서 CLI로 작성하기 (zero-base)

2. GIT CLONE (git init까지 되어있어 간단. 일반적으로 많이 사용됨)


## GIT 특징

- 단순한 구조와 그 덕분에 빠른 속도

- 분산형 저장소 지원

- 비선형적 개발(수천개의 브랜치) 가능


## GIT 장점

- 소스코드 주고받기 없이 동시작업 가능 (생산성 증가)

- 수정 내용은 commit단위로 관리, 배포 뿐만 아니라 원하는 시점으로 checkout가능

	- commit 단위 : 타임 스탬프를 찍어 주는것
	
	- 시점 이동 가능, 어떤 일을 하려고 했는지 메모, 변경사항존재까지 체크 가능

- 도전적인 개발 가능해짐 (branch로 가상환경에서 실험 가능, 개발 완료시 merge하여 반영)

- 인터넷이 연결되지 않아도 개발할 수 있음

## 그래서 GIT이 뭔데?

- 작업해서 메모한 후 넘긴다.

	- working directory에 작업, staging area에서는 이 작업들을 분류(메모), local repo에 쌓아둔 후 remote repo에 넘긴다


### git objects

- BLOB : 파일 하나의 내용에 대한 정보 (내가 작성한 내용)
- TREE : BLOB이나 SUBTREE의 메타 데이터 (디렉토리 위치, 속성, 이름 등)
- COMMIT


## GIT 등록

1. `mkdir 디렉토리이름` (등록)

2. `cd 디렉토리이름`

3. `git init`

4. `git remote add origin repo-address`

5. `touch 파일이름.확장자`

6. `git add 파일이름.확장자`

7. `git commit`

8. `git branch -M main (only if default branch name is master)

9. `git push -u origin main` (local repo와 remote repo가 같다고 알려주는 것)

## COMMIT CONVENTION

- 커밋 제목은 50자 이내로 요약하여 작성

- prefix를 사용하여 한 눈에 용도 알아보기 쉽게 작성하기
 
