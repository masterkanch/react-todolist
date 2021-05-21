import Form from './Components/Form'
import Header from './Components/Header'
import {useState} from 'react'
function App() {
  const [list, setlist] = useState([])
  return (
    <div className="App">
      <Header/>
      <Form/>
    </div>
  );
}

export default App;
