import React from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import UpdatePasswordForm from './UpdatePasswordForm';

class UpdatePassword extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false
    };

    this.toggleModal = this.toggleModal.bind(this);
    this.bindSubmitForm = this.bindSubmitForm.bind(this);
    this.saveChangesClick = this.saveChangesClick.bind(this);
  }

  toggleModal() {
    this.setState({isOpen: !this.state.isOpen})
  }

  bindSubmitForm(submitForm) {
    this.submitForm = submitForm;
  }

  saveChangesClick() {
    if (this.submitForm) {
      this.submitForm();
    }
  }

  render() {
    const {isOpen} = this.state;
    return (
      <div>
        <Button className="pl-0" style={{fontSize: 12}} color="link" onClick={this.toggleModal}>Change password</Button>
        <Modal isOpen={isOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Change password</ModalHeader>
          <ModalBody>
            <UpdatePasswordForm bindSubmitForm={this.bindSubmitForm} toggleModal={this.toggleModal}/>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveChangesClick}>Save Changes</Button>
            <Button color="secondary" onClick={this.toggleModal}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default UpdatePassword;
