// Show Single task

const Task = ({ task, onComplete }) => {
    return (
        <div className='form-group'>
            <input type='checkbox'
                    id={ task.id }
                    defaultChecked={ task.checked }
                    onChange={ () => onComplete(task.id) }></input>
                { task.checked ? (
                    <s><label htmlFor={ task.id }>{ task.title }</label></s>

                ) : (
                    <label htmlFor={ task.id }>{ task.title }</label>
                )
                }
        </div>
    );
};

export default Task;
