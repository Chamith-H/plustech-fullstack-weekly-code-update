import "./App.css"
import BookList from "./Components/BookList";
import ButtonClick from "./Components/ButtonClick";
import FirstComponent from "./Components/FirstComponent";
import EventCheck from "./Components/Focus-blur/EventCheck";
import ParentLive from "./Components/LiveMessage/ParentLive";
import Parent from "./Components/MessagePasser/Parent";


function App() {
  
  return (
    <div className="App">
       <ParentLive/>
    </div>
  );
}

export default App;
