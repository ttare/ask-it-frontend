import React from 'react';
import {Formik, Form} from 'formik';
import InputBox from 'components/InputBox';
import UpdatePasswordValidator from "utils/validators/updatePasswordValidator";
import {UserService} from "services";
import Swal from "sweetalert2";

const UpdatePasswordForm = ({bindSubmitForm, toggleModal}) => {
  return (
    <Formik
      onSubmit={async (values, action) => {
        action.setFieldError('oldPassword');
        const response = await UserService.updatePassword(values);
        if (response.error) {
          Swal.fire({
            type: 'error',
            title: 'Oops...',
            html: `Something went wrong. Please check your data. <br> <br> <br> ${response.error.message}`
          });
          action.setFieldError('oldPassword', response.error.message);
        } else {
          Swal.fire({
            type: 'success',
            title: 'Success',
            html: `Your password has been changed successfully!`
          }).then(toggleModal);
        }
      }}
      validate={UpdatePasswordValidator.validate}
      initialValues={{
        oldPassword: '',
        password: '',
        verifyPassword: ''
      }}
      render={props => {
        bindSubmitForm(props.submitForm);
        return (
          <Form>
            <InputBox
              id="oldPassword"
              name="oldPassword"
              type="password"
              placeholder="Old password"
              label="Old password"
              {...props}
            />
            <InputBox
              id="password"
              name="password"
              type="password"
              placeholder="New password"
              label="New password"
              {...props}
            />
            <InputBox
              id="verifyPassword"
              name="verifyPassword"
              type="password"
              placeholder="Verify password"
              {...props}
            />
          </Form>
        );
      }}
    />
  );
};

export default UpdatePasswordForm;
