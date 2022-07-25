import { createStore } from "redux";

const responseReducer = (state = { counter: 0, questionArr: [] }, action) => {
  if (action.type === "accept") {
    return {
      counter: state.counter + 1,
      questionArr: [
        ...state.questionArr,

        {
          id: action.id,
          timestamp: action.timestamp,
          question: action.question,
          askee: action.askee,
          status: action.status,
        },
      ],
    };
  }
  if (action.type === "reject") {
    return {
      counter: state.counter + 10,
      questionArr: [
        ...state.questionArr,

        {
          id: action.id,
          timestamp: action.timestamp,
          question: action.question,
          askee: action.askee,
          status: action.status,
        },
      ],
    };
  }

  if (action.type === "swap") {
    const oldQuestion = state.questionArr.find((obj) => {
      return obj.id === action.id;
    });
    console.log(oldQuestion);
    const oldStatus = oldQuestion["status"];
    const index = state.questionArr.findIndex((obj) => {
      return obj.id === action.id;
    });

    if (oldStatus === "Accepted") {
      console.log("Changing to rejected");
      const newQuestionArr = [...state.questionArr];
      console.log(newQuestionArr);
      newQuestionArr[index]["status"] = "Rejected"
      return {
        counter: state.counter + 9,
        questionArr: [...newQuestionArr],
      };
    }


    if (oldStatus === "Rejected") {
      console.log("changing to accepted");
      const newQuestionArr = [...state.questionArr];
      console.log(newQuestionArr);
      newQuestionArr[index]["status"] = "Accepted"
      return {
        counter: state.counter - 9,
        questionArr: [...newQuestionArr],
      };
    }
  }

  return state;
};

const store = createStore(responseReducer);
export default store;
