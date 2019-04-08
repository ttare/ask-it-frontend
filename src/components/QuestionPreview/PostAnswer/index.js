import React from 'react';
import InputBox from "components/InputBox";
import {Form, Formik} from "formik";
import {Button} from "reactstrap";

const PostAnswer = ({postAnswerClick}) => {
  return (
    <div className="mb-5 pb-5">
      <div className="title mt-5">
        <h5>
          Your Answer
        </h5>
      </div>

      <Formik
        onSubmit={postAnswerClick}
        validate={(values) => {
          let errors = {};
          if (!values.answer) {
            errors.answer = 'Required';
          } else if (values.answer.length < 15) {
            errors.answer = 'Answer must be at least 15 characters';
          }
          return errors;
        }}
        initialValues={{
          answer: '',
        }}
        render={props => {
          return (
            <Form>
              <InputBox
                id="answer"
                name="answer"
                component="textarea"
                placeholder="Answer"
                {...props}
              />
              <Button color="primary" type="submit">Post Your Answer</Button>
            </Form>
          )
        }}
      />
    </div>
  );
};

export default PostAnswer;
