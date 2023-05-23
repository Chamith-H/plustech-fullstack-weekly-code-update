import { useState } from "react"
import ChildLive from "./ChildLive"

function ParentLive() {

    const [msg, setMsg] = useState('')
    const [childMsg, setChildMsg] = useState('')

    const [sendMsg, setSendMsg] = useState('')

    function send_Message_to_Child() {
        setSendMsg(msg)
    }


    function SaveChildMsg(childSend) {
        setChildMsg(childSend)
    }

    return (
        <div className="Parent-Live">
            <h2>I am the parent</h2>
            <p>Message from child : {childMsg}</p>
            <input 
                type="text" 
                placeholder="Send message to child"
                onChange={(event) => setMsg(event.target.value)}
            />

            <button onClick={send_Message_to_Child}>Send to child</button>

            <ChildLive Msg={sendMsg} GetMessage={(child) => SaveChildMsg(child)}/>
        </div>
    )
}

export default ParentLive