import Request from "../../Request"
import { useState } from "react"

function Home() {

    const [users, setUsers] = useState([])

    const haddle_myData =async()=> {
        try {
            const request = new Request
            const response = await request.get_AllUsers()
            setUsers(response.data)
        }

        catch(err) {
            console.log("system error")
        }
    }

    const posting_myData =async()=> {
        
        try {

            const dataset = {
                name:'Chamith',
                industry:'SE'
            }
    
            const request = new Request
            const response = await request.post_ActionMyData(dataset)
            console.log(response)
            
        }

        catch(error) {
            console.log(error)
        }
    }


    return (
        <div className="Home">

            {/* <div className="row">
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-success">
                    <p>Testing column 1</p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-danger">
                    <p>Testing column 2</p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-secondary">
                    <p>Testing column 3</p>
                </div>

                <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 bg-warning">
                    <p>Testing column 4</p>
                </div>
            </div> */}

            <div className="row g-0">
                {users.map((user) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-2 border border-primary">
                        <p>{user.name}</p>
                        <h2>{user.phone}</h2>
                    </div>
                
                ))}
            </div>

            <button className="bg-danger" onClick={haddle_myData}>Get Action</button>
            <button className="bg-success" onClick={posting_myData}>Post My data</button>

        </div>
    )
}

export default Home