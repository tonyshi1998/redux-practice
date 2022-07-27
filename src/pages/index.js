import { Provider, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import store from "./store/index.js";
import Counter from "./Counter";
import QuestionList from "./QuestionList";



export default function Home() {
  const dispatch = useDispatch();
  const [question, setQuestion] = useState("");
  const [person, setPerson] = useState("");
  const qList = useSelector(state => state.questions);
  const thunkedStore = (state) => {
    return function storeState(){
      localStorage.setItem('storedQuestions', JSON.stringify(qList));
    }
  }
  

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
    thunkedStore(qList)()
  };

  return (
    <Provider store={store}>
      {<Counter></Counter>}
      <div>
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
      </div>
      {<QuestionList></QuestionList>}
      {/* <style jsx><{`
        .container {

        }
      `}</style> */}
    </Provider>
  );
}

/*
  TODO:
  - install tailwind
  - deploy to vercel
  - manual persist
    > when the user loads the app for the first time, load the information from localstora
    > every time a user changes the data, save it in the localstorage
    > hint: window.storage.setItem and window.storage.getItem
    > when the user opens the app, it waits 2 seconds to load the data so we can simulate an API fetch

   - put code into src folder (Done)
  - Case switch (Done)
  - Remove drived states (Done)
  - try reduce (Done)
  - QuestionArr -> questions (Done)
*/




/*
  this page => index.js
  rejectapp.com/leaderboard
*/

// getStacticProps = () => {
//   return {
//     info: {
//       type: 'userinfo'
//     }
//   }
// }

/*
getServerSideProps = () => {

}
*/
