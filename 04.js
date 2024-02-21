// 나이 출력

// 나의 풀이
// function solution(age) {
//     return 2022 - age + 1;
// }

const solution = (age) => 2022 - age + 1;

// 함수 사용하고 있지만, 해가 바뀌면 사용 못하는 함수. 기준년도 한정 계산.
// function solution(age) {
//     return new Date().getFullYear() - age + 1;
// }

console.log(solution(40)); // 1983

// new Date() : 현재 날짜 및 시간
console.log(new Date()); // Wed Feb 21 2024 10:57:52 GMT+0900 (대한민국 표준시)
console.log(new Date(1991, 11, 25, 3, 50)); // 1991-12-24T18:50:00.000Z
// 월 +1 주의!
console.log(new Date("2014-6-4")); // 2014-06-03T15:00:00.000Z
console.log(new Date("2012-05-17 10:20:30")); // 2012-05-17T01:20:30.000Z

// getFullYear() : 년도 가져오기
console.log(new Date().getFullYear()); // 2024
console.log(new Date("2014-6-4").getFullYear()); // 2014

// setFullYear()
var d = new Date();
var result = d.setFullYear(2050); // 설정이 되면 변경된 시간을 기준으로 밀리초를 반환
var year = d.getFullYear(); // 변경된 4자리 년도를 반환
console.log(result); // 2529021825732
console.log(year); // 2050
