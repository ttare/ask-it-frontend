import Http from 'utils/http';

class AuthService {
  static async register(user) {
    return await Http.post(`/api/auth/signup`, user);
  }

  static async login(credentials) {
    return await Http.post(`/api/auth/login`, credentials);
  }
}

export default AuthService;
