import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StInput, StButton, StLinkCon, Wrapper } from "../styles/ChangeStyle";

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("아이디와 패스워드를 모두 입력해주세요.");
      return;
    }
    navigate("/main");
  };

  return (
    <Wrapper className="login-container">
      <h1 className="logo">Instagram</h1>
      <StInput
        type="username"
        name="username"
        value={username}
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={(e) => setUsername(e.target.value)}
      />
      <StInput
        type="password"
        name="password"
        value={password}
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
      />
      <StButton onClick={handleSubmit}>로그인</StButton>
      <StLinkCon href="/forgot-password" className="forgot-password">
        비밀번호를 잊으셨나요?
      </StLinkCon>
      <StLinkCon className="signup-box">
        계정이 없으신가요? <Link to="/signup">가입하기</Link>
      </StLinkCon>
    </Wrapper>
  );
};

export default LoginPage;
