# Quiz Review

- 4번 : DFS

	- for문을 돌면서 ()쌍이 올바르지 않을때만 스택에 넣기

	- 그 스택 길이만큼 DFS(L) 돌기

	- 올바른 괄호일때 cnt++하고 arr에 담는다

	- 만약 같은 애가 나오면 arr과 비교하고 같으면 continue

- 5번 : DP

	- 2차원 dy배열 만들어서 fill(1)해주기

	- 2중 for문을 돌면서 i에는 배열, j에는 공차 배열 길이로 돌린다

	- dy[i][j]  = i 번째 수열이 공차 j인 등차수열의 마지막 항일때 수열의 길이

1
