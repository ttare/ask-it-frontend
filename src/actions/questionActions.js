import * as ACTION_TYPES from './actionTypes';
import {QuestionService, UserService} from 'services';


const listAction = function (api, actionType) {
  return function (page, limit, defaultLimit) {
    return async (dispatch) => {
      const payload = await api(page, limit);
      payload.totalPages = Math.ceil(payload.count / defaultLimit);
      payload.page = limit / defaultLimit;
      payload.questions = payload.questions.map(question => {
        question.description = question.description.substr(0 ,200);
        return question;
      });
      return await dispatch({
        type: actionType,
        payload
      });
    }
  }
};

const loadMoreAction = function (api, actionType) {
  return function (page, limit) {
    return async (dispatch) => {
      const payload = await api(page, limit);
      payload.questions = payload.questions.map(question => {
        question.description = question.description.substr(0 ,197) + '...';
        return question;
      });
      return await dispatch({
        type: actionType,
        payload
      });
    }
  }
};

class QuestionActions {

  static list = listAction(QuestionService.list, ACTION_TYPES.GET_QUESTIONS_LIST);

  static loadMore = loadMoreAction(QuestionService.list, ACTION_TYPES.GET_MORE_QUESTIONS);

  static myList = listAction(QuestionService.myList, ACTION_TYPES.GET_MY_QUESTIONS_LIST);

  static myLoadMore = loadMoreAction(QuestionService.myList, ACTION_TYPES.GET_MORE_MY_QUESTIONS);

  static add(question, user) {
    return async (dispatch) => {
      const payload = await QuestionService.create(question);
      return await dispatch({
        type: ACTION_TYPES.ADD_QUESTION,
        payload: {
          ...payload,
          createdAt: new Date(),
          ...question,
          commentsCount: 0,
          dislikes: 0,
          likes: 0,
          User: user
        }
      });
    }
  }

  static mostLiked() {
    return async (dispatch) => {
      const payload = await QuestionService.mostLiked();
      return await dispatch({
        type: ACTION_TYPES.GET_HOT_QUESTIONS_LIST,
        payload
      });
    }
  }

  static mostActiveUsers() {
    return async (dispatch) => {
      const payload = await UserService.mostActive();
      return await dispatch({
        type: ACTION_TYPES.GET_MOST_ACTIVE_USERS,
        payload
      });
    }
  }

}

export default QuestionActions;
