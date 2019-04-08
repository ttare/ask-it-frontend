import React from 'react';

import avatar from 'images/avatar.png';

const UserInfo = ({user, message}) => {
  return (
    <div className="user-info d-flex justify-content-end align-items-end flex-wrap">
      <div className="user-container">
        <div className="user-avatar">
          <div className="user-avatar">
            <img src={avatar} alt=""/>
          </div>
        </div>
        <div className="user-details">
          <div className="user-name">{user.username}</div>
          <div className="user-action-time">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
