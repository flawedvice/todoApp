import { MdDeleteOutline } from 'react-icons/md'
import Task from './Task';

// Show Tasks according to filter (all, pending or completed
const DeleteAll = ({ onDelete }) => {
    return (
        <button type="submit">
            <MdDeleteOutline onClick={ () => onDelete() }/>
            delete all
            </button>
    )
}

const TaskList = ({ tasks, onComplete, onDelete }) => {
    return (
        <form>
            { tasks.map( task => (
                <div key={ task.id }>
                    <Task  task={ task } onComplete={ onComplete }/>
                    { task.checked && <MdDeleteOutline onClick={ () => onDelete(task.id) }/> }
                </div>
            ))}
            { tasks.every( task => task.checked ) && <DeleteAll onDelete={onDelete}/>}
        </form>
    );
};

export default TaskList;
