// import { Axios } from "axios";     ----> Error line previous
 //   ------> Correct form
import Axios from "axios";
import { Component } from "react";

class Request extends Component {
    serverURL = "http://127.0.0.1:8000"

    post_ActionMyData(data) {
        const route = "/user"
        const path = "/posting"

        return Axios.post(this.serverURL + route + path, data)
    }

    get_AllUsers() {
        const route = "/user"
        const path = "/allUsers"

        return Axios.get(this.serverURL + route + path)
    }

}

export default Request