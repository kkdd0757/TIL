# CSS properties II

## CSS FONT

1. `font-size` : 글자 크기 설정 (브라우저마다 기본값 다름)

2. `font-family` : 여러개의 후보 또는 계열을 지정해 해당 컴퓨터가 가진 글꼴을 사용할 수 있도록 함.

	- 폰트가 용량이 커서 속도 저하가 일어남. 그래서 이미 브라우저에 존재하는 글꼴 사용 장려

	- `san-serif`가 가장 많이 사용됨

3. `color` : 문자 색상 지정 (hex, rgb, rgba등 다양하게 존재하지만 hex가 가장 많이 사용됨)

4. `line-height` : 줄 높이 지정.

	- 숫자만 적으면 배수로 인식됨 (배수 사용할 것을 추천)

	- 1.4~1.7배를 사용하길 추천

## CSS 위치, 정렬

1. `float` : 주로 좌, 우 방향으로 띄우는 수평정렬

	- 최근에는 flex-box를 많이 사용

	- 해제는 필수 (해제를 안해주면 겹치는 문제가 발생함)

2. `float 해제` : float 속성이 적용된 요소의 주위로 다른 요소들이 흐르게 되는데 이를 방지하기 위해 속성 해제가 필요

	1. 형제 요소에 `clear: both;` (단점 : 다른 형제요소가 없을시 문제)

	2. 부모 요소에 `overflow:hidden(or auto);` (단점 : 관련하지 않은 속성 사용함)

	3. 부모 요소에 `clearfix` 클래스 추가하여 해제 (추천)

		- clearfix에는 content, clear:both;, display:block; 속성과 값 넣기

3. float display 수정

- `float` 속성이 추가된 요소는 display값이 대부분 block으로 수정됨

	- 단, flex, inline-flex는 효과 없음

4. `position`

	- relative : 자기 자신의 원래 값에서 배치됨
	
		- 주변의 영향을 주거나 받기 때문에 absolute를 더 권장

	- absolute : (위치상의) 부모 요소를 기준으로 배치

		- 부모요소에 position (static제외)이 있다면 사용 가능 (없을때는 추가해주기)

		- 부모요소가 없다면 조상까지 보기

	- fixed : 한 공간에 고정 (브라우저 기준으로 배치)

	- sticky : 스크롤 영역 기준으로 배치 (top, bottom, left, right 중 한 요소는 필수로 있어야함)
