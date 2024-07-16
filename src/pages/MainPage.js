import {
  Feed,
  FeedList,
  MainPageAll,
  MainPageLayout,
  Recommand,
  StoryList,
} from "../styles/Page";

const MainPage = () => {
  return (
    <MainPageAll className="MainPageAll">
      <MainPageLayout className="MainPageLayout">
        <Feed className="Feed">
          <StoryList>main</StoryList>
          <FeedList>feed</FeedList>
        </Feed>
        <Recommand>reommand</Recommand>
      </MainPageLayout>
    </MainPageAll>
  );
};
export default MainPage;
