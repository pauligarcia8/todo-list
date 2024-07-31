import { useState } from 'react';
import Input from "./components/Input.jsx";
import AddNewTodo from './components/AddNewTodo.jsx';
import SideBar from './components/SideBar.jsx';
import Button from './components/Button.jsx';
import './App.css'

function App() {
  const [toggleInput, setToggleInput] = useState(false);
  const [toggleList, setToggleList] = useState(false);
  const [todosState, setTodosState] = useState({
    myTodos: []
  });

  // to handle open and close input
  const handleToggleInput = () => {
    setToggleInput((prevState) => !prevState);
  }

  const handleToggleList = () => {
    setToggleList((prevState) => !prevState);
  }

  // to save new todos
  const handleSaveTodo = (todo) => {
    setTodosState((prevState) => {
      const todoId = Math.random();
      const newTodo = {
        ...todo,
        id: todoId
      };

      return {
        ...prevState,
        myTodos: [...prevState.myTodos, newTodo]
      };
    });
  }

  // to delete existing todos
  const handleDeleteTodo = (id) => {
    setTodosState((prevState) => {
      return {
        myTodos: prevState.myTodos.filter((todo) => todo.id !== id)
      }
    })
  }


  return (
    <main>
      <div className='landing-container'>
        <AddNewTodo onAddTask={handleToggleInput}></AddNewTodo>
        {toggleInput && <Input onCancel={handleToggleInput} onAddTodo={handleSaveTodo} ></Input>}
        {/* <Input onCancel={handleToggleInput} onAddTodo={handleSaveTodo} ></Input> */}
      </div>
      {toggleList && <SideBar todos={todosState.myTodos} onDeleteTodo={handleDeleteTodo}></SideBar>}
      {!toggleList && <Button onClick={handleToggleList}>Open</Button>}
    </main>
  )
}

export default App
