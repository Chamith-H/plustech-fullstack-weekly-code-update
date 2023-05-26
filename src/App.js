import { useEffect, useState } from "react";
import Exception from "./Components/ExceptionHandlings";


function App() {

  // const [changer, setChanger] = useState(0)

  // useEffect(() => {
  //     console.log("Application loaded")
  // }, [changer])

  // function handle_Click() {
  //   setChanger(changer + 1)
  // }
  
  return (
    <div className="App">
        {/* <button onClick={handle_Click}>Click me</button> */}

        <Exception/>
    </div>
  );
}

export default App;
