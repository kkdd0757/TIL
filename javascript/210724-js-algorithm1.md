# JS ALGORITHM

## 알고리즘문제 푸는데 유용한 함수 

1. 배열 전부 대/소문자로 변경 - `배열.toUpperCase()` / `.toLowerCase()`

2. 배열의 최소/최대 구하기 - `Math.max.apply(null, 배열이름)` / `Math.min.apply(null, 배열이름)`

3. 배열에서 문자열로 변환 - `array.join();`

4. 문자열/집합에서 배열로 변환 - `Array.from(문자열/집합)` / 문자열.split('');`

5. 배열 정렬 = `sort()` 

6. 회문 문자열 = `str.split("").reverse().join('')`

	- 문자열을 배열로 만들어서 뒤집어서 다시 문자열로 만듦

7. 객체에서 value로 key값 찾기:

	 `const answer = Object.keys(객체).find(key => 객체[key] === value값)`;

8. 문자열로 변환하여 배열 비교하기 : 

	`JSON.stringify(a) === JSON.stringify(b)`

9. 집합 set : 중복을 허락하지 않는 자료구조

	- `const setA = set(배열)`

	- `|` : 합집합

	- `&` : 교집합

	- `-` : 차집합
