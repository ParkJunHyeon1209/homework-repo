import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [emailCheck, setEmailCheck] = useState(false);
  const [pw, setPw] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const isFormValid = !emailCheck && pw === pwCheck && isAgree;
  const invalid = "user@test.com";

  function checkEamil() {
    if (email === invalid) setEmailCheck(!emailCheck);
    else setEmailCheck(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("로그인 성공!");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <div className="input-wrap">
          <div className="email-wrap">
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="이메일"
              required
            />
            <button type="button" className="check-email" onClick={checkEamil}>
              중복 확인
            </button>
          </div>
          {emailCheck && <p className="email-error">중복된 이메일입니다.</p>}
          <div className="pw-wrap">
            <input
              type="password"
              placeholder="비밀번호"
              value={pw}
              autoComplete="none"
              onChange={(e) => setPw(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={pwCheck}
              onChange={(e) => setPwCheck(e.target.value)}
              required
            />
          </div>
          {pw && pwCheck && pw !== pwCheck && (
            <p className="pw-error">비밀번호가 일치하지 않습니다.</p>
          )}
          {pw && pwCheck && pw === pwCheck && (
            <p className="pw-success">비밀번호가 일치합니다!</p>
          )}
          <div className="agree-wrap">
            <label htmlFor="agree">
              <input
                type="checkbox"
                checked={isAgree}
                id="agree"
                onChange={(e) => setIsAgree(e.target.checked)}
              />
              <span>이용약관에 동의합니다.</span>
            </label>
          </div>
          {!isAgree && <p className="agree-error">이용약관에 동의해주세요.</p>}
        </div>
        <button disabled={!isFormValid} className="submit-btn">
          회원가입
        </button>
      </form>
    </>
  );
}
