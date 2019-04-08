import React from 'react';
import {connect} from 'react-redux';
import {QuestionActions} from "actions";
import './style.css';


class MostActive extends React.Component {
  constructor() {
    super();

    this.state = {};

  }

  async componentDidMount() {
    this.setState({loading: true});
    await this.props.dispatch(QuestionActions.mostActiveUsers());
    this.setState({loading: false});
  }

  render() {
    const {mostActiveUsers} = this.props;
    return (
      <div id="most-active-users">
        <div>
          <div className="title">
            Most Active Users
          </div>
        </div>

        <hr/>

        {mostActiveUsers.length === 0 ?
          <div className="empty-list">
            There are no active users (users with any answer)
          </div>
          : mostActiveUsers.map(item =>
            <div className="item" key={item.id}>
              <div className="item-type">
                <div className="icon"/>
              </div>
              <div className="content">
                <a href="javascript:void(0)">
                  {item.username}
                </a>
                <br/>
                <small>
                  answers: {item.commentsCount || 0}
                </small>
              </div>
              <br className="cbt"/>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  mostActiveUsers: state.home.mostActiveUsers
});

export default connect(mapStateToProps)(MostActive);
