import {
  FeedList,
  FeedMain,
  MainPageAll,
  MainPageLayout,
  StoryList,
} from "../styles/Page";
import Feed from "../components/Feed";
import { useEffect, useState } from "react";
import Recommand from "../components/Recommand";
import Story from "../components/Story";

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
            <Story></Story>
          </StoryList>
          <FeedList className="FeedList">
            <Feed className="Feed"></Feed>
          </FeedList>
        </FeedMain>
        <Recommand></Recommand>
      </MainPageLayout>
    </MainPageAll>
  );
};
export default MainPage;
