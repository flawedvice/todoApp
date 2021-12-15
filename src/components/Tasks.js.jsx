/*
 *  Render every Task created where every task has:
 *      - Checkbox
 *      - Label with the name of the task
 */
 function Tasks(props) {

     let tasks = props.tasks.map( task => {
         <input type="checkbox" id={tasks.indexOf(task)} key={tasks.indexOf(task)}/>
         <label for={tasks.indexOf(task)}>{task}</label>
     });

     return (
         <div>
            {tasks}
        </div>
     );
 }


/*
 *  Render Input and Submit
 */


/*
 *  Choose what kind of tasks you want to see:
 *      - All
 *      - Pending
 *      - Completed
 *
 *  Render CreateTask Component and Tasks Component
 */
