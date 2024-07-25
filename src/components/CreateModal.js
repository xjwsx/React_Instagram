import styled from "styled-components";
import { useRef, useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import profile from "../img/profile.png";
import { filters } from "../utils/filters";

const CreateModal = ({ onClose }) => {
  const refs = useRef();
  const [imgFile, setImgFile] = useState("");
  const [step, setStep] = useState(1);
  const [filterData, setFilterData] = useState();

  const clickInput = () => {
    refs.current.click();
  };

  const saveImgFile = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
      setStep(step + 1);
    };
  };

  const onClickImgButton = (filter) => {
    if (filter === filterData) {
      setFilterData();
    } else {
      setFilterData(filter);
    }
  };

  const renderHeader = (step) => {
    switch (step) {
      case 1:
        return (
          <div
            style={{
              flex: 1,
              textAlign: "center",
            }}
          >
            새 게시물 만들기
          </div>
        );
      case 2:
        return (
          <>
            <div>
              <FaArrowLeftLong
                size="22px"
                onClick={() => setStep(step - 1)}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
            <div
              style={{
                fontWeight: "bold",
              }}
            >
              필터
            </div>
            <div
              onClick={() => setStep(step + 1)}
              style={{
                color: "blue",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              다음
            </div>
          </>
        );
      case 3:
        return (
          <>
            <div>
              <FaArrowLeftLong
                size="22px"
                onClick={() => setStep(step - 1)}
                style={{
                  cursor: "pointer",
                }}
              />
            </div>
            <div
              style={{
                fontWeight: "bold",
              }}
            >
              새 게시물 만들기
            </div>
            <div
              onClick={() => setStep(step + 1)}
              style={{
                color: "blue",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              공유하기
            </div>
          </>
        );
    }
    return;
  };

  const renderContent = (step) => {
    switch (step) {
      case 1:
        return (
          <Wrapper
            style={{
              width: 480,
              paddingBottom: 30,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                flex: 1,
                height: "100%",
              }}
            >
              <FaPhotoVideo size="100" />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                사진과 동영상을 여기에 끌어다 놓으세요.
              </div>
              <button
                onClick={clickInput}
                style={{
                  backgroundColor: "#0095F6",
                  border: 0,
                  marginTop: "20px",
                  padding: "8px 15px",
                  borderRadius: "5px",
                  color: "white",
                }}
              >
                컴퓨터에서 선택
              </button>
              <input
                type="file"
                ref={refs}
                style={{
                  display: "block",
                  height: 0,
                  width: 0,
                  border: 0,
                  padding: 0,
                }}
                onChange={saveImgFile}
              ></input>
            </div>
          </Wrapper>
        );
      case 2:
        return (
          <Wrapper>
            <img
              className={filterData}
              src={imgFile}
              style={{
                flex: 1,
                maxWidth: 600,
                // height: "100%",
              }}
            ></img>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                필터
              </div>
              <div
                style={{
                  overflowY: "scroll",
                  maxHeight: 500,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: 320,
                  }}
                >
                  {filters.map((filter) => {
                    return (
                      <div
                        style={{
                          flex: "1 0 33%",
                          maxWidth: 100,
                          textAlign: "center",
                          padding: "3px",
                          color: filter === filterData ? "blue" : "black",
                        }}
                      >
                        <img
                          className={filter}
                          src={profile}
                          style={{
                            width: "100%",
                            maxWidth: 100,
                            cursor: "pointer",
                          }}
                          onClick={() => onClickImgButton(filter)}
                        ></img>
                        {filter}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Wrapper>
        );
      case 3:
        return (
          <Wrapper>
            <img
              className={filterData}
              src={imgFile}
              style={{
                flex: 1,
                maxWidth: 600,
                // height: "100%",
              }}
            ></img>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                필터
              </div>
              <div
                style={{
                  overflowY: "scroll",
                  maxHeight: 500,
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width: 320,
                  }}
                >
                  {filters.map((filter) => {
                    return (
                      <div
                        style={{
                          flex: "1 0 33%",
                          maxWidth: 100,
                          textAlign: "center",
                          padding: "3px",
                          color: filter === filterData ? "blue" : "black",
                        }}
                      >
                        <img
                          className={filter}
                          src={profile}
                          style={{
                            width: "100%",
                            maxWidth: 100,
                            cursor: "pointer",
                          }}
                          onClick={() => onClickImgButton(filter)}
                        ></img>
                        {filter}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </Wrapper>
        );
    }
    return;
  };

  return (
    <Outside className="Outside">
      <ModalBackground className="Modalbackgournd" onClick={onClose}>
        <div
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            zIndex: "1",
            color: "white",
            fontSize: "34px",
            cursor: "pointer",
          }}
        >
          x
        </div>
      </ModalBackground>
      <ModalPosition className="ModalPosition">
        <ModalLayout className="ModalLayout">
          <Comment>{renderHeader(step)}</Comment>
          {renderContent(step)}
        </ModalLayout>
      </ModalPosition>
    </Outside>
  );
};

export default CreateModal;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Outside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const ModalBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
`;

const ModalPosition = styled.div`
  position: absolute;
  display: flex;
  width: auto;
  height: auto;
  min-width: 348px;
  min-height: 391px;
  max-width: 80%;
  max-height: 898px;
  border-radius: 20px;
  background-color: #fff;
  overflow: hidden;
  transition: all 0.5s;
`;

const ModalLayout = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  //align-items: center;
  //justify-content: center;
  //overflow-y: auto;
`;

const Comment = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 44px;
  height: 44px;
  border-bottom: 1px solid #ccc;
  padding: 0 16px;
`;
