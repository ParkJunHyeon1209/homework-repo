export default function Card() {
  const name = "박준현";
  const birthYear = 2000;
  const hobbies = ["노래방, 소설읽기, 뒹굴거리기"];
  return (
    <div className="card-wrap" style={{ boxShadow: "0 0 15px #db76e1" }}>
      <h1 className="name">{name}</h1>
      <p className="age" style={{ color: "red" }}>
        나이 : {2026 - birthYear + 1}
      </p>
      <p className="hobby">취미 : {hobbies.join(", ")}</p>
      <p className="mbti" style={{ fontWeight: 600 }}>
        MBTI : INTP
      </p>
    </div>
  );
}
