import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import {Form, Formik} from "formik";
import Swal from "sweetalert2";
import InputBox from "components/InputBox";
import LoginValidator from "utils/validators/loginValidator";
import {AuthService} from "services";
import {UserActions} from "actions";

import './style.css';


class Login extends React.Component {
  constructor() {
    super();

    this.state = {};

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(credentials) {
    const response = await AuthService.login(credentials);
    if (response.error) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        html: `Something went wrong. Please check your data. <br> <br> ${response.error.message}`
      });
    } else {
      await this.props.dispatch(UserActions.setUser(response.token));
      this.props.history.push('/')
    }
  }

  render() {
    return (
      <div id="LoginForm">
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <h2>Login</h2>
              <p>Please enter your email and password</p>
            </div>

            <Formik
              onSubmit={this.onSubmit}
              validate={LoginValidator.validate}
              initialValues={{
                username: '',
                password: ''
              }}
              render={props => {
                return (
                  <Form>
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
                    <Button color="primary" type="submit">Login</Button>

                    <br/>
                    <br/>
                    <br/>

                    <div className="no-account">
                      Don't have an Account! &nbsp;
                      <Link to="/register">
                        Sign Up Here
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

export default connect()(Login);
