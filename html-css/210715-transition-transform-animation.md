# CSS TRANSITION vs TRANSFORM vs ANIMATION

## Transition (전환)

- 시작과 끝을 지정하여 중간값에 전환 효과를 줌

- 단축과 개별 속성 모두 존재

	1. `transition-property` : 전환 효과를 사용할 속성 이름 (기본 = all)

	2. `transition-duration` : 전환 효과 지속시간 설정

	3. `transition-timing-function` : 타이밍 함수 지정 

		- `ease` : 빠르게 -> 느리게 / `ease-in` : 느리게 -> 빠르게 / `ease-out` : 빠르게 -> 느리게

		- `ease-in-out` : 느리게 -> 빠르게 -> 느리게 / `linear` : 일정하게

		- `steps(n)` : n번 분할 / `cubic-bezier(n,n,n,n)` : 개인이 값을 정의함

	4. `transition-delay` : 전환 효과 대기시간 지정

## Transform (변환)

- 요소의 변환 효과를 지정 (각도 = deg)

- `transform : 원근법 이동 크기 회전 기울임;`

### 2D 변환 함수

- 이동(x축, y축) : `translate(x,y)` , `translateX(x)`, `translateY(y)`

	- 단위(px, %...)

	- position은 배치하고 끝나는 개념 / translate은 항상 이동할 가능성이 있을 때 사용 (애니메이션 최적화)

- 크기(x축, y축) : `scale(x,y)`, `scaleX(x)`, `scaleY(y)`

	- 없음 (배수)

- 회전 (각도) : `rotate(degree)`

- 기울임(x,y축) : `skew(x-deg, y-deg)`, `skewX(x-deg)`, `skewY(y-deg)`

- 2차원 변환 효과 (이동, 크기, 회전, 기울임 모두 포함) : `matrix(n,n,n,n,n,n)`

	- matrix는 잘 사용하지 않음 

## Animation

- 요소에 애니메이션을 설정/제어

- 직접적으로 애니메이션을 만드는 것은 `@keyframes`가 하고 animation은 설정 및 제어

- 단축 : `animation : 애니메이션이름 지속시간 [타이밍함수 대기시간 반복횟수 반복방향 전후상태 재생/정지];`

- 개별 :

	1. `animation-name` : `@keyframes`의 이름 지정 (필수!)

	2. `animation-duration` : 애니메이션 지속시간 설정 (필수)

	3. `animation-timing-function` : `transform`의 타이밍 함수와 동일

	4. `animation-delay` : 애니메이션 대기 시간 설정 (음수 : 해당 초만큼 앞서 시작함)

	5. `animation-iteration-count` : 애니메이션 반복 횟수(역방향도 1회로 count)

	6. `animation-direction` : 애니메이션 반복 방향 설정 (normal, reverse, alternate(왕복), alternate-reverse)

	7. `animation-fill-mode` : 애니메이션 전후 위치 상태 설정

		- none : 기존위치 -> 시작위치 -> 끝 위치 -> 기존위치

		- forwards : 기존 -> 시작 -> 끝

		- backwards : 시작 -> 기존

		- both : 시작 -> 끝
	8. `animation-play-state` : 애니메이션의 재생과 정지 설정 

	9. `@keyframes` : 2개 이상의 프레임 설정

		- transition은 전과 후만 설정하지만 @keyframes 는 2개 이상을 설정할 수 있음 (0,25,50,100% 등...)


