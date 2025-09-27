import {useDispatch, useSelector} from "react-redux";
import {counterActions} from "../modal/slice/counterSlice";
import {getCounterValue} from "../modal/selector/getCounterValue/getCounterValue";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment())
    }
    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <p>value = {counterValue}</p>

            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>

        </div>
    );
};