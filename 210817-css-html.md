# HTML-CSS

- aria-labelledby 

	- SEO 검색은 안되지만 alt 대체 텍스트 대용으로 사용가능

- 1px 이하의 선을 css로 구현하기

	- opacity / linear-gradient() / box shadow / border images

	- border images는 브라우저호환성때문에 ㅈ대중적이지 않음

- animation은 시작과 끝 값(명시적인 값이 필요) -> 그래서 height:auto를 주게되면 작동하지 않음

- outline-offset

	- 아웃라인은 상자크기에 영향을 미치지 않음

	- outline과 관련된 요소

- image sprite

	- 여러개의 이미지를 하나의 이미지로 합쳐서 관리하는 이미지

	- 웹 페이지가 이미지를 다운받기 위해서 웹 브라우저는 서버에 이미지를 요청함 -> 로딩시간 많이 걸림

	- 이미지 스프라이트는 이미지를 다운받기 위한 서버 요청을 단 몇번으로 줄일 수 있음

- css reset vs css normalize

	- css reset : 기본 스타일 대부분 제거후 새로운 스타일 추가

	- css normalize : 일관되지 않는 스타일만 제거하고 가능한 기본 스타일 유지	
