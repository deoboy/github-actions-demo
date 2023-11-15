import { Component } from "react";

class ClassEvents extends Component {
    handleClick() {
        console.log('classbased handler')
    }
    render() {
        return (
            <div>this is a class based componesnt
                <button onClick={this.handleClick}> Click </button>
            </div>
        )
    }
}
export default ClassEvents;