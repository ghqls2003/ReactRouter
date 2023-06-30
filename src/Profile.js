import React from "react";
import { useParams } from "react-router-dom";

// 프로필에서 사용 할 데이터
const profileData = {
  ilc: {
    name: "ryong",
    description: "I Like Cold",
  },
  area: {
    name: "jinju",
    description: "진주시",
  },
};

const Profile = () => {
  const { username } = useParams();
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 데이터입니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
};

export default Profile;
