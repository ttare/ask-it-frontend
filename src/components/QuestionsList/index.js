import PropTypes from 'prop-types'
import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import QuestionItem from 'components/QuestionItem';

import './style.css';

class QuestionsList extends React.Component {
  constructor(props) {
    super(props);

    this.fetchData = this.fetchData.bind(this);
    this.loadMore = this.loadMore.bind(this);

    this.limit = props.limit;
  }

  componentDidMount() {
    let {page} = this.props.list;
    /*
        if user load more question and leave home page and go to other page (for example questions details page).
        Now, when user back on home page, it is more convenient to show user all previously loaded questions from store,
        but we need to refresh those list, because some of questions could be updated in meantime.
        We need logic bellow, because we will fetch all loaded questions from server and replace new question items with
        old.
    */
    if (page) {
      this.fetchData(1, page * this.limit, false);
    } else {
      this.fetchData(1, this.limit, false);
    }
  }

  async fetchData(page, limit, loadMore) {
    const {listAction, loadMoreAction} = this.props;
    this.setState({loading: true});
    const action = loadMore ? loadMoreAction : listAction;
    await this.props.dispatch(action(page, limit, this.limit));
    this.setState({loading: false});
  }

  loadMore() {
    const {page, totalPages} = this.props.list;
    const nextPage = page + 1;
    if (nextPage > totalPages) return;
    this.fetchData(nextPage, this.limit, true);
  }

  render() {
    const {list} = this.props;
    return (
      <div>
        {list.questions.length === 0 ?
          <div className="empty-question-list">{this.props.emptyListMessage}</div>
          :
          <div>
            <div id="questions-list">
              {list.questions.map(item => <QuestionItem item={item} key={item.id}/>)}
            </div>
            {list.page < list.totalPages &&
              <div className="text-center pt-4 pb-4">
                <Button color="link" onClick={this.loadMore} disabled={list.page === list.totalPages}>Load more</Button>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}


export default QuestionsList;
export const HomeQuestionsList = connect(state => ({list: state.home.list}))(QuestionsList);
export const MyQuestionsList = connect(state => ({list: state.home.myList}))(QuestionsList);

QuestionsList.propTypes = {
  limit: PropTypes.number,
  emptyListMessage: PropTypes.string.isRequired,
  listAction: PropTypes.func.isRequired,
  loadMoreAction: PropTypes.func.isRequired
};

QuestionsList.defaultProps = {
  limit: 10,
};
