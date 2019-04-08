import * as ACTION_TYPES from './actionTypes';
import {UserService} from 'services';
import AuthHelper from "../utils/helpers/authHelper";

class UserActions {
  static setUser(token) {
    return async (dispatch) => {
      let user = {};
      if (token) {
        AuthHelper.setUser({
          token
        });
        const response = await UserService.me();
        if (response.error) {
          AuthHelper.removeUser();
        } else {
          user = response;
          AuthHelper.setUser({
            ...user,
            token
          });
        }
      } else {
        AuthHelper.removeUser();
      }

      return await dispatch({
        type: ACTION_TYPES.SET_USER,
        payload: user
      });
    }
  }
}

export default UserActions;
