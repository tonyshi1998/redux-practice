import { createStore } from "redux";

const responseReducer = (state = { questions: [] }, action) => {
  if (action.type === "accept") {
    return {
      questions: [
        ...state.questions,

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
      questions: [
        ...state.questions,

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
    const oldQuestion = state.questions.find((obj) => {
      return obj.id === action.id;
    });
    console.log(oldQuestion);
    const oldStatus = oldQuestion["status"];
    const index = state.questions.findIndex((obj) => {
      return obj.id === action.id;
    });

    if (oldStatus === "Accepted") {
      console.log("Changing to rejected");
      const newQuestions = [...state.questions];
      console.log(newQuestions);
      newQuestions[index]["status"] = "Rejected";
      return {
        counter: state.counter + 9,
        questions: [...newQuestions],
      };
    }

    if (oldStatus === "Rejected") {
      console.log("changing to accepted");
      const newQuestions = [...state.questions];
      console.log(newQuestions);
      newQuestions[index]["status"] = "Accepted";
      return {
        counter: state.counter - 9,
        questions: [...newQuestions],
      };
    }
  }

  return state;
};

const store = createStore(responseReducer);
export default store;
