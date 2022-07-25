import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./store/index.js";
import Counter from "./Counter";
import QuestionList from "./QuestionList";

export default function Home() {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [person, setPerson] = useState("");

  const acceptHandler = () => {
    console.log("Accepted!!!");

    const currentTimestamp = Date.now();
    const dateStr = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(currentTimestamp);

    dispatch({
      type: "accept",
      id: currentTimestamp,
      timestamp: dateStr,
      question: question,
      askee: person,
      status: "Accepted",
    });
  };

  const rejectHandler = () => {
    console.log("rejected!!!");
    const currentTimestamp = Date.now();
    const dateStr = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(currentTimestamp);

    dispatch({
      type: "reject",
      id: currentTimestamp,
      timestamp: dateStr,
      question: question,
      askee: person,
      status: "Rejected",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(question);

    const buttonName = event.nativeEvent.submitter.name;
    console.log(buttonName);

    if (buttonName === "acceptBtn") {
      acceptHandler();
    }

    if (buttonName === "rejectBtn") {
      rejectHandler();
    }
  };

  return (
    <Provider store={store}>
      <Counter></Counter>

      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="question">Question Asked: </label>
          <input
            type="text"
            id="question"
            name="question"
            onChange={(event) => setQuestion(event.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="person">Person Asked: </label>
          <input
            type="text"
            id="person"
            name="person"
            onChange={(event) => setPerson(event.target.value)}
          ></input>
        </div>
        <div>
          <input type="submit" value="reject" name="rejectBtn"></input>
          <input type="submit" value="accept" name="acceptBtn"></input>
        </div>
      </form>
      <QuestionList></QuestionList>
    </Provider>
  );
}
