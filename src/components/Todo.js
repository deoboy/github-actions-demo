import { useState } from "react";
import ListItems from "./ListItems";
export default function Todo() {

    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const handleChange = (event) => {
        setTodo(event.target.value)
        // console.log(todo);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList);
        console.log(todoList);
        setTodo("");
    }
    return (<div>

        <form onSubmit={handleSubmit}>
            <input type="text" value={todo} onChange={handleChange} />
            <button type="submit" >Add</button>
        </form>
        {todoList.map((tl, index) => (
            <ListItems key={index} name={tl}></ListItems>
        ))
        }

    </div>);
}