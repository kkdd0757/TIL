# CH.19

## prototype

- 객체지향 프로그래밍 : 여러 개의 독립적인 단위, 즉 객체의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임

- 실체는 특징/성질을 나타내는 속성을 가지고 있고, 이를 통해 실체를 인식 및 구별한다 

- 추상화 : 다양한 속성 중에서 프로그램에 필요한 속성만 간추려내어 표현하는 것

- 객체 : 속성을 통해 여러개의 값을 하나의 단위로 구성한 복합적이니 자료구조 

### 상속과 프로토타입

- 상속 : 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 상속받아 그대로 사용할 수 있는 것

- 자바스크립트는 상속을 구현하여 불필요한 중복을 제거한다. (=> 기존 코드 적극적 재사용)

## 프로토타입 객체

- `__proto__` : 접근자 프로퍼티 

- 내부 슬롯은 프로퍼티가 아니다. 

- 접근자 프로퍼티는 다른 프로토타입의 참조를 취득하고싶을때 Object.getPrototypeOf 메서드 사용

