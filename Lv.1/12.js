// 평균 구하기

function solution(arr) {
    let sum = 0;
    arr.forEach((num) => {
        sum += num;
    });
    return sum / arr.length;
}

console.log(solution([1, 2, 3, 4]));
console.log(solution([5,5]));
