import { useSelector, useDispatch } from "react-redux";
import { thunkedStore } from './index'

const QuestionList = (props) => {
  const dispatch = useDispatch();
  
  const swapAnswer = (questionID) => {
    console.log("Changing answer for question with ID", { questionID });
    dispatch({type: "swap", id: questionID})
    thunkedStore(qList)
  };

  const qList = useSelector((state) => state.questions);
  
  return (
    <div>
      <h1>Questions So Far</h1>
      {qList.map((qItem) => (
        <li key={qItem.id}>
          Question: {qItem.question}; Askee: {qItem.askee}; Answer:{" "}
          {qItem.status}
          <button
            onClick={(event) => {
              swapAnswer(qItem.id);
            }}
          >
            Change Answer
          </button>
        </li>
      ))}
    </div>
  );
};

export default QuestionList;
