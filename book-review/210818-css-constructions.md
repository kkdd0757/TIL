# CSS 설계 실전 가이드

## 규칙

- OOCSS

- SMACSS

- BEM

- PRECSS

## 8가지 설계 포인트

### 특성에 따라 CSS 분류하기

- 역할이나 특성에 따라 그룹 나누기

### HTML과 스타일링을 느슨하게 결합한다

- 요소형 셀렉터 (h2, h3 같은)를 사용하지 않는다 (스타일링이 중복될 수 있기때문)

- 속성 셀렉터 (a[href="www.google.com"])의 특정값을 사용한 스타일링 또한 피하기

### 영향 범위를 지나치게 넓히지 않는다.

- 영향 범위를 좁게한다

	- 부모 요소까지 셀렉터에 포함시키거나 손자 셀렉터뿐만 아니라 자녀 셀렉터를 사용할 수 있는지 검토

- 영향 범위가 넓은 CSS에 포함되는 스타일링을 가능한 최소한으로 한다

	- 클래스를 설정해서 클래스에 스타일링하기

	- 베이스 스타일 등 영향 범위가 넓은 CSS에 포함된 스타일링은 가급적 최소화하기.

- 특정한 콘텍스트에 지나치게 의존하지 않기

	- 콘텍스트 : 위치 혹은 상황

	- 문제가 되는 이유 : 콘텍스트가 변하면 코드가 동작하지 않음

### 상세도를 지나치게 높이지 않기

- 셀렉터를 예측하기 어렵고, 다른 요소에 대한 의존도가 높아진다

- 덮어쓰기가 어렵고 유지보수가 힘들어진다.

### 클래스 이름에서 영향 범위를 유추할 수 있다

- 모듈 자녀 요소에는 모듈의 루트 요소의 클래스 이름을 상속시키기 ( module-title/ module-type)

### 클래스 이름에서 형태, 기능, 역할 유추

- 구체성과 범용성에서 모듈 이름 고려하기

	- 가령 aboutService는 범용적이지 않아서 다른곳에서 활용할 수 없음 (about = 한 쪽에 국한시키는 단어)

	- service 또한 명확하게 서비스 소개 부분인지 서비스를 제공해주는 페이지인지 알기 어렵다

	- 그렇다고 범용성에만 초점을 두면 어떤 역할을 하는지 유추 어렵고 구별하기 어려워짐

### 확장하기 쉽다

- 모듈 변경이 많이 일어서 확장하기 쉽도록 구성하기

- 싱글 클래스 설계 : HTML에 대한 모듈 클래스를 항상 하나로 연결하기

	- 코드가 중복되며 배리에이션 수가 늘어날수록 CSS가 비대화됨 -> sass의 mixin이나 extend 사용하면 효율적
 
