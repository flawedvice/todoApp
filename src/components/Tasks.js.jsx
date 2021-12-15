/*
 *  Render every Task created where every task has:
 *      - Checkbox
 *      - Label with the name of the task
 */
function Tasks(props) {

    let tasks = props.tasks;
    let taskList = tasks.map( (task) =>
        <div className="form-group" key={tasks.indexOf(task)}>
            <input type="checkbox" id={tasks.indexOf(task)}/>
            <label htmlFor={tasks.indexOf(task)}>{task}</label>
        </div>
    );

    console.log(taskList);

    return (
        <div>
            {taskList}
        </div>
    );
}


/*
 *  Render Input and Submit
 */
function CreateTask() {
    return (
        <form>
            <input type="text" placeholder="add details"/>
            <button>Add</button>
        </form>
    );
}


/*
 *  Choose what kind of tasks you want to see:
 *      - All
 *      - Pending
 *      - Completed
 *
 *  Render CreateTask Component and Tasks Component
 */

function ListTasks() {

    return (
        <div>
            <CreateTask />
            <Tasks tasks={[]}/>
        </div>
    );
}


export default ListTasks;
