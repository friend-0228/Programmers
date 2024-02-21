// 숫자 비교하기

// 나의 풀이
// function solution(num1, num2) {
//     if (num1 === num2) {
//         return 1;
//     } else {
//         return -1;
//     }
// }

// 방법2 : 삼항 연산자
// function solution(num1, num2) {
//     return num1 === num2 ? 1 : -1;
// }
// 화살표 함수
const solution = (num1, num2) => (num1 === num2 ? 1 : -1);

// 방법3 : true값 이용
// num1==num2 가 같다면 true. 1이 들어가서 (1-0.5)*2 = 1
// num1==num2 가 같지 않다면 false. 0이 들어가서 (0-0.5)*2 = -1
// function solution(num1, num2) {
//     return ((num1 == num2) - 0.5) * 2;
// }

console.log(solution(11, 11)); // 1
console.log(solution(7, 99)); // -1
