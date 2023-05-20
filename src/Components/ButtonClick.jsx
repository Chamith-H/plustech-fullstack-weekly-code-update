import "../Styles/ButtonClick.css"
import { useState } from "react"

function ButtonClick() {

    const [text, setText] = useState("My text")
    const [isRed, setISRed] = useState(true)

    function handle_Click() {
        setText("Edited new text")
    }

    function change_Style() {
        setISRed(!isRed)
    }

    return (
        <div className="ButtonClick">
            <button onClick={handle_Click}>Click me</button>

            <button onClick={change_Style}>Change Style</button>

            <h1>{text}</h1>

            <div className={isRed?"Red-Div-Tag division":"Blue-Div-Tag division"}>
                <p>Sample content</p>
            </div>
        </div>
    ) 
}

export default ButtonClick