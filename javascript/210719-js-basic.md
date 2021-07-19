# JavaScript Basic II

## Object (객체)

- 어떠한 값을 선언할 때 하나의 이름에 여러개의 값을 넣을 수 있게 해주는 것

- 콤마로 연결해줌 (세미콜론 아님)

-key에 스페이스를 사용해야한다면 `''`나 `""` 사용해주기

```JS
const weather = {
    today : sunny,
    tmr : cloudy,
    sample : {
       day1 : 0,
       day2 : 1
    }
};
```

### 비구조화 할당

- ES6 문법

- 객체에서 특정값을 추출해낼 수 있는데, 좀 더 간단하게 추출할 수 있도록 도와주는 것

- 함수내부뿐만 아니라 외부에도 사용 가능

```JS

const Tangled = {
   name : 'Rapunzel',
   age : 16,
   rating : PG
};

// case1

function print(princess) {
   const{name, age, rating} = princess;
   const info = `${name} is ${age} years old. It was rated ${rating}.`;
   console.log(info);
}

// case 2

function print({name, age, rating}) {
   const info = `${name} is ${age} years old. It was rated ${rating}.`;
   console.log(info);
}

// case 3

const {name} = Tangled;
console.log(name);

```

### 객체안에 함수 넣기

- 객체 안에 함수도 넣을 수 있음 

- function을 생략할 수도 있고 `function name()`을 해도 되지만, 화살표 함수는 사용이 불가

	- 화살표 함수는 자기가 있던 곳으로 연결하지 않기 때문 (화살표 함수에서는 this 바인딩이 안돼서 어디를 가리켜야할 지 모름)

## GETTER & SETTER

- getter와 setter을 사용하면 특정 값을 바꾸거나 조회할 때 원하는 코드를 실행 가능

1. GETTER

- 어떤 값을 조회하려고 할 때 어떤 값을 받아 실행함

- 어떤 값을 반드시 반환(return)해야함

- numbers.sum()이 아닌 numbers.sum만 해도 조회가 가능하다

2. SETTER

- 파라미터값이 반드시 필요

	- 똑같은 이름의 getter와 setter 설정 가능

	- GET만 사용되었을 경우 조회될 때마다 계산이 실행되고, GET과 SET 둘 다 존재하면 업데이트 될 때만 출력/계산됨

## Array (배열)

- 여러개의 항목이 들어있는 리스트와 같다(원소들끼리 구분할 때는 콤마 사용)

- 모든 원소들이 다른 형태여도 상관없다.

- 배열의 첫 번째 항목은 0부터 시작된다. 

- 배열에 새로운 항목을 넣어줄 때는 array.push() , 배열의 길이를 파악할때는 array.length를 사용한다.
