//Quiz1.
// 배열의 내장함수, 삼항연산, 스프레드 문법 활용하여 agegroup값 변경하기
// 풀이법 : 우선 for함수 대신 reduce 함수를 사용하여 (초기값 꼭 잡아주기) agegroup값을 변경해주고 새로운 배열에 넣어주기
// 고민& 생각 : 과연 내장함수중 어떤 함수를 써야 더 효율적일까 생각을 했다 (acc, cur은 사용하지 않기때문)

const people = [
    {name: '박지성', age:36, hobby: '등산', agegroup: null},
    {name: '김연아', age:31, hobby: '수영', agegroup: null},
    {name: '손흥민', age:26, hobby: '골프', agegroup: null},
    {name: '박태환', age:34, hobby: '승마', agegroup: null},
    {name: '박세리', age:45, hobby: '골프', agegroup: null},
]

people.reduce((acc,cur,idx) => {
    people[idx].age < 35 ? people[idx].agegroup = 'A': people[idx].agegroup ='B'
},0)

const answer = [
    ...people
]

console.log(answer)

