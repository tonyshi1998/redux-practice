import { createStore } from "redux";
import { useEffect } from "react";

const responseReducer = (state = { questions: [] }, action) => {


  if (action.type === "accept") {
    return {
      questions: [
        ...state.questions,

  switch (action.type) {


    case "accept":
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

    case "reject":
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

    case "swap":
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
      default:
        return state;
  }
};
/*
if (action.type === "accept") {
}
if (action.type === "reject") {
}

if (action.type === "swap") {
  return state;
}
*/

const store = createStore(responseReducer);
export default store;
