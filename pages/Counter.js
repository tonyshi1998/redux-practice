import { useSelector } from "react-redux";


const Counter = (props) => {
    const counter = useSelector(state => state.counter);

    return(
        <div>
            <div>Score is {counter}</div>
        </div>
    )
};


export default Counter;
