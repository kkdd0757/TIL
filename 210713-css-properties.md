# CSS 박스모델 속성

## width, height

- 기본값 : `auto`

- 단위 : `cm`,`em`,`px`

- 부모 요소에 영향을 받음 (inline일때와 block 일 때 다르게 작동)

## margin

- 요소의 외부 여백 지정

- 음수 값도 사용 가능 (안쪽으로 들어오는 느낌)

- `%`는 부모 요소의 너비에 대한 비율로 지정

- 중복 :
	
	1. 형제 요소의 top과 bottom이 만났을 때 

	2. 부모 요소의 top과 자식 요소의 top이 만났을 때

	3. 부모 요소의 bottom과 자식 요소의 bottom이 만났을 때

		- 계산법 : 둘 다 양수거나 음수일때는 큰값 / 양, 음수일때는 둘이 덧셈하기

## padding

- 요소의 내부 여백 지정

- 패딩 값 만큼 요소의 크기가 커지는 현상이 있음

- `box-sizing: border-box;` 가 자동계산해서 맞추어줌

## border

- 요소의 테두리 선 지정

	1. border-width : 선의 두께

	2. border-style : 선의 종류

	3. border-color : 선의 색상

## box-sizing

- 요소의 크기 계산 기준 지정

	1. `content-box` : 너비로만 요소 크기 계산

	2. `border-box` : 너비+ 패딩 + 테두리선 포함하여 크기 계산

## display

- 요소의 박스 타입 유형 지정(변경도 가능)

- `inline-block` : 기본적인 특성은 `inline`이라 수평으로 쌓고 텍스트에 특화되어있지만, 가로*세로값을 가질 수 있고 마진, 패딩도 사용 가능

- `none` : 요소가 사라짐 (`hover`일 때 종종 사용)

## overflow

- 요소의 크기 이상으로 내용이 넘쳤을때, 내용의 보여짐 제어

- `auto`는 overflow있을 때 스크롤바가 생기고,`scroll`은 overflow가 없어도 스크롤바가 생김  
