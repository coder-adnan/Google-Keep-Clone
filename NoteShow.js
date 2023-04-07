import React from 'react'
import Notes from './src/Notes';

export default function NoteShow(props) {
  return (
    <div className='notes-body'>
        <Notes title={props.title} description = {props.description}/>
    </div>
  )
}
