import { useSelector } from "react-redux";


const Counter = (props) => {
    const qList = useSelector(state => state.questions);
    const values = qList.map((question) => question.status === "Accepted" ? 1:10)
    const score = values.reduce((prev, cur) => prev + cur, 0)

    return(
        <div>
            <div>Score is {score}</div>
        </div>
    )
};


export default Counter;
