import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import {Form, Formik} from "formik";
import Swal from 'sweetalert2';

import {AuthService} from "services";
import RegistrationValidator from "utils/validators/registationValidator";
import InputBox from "components/InputBox";

import './style.css';

class Register extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(user) {
    const response = await AuthService.register(user);
    const options = {};
    if (response.error) {
      options.title = 'Error';
      options.html = `Something went wrong. Please check your data. <br> <br> ${response.error.message}`;
      options.type = 'error';
    } else {
      options.title = 'Successuful';
      options.text = 'You Have Been Successfully Registered.';
      options.type = 'success';
      options.confirmButtonText = 'Go to Login';
    }

    Swal.fire(options).then(() => {
      if (!response.error) {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <div id="LoginForm">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <h2>Register new account</h2>
              <p>Please enter your details below.</p>
            </div>

            <Formik
              onSubmit={this.onSubmit}
              validate={RegistrationValidator.validate}
              initialValues={{
                name: '',
                username: '',
                password: '',
                verifyPassword: '',
              }}
              render={props => {
                return (
                  <Form>
                    <InputBox
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Display name"
                      {...props}
                    />
                    <InputBox
                      id="username"
                      name="username"
                      type="text"
                      placeholder="Username"
                      {...props}
                    />
                    <InputBox
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      {...props}
                    />
                    <InputBox
                      id="verifyPassword"
                      name="verifyPassword"
                      type="password"
                      placeholder="Verify Password"
                      {...props}
                    />
                    <Button color="primary" type="submit">Register</Button>

                    <br/>
                    <br/>
                    <br/>

                    <div className="no-account">
                      Already have an Account! &nbsp;
                      <Link to="/login">
                        Sign in Here
                      </Link>
                    </div>
                  </Form>
                );
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
