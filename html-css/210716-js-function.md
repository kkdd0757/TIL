# JavaScript

## What is JavaScripts?

- 90년대부터 브라우저에서 사용하려고 만들어진 언

- 주로 웹 브라우저에서 동적으로 보여주기 위해 사용되지만 웹 페이지에 국한되지 않고 다양한 곳(모바일 및 pc app, API 등)에서 사용되고 있음

## Features of JS

- 문자: '' 또는 "" 둘 다 사용이 가능하다

- 세미콜론 : 문장 끝에 세미콜론 `;`을 사용해도되고 하지 않아도 괜찮다.

- null과 undefined 차이 : 

	- null : 값이 없다
	
	-  undefined : 값이 아직 설정되지 않았다.

- 주석 : //

## JS Variables

- 변수 (let) : 변경 가능한 값이 특정 이름에 담긴 것

- 상수 (const) : 변경 불가한 값이 특정 이름에 담긴 것

	- var은 let과 유사하지만 현재는 사용을 권장하지 않는다. 

	- var은 지역 변수와 글로벌 변수에 차이를 두지 않기 때문이다. 

- 선언 : 특정 이름에 특정 값을 담아주는 것 (같은 이름의 변수는 단 한번만 선언)

## JS Operators

- 산술 연산자 : 사칙연산 (+,-,*,/)

- 대입 연산자 : `=`가 대표적인 대입 연산자

- 논리 연산자 : `not(!)`,`and(&&)`,or(||)` 

	- <u> not, and, or 순서</u>로 연산이 됨!

- 비교 연산자 :

	1. equals : === or == (===가 타입 비교/ ==는 타입 비교하지않음)

	2. not equals : !== or != (!== 타입비교 / != 타입비교 X)

	3. 대소비교 : >,<,>=,<=

## JS Conditional Statements

- if : if(조건) { 실행구문;}

- if-else : if(조건) {실행구문;} else {실행구문2;}

- if - elif - else : if(조건1){구문1} elif(조건2){구문2} else{구문3}

- sitch case : 특정 값에 따라 다른 실행구문 설정 (break문 필수!!)

```js
const a = 0;

switch(a) {
 case 0:
  console.log(0);
  break;
 case 1:
  console.log(1);
  break;
 default:
  console.log('none');
  break;
}
```

## JS Functions

- 특정 코드를 하나의 명령으로 실행할 수 있도록 해줌

- 파라미터를 통해 결과를 만들어 낼 수 있음 (파라미터 = 받아오는 값)

### ES6 

1. Template Literal 

- 백틱을 통하면 문자열을 붙일때 +를 안해도 문장 연결이 가능해짐

	```console.log(`Hello ${name}!`); ```

2. Arrow Function

- 아주 간결하게 만들 수 있는 함수

- 특징 : 

	- this 바인딩을 하지 않는다

	- 메소드 함수가 아닌 곳에 가장 적당하다

		- 메소드는 객체와 관련된 함수로써 데이터와 멤버 변수에 대한 접근 권한 가짐

	- 매개변수가 1개일 때 소괄호 생략 가능

	- 중괄호와 return 생략가능 (자동으로 return 됨)

	- 매개변수에 default값 적용 가능
