# GIT BRANCH

## branch

- `git branch` : 브랜치 목록 및 현재 내가있는 브랜치 위치 알려줌

- `git branch 이름` : 새로운 브랜치 생성 

- `git lg` : 언제 어떤 행동을 했는지 확인 가능

- `git switch 이름` : 해당 브랜치로 이동함

	- 가능하면 main에서 push 하지않기 

## merge

- life cycle이 끝난 브랜치는 삭제하기

- `git branch -D 이름` : 해당 브랜치 삭제

- `git status` : 항상 상태체크하기 

	- 깃은 띄어쓰기만 있어도 변화가 있다고봐서 나중에 어떤 행동을 했는지 파악하기 어려움

	- 최대한 라인 이동은 하지 않고 다 생각해서 개발하기

## conflict

- `git mv 이름 변경이름` : new가 아닌 renamed로 commit

- conflict가 나면 vi 로 파일을 봐서 조합하거나 한 쪽을 삭제해주기

