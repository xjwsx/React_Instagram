import React from "react";
import styled from "styled-components";
import { TfiMoreAlt } from "react-icons/tfi";

interface Item {
  username?: string;
  url: string;
  id: string;
}

interface CommentData {
  username: string;
  content: string;
  timestamp: string;
}

interface ChatModalProps {
  onClose: () => void;
  item: Item;
}

const ChatModal: React.FC<ChatModalProps> = ({ onClose, item }) => {
  const storedComments = localStorage.getItem(`${item.username}-${item.id}`);
  const comments: CommentData[] = storedComments
    ? JSON.parse(storedComments)
    : [];
  return (
    <Outside className="Outside">
      <ModalPosition className="ModalPosition">
        <ModalPhoto
          className="ModalPhoto"
          style={{
            backgroundImage: `url(${item.url})`,
          }}
        />
        <CommentSection className="CommentScetion">
          <Comment className="Comment">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  padding: "21px 4px 21px 16px",
                  alignItems: "center",
                }}
              >
                <CommentStory>
                  <img src={item.url} />
                </CommentStory>
                {item.username}
              </div>
              <TfiMoreAlt
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "16px",
                  cursor: "pointer",
                }}
              />
            </div>
          </Comment>
          {comments.length > 0 ? (
            comments.map((data, index) => (
              <Comment key={index} className="Comment">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "21px 4px 21px 16px",
                  }}
                >
                  <CommentStory>
                    <img src={item.url} alt="Comment User" />
                  </CommentStory>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <strong>{data.username}</strong>
                    <p
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      {data.content}
                    </p>
                    <small
                      style={{
                        marginLeft: "15px",
                        color: "#737373",
                      }}
                    >
                      {new Date(data.timestamp).toLocaleString()}
                    </small>
                  </div>
                </div>
              </Comment>
            ))
          ) : (
            <div style={{ padding: "21px", color: "#777" }}>
              No comments yet.
            </div>
          )}
        </CommentSection>
      </ModalPosition>
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
        onClick={onClose}
      >
        x
      </div>
    </Outside>
  );
};

export default ChatModal;

const Outside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1050;
`;

const ModalPosition = styled.div`
  display: flex;
  max-width: 90%;
  max-height: 90%;
  background-color: #fff;
  border-radius: 1px;
  overflow: hidden;
`;

const ModalPhoto = styled.div`
  width: 470px;
  height: 470px;
  background-color: black;
  background-size: cover;
`;

const CommentSection = styled.div`
  width: 560px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

const Comment = styled.div`
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
`;

const CommentStory = styled.div`
  width: 32px;
  height: 32px;
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
