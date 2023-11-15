import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import Profile from './components/Profile';
import Counter from './components/Counter';
import Resume from './components/Resume';
import FunctionEvent from './components/FunctionEvents';
import ClassEvents from './components/ClassEvents';
import FunctionalCounter from './components/FunctionalCounter';
import ConditionalComponent from './components/ConditionalComponent';
import MapFunction from './components/MapFunction';
import ObjectListRendering from './components/ObjectListRendering';
import Form from './components/Form';
import Todo from './components/Todo';
import InlineComponent from './components/InlineComponent';
import StyleSheetComponent from './components/StyleSheetComponent';
import ModuleComponent from './components/ModuleComponent';
function App() {
  return (
    <div className='App'>

      {/* <Hello></Hello>
      <Message messagethis="ako  ay si buboy na sobrang gwapo"></Message>
      <Profile name="deoby" age="33">
        <h2>I am so handsome</h2>
      </Profile>
      <Counter></Counter>
      <Resume name="deoboy" age="23"></Resume>
      <FunctionEvent></FunctionEvent>
      <ClassEvents></ClassEvents>
      <FunctionalCounter></FunctionalCounter>
      <ConditionalComponent></ConditionalComponent>
      <MapFunction></MapFunction>
      <ObjectListRendering></ObjectListRendering> 
        <Form></Form>*/}

      <Todo></Todo>
      <InlineComponent></InlineComponent>
      <StyleSheetComponent></StyleSheetComponent>
      <ModuleComponent></ModuleComponent>
    </div>
  );
}

export default App;
