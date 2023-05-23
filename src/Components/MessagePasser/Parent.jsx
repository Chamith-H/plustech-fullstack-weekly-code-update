import Child from "./Child"
import { useState } from "react"

function Parent() {
    const [childMsg, setChildMsg] = useState('')

    function from_ChildMSG(childMsg) {
        setChildMsg(childMsg)
    }

    return (
        <div className="Parent">
            <h2>I am the Parent</h2>
            <p>From child : {childMsg}</p>

            <Child FromParent="Hi Child" ToParent={(msg)=> from_ChildMSG(msg)}/>
        </div>
    )
}

export default Parent