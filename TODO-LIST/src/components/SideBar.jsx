const SideBar = ({todos, onDeleteTodo}) => {
    console.log('todos', todos);
    
    return (
        <aside className="list-container">
            <h2>My Todos</h2>
            <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="todo-list">
                  <span>{todo.title}</span>
                  <button className="label-button" onClick={() => onDeleteTodo(todo.id)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
        </aside>
    )
}

export default SideBar;