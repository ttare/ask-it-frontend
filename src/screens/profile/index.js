import React from 'react';
import {connect} from 'react-redux';
import {MyQuestionsList} from 'components/QuestionsList';
import {QuestionActions} from "actions";

import UpdatePassword from './UpdatePassword';

import avatar from 'images/avatar.png';

import './style.css';

class Profile extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {user} = this.props;
    return (
      <div id="profile-page">
        <div className="page-title">
          <h4>
            Profile & My Questions
          </h4>
        </div>
        <div className="user-card">
          <div className="d-flex">
            <div className="avatar">
              <div className="avatar-card">
                <div className="avatar-content">
                  <img
                    src={avatar}
                    alt="" width="100%"
                  />
                </div>
                <small>Name:</small>
                <br/>
                <p>{user.name || 'Ttt'}</p>
                <small>username:</small>
                <br/>
                <p>{user.username}</p>

                <UpdatePassword />
              </div>
            </div>
            <div className="flex-grow-1 profile-details">
              <MyQuestionsList
                emptyListMessage="You dont have any questions in system. Create the first one..."
                limit={10}
                listAction={QuestionActions.myList}
                loadMoreAction={QuestionActions.myLoadMore}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Profile);
