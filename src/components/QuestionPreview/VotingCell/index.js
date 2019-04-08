import React from 'react';
import {Button} from "reactstrap";

const VotingCell = ({id, rating, isLikedByLoggedUser, likeOrDislike}) => {
  return (
    <div className="vote-cell">
      <div className="voting-container">
        <Button color="link" onClick={() => likeOrDislike(id, true)}>
          <svg
            aria-hidden="true"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            style={{fill: isLikedByLoggedUser === true ? '#45A163' : undefined}}
          >
            <path d="M2 26h32L18 10z"/>
          </svg>
        </Button>
        <div className="vote-count d-flex flex-column align-items-center">{rating}</div>
        <Button color="link" onClick={() => likeOrDislike(id, false)}>
          <svg
            aria-hidden="true"
            width="36"
            height="36"
            viewBox="0 0 36 36"
            style={{fill: isLikedByLoggedUser === false ? '#C91D2E' : undefined}}
          >
            <path d="M2 10h32L18 26z"></path>
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default VotingCell;
