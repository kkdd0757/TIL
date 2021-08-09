# Array Functions (배열 내장함수)

## forEach

- 배열로 어떤 작업을 일괄적으로 하고싶을때 사용

```JS
const array = [1,2,3,4,5];

function print(num) {
   console.log(num);
}

array.forEach(print);
```

## map

- 기존 배열을 건들이지 않고 배열안의 원소를 변환해서 새로운 배열 만듦

- 객체도 map 사용 가능

```JS
const array = [1,2,3,4,5];

const map = array.map(n => n+n);

console.log(map);
```

## indexOf

- 원하는 정보가 배열의 몇 번째 요소인지 알려주는 함수

```JS
const num = [1,2,3,4,5];

const index = num.indexOf(3);

console.log(index);
```

## findIndex vs find

- findIndex : 객체나 특수한 조건을 적용한 요소가 몇 번째인지 알고싶을때 (indexOf사용 불가인경우)

	- 만약 여러항목이 존재한다면 가장 첫번째로 찾은 항목을 출력

	- `-1`은 존재하지 않는다는 의미

- find : 객체나 특수한 조건을 가진 요소를 찾아 그 값 자체를 반환 

	- findIndex와 마찬가지로 가장 첫번째 찾은 항목을 보여줌

```JS
// findIndex
const index = num.findIndex(n => n.id === 1)
console.log(index);

// find
const value = num.find(n => n.id ===3 )
console.log(value);
```

## filter

- 특정 조건에 만족하는 요소를 찾아 새로운 배열을 만들어줌

```JS
const yes = list.filter(lst => lst.yes === true);
console.log(yes);
```

## splice, slice

- splice : 특정 항목을 제거할 때 사용 ( 기존 배열을 수정함)

	- 배열/객체.splice(index, 몇개 지울것인가);

- slice : 기존의 배열을 건드리지 않고 찾아

	- 배열.slice (시작점, 끝점-1)
 
## shift, unshift, pop, push

- shift : 첫 번째 원소를 배열에서 추출(제거) => 기존 배열 수정

- unshift : 첫 번째 자리(맨 앞)에 원소를 추가 => 기존 배열 수정

- pop : 마지막 원소를 배열에서 추출 => 기존 배열 수정

- push : 맨 마지막 자리에 원소를 추가 => 기존 배열 수정

## concat, join

- concat : 기존의 배열을 건드리지 않고 여러개의 배열을 하나의 배열로 합쳐줌

- join : 배열안의 값들을 하나의 문자열로 만들어줄때 사용 (어떻게 값들을 구분할지도 설정 가능)

```JS
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9];

const concat = arr1.concat(arr2);

// join

console.log(arr1.join('.'));
//결과값 => 문자열 1.2.3.4.5

## reduce

- 배열이 주어져 여러 연산을 간단하게 하나로 작성할 때 

- 0/ {} = 초기값, accumulator(acc) = 초기값, current = 배열참조, index = 원소의 배열 순서, array = 함수가 실행되는 자기 자신

