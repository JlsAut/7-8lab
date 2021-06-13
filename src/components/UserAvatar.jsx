import React from "react";

const UserAvatar = props => {
  return (
    <div className="user_avatar">
      <img
        src={props.src}
        width={props.width}
        height={props.height}
        alt="Avatar"
      />
    </div>
  );
};

export default UserAvatar;
