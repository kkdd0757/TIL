// Quiz 5
// if문 사용하지 않고 함수 구현하기
// 틀린이유 : 문제 제대로 읽지 않고 if함수 사용함
// 풀이법 : 기본값을 설정해주기 (기본값을 설정해주면 값이 들어오지않았을때는 2로 대체해주기때문) => 훨씬 간단해짐

function myFunction(x = 2, y = 2) {
    return x + y;
}
console.log(myFunction(undefined, 3))