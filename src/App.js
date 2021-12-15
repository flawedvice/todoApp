import { useState, useEffect } from 'react';
import TaskFilter from './components/TaskFilter';


function App() {

    const [ tasks, setTasks ] = useState([
        {
            id: 1,
            title: "Do coding challenges",
            checked: false
        },
        {
            id: 2,
            title: "Do coding challenges",
            checked: false
        },
        {
            id: 3,
            title: "Do coding challenges",
            checked: true
        }
    ]);

    const [ visibleTasks, setVisibleTasks ] = useState(tasks);



    const completeTask = (id) => {
        setTasks(
            tasks.map( task => task.id === id ?
                { ...task, checked: !task.checked } : task
            )
        );
    }

    const filterTasks = (e=null) => {
        let filteredTasks = tasks;
        let filter;

        e ? filter = e.target.text.toLowerCase() : filter = null;

        switch (filter) {
            case 'active':
                filteredTasks = tasks.filter( task => task.checked !== true);
                break;
            case 'completed':
                filteredTasks = tasks.filter( task => task.checked === true);
                break;
            default:
                filteredTasks = tasks;
        }

        setVisibleTasks(filteredTasks);

    };

    const addTask = (e) => {

        e.preventDefault();

        let newTask = {
            id: tasks[tasks.length-1].id + 1,
            title: e.target[0].value,
            checked: false
        };


        e.target[0].value = '';

        setTasks( prevTasks => [ ...prevTasks, newTask]);
        console.log(`Tasks: ${tasks.length}`);
    }

    const deleteTask = (id) => {
        console.log(`Deleting Task ${id}`);
        setTasks( tasks => tasks.filter( task => task.id !== id ) );
    }

    useEffect( () => filterTasks(), [tasks]);

    console.log(`Visible Tasks: ${visibleTasks.length}`);
    return (
        <div>
            <h1>#todo</h1>
            <TaskFilter tasks={ visibleTasks }
                        onComplete={ completeTask }
                        onFilter={ filterTasks }
                        onCreate={ addTask }
                        onDelete={ deleteTask }/>
        </div>
    );
}

export default App;
