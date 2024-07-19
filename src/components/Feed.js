import {
  FeedButtons,
  FeedContents,
  FeedLayout,
  FeedPhoto,
  FeedTitle,
  PostButton,
  StyledInput,
  UserId,
  UserInfo,
  UserStory,
} from "../styles/Page";
import { TfiMoreAlt } from "react-icons/tfi";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineBookmark,
  HiBookmark,
} from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { CgSmile } from "react-icons/cg";
import { useState } from "react";
import ChatModal from "./ChatModal";

const Feed = ({ photo, user }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);
  const [comment, setComment] = useState("");
  const [isBookMarkActive, setIsBookMarkActive] = useState(false);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [modal, setModal] = useState(false);

  const handleBookMarkButton = () => {
    setIsBookMarkActive(!isBookMarkActive);
  };

  const handleLikeCountButton = () => {
    setIsLikeActive(!isLikeActive);
    if (isLikeActive ? setLikeCount(0) : setLikeCount(1));
  };

  const changeModal = () => {
    setModal(!modal);
  };

  return (
    <FeedLayout>
      <FeedTitle className="FeedTitle">
        <UserInfo className="UserInfo">
          <UserStory className="UserStory" />
          <UserId>jxwsx</UserId>
        </UserInfo>
        <TfiMoreAlt
          style={{
            marginLeft: "8px",
            cursor: "pointer",
          }}
        />
      </FeedTitle>
      <FeedPhoto className="FeedPhoto"></FeedPhoto>
      <FeedButtons className="FeedButtons">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span>
            {isLikeActive ? (
              <HiHeart
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                  marginLeft: "-8px",
                  color: "#ff3040",
                }}
                onClick={handleLikeCountButton}
              />
            ) : (
              <HiOutlineHeart
                style={{
                  fontSize: "26px",
                  cursor: "pointer",
                  marginLeft: "-8px",
                }}
                onClick={handleLikeCountButton}
              />
            )}
          </span>
          <span>
            <HiOutlineChatBubbleOvalLeft
              style={{ fontSize: "26px", cursor: "pointer" }}
              onClick={changeModal}
            />
            {modal && <ChatModal onClose={changeModal} />}
          </span>
          <span>
            <PiPaperPlaneTilt style={{ fontSize: "26px", cursor: "pointer" }} />
          </span>
        </div>
        <span>
          {isBookMarkActive ? (
            <HiBookmark
              style={{
                fontSize: "26px",
                cursor: "pointer",
                marginRight: "-8px",
              }}
              onClick={handleBookMarkButton}
            />
          ) : (
            <HiOutlineBookmark
              style={{
                fontSize: "26px",
                cursor: "pointer",
                marginRight: "-8px",
              }}
              onClick={handleBookMarkButton}
            />
          )}
        </span>
      </FeedButtons>
      <FeedContents className="FeedContents">
        <span>
          <b>좋아요 {likeCount}개</b>
        </span>
        <span>
          <b>nickname</b> constents
        </span>
        <div
          style={{
            marginTop: "8px",
            color: "#777",
            cursor: "pointer",
          }}
        >
          댓글 {commentsCount}개 모두 보기
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "8px",
            marginBottom: "20px",
          }}
        >
          <StyledInput
            type="text"
            placeholder="댓글 달기..."
            onChange={(e) => setComment(e.target.value)}
          />
          {comment && <PostButton>게시</PostButton>}
          <CgSmile
            size="16"
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </FeedContents>
    </FeedLayout>
  );
};

export default Feed;
