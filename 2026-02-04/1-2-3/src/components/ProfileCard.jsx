export default function ProfileCard({ name, age, job = "무직" }) {
  return (
    <div className="card-wrap">
      <h2>이름 : {name}</h2>
      <p>나이 : {age}</p>
      <p>직업 : {job}</p>
    </div>
  );
}
