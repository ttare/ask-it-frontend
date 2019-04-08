import React from 'react';
import VotingCell from "./VotingCell";
import PostCell from "./PostCell";
import * as timeago from "timeago.js";

const QuestionPreview = ({className, item, descriptionProperty, likeOrDislike}) => {
  return (
    <div className={`question ${className}`}>
      <VotingCell
        id={item.id}
        rating={item.likes - item.dislikes}
        isLikedByLoggedUser={item.isLikedByLoggedUser}
        likeOrDislike={likeOrDislike}
      />
      <PostCell
        description={item[descriptionProperty]}
        user={item.User}
        message={`asked ${timeago.format(item.createdAt)}`}
      />
    </div>
  );
};

export default QuestionPreview;
