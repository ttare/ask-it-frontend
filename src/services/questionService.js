import Http from '../utils/http';

class QuestionService {
  static async create(question) {
    return await Http.post(`/api/questions`, question);
  }

  static async list(page, limit = 10) {
    return await Http.get(`/api/questions/${page}/${limit}`);
  }

  static async myList(page, limit = 10) {
    return await Http.get(`/api/questions/my/${page}/${limit}`);
  }

  static async mostLiked() {
    return await Http.get(`/api/questions/mostLiked`);
  }

  static async details(id) {
    return await Http.get(`/api/questions/${id}`);
  }

  static async likeOrDislike(id, data) {
    return await Http.post(`/api/questions/${id}/likeOrDislike`, data);
  }
}

export default QuestionService;
