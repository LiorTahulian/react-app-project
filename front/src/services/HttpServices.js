import axios from "axios";
import config from "../config.json"

export function setCommonHeader(headerName, value) {
    axios.defaults.headers.common[headerName] = value;
}

axios.defaults.baseURL = config.apiUrl

const httpService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    patch: axios.patch,
    delete: axios.delete,
    setCommonHeader
}

export default httpService;