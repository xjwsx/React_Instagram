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

//todo
// 사진 20개 유저 10명에게 2개씩
// 데이터 가공
// 로컬스토리지에 저장(댓글)
// 무한스크롤

//로컬스토리지에다가 텍스트를 쓴 유저네임, 텍스트, 시간, 어떤 글에 댓글이 달렸는지,
// 피드 아이디는 몇 번인지 파악
//

const MainPage = () => {
  const [photos, setPhotos] = useState([]);

  const getPhotos = async () => {
    const photoJson = await (
      await fetch(`https://jsonplaceholder.typicode.com/photos`)
    ).json();

    const newPhotos = photoJson.slice(0, 20);
    const userJson = await (
      await fetch(`https://jsonplaceholder.typicode.com/users`)
    ).json();

    const result = newPhotos.map((photo, index) => {
      const i = Math.floor(index / 2);
      // if (index >= 10) {
      //   i = index / 2;
      // }
      return { ...photo, ...userJson[i] };
    });
    setPhotos(result);
  };

  useEffect(() => {
    getPhotos();
  }, []);

  return (
    <MainPageAll className="MainPageAll">
      <MainPageLayout className="MainPageLayout">
        <FeedMain className="FeedMain">
          <StoryList className="StoryList">
            <Story />
          </StoryList>
          <FeedList className="FeedList">
            {photos.map((data) => {
              return <Feed item={data}></Feed>;
            })}
          </FeedList>
        </FeedMain>
        <Recommand></Recommand>
      </MainPageLayout>
    </MainPageAll>
  );
};
export default MainPage;
