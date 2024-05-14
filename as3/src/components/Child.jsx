import React from 'react'; 

function Child({item, onDelete, onEdit}){
    return(
        <div>
            <p>{item}</p>
            <button onClick={onDelete}>X</button>
            <button onClick={onEdit}>Edit</button>
        </div>
    )
}

export default Child;