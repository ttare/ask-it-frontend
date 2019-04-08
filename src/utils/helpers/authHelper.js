const STORAGE_KEY = 'logged_user';

class AuthHelper {
  static user = null;

  static getAccessToken() {
    if (AuthHelper.user) {
      return AuthHelper.user.token;
    }
    return null;
  }

  static setUser(userData) {
    AuthHelper.user = userData;
    if(!AuthHelper.user)
      return localStorage.setItem(STORAGE_KEY, null);

    localStorage.setItem(STORAGE_KEY, JSON.stringify(AuthHelper.user));
  }

  static removeUser() {
    localStorage.removeItem(STORAGE_KEY);
  }

  static getUser() {
    if (!AuthHelper.user) {
      const userData = localStorage.getItem(STORAGE_KEY);
      if (userData)
        AuthHelper.user = JSON.parse(userData);
    }
    return AuthHelper.user;
  }
}

export default AuthHelper;
