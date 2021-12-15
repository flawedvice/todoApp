import TaskList from './TaskList';
import TaskForm from './TaskForm';

const TaskFilter = ({ tasks, onComplete, onFilter, onCreate, onDelete }) => {


    return (
        <div className='container'>
            <nav>
                <div>
                    <a href='#' onClick={(e) => onFilter(e)}>All</a>
                </div>
                <div>
                    <a href='#' onClick={(e) => onFilter(e)}>Active</a>
                </div>
                <div>
                    <a href='#' onClick={(e) => onFilter(e)}>Completed</a>
                </div>
            </nav>
            <TaskForm onCreate={ onCreate }/>
            <TaskList tasks={ tasks } onComplete={ onComplete } onDelete={ onDelete }/>
        </div>
    );
}


export default TaskFilter;
