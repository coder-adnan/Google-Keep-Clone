import React, {useState} from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
export default function Keepinput(props) {
  
  const [note , setNote] = useState({
    title : '',
    description : ''
  })
  
  const InputEvent = (event)=>{
    const {value , name } = event.target;

    setNote((prevData)=>{
      return {
        ...prevData ,  
        [name] : value,
      };
    })
  }
  const addEvent = () =>{
    props.passNote(note);
  }

  return (
    <>
    <section className='inputSection'>
    <input 
    type="text" 
    name='title'
    value={note.title} 
    onChange={InputEvent} 
    placeholder='Title' />

    <textarea 
    placeholder="Enter Note!" 
    value={note.description} 
    onChange={InputEvent} 
    name="description" 
    id="" 
    cols="50" 
    rows="10">

    </textarea >
    </section>
    <Button onClick={addEvent}>
    <AddIcon className='plus-icon'/>
      </Button>
    </>
  )
}
