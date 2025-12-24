import React, { useContext } from "react";
import UserContext from "../Context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return null;

  return (
    <div className="welcome-text">
      👋 Welcome <strong>{user.Username}</strong>
    </div>
  );
}

export default Profile;
