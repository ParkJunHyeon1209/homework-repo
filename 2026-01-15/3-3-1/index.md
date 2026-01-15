## 공개 API URL

JSONPlaceholder (무료):
jsonplaceholder.typicode.com
/posts → 게시글 목록(s가 붙어있기 때문에 하나가 아닌 목록) - /pots/ID를 통해 특정 항목 지정
/users → 사용자 목록
/todos → 할 일 목록

## response ;

{
"city": "서울",
"temperature": 22,
"weather": "맑음",
"humidity": 45
}
서버가 클라이언트에게 응답

## request :

웹 API 요청 예시
https://api.weather.com/today?city=seoul
클라이언트가 서버에게 요청

### response와 request의 차이:

- request는 api엔드포인트형태로 보내게 됨.
- request의 경우 JSON 형식으로 데이터를 보내줌

## API 키가 필요한 이유와 보안상 주의점

### - 키가 필요한 이유

- 누가 요청했는지 기록을 남겨서 확인
- 사용량 추적을 통해 누가 얼마나 사용했는지 기록할 수 있음
- 권한을 관리할 수 있음

### - 주의사항

- API키는 비밀번호처럼 관리해야함
- Github에 절대 공개 금지
- 환경변수로 안전하게 보관해야함; (gitignore)를 통해 관리
