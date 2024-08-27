import styled from "styled-components";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Feed from "../components/Feed";
import Recommand from "../components/Recommand";
import Story from "../components/Story";

interface Photo {
  id: string;
  url: string;
  width: number;
  height: number;
}

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const MainPage: React.FC = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const loader = useRef<HTMLDivElement | null>(null);

  const getPhotos = useCallback(async () => {
    if (page === 1) {
      setIsLoading(true);
    }
    try {
      const photoJson = await (
        await fetch(
          `https://api.thecatapi.com/v1/images/search?limit=5&page=${page}breed_ids=beng&api_key=live_6adQrDjpF5ekrkZQcE1CugaE281U0K6HeVQ8zJiw8ry0u7LT6lTilf2Z9DU9XeTF`
        )
      ).json();

      const userJson = await (
        await fetch(`https://jsonplaceholder.typicode.com/users`)
      ).json();

      const result = photoJson.map((photo: Photo, index: number) => {
        const i = Math.floor(index / 2);
        return { ...photo, ...userJson[i] };
      });

      setPhotos((prevPhotos) => [...prevPhotos, ...result]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  useEffect(() => {
    if (isLoading) return;

    const options = {
      root: null,
      rootMargin: "1800px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isLoading) {
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
  }, [isLoading, getPhotos]);

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
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              <StoryList className="StoryList">
                {photos.slice(0, 8).map((data) => (
                  <Story key={data.id} item={data} />
                ))}
              </StoryList>
              <FeedList className="FeedList">
                {photos.map((data) => (
                  <Feed key={data.id} props={data} />
                ))}
              </FeedList>
            </>
          )}
          <div ref={loader} />
        </FeedMain>
        <Recommand item={photos} />
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
