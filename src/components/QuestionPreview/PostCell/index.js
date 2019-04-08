import React from 'react';
import UserInfo from "../UserInfo";

const PostCell = ({description, user, message}) => {
  return (
    <div className="post-cell">
      <div className="post-text">
        <p>
          {description}
        </p>
      </div>

      <UserInfo
        user={user}
        message={message}
      />
    </div>
  );
};

export default PostCell;
