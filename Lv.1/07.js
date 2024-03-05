// 두 수의 나눗셈

// 나의 풀이
const solution = (num1, num2) => Math.trunc((num1 / num2) * 1000);

// 틸트 연산자
// function solution(num1, num2) {
//     return ~~(num1/num2*1000);
// }

// Math.trunc() : 소수점 이하는 다 버린다.
// Math.floor()는 소수점을 내림한다.
// ex) Math.floor(23.3) = 23
//		Math.floor(-23.3) = -24
// => 음수인 경우도 생각해서 소수점을 이하 수를 없애고 싶을때는, Math.trunc를 사용하는 것이 좋다.

// double tilde: not의 기능을 하는 비트 연산자.
// 10진수 5(16비트 2진수 0000000000000100)에 tilde를 적용하면 -6(16비트 2진수 1111111111111011) 이며 이 과정에서 소수점은 버려지게 된다.
// -6에 다시 tilde를 적용하면(double tilde, ~~5라고 표기) 다시 정수 5로 돌아오게 되어,
// 결과적으로 Math.floor()와 같은 기능을 하게 된다.
// -----
// 이는 특정 브라우저에서 Math.floor()나 parseInt보다 빠른 퍼포먼스를 보여줄 수 있으나,
// 유지보수하는 사람의 입자에서 문맥의 이해에 어려움이 있을수 있다.
