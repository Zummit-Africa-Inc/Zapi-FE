import React from "react";
import Discussion from "./Discussion";
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
