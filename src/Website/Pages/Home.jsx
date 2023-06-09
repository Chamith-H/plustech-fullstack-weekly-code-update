import Request from "../../Request"

function Home() {
    const haddle_myData =async()=> {
        // try {
        //     const mydata = await Axios.get("http://127.0.0.1:8000/user/userobject")
        //     console.log(mydata)
        // }

        // catch(err) {
        //     console.log(err)
        // }
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
            <h1>Home is working</h1>

            <button onClick={haddle_myData}>Get my data</button>
            <button onClick={posting_myData}>Post My data</button>
        </div>
    )
}

export default Home