# HOW TO SOLVE ERROR WITH PUSHING IN GITHUB

### 원인

- 원인 파악하기 : git status로 상태 확인하기

- 원인1 : '[rejected] main->main(fetch first) 리모트에 로컬에 없는 사항이 들어 있으므로 업데이트가 거부되었습니다. 이 상황은 보통 또 다른 저장소에서 같은 저장소로 푸시할 때 발생합니다.  푸시하기 전에 ('git pull ...' 등 명령으로) 리모트 변경 사항을 먼저 포함해야 합니다.'

- 원인 2 : Your local changes to the following files would be overwritten by merge. 현재 브랜치와 `origin/main`이 3갈래로 갈라져있습니다.
 
### 해결방법

1. local repo와 remote repo의 브랜치가 여러갈래로 갈라져있기 때문에 변경되지 않은 상태 다 변경시켜주기

2. `git stash && git pull origin master && git stash pop`

3. `git push origin main`

### 결론

- local repo와 remote repo가 일치하지 않아서 생긴 문제

- 여러갈래 branch 를 merge 해주고 pull & push 해주기
