// 몫 구하기

// 나의 풀이
// const solution = (num1, num2) => parseInt(num1 / num2);

// 방법2
const solution = (num1, num2) => Math.floor(num1 / num2);

// 방법3 : 틸트 연산자
// function solution(num1, num2) {
//     return ~~(num1 / num2);
// }

// ===> 나는 parseInt를 사용했는데, 다른 사람 풀이를 보다가 어떤 댓글을 보았다.
//		큰 수에서는 type number에 string이 들어가는 경우도 있기 때문에,
//		소수점 이하를 절삭하여 정수 값을 return하려는 목적으로 Math.floor 대신에 parseInt를 사용해서는 안 됩니다.

console.log(solution(7, 2)); // 3
