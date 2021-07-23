# GIT FLOW

## FORKING WORKFLOW

1. 협업하는 2가지 방법

	- INVITE A COLLABORATOR하기

	- FORKING WORKFLOW 하기

2. FORKING WORKFLOW

- 한 명이 레포 생성 후 복사해서 클론함 ( git flow init해서 develop branch있는 상태에서 넘기기)

- 팀원은 folk -> git clone하기 

- issues, project를 만들어 현 상황 공유하기 

- git flow를 통해서 develop으로 push 하기

	1. git flow init

	2. git flow feature start 기능이름

	3. touch 파일이름 으로 add, commit 하기

	4. git flow feature finish 기능이름

	5. git flow release start 버전정보

	6. git flow release finish 버전정보

	7. git push -u origin develop

	8. git push -u origin main

