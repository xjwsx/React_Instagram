import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  StInput,
  StButton,
  StLinkCon,
  Wrapper,
  StImg,
} from "../styles/ChangeStyle";
import instagram from "../img/instagram.png";

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

  const gotoPassword = () => {
    navigate("/password");
  };

  return (
    <Wrapper className="login-container">
      <StImg className="logo" src={instagram} />
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
      <StLinkCon className="forgot-password">
        <div
          onClick={gotoPassword}
          style={{
            color: "#00376B",
            cursor: "pointer",
          }}
        >
          비밀번호를 잊으셨나요?
        </div>
        {/* <Link to="/password">비밀번호를 잊으셨나요?</Link> */}
      </StLinkCon>
      <StLinkCon className="signup-box">
        계정이 없으신가요? <Link to="/signup">가입하기</Link>
      </StLinkCon>
    </Wrapper>
  );
};

export default LoginPage;
