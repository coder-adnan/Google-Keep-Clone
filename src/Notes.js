import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
export default function Notes(props) {
  const deleteNote = () =>{ 
    props.deleteItem(props.id);
  }
  return (<>
    <div className="notes">
    <div className="notes-title">
    <h1>{props.title}</h1>
    <hr />
    </div >
    <div className="noteDetails">
    <p>{props.description}</p>

    </div>
    <div className="delButton">
    <Button className='delete-icon'
    onClick={deleteNote}>
      <DeleteIcon/>
      </Button>
      </div>
    </div>
</>
  )
}
