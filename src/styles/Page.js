import styled from "styled-components";

//baseLayout
export const StMainCon = styled.div`
  display: flex;
  width: 100%;
`;

export const StSideCon = styled.div`
  width: 100%;
  max-width: 235px;
  height: 100vh;
  position: sticky;
  left: 0;
  top: 0;
`;

export const StMiddleCon = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

//MainPage
export const MainPageAll = styled.div`
  width: 100%;
  max-width: 1020px;
  height: auto;
  margin: 0 auto;
`;

export const MainPageLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const FeedMain = styled.div`
  width: 100%;
  max-width: 630px;
`;

export const FeedLayout = styled.div`
  padding-bottom: 12px;
  padding-left: 4px;
  max-width: 630px;
`;

export const FeedList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 470px;
  margin: 0 auto;
`;

export const FeedPhoto = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  width: 470px;
  height: 470px;
  margin: 0 auto;
  background-color: black;
  border-radius: 5px;
`;

export const FeedTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
`;

export const FeedButtons = styled.div`
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

export const FeedContents = styled.div`
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

  p {
    color: #777;
    //padding: 2px 0;
    cursor: pointer;
  }
`;

export const UserInfo = styled.div`
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

export const UserId = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  align-self: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const UserStory = styled.div`
  width: 42px;
  height: 42px;
  background: linear-gradient(to right, #ffb300, #ff1459, #d400c1);
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

export const StoryList = styled.div`
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 8px 0;
`;

export const Story = styled.div`
  align-items: stretch;
  display: flex;
  flex-direction: column;
  height: 85px;
  outline: none;
  overflow-y: hidden;
  position: relative;
`;

export const Recommand = styled.div`
  width: 100%;
  max-width: 320px;
  padding-left: 64px;
  height: 100vh;
`;
