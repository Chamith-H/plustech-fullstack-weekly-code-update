import { useState } from "react"

function ChildLive( props ) {

    const [msg, setMsg] = useState('')

    function getMessage(event) {
        setMsg(event.target.value)
    }

    props.GetMessage(msg)

    return (
        <div className="Child-Live">
            <h2>I am the child</h2>
            <p>Message from parent : {props.Msg}</p>

            <input 
              type="text" 
              placeholder="Message to parent"
              onChange={(event) => getMessage(event)}
            />

        </div>
    )
}

export default ChildLive