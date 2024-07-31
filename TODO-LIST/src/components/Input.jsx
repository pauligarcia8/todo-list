import { useState } from "react";

const Input = ({onCancel, onAddTodo}) => {
    const [newTodo, setNewTodo] = useState('')

    const handleInput = (event) => {
        setNewTodo(event.target.value);
    }

    const handleSave = () => {
        onAddTodo({
            title: newTodo
        })
        
        setNewTodo('');
    }

    return (
        <div className="input-container">
            <div className="label-container">
                <label>Write here the new task</label>
                <div className="button-container">
                    <button className="label-button" onClick={onCancel}>X</button>
                    <button className="label-button" onClick={handleSave}>Add</button>
                </div>

            </div>
            <input value={newTodo} type="text" onChange={handleInput}/>
        </div>
    )
}

export default Input;