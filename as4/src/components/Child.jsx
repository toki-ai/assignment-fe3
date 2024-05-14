import React from 'react'; 
function Child({item}){
    return(
        <div>
            <p>{item.username}</p>
            <p>{item.email}</p>
        </div>
    )
}

export default Child;