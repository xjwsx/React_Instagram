import styled from "styled-components";

const Recommand = ({ item }) => {
  return (
    <RecommandMain className="RecommandMain">
      <RecommandLayout className="RecommandLayout">
        <RecommandProfile className="RecommandProfile">
          <RecommandStory className="RecommandStory">
            {item[0] && item[0].url ? (
              <img src={item[0].url} alt="Profile" />
            ) : (
              <div>No Image</div>
            )}
          </RecommandStory>
          <RecommandUserName className="RecommandUserName">
            <span
              style={{
                fontSize: "14px",
                fontWeight: "700",
                color: "#333",
              }}
            >
              pieceofxeace
            </span>
          </RecommandUserName>
          <span
            style={{
              fontSize: "14px",
            }}
          >
            전환
          </span>
        </RecommandProfile>
        <RecommandList>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            <span>회원님을 위한 추천</span>
            <span>모두보기</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              padding: "16px 0",
            }}
          >
            {item.slice(2, 4).map((data) => (
              <RecommandItemRow key={data.id}>
                {data.url ? (
                  <>
                    <RecommandUserProfile>
                      <img src={data.url} alt="Profile" />
                    </RecommandUserProfile>
                    <RecommandUserId>
                      <div>{data.username || "Unknown User"}</div>
                    </RecommandUserId>
                    <FollowButton>팔로우</FollowButton>
                  </>
                ) : (
                  <div>No Data</div>
                )}
              </RecommandItemRow>
            ))}
          </div>
        </RecommandList>
      </RecommandLayout>
    </RecommandMain>
  );
};

export default Recommand;

export const RecommandMain = styled.div`
  width: 100%;
  max-width: 320px;
  padding-left: 64px;
  height: 100vh;
`;

export const RecommandLayout = styled.div`
  width: 100%;
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const RecommandList = styled.div`
  margin-top: 24px;
  margin-bottom: 8px;
  margin-left: 16px;
  margin-right: 16px;
  padding: 16px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  span {
    font-size: 14px;
    line-height: 10px;
    color: #737373;
    font-weight: 600;
  }
`;

export const RecommandProfile = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-shrink: 0;
  flex-wrap: nowrap;
  padding: 0 16px;
  align-items: center;
  cursor: pointer;

  span {
    width: 15%;
    font-size: 12px;
    font-weight: 600;
    color: #0095f6;
  }
`;

export const RecommandStory = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 42px;
  height: 42px;
  max-width: 100%;
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

export const RecommandUserName = styled.div`
  width: 63.5%;
`;

export const RecommandUserProfile = styled.div`
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
    margin-bottom: 10px;
  }
`;

export const RecommandUserId = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const RecommandItemRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 10px;
`;

export const FollowButton = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0095f6;
  cursor: pointer;
`;
