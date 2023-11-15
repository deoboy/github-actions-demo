import { Component } from "react";

class Resume extends Component {
    render() {
        const { name, age } = this.props
        return <h1> This is a class components{name} {age}</h1>
    }
}

export default Resume;