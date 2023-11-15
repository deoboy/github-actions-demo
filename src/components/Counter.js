import { Component } from "react";

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0,
            counter2: 0,
        };

    }
    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    decrement = () => {
        this.setState({
            counter: this.state.counter - 1,
        });

    }
    render() {
        return (
            <div>
                <h3>Count value is: {this.state.counter}</h3>
                <button onClick={this.increment}>Click increment</button>

                <button onClick={this.decrement}>Click decrement</button>
            </div>
        );

    }
}

export default Counter;