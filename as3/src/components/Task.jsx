import React from 'react'; 
import Child from './Child';

function Task({tasks, onDelete, onEdit}){
    return(
        <div>
            {tasks.map((item, index)=> (
                <Child key={index} item={item} onDelete={() => onDelete(index)} onEdit={() => onEdit(index)}></Child>
            ))}
        </div>
    )
}

export default Task;