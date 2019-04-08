import React from 'react';
import {connect} from "react-redux";
import Swal from 'sweetalert2';

import Loader from "components/Loader";
import ItemPreview from "components/QuestionPreview";
import PostAnswer from "components/QuestionPreview/PostAnswer";
import {CommentService, QuestionService} from "services";

import './style.css';

class QuestionDetails extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.fetchData = this.fetchData.bind(this);
    this.postAnswerClick = this.postAnswerClick.bind(this);
    this.likeOrDislikeQuestionClick = this.likeOrDislikeQuestionClick.bind(this);
    this.likeOrDislikeCommentClick = this.likeOrDislikeCommentClick.bind(this);
  }

  async componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    const question = await QuestionService.details(this.props.match.params.id);
    if (!question.error) {
      this.setState({question});
    }
  }

  async postAnswerClick(values, actions) {
    const comment = {
      text: values.answer,
      question_id: this.state.question.id,
    };

    const response = await CommentService.create(comment);
    if (response.error) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        html: `Something went wrong. Please check your data. <br> <br> ${response.error.message}`
      });
    } else {
      actions.resetForm();
      this.fetchData();
      Swal.fire({
        type: 'success',
        title: 'Successfully',
        text: 'The answer was successfully posted.'
      });
    }
  }

  async likeOrDislikeQuestionClick(id, like) {
    const {question} = this.state;
    const response = await QuestionService.likeOrDislike(id, {like});
    if (!response.error) {
      if (like === question.isLikedByLoggedUser) {
        question[question.isLikedByLoggedUser ? 'likes' : 'dislikes']--;
        question.isLikedByLoggedUser = null;
      } else {
        question[like ? 'likes' : 'dislikes']++;
        if (question.isLikedByLoggedUser !== null) {
          question[question.isLikedByLoggedUser ? 'likes' : 'dislikes']--;
        }
        question.isLikedByLoggedUser = like;
      }
      this.setState({question})
    }
  }

  async likeOrDislikeCommentClick(id, like) {
    const {question} = this.state;
    const comment = question.Comments.find(item => item.id === id);

    const response = await CommentService.likeOrDislike(id, {like});
    if (!response.error) {
      if (like === comment.isLikedByLoggedUser) {
        comment[comment.isLikedByLoggedUser ? 'likes' : 'dislikes']--;
        comment.isLikedByLoggedUser = null;
      } else {
        comment[like ? 'likes' : 'dislikes']++;
        if (comment.isLikedByLoggedUser !== null) {
          comment[comment.isLikedByLoggedUser ? 'likes' : 'dislikes']--;
        }
        comment.isLikedByLoggedUser = like;
      }
      this.setState({question});
    }
  }

  render() {
    const {question} = this.state;
    if (!question) return <Loader/>;
    const {user} = this.props;
    return (
      <div id="question-details">
        <div className="title">
          <h4>
            {question.subject}
          </h4>
        </div>

        <div className="content">
          <ItemPreview
            item={question}
            descriptionProperty="description"
            likeOrDislike={this.likeOrDislikeQuestionClick}
          />

          {question.Comments.length !== 0 &&
          <div>
            <div className="title mt-5">
              <h5>
                {question.Comments.length} Answers
              </h5>
            </div>


            {question.Comments.map(item => <ItemPreview
              className="answer"
              item={item}
              descriptionProperty="text"
              likeOrDislike={this.likeOrDislikeCommentClick}
              key={item.id}
            />)}
          </div>
          }

          {user && <PostAnswer
            postAnswerClick={this.postAnswerClick}
          />
          }

        </div>
      </div>
    );
  }
}

export default connect(state => ({user: state.user}))(QuestionDetails);
