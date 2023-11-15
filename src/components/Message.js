import {Component} from "react";
class Message extends   Component {
    handleSwitch(e) {
        this.setState({
          message: e.target.value
        });
      }
    render() {
        return (
          <div className="App">
            <h1>Sample Class component {this.props.messagethis}</h1>
          
          </div>
        );
      }
}

export default Message;