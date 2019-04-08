import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import {QuestionActions} from "actions";

import AskQuestionForm from './AskQuestionForm';

class AskQuestion extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.bindSubmitForm = this.bindSubmitForm.bind(this);
    this.postQuestionClick = this.postQuestionClick.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  toggleModal() {
    this.setState({isOpen: !this.state.isOpen});
  }

  bindSubmitForm(submitForm) {
    this.submitForm = submitForm;
  }

  postQuestionClick() {
    if (this.submitForm) {
      this.submitForm();
    }
  }

  async addQuestion(question) {
    await this.props.dispatch(QuestionActions.add(question, this.props.user));
    this.toggleModal();
  }

  render() {
    const {isOpen} = this.state;
    const {user} = this.props;
    return (
      <div className="float-right text-right">
        <Button color="primary" size="sm" onClick={this.toggleModal} disabled={!user.id}>
          Ask Question
        </Button>
        <br/>
        {!user.id && <small>
          <Link to="/login">Login</Link>
          {' '} to ask a question</small>
        }
        <Modal isOpen={isOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Ask question</ModalHeader>
          <ModalBody>
            <AskQuestionForm bindSubmitForm={this.bindSubmitForm} addQuestion={this.addQuestion}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.postQuestionClick}>Post a question</Button>
            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps, null)(AskQuestion);
