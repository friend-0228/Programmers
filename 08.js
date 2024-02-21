// 각도기

// 나의 풀이
// function solution(angle) {
//     if (angle > 0 && angle < 90) {
//         console.log("예각입니다.");
//         return 1;
//     } else if (angle === 90) {
//         console.log("직각입니다.");
//         return 2;
//     } else if (angle > 90 && angle < 180) {
//         console.log("둔각입니다.");
//         return 3;
//     } else {
//         console.log("평각입니다.");
//         return 4;
//     }
// }

// 방법2 : filter()
function solution(angle) {
    return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

// 방법3 : 삼항연산자
function solution(angle) {
    return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// 방법4 : switch()문
function solution(angle) {
    switch (angle) {
        case 90:
            return 2;
        case 180:
            return 4;
        default:
            return angle > 0 && angle < 90 ? 1 : 3;
    }
}

// 방법5 : 간단한 if문
function solution(angle) {
    let answer = 1;

    if (angle >= 90) answer++;
    if (angle > 90) answer++;
    if (angle >= 180) answer++;
    if (angle > 180) answer++;

    return answer;
}

console.log(solution(70)); // 1
console.log(solution(91)); // 3
console.log(solution(180)); // 4

// 예각 : (0 < angle < 90)
// 직각 : (angle = 90)
// 둔각 : (90 < angle < 180)
// 평각 : (angle = 180)
// 처음에 조건식을 이런식으로 했었는데 오류나길래 알아보니 JS에서는 이런식으로 조건식을 작성할 수 없다는 것을 알았다.
