import React from 'react'
import Notes from './Notes';

export default function NoteShow(props) {
    
    const onDelete = (id) =>{
        props.filterData((oldData)=>{
            oldData.filter((curData , index)=>{
                console.log(id);
                return index !== id;
            })
        })
    }
    return (
        <>
        
        <div className='notes-body'>
        {
        props.dataOBJ.map((val , Index)=>{
         return( <Notes
          key={Index}
          id={Index}
          title = {val.title}
          description = {val.description}
          deleteItem = {onDelete}
          />);
        })
      }
    </div>
    </>
  )
}
