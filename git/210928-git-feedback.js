# COMMIT

- commit은 항상 잘게 잘라서

- 헤더, 메인, 푸터 등으로 잘라서 커밋 (작업의 단위, 작업의 양)

- 모두 git flow를 사용하면 브랜치 개념 이해할 수 있음

## GIT FLOW

- git flow 자체가 alias 묶음들

- 꼭 folk하고 git flow 시작

- flow feature start fb-for-if ( 브랜치 이름이 중요)

- 변경사항 확인 수 git status -< git add 파일 -> git commit 순서로 진행

- resolve / close / fix => issue를 닫고 싶을땓 사용하는 3개의 단어

	- resolve #1 (1번 커밋을 해결했다)

- 닫기 : git flow feature finish 해당 파일

- git push origin develop

- 팀원 -> 팀장으로 develop 

- git push origin 

- 팀장 : git push -u origin feature/브랜

- conflict 났을때 :vi fizzbuzz.py 보고 conflict 해결해주기 

- 내용 끝나고 ㅣ git flow feature finish 파일

- git branch 로 최신화된것 확인하기 

- git pull origin develop -> git flow feature finiwh -> git pull origin develop -> git flow release start v1.0 -> git flow release finish RELEASE 

- tagging 부분이 release note 가 될거라 아주 중요 (Initial version of fizzbuzz has completed)

- git push --tags (나 좀 태그해서 푸쉬해라)



