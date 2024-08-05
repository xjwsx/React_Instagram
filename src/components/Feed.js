import styled from "styled-components";
import { useEffect, useState } from "react";
import { TfiMoreAlt } from "react-icons/tfi";
import ChatModal from "./ChatModal";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineBookmark,
  HiBookmark,
} from "react-icons/hi";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { CgSmile } from "react-icons/cg";
import EmojiPicker from "emoji-picker-react";

const Feed = ({ item }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [isBookMarkActive, setIsBookMarkActive] = useState(false);
  const [isLikeActive, setIsLikeActive] = useState(false);
  const [modal, setModal] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleBookMarkButton = () => {
    setIsBookMarkActive(!isBookMarkActive);
  };

  const handleLikeCountButton = () => {
    setIsLikeActive(!isLikeActive);
    if (isLikeActive ? setLikeCount(0) : setLikeCount(1));
  };

  const handleAddComment = () => {
    if (comment.trim()) {
      const newComment = {
        username: localStorage.getItem("username"),
        content: comment,
        timestamp: new Date().toISOString(),
        feedid: item.id,
      };
      const updateComments = [...comments, newComment];
      setComments(updateComments);
      localStorage.setItem(
        `${item.username}-${item.id}`,
        JSON.stringify(updateComments)
      );
      setComment("");
    }
  };

  const onEmojiClick = (emojiObject) => {
    setComment(comment + emojiObject.emoji);
    setShowEmojiPicker(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const changeModal = () => {
    setModal(!modal);
  };

  useEffect(() => {
    const storedComments = localStorage.getItem(`${item.username}-${item.id}`);
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, [item.id]);

  return (
    <FeedLayout>
      <FeedTitle className="FeedTitle">
        <UserInfo className="UserInfo">
          <UserStory className="UserStory">
            <img src={item.url}></img>
          </UserStory>
          <UserId>{item.username}</UserId>
        </UserInfo>
        <TfiMoreAlt
          style={{
            marginLeft: "8px",
            cursor: "pointer",
          }}
        />
      </FeedTitle>
      <FeedPhoto
        className={item.filter}
        style={{
          backgroundImage: `url(${item.url})`,
        }}
      ></FeedPhoto>
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
          <b>{item.username}</b> {item.title}
        </span>
        <div
          style={{
            marginTop: "8px",
            color: "#777",
            cursor: "pointer",
          }}
        >
          <span onClick={changeModal}>댓글 {comments.length}개 모두 보기</span>
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          {comment && <PostButton onClick={handleAddComment}>게시</PostButton>}
          <div
            style={{
              position: "relative",
            }}
          >
            <CgSmile
              size="16"
              style={{ cursor: "pointer" }}
              onClick={toggleEmojiPicker}
            />
            {showEmojiPicker && (
              <div
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: "20px",
                }}
              >
                <EmojiPicker onEmojiClick={onEmojiClick} />
              </div>
            )}
          </div>
        </div>
      </FeedContents>

      {modal && <ChatModal onClose={changeModal} item={item} />}
    </FeedLayout>
  );
};

export default Feed;

const FeedLayout = styled.div`
  padding-bottom: 12px;
  padding-left: 4px;
  max-width: 630px;
`;

const FeedPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  width: 470px;
  height: 470px;
  margin: 0 auto;
  background-color: black;
  border-radius: 5px;
  background-position: center;
  background-size: cover;
`;

const FeedTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
`;

const FeedButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0px;

  span {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const FeedContents = styled.div`
  margin-bottom: 12px;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  line-height: 19px;

  span {
    color: #333;
    display: block;
    padding: 3px 0;
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  width: 98%;
  color: #777;
  border: none;
  outline: none;
  font-size: 14px;
`;

const PostButton = styled.button`
  width: 55px;
  font-size: 14px;
  font-weight: bold;
  color: blue;
  border: none;
  background-color: transparent;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;

const UserInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  a {
    padding: 10px;
    font-size: 0.9rem;
    font-weight: 600;
    color: #444;
  }
`;

const UserId = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-self: auto;
  &:hover {
    cursor: pointer;
  }
`;

const UserStory = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 12px;
  padding: 2px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border: 2.5px solid #fff;
    border-radius: 50%;
  }
`;
