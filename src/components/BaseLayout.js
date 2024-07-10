import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StMainCon, StSideCon } from "../styles/Page";
import { BiMoviePlay, BiSolidMoviePlay } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import {
  IoPaperPlaneOutline,
  IoPaperPlane,
  IoSearch,
  IoMenuOutline,
  IoMenu,
} from "react-icons/io5";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { FiPlusSquare } from "react-icons/fi";
import { AiOutlineCompass, AiOutlineMenu, AiFillCompass } from "react-icons/ai";
import { GoHome, GoHomeFill } from "react-icons/go";
import instagram from "../img/instagram.png";
import { useState } from "react";

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

const buttonsData = [
  {
    id: "home",
    defaultIcon: <GoHomeFill />,
    activeIcon: <GoHome />,
    text: "홈",
    path: "/main",
  },
  {
    id: "search",
    defaultIcon: <IoSearch />,
    activeIcon: <IoIosSearch />,
    text: "검색",
  },
  {
    id: "explore",
    defaultIcon: <AiFillCompass />,
    activeIcon: <AiOutlineCompass />,
    text: "탐색",
    path: "/explore",
  },
  {
    id: "reels",
    defaultIcon: <BiSolidMoviePlay />,
    activeIcon: <BiMoviePlay />,
    text: "릴스",
    path: "/reels",
  },
  {
    id: "messages",
    defaultIcon: <IoPaperPlane />,
    activeIcon: <IoPaperPlaneOutline />,
    text: "메세지",
    path: "/messages",
  },
  {
    id: "notifications",
    defaultIcon: <HiHeart />,
    activeIcon: <HiOutlineHeart />,
    text: "알림",
  },
  {
    id: "create",
    defaultIcon: <FiPlusSquare />,
    activeIcon: <FiPlusSquare />,
    text: "만들기",
  },
  {
    id: "more",
    defaultIcon: <IoMenu />,
    activeIcon: <IoMenuOutline />,
    text: "더보기",
  },
];

const Button = ({ data, isActive, onClick }) => {
  const navigate = useNavigate();
  const Icon = isActive ? data.defaultIcon : data.activeIcon;

  const handleButtonClick = () => {
    if (data.path) {
      navigate(data.path);
    }
    onClick(data.id);
  };
  return (
    <TabButton onClick={handleButtonClick}>
      {Icon}
      <TabText>{data.text}</TabText>
    </TabButton>
  );
};

const BaseLayout = () => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };
  return (
    <StMainCon>
      <StSideCon>
        <SidebarContainer>
          <Logo src={instagram} onClick={() => handleButtonClick("home")} />
          <SidebarContent>
            {buttonsData.map((button) => (
              <Button
                key={button.id}
                data={button}
                isActive={activeButton === button.id}
                onClick={handleButtonClick}
              />
            ))}
          </SidebarContent>
        </SidebarContainer>
      </StSideCon>
    </StMainCon>
  );
};

export default BaseLayout;
