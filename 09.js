// 짝수의 합

// 나의 풀이
// function solution(n) {
//     let answer = 0;
//     for (let i = 0; i <= n; i++) {
//         if (n === 0) return 0;
//         if (i % 2 === 0) {
//             answer += i;
//         }
//     }
//     return answer;
// }

// 방법2
function solution(n) {
    let half = Math.floor(n / 2);
    return half * (half + 1);
}

// 방법3 : 더 간단한 if문
function solution(n) {
    let answer = 0;
    for (let i = 2; i <= n; i += 2) answer += i;
    return answer;
}

// 방법4 : 여러 함수 이용
function solution(n) {
    return Array(n)
        .fill()
        .map((_, i) => i + 1)
        .filter((v) => v % 2 === 0)
        .reduce((acc, cur) => acc + cur, 0);
}

// 방법5 : Math.trunc()
function solution(n) {
    let count = Math.trunc(n / 2);
    return count * (count + 1);
}

console.log(solution(10)); // 30
console.log(solution(4)); // 6
