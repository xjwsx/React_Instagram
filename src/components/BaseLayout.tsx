import styled from "styled-components";
import React, { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BiMoviePlay, BiSolidMoviePlay } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { IoSearch, IoMenuOutline, IoMenu } from "react-icons/io5";
import { PiPaperPlaneTilt, PiPaperPlaneTiltFill } from "react-icons/pi";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { FiPlusSquare } from "react-icons/fi";
import { AiOutlineCompass, AiFillCompass } from "react-icons/ai";
import { GoHome, GoHomeFill } from "react-icons/go";
import instagram from "../img/instagram.png";
import profile from "../img/profile.png";
import CreateModal from "./CreateModal";

interface ButtonData {
  id: string;
  defaultIcon: JSX.Element;
  activeIcon: JSX.Element;
  text: string;
  path?: string;
}

interface ButtonProps {
  data: ButtonData;
  isActive: boolean;
  onClick: (id: string) => void;
}

interface BaseLayoutProps {
  children: ReactNode;
}

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
    defaultIcon: <PiPaperPlaneTiltFill />,
    activeIcon: <PiPaperPlaneTilt />,
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
    id: "profile",
    defaultIcon: (
      <img
        src={profile}
        style={{
          width: "23px",
          height: "23px",
          borderRadius: "50%",
        }}
      ></img>
    ),
    activeIcon: (
      <img
        src={profile}
        style={{
          width: "23px",
          height: "23px",
          borderRadius: "50%",
        }}
      ></img>
    ),
    text: "프로필",
    path: "/profile",
  },
  {
    id: "more",
    defaultIcon: <IoMenu />,
    activeIcon: <IoMenuOutline />,
    text: "더보기",
  },
];

const Button: React.FC<ButtonProps> = ({ data, isActive, onClick }) => {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const Icon = isActive ? data.defaultIcon : data.activeIcon;

  const changeModal = () => {
    setModal(!modal);
  };

  const handleButtonClick = () => {
    if (data.path) {
      navigate(data.path);
    } else if (data.id === "create") {
      setModal(true);
    }
    onClick(data.id);
  };

  return (
    <>
      <Buttons onClick={handleButtonClick}>
        {Icon}
        <ButtonText>{data.text}</ButtonText>
      </Buttons>
      {data.id === "create" && modal && (
        <CreateModal onClose={() => changeModal()} />
      )}
    </>
  );
};

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (buttonId: string) => {
    setActiveButton(buttonId);
  };
  return (
    <BaseLayoutMain className="BaseLayoutMain">
      <Side className="Side">
        <SidebarContainer>
          <Logo src={instagram} onClick={() => handleButtonClick("home")} />
          <SidebarLayout>
            {buttonsData.map((button) => (
              <Button
                key={button.id}
                data={button}
                isActive={activeButton === button.id}
                onClick={handleButtonClick}
              />
            ))}
          </SidebarLayout>
        </SidebarContainer>
      </Side>
      <MiddleMain>{children}</MiddleMain>
    </BaseLayoutMain>
  );
};

export default BaseLayout;

const BaseLayoutMain = styled.div`
  display: flex;
  width: 100%;
`;

const Side = styled.div`
  width: 100%;
  max-width: 235px;
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 200;
`;

const MiddleMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Logo = styled.img`
  margin: 30px 10px;
  margin-bottom: 30px;
  width: 120px;
  &:hover {
    cursor: pointer;
  }
`;

const SidebarContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  border-right: 1px solid #d3d2d2;
  position: relative;
`;

const SidebarLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1px;
  margin-right: 8px;
`;

const Buttons = styled.button`
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

const ButtonText = styled.span`
  font-size: 18px;
  margin-left: 20px;
`;
