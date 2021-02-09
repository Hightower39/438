import {useState} from "react"
import TextInput from "./TextInput"


function NamePicker(){
    const [showInput, setShowInput] = useState(false)
    const [username, setUsername] = useState("")
    
    if  (showInput) {
        return <div className="name-picker">
            <input value={username}
                placeholder="Username"
                onChange={e=> setUsername(e.target.value)}
                
            />
            <button onClick={()=>setShowInput(false)}  className="user-button">
                OK
            </button>
        </div>
    }
    
    return <div className="name-picker">
        <div>{username}</div>
        <button onClick={()=>setShowInput(true)}  className="user-button">
            Set Username
        </button>
    </div>
}
export default NamePicker