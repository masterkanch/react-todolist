import Form from './Components/Form'
import Header from './Components/Header'
import {useState} from 'react'
import Tasks from './Components/Tasks'


function App() {
  const [list, setlist] = useState([])

  const ondelete = (id) => {
    setlist(list.filter((list) => list.id !== id))
  }

  const addList = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newlist = {id,task}
    setlist([...list,newlist])
  }

  return (
    <div className="App">
      <Header/>
      <Form onAdd={addList}/>
      <Tasks lists={list} onDelete={ondelete}/>
    </div>
  );
}

export default App;
