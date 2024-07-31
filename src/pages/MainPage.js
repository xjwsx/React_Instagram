import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import Feed from "../components/Feed";
import Recommand from "../components/Recommand";
import Story from "../components/Story";

const MainPage = () => {
  const [photos, setPhotos] = useState([]);
  const [feeds, setFeeds] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  const getPhotos = async () => {
    const photoJson = await (
      await fetch(
        `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=5`
      )
    ).json();

    //const newPhotos = photoJson.slice(0, 20);
    const userJson = await (
      await fetch(`https://jsonplaceholder.typicode.com/users`)
    ).json();

    const result = photoJson.map((photo, index) => {
      const i = Math.floor(index / 2);
      // if (index >= 10) {
      //   i = index / 2;
      // }
      return { ...photo, ...userJson[i] };
    });

    setPhotos((prevPhotos) => [...prevPhotos, ...result]);
    setPage((prevPage) => prevPage + 1);
    console.log(photos);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "1800px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getPhotos();
      }
    }, options);

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [loader.current]);

  useEffect(() => {
    const loadFeedData = () => {
      const storedData = localStorage.getItem("feedData");
      if (storedData) {
        setPhotos(JSON.parse(storedData));
      }
    };
    loadFeedData();
    window.addEventListener("storage", loadFeedData);

    return () => window.removeEventListener("storage", loadFeedData);
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
          <div ref={loader} />
        </FeedMain>
        <Recommand></Recommand>
      </MainPageLayout>
    </MainPageAll>
  );
};
export default MainPage;

const MainPageAll = styled.div`
  width: 100%;
  max-width: 1020px;
  height: auto;
  margin: 0 auto;
`;

const MainPageLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

const FeedMain = styled.div`
  width: 100%;
  max-width: 630px;
`;

const FeedList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 470px;
  margin: 0 auto;
`;

const StoryList = styled.div`
  display: flex;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 24px;
  padding: 8px 0;
`;
