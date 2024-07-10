import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StMainCon, StSideCon } from "../styles/Page";
import { MdHomeFilled } from "react-icons/md";
import { BiSearch, BiMoviePlay } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { HiOutlineHeart } from "react-icons/hi";
import { FiPlusSquare } from "react-icons/fi";
import { AiOutlineCompass, AiOutlineMenu } from "react-icons/ai";
import instagram from "../img/instagram.png";

const Logo = styled.img`
  margin: 20px 10px;
  margin-bottom: 40px;
  width: 120px;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarContainer = styled.div`
  height: 100vh;
  width: 80%;
  background-color: white;
  border-right: 1px solid #d3d2d2;
  padding: 10px;
  padding-right: 15px;
  position: relative;
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 1px;
`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 10px;

  background-color: transparent;
  border: none;
  font-size: 23px;
  margin-bottom: 18px;

  &:hover {
    background-color: #ececec;
    border-radius: 8px;
    cursor: pointer;
  }
`;

const TabText = styled.span`
  font-size: 18px;
  margin-left: 20px;
`;

const BaseLayout = () => {
  const navigate = useNavigate();
  return (
    <StMainCon>
      <StSideCon>
        <SidebarContainer>
          <Logo src={instagram} onClick={() => navigate("/main")}></Logo>
          <SidebarContent>
            <TabButton onClick={() => navigate("/main")}>
              <MdHomeFilled />
              <TabText>홈</TabText>
            </TabButton>
            <TabButton onClick={() => navigate("/main")}>
              <BiSearch />
              <TabText>검색</TabText>
            </TabButton>
            <TabButton onClick={() => navigate("/main")}>
              <AiOutlineCompass />
              <TabText>탐색</TabText>
            </TabButton>
            <TabButton onClick={() => navigate("/main")}>
              <BiMoviePlay />
              <TabText>릴스</TabText>
            </TabButton>
            <TabButton onClick={() => navigate("/main")}>
              <IoPaperPlaneOutline />
              <TabText>메세지</TabText>
            </TabButton>
            <TabButton onClick={() => navigate("/main")}>
              <HiOutlineHeart />
              <TabText>알림</TabText>
            </TabButton>
            <TabButton onClick={() => navigate("/main")}>
              <FiPlusSquare />
              <TabText>만들기</TabText>
            </TabButton>
            <TabButton onClick={() => navigate("/main")}>
              <AiOutlineMenu />
              <TabText>더보기</TabText>
            </TabButton>
          </SidebarContent>
        </SidebarContainer>
      </StSideCon>
    </StMainCon>
  );
};

export default BaseLayout;
