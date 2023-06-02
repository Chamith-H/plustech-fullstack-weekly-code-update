import { Routes, BrowserRouter as Router, Route } from "react-router-dom"
import "../../WebsiteStyles/Layout/Routings.css"
import Home from "../Pages/Home"
import Categories from "../Pages/Categories"
import About from "../Pages/About"

function Routings() {
    return (
        <div className="Routings">
            <Router>
                <Routes>
                    <Route path='/' element={ <Home/> }></Route>
                    <Route path='/categories' element={ <Categories/> }></Route>
                    <Route path='/about-us' element={ <About/> }></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Routings