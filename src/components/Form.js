import { Component } from "react";

class Form extends Component {
    state = {
        firstname: "",
        lastname: ""
    }
    handleChange = (event) => {
        this.setState({
            firstname: event.target.value,
        });
    }
    handleChange2 = (event) => {
        this.setState({
            lastname: event.target.value,
        });

    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log({
            fname: this.state.firstname,
            lname: this.state.lastname
        })
    }
    render() {
        return <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} type="text" value={this.state.firstname}></input> {/*all form elements are default immutable>*/}
                <input onChange={this.handleChange2} type="text" value={this.state.lastname}></input> {/*all form elements are default immutable>*/}
                <input type="submit" value="Submit" />
            </form>



        </div>
    }
}
export default Form;