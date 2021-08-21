# WEB CAFE DAY01

## TIL

- 컨텐츠 구조 관점 : 나중에 부분 재활용을 위해 컴포넌트 구조로 분해하기

- id는 가급적으로 사용하지말고 클래스를 사용하기 (유지보수의 어려움)

### HEADER

- 중요한 서비스 위주로 먼저 배치하기

- 점진적 향상 : 가능한 많은 사용자에게 필수 콘텐츠와 기능을 제공하기 위한 설계 철학. 


	- 최신 브라우저 사용자에게 최상의 경험을 제공해야함

	- Disable all style한 후에도 기본 기능을 사용할 수 있도록 설계해야함

- 시멘틱 마크업 : 의미를 잘 전달하도록 문서 작성하기

	- 즉, 사람과 기계 모두가 잘 이해해야하고 기계 처리도 가능해야함

- naming : 

	1. pascal case : MemberService

	2. camel case: memberService

	3. kebab case: member-service

	4. snake case: member_servic

### Main

- 스타일링할 때 마크업은 최대한 건드리지않고 CSS만 바꿔주며 작업하기
