import axios from "axios";

const BASE_URL = "http://localhost:27017/SSD-NEOS/API.sentry";

export function getResponse() {
    return axios.get(BASE_URL + "/findAllResponses");
}

