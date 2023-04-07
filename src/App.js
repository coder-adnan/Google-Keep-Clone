import React , {useState} from 'react'
import './App.css';
import Header from './Header';
import Keepinput from './Keepinput';
import NoteShow from './NoteShow';
function App() {
  const [addItem , setAddItem] = useState([]);

  const addNote = (note) =>{
    setAddItem((preData)=>{
      return [...preData , note]
    })
  }

  return(<>
  <Header/>
  <Keepinput passNote = {addNote}/>
  <NoteShow dataOBJ ={addItem} filterData={setAddItem}/>
  </>
  ) 
}

export default App;
