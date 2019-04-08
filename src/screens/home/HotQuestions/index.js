import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {QuestionActions} from "actions";
import './style.css';


class HotQuestions extends React.Component {
  constructor() {
    super();

    this.state = {};

  }

  async componentDidMount() {
    this.setState({loading: true});
    await this.props.dispatch(QuestionActions.mostLiked());
    this.setState({loading: false});
  }

  render() {
    const {hotQuestions} = this.props;

    return (
      <div id="hot-questions">
        <div>
          <div className="title">
            Most Liked Questions
          </div>
        </div>

        <hr/>

        {hotQuestions.length === 0 ?
          <div className="empty-list">
            There are no any likes questions
          </div>
          : hotQuestions.map(item =>
            <div className="item" key={item.id}>
              <div className="item-type">
                <span>{item.numOfLikes}</span>
              </div>
              <div className="content">
                <Link to={`/questions/${item.id}`}>
                  {item.subject}
                </Link>
              </div>
              <br className="cbt"/>
            </div>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hotQuestions: state.home.hotQuestions
});

export default connect(mapStateToProps)(HotQuestions);
