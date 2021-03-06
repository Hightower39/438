import './App.css';
import TextInput from './TextInput'
import {useState} from "react"
import Message from './Message';
import NamePicker from "./NamePicker"

function App() {
  const [messages,setMessages] = useState([{text:"hello"}])
  return <div className="App">
      
      <header className="header">
        <div className="logo" />
          CHATTER
        <div className="name-picker">
          <NamePicker />
        </div>
      </header>

      <main className="messages">

        {messages.map((m,i)=> {
          return <Message key={i} {...m} />
      })}
      
      </main>

      <TextInput
        send={(t)=> setMessages([{text:t}, ...messages])}
        
      /> 
    </div>
}

export default App;
