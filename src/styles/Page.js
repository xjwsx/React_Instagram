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

//mainPage
export const MainPageAll = styled.div`
  width: 100%;
  max-width: 1020px;
  height: auto;
  margin: 0 auto;
`;

export const MainPageLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Feed = styled.div`
  width: 100%;
  max-width: 630px;
`;

export const FeedList = styled.div`
  width: 100%;
  max-width: 470px;
  margin: 0 auto;
`;

export const StoryList = styled(MainPageLayout)`
  margin: 1rem 0;
  padding: 1rem 0;
`;

export const Recommand = styled.div`
  width: 100%;
  max-width: 320px;
  padding-top: 30px;
  height: 100vh;
`;
