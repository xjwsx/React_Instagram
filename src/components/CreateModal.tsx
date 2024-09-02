import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { FaPhotoVideo } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import { CgSmile } from "react-icons/cg";
import profile from "../img/profile.png";
import { filters } from "../utils/filters";
import Picker from "emoji-picker-react";

interface CreateModalProps {
  onClose: () => void;
}

interface PostData {
  username: string;
  url: string;
  title: string;
  filter: string;
  timestamp: string;
}

const CreateModal: React.FC<CreateModalProps> = ({ onClose }) => {
  const refs = useRef<HTMLInputElement>(null);
  const [step, setStep] = useState<number>(1);
  const [filterData, setFilterData] = useState<string | undefined>(undefined);
  const [imgFile, setImgFile] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [comment, setComment] = useState<string>("");
  const [showEmojiPicker, setShowEmojiPicker] = useState<boolean>(false);
  const [comments, setComments] = useState<PostData[]>([]);

  const shareFeed = () => {
    const postData: PostData = {
      username: localStorage.getItem("username") || "",
      url: imgFile,
      title: comment,
      filter: filterData || "",
      timestamp: new Date().toISOString(),
    };

    const updatePostData = [...comments, postData];
    setComments(updatePostData);
    localStorage.setItem("feedData", JSON.stringify(updatePostData));
    onClose();
  };

  const clickInput = () => {
    refs.current?.click();
  };

  const saveImgFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImgFile(reader.result as string);
        setStep(step + 1);
      };
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const onEmojiClick = (emojiObject: { emoji: string }) => {
    setComment(comment + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const onClickImgButton = (filter: string) => {
    if (filter === filterData) {
      setFilterData(undefined);
    } else {
      setFilterData(filter);
    }
  };

  const renderHeader = (step: number) => {
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
            <div
              style={{
                marginTop: "5px",
              }}
            >
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
            <NextButton onClick={() => setStep(step + 1)}>다음</NextButton>
          </>
        );
      case 3:
        return (
          <>
            <div
              style={{
                marginTop: "5px",
              }}
            >
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
            <NextButton onClick={shareFeed}>공유하기</NextButton>
          </>
        );
    }
    return;
  };

  const renderContent = (step: number) => {
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
              <EventButton onClick={clickInput}>컴퓨터에서 선택</EventButton>
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
              }}
            ></img>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                borderLeft: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderBottom: "1px solid #ccc",
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
                          color: filter === filterData ? "#0095F6" : "black",
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
              }}
            ></img>
            <div
              className="Layout"
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                height: 541,
                maxHeight: 541,
                borderLeft: "1px solid #ccc",
              }}
            >
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                }}
              >
                <img
                  src={profile}
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    marginLeft: "12px",
                    marginTop: "18px",
                    marginBottom: "14px",
                    marginRight: "10px",
                  }}
                ></img>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                >
                  {username}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  width: 320,
                }}
              >
                <textarea
                  placeholder="문구를 입력하세요...."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  style={{
                    width: "100%",
                    height: "168px",
                    minHeight: "40px",
                    color: "black",
                    padding: "8px 16px",
                    border: "none",
                    outline: "none",
                    resize: "none",
                    overflowY: "scroll",
                    fontSize: "14px",
                    boxSizing: "border-box",
                  }}
                />
              </div>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  position: "relative",
                  borderBottom: "1px solid #ccc",
                }}
              >
                <CgSmile
                  size="20"
                  style={{ cursor: "pointer", margin: "12px 12px" }}
                  onClick={toggleEmojiPicker}
                />
                {showEmojiPicker && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-290px",
                    }}
                  >
                    <Picker
                      reactionsDefaultOpen={true}
                      height={300}
                      width={300}
                      onEmojiClick={onEmojiClick}
                    />
                  </div>
                )}
              </div>
            </div>
          </Wrapper>
        );
    }
    return;
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "";
    setUsername(storedUsername);
    const storedPosts = localStorage.getItem(username);
    if (storedPosts) {
      setComments(JSON.parse(storedPosts));
    }
  }, [username]);

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
  overflow-y: scroll;
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
  max-height: 578px;
  display: flex;
  flex-direction: column;
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

const EventButton = styled.button`
  background-color: #0095f6;
  border: 0;
  margin-top: 20px;
  padding: 8px 15px;
  border-radius: 5px;
  color: white;

  &:hover {
    cursor: pointer;
    background-color: #0062a3;
  }
`;

const NextButton = styled.div`
  color: #0095f6;
  font-weight: bold;
  &:hover {
    cursor: pointer;
    color: #0062a3;
  }
`;
