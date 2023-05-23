import "./EventCheck.css"
import { useState } from "react"

function EventCheck () {

    const [focus, setFocus] = useState(false)

    return (
       <div className="EventCheck">
           <input 
              type="text" 
              placeholder="Focus checking"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
           />

          {focus && (
              <h1>Focused</h1>
          )}

          {!focus && (
              <h1>Not Focussed</h1>
          )}
           
           {/* //-------------------------------------- */}

           {true && (
              <h1>Condition true</h1>
           )}

           {!false && (
              <h1>Condition false</h1>
           )}







           {/* <div className={focus?"Focussed":"Not-Focussed"}>
                
           </div> */}
       </div>
    )
}

export default EventCheck