// import { Axios } from "axios";     ----> Error line previous
import Axios from "axios";  //   ------> Correct form
import { Component } from "react";

class Request extends Component {
    serverURL = "http://127.0.0.1:8000"

    post_ActionMyData(data) {
        const route = "/user"
        const path = "/posting"

        return Axios.post(this.serverURL + route + path, data)
    }

}

export default Request