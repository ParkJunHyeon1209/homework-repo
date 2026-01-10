// 1. 계산 함수들 -> [math.js]로 이동 예정
export function add(a, b) {
  return a + b;
}

export function sub(a, b) {
  return a - b;
}

// 2. 프로필 데이터 -> [userProfile.js]로 이동 예정
const userProfile = {
  name: "홍길동",
  age: 20,
};
export default userProfile;

// 3. 실행 로직 (main.js에 유지)
console.log(add(10, 20));
console.log(userProfile.name);
