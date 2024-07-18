import {
  FeedButtons,
  FeedContents,
  FeedLayout,
  FeedPhoto,
  FeedTitle,
  UserId,
  UserInfo,
  UserStory,
} from "../styles/Page";
import { TfiMoreAlt } from "react-icons/tfi";
import { HiOutlineHeart, HiOutlineBookmark } from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { useState } from "react";

const Feed = ({ photo, user }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [commentsCount, setCommentsCount] = useState(0);

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
            <HiOutlineHeart
              style={{
                fontSize: "26px",
                cursor: "pointer",
                marginLeft: "-8px",
              }}
            />
          </span>
          <span>
            <HiOutlineChatBubbleOvalLeft
              style={{ fontSize: "26px", cursor: "pointer" }}
            />
          </span>
          <span>
            <PiPaperPlaneTilt style={{ fontSize: "26px", cursor: "pointer" }} />
          </span>
        </div>
        <span>
          <HiOutlineBookmark
            style={{ fontSize: "26px", cursor: "pointer", marginRight: "-8px" }}
          />
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
            marginTop: "8px",
            marginBottom: "20px",
            color: "#777",
            cursor: "",
          }}
        >
          댓글 달기...
        </div>
      </FeedContents>
    </FeedLayout>
  );
};

export default Feed;
