import React from 'react';
import { Formik, Form } from 'formik';
import InputBox from 'components/InputBox';
import AddQuestionValidator from "utils/validators/addQuestionValidator";

const AskQuestionForm = ({bindSubmitForm, addQuestion}) => {
  return (
    <Formik
      onSubmit={async values => await addQuestion(values)}
      validate={AddQuestionValidator.validate}
      initialValues={{
        subject: '',
        description: ''
      }}
      render={props => {
        bindSubmitForm(props.submitForm);
        return (
          <Form>
            <InputBox
              id="subject"
              name="subject"
              type="text"
              placeholder="Subject"
              label="Subject"
              {...props}
            />
            <InputBox
              id="description"
              name="description"
              component="textarea"
              type="text"
              placeholder="Description"
              label="Description"
              {...props}
            />
          </Form>
        );
      }}
    />
  );
};

export default AskQuestionForm;
