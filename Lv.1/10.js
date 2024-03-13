// 배열의 평균값

// 나의 풀이
function solution(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i] / numbers.length;
        result = sum.toFixed(1);
        console.log(result);
    }
    return result;
}

// toFixed() : 숫자를 고정 소수점 표기법으로 표시, 반올림.
// ex : numbers = 12345.6789;
// 		console.log(numbers.toFixed(1)); // 123.7
// 		console.log(numbers.toFixed(2)); // 123.68
// 		console.log(numbers.toFixed(3)); // 123.679

// 방법2 : reduce()
function solution(numbers) {
    var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    return answer;
}
// 초기값: 0
// 첫 번째 반복: 0(누적값) + 1(현재값) = 1
// 두 번째 반복: 1(누적값) + 2(현재값) = 3
// 세 번째 반복: 3(누적값) + 3(현재값) = 6
// 네 번째 반복: 6(누적값) + 4(현재값) = 10
// 최종 반환값: 10

// 방법3 : for..of문
function solution(numbers) {
    var answer = 0;
    for (i of numbers) {
        answer += i;
    }
    return answer / numbers.length;
}
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // (55) 5.5
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])); // (1034) 94.0
