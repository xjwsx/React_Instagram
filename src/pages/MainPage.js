import {
  FeedList,
  FeedMain,
  MainPageAll,
  MainPageLayout,
  Recommand,
  Story,
  StoryList,
} from "../styles/Page";
import Feed from "../components/Feed";
import { useEffect, useState } from "react";

const MainPage = () => {
  const [photos, setPhotos] = useState([]);
  const [users, setUsers] = useState([]);

  const getPhotos = async () => {
    const json = await (
      await fetch(`https://jsonplaceholder.typicode.com/photos`)
    ).json();
    setPhotos(json);
  };

  const getUsers = async () => {
    const json = await (
      await fetch(`https://jsonplaceholder.typicode.com/users`)
    ).json();
    setUsers(json);
  };

  useEffect(() => {
    getPhotos();
    getUsers();
  }, []);

  const combineData = photos.map((photo) => ({
    photo: photo.url,
  }));

  return (
    <MainPageAll className="MainPageAll">
      <MainPageLayout className="MainPageLayout">
        <FeedMain className="FeedMain">
          <StoryList className="StoryList">
            <Story className="Story">Main</Story>
          </StoryList>
          <FeedList className="FeedList">
            <Feed className="Feed"></Feed>
          </FeedList>
        </FeedMain>
        <Recommand className="Recommand">reommand</Recommand>
      </MainPageLayout>
    </MainPageAll>
  );
};
export default MainPage;
