import React from 'react';
import {connect} from 'react-redux';
import {QuestionActions} from "actions";
import {HomeQuestionsList} from 'components/QuestionsList';

import HotQuestions from './HotQuestions';
import MostActive from './MostActive';
import AskQuestion from "./AskQuestion";

import './style.css';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div id="home-page">
        <div className="content">
          <div className="page-title">
            <h4 className="float-left">Last Questions</h4>
            <AskQuestion/>
          </div>
          <HomeQuestionsList
            emptyListMessage="No any questions in system"
            limit={10}
            listAction={QuestionActions.list}
            loadMoreAction={QuestionActions.loadMore}
          />
        </div>
        <div className="sidebar">
          <HotQuestions/>
          <MostActive/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.home.list
});

export default connect(mapStateToProps)(Home);
