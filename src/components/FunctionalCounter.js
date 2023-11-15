import { useState } from "react";
function FunctionalCounter() {
    const [counter, setCounter] = useState(0);
    const [varname, setVarname] = useState("deoboy");
    const increments = () => {
        setCounter((counter) => counter + 1)
    }
    const decrements = () => {
        setCounter((counter) => counter - 1)
    }
    return <div>
        <div>Counter value {counter}</div>
        <button onClick={increments}>Increment</button>
        <button onClick={decrements}> Decrement</button>
    </div>;
}
export default FunctionalCounter;