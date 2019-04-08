import React from 'react';
import {Link} from "react-router-dom";
import * as timeago from "timeago.js";

import './style.css'

const QuestionItem = ({item}) => {
  return (
    <div className="item" key={item.id}>
      <div className="votes-and-answers">
        <div>
          <div className="counts">
            <span>
              <strong>{item.likes - item.dislikes}</strong>
            </span>
          </div>
          <div>
            Rating
          </div>
        </div>

        <div>
          <div className="counts">
            <span>
              <strong>{item.commentsCount}</strong>
            </span>
          </div>
          <div>
            Answers
          </div>
        </div>
      </div>
      <div className="details">
        <h3>
          <Link to={`/questions/${item.id}`}>
            {item.subject}
          </Link>
        </h3>
        <div className="excerpt">
          {item.description}
        </div>
        <div className="user-info">
          <span className="asked-time">asked {timeago.format(item.createdAt)} </span>
          <span className="asked-by">
            {item.User.username}
          </span>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
