import React from "react";
import UserCard from "./UserCard/UserCard";
const User = ({ persondata }) => {
  return (
    <div>
      {persondata.map((el, i) => (
        <UserCard user={el} key={i} />
      ))}
    </div>
  );
};
export default User;
