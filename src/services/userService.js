import Http from 'utils/http';

class UserService {
  static async me() {
    return await Http.get(`/api/users/me`);
  }

  static async updatePassword(data) {
    return await Http.post(`/api/users/updatePassword`, data);
  }

  static async mostActive() {
    return await Http.get(`/api/users/mostActive`);
  }
}

export default UserService;
