import styled from "styled-components";

const Story = ({ item }) => {
  return (
    <StoryMain className="StoryMain">
      <StoryLayout className="StoryLayout">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "0 8px",
          }}
        >
          <StoryProfile>
            <img src={item.url}></img>
          </StoryProfile>
          <div>{item.username}</div>
        </div>
      </StoryLayout>
    </StoryMain>
  );
};

export default Story;

export const StoryMain = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 85px;
  outline: none;
  overflow-y: hidden;
  position: relative;
`;

export const StoryLayout = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const StoryProfile = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
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
