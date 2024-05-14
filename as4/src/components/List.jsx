import React from 'react';
import Child from './Child';

function List({data}){
    console.log(data);
    return (
      <ul>
        {data != null 
            ? data.map(item => (<li key={item.id}><Child item={item}></Child></li>)) 
            : null}
      </ul>
    )
  }

export default List;