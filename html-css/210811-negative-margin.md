# Negative Margin

- 문서 내의 정상적인 흐름은 건들이지 않음

- 그 뒤에 오는 모든 요소들도 같이 이동함 (단, float이 적용되면 다르게 동작)

- static인 경우, top/left는 음수 마진을 주면 그 방향으로 원소가 이동한다. 

	- bottom/right -> 이 요소 다음에 오는 요소를 끌어당김

- float과 음수마진 기법

	- float이 적용된 엘리먼트 다음에 나오는 정상적인 요소는 float이 적용된 엘리먼트의 존재를 인식하지 못하고 자신의 상자 영역 확보

	- 하지만 float이 적용된 엘리먼트의 영역을 침범하지는 않음

	- negative margins & box model : 한 방향으로만 바깥 여백을 주고 마진을 상쇄시키기
