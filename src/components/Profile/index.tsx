import React from "react";
import Discussion from "./discussion";
import ProfileAPIS from "./ProfileAPIS";
import ProfileHeader from "./ProfileHeader";

const Profile: React.FC = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfileAPIS />
      <Discussion />
    </div>
  );
};

export default Profile;
