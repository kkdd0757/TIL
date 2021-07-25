// Quiz 3
// reduce 사용하여 양수 평균값 반환하는 함수 작성하기
// 틀린 이유 : 시간부족으로 문제 제대로 읽지 않음 (함수를 안만듦) + 변수 스펠링 다르게 적음 (idx, index)
// 풀이법 : reduce함수를 사용하여 배열의 길이-1보다 작을때는 합을 구하고 다 더해졌으면 배열의 길이만큼을 나누어 평균 구함

function avg(nums) {
    const average = nums.reduce((acc,current,index,array) => {
        if(index === array.length-1) {
            return (acc+current)/array.length;
        } 
        return acc+current;
    },0)
    return average;
}
console.log(avg([1,2,3,4,5]))