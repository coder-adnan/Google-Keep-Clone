import React from 'react'
import Notes from './Notes'

export default function NotesBody(props) {
  return (
    <div className='notes-body'>
        <Notes title = {props.title} description = {props.description} />
    </div>
  )
}
