import Http from 'utils/http';

class CommentService {
  static async create(comment) {
    return await Http.post(`/api/comments`, comment);
  }

  static async likeOrDislike(id, data) {
    return await Http.post(`/api/comments/${id}/likeOrDislike`, data);
  }
}

export default CommentService;
