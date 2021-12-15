

const TaskForm = ({ onCreate }) => {
    return (
        <form onSubmit={ (e) => {
                if (e.target[0].value) {
                    onCreate(e)
                }
            } }>
            <input placeholder='add details'/>
            <button>Add</button>
        </form>
    );
}


export default TaskForm;
