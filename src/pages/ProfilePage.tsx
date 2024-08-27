import styled from "styled-components";
import profile from "../img/profile.png";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [profilePhoto, setProfilePhoto] = useState([]);

  useEffect(() => {
    const loadProfileData = () => {
      const storedPhoto = localStorage.getItem("feedData");
      if (storedPhoto) {
        setProfilePhoto(JSON.parse(storedPhoto));
      }
    };
    loadProfileData();
    window.addEventListener("storage", loadProfileData);
    console.log(profilePhoto);
    return () => window.removeEventListener("storage", loadProfileData);
  }, []);

  return (
    <ProfilePageAll className="ProfilePageAll">
      <ProfilePageLayout className="ProfilePageLayout">
        <ProfileMain className="ProfileMain">
          <StoryList className="StoryList">
            <img src={profile} />
          </StoryList>
          <ProfileInfo className="ProfileInfo">
            {profilePhoto.map((profilePhoto, index) => {
              return <h3 key={index}>{profilePhoto.username}</h3>;
            })}
            <div>게시물</div>
          </ProfileInfo>
        </ProfileMain>
        <FeedList className="FeedList">
          {profilePhoto.map((profilePhoto, index) => {
            return (
              <PostListItem>
                <PostImage
                  key={index}
                  src={profilePhoto.url}
                  className={profilePhoto.filter}
                  alt="Profile"
                />
              </PostListItem>
            );
          })}
        </FeedList>
      </ProfilePageLayout>
    </ProfilePageAll>
  );
};
export default ProfilePage;

const ProfilePageAll = styled.div`
  width: 100%;
  max-width: 1020px;
  height: auto;
  margin: 0 auto;
`;

const ProfilePageLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
  padding: 30px 20px;
`;

const ProfileMain = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 630px;
`;

const FeedList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StoryList = styled.div`
  width: 150px;
  height: 150px;
  margin: 48px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    border-radius: 50%;
  }
`;

const PostListItem = styled.div`
  width: calc(33.33% - 10px);
  margin: 5px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  margin-left: 16px;
`;
