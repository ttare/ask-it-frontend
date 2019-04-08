import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from 'components/Header';
import Loader from "components/Loader";
import Home from 'screens/home';
import Login from 'screens/login';
import Register from 'screens/register';
import Profile from 'screens/profile';
import QuestionDetails from "screens/questionDetails";

import {UserActions} from "actions";
import AuthHelper from "utils/helpers/authHelper";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isReady: false
    }
  }

  async componentDidMount() {
    const user = AuthHelper.getUser();
    if (user) {
      await this.props.setUser(user.token);
    }
    this.setState({
      isReady: true
    })
  }

  render() {
    const {isReady} = this.state;
    if (!isReady) {
      return <Loader/>
    }
    const {user, setUser} = this.props;
    return (
      <Router>
        <div>
          <Header user={user} logout={setUser}/>
          <div className="container">
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/questions/:id" component={QuestionDetails}/>
          </div>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  setUser: (token) => dispatch(UserActions.setUser(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
