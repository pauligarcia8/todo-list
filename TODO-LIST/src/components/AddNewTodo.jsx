const CreateNewProject = ({onAddTask}) => {

    return (
        <div className='container-box'>
        <h1>My todo list app</h1>
        <p>Being organized is the key of success</p>
        <button onClick={onAddTask}>+ Add new todo</button>
      </div>
    )
}

export default CreateNewProject;