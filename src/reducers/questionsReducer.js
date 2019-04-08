import * as ACTION_TYPES from 'actions/actionTypes';


const initialState = {
  list: {
    questions: []
  },
  hotQuestions: [],
  mostActiveUsers: [],
  myList: {
    questions: []
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_QUESTIONS_LIST: {
      return {
        ...state,
        list: action.payload
      };
    }

    case ACTION_TYPES.GET_MORE_QUESTIONS: {
      const {questions, ...rest} = action.payload;
      const appendedQuestions = [...state.list.questions, ...questions ];
      return {
        ...state,
        list: {
          ...rest,
          questions: appendedQuestions
        },
      };
    }

    case ACTION_TYPES.ADD_QUESTION: {
      const questions = [action.payload, ...state.list.questions ];
      return {
        ...state,
        list: {
          ...state.list,
          count: state.list.count++,
          questions,
        }
      };
    }

    case ACTION_TYPES.GET_HOT_QUESTIONS_LIST: {
      return {
        ...state,
        hotQuestions: action.payload,
      };
    }

    case ACTION_TYPES.GET_MOST_ACTIVE_USERS: {
      return {
        ...state,
        mostActiveUsers: action.payload,
      };
    }

    case ACTION_TYPES.GET_MY_QUESTIONS_LIST: {
      return {
        ...state,
        myList: action.payload
      };
    }

    case ACTION_TYPES.GET_MORE_MY_QUESTIONS: {
      const {questions, ...rest} = action.payload;
      const appendedQuestions = [...state.myList.questions, ...questions ];
      return {
        ...state,
        myList: {
          ...rest,
          questions: appendedQuestions
        },
      };
    }

    default:
      return state;
  }
};

