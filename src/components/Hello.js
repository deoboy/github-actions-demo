// import ReactDOM from 'react-dom'
// import React from 'react'
// const Hello =()=>{
//     return <h1>Hello world!</h1>
// }
const deo="depbpy"
function Hello(props) {
    const showMessage = () => {
      alert('Followed ' + props.user);
    };
    const Messages= () => {
return "Hi hello i am deo"
      };
    const handleClick = () => {
      setTimeout(showMessage, 3000);
    };
  
    return (
      <h1>Hello word{deo} {10+50} {Messages()}</h1>
    );
  }
export default Hello;